import { Scene } from './three/Scene';
import { useCarCrashLab } from './hooks/useCarCrashLab';
import { ControlPanel } from './ui/ControlPanel';
import { ResultPanel } from './ui/ResultPanel';
import { HistoryTable } from './ui/HistoryTable';
import { ModelInfo } from './ui/ModelInfo';
import { Hud } from './ui/Hud';

export default function App() {
  const lab = useCarCrashLab();
  const running = lab.snap.phase === 'running' || lab.snap.phase === 'impacted';

  return (
    <div className="app">
      <aside className="sidebar">
        <header>
          <h1>
            CAR CRASH <span>LAB</span>
          </h1>
          <p className="sub">Real-time 3D rigid-body collision testbed</p>
        </header>
        <ControlPanel
          params={lab.params}
          running={running}
          paused={lab.paused}
          slowMo={lab.slowMo}
          onParam={lab.setParam}
          onRun={lab.run}
          onReset={lab.reset}
          onPause={lab.togglePause}
          onSlowMo={lab.toggleSlowMo}
        />
        <ResultPanel result={lab.result} />
        <HistoryTable history={lab.history} />
        <ModelInfo />
      </aside>
      <main className="stage">
        <Scene sim={lab.sim} />
        <Hud lab={lab} />
      </main>
    </div>
  );
}
