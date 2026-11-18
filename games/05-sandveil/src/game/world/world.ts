import { WORLD_W, WORLD_H } from '../config';
import { B, BLOCKS, isOpaque, isPlatform, isSolid } from '../data/blocks';

export interface Room {
  x: number;
  y: number;
  w: number;
  h: number;
}

export class World {
  w = WORLD_W;
  h = WORLD_H;
  tiles: Uint8Array;
  heights: Int16Array;
  diff = new Map<number, number>();
  openedChests = new Set<number>();
  spawnX = 65;
  spawnY = 60;
  seed = 1;

  constructor(tiles: Uint8Array, heights: Int16Array) {
    this.tiles = tiles;
    this.heights = heights;
  }

  idx(x: number, y: number): number {
    return y * this.w + x;
  }
  inBounds(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < this.w && y < this.h;
  }
  get(x: number, y: number): number {
    if (!this.inBounds(x, y)) return y >= this.h ? B.STONE : B.AIR;
    return this.tiles[this.idx(x, y)];
  }
  solid(x: number, y: number): boolean {
    return isSolid(this.get(x, y));
  }
  opaque(x: number, y: number): boolean {
    return isOpaque(this.get(x, y));
  }
  platform(x: number, y: number): boolean {
    return isPlatform(this.get(x, y));
  }

  set(x: number, y: number, id: number) {
    if (!this.inBounds(x, y)) return;
    const i = this.idx(x, y);
    this.tiles[i] = id;
    this.diff.set(i, id);
  }

  def(x: number, y: number) {
    return BLOCKS[this.get(x, y)];
  }

  heightAt(x: number): number {
    return this.heights[Math.max(0, Math.min(this.w - 1, x))];
  }

  firstSolidBelow(x: number, y: number): number {
    for (let yy = y; yy < this.h; yy++) if (this.solid(x, yy)) return yy;
    return this.h - 1;
  }

  clearAboveColumn(x: number, top: number, bottom: number) {
    for (let y = top; y <= bottom; y++) if (this.get(x, y) !== B.AIR) this.set(x, y, B.AIR);
  }

  serializeDiff(): number[] {
    const out: number[] = [];
    this.diff.forEach((v, k) => {
      out.push(k, v);
    });
    return out;
  }
  applyDiff(arr: number[]) {
    for (let i = 0; i + 1 < arr.length; i += 2) {
      const k = arr[i];
      if (k >= 0 && k < this.tiles.length) {
        this.tiles[k] = arr[i + 1];
        this.diff.set(k, arr[i + 1]);
      }
    }
  }
}
