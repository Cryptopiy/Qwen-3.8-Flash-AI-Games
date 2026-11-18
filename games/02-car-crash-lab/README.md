# Car Crash Lab — real-time 3D browser crash-test simulator

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

True 3D (perspective camera, real geometry, 3D collision volumes) interactive car
crash laboratory built with **TypeScript + React + Vite + Three.js (React Three Fiber)**.

## Run

```bash
npm install
npm run dev
```

Open the printed URL (default http://localhost:5173). No backend, no assets, no API keys.

## Controls

- **Vehicle speed** 10–200 km/h, **mass** 700–3000 kg, **collision angle** −60°…+60°, **obstacle type**
  (concrete wall / heavy water barrier / light barricade).
- **RUN CRASH** launches the simulation, **RESET** restores the scene, optional **PAUSE** and **SLOW-MO ×0.25**.
- Drag to orbit, wheel to zoom. The camera follows the car and shakes on high-energy impacts.

After each run the result panel shows impact speed, estimated impact force, damage %,
severity, damage zone, final X/Z position, final yaw, kinetic energy before/after and
obstacle displacement. The last 8 runs are listed for comparison.

## Physics model (simplified, deterministic)

- Fixed timestep **120 Hz** planar rigid-body simulation (x, z, yaw): car = body with
  inertia `I = m(L²+W²)/12`, obstacle = body with its own mass (wall = infinite/kinematic).
- **3D collision volumes:** the car footprint is a 3×2 sphere chain (r = 0.6 m) tested
  against the obstacle's oriented box (OBB) in the ground plane; impulses are applied at
  the real 3D contact point.
- **Response:** sequential impulses along the contact normal with restitution `e` and
  Coulomb friction: `j = −(1+e)·v_rel·n / k_eff` (effective mass includes both bodies'
  linear and angular terms). Post-crash tire friction (rolling μ≈0.5, lateral grip μ≈0.78)
  produces rebound, yaw spin, sliding and physically plausible resting poses. Glancing
  angles slide along the wall instead of stopping.
- **Impact force (estimate):** `F ≈ ΣJ_normal / 0.12 s` — total measured normal impulse
  divided by an **assumed 120 ms impact duration** (stated in the UI; not a real measured force).
- **Damage:** absorbed normal energy `E = ½·μ_red·v_n²·(1−e²)·rigidity` (μ_red = reduced
  car/obstacle mass; immovable wall → μ_red = car mass), normalized against a 700 kJ
  reference with a zone factor. Severity bands: 0–20 minor / 20–50 moderate /
  50–80 severe / 80–100 catastrophic. The impacted zone (front/rear/left/right) comes
  from the collision normal in car-local coordinates; deformation and darkening are
  rendered on the matching body panels and intensity scales with damage.
- Obstacles differ physically: wall (immovable, e=0.05, rigidity 1.0), heavy barrier
  (1200 kg movable, e=0.15, rigidity 0.82), light barricade (80 kg, e=0.25, rigidity 0.45).
  Deterministic seeded PRNG is used only for debris scatter.

## File structure

```
src/
├── main.tsx / App.tsx / styles.css      app shell, responsive layout
├── hooks/useCarCrashLab.ts              simulation ⇄ React state bridge (UI sync, history)
├── physics/
│   ├── geometry.ts                      vector/math utilities
│   ├── OBB.ts                           oriented-box vs sphere collision test
│   ├── obstacles.ts                     obstacle catalogue (mass/restitution/rigidity)
│   ├── damage.ts                        energy→damage model, force estimate, zones
│   └── simulator.ts                     rigid bodies, impulses, friction, impact events,
│                                        debris/sparks/skid state, determinism + clamps
├── three/
│   ├── Scene.tsx                        Canvas, lights, shadows, camera rig (orbit/follow/shake)
│   ├── Car.tsx                          3D vehicle + per-zone deformation rendering
│   ├── Obstacle3D.tsx                   3D obstacles (read from simulated body)
│   ├── Track.tsx                        runway, distance markers, impact zone
│   └── Effects.tsx                      skid marks, debris, sparks
├── ui/
│   ├── ControlPanel.tsx / ResultPanel.tsx / HistoryTable.tsx / Hud.tsx / ModelInfo.tsx
└── utils/                               rng, runtime canvas label textures (no external assets)
```

## Acceptance checklist

1. ✅ speed adjustable 10–200 km/h 2. ✅ mass 700–3000 kg 3. ✅ angle −60°…60° changes the real
3D trajectory/impact geometry 4. ✅ 3 obstacle types with different physics 5. ✅ RUN CRASH runs
a live simulation 6. ✅ collision happens at the selected geometry 7. ✅ rebound/spin/slide after
impact 8. ✅ damage zone deforms visually 9. ✅ obstacle outcomes differ (wall knocks back, light
barricade is destroyed) 10. ✅ Speed / Impact force / Damage / Final position shown 11. ✅ force and
damage scale with speed² 12. ✅ reset + rerun without refresh 13. ✅ last-runs table 14. ✅ clamped,
NaN-guarded, repeated-run safe.
