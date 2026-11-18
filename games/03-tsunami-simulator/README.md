# Tsunami Disaster Simulator (3D)

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

A real-time, browser-based, true-3D tsunami flood simulator for a small coastal
city, built with **TypeScript + React + Vite + Three.js**. Terrain, roads,
buildings, cars and pedestrians are generated procedurally in code — no assets,
no backend.

## Run

```bash
npm install
npm run dev
```

Open the printed URL (default http://localhost:5173). Set a wave height, press
**START TSUNAMI**, watch the wave enter from the west-side ocean and flood the
low terrain first, and drag the mouse to orbit the perspective camera.

## Water propagation model

A 128×128 cell grid (4 m cells, 512 m domain) stores terrain elevation and
water depth per cell. Propagation uses a virtual-pipes shallow-water scheme:
each substep, a per-edge flux is accumulated from the hydraulic-head
(elevation + depth) difference with the 4 neighbours (`f += dt·g·Δh/Δx`),
scaled down if it would drain a cell below its available volume, then depths
are updated by flux divergence. A cell only floods when water physically
arrives from a neighbour, so low ground fills first, depressions pool, hills
delay/prevent flooding, and dipped road cells channel the flow. The ocean
columns are held at `sea level + wave-height ramp` and act as the boundary
source that drives the wave inland. Depth-averaged velocity is estimated from
net flux for foam and drag.

## Object force model

Cars feel quadratic hydrodynamic drag
`F = ½·ρ·Cd·A·|v_rel|·v_rel · min(depth/1.1, 1)` from the locally sampled
water velocity. Below ~0.45 m water, ground friction (≈4.5 /s) pins them;
above buoyancy threshold friction is removed, lateral impacts add angular
velocity (cars rotate), and they drift/collide with building AABBs and clamp
at the map edge. People flee uphill along the elevation gradient when warned
and are advected by the flow if water exceeds ~0.9 m.

## Structure

```
src/
  main.tsx, App.tsx, styles.css     React UI (controls, stats, legends)
  sim/
    constants.ts                    grid/world constants & helpers
    terrain.ts                      procedural elevation, roads, city, spawns
    water.ts                        shallow-water solver, tsunami source
    objects.ts                      car hydrodynamics + pedestrian flee logic
    simulation.ts                   loop orchestration + flood statistics
  three/
    SceneView.ts                    Three.js scene, meshes, per-frame updates
```

The simulation loop is plain TS (`sim/`), fully decoupled from React;
React only reads `Simulation.getStats()` at 5 Hz and issues control commands.
Rendering uses one terrain height-field mesh, one dynamic water surface mesh
(RGBA vertex colors, foam at the front), and instanced meshes for
buildings/cars/people — no per-cell React components.

## Simplifications / assumptions

- Heights are stylized meters; wave rise saturates in ~6 s (exp ramp + crest).
- Buildings do not block grid flow (they do block cars); no CFD wakes.
- Grid is height-field only (vertical cliffs not representable).
- Runoff/rainfall ignored; once inland, water mainly settles rather than
  fully draining back.

## Acceptance checklist

- [x] 1. Coastal city with visible 3D terrain elevation (perspective camera, hill shading, legend)
- [x] 2. Roads (dipped, water-channeling) and ~40+ 3D buildings
- [x] 3. 16 movable parked cars + 40 pedestrians
- [x] 4. Wave-height slider 1–20 m affecting inundation extent, depth and force
- [x] 5. Large `START TSUNAMI` button begins a progressive time-stepped run
- [x] 6. Water enters from the ocean boundary (west) and advances inland
- [x] 7. Low coastal/basin cells flood before hills (head-difference physics)
- [x] 8. Spread continues over minutes of sim time
- [x] 9. Small wave stops low; big wave reaches far inland (verify by rerun)
- [x] 10. Cars pushed, rotated, drifted, stopped by buildings
- [x] 11. `Flooded Area: XX%` computed from actual land cells with depth > 0.1 m (ocean excluded)
- [x] 12. RESET restores water, objects, counters and event state
- [x] 13. Multiple runs without refresh (stateless reset, no leaks in loop)
- [x] 14. 16k-cell grid + ~100 objects in typed arrays with instanced rendering
