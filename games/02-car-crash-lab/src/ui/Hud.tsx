import type { LabApi } from '../hooks/useCarCrashLab';

const PHASE_LABEL: Record<string, string> = {
  idle: 'READY',
  running: 'APPROACHING',
  impacted: 'IMPACT!',
  settled: 'SETTLED',
};

export function Hud({ lab }: { lab: LabApi }) {
  const { snap } = lab;
  return (
    <>
      <div className="hud">
        <div className={`phase phase-${snap.phase}`}>{PHASE_LABEL[snap.phase] ?? snap.phase}</div>
        <div className="big-speed">{snap.speedKmh.toFixed(1)}</div>
        <div className="unit">km/h — live simulated speed</div>
        <div className="pos">
          X {snap.x.toFixed(1)} m · Z {snap.z.toFixed(1)} m · yaw {snap.yawDeg.toFixed(0)}°
        </div>
        {snap.obstacleMovedM > 0.02 && <div className="pos obs-moved">obstacle moved {snap.obstacleMovedM.toFixed(1)} m</div>}
      </div>
      {snap.phase === 'impacted' && !lab.result && (
        <div className="banner">IMPACT DETECTED — recording post-crash state…</div>
      )}
      <div className="camhint">drag to orbit · wheel to zoom</div>
    </>
  );
}
