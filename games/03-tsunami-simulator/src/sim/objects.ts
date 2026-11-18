import { HALF, SAFE_ELEV, clamp, idx, worldToCell, N } from './constants';
import type { World } from './terrain';
import type { WaterSim } from './water';

export interface Car {
  x: number;
  z: number;
  y: number;
  rot: number;
  av: number;
  vx: number;
  vz: number;
  tilt: number;
  spawnX: number;
  spawnZ: number;
  displaced: boolean;
  hue: number;
}

export type PersonState = 'idle' | 'flee' | 'safe' | 'swept';

export interface Person {
  x: number;
  z: number;
  y: number;
  dirX: number;
  dirZ: number;
  warnT: number;
  state: PersonState;
}

export function makeCars(world: World): Car[] {
  return world.carSpawns.map((s, n) => ({
    x: s.x,
    z: s.z,
    y: 0,
    rot: s.rot,
    av: 0,
    vx: 0,
    vz: 0,
    tilt: 0,
    spawnX: s.x,
    spawnZ: s.z,
    displaced: false,
    hue: (n * 0.37) % 1,
  }));
}

export function makePeople(world: World): Person[] {
  const elevAt = (x: number, z: number): number =>
    world.elev[idx(worldToCell(x), worldToCell(z))];
  return world.peopleSpawns.map((s) => ({
    x: s.x,
    z: s.z,
    y: elevAt(s.x, s.z),
    dirX: 0,
    dirZ: 0,
    warnT: s.warnT,
    state: 'idle' as PersonState,
  }));
}

const RHO = 1025;
const CD = 1.15;
const FRONTAL = 2.4; // m^2
const MASS = 1500; // kg
const V_CAP = 14;

/**
 * Simplified hydrodynamic force on a grounded car:
 *   F = 0.5 * rho * Cd * A * |v_rel| * v_rel * depthFactor
 * buoyancy (depth > 0.4 m) removes ground friction and adds torque,
 * so deeper/faster water pushes, rotates and carries objects.
 */
export function updateCar(
  car: Car,
  dt: number,
  water: WaterSim,
  world: World
): void {
  const s = water.sample(car.x, car.z);
  const e = world.elev[idx(worldToCell(car.x), worldToCell(car.z))];

  const relX = s.vx - car.vx;
  const relZ = s.vz - car.vz;
  const rel = Math.hypot(relX, relZ);
  const buoy = clamp((s.d - 0.35) / 0.7, 0, 1);
  let forceMag = 0;

  if (s.d > 0.25 && rel > 0.001) {
    const depthFactor = clamp(s.d / 1.1, 0, 1);
    const a = ((0.5 * RHO * CD * FRONTAL * rel) / MASS) * depthFactor;
    car.vx += a * relX * dt;
    car.vz += a * relZ * dt;
    forceMag = a * rel;
    // torque from lateral impact -> cars spin around
    const sin = Math.sin(car.rot);
    const cos = Math.cos(car.rot);
    const perp = -relX * sin + relZ * cos;
    car.av += perp * 0.02 * buoy * dt * (car.hue > 0.5 ? 1 : -1) * 8;
  }

  // ground friction (lifted by buoyancy)
  const fric = s.d < 0.45 ? 4.5 * (1 - buoy) : 0.15;
  const damp = Math.max(0, 1 - fric * dt);
  car.vx *= damp;
  car.vz *= damp;
  car.av *= Math.max(0, 1 - (2.5 - 2 * buoy) * dt);

  const sp = Math.hypot(car.vx, car.vz);
  if (sp > V_CAP) {
    car.vx = (car.vx / sp) * V_CAP;
    car.vz = (car.vz / sp) * V_CAP;
  }

  car.x += car.vx * dt;
  car.z += car.vz * dt;
  car.rot += car.av * dt;

  // buildings are fixed obstacles
  for (const b of world.buildings) {
    const hw = b.w / 2 + 1.7;
    const hd = b.d / 2 + 1.7;
    const dx = car.x - b.x;
    const dz = car.z - b.z;
    if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
      const ox = hw - Math.abs(dx);
      const oz = hd - Math.abs(dz);
      if (ox < oz) {
        car.x = b.x + Math.sign(dx || 1) * hw;
        car.vx *= -0.25;
      } else {
        car.z = b.z + Math.sign(dz || 1) * hd;
        car.vz *= -0.25;
      }
      car.av = car.av * 0.5 + (dz * car.vx - dx * car.vz) * 0.002;
    }
  }

  car.x = clamp(car.x, -HALF + 6, HALF - 6);
  car.z = clamp(car.z, -HALF + 6, HALF - 6);

  const target = clamp(forceMag * 0.05, 0, 0.55) * buoy * Math.sin(car.av * 3 + car.tilt);
  car.tilt += (target - car.tilt) * clamp(dt * 2.5, 0, 1);
  car.y = e + Math.max(0, s.d - 0.5) * 0.35;

  if (!car.displaced && Math.hypot(car.x - car.spawnX, car.z - car.spawnZ) > 3)
    car.displaced = true;
}

/** Pedestrians: flee uphill when warned, swept away in deep water. */
export function updatePerson(
  p: Person,
  dt: number,
  water: WaterSim,
  world: World
): void {
  const ci = worldToCell(p.x);
  const cj = worldToCell(p.z);
  const e = world.elev[idx(ci, cj)];
  const s = water.sampleCell(ci, cj);

  if (s.d > 0.9) p.state = 'swept';

  switch (p.state) {
    case 'idle':
      if (water.running && water.time > p.warnT && e < SAFE_ELEV)
        p.state = 'flee';
      break;
    case 'flee': {
      // walk up the local elevation gradient
      const ex =
        world.elev[idx(clamp(ci + 2, 0, N - 1), cj)] -
        world.elev[idx(clamp(ci - 2, 0, N - 1), cj)];
      const ez =
        world.elev[idx(ci, clamp(cj + 2, 0, N - 1))] -
        world.elev[idx(ci, clamp(cj - 2, 0, N - 1))];
      const g = Math.hypot(ex, ez);
      if (g > 0.05) {
        p.dirX = ex / g;
        p.dirZ = ez / g;
      } else if (p.dirX === 0 && p.dirZ === 0) {
        p.dirX = 1;
      }
      const speed = 1.8;
      p.x = clamp(p.x + p.dirX * speed * dt, -HALF + 6, HALF - 6);
      p.z = clamp(p.z + p.dirZ * speed * dt, -HALF + 6, HALF - 6);
      p.y = world.elev[idx(worldToCell(p.x), worldToCell(p.z))];
      if (p.y >= SAFE_ELEV) p.state = 'safe';
      break;
    }
    case 'swept': {
      const den = Math.max(s.d, 0.3);
      p.x = clamp(p.x + s.vx * Math.min(1, den) * 0.85 * dt, -HALF, HALF);
      p.z = clamp(p.z + s.vz * Math.min(1, den) * 0.85 * dt, -HALF, HALF);
      p.y =
        world.elev[idx(worldToCell(p.x), worldToCell(p.z))] +
        Math.min(s.d, 2) * 0.5;
      break;
    }
    case 'safe':
      break;
  }
}
