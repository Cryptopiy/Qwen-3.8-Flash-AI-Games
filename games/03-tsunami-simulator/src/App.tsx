import { useEffect, useRef, useState } from 'react';
import { Simulation, type Stats } from './sim/simulation';
import { SceneView } from './three/SceneView';

const INITIAL: Stats = {
  running: false,
  elapsed: 0,
  floodedPct: 0,
  maxDepth: 0,
  floodedBuildings: 0,
  totalBuildings: 0,
  displacedCars: 0,
  totalCars: 0,
  sweptPeople: 0,
  safePeople: 0,
  totalPeople: 0,
  phase: 'Pre-wave calm',
};

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const simRef = useRef<Simulation | null>(null);
  const viewRef = useRef<SceneView | null>(null);
  const [waveH, setWaveH] = useState(8);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [overlay, setOverlay] = useState(false);
  const [stats, setStats] = useState<Stats>(INITIAL);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap = wrapRef.current!;
    const sim = new Simulation();
    sim.speed = 2;
    const view = new SceneView(canvas, sim.world, sim.cars.length, sim.people.length);
    simRef.current = sim;
    viewRef.current = view;

    const doResize = () => view.resize(wrap.clientWidth, wrap.clientHeight);
    doResize();
    window.addEventListener('resize', doResize);

    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      sim.update(dt);
      view.updateWater(sim.water, sim.water.time + now / 1000);
      view.updateBuildings();
      view.updateCars(sim.cars);
      view.updatePeople(sim.people);
      view.render();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const statsId = window.setInterval(() => {
      setStats(sim.getStats());
      setRunning(sim.water.running);
      setPaused(sim.paused);
    }, 200);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(statsId);
      window.removeEventListener('resize', doResize);
      view.dispose();
    };
  }, []);

  const onStart = () => {
    simRef.current?.setWaveHeight(waveH);
    simRef.current?.start();
  };
  const onReset = () => {
    const sim = simRef.current;
    if (!sim) return;
    sim.reset();
    setStats(sim.getStats());
    setRunning(false);
    setPaused(false);
  };

  return (
    <div className="app" ref={wrapRef}>
      <canvas ref={canvasRef} className="scene" />

      <div className="panel controls">
        <h1>Tsunami Simulator</h1>
        <div className="row">
          <label>
            Wave height: <b>{waveH} m</b>
          </label>
          <input
            type="range"
            min={1}
            max={20}
            step={0.5}
            value={waveH}
            onChange={(e) => {
              const v = Number(e.target.value);
              setWaveH(v);
              simRef.current?.setWaveHeight(v);
            }}
          />
        </div>
        <button
          className="start"
          onClick={onStart}
          disabled={running}
        >
          {running ? 'TSUNAMI ACTIVE' : 'START TSUNAMI'}
        </button>
        <div className="btnrow">
          <button onClick={onReset}>RESET</button>
          <button
            disabled={!running}
            onClick={() => {
              const sim = simRef.current;
              if (!sim) return;
              sim.paused = !sim.paused;
              setPaused(sim.paused);
            }}
          >
            {paused ? 'RESUME' : 'PAUSE'}
          </button>
        </div>
        <div className="row">
          <label>Speed</label>
          <div className="btnrow speeds">
            {[1, 2, 4, 8].map((s) => (
              <button
                key={s}
                className={speed === s ? 'on' : ''}
                onClick={() => {
                  setSpeed(s);
                  if (simRef.current) simRef.current.speed = s;
                }}
              >
                {s}×
              </button>
            ))}
          </div>
        </div>
        <label className="check">
          <input
            type="checkbox"
            checked={overlay}
            onChange={(e) => {
              setOverlay(e.target.checked);
              viewRef.current?.setOverlay(e.target.checked);
            }}
          />
          Elevation overlay (contours)
        </label>
        <p className="hint">Drag to orbit · scroll to zoom · right-drag to pan</p>
      </div>

      <div className="panel stats">
        <div className="big">
          Flooded Area: <span>{stats.floodedPct.toFixed(1)}%</span>
        </div>
        <div className="grid">
          <div>Max water depth</div><div>{stats.maxDepth.toFixed(2)} m</div>
          <div>Elapsed sim time</div><div>{stats.elapsed.toFixed(0)} s</div>
          <div>Flooded buildings</div><div>{stats.floodedBuildings} / {stats.totalBuildings}</div>
          <div>Displaced vehicles</div><div>{stats.displacedCars} / {stats.totalCars}</div>
          <div>People swept away</div><div>{stats.sweptPeople} / {stats.totalPeople}</div>
          <div>People on high ground</div><div>{stats.safePeople}</div>
        </div>
        <div className="phase">{stats.phase}</div>
      </div>

      <div className="panel legend">
        <div className="lgtitle">Elevation (m)</div>
        <div className="ramp elev" />
        <div className="lgs"><span>0</span><span>8</span><span>16</span><span>24</span></div>
        <div className="lgtitle">Water depth (m)</div>
        <div className="ramp depth" />
        <div className="lgs"><span>0</span><span>2</span><span>4</span><span>8+</span></div>
      </div>
    </div>
  );
}
