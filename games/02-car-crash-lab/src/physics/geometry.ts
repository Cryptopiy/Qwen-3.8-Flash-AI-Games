// Small deterministic math utilities shared by the simulation modules.

export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;

export function clamp(v: number, min: number, max: number): number {
  return v < min ? min : v > max ? max : v;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// Wrap an angle (radians) into (-PI, PI].
export function normalizeAngle(a: number): number {
  let x = a % (Math.PI * 2);
  if (x > Math.PI) x -= Math.PI * 2;
  if (x <= -Math.PI) x += Math.PI * 2;
  return x;
}

// Y-component of the 2D cross product of planar vectors (x,z): a x b.
export function cross2(ax: number, az: number, bx: number, bz: number): number {
  return ax * bz - az * bx;
}

// (0,w,0) x (rx,0,rz) expressed as a planar (x,z) vector.
export function omegaCrossX(w: number, rx: number, rz: number): number {
  return w * rz;
}
export function omegaCrossZ(w: number, rx: number, rz: number): number {
  return -w * rx;
}

export function finite(v: number, fallback = 0): number {
  return Number.isFinite(v) ? v : fallback;
}
