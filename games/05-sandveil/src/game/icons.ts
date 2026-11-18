import { ITEMS, type ItemId } from './data/items';
import { B } from './data/blocks';
import { makeCanvas, rect, drawBlockTile, TILES_COLS } from './art';

const cache = new Map<ItemId, HTMLCanvasElement>();

function canvasFor(id: ItemId): HTMLCanvasElement {
  const hit = cache.get(id);
  if (hit) return hit;
  const [c, ctx] = makeCanvas(32, 32);
  drawIcon(ctx, id);
  cache.set(id, c);
  return c;
}

export function iconDataURL(id: ItemId): string {
  return canvasFor(id).toDataURL();
}
export function iconCanvas(id: ItemId): HTMLCanvasElement {
  return canvasFor(id);
}
export function allItemIds(): ItemId[] {
  return Object.keys(ITEMS);
}

function tileIcon(ctx: CanvasRenderingContext2D, blockId: number) {
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(buildTilesLocal(), (blockId % TILES_COLS) * 16, Math.floor(blockId / TILES_COLS) * 16, 16, 16, 0, 0, 32, 32);
}

import { buildTilesCanvas } from './art';
function buildTilesLocal() {
  return buildTilesCanvas();
}

const TIER_COLORS: Record<string, [string, string]> = {
  copper: ['#c8783c', '#8a4e22'],
  iron: ['#9aa7b5', '#5f6a75'],
  silver: ['#d7e6ef', '#93a7b3'],
  star: ['#6fd8e8', '#2a9aa8'],
  wood: ['#a06a36', '#6a4420'],
  shadow: ['#9a4fd0', '#5c2a82'],
};

function pickHead(ctx: CanvasRenderingContext2D, head: string, dark: string) {
  ctx.strokeStyle = '#7a5230';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(8, 26);
  ctx.lineTo(20, 10);
  ctx.stroke();
  ctx.strokeStyle = dark;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(14, 6);
  ctx.quadraticCurveTo(24, 4, 30, 12);
  ctx.stroke();
  ctx.strokeStyle = head;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(15, 7);
  ctx.quadraticCurveTo(24, 5, 29, 12);
  ctx.stroke();
}

function axeHead(ctx: CanvasRenderingContext2D, head: string, dark: string) {
  ctx.strokeStyle = '#7a5230';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(9, 27);
  ctx.lineTo(19, 9);
  ctx.stroke();
  ctx.fillStyle = dark;
  ctx.fillRect(18, 6, 8, 9);
  ctx.fillStyle = head;
  ctx.fillRect(19, 7, 6, 7);
  rect(ctx, 23, 7, 2, 7, '#ffffff44');
}

function sword(ctx: CanvasRenderingContext2D, blade: string, edge: string, hilt: string) {
  ctx.strokeStyle = hilt;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(6, 28);
  ctx.lineTo(12, 22);
  ctx.stroke();
  ctx.strokeStyle = '#3a2a1a';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(12, 26);
  ctx.lineTo(18, 20);
  ctx.stroke();
  ctx.strokeStyle = blade;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(15, 19);
  ctx.lineTo(28, 5);
  ctx.stroke();
  ctx.strokeStyle = edge;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(17, 18);
  ctx.lineTo(28, 7);
  ctx.stroke();
}

function bar(ctx: CanvasRenderingContext2D, base: string, light: string) {
  ctx.fillStyle = base;
  ctx.beginPath();
  ctx.moveTo(4, 22);
  ctx.lineTo(10, 12);
  ctx.lineTo(28, 12);
  ctx.lineTo(22, 22);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = light;
  ctx.fillRect(11, 13, 15, 3);
  ctx.fillStyle = '#00000033';
  ctx.fillRect(5, 20, 16, 2);
}

function potion(ctx: CanvasRenderingContext2D, color: string) {
  rect(ctx, 13, 4, 6, 4, '#8a95a5');
  ctx.fillStyle = '#cfd8e0cc';
  ctx.beginPath();
  ctx.arc(16, 19, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(16, 20, 7, 0, Math.PI * 2);
  ctx.fill();
  rect(ctx, 12, 17, 3, 3, '#ffffff88');
}

function drawIcon(ctx: CanvasRenderingContext2D, id: ItemId) {
  const def = ITEMS[id];
  ctx.imageSmoothingEnabled = false;
  if (def?.block !== undefined) {
    if (def.block === B.WORKBENCH || def.block === B.FURNACE || def.block === B.ANVIL || def.block === B.CHEST) {
      tileIcon(ctx, def.block);
    } else {
      tileIcon(ctx, def.block);
    }
    return;
  }
  switch (id) {
    case 'copper_ore':
    case 'iron_ore':
    case 'silver_ore':
    case 'gold_ore':
    case 'shadow_ore':
    case 'coal': {
      tileIcon(ctx, id === 'shadow_ore' ? B.SHADOW : B.STONE);
      const col = { copper_ore: '#c8783c', iron_ore: '#9aa7b5', silver_ore: '#d7e6ef', gold_ore: '#e6c14a', shadow_ore: '#b46bff', coal: '#26262e' }[id]!;
      rect(ctx, 6, 6, 4, 4, col);
      rect(ctx, 22, 10, 4, 4, col);
      rect(ctx, 12, 22, 4, 4, col);
      rect(ctx, 7, 6, 1, 1, '#ffffff77');
      break;
    }
    case 'copper_bar':
      bar(ctx, '#c8783c', '#e09a5c');
      break;
    case 'iron_bar':
      bar(ctx, '#9aa7b5', '#c3ccd6');
      break;
    case 'silver_bar':
      bar(ctx, '#d7e6ef', '#ffffff');
      break;
    case 'gold_bar':
      bar(ctx, '#e6c14a', '#f7e08a');
      break;
    case 'shadow_bar':
      bar(ctx, '#9a4fd0', '#c78ae8');
      break;
    case 'stellarite_bar':
      bar(ctx, '#3fc0d0', '#aef2fa');
      rect(ctx, 14, 14, 3, 3, '#ffffff');
      break;
    case 'herb':
      ctx.strokeStyle = '#3f9a44';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(16, 28);
      ctx.lineTo(16, 12);
      ctx.stroke();
      ctx.fillStyle = '#57b45c';
      ctx.beginPath();
      ctx.ellipse(10, 16, 5, 3, -0.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(22, 13, 5, 3, 0.6, 0, Math.PI * 2);
      ctx.fill();
      rect(ctx, 14, 6, 4, 4, '#8fe89a');
      break;
    case 'copper_pick':
      pickHead(ctx, ...TIER_COLORS.copper);
      break;
    case 'iron_pick':
      pickHead(ctx, ...TIER_COLORS.iron);
      break;
    case 'silver_pick':
      pickHead(ctx, ...TIER_COLORS.silver);
      break;
    case 'star_pick':
      pickHead(ctx, ...TIER_COLORS.star);
      break;
    case 'wooden_axe':
      axeHead(ctx, ...TIER_COLORS.wood);
      break;
    case 'copper_axe':
      axeHead(ctx, ...TIER_COLORS.copper);
      break;
    case 'wooden_sword':
      sword(ctx, ...TIER_COLORS.wood, '#5c3c20');
      break;
    case 'copper_sword':
      sword(ctx, ...TIER_COLORS.copper, '#8a5f38');
      break;
    case 'iron_sword':
      sword(ctx, ...TIER_COLORS.iron, '#5c3c20');
      break;
    case 'silver_sword':
      sword(ctx, ...TIER_COLORS.silver, '#8a6a10');
      break;
    case 'star_blade':
      sword(ctx, ...TIER_COLORS.star, '#e6c14a');
      rect(ctx, 24, 3, 4, 4, '#ffffff99');
      break;
    case 'bow':
      ctx.strokeStyle = '#8a5f38';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(10, 16, 12, -1.3, 1.3);
      ctx.stroke();
      ctx.strokeStyle = '#d9d9d9';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(13, 5);
      ctx.lineTo(13, 27);
      ctx.stroke();
      break;
    case 'arrow':
      ctx.strokeStyle = '#a06a36';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(6, 26);
      ctx.lineTo(24, 8);
      ctx.stroke();
      ctx.fillStyle = '#d9d9d9';
      ctx.beginPath();
      ctx.moveTo(24, 8);
      ctx.lineTo(28, 4);
      ctx.lineTo(26, 10);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#cfd8e0';
      ctx.fillRect(5, 24, 5, 2);
      break;
    case 'salve':
      potion(ctx, '#7ad07a');
      break;
    case 'draught':
      potion(ctx, '#e05c5c');
      break;
    case 'coins':
      ctx.fillStyle = '#e6c14a';
      ctx.beginPath();
      ctx.arc(16, 16, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#b5952f';
      ctx.beginPath();
      ctx.arc(16, 16, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f7e08a';
      ctx.fillRect(14, 10, 3, 12);
      break;
    case 'wooden_armor':
      armor(ctx, '#a06a36', '#6a4420');
      break;
    case 'copper_armor':
      armor(ctx, '#c8783c', '#8a4e22');
      break;
    case 'iron_armor':
      armor(ctx, '#9aa7b5', '#5f6a75');
      break;
    case 'shadow_armor':
      armor(ctx, '#9a4fd0', '#5c2a82');
      break;
    case 'depth_amulet':
      ctx.strokeStyle = '#e6c14a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(16, 10, 8, 0.3, Math.PI - 0.3);
      ctx.stroke();
      ctx.fillStyle = '#4a90d9';
      ctx.beginPath();
      ctx.arc(16, 21, 6, 0, Math.PI * 2);
      ctx.fill();
      rect(ctx, 13, 18, 3, 3, '#cfe8ff');
      break;
    case 'swift_boots':
      ctx.fillStyle = '#8a5f38';
      ctx.fillRect(8, 8, 6, 12);
      ctx.fillRect(8, 18, 14, 6);
      ctx.fillStyle = '#5c3c20';
      ctx.fillRect(8, 22, 14, 2);
      rect(ctx, 20, 18, 2, 2, '#f7c948');
      break;
    case 'titan_glove':
      ctx.fillStyle = '#9aa7b5';
      ctx.fillRect(8, 12, 14, 12);
      ctx.fillRect(22, 14, 4, 8);
      ctx.fillStyle = '#5f6a75';
      ctx.fillRect(8, 22, 14, 3);
      rect(ctx, 11, 14, 3, 5, '#e6c14a');
      rect(ctx, 16, 14, 3, 5, '#e6c14a');
      break;
    case 'star_core':
      ctx.fillStyle = '#2a9aa8';
      diamond(ctx, 16, 16, 12);
      ctx.fillStyle = '#6fd8e8';
      diamond(ctx, 16, 16, 8);
      ctx.fillStyle = '#ffffff';
      diamond(ctx, 16, 14, 3);
      break;
    case 'gloom_bulb':
      ctx.fillStyle = '#4a2456';
      ctx.beginPath();
      ctx.arc(16, 18, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#b46bff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(12, 12);
      ctx.lineTo(14, 24);
      ctx.moveTo(20, 11);
      ctx.lineTo(18, 25);
      ctx.stroke();
      ctx.fillStyle = '#8fe89a';
      ctx.beginPath();
      ctx.arc(16, 18, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#7a5230';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(16, 8);
      ctx.lineTo(16, 4);
      ctx.stroke();
      break;
    case 'brick':
      tileIcon(ctx, B.BRICK);
      break;
    default:
      rect(ctx, 8, 8, 16, 16, '#888');
  }
}

function armor(ctx: CanvasRenderingContext2D, base: string, dark: string) {
  ctx.fillStyle = base;
  ctx.fillRect(8, 8, 16, 14);
  ctx.fillStyle = dark;
  ctx.fillRect(8, 8, 4, 6);
  ctx.fillRect(20, 8, 4, 6);
  ctx.fillRect(8, 20, 16, 2);
  rect(ctx, 14, 12, 4, 6, '#ffffff33');
}

function diamond(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.lineTo(cx + r, cy);
  ctx.lineTo(cx, cy + r);
  ctx.lineTo(cx - r, cy);
  ctx.closePath();
  ctx.fill();
}
