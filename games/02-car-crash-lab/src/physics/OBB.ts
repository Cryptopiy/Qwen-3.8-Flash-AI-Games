import { clamp } from './geometry';

export interface SphereHit {
  nx: number; // world normal, points from the box toward the sphere center
  nz: number;
  depth: number; // penetration depth (m)
  px: number; // world contact point (closest point on the box surface)
  pz: number;
}

/**
 * Oriented bounding box in the ground plane (XZ). Vertical extent is handled
 * visually; the planar crash model uses only the XZ footprint, which is the
 * real 3D rectangle the vehicle collides with.
 */
export class OBB {
  cx: number;
  cz: number;
  hx: number;
  hz: number;
  yaw: number;

  constructor(cx: number, cz: number, hx: number, hz: number, yaw = 0) {
    this.cx = cx;
    this.cz = cz;
    this.hx = Math.max(0.05, hx);
    this.hz = Math.max(0.05, hz);
    this.yaw = yaw;
  }

  // Sphere (center px,pz radius r) vs this box. Returns null when separated.
  testSphere(px: number, pz: number, r: number): SphereHit | null {
    const s = Math.sin(this.yaw);
    const c = Math.cos(this.yaw);
    const dx = px - this.cx;
    const dz = pz - this.cz;
    // Box local axes: right = (c, -s), forward = (s, c)
    const lx = dx * c - dz * s;
    const lz = dx * s + dz * c;

    const clx = clamp(lx, -this.hx, this.hx);
    const clz = clamp(lz, -this.hz, this.hz);

    let nlx: number;
    let nlz: number;
    let depth: number;
    let inx: number;
    let inz: number;

    const inside = Math.abs(lx) <= this.hx && Math.abs(lz) <= this.hz;
    if (inside) {
      const pxp = this.hx - Math.abs(lx);
      const pzp = this.hz - Math.abs(lz);
      if (pxp <= pzp) {
        nlx = lx >= 0 ? 1 : -1;
        nlz = 0;
        depth = r + pxp;
        inx = nlx * this.hx;
        inz = clz;
      } else {
        nlx = 0;
        nlz = lz >= 0 ? 1 : -1;
        depth = r + pzp;
        inx = clx;
        inz = nlz * this.hz;
      }
    } else {
      const ex = lx - clx;
      const ez = lz - clz;
      const d2 = ex * ex + ez * ez;
      if (d2 >= r * r) return null;
      const d = Math.sqrt(d2) || 1e-6;
      nlx = ex / d;
      nlz = ez / d;
      depth = r - d;
      inx = clx;
      inz = clz;
    }

    const wnx = nlx * c + nlz * s;
    const wnz = -nlx * s + nlz * c;
    const wpx = this.cx + inx * c + inz * s;
    const wpz = this.cz - inx * s + inz * c;
    return { nx: wnx, nz: wnz, depth, px: wpx, pz: wpz };
  }
}
