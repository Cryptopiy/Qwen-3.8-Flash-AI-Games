# Prompt — Car Crash Lab

You are an autonomous senior simulation and frontend engineer. Build a **working interactive real-time 3D browser-based car crash laboratory**.

The application is not just an animation. It must connect user-controlled physical parameters to an actual simulation, visualize the collision, and calculate meaningful post-impact measurements.

## Primary Objective

Create a simulation with the following flow:

**car → acceleration / initial velocity → obstacle → impact → post-crash result**

The user must be able to modify:

- vehicle speed;
- vehicle mass;
- collision angle;
- obstacle type.

After each crash, display:

- **Speed**
- **Impact force**
- **Damage**
- **Final position**

The car must visibly react to the impact through motion and damage effects.

## Technical Requirements

Build the project as a browser application using:

- **TypeScript**
- **React**
- **Vite**
- **Three.js** or **React Three Fiber** for real-time 3D rendering

The crash laboratory must be **true 3D**.

Do not implement it as:
- a 2D top-down simulation;
- a 2D Canvas animation;
- pseudo-3D;
- isometric projection;
- CSS-only animation;
- a pre-rendered crash sequence.

Use:
- a perspective camera;
- real 3D vehicle geometry;
- real 3D obstacle geometry;
- 3D position and rotation;
- lighting and shadows where practical;
- actual 3D collision geometry or a 3D physics engine.

No backend is required.

The project must run with:

```bash
npm install
npm run dev
```

The simulation should be deterministic enough that the same configuration produces approximately the same result.

Do not require external assets, API keys, authentication, or paid services.

## Simulation Scene

Create a clear **fully 3D crash-test environment** containing:

- a vehicle;
- a runway/test track;
- distance markers or a visual scale;
- one obstacle positioned in the crash path;
- a visible impact zone;
- enough empty space to observe post-impact movement.

Use a perspective 3D camera that clearly shows the vehicle's approach, impact geometry, rebound, rotation, and final resting position.

The camera may be fixed, follow the car, or smoothly reposition after impact, but it must make depth and 3D motion obvious.

## User Controls

Provide a clean control panel with at least:

### Vehicle Speed

User-adjustable starting speed.

Suggested range:

- 10–200 km/h

Display both configured speed and current simulated speed.

### Vehicle Mass

User-adjustable vehicle mass.

Suggested range:

- 700–3000 kg

### Collision Angle

User-adjustable impact angle.

Suggested range:

- -60° to +60°

The angle must actually change the **3D crash geometry or incoming vehicle direction**. It must not be a cosmetic number.

The collision should be computed from the real 3D orientation/trajectory of the vehicle and obstacle.

### Obstacle Type

Provide at least three obstacle types with meaningfully different physical behavior, for example:

- concrete wall — effectively immovable;
- heavy barrier — movable but very massive;
- lightweight barrier — easily displaced.

Changing obstacle type must visibly alter the outcome.

## Simulation Controls

Include:

- `RUN CRASH`
- `RESET`
- optional `PAUSE`
- optional slow-motion toggle

The user must be able to run many experiments without refreshing the browser.

Reset must restore the original scene reliably.

## Physics Model

Implement a coherent simplified physics model.

It does not need to be engineering-grade crash analysis, but the relationships must make sense.

At minimum use a coherent **3D rigid-body or simplified 3D collision model** based on:

- mass;
- velocity;
- momentum;
- kinetic energy;
- collision normal;
- collision angle;
- restitution;
- friction or drag;
- impulse or equivalent collision response.

Impact calculations should react logically to parameter changes.

Examples of expected behavior:

- higher speed should usually produce much greater damage;
- higher mass should increase collision energy/momentum;
- glancing impacts should behave differently from head-on impacts;
- a lightweight obstacle should move more than a concrete wall.

Document the simplified formulas in code comments or an in-app "Model" section.

Do not label physically meaningless arbitrary numbers as exact real-world force. If impact force is estimated, clearly present it as an estimate based on an assumed impact duration or deformation distance.


## 3D Collision Requirements

Use actual 3D collision volumes or a 3D physics library for:

- vehicle body;
- obstacle body;
- detached parts or debris when applicable.

The vehicle must be able to:
- translate in 3D;
- rotate around relevant axes;
- rebound or slide after impact;
- end at a physically plausible final 3D position and orientation.

Do not fake post-impact rotation with a visual-only CSS transform disconnected from simulation state.

## Impact Force

Calculate and display an estimated impact force.

Use a defensible simplified method such as:

- impulse divided by assumed impact time;

or:

- work-energy over assumed deformation distance.

State the assumption in the UI.

The value must respond to speed, mass, angle, and obstacle behavior.

## Damage Model

Create a normalized or percentage-based damage model.

For example:

- 0–20% — minor;
- 20–50% — moderate;
- 50–80% — severe;
- 80–100% — catastrophic.

Damage must be derived from the collision, not random.

Use factors such as:

- kinetic energy transferred;
- normal component of impact velocity;
- obstacle rigidity;
- impact angle.

## Visual Crash Response

At impact, show several visible consequences.

At least three of the following should exist:

- vehicle rotation;
- rebound;
- sliding after impact;
- visible body deformation;
- damaged front/side zones;
- detached parts;
- debris particles;
- tire marks;
- sparks;
- obstacle displacement;
- screen shake at high-energy impacts.

The simulation does not need soft-body physics, but it must visually communicate differences between low-energy and high-energy crashes.

Damage visualization must correspond to the collision side/zone.

## Vehicle Damage Zones

Divide the car into logical regions such as:

- front;
- rear;
- left side;
- right side.

Determine the primary impacted zone from collision geometry.

Show damage visually on the correct area.

If possible, make deformation intensity proportional to damage.

## Result Panel

After the simulation settles or after a defined time, show a result panel containing at least:

- configured initial speed;
- impact speed;
- vehicle mass;
- collision angle;
- obstacle type;
- estimated impact force;
- damage percentage;
- damage severity;
- final X/Y position;
- final vehicle rotation;
- optional kinetic energy before/after.

Make units explicit.

## Experiment Feedback

Make it easy to compare runs.

Add a small "last runs" table or history for at least the last 5 crashes containing:

- speed;
- mass;
- angle;
- obstacle;
- force;
- damage.

History only needs to persist during the session.

## Visual Quality

Create a polished laboratory/test-track visual style.

Prioritize:

- readable parameter controls;
- clear vehicle orientation;
- clear obstacle geometry;
- visible impact moment;
- understandable damage state;
- legible results.

The application should look good in a screen recording.

## Responsive UI

The app must remain usable on:

- standard desktop;
- smaller laptop widths;
- tablet-sized screens.

The simulation view and controls may stack vertically on narrow screens.

## Architecture

Keep code organized into logical modules, such as:

- physics;
- collision calculations;
- simulation state;
- vehicle rendering;
- obstacle definitions;
- UI controls;
- experiment history;
- utilities.

Do not put all simulation logic inside one React component.

## Reliability Requirements

The app must:

- run repeatedly without accumulating broken state;
- produce finite numeric values;
- handle minimum and maximum parameter values;
- avoid exploding velocities or infinite rotations;
- reset reliably;
- keep UI values synchronized with the simulation;
- update results only from the actual run.

## Acceptance Criteria

The result is only complete if all of the following are demonstrably true:

1. The user can change speed.
2. The user can change vehicle mass.
3. The user can change collision angle.
4. The user can switch between at least three obstacle types.
5. Pressing `RUN CRASH` launches an actual simulation.
6. The car collides with the obstacle at the selected geometry.
7. The car visibly reacts after impact.
8. At least one damage zone changes visually.
9. Obstacle types produce meaningfully different outcomes.
10. The app calculates and shows Speed / Impact force / Damage / Final position.
11. Increasing speed significantly affects force and damage.
12. The user can reset and immediately run another experiment.
13. The last several runs can be compared.
14. The app remains stable after repeated crashes.

## Delivery Requirements

Implement the complete project.

Do **not**:

- return only a design or explanation;
- use fake pre-rendered crash animations;
- randomize result numbers independently of the simulation;
- leave required physics as TODOs;
- omit necessary source files.

At the end, provide:

1. a brief explanation of the physics model;
2. the final file structure;
3. exact setup/run commands;
4. any assumptions used for impact force and damage;
5. a short checklist confirming each required feature.

Before finishing, inspect the implementation for TypeScript errors, broken imports, inconsistent units, and simulation-reset bugs.
