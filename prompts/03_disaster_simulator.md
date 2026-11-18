# Prompt — Tsunami Disaster Simulator

You are an autonomous senior simulation, visualization, and frontend engineer. Build a **working real-time 3D browser-based tsunami disaster simulator** for a small coastal island or city.

The central challenge is to simulate a wave entering from the sea, propagating over time, flooding low terrain before high terrain, and physically affecting vehicles and objects.

The result must be an interactive simulation, not a static animation.

## Primary Objective

Create a small coastal environment containing:

- terrain with meaningful elevation;
- roads;
- buildings;
- people and/or vehicles;
- a sea boundary;
- a large `START TSUNAMI` button.

When started, water must advance inland over time.

The simulation must satisfy all of the following:

- low areas flood before higher areas;
- water spreads progressively instead of appearing everywhere at once;
- movable objects can be pushed or carried by water;
- the flooded-area percentage updates during the event;
- the user can change wave height and see a different outcome.

## Technical Requirements

Build the project as a browser application using:

- **TypeScript**
- **React**
- **Vite**
- **Three.js** or **React Three Fiber** for real-time 3D rendering

The simulator must be **true 3D**.

Do not implement the environment as a 2D top-down map, 2D canvas simulation, pseudo-3D scene, isometric projection, CSS-only animation, or pre-rendered animation.

Use a perspective camera, real 3D terrain, 3D buildings, 3D vehicles/objects, lighting, depth, and real 3D transforms.

No backend.

The project must run using:

```bash
npm install
npm run dev
```

Do not require external APIs, paid assets, authentication, or downloaded map data.

Generate the terrain and city locally in code.

Use an actual 3D terrain mesh or height-field mesh whose vertex heights correspond to the simulation elevation data.

## Environment

Create a **fully 3D coastal scene viewed through a perspective camera**.

The user should clearly perceive terrain height, building height, wave depth, and object movement in three-dimensional space.

It must contain:

- visible ocean/sea on one side;
- land extending inland;
- multiple elevation levels;
- low coastal areas;
- at least one elevated safe area;
- roads;
- multiple buildings;
- movable vehicles;
- optional pedestrians or simple human markers.

The map should be large enough to observe the wave progressing through several areas.

## Elevation Model

Represent terrain elevation explicitly.

Possible implementations include:

- a grid-based height field;
- layered elevation zones;
- procedural noise with smoothing;
- manually designed elevation values.

The water simulation must actually consult terrain elevation.

Do not merely color arbitrary areas in a fixed order.

The 3D terrain geometry itself must visibly reflect elevation. Additionally, show elevation with one or more of the following:

- contour-like colors;
- hill shading;
- an optional terrain overlay;
- an elevation legend.

## Tsunami Controls

Provide a control panel with:

### Wave Height

User-adjustable wave height.

Suggested range:

- 1–20 meters

The configured height must affect:

- maximum inundation;
- water depth;
- ability to reach elevated regions;
- force applied to movable objects.

### Start

A large, obvious:

`START TSUNAMI`

button.

### Reset

A `RESET` button that restores:

- original water state;
- original object positions;
- flood counters;
- event state.

Optional:

- pause;
- simulation speed;
- terrain overlay.

## Water Propagation

Water must propagate through the map over time.

Use a grid or cell-based simulation.

Each cell should track enough state to produce causal behavior, such as:

- terrain elevation;
- water depth;
- water level;
- flow direction or approximate velocity;
- flooded/not flooded state.

The wave should begin at the ocean boundary and advance inland.

A cell should become flooded only when water can physically reach it based on neighboring cells, water level, and terrain elevation.

Higher terrain must resist flooding until water level is high enough.

## Causal Flooding Behavior

The simulation must demonstrate these relationships:

- low coastal terrain floods first;
- depressions collect water;
- hills/elevated zones delay or prevent flooding;
- roads may channel water if they are lower than surrounding terrain;
- taller wave heights reach farther inland;
- small waves leave high zones mostly dry.

Do not hard-code a single scripted flood mask.

## Water Visualization

Render water dynamically as a **3D water surface or collection of 3D water cells/meshes** whose height changes according to the simulation.

Show:

- visible advancing wave/front;
- varying water depth;
- animated movement or flow;
- flooded buildings/roads;
- shoreline changes over time.

Use opacity, ripples, directional particles, foam, or similar effects if useful.

The user should immediately understand which regions are dry, shallowly flooded, or deeply flooded.

## Movable Objects

Add multiple cars or other movable objects.

When water reaches them:

- shallow water may have little effect;
- deeper/faster water should push them;
- objects may rotate;
- objects may drift;
- objects may collide with obstacles or stop against buildings.

Use a simplified force model based on factors such as:

- local water depth;
- approximate flow velocity;
- object mass;
- drag.

The objects must not remain fixed while deep water passes through them.

## Buildings

Buildings should behave as fixed obstacles.

The water does not need true computational fluid dynamics around every building, but buildings should affect the scene meaningfully.

At minimum:

- buildings remain stationary;
- flooding depth around them is visible;
- cars cannot freely pass through them;
- flood statistics distinguish flooded land from ocean.

Optional:

- buildings can show damage state based on depth/flow;
- blocked cells can redirect local water spread.

## People

Include simple pedestrians/human markers if feasible.

They can:

- move toward higher ground before the wave reaches them;
- stop when safe;
- be affected if caught by deep water.

Keep this system simple. The priority is flood propagation.

## Flooded Area Counter

Display a real-time statistic:

**Flooded Area: XX%**

Calculate it from actual land cells that currently contain water above a meaningful threshold.

Do not count the permanent ocean as flooded land.

Also display useful optional statistics such as:

- maximum water depth;
- flooded buildings;
- displaced vehicles;
- elapsed simulation time.

## Time Evolution

The flood must evolve continuously over time.

The entire outcome must not resolve in one frame.

A typical run should visibly include:

1. pre-wave calm state;
2. wave entering coast;
3. low terrain flooding;
4. inland spread;
5. objects being displaced;
6. eventual settling or slower flow.

## Visual Quality

Create a clean, visually compelling **3D disaster-simulation** interface suitable for screen recording.

The result must unmistakably look three-dimensional: terrain relief, buildings, vehicles, water depth, perspective, lighting, and camera movement should all reinforce the 3D presentation.

Prioritize:

- readable terrain elevation;
- obvious wave movement;
- visible water depth differences;
- clear object displacement;
- useful stats;
- intuitive controls.

Avoid making the UI so large that it hides the simulation.

## Architecture

Organize code into logical systems, such as:

- terrain generation;
- grid/cell data;
- water propagation;
- flow estimation;
- object physics;
- collision handling;
- rendering;
- statistics;
- React controls.

Keep the simulation loop separate from ordinary React rendering where appropriate.

## Performance

Design for a reasonably sized grid that remains interactive in a modern browser.

Target smooth enough performance to make wave progression clearly visible.

Avoid unnecessary React re-renders for every grid cell.

3D rendering and simulation arrays should be handled efficiently.

Avoid creating one React component per simulation cell. Use efficient Three.js/R3F geometry, instancing, buffers, merged meshes, or another scalable rendering approach.

## Reliability Requirements

The simulator must:

- work at both minimum and maximum wave height;
- avoid NaN/infinite water values;
- never produce negative water depths;
- reset consistently;
- not progressively slow down after repeated runs;
- produce visibly different outcomes for different wave heights;
- keep flood statistics synchronized with the simulation.

## Acceptance Criteria

The project is complete only if all of these can be demonstrated:

1. A coastal city/island with visible terrain elevation is shown.
2. Roads and multiple buildings are present.
3. Several movable cars/objects are present.
4. The user can change wave height.
5. `START TSUNAMI` begins a progressive simulation.
6. Water visibly enters from the sea side.
7. Low terrain floods before nearby high terrain.
8. Water continues spreading over time.
9. A small wave produces less inland flooding than a large wave.
10. At least some movable objects are pushed, rotated, or carried by water.
11. `Flooded Area: XX%` updates from actual simulation state.
12. Reset restores the initial scene.
13. Multiple runs work without page refresh.
14. The simulation remains responsive while many cells and objects are active.

## Delivery Requirements

Implement the full project.

Do **not**:

- return only a concept or architecture;
- fake the flood using one pre-authored expanding shape;
- hard-code a fixed final flooded region independent of wave height;
- use random object motion unrelated to water state;
- leave core simulation systems as TODOs.

At the end, provide:

1. a concise description of the water-propagation model;
2. a concise description of the object-force model;
3. the final file structure;
4. exact setup/run commands;
5. any simplifications or assumptions;
6. a checklist confirming all acceptance criteria.

Before finishing, review the implementation for TypeScript errors, array-boundary bugs, invalid numerical values, incorrect reset behavior, and unnecessary performance bottlenecks.
