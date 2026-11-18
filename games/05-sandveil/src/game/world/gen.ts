import { WORLD_W, WORLD_H, UNDERGROUND_Y, CAVERN_Y, biomeAt } from '../config';
import { mulberry32, fbm2, value1, hash2 } from '../core/rng';
import { B } from '../data/blocks';
import type { ItemId } from '../data/items';
import { World } from './world';

export type Loot = [ItemId, number];

export interface GenResult {
  world: World;
  chests: Map<number, Loot[]>;
}

function pick<T>(rnd: () => number, arr: T[]): T {
  return arr[Math.floor(rnd() * arr.length) % arr.length];
}

const SURFACE_BLOCK = [B.GRASS, B.SAND, B.SNOW, B.BLIGHT_GRASS];

const underPool: Loot[] = [
  ['silver_ore', 10],
  ['gold_ore', 8],
  ['iron_bar', 6],
  ['torch', 10],
  ['arrow', 25],
  ['salve', 2],
  ['draught', 1],
  ['coins', 24],
  ['coal', 12],
];
const cavernPool: Loot[] = [
  ['shadow_ore', 14],
  ['gold_bar', 4],
  ['draught', 3],
  ['torch', 12],
  ['coins', 45],
  ['silver_bar', 4],
];
const surfacePool: Loot[] = [
  ['torch', 8],
  ['arrow', 15],
  ['salve', 2],
  ['iron_ore', 6],
  ['coins', 10],
  ['wood', 20],
];

export function generateWorld(seed: number): GenResult {
  const rnd = mulberry32(seed >>> 0);
  const w = WORLD_W;
  const h = WORLD_H;
  const tiles = new Uint8Array(w * h);
  const heights = new Int16Array(w);
  const T = (x: number, y: number, id: number) => {
    if (x >= 0 && y >= 0 && x < w && y < h) tiles[y * w + x] = id;
  };
  const G = (x: number, y: number) => (x >= 0 && y >= 0 && x < w && y < h ? tiles[y * w + x] : y >= h ? B.STONE : B.AIR);

  // ---- heights ----
  for (let x = 0; x < w; x++) {
    const biome = biomeAt(x);
    const base = [70, 76, 64, 72][biome];
    const roll = (value1(x * 0.012, seed + 5) - 0.5) * 26;
    const bumps = (value1(x * 0.05, seed + 6) - 0.5) * 9;
    let y = Math.round(base + roll + bumps);
    if (biome === 1) y = Math.round(base + (value1(x * 0.02, seed + 15) - 0.5) * 10); // dunes
    heights[x] = Math.max(48, Math.min(86, y));
  }
  // smooth biome seams
  for (let pass = 0; pass < 2; pass++) {
    for (let x = 1; x < w - 1; x++) heights[x] = Math.round((heights[x - 1] + heights[x] * 2 + heights[x + 1]) / 4);
  }

  // ---- columns ----
  for (let x = 0; x < w; x++) {
    const biome = biomeAt(x);
    const h0 = heights[x];
    const surf = SURFACE_BLOCK[biome];
    for (let y = 0; y < h; y++) {
      if (y < h0) continue;
      if (y === h0) T(x, y, surf);
      else if (y < h0 + 5) T(x, y, biome === 1 ? B.SAND : B.DIRT);
      else if (y < h0 + 14) T(x, y, rnd() < 0.35 ? B.DIRT : B.STONE);
      else T(x, y, B.STONE);
    }
  }

  // ---- caves ----
  for (let x = 0; x < w; x++) {
    const h0 = heights[x];
    for (let y = h0 + 7; y < h - 3; y++) {
      if (G(x, y) === B.AIR) continue;
      const worm = fbm2(x * 0.045, y * 0.075, seed + 91, 3);
      let carve = worm > 0.465 && worm < 0.535;
      if (y > CAVERN_Y) {
        const big = fbm2(x * 0.028, y * 0.045, seed + 300, 3);
        carve = carve || big > 0.66 || big < 0.32;
        if (big > 0.6) T(x, y, B.STONE);
      }
      if (carve) T(x, y, B.AIR);
    }
  }

  // ---- ore veins ----
  const veinAt = (id: number, count: number, depthFn: (x: number) => [number, number], size: number) => {
    for (let i = 0; i < count; i++) {
      const x = Math.floor(rnd() * (w - 6)) + 3;
      const [y0, y1] = depthFn(x);
      const y = Math.floor(y0 + rnd() * Math.max(1, y1 - y0));
      const s = 2 + Math.floor(rnd() * size);
      for (let j = 0; j < s; j++) {
        const dx = Math.floor(rnd() * 3) - 1;
        const dy = Math.floor(rnd() * 3) - 1;
        if (G(x + dx, y + dy) === B.STONE) T(x + dx, y + dy, id);
      }
    }
  };
  veinAt(B.COPPER, 150, (x) => [heights[x] + 12, CAVERN_Y - 20], 4);
  veinAt(B.IRON, 110, (x) => [heights[x] + 16, CAVERN_Y + 10], 4);
  veinAt(B.SILVER, 80, (x) => [CAVERN_Y - 24, CAVERN_Y + 26], 4);
  veinAt(B.GOLD, 60, (x) => [CAVERN_Y - 8, WORLD_H - 8], 4);
  veinAt(B.SHADOW, 70, (x) => [CAVERN_Y + 8, WORLD_H - 6], 5);
  veinAt(B.COAL, 130, (x) => [heights[x] + 8, CAVERN_Y + 14], 4);

  const world = new World(tiles, heights);
  world.seed = seed;
  const chests = new Map<number, Loot[]>();
  const addChest = (x: number, y: number, loot: Loot[]) => {
    T(x, y, B.CHEST);
    chests.set(y * w + x, loot);
  };
  const rollLoot = (pool: Loot[], n: number, extra?: Loot[]): Loot[] => {
    const out: Loot[] = [...(extra || [])];
    const used = new Set<number>();
    for (let i = 0; i < n; i++) {
      let k = Math.floor(rnd() * pool.length);
      while (used.has(k)) k = (k + 1) % pool.length;
      used.add(k);
      out.push(pool[k]);
    }
    return out;
  };

  // ---- spawn plateau ----
  const spawnX = 65;
  const spawnY = heights[spawnX];
  for (let x = spawnX - 8; x <= spawnX + 8; x++) {
    const dy = spawnY - heights[x];
    if (dy > 0) {
      for (let y = heights[x]; y < spawnY; y++) T(x, y, B.AIR);
      T(x, spawnY, B.GRASS);
    } else if (dy < 0) {
      for (let y = heights[x] - 1; y >= spawnY; y--) if (G(x, y) === B.AIR) T(x, y, B.DIRT);
      T(x, spawnY, B.GRASS);
      for (let y = spawnY + 1; y <= spawnY + 2; y++) if (G(x, y) === B.AIR) T(x, y, B.DIRT);
    }
    heights[x] = spawnY;
    for (let y = 0; y < spawnY; y++) T(x, y, B.AIR);
    if (G(x, spawnY + 6) === B.AIR) T(x, spawnY + 3, B.DIRT), T(x, spawnY + 4, B.DIRT);
  }
  world.spawnX = spawnX;
  world.spawnY = spawnY - 2;

  // ---- starter cabin near spawn ----
  {
    const cx = spawnX + 34;
    const cy = heights[cx];
    for (let x = cx; x < cx + 9; x++) {
      for (let y = cy - 6; y < cy; y++) T(x, y, B.AIR);
      T(x, cy, B.DIRT);
    }
    for (let y = cy - 6; y <= cy; y++) {
      T(cx, y, B.WOOD);
      T(cx + 8, y, B.WOOD);
      for (let x = cx + 1; x < cx + 8; x++) T(x, cy - 6, B.WOOD);
    }
    T(cx, cy - 3, B.AIR); // doorway
    T(cx + 1, cy - 3, B.AIR);
    T(cx + 3, cy - 5, B.TORCH);
    T(cx + 6, cy - 5, B.TORCH);
    addChest(cx + 5, cy - 1, rollLoot(surfacePool, 2, [['copper_bar', 8], ['workbench', 0]]).filter((l) => l[1] > 0));
  }

  // ---- surface ruins ----
  for (let ri = 0; ri < 5; ri++) {
    const x = 110 + Math.floor(rnd() * (w - 140));
    const y = heights[x];
    for (let k = 0; k < 7; k++) {
      const px = x + k;
      const hh = 2 + Math.floor(hash2(px, ri, seed) * 5);
      for (let py = y - hh; py < y; py++) if (G(px, py) === B.AIR && hash2(px, py, seed + 3) > 0.35) T(px, py, B.BRICK);
      if (G(px, y) === B.AIR) T(px, y, B.DIRT);
    }
    if (rnd() < 0.7) addChest(x + 3, y - 1, rollLoot(surfacePool, 2));
  }

  // ---- underground rooms ----
  const carveUp = (rx: number, ry: number) => {
    let x = rx;
    let y = ry;
    while (y > heights[x] + 3) {
      T(x, y, B.AIR);
      T(x + 1, y, B.AIR);
      y -= 1;
      if (y % 9 === 0 && rnd() < 0.6) x += rnd() < 0.5 ? -1 : 1;
      x = Math.max(2, Math.min(w - 4, x));
    }
  };
  const roomDefs: { band: [number, number]; forced: Loot[] }[] = [
    { band: [UNDERGROUND_Y + 8, CAVERN_Y - 6], forced: [['swift_boots', 1]] },
    { band: [UNDERGROUND_Y + 10, CAVERN_Y + 6], forced: [] },
    { band: [UNDERGROUND_Y + 14, CAVERN_Y + 10], forced: [['titan_glove', 1]] },
    { band: [UNDERGROUND_Y + 12, CAVERN_Y + 8], forced: [] },
    { band: [CAVERN_Y + 2, WORLD_H - 16], forced: [] },
    { band: [CAVERN_Y + 6, WORLD_H - 14], forced: [['depth_amulet', 1]] },
    { band: [CAVERN_Y + 4, WORLD_H - 16], forced: [] },
    { band: [CAVERN_Y + 10, WORLD_H - 12], forced: [['arrow', 40]] },
  ];
  roomDefs.forEach((rd, ri) => {
    let placed = false;
    for (let tries = 0; tries < 30 && !placed; tries++) {
      const rw = 11 + Math.floor(rnd() * 4);
      const rh = 7 + Math.floor(rnd() * 3);
      const rx = 20 + Math.floor(rnd() * (w - 40 - rw));
      const ry = Math.floor(rd.band[0] + rnd() * Math.max(1, rd.band[1] - rd.band[0]));
      let ok = true;
      for (let x = rx - 2; x < rx + rw + 2 && ok; x++) for (let y = ry - 2; y < ry + rh + 2 && ok; y++) if (G(x, y) !== B.AIR && G(x, y) !== B.STONE && G(x, y) !== B.DIRT) ok = false;
      if (!ok) continue;
      for (let x = rx; x < rx + rw; x++)
        for (let y = ry; y < ry + rh; y++) {
          const edge = x === rx || x === rx + rw - 1 || y === ry || y === ry + rh - 1;
          T(x, y, edge ? B.BRICK : B.AIR);
        }
      T(rx + 2, ry + 1, B.TORCH);
      T(rx + rw - 3, ry + 1, B.TORCH);
      addChest(rx + Math.floor(rw / 2), ry + rh - 2, rollLoot(ry > CAVERN_Y ? cavernPool : underPool, 3, rd.forced));
      carveUp(rx + Math.floor(rw / 2) + 1, ry - 1);
      placed = true;
    }
    if (!placed) {
      const rw = 13;
      const rh = 8;
      const rx = 30 + ((ri * 97 + seed) % (w - 60 - rw));
      const ry = Math.floor((rd.band[0] + rd.band[1]) / 2);
      for (let x = rx; x < rx + rw; x++)
        for (let y = ry; y < ry + rh; y++) {
          const edge = x === rx || x === rx + rw - 1 || y === ry || y === ry + rh - 1;
          T(x, y, edge ? B.BRICK : B.AIR);
        }
      T(rx + 2, ry + 1, B.TORCH);
      T(rx + rw - 3, ry + 1, B.TORCH);
      addChest(rx + Math.floor(rw / 2), ry + rh - 2, rollLoot(ry > CAVERN_Y ? cavernPool : underPool, 3, rd.forced));
      carveUp(rx + Math.floor(rw / 2) + 1, ry - 1);
    }
  });

  // ---- trees & surface clutter ----
  for (let x = 3; x < w - 3; x++) {
    const biome = biomeAt(x);
    const h0 = heights[x];
    if (Math.abs(x - spawnX) < 6) continue;
    const density = [0.16, 0.045, 0.11, 0.24][biome];
    if (G(x, h0 + 1) !== B.AIR) continue;
    if (G(x, h0) !== B.GRASS && G(x, h0) !== B.SNOW && G(x, h0) !== B.SAND && G(x, h0) !== B.BLIGHT_GRASS && G(x, h0) !== B.DIRT) continue;
    if (rnd() > density) continue;
    const th = 4 + Math.floor(rnd() * 4);
    const ty = h0 - th;
    for (let y = h0 - 1; y >= ty; y--) T(x, y, B.WOOD);
    for (let dx = -2; dx <= 2; dx++)
      for (let dy = -2; dy <= 1; dy++) {
        const d = Math.abs(dx) + Math.abs(dy);
        if (d > 3 || (d === 3 && rnd() < 0.6)) continue;
        if (G(x + dx, ty + dy) === B.AIR) T(x + dx, ty + dy, B.LEAVES);
      }
    x += 2;
  }
  // surface bushes (herb source)
  for (let x = 2; x < w - 2; x++) {
    const h0 = heights[x];
    if (G(x, h0 + 1) === B.AIR && G(x, h0 - 1) === B.AIR && G(x, h0) !== B.AIR && rnd() < 0.06) T(x, h0 - 1, B.LEAVES);
  }
  // shadow nodules in blight surface as a tease
  for (let x = 395; x < 470; x += 7) {
    const h0 = heights[x];
    if (G(x, h0 + 1) === B.AIR && hash2(x, 7, seed) > 0.6) T(x, h0 + 1, B.SHADOW);
  }

  return { world, chests };
}
