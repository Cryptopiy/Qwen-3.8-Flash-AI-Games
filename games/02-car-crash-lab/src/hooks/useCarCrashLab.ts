import { useEffect, useRef, useState } from 'react';
import { Simulator, type CrashResult, type RunParams, defaultParams } from '../physics/simulator';

export interface SimSnapshot {
  phase: Simulator['phase'];
  speedKmh: number;
  x: number;
  z: number;
  yawDeg: number;
  obstacleMovedM: number;
}

export interface LabApi {
  sim: Simulator;
  params: RunParams;
  setParam: (p: Partial<RunParams>) => void;
  run: () => void;
  reset: () => void;
  togglePause: () => void;
  toggleSlowMo: () => void;
  paused: boolean;
  slowMo: boolean;
  result: CrashResult | null;
  history: CrashResult[];
  snap: SimSnapshot;
}

export function useCarCrashLab(): LabApi {
  const simRef = useRef<Simulator | null>(null);
  if (!simRef.current) simRef.current = new Simulator();
  const sim = simRef.current;

  const [params, setParams] = useState<RunParams>(() => ({ ...defaultParams() }));
  const [result, setResult] = useState<CrashResult | null>(null);
  const [history, setHistory] = useState<CrashResult[]>([]);
  const [paused, setPaused] = useState(false);
  const [slowMo, setSlowMo] = useState(false);
  const [snap, setSnap] = useState<SimSnapshot>({
    phase: 'idle',
    speedKmh: 0,
    x: 0,
    z: 0,
    yawDeg: 0,
    obstacleMovedM: 0,
  });

  useEffect(() => {
    sim.onResult = (r) => {
      setResult(r);
      setHistory((h) => [r, ...h].slice(0, 8));
    };
    return () => {
      sim.onResult = null;
    };
  }, [sim]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSnap({
        phase: sim.phase,
        speedKmh: sim.speedKmh,
        x: sim.car.x,
        z: sim.car.z,
        yawDeg: ((sim.car.yaw * 180) / Math.PI + 540) % 360 - 180,
        obstacleMovedM: sim.obstacleMovedM,
      });
    }, 100);
    return () => window.clearInterval(id);
  }, [sim]);

  const setParam = (p: Partial<RunParams>) => {
    const next = { ...params, ...p };
    sim.setParams(next);
    setParams({ ...sim.params });
    setResult(null);
  };

  const run = () => {
    setResult(null);
    sim.run();
    setSnap((s) => ({ ...s, phase: 'running' }));
  };

  const reset = () => {
    sim.reset();
    setParams({ ...sim.params });
    setResult(null);
    setPaused(false);
  };

  const togglePause = () => {
    sim.paused = !sim.paused;
    setPaused(sim.paused);
  };

  const toggleSlowMo = () => {
    const next = !slowMo;
    setSlowMo(next);
    sim.timeScale = next ? 0.25 : 1;
  };

  return { sim, params, setParam, run, reset, togglePause, toggleSlowMo, paused, slowMo, result, history, snap };
}
