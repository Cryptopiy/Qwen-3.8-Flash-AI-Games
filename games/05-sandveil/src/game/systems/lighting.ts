import Phaser from 'phaser';
import { TILE, VIEW_W, VIEW_H, WORLD_H, UNDERGROUND_Y, CAVERN_Y } from '../config';
import { B } from '../data/blocks';
import { World } from '../world/world';

const MARGIN = 6;
const COLS = Math.ceil(VIEW_W / TILE) + MARGIN * 2;
const ROWS = Math.ceil(VIEW_H / TILE) + MARGIN * 2 + 4;

export class LightSystem {
  private img: Phaser.GameObjects.Image;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private data: ImageData;
  private light = new Uint8Array(COLS * ROWS);
  private buckets: number[][] = [];
  private texKey = 'lightmap';
  frame = 0;
  private ox = 0;
  private oy = 0;

  constructor(private scene: Phaser.Scene) {
    [this.canvas, this.ctx] = this.mk(COLS, ROWS);
    this.data = this.ctx.createImageData(COLS, ROWS);
    if (!scene.textures.exists(this.texKey)) scene.textures.addCanvas(this.texKey, this.canvas);
    this.img = scene.add.image(0, 0, this.texKey).setOrigin(0).setDepth(45);
    this.img.setDisplaySize(COLS * TILE, ROWS * TILE);
    for (let i = 0; i < 17; i++) this.buckets.push([]);
  }

  private mk(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return [c, c.getContext('2d')!];
  }

  destroy() {
    this.img.destroy();
  }

  update(world: World, cam: Phaser.Cameras.Scene2D.Camera, dayFactor: number, playerTX: number, playerTY: number) {
    this.frame++;
    const ox = Math.floor(cam.scrollX / TILE) - MARGIN;
    const oy = Math.floor(cam.scrollY / TILE) - MARGIN;
    this.img.setPosition(ox * TILE, oy * TILE);
    this.ox = ox;
    this.oy = oy;
    if (this.frame % 4 !== 0) return;
    const sky = Math.round(60 + 195 * dayFactor);
    const L = this.light;
    L.fill(0);
    const set = (x: number, y: number, v: number) => {
      if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return;
      const i = y * COLS + x;
      if (v > L[i]) L[i] = v;
    };
    const get = (x: number, y: number) => (x < 0 || y < 0 || x >= COLS || y >= ROWS ? 0 : L[y * COLS + x]);

    for (let bx = 0; bx < COLS; bx++) {
      const wx = ox + bx;
      if (wx < 0 || wx >= world.w) continue;
      for (let by = 0; by < ROWS; by++) {
        const wy = oy + by;
        if (!world.inBounds(wx, wy)) break;
        if (world.opaque(wx, wy)) break;
        set(bx, by, sky);
      }
    }
    for (let bx = 0; bx < COLS; bx++)
      for (let by = 0; by < ROWS; by++) {
        const id = world.get(ox + bx, oy + by);
        if (id === B.TORCH) set(bx, by, 240);
        else if (id === B.FURNACE) set(bx, by, 160);
      }
    set(playerTX - ox, playerTY - oy, 90);
    set(playerTX - ox, playerTY - oy - 1, 80);

    for (const b of this.buckets) b.length = 0;
    for (let i = 0; i < L.length; i++) {
      const v = L[i];
      if (v > 4) this.buckets[Math.min(15, v >> 4)].push(i);
    }
    for (let level = 15; level >= 1; level--) {
      const q = this.buckets[level];
      for (let qi = 0; qi < q.length; qi++) {
        const i = q[qi];
        const l = L[i];
        if (l < level * 16) continue;
        const bx = i % COLS;
        const by = (i / COLS) | 0;
        for (let d = 0; d < 4; d++) {
          const nx = bx + (d === 0 ? 1 : d === 1 ? -1 : 0);
          const ny = by + (d === 2 ? 1 : d === 3 ? -1 : 0);
          if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) continue;
          const id = world.get(ox + nx, oy + ny);
          const dec = id === B.AIR || id === B.LEAVES || id === B.TORCH || id === B.PLATFORM ? 14 : 42;
          const nl = l - dec;
          if (nl <= get(nx, ny)) continue;
          const ni = ny * COLS + nx;
          L[ni] = nl;
          this.buckets[Math.min(15, nl >> 4)].push(ni);
        }
      }
    }

    const px = this.data.data;
    for (let by = 0; by < ROWS; by++) {
      const wy = oy + by;
      const surf = world.heightAt(Math.min(world.w - 1, Math.max(0, ox + (COLS >> 1))));
      let scale: number;
      if (wy < UNDERGROUND_Y - 6) scale = 0.06 + (1 - dayFactor) * 0.34;
      else if (wy < CAVERN_Y) scale = 0.55 + (1 - dayFactor) * 0.1;
      else scale = 0.72 + (1 - dayFactor) * 0.06;
      void surf;
      for (let bx = 0; bx < COLS; bx++) {
        const l = L[by * COLS + bx];
        const eff = Math.max(l, 52);
        const a = Math.max(0, Math.min(255, ((255 - eff) / 255) * 255 * scale));
        const i = (by * COLS + bx) * 4;
        px[i] = 10;
        px[i + 1] = 12;
        px[i + 2] = 26;
        px[i + 3] = a;
      }
    }
    this.ctx.putImageData(this.data, 0, 0);
    const tex = this.scene.textures.get(this.texKey) as Phaser.Textures.CanvasTexture;
    tex.refresh();
  }
}
