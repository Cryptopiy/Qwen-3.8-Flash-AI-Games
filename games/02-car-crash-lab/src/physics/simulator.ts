// Core deterministic crash simulator: planar rigid bodies (x, z, yaw) with
// fixed timestep, sphere-chain vs OBB collision volumes and sequential-impulse
// collision response. No randomness at runtime except seeded deterministic PRNG
// used for debris scatter.

import { OBB } from './OBB';
import { clamp, normalizeAngle, RAD2DEG, DEG2RAD, cross2, omegaCrossX, omegaCrossZ } from './geometry';
import { getObstacleDef, type ObstacleDef } from './obstacles';
import {
  type DamageZone,
  impactZoneFromNormal,
  absorbedNormalEnergy,
  damageFromEnergy,
  estimateImpactForceKN,
  severityFor,
  ASSUMED_IMPACT_TIME_S,
} from './damage';
import { mulberry32, type Rng } from '../utils/rng';

export type Phase = 'idle' | 'running' | 'impacted' | 'settled';

export interface RunParams {
  speedKmh: number; // 10..200
  massKg: number; // 700..3000
  angleDeg: number; // -60..60
  obstacleId: string;
}

export interface CrashResult {
  id: number;
  configuredSpeedKmh: number;
  impactSpeedKmh: number;
  massKg: number;
  angleDeg: number;
  obstacleLabel: string;
  forceKN: number;
  damagePct: number;
  severity: string;
  primaryZone: DamageZone;
  zoneDamage: Record<DamageZone, number>;
  finalX: number;
  finalZ: number;
  finalYawDeg: number;
  keBeforeMJ: number;
  keAfterMJ: number;
  obstacleMovedM: number;
  timeToImpactS: number;
}

export interface SkidMark {
  x: number;
  z: number;
  yaw: number;
  s: number;
}

export interface Debris {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rot: number;
  vrot: number;
  size: number;
  kind: number; // 0 body, 1 glass, 2 trim
  life: number;
}

export interface Spark {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
}

interface Body2 {
  x: number;
  z: number;
  yaw: number;
  vx: number;
  vz: number;
  omega: number;
  m: number;
  I: number;
  invM: number;
  invI: number;
}

interface Contact {
  nx: number;
  nz: number;
  px: number;
  pz: number;
  depth: number;
  rcx: number;
  rcz: number;
  rox: number;
  roz: number;
}

export const CAR_LENGTH = 4.4;
export const CAR_WIDTH = 1.8;
export const CAR_HEIGHT = 1.4;
const CAR_START_DIST = 15; // meters from impact center
const H = 1 / 120; // physics substep
const SLOP = 0.005;
const POS_BAUMGARTE = 0.6;
const VEL_ITER = 8;
const MAX_SPEED = 90; // safety clamps to avoid blow-ups
const MAX_OMEGA = 14;
const MAX_DEBRIS = 40;
const MAX_SPARKS = 90;
const MAX_SKID = 700;

// Vehicle collision volumes: 6 spheres on the footprint (3 along, 2 across).
const SPHERE_R = 0.6;
const SPHERE_OFFSETS: Array<[number, number]> = [
  [-0.45, -1.6], [0.45, -1.6],
  [-0.45, 0], [0.45, 0],
  [-0.45, 1.6], [0.45, 1.6],
];

export function defaultParams(): RunParams {
  return { speedKmh: 90, massKg: 1500, angleDeg: 0, obstacleId: 'wall' };
}

export class Simulator {
  phase: Phase = 'idle';
  params: RunParams = defaultParams();
  timeScale = 1;
  paused = false;
  tSim = 0;

  car: Body2;
  obs: Body2;
  obstacleYaw = 0;
  def: ObstacleDef;
  private obb: OBB;

  zoneDamage: Record<DamageZone, number> = { front: 0, rear: 0, left: 0, right: 0 };
  pitch = 0; // cosmetic-but-state-driven nose dive, simulated as a damped spring
  shakeAmp = 0;
  shakeX = 0;
  shakeY = 0;

  skidMarks: SkidMark[] = [];
  debris: Debris[] = [];
  sparks: Spark[] = [];

  runCount = 0;
  lastResult: CrashResult | null = null;
  onResult: ((r: CrashResult) => void) | null = null;

  private acc = 0;
  private rng: Rng = mulberry32(1);
  private firstHit = false;
  private impactEnded = true;
  private noContactFrames = 0;
  private jAccum = 0;
  private v0 = 0;
  private ke0 = 0;
  private keAfter = 0;
  private approachN = 0;
  private firstN = { x: 0, z: 0 };
  private firstYaw = 0;
  private contactPoint = { x: 0, z: 0 };
  private tAtImpact = 0;
  private tImpactEnd = 0;
  private damagePct = 0;
  private primaryZone: DamageZone = 'front';
  private forceKN = 0;
  private settleFrames = 0;
  private crawlFrames = 0;
  private skidTick = 0;
  private obsStart = { x: 0, z: 0 };
  private contactThisStep = false;

  constructor() {
    this.def = getObstacleDef(this.params.obstacleId);
    this.obb = new OBB(0, 2, this.def.hx, this.def.hz, 0);
    this.car = this.makeCarBody(0, 0, 0);
    this.obs = this.makeObsBody(this.def);
    this.reset();
  }

  private makeCarBody(x: number, z: number, yaw: number, vx = 0, vz = 0): Body2 {
    const m = clamp(this.params.massKg, 700, 3000);
    const I = (m * (CAR_LENGTH * CAR_LENGTH + CAR_WIDTH * CAR_WIDTH)) / 12;
    return { x, z, yaw, vx, vz, omega: 0, m, I, invM: 1 / m, invI: 1 / I };
  }

  private makeObsBody(def: ObstacleDef): Body2 {
    const movable = def.massKg > 0;
    const m = movable ? def.massKg : 1;
    const I = movable ? (m * (4 * def.hx * def.hx + 4 * def.hz * def.hz)) / 12 : 1;
    return {
      x: 0, z: 2, yaw: 0, vx: 0, vz: 0, omega: 0,
      m, I,
      invM: movable ? 1 / m : 0,
      invI: movable ? 1 / I : 0,
    };
  }

  setObstacle(id: string): void {
    if (this.phase === 'running' || this.phase === 'impacted') return;
    this.params = { ...this.params, obstacleId: id };
    this.reset();
  }

  setParams(p: Partial<RunParams>): void {
    if (this.phase === 'running' || this.phase === 'impacted') return;
    this.params = {
      ...this.params,
      ...p,
      speedKmh: clamp(p.speedKmh ?? this.params.speedKmh, 10, 200),
      massKg: clamp(p.massKg ?? this.params.massKg, 700, 3000),
      angleDeg: clamp(p.angleDeg ?? this.params.angleDeg, -60, 60),
    };
    this.reset();
  }

  reset(): void {
    this.phase = 'idle';
    this.paused = false;
    this.placeAtStart(false);
    this.lastResult = null;
  }

  run(): void {
    if (this.phase === 'running' || this.phase === 'impacted') return;
    this.runCount += 1;
    this.rng = mulberry32((this.runCount * 0x6d2b79f5) | 0);
    this.placeAtStart(true);
    this.phase = 'running';
  }

  private placeAtStart(live: boolean): void {
    this.def = getObstacleDef(this.params.obstacleId);
    this.obb.cx = 0;
    this.obb.cz = 2;
    this.obb.hx = this.def.hx;
    this.obb.hz = this.def.hz;
    this.obb.yaw = 0;
    this.obs = this.makeObsBody(this.def);
    this.obsStart = { x: this.obs.x, z: this.obs.z };

    const th = clamp(this.params.angleDeg, -60, 60) * DEG2RAD;
    const dirX = Math.sin(th);
    const dirZ = Math.cos(th);
    const speedMs = clamp(this.params.speedKmh, 10, 200) / 3.6;
    const obsCenterX = this.obs.x;
    const obsCenterZ = this.obs.z;
    this.car = this.makeCarBody(
      obsCenterX - dirX * CAR_START_DIST,
      obsCenterZ - dirZ * CAR_START_DIST,
      th,
      live ? dirX * speedMs : 0,
      live ? dirZ * speedMs : 0,
    );

    this.zoneDamage = { front: 0, rear: 0, left: 0, right: 0 };
    this.pitch = 0;
    this.shakeAmp = 0;
    this.skidMarks = [];
    this.debris = [];
    this.sparks = [];
    this.tSim = 0;
    this.acc = 0;
    this.firstHit = false;
    this.impactEnded = true;
    this.noContactFrames = 0;
    this.jAccum = 0;
    this.settleFrames = 0;
    this.crawlFrames = 0;
    this.skidTick = 0;
    this.contactThisStep = false;
  }

  get speedKmh(): number {
    return Math.hypot(this.car.vx, this.car.vz) * 3.6;
  }

  get obstacleMovedM(): number {
    return Math.hypot(this.obs.x - this.obsStart.x, this.obs.z - this.obsStart.z);
  }

  get impactStarted(): boolean {
    return this.firstHit;
  }

  /** Wall-clock driven stepping; internally fixed-timestep. */
  step(realDtSec: number): void {
    if (this.paused) return;
    const dt = clamp(realDtSec, 0, 0.05) * clamp(this.timeScale, 0.05, 1);
    if (this.phase === 'settled') {
      // Physics frozen, but let debris and sparks keep flying.
      if (this.debris.length > 0 || this.sparks.length > 0) {
        let n = Math.min(6, Math.max(1, Math.round(dt / H)));
        while (n-- > 0) this.updateParticles(H);
      }
      return;
    }
    if (this.phase !== 'running' && this.phase !== 'impacted') return;
    this.acc += dt;
    let iter = 0;
    while (this.acc >= H && iter < 12) {
      this.substep(H);
      this.acc -= H;
      iter += 1;
      if (this.phase === 'settled') {
        this.acc = 0;
        break;
      }
    }
    if (this.acc > 0.2) this.acc = 0;
    this.updateShake();
  }

  private substep(h: number): void {
    this.tSim += h;

    // Friction only matters after the crash (pre-impact the car holds its
    // configured test speed, like a sled pull on the runway).
    if (this.phase === 'impacted') this.applyTireFriction(h);
    this.applyObstacleFriction(h);

    this.car.x += this.car.vx * h;
    this.car.z += this.car.vz * h;
    this.car.yaw = normalizeAngle(this.car.yaw + this.car.omega * h);
    this.obs.x += this.obs.vx * h;
    this.obs.z += this.obs.vz * h;
    this.obs.yaw = normalizeAngle(this.obs.yaw + this.obs.omega * h);
    this.obb.cx = this.obs.x;
    this.obb.cz = this.obs.z;
    this.obb.yaw = this.obs.yaw;

    const jn = this.solveContacts();
    this.trackImpact(jn);
    this.recordSkid(h);
    this.updateParticles(h);

    // Damped spring returning the car body pitch toward level.
    const k = Math.min(1, 2.2 * h);
    this.pitch += (0 - this.pitch) * k;
    this.clampVel();

    if (this.phase === 'impacted' && !this.impactEnded) {
      // Guard: if the car comes to rest while still pushing the obstacle,
      // close the impact phase so results are recorded and the run can settle.
      const creeping =
        Math.hypot(this.car.vx, this.car.vz) < 0.3 &&
        Math.abs(this.car.omega) < 0.3 &&
        Math.hypot(this.obs.vx, this.obs.vz) < 0.3;
      this.crawlFrames = creeping ? this.crawlFrames + 1 : 0;
      if (this.crawlFrames > 36) this.finalizeImpact();
    }

    if (this.phase === 'impacted' && this.impactEnded) {
      const calm =
        Math.hypot(this.car.vx, this.car.vz) < 0.3 &&
        Math.abs(this.car.omega) < 0.3 &&
        Math.hypot(this.obs.vx, this.obs.vz) < 0.3 &&
        !this.contactThisStep;
      this.settleFrames = calm ? this.settleFrames + 1 : 0;
      if (this.settleFrames > 24 || this.tSim - this.tImpactEnd > 10) this.finish();
    } else if (this.phase === 'running' && this.tSim > 40) {
      this.finish();
    }
  }

  private clampVel(): void {
    const s = Math.hypot(this.car.vx, this.car.vz);
    if (s > MAX_SPEED) {
      const f = MAX_SPEED / s;
      this.car.vx *= f;
      this.car.vz *= f;
    }
    this.car.omega = clamp(this.car.omega, -MAX_OMEGA, MAX_OMEGA);
    const so = Math.hypot(this.obs.vx, this.obs.vz);
    if (so > MAX_SPEED) {
      const f = MAX_SPEED / so;
      this.obs.vx *= f;
      this.obs.vz *= f;
    }
    this.obs.omega = clamp(this.obs.omega, -MAX_OMEGA, MAX_OMEGA);
  }

  private carAxes(): { fx: number; fz: number; rx: number; rz: number } {
    const fx = Math.sin(this.car.yaw);
    const fz = Math.cos(this.car.yaw);
    return { fx, fz, rx: fz, rz: -fx };
  }

  private collectContacts(): Contact[] {
    const out: Contact[] = [];
    const { fx, fz, rx, rz } = this.carAxes();
    for (const [ox, oz] of SPHERE_OFFSETS) {
      const wx = this.car.x + rx * ox + fx * oz;
      const wz = this.car.z + rz * ox + fz * oz;
      const hit = this.obb.testSphere(wx, wz, SPHERE_R);
      if (!hit) continue;
      out.push({
        nx: hit.nx,
        nz: hit.nz,
        px: hit.px,
        pz: hit.pz,
        depth: hit.depth,
        rcx: hit.px - this.car.x,
        rcz: hit.pz - this.car.z,
        rox: hit.px - this.obs.x,
        roz: hit.pz - this.obs.z,
      });
    }
    return out;
  }

  private solveContacts(): number {
    const contacts = this.collectContacts();
    this.contactThisStep = contacts.length > 0;
    if (contacts.length === 0) return 0;

    let sumJ = 0;
    const e = clamp(this.def.restitution, 0, 0.9);
    const muSurface = 0.75; // tire/body vs obstacle friction for sliding

    for (let iter = 0; iter < VEL_ITER; iter++) {
      sumJ = 0;
      for (const c of contacts) {
        // Relative velocity of car contact point minus obstacle contact point
        const cvx = this.car.vx + omegaCrossX(this.car.omega, c.rcx, c.rcz);
        const cvz = this.car.vz + omegaCrossZ(this.car.omega, c.rcx, c.rcz);
        const ovx = this.obs.vx + omegaCrossX(this.obs.omega, c.rox, c.roz);
        const ovz = this.obs.vz + omegaCrossZ(this.obs.omega, c.rox, c.roz);
        const rvx = cvx - ovx;
        const rvz = cvz - ovz;
        const vn = rvx * c.nx + rvz * c.nz;
        const kc = cross2(c.rcx, c.rcz, c.nx, c.nz);
        const ko = cross2(c.rox, c.roz, c.nx, c.nz);
        const kEff = this.car.invM + kc * kc * this.car.invI + this.obs.invM + ko * ko * this.obs.invI;
        if (kEff <= 0) continue;
        if (vn < 0) {
          let j = (-(1 + e) * vn) / kEff;
          if (j < 0) j = 0;
          sumJ += j;
          this.applyImpulse(c, j * c.nx, j * c.nz);
        }
        // Tangential friction impulse (Coulomb-clamped)
        const tvx = rvx - vn * c.nx;
        const tvz = rvz - vn * c.nz;
        const tl = Math.hypot(tvx, tvz);
        if (tl > 1e-4) {
          const tx = tvx / tl;
          const tz = tvz / tl;
          const ktc = cross2(c.rcx, c.rcz, tx, tz);
          const kto = cross2(c.rox, c.roz, tx, tz);
          const kEffT = this.car.invM + ktc * ktc * this.car.invI + this.obs.invM + kto * kto * this.obs.invI;
          if (kEffT > 0) {
            let jt = -tl / kEffT;
            const maxF = muSurface * sumJ * 0.25 + 1; // small normal base so sliding friction exists
            jt = clamp(jt, -maxF, maxF);
            this.applyImpulse(c, jt * tx, jt * tz);
          }
        }
      }
    }

    // Positional correction (split by inverse mass) to remove residual sink.
    const totalInv = this.car.invM + this.obs.invM;
    if (totalInv > 0) {
      for (const c of contacts) {
        const bias = Math.max(c.depth - SLOP, 0) * POS_BAUMGARTE;
        const shareC = this.car.invM / totalInv;
        this.car.x += c.nx * bias * shareC;
        this.car.z += c.nz * bias * shareC;
        this.obs.x -= c.nx * bias * (1 - shareC);
        this.obs.z -= c.nz * bias * (1 - shareC);
      }
    }
    return sumJ / VEL_ITER;
  }

  private applyImpulse(c: Contact, ix: number, iz: number): void {
    this.car.vx += ix * this.car.invM;
    this.car.vz += iz * this.car.invM;
    this.car.omega += cross2(c.rcx, c.rcz, ix, iz) * this.car.invI;
    this.obs.vx -= ix * this.obs.invM;
    this.obs.vz -= iz * this.obs.invM;
    this.obs.omega -= cross2(c.rox, c.roz, ix, iz) * this.obs.invI;
  }

  private trackImpact(jn: number): void {
    if (this.contactThisStep) {
      if (!this.firstHit) {
        this.firstHit = true;
        this.impactEnded = false;
        this.phase = 'impacted';
        this.tAtImpact = this.tSim;
        this.noContactFrames = 0;
        this.jAccum = 0;
        const speed = Math.hypot(this.car.vx, this.car.vz);
        this.v0 = speed;
        this.ke0 = 0.5 * this.car.m * speed * speed + 0.5 * this.car.I * this.car.omega * this.car.omega;
        // Grab first contact normal (from the freshly computed contacts).
        const contacts = this.collectContacts();
        const n0 = contacts.length > 0 ? contacts[0] : null;
        if (n0) {
          this.firstN = { x: n0.nx, z: n0.nz };
          this.contactPoint = { x: n0.px, z: n0.pz };
        }
        this.approachN = Math.max(0, -(this.car.vx * this.firstN.x + this.car.vz * this.firstN.z));
        this.firstYaw = this.car.yaw;
      }
      this.jAccum += jn;
      this.noContactFrames = 0;
    } else if (this.firstHit && !this.impactEnded) {
      this.noContactFrames += 1;
      if (this.noContactFrames >= 6) this.finalizeImpact();
    }
  }

  private finalizeImpact(): void {
    this.impactEnded = true;
    this.tImpactEnd = this.tSim;
    this.keAfter =
      0.5 * this.car.m * (this.car.vx * this.car.vx + this.car.vz * this.car.vz) +
      0.5 * this.car.I * this.car.omega * this.car.omega;

    const { zone } = impactZoneFromNormal(this.firstN.x, this.firstN.z, this.firstYaw);
    this.primaryZone = zone;
    const absorbed = absorbedNormalEnergy(this.car.m, this.def, this.approachN);
    this.damagePct = damageFromEnergy(absorbed, zone);
    this.forceKN = estimateImpactForceKN(this.jAccum);

    this.zoneDamage = { front: 0, rear: 0, left: 0, right: 0 };
    this.zoneDamage[zone] = this.damagePct;
    const stress = this.damagePct * 0.15;
    for (const z of Object.keys(this.zoneDamage) as DamageZone[]) {
      if (z !== zone) this.zoneDamage[z] = Math.min(this.zoneDamage[z] + stress, 100);
    }

    this.pitch = zone === 'front' || zone === 'rear'
      ? clamp(this.damagePct * 0.0026, 0, 0.22)
      : clamp(this.damagePct * 0.0018, 0, 0.15);
    this.shakeAmp = clamp(this.damagePct / 100, 0.08, 1);

    this.spawnDebris();
    this.spawnSparks();
  }

  private spawnDebris(): void {
    const r = this.rng;
    const count = Math.min(MAX_DEBRIS, 4 + Math.round(this.damagePct * 0.28));
    const srcX = this.contactPoint.x;
    const srcZ = this.contactPoint.z;
    for (let i = 0; i < count; i++) {
      const kind = r() < 0.55 ? 0 : r() < 0.6 ? 1 : 2;
      this.debris.push({
        x: srcX + (r() - 0.5) * 1.6,
        y: 0.5 + r() * 1.1,
        z: srcZ + (r() - 0.5) * 1.6,
        vx: this.car.vx * 0.22 + (r() - 0.5) * 11,
        vy: 2.5 + r() * 6.5,
        vz: this.car.vz * 0.22 + (r() - 0.5) * 11,
        rot: r() * Math.PI * 2,
        vrot: (r() - 0.5) * 14,
        size: 0.05 + r() * 0.16,
        kind,
        life: 0,
      });
    }
  }

  private spawnSparks(): void {
    if (this.damagePct < 18 || this.def.rigidity < 0.55) return;
    const r = this.rng;
    const count = Math.min(MAX_SPARKS - this.sparks.length, 20 + Math.round(this.damagePct * 0.45));
    for (let i = 0; i < count; i++) {
      const a = r() * Math.PI * 2;
      const sp = 3 + r() * 9;
      const life = 0.25 + r() * 0.45;
      this.sparks.push({
        x: this.contactPoint.x,
        y: 0.65 + r() * 0.5,
        z: this.contactPoint.z,
        vx: Math.cos(a) * sp,
        vy: 1 + r() * 4,
        vz: Math.sin(a) * sp,
        life,
        maxLife: life,
      });
    }
  }

  private updateParticles(h: number): void {
    for (const d of this.debris) {
      d.life += h;
      d.vy -= 9.81 * h;
      d.x += d.vx * h;
      d.y += d.vy * h;
      d.z += d.vz * h;
      d.rot += d.vrot * h;
      if (d.y < 0.03) {
        d.y = 0.03;
        d.vy = -d.vy * 0.32;
        d.vx *= 0.7;
        d.vz *= 0.7;
        d.vrot *= 0.5;
        if (Math.abs(d.vy) < 0.35) d.vy = 0;
      }
    }
    this.debris = this.debris.filter((d) => d.life < 10);

    for (const s of this.sparks) {
      s.life -= h;
      s.vy -= 9.81 * h;
      s.x += s.vx * h;
      s.y += s.vy * h;
      s.z += s.vz * h;
      if (s.y < 0.02) {
        s.y = 0.02;
        s.vy = Math.abs(s.vy) * 0.3;
      }
    }
    this.sparks = this.sparks.filter((s) => s.life > 0);
  }

  private recordSkid(_h: number): void {
    if (!this.firstHit) return;
    this.skidTick += 1;
    if (this.skidTick % 3 !== 0) return;
    const speed = Math.hypot(this.car.vx, this.car.vz);
    const { fx, fz, rx, rz } = this.carAxes();
    const vf = this.car.vx * fx + this.car.vz * fz;
    const vl = this.car.vx * rx + this.car.vz * rz;
    const slip = Math.hypot(vl, Math.max(0, Math.abs(vf) - 6));
    if (speed < 2.5 || slip < 1.4) return;
    if (this.skidMarks.length >= MAX_SKID) return;
    for (const side of [-1, 1]) {
      this.skidMarks.push({
        x: this.car.x + rx * 0.78 * side + fx * -1.35,
        z: this.car.z + rz * 0.78 * side + fz * -1.35,
        yaw: this.car.yaw,
        s: clamp(slip / 9, 0.25, 1),
      });
    }
  }

  private applyTireFriction(h: number): void {
    const { fx, fz, rx, rz } = this.carAxes();
    let vf = this.car.vx * fx + this.car.vz * fz;
    let vl = this.car.vx * rx + this.car.vz * rz;
    const g = 9.81;
    const roll = 0.5 * g; // body/tire rolling deceleration after the crash
    const lat = 0.78 * g; // lateral tire grip while sliding
    if (Math.abs(vf) > 1e-3) vf -= Math.sign(vf) * Math.min(Math.abs(vf), roll * h);
    else vf = 0;
    if (Math.abs(vl) > 1e-3) vl -= Math.sign(vl) * Math.min(Math.abs(vl), lat * h);
    else vl = 0;
    this.car.vx = fx * vf + rx * vl;
    this.car.vz = fz * vf + rz * vl;
    this.car.omega *= Math.max(0, 1 - 1.3 * h);
  }

  private applyObstacleFriction(h: number): void {
    if (this.obs.invM === 0) return;
    const speed = Math.hypot(this.obs.vx, this.obs.vz);
    if (speed < 1e-4 && Math.abs(this.obs.omega) < 1e-4) return;
    const dec = this.def.groundFrictionMu * 9.81 * h;
    if (dec > 0) {
      const f = Math.max(0, speed - dec) / (speed || 1);
      this.obs.vx *= f;
      this.obs.vz *= f;
    }
    this.obs.omega *= Math.max(0, 1 - 3 * h);
  }

  private updateShake(): void {
    if (this.shakeAmp <= 0) {
      this.shakeX = 0;
      this.shakeY = 0;
      if (this.phase === 'impacted' && this.impactEnded) this.shakeAmp = 0;
      return;
    }
    const decay = Math.max(0, 1 - (this.tSim - this.tAtImpact) / 0.55);
    const amp = this.shakeAmp * decay;
    this.shakeX = Math.sin(this.tSim * 71.7) * 0.24 * amp;
    this.shakeY = Math.sin(this.tSim * 53.3 + 1.7) * 0.18 * amp;
    if (decay <= 0) this.shakeAmp = 0;
  }

  private finish(): void {
    if (this.phase === 'settled') return;
    this.phase = 'settled';
    this.shakeAmp = 0;
    this.shakeX = 0;
    this.shakeY = 0;
    if (this.firstHit && !this.impactEnded) this.finalizeImpact();
    if (!this.firstHit) {
      this.damagePct = 0;
      this.forceKN = 0;
      this.primaryZone = 'front';
      this.v0 = 0;
      this.ke0 = 0;
      this.keAfter = 0;
      this.tAtImpact = this.tSim;
    }
    const result: CrashResult = {
      id: this.runCount,
      configuredSpeedKmh: clamp(this.params.speedKmh, 10, 200),
      impactSpeedKmh: this.v0 * 3.6,
      massKg: clamp(this.params.massKg, 700, 3000),
      angleDeg: clamp(this.params.angleDeg, -60, 60),
      obstacleLabel: this.def.label,
      forceKN: this.forceKN,
      damagePct: this.damagePct,
      severity: severityFor(this.damagePct),
      primaryZone: this.primaryZone,
      zoneDamage: { ...this.zoneDamage },
      finalX: this.car.x,
      finalZ: this.car.z,
      finalYawDeg: normalizeAngle(this.car.yaw) * RAD2DEG,
      keBeforeMJ: this.ke0 / 1e6,
      keAfterMJ: this.keAfter / 1e6,
      obstacleMovedM: this.obstacleMovedM,
      timeToImpactS: this.tAtImpact,
    };
    this.lastResult = result;
    if (this.onResult) this.onResult(result);
  }
}

export const IMPACT_TIME_ASSUMPTION_S = ASSUMED_IMPACT_TIME_S;
