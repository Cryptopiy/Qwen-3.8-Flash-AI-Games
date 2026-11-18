import * as THREE from 'three';
import { clamp, lerpAngle } from '../core/utils';

export class CameraRig {
  yaw = -2.4;
  pitch = 0.45;
  dist = 11;
  cur = new THREE.Vector3();
  private dragging = false;
  private lastX = 0;
  private lastY = 0;

  private onDown = (e: PointerEvent): void => {
    this.dragging = true;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
  };

  private onMove = (e: PointerEvent): void => {
    if (!this.dragging) return;
    this.yaw -= (e.clientX - this.lastX) * 0.005;
    this.pitch = clamp(this.pitch + (e.clientY - this.lastY) * 0.004, 0.12, 1.2);
    this.lastX = e.clientX;
    this.lastY = e.clientY;
  };

  private onUp = (): void => {
    this.dragging = false;
  };

  private onWheel = (e: WheelEvent): void => {
    e.preventDefault();
    this.dist = clamp(this.dist + e.deltaY * 0.012, 5, 26);
  };

  attach(canvas: HTMLCanvasElement): void {
    canvas.addEventListener('pointerdown', this.onDown);
    window.addEventListener('pointermove', this.onMove);
    window.addEventListener('pointerup', this.onUp);
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
  }

  detach(canvas: HTMLCanvasElement): void {
    canvas.removeEventListener('pointerdown', this.onDown);
    window.removeEventListener('pointermove', this.onMove);
    window.removeEventListener('pointerup', this.onUp);
    canvas.removeEventListener('wheel', this.onWheel);
  }

  desiredPosition(target: THREE.Vector3, dist: number): THREE.Vector3 {
    const cp = Math.cos(this.pitch);
    const sp = Math.sin(this.pitch);
    const d = Math.min(this.dist, dist);
    return new THREE.Vector3(
      target.x + Math.sin(this.yaw) * cp * d,
      target.y + sp * d,
      target.z + Math.cos(this.yaw) * cp * d
    );
  }

  update(dt: number, cam: THREE.PerspectiveCamera, target: THREE.Vector3, autoYaw: number | null, wantDist: number): void {
    if (autoYaw !== null && !this.dragging) {
      this.yaw = lerpAngle(this.yaw, autoYaw, clamp(dt * 1.4, 0, 1));
    }
    this.dist += (wantDist - this.dist) * clamp(dt * 1.8, 0, 1);
    const want = this.desiredPosition(target, wantDist);
    this.cur.lerp(want, clamp(dt * 6, 0, 1));
    if (!Number.isFinite(this.cur.x) || !Number.isFinite(this.cur.y) || !Number.isFinite(this.cur.z)) {
      this.cur.copy(want);
    }
    cam.position.copy(this.cur);
    cam.lookAt(target.x, target.y + 1.4, target.z);
  }
}
