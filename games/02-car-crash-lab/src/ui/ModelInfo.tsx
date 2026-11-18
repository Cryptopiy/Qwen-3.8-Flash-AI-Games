export function ModelInfo() {
  return (
    <section className="panel">
      <details>
        <summary>Physics model &amp; assumptions</summary>
        <div className="model">
          <p>
            The car is a planar rigid body (mass <code>m</code>, inertia{' '}
            <code>I = m(L²+W²)/12</code>) driven by a fixed-step integrator (120 Hz, deterministic).
            Its collision volume is a 3×2 grid of spheres (r = 0.6 m); obstacles are oriented boxes
            (OBB) with their own mass, restitution and ground friction.
          </p>
          <p>
            Collisions are resolved with sequential impulses along the real 3D contact normal{' '}
            <code>n</code>:
          </p>
          <pre>j = −(1 + e) · v_rel·n ÷ k_eff</pre>
          <p>
            where <code>e</code> is restitution and <code>k_eff</code> accounts for both bodies'
            linear and angular inverse masses. Coulomb friction impulses act tangentially, and
            post-impact tire friction (rolling μ ≈ 0.5, lateral grip μ ≈ 0.78) produces rebound,
            spin and sliding — including glancing angles vs head-on geometry.
          </p>
          <p>
            <b>Impact force (estimate):</b> F ≈ total normal impulse ÷ assumed impact duration of{' '}
            <b>120 ms</b>. This is an engineering estimate, not a measured real-world force.
          </p>
          <p>
            <b>Damage:</b> absorbed normal energy{' '}
            <code>E = ½·μ_red·v_n²·(1−e²)·rigidity</code> (μ_red = reduced mass of car and obstacle)
            normalized against <code>E_ref = 700 kJ</code> per frontal zone factor. Severity:
            0–20 minor, 20–50 moderate, 50–80 severe, 80–100 catastrophic. Damage is applied to the
            zone determined from the actual collision geometry (front / rear / left / right).
          </p>
          <p>
            <b>Obstacles:</b> concrete wall = immovable, rigidity 1.0; heavy barrier = 1200 kg
            movable, rigidity 0.82; light barricade = 80 kg, rigidity 0.45 — visibly different
            outcomes (rebound vs knock-through).
          </p>
        </div>
      </details>
    </section>
  );
}
