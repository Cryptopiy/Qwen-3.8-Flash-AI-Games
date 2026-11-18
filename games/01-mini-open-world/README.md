# Mini Open World

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

A compact real-time 3D open-world browser sandbox: walk the city, carjack parked cars, complete a delivery mission, and survive police pursuit.

Built with **TypeScript + React + Vite + Three.js** (true 3D perspective renderer, procedural geometry, no external assets, no backend).

## Run

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

## Controls

| Key | Action |
| --- | --- |
| `W A S D` / arrows | Move on foot / drive (throttle, steer, brake-reverse) |
| `Shift` | Run |
| `E` | Enter / exit a vehicle (parked & mission cars) |
| `Space` | Handbrake |
| `R` | Restart mission |
| Mouse drag | Orbit camera |
| Mouse wheel | Zoom |

## How to play

1. Walk to the **green mission marker** at the west side of the map.
2. Enter the **orange-marked car** (hint appears near any car; press `E`).
3. Drive to the **gold drop-off marker** within 90 seconds.
4. Crimes (running over pedestrians, smashing traffic/police cars, entering the red **police precinct zone**) raise the wanted level (`★` in HUD). Patrol cars spawn and pursue you on foot and while driving. Get cornered on foot at low police speed and you get **BUSTED**. Wanted heat decays while you keep clean.
5. `R` restarts the mission anytime.

## Implemented systems

- **World**: 5x5 road grid, 16 blocks with sidewalks, procedurally generated buildings (window textures), trees, parked cars, traffic-lane waypoint graph, police precinct with restricted zone.
- **Player on foot**: camera-relative 8-direction movement, run, limb animation, circle-vs-box/capsule collision against buildings, obstacles and every car.
- **Vehicles**: acceleration, top speed, drag, brake/reverse, speed-dependent steering with inertia (no instant rotation), handbrake, collision response (bounce, speed loss), enter/exit with safe non-colliding exit placement.
- **NPC pedestrians**: walk/wait/flee state machine with per-ped random speed, waypoint sidewalk routing, obstacle avoidance, panic-flee from fast cars and sirens, knock-down + respawn.
- **Traffic AI**: cars follow lane-offset node graph through intersections, slow when blocked (vehicles/pedestrians ahead), reroute when stuck, push-out collisions.
- **Police / wanted system**: heat-based crime model (ped hits, car damage, precinct trespass, ramming police), 3 wanted levels, chase AI targeting you on foot or driving, flashing light bars, escape timer, bust + respawn.
- **Mission**: full state machine (approach → get car → timed delivery → success/fail), glowing destination markers, car beacon, restart.
- **Collision**: circle-cluster OBB approximation for cars vs AABB buildings, circle-circle for cars/peds/obstacles; NaN-safe sanitizers.
- **Camera**: third-person perspective rig, smooth follow, chase-mode when driving, drag-orbit + wheel zoom, never top-down.
- **Rendering**: perspective camera, directional + hemisphere light, real-time shadows, fog, procedural geometry/materials only.
- **HUD (React)**: mode, speed, objective, mission state, wanted stars, context hints, banners; simulation state kept out of React, synced via a lightweight store at 10 Hz.

## Structure

```
src/
├─ main.tsx / App.tsx / styles.css      # React shell
├─ ui/                                   # HUD component + store
│  ├─ HUD.tsx
│  └─ hudStore.ts
└─ game/
   ├─ engine.ts                          # game loop, systems orchestration
   ├─ core/                              # types, input, math utils
   ├─ physics/collision.ts               # AABB / circle / OBB-approx collision
   ├─ world/                             # city data generator + 3D world builder
   ├─ entities/models.ts                 # procedural car/character meshes
   ├─ render/cameraRig.ts                # third-person chase camera
   └─ systems/mission.ts                 # mission state machine + markers
```

## Notes

- `npm run build` runs `tsc --noEmit` first — the project type-checks clean.
- Everything is deterministic (seeded RNG) for stable layout between runs.
