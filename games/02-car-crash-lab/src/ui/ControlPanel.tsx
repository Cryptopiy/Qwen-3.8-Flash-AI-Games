import { OBSTACLES } from '../physics/obstacles';
import type { RunParams } from '../physics/simulator';

interface Props {
  params: RunParams;
  running: boolean;
  paused: boolean;
  slowMo: boolean;
  onParam: (p: Partial<RunParams>) => void;
  onRun: () => void;
  onReset: () => void;
  onPause: () => void;
  onSlowMo: () => void;
}

export function ControlPanel({ params, running, paused, slowMo, onParam, onRun, onReset, onPause, onSlowMo }: Props) {
  return (
    <section className="panel">
      <h2>Crash parameters</h2>

      <label className="slider">
        <span className="row">
          <span>Vehicle speed</span>
          <b>{params.speedKmh} km/h</b>
        </span>
        <input
          type="range"
          min={10}
          max={200}
          step={5}
          value={params.speedKmh}
          disabled={running}
          onChange={(e) => onParam({ speedKmh: Number(e.target.value) })}
        />
      </label>

      <label className="slider">
        <span className="row">
          <span>Vehicle mass</span>
          <b>{params.massKg} kg</b>
        </span>
        <input
          type="range"
          min={700}
          max={3000}
          step={50}
          value={params.massKg}
          disabled={running}
          onChange={(e) => onParam({ massKg: Number(e.target.value) })}
        />
      </label>

      <label className="slider">
        <span className="row">
          <span>Collision angle</span>
          <b>{params.angleDeg}°</b>
        </span>
        <input
          type="range"
          min={-60}
          max={60}
          step={1}
          value={params.angleDeg}
          disabled={running}
          onChange={(e) => onParam({ angleDeg: Number(e.target.value) })}
        />
      </label>

      <div className="field">
        <span className="lbl">Obstacle type</span>
        <div className="obstacles">
          {OBSTACLES.map((o) => (
            <button
              key={o.id}
              type="button"
              className={params.obstacleId === o.id ? 'obs active' : 'obs'}
              disabled={running}
              onClick={() => onParam({ obstacleId: o.id })}
              title={o.description}
            >
              {o.label}
            </button>
          ))}
        </div>
        <p className="hint">{OBSTACLES.find((o) => o.id === params.obstacleId)?.description}</p>
      </div>

      <div className="actions">
        <button type="button" className="run" onClick={onRun} disabled={running}>
          RUN CRASH
        </button>
        <button type="button" className="ghost" onClick={onReset}>
          RESET
        </button>
      </div>
      <div className="actions">
        <button type="button" className="ghost" onClick={onPause} disabled={!running}>
          {paused ? 'RESUME' : 'PAUSE'}
        </button>
        <button type="button" className={slowMo ? 'toggle on' : 'toggle'} onClick={onSlowMo}>
          SLOW-MO ×0.25
        </button>
      </div>
    </section>
  );
}
