import type { CrashResult } from '../physics/simulator';

export function HistoryTable({ history }: { history: CrashResult[] }) {
  return (
    <section className="panel">
      <h2>Last runs</h2>
      {history.length === 0 ? (
        <p className="hint">No experiments yet.</p>
      ) : (
        <table className="hist">
          <thead>
            <tr>
              <th>#</th>
              <th>km/h</th>
              <th>kg</th>
              <th>°</th>
              <th>Obstacle</th>
              <th>kN</th>
              <th>Dmg</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h) => (
              <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.impactSpeedKmh.toFixed(0)}</td>
                <td>{h.massKg}</td>
                <td>{h.angleDeg}</td>
                <td>{h.obstacleLabel.replace(' barrier', '').replace('Concrete ', '')}</td>
                <td>{h.forceKN >= 1000 ? `${(h.forceKN / 1000).toFixed(1)}M` : h.forceKN.toFixed(0)}</td>
                <td>
                  <span className={`sev sev-${h.severity} small`}>{h.damagePct.toFixed(0)}%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
