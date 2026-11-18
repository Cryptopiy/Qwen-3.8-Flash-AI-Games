import { hash2 } from './core/rng';
import { B } from './data/blocks';

export const TILES_COLS = 8;

export function makeCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  return [c, ctx];
}

export function rect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function noiseFill(ctx: CanvasRenderingContext2D, fx: number, fy: number, base: string, specks: string[], seed: number, density = 0.35) {
  rect(ctx, fx, fy, 16, 16, base);
  for (let x = 0; x < 16; x++)
    for (let y = 0; y < 16; y++) {
      const r = hash2(fx + x, fy + y, seed);
      if (r < density) rect(ctx, fx + x, fy + y, 1, 1, specks[Math.floor(hash2(x, y, seed + 7) * specks.length) % specks.length]);
    }
}

function specks(ctx: CanvasRenderingContext2D, fx: number, fy: number, color: string, seed: number, n = 10) {
  for (let i = 0; i < n; i++) {
    const x = Math.floor(hash2(i, seed, 11) * 12) + 2;
    const y = Math.floor(hash2(i, seed, 12) * 12) + 2;
    rect(ctx, fx + x, fy + y, 2, 2, color);
    rect(ctx, fx + x + 1, fy + y - 1, 1, 1, '#ffffff55');
  }
}

export function drawBlockTile(ctx: CanvasRenderingContext2D, fx: number, fy: number, id: number) {
  switch (id) {
    case B.DIRT:
      noiseFill(ctx, fx, fy, '#6b4a2f', ['#5d3f27', '#7a5838', '#553a24'], 21);
      break;
    case B.GRASS:
      noiseFill(ctx, fx, fy, '#6b4a2f', ['#5d3f27', '#7a5838'], 21);
      rect(ctx, fx, fy, 16, 4, '#3f9e3f');
      for (let x = 0; x < 16; x++) {
        if (hash2(x, 0, 32) < 0.6) rect(ctx, fx + x, fy + 4, 1, 2, hash2(x, 1, 33) < 0.5 ? '#348a36' : '#4db24a');
        rect(ctx, fx + x, fy, 1, 1, hash2(x, 2, 34) < 0.5 ? '#348a36' : '#4db24a');
      }
      break;
    case B.BLIGHT_GRASS:
      noiseFill(ctx, fx, fy, '#3a2148', ['#311b3d', '#452a55'], 41);
      rect(ctx, fx, fy, 16, 4, '#8a3fb0');
      for (let x = 0; x < 16; x++) if (hash2(x, 3, 42) < 0.5) rect(ctx, fx + x, fy + 4, 1, 2, '#6f2f92');
      break;
    case B.SAND:
      noiseFill(ctx, fx, fy, '#d9bf7f', ['#cdb072', '#e4cc90', '#c3a566'], 51);
      break;
    case B.SNOW:
      rect(ctx, fx, fy, 16, 16, '#e8f1f7');
      noiseFill(ctx, fx, fy, '#eef4f8', ['#dce8f0', '#f7fbfe'], 61, 0.3);
      rect(ctx, fx, fy + 12, 16, 4, '#6b4a2f');
      for (let x = 0; x < 16; x++) if (hash2(x, 4, 62) < 0.5) rect(ctx, fx + x, fy + 11, 1, 1, '#5d3f27');
      break;
    case B.STONE:
      noiseFill(ctx, fx, fy, '#6e6e78', ['#62626c', '#7a7a85', '#585860'], 71);
      break;
    case B.BRICK:
      noiseFill(ctx, fx, fy, '#6a6a74', ['#5f5f68', '#757580'], 72, 0.25);
      rect(ctx, fx, fy + 7, 16, 1, '#45454d');
      rect(ctx, fx, fy + 15, 16, 1, '#45454d');
      rect(ctx, fx + 7, fy, 1, 7, '#45454d');
      rect(ctx, fx + 3, fy + 8, 1, 7, '#45454d');
      rect(ctx, fx + 11, fy + 8, 1, 7, '#45454d');
      break;
    case B.WOOD:
      rect(ctx, fx, fy, 16, 16, '#7a5230');
      for (let x = 0; x < 16; x++) {
        const c = hash2(x, 5, 81) < 0.35 ? '#684526' : hash2(x, 5, 82) < 0.7 ? '#8a5f38' : '#5c3c20';
        rect(ctx, fx + x, fy, 1, 16, c);
      }
      rect(ctx, fx + 5, fy, 2, 16, '#5c3c20');
      rect(ctx, fx + 11, fy, 1, 16, '#95693f');
      break;
    case B.LEAVES:
      for (let x = 0; x < 16; x++)
        for (let y = 0; y < 16; y++) {
          const r = hash2(x, y, 91);
          if (r < 0.78) rect(ctx, fx + x, fy + y, 1, 1, r < 0.25 ? '#2c7a33' : r < 0.55 ? '#3f9a44' : '#57b45c');
        }
      break;
    case B.COPPER:
      drawBlockTile(ctx, fx, fy, B.STONE);
      specks(ctx, fx, fy, '#c8783c', 101);
      break;
    case B.IRON:
      drawBlockTile(ctx, fx, fy, B.STONE);
      specks(ctx, fx, fy, '#9aa7b5', 102);
      break;
    case B.SILVER:
      drawBlockTile(ctx, fx, fy, B.STONE);
      specks(ctx, fx, fy, '#d7e6ef', 103);
      break;
    case B.GOLD:
      drawBlockTile(ctx, fx, fy, B.STONE);
      specks(ctx, fx, fy, '#e6c14a', 104);
      break;
    case B.SHADOW:
      noiseFill(ctx, fx, fy, '#3f2450', ['#341d43', '#4a2c5e'], 105);
      specks(ctx, fx, fy, '#b46bff', 106, 7);
      break;
    case B.COAL:
      drawBlockTile(ctx, fx, fy, B.STONE);
      specks(ctx, fx, fy, '#26262e', 107, 12);
      break;
    case B.TORCH: {
      rect(ctx, fx + 7, fy + 6, 2, 10, '#8a5f38');
      rect(ctx, fx + 7, fy + 5, 2, 2, '#e8a13a');
      rect(ctx, fx + 6, fy + 2, 4, 4, '#f7c948');
      rect(ctx, fx + 7, fy + 1, 2, 2, '#fde9a0');
      rect(ctx, fx + 7, fy, 2, 1, '#ffffff');
      break;
    }
    case B.WORKBENCH:
      rect(ctx, fx, fy + 4, 16, 4, '#9a6a3c');
      rect(ctx, fx, fy + 4, 16, 1, '#b5834e');
      rect(ctx, fx + 1, fy + 8, 3, 8, '#7a5230');
      rect(ctx, fx + 12, fy + 8, 3, 8, '#7a5230');
      rect(ctx, fx + 5, fy + 9, 6, 2, '#58a15c');
      rect(ctx, fx + 6, fy + 11, 4, 1, '#d9d9d9');
      rect(ctx, fx + 11, fy + 1, 2, 5, '#6e6e78');
      break;
    case B.FURNACE:
      noiseFill(ctx, fx, fy, '#77777f', ['#6a6a72', '#82828c'], 111, 0.3);
      rect(ctx, fx + 2, fy + 7, 12, 8, '#2a2a30');
      rect(ctx, fx + 3, fy + 9, 10, 6, '#e0722a');
      rect(ctx, fx + 4, fy + 11, 8, 4, '#f7b64a');
      rect(ctx, fx + 6, fy + 13, 4, 2, '#fde9a0');
      rect(ctx, fx, fy, 16, 2, '#5a5a62');
      break;
    case B.ANVIL:
      rect(ctx, fx + 2, fy + 4, 12, 3, '#3c3c46');
      rect(ctx, fx + 1, fy + 7, 14, 2, '#4a4a55');
      rect(ctx, fx + 5, fy + 9, 6, 3, '#3c3c46');
      rect(ctx, fx + 3, fy + 12, 10, 3, '#4a4a55');
      rect(ctx, fx + 2, fy + 4, 12, 1, '#666672');
      rect(ctx, fx + 12, fy + 4, 3, 3, '#4a4a55');
      break;
    case B.CHEST:
      rect(ctx, fx + 1, fy + 4, 14, 11, '#8a5a2e');
      rect(ctx, fx + 1, fy + 4, 14, 3, '#a06a36');
      rect(ctx, fx + 1, fy + 9, 14, 2, '#5c3c20');
      rect(ctx, fx + 7, fy + 8, 3, 4, '#e6c14a');
      rect(ctx, fx + 8, fy + 10, 1, 2, '#8a6a10');
      rect(ctx, fx + 1, fy + 4, 1, 11, '#5c3c20');
      rect(ctx, fx + 14, fy + 4, 1, 11, '#5c3c20');
      break;
    case B.PLATFORM:
      rect(ctx, fx, fy, 16, 6, '#9a6a3c');
      rect(ctx, fx, fy, 16, 2, '#b5834e');
      rect(ctx, fx + 4, fy, 1, 6, '#7a5230');
      rect(ctx, fx + 11, fy, 1, 6, '#7a5230');
      break;
    default:
      rect(ctx, fx, fy, 16, 16, '#ff00ff');
  }
}

let tilesCanvas: HTMLCanvasElement | null = null;
export function buildTilesCanvas(): HTMLCanvasElement {
  if (tilesCanvas) return tilesCanvas;
  const ids: number[] = [];
  for (let i = 0; i <= B.BLIGHT_GRASS; i++) ids.push(i);
  const rows = Math.ceil(ids.length / TILES_COLS);
  const [c, ctx] = makeCanvas(TILES_COLS * 16, rows * 16);
  ids.forEach((id) => drawBlockTile(ctx, (id % TILES_COLS) * 16, Math.floor(id / TILES_COLS) * 16, id));
  tilesCanvas = c;
  return c;
}
