import type { CrashResult } from '../physics/simulator';
import { ASSUMED_IMPACT_TIME_S } from '../physics/damage';

const ZONE_LABEL: Record<string, string> = {
  front: 'Front',
  rear: 'Rear',
  left: 'Left side',
  right: 'Right side',
};

export function ResultPanel({ result }: { result: CrashResult | null }) {
  if (!result) {
    return (
      <section className="panel result empty">
        <h2>Crash results</h2>
        <p className="hint">Run a crash to see measured results.</p>
      </section>
    );
  }
  const r = result;
  return (
    <section className="panel result">
      <h2>
        Crash results <span className={`sev sev-${r.severity}`}>{r.severity}</span>
      </h2>
      <div className="damage-wrap">
        <div className="damage-num">{r.damagePct.toFixed(1)}%</div>
        <div className="damage-bar">
          <div className={`damage-fill fill-${r.severity}`} style={{ width: `${r.damagePct}%` }} />
        </div>
      </div>
      <table className="kv">
        <tbody>
          <tr>
            <td>Configured speed</td>
            <td>{r.configuredSpeedKmh.toFixed(0)} km/h</td>
          </tr>
          <tr>
            <td>Impact speed</td>
            <td>{r.impactSpeedKmh.toFixed(1)} km/h</td>
          </tr>
          <tr>
            <td>Vehicle mass</td>
            <td>{r.massKg} kg</td>
          </tr>
          <tr>
            <td>Collision angle</td>
            <td>{r.angleDeg}°</td>
          </tr>
          <tr>
            <td>Obstacle</td>
            <td>{r.obstacleLabel}</td>
          </tr>
          <tr>
            <td>Est. impact force</td>
            <td>
              {r.forceKN >= 1000
                ? `${(r.forceKN / 1000).toFixed(2)} MN`
                : `${r.forceKN.toFixed(0)} kN`}
            </td>
          </tr>
          <tr>
            <td>Primary damage zone</td>
            <td>{ZONE_LABEL[r.primaryZone] ?? r.primaryZone}</td>
          </tr>
          <tr>
            <td>Final position</td>
            <td>
              X {r.finalX.toFixed(1)} m · Z {r.finalZ.toFixed(1)} m
            </td>
          </tr>
          <tr>
            <td>Final rotation (yaw)</td>
            <td>{r.finalYawDeg.toFixed(1)}°</td>
          </tr>
          <tr>
            <td>KE before / after</td>
            <td>
              {r.keBeforeMJ.toFixed(2)} MJ → {r.keAfterMJ.toFixed(2)} MJ
            </td>
          </tr>
          <tr>
            <td>Obstacle displaced</td>
            <td>{r.obstacleMovedM.toFixed(2)} m</td>
          </tr>
          <tr>
            <td>Time to impact</td>
            <td>{r.timeToImpactS.toFixed(2)} s</td>
          </tr>
        </tbody>
      </table>
      <p className="fine">
        Force = normal impulse ÷ assumed {(ASSUMED_IMPACT_TIME_S * 1000).toFixed(0)} ms impact
        duration — an estimate, not a measured value.
      </p>
    </section>
  );
}
