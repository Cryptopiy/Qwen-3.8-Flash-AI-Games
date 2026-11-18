import { Box2D, Circle2D, Vehicle } from '../core/types';

export function circleVsBoxPush(
  cx: number,
  cz: number,
  r: number,
  b: Box2D
): { x: number; z: number } | null {
  const px = Math.min(Math.max(cx, b.minX), b.maxX);
  const pz = Math.min(Math.max(cz, b.minZ), b.maxZ);
  const dx = cx - px;
  const dz = cz - pz;
  const d2 = dx * dx + dz * dz;
  if (d2 > r * r) return null;
  if (d2 > 1e-9) {
    const d = Math.sqrt(d2);
    const pen = r - d;
    return { x: (dx / d) * pen, z: (dz / d) * pen };
  }
  const left = cx - b.minX;
  const right = b.maxX - cx;
  const top = cz - b.minZ;
  const bot = b.maxZ - cz;
  const m = Math.min(left, right, top, bot);
  if (m === left) return { x: -(left + r), z: 0 };
  if (m === right) return { x: right + r, z: 0 };
  if (m === top) return { x: 0, z: -(top + r) };
  return { x: 0, z: bot + r };
}

export function circleVsCirclePush(
  cx: number,
  cz: number,
  r: number,
  o: Circle2D
): { x: number; z: number } | null {
  const dx = cx - o.x;
  const dz = cz - o.z;
  const rr = r + o.r;
  const d2 = dx * dx + dz * dz;
  if (d2 >= rr * rr) return null;
  if (d2 < 1e-9) return { x: rr, z: 0 };
  const d = Math.sqrt(d2);
  const pen = rr - d;
  return { x: (dx / d) * pen, z: (dz / d) * pen };
}

export function carCircles(v: Vehicle): Circle2D[] {
  const fx = Math.sin(v.heading);
  const fz = Math.cos(v.heading);
  const r = v.width * 0.62;
  const d = v.length * 0.28;
  return [-d, 0, d].map((o) => ({ x: v.pos.x + fx * o, z: v.pos.z + fz * o, r }));
}

export function resolveCircleWorld(
  px: number,
  pz: number,
  r: number,
  boxes: Box2D[],
  circles: Circle2D[]
): { x: number; z: number; hit: boolean } {
  let x = px;
  let z = pz;
  let hit = false;
  for (const b of boxes) {
    const p = circleVsBoxPush(x, z, r, b);
    if (p) {
      x += p.x;
      z += p.z;
      hit = true;
    }
  }
  for (const c of circles) {
    const p = circleVsCirclePush(x, z, r, c);
    if (p) {
      x += p.x;
      z += p.z;
      hit = true;
    }
  }
  return { x, z, hit };
}

export function resolveVehicleStatic(
  v: Vehicle,
  boxes: Box2D[],
  obstacles: Circle2D[]
): boolean {
  let hit = false;
  const fx = Math.sin(v.heading);
  const fz = Math.cos(v.heading);
  const r = v.width * 0.62;
  const d = v.length * 0.28;
  for (const o of [-d, 0, d]) {
    let dx = 0;
    let dz = 0;
    const cx = v.pos.x + fx * o;
    const cz = v.pos.z + fz * o;
    for (const b of boxes) {
      const p = circleVsBoxPush(cx + dx, cz + dz, r, b);
      if (p) {
        dx += p.x;
        dz += p.z;
      }
    }
    for (const c of obstacles) {
      const p = circleVsCirclePush(cx + dx, cz + dz, r, c);
      if (p) {
        dx += p.x;
        dz += p.z;
      }
    }
    if (dx !== 0 || dz !== 0) {
      v.pos.x += dx;
      v.pos.z += dz;
      hit = true;
    }
  }
  return hit;
}

export function resolveVehiclePair(
  a: Vehicle,
  b: Vehicle,
  aWeight: number,
  bWeight: number
): number {
  const ca = carCircles(a);
  const cb = carCircles(b);
  let hit = false;
  for (const A of ca) {
    for (const B of cb) {
      const dx = A.x - B.x;
      const dz = A.z - B.z;
      const rr = A.r + B.r;
      const d2 = dx * dx + dz * dz;
      if (d2 >= rr * rr) continue;
      let d = Math.sqrt(d2);
      let nx: number;
      let nz: number;
      if (d < 1e-6) {
        d = 1;
        nx = 1;
        nz = 0;
      } else {
        nx = dx / d;
        nz = dz / d;
      }
      const pen = rr - d;
      a.pos.x += nx * pen * aWeight;
      a.pos.z += nz * pen * aWeight;
      b.pos.x -= nx * pen * bWeight;
      b.pos.z -= nz * pen * bWeight;
      hit = true;
    }
  }
  return hit ? Math.abs(a.speed) + Math.abs(b.speed) : 0;
}
