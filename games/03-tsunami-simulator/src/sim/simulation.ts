import { FLOOD_DEPTH, SUB_DT, clamp, idx, N, worldToCell } from './constants';

const elevAt = (w: World, x: number, z: number): number =>
  w.elev[idx(worldToCell(x), worldToCell(z))];
import { genWorld, type World } from './terrain';
import { WaterSim } from './water';
import {
  makeCars,
  makePeople,
  updateCar,
  updatePerson,
  type Car,
  type Person,
} from './objects';

export interface Stats {
  running: boolean;
  elapsed: number;
  floodedPct: number;
  maxDepth: number;
  floodedBuildings: number;
  totalBuildings: number;
  displacedCars: number;
  totalCars: number;
  sweptPeople: number;
  safePeople: number;
  totalPeople: number;
  phase: string;
}

/** Owns the grid, water solver and movable objects; independent of React. */
export class Simulation {
  readonly world: World;
  readonly water: WaterSim;
  readonly cars: Car[];
  readonly people: Person[];
  speed = 1;
  paused = false;

  private landCells = 0;
  private stats: Stats = {
    running: false,
    elapsed: 0,
    floodedPct: 0,
    maxDepth: 0,
    floodedBuildings: 0,
    totalBuildings: 0,
    displacedCars: 0,
    totalCars: 0,
    sweptPeople: 0,
    safePeople: 0,
    totalPeople: 0,
    phase: 'Pre-wave calm',
  };

  constructor() {
    this.world = genWorld();
    this.water = new WaterSim(this.world);
    this.cars = makeCars(this.world);
    this.people = makePeople(this.world);
    for (let k = 0; k < N * N; k++) if (this.world.isLand[k]) this.landCells++;
    this.recomputeStats();
  }

  start(): void {
    this.water.start();
  }

  setWaveHeight(h: number): void {
    this.water.waveHeight = Math.max(1, Math.min(20, h));
  }

  reset(): void {
    this.water.reset();
    this.cars.forEach((c, n) => {
      const s = this.world.carSpawns[n];
      c.x = c.spawnX;
      c.z = c.spawnZ;
      c.rot = s ? s.rot : c.rot;
      c.av = 0;
      c.vx = 0;
      c.vz = 0;
      c.tilt = 0;
      c.displaced = false;
      c.y = elevAt(this.world, c.x, c.z);
    });
    this.people.forEach((p, n) => {
      const s = this.world.peopleSpawns[n];
      if (s) {
        p.x = s.x;
        p.z = s.z;
      }
      p.dirX = 0;
      p.dirZ = 0;
      p.state = 'idle';
      p.y = elevAt(this.world, p.x, p.z);
    });
    for (const b of this.world.buildings) b.flooded = false;
    this.paused = false;
    this.recomputeStats();
  }

  /** advance simulation; realDt in wall-clock seconds */
  update(realDt: number): void {
    if (!this.water.running || this.paused) return;
    const simDt = Math.min(realDt, 0.05) * this.speed;
    const n = clamp(Math.ceil(simDt / SUB_DT), 1, 10);
    const h = simDt / n;
    for (let s = 0; s < n; s++) {
      this.water.step(h);
      for (const c of this.cars) updateCar(c, h, this.water, this.world);
      for (const p of this.people) updatePerson(p, h, this.water, this.world);
    }
    this.recomputeStats();
  }

  private recomputeStats(): void {
    const { elev, depth, isLand } = {
      elev: this.world.elev,
      depth: this.water.depth,
      isLand: this.world.isLand,
    };
    let flooded = 0;
    let maxDepth = 0;
    for (let k = 0; k < N * N; k++) {
      if (!isLand[k]) continue;
      const d = depth[k];
      if (d > FLOOD_DEPTH) flooded++;
      if (d > maxDepth) maxDepth = d;
    }
    let floodedBuildings = 0;
    for (const b of this.world.buildings) {
      const d = depth[idx(worldToCell(b.x), worldToCell(b.z))];
      b.flooded = d > 0.3;
      if (b.flooded) floodedBuildings++;
    }
    let displacedCars = 0;
    for (const c of this.cars) if (c.displaced) displacedCars++;
    let sweptPeople = 0;
    let safePeople = 0;
    for (const p of this.people) {
      if (p.state === 'swept') sweptPeople++;
      else if (p.state === 'safe') safePeople++;
    }
    const t = this.water.time;
    const st = this.stats;
    st.running = this.water.running;
    st.elapsed = t;
    st.floodedPct = this.landCells > 0 ? (flooded / this.landCells) * 100 : 0;
    st.maxDepth = maxDepth;
    st.floodedBuildings = floodedBuildings;
    st.totalBuildings = this.world.buildings.length;
    st.displacedCars = displacedCars;
    st.totalCars = this.cars.length;
    st.sweptPeople = sweptPeople;
    st.safePeople = safePeople;
    st.totalPeople = this.people.length;
    st.phase = !this.water.running
      ? 'Pre-wave calm'
      : t < 10
        ? 'Wave approaching the coast'
        : t < 40
          ? 'Inundation spreading inland'
          : 'Flow slowing / water settling';
  }

  getStats(): Stats {
    return { ...this.stats };
  }
}
