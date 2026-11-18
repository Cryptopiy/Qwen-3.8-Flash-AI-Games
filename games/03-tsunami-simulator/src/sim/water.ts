import {
  N,
  CS,
  G,
  HALF,
  SRC_I,
  SEA_LEVEL,
  clamp,
  idx,
} from './constants';
import type { World } from './terrain';

const SHORE_COLS = SRC_I + 4;

/**
 * Grid-based shallow-water (virtual pipes) flood model.
 *
 * Every cell stores terrain elevation and water depth. Each substep,
 * a flux is computed toward the 4 neighbours proportional to the
 * hydraulic head difference (elevation + water depth). Depth is then
 * updated by flux divergence. A cell can only be flooded if water has
 * physically arrived from a neighbour -> progressive, causal spread.
 *
 * The ocean columns (i < SRC_I) are held at sea level + tsunami
 * elevation, acting as a boundary source that pushes the wave inland.
 */
export class WaterSim {
  readonly world: World;
  readonly depth: Float32Array;
  readonly velX: Float32Array;
  readonly velZ: Float32Array;
  private readonly fp: Float32Array;
  private readonly fm: Float32Array;
  private readonly fq: Float32Array;
  private readonly fs: Float32Array;

  running = false;
  time = 0;
  waveHeight = 8; // meters, user controlled

  constructor(world: World) {
    this.world = world;
    const nn = N * N;
    this.depth = new Float32Array(nn);
    this.velX = new Float32Array(nn);
    this.velZ = new Float32Array(nn);
    this.fp = new Float32Array(nn);
    this.fm = new Float32Array(nn);
    this.fq = new Float32Array(nn);
    this.fs = new Float32Array(nn);
    this.reset();
  }

  start(): void {
    this.running = true;
  }

  reset(): void {
    this.running = false;
    this.time = 0;
    this.depth.fill(0);
    this.velX.fill(0);
    this.velZ.fill(0);
    this.fp.fill(0);
    this.fm.fill(0);
    this.fq.fill(0);
    this.fs.fill(0);
    // permanent ocean
    const { elev } = this.world;
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < SHORE_COLS; i++) {
        const k = idx(i, j);
        if (elev[k] < SEA_LEVEL) this.depth[k] = SEA_LEVEL - elev[k];
      }
    }
  }

  /** smooth ramp-up of the tsunami source elevation over time */
  private sourceElev(): number {
    const t = this.time;
    const ramp = 1 - Math.exp(-t / 6); // saturating rise
    const pulse =
      0.5 * this.waveHeight * Math.exp(-Math.pow((t - 9) / 7, 2)); // crest
    return clamp((this.waveHeight * 0.75 + pulse) * ramp, 0, this.waveHeight * 1.6);
  }

  step(dt: number): void {
    if (!this.running) return;
    this.time += dt;
    const elev = this.world.elev;
    const depth = this.depth;
    const { fp, fm, fq, fs, velX, velZ } = this;
    const src = SEA_LEVEL + this.sourceElev();

    // hold ocean source columns
    for (let j = 0; j < N; j++) {
      const base = j * N;
      for (let i = 0; i < SRC_I; i++) {
        const k = base + i;
        depth[k] = Math.max(0, src - elev[k]);
      }
    }

    const gdt = (G * dt) / CS;
    // update fluxes (walls at borders)
    for (let j = 1; j < N - 1; j++) {
      const row = j * N;
      for (let i = 1; i < N - 1; i++) {
        const k = row + i;
        const h = elev[k] + depth[k];
        let ap = Math.max(0, fp[k] + gdt * (h - (elev[k + 1] + depth[k + 1])));
        let am = Math.max(0, fm[k] + gdt * (h - (elev[k - 1] + depth[k - 1])));
        let aq = Math.max(0, fq[k] + gdt * (h - (elev[k + N] + depth[k + N])));
        let as = Math.max(0, fs[k] + gdt * (h - (elev[k - N] + depth[k - N])));
        const out = (ap + am + aq + as) * dt;
        const avail = depth[k] * CS;
        if (out > avail && out > 0) {
          const s = avail / out;
          ap *= s;
          am *= s;
          aq *= s;
          as *= s;
        }
        fp[k] = ap;
        fm[k] = am;
        fq[k] = aq;
        fs[k] = as;
      }
    }

    // integrate depth
    const rdt = dt / CS;
    for (let j = 1; j < N - 1; j++) {
      const row = j * N;
      for (let i = 1; i < N - 1; i++) {
        const k = row + i;
        const din =
          fp[k - 1] + fm[k + 1] + fq[k - N] + fs[k + N] -
          (fp[k] + fm[k] + fq[k] + fs[k]);
        let d = depth[k] + rdt * din;
        if (!isFinite(d)) d = 0;
        depth[k] = clamp(d, 0, 80);
      }
    }

    // approximate depth-averaged velocity for drag / foam
    for (let j = 0; j < N; j++) {
      const row = j * N;
      for (let i = 0; i < N; i++) {
        const k = row + i;
        const d = depth[k];
        if (d > 0.02) {
          const den = Math.max(d, 0.12); // flux (m^2/s) / depth (m) -> m/s
          velX[k] = clamp((fp[k] - fm[k]) / den, -14, 14);
          velZ[k] = clamp((fq[k] - fs[k]) / den, -14, 14);
        } else {
          velX[k] = 0;
          velZ[k] = 0;
        }
      }
    }
  }

  /** bilinear water sample at world coordinates */
  sample(x: number, z: number): { d: number; vx: number; vz: number } {
    const fx = clamp((x + HALF) / CS - 0.5, 0, N - 1.001);
    const fz = clamp((z + HALF) / CS - 0.5, 0, N - 1.001);
    const i0 = Math.floor(fx);
    const j0 = Math.floor(fz);
    const tx = fx - i0;
    const tz = fz - j0;
    const k = idx(i0, j0);
    const lerp = (a: Float32Array): number =>
      a[k] * (1 - tx) * (1 - tz) +
      a[k + 1] * tx * (1 - tz) +
      a[k + N] * (1 - tx) * tz +
      a[k + N + 1] * tx * tz;
    return { d: lerp(this.depth), vx: lerp(this.velX), vz: lerp(this.velZ) };
  }

  sampleCell(i: number, j: number): { d: number; vx: number; vz: number } {
    const k = idx(clamp(i, 0, N - 1), clamp(j, 0, N - 1));
    return { d: this.depth[k], vx: this.velX[k], vz: this.velZ[k] };
  }
}
