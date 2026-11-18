import {
  N,
  SHORE_I,
  cellToWorldX,
  cellToWorldZ,
  clamp,
  idx,
  worldToCell,
} from './constants';

export interface Building {
  x: number;
  z: number;
  w: number;
  d: number;
  h: number;
  ci: number;
  cj: number;
  tone: number;
  flooded: boolean;
}

export interface Spawn {
  x: number;
  z: number;
  rot: number;
}

export interface World {
  elev: Float32Array;
  isLand: Uint8Array;
  road: Uint8Array;
  buildings: Building[];
  carSpawns: Spawn[];
  peopleSpawns: { x: number; z: number; warnT: number }[];
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeLattice(size: number, rng: () => number): Float32Array {
  const a = new Float32Array(size * size);
  for (let k = 0; k < a.length; k++) a[k] = rng();
  return a;
}

function sampleLattice(
  a: Float32Array,
  size: number,
  x: number,
  y: number
): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  let fx = x - xi;
  let fy = y - yi;
  fx = fx * fx * (3 - 2 * fx);
  fy = fy * fy * (3 - 2 * fy);
  const w = (mx: number, my: number) =>
    a[
      ((((my % size) + size) % size) * size +
        (((mx % size) + size) % size))
    ];
  const v00 = w(xi, yi);
  const v10 = w(xi + 1, yi);
  const v01 = w(xi, yi + 1);
  const v11 = w(xi + 1, yi + 1);
  return (
    (v00 * (1 - fx) + v10 * fx) * (1 - fy) +
    (v01 * (1 - fx) + v11 * fx) * fy
  );
}

const gauss = (x: number, mu: number, s: number): number =>
  Math.exp(-((x - mu) * (x - mu)) / (2 * s * s));

const VERT_ROADS = [42, 66];
const HORZ_ROADS = [28, 52, 76, 100];

function roadDist(i: number, j: number): number {
  let d = 1e9;
  for (const v of VERT_ROADS) {
    if (j >= 14 && j <= 118) d = Math.min(d, Math.abs(i - v));
    else d = Math.min(d, Math.hypot(i - v, j < 14 ? 14 - j : j - 118));
  }
  for (const h of HORZ_ROADS) {
    if (i >= 40 && i <= 124) d = Math.min(d, Math.abs(j - h));
    else d = Math.min(d, Math.hypot(i < 40 ? 40 - i : i - 124, j - h));
  }
  return d;
}

export function genWorld(): World {
  const rng = mulberry32(20260827);
  const L1 = makeLattice(33, rng);
  const L2 = makeLattice(65, rng);
  const noise = (i: number, j: number): number =>
    sampleLattice(L1, 33, (i * 32) / (N - 1), (j * 32) / (N - 1)) * 0.65 +
    sampleLattice(L2, 65, (i * 64) / (N - 1), (j * 64) / (N - 1)) * 0.35;

  const elev = new Float32Array(N * N);
  const isLand = new Uint8Array(N * N);
  const road = new Uint8Array(N * N);

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const k = idx(i, j);
      let e: number;
      if (i < SHORE_I) {
        e = -0.6 - (SHORE_I - i) * 0.28 + (noise(i, j) - 0.5) * 0.5;
      } else {
        const d = i - SHORE_I;
        e = 15.5 * (1 - Math.exp(-d / 34));
        e += 11.5 * gauss(i, 103, 22) * gauss(j, 42, 20); // NE hill (safe zone)
        e += 7.0 * gauss(i, 114, 15) * gauss(j, 106, 16); // SE hill
        e -= 4.8 * gauss(i, 55, 13) * gauss(j, 96, 14); // south basin / lagoon
        e -= 2.4 * gauss(i, 46, 9) * gauss(j, 20, 11); // low coastal inlet
        e += (noise(i, j) - 0.5) * 3.4;
        e = Math.max(0.12, e);
      }
      const rd = roadDist(i, j);
      if (rd <= 1.5) {
        road[k] = 1;
        e = Math.max(i < SHORE_I ? e : 0.1, e - 0.8); // roads dip -> drain channels
      }
      elev[k] = e;
      isLand[k] = e >= 0 ? 1 : 0;
    }
  }

  // ---- buildings on a loose city lattice ----
  const buildings: Building[] = [];
  for (let bi = 46; bi <= 118; bi += 6) {
    for (let bj = 16; bj <= 116; bj += 7) {
      if (roadDist(bi, bj) < 2.9) continue;
      if (rng() < 0.24) continue; // parks / gaps
      const e = elev[idx(bi, bj)];
      if (e < 0.9 || e > 15) continue;
      const w = 14 + rng() * 7;
      const d = 14 + rng() * 7;
      let h = 6 + rng() * 8;
      if (bi < 62) h += (62 - bi) * 0.75; // taller downtown near the coast
      buildings.push({
        x: cellToWorldX(bi) + (rng() - 0.5) * 3,
        z: cellToWorldZ(bj) + (rng() - 0.5) * 3,
        w,
        d,
        h,
        ci: bi,
        cj: bj,
        tone: 0.6 + rng() * 0.4,
        flooded: false,
      });
    }
  }

  // ---- parked cars along roads ----
  const carSpawns: Spawn[] = [];
  for (const v of VERT_ROADS) {
    for (let j = 18; j <= 114 && carSpawns.length < 18; j += 9) {
      if (rng() < 0.45) continue;
      const lane = rng() < 0.5 ? -2.4 : 2.4;
      const x = cellToWorldX(v) + lane;
      const z = cellToWorldZ(j) + (rng() - 0.5) * 6;
      if (elev[idx(worldToCell(x), worldToCell(z))] < 0.2) continue;
      carSpawns.push({ x, z, rot: lane < 0 ? 0 : Math.PI });
    }
  }
  for (const h of HORZ_ROADS) {
    for (let i = 47; i <= 121 && carSpawns.length < 18; i += 10) {
      if (rng() < 0.45) continue;
      const lane = rng() < 0.5 ? -2.4 : 2.4;
      const x = cellToWorldX(i) + (rng() - 0.5) * 6;
      const z = cellToWorldZ(h) + lane;
      carSpawns.push({ x, z, rot: lane < 0 ? Math.PI / 2 : -Math.PI / 2 });
    }
  }

  // ---- pedestrians near buildings ----
  const peopleSpawns: World['peopleSpawns'] = [];
  for (const b of buildings) {
    if (peopleSpawns.length >= 44) break;
    if (rng() < 0.45) continue;
    const ang = rng() * Math.PI * 2;
    const r = Math.max(b.w, b.d) / 2 + 2 + rng() * 4;
    const x = clamp(b.x + Math.cos(ang) * r, -248, 248);
    const z = clamp(b.z + Math.sin(ang) * r, -248, 248);
    peopleSpawns.push({ x, z, warnT: 0.5 + rng() * 6 });
  }

  return { elev, isLand, road, buildings, carSpawns, peopleSpawns };
}
