import type { ItemId } from './items';

export const B = {
  AIR: 0,
  DIRT: 1,
  GRASS: 2,
  SAND: 3,
  SNOW: 4,
  STONE: 5,
  WOOD: 6,
  LEAVES: 7,
  COPPER: 8,
  IRON: 9,
  SILVER: 10,
  GOLD: 11,
  SHADOW: 12,
  COAL: 13,
  TORCH: 14,
  WORKBENCH: 15,
  FURNACE: 16,
  ANVIL: 17,
  CHEST: 18,
  PLATFORM: 19,
  BRICK: 20,
  BLIGHT_GRASS: 21,
} as const;

export interface BlockDef {
  id: number;
  name: string;
  solid: boolean;
  platform?: boolean;
  opaque: boolean;
  hardness: number;
  minPick: number;
  drop: ItemId | null;
  dropCount?: number;
  station?: 'workbench' | 'furnace' | 'anvil';
  light?: number;
}

export const BLOCKS: Record<number, BlockDef> = {};
function add(d: BlockDef) {
  BLOCKS[d.id] = d;
}

add({ id: 0, name: 'Air', solid: false, opaque: false, hardness: 0, minPick: 0, drop: null });
add({ id: B.DIRT, name: 'Dirt', solid: true, opaque: true, hardness: 0.35, minPick: 0, drop: 'dirt' });
add({ id: B.GRASS, name: 'Grass', solid: true, opaque: true, hardness: 0.35, minPick: 0, drop: 'dirt' });
add({ id: B.SAND, name: 'Sand', solid: true, opaque: true, hardness: 0.32, minPick: 0, drop: 'sand' });
add({ id: B.SNOW, name: 'Snow', solid: true, opaque: true, hardness: 0.3, minPick: 0, drop: 'snow' });
add({ id: B.STONE, name: 'Stone', solid: true, opaque: true, hardness: 1.0, minPick: 1, drop: 'stone' });
add({ id: B.WOOD, name: 'Wood', solid: true, opaque: true, hardness: 0.8, minPick: 0, drop: 'wood' });
add({ id: B.LEAVES, name: 'Leaves', solid: false, opaque: false, hardness: 0.06, minPick: 0, drop: null });
add({ id: B.COPPER, name: 'Copper Ore', solid: true, opaque: true, hardness: 1.4, minPick: 1, drop: 'copper_ore' });
add({ id: B.IRON, name: 'Iron Ore', solid: true, opaque: true, hardness: 1.8, minPick: 1, drop: 'iron_ore' });
add({ id: B.SILVER, name: 'Silver Ore', solid: true, opaque: true, hardness: 2.2, minPick: 2, drop: 'silver_ore' });
add({ id: B.GOLD, name: 'Gold Ore', solid: true, opaque: true, hardness: 2.6, minPick: 2, drop: 'gold_ore' });
add({ id: B.SHADOW, name: 'Shadow Ore', solid: true, opaque: true, hardness: 3.2, minPick: 3, drop: 'shadow_ore' });
add({ id: B.COAL, name: 'Coal Ore', solid: true, opaque: true, hardness: 0.9, minPick: 1, drop: 'coal' });
add({ id: B.TORCH, name: 'Torch', solid: false, opaque: false, hardness: 0.05, minPick: 0, drop: 'torch', light: 90 });
add({ id: B.WORKBENCH, name: 'Work Bench', solid: true, opaque: false, hardness: 0.6, minPick: 0, drop: 'workbench', station: 'workbench' });
add({ id: B.FURNACE, name: 'Furnace', solid: true, opaque: true, hardness: 1.2, minPick: 0, drop: 'furnace', station: 'furnace', light: 70 });
add({ id: B.ANVIL, name: 'Anvil', solid: true, opaque: true, hardness: 1.6, minPick: 0, drop: 'anvil', station: 'anvil' });
add({ id: B.CHEST, name: 'Chest', solid: true, opaque: true, hardness: 0.8, minPick: 0, drop: 'chest' });
add({ id: B.PLATFORM, name: 'Platform', solid: false, platform: true, opaque: false, hardness: 0.3, minPick: 0, drop: 'platform' });
add({ id: B.BRICK, name: 'Stone Brick', solid: true, opaque: true, hardness: 1.3, minPick: 1, drop: 'brick' });
add({ id: B.BLIGHT_GRASS, name: 'Blight Soil', solid: true, opaque: true, hardness: 0.4, minPick: 0, drop: 'dirt' });

export function isSolid(id: number): boolean {
  const d = BLOCKS[id];
  return !!d && d.solid;
}
export function isOpaque(id: number): boolean {
  const d = BLOCKS[id];
  return !!d && d.opaque;
}
export function isPlatform(id: number): boolean {
  const d = BLOCKS[id];
  return !!d && !!d.platform;
}
export function stationAt(id: number): string | null {
  return BLOCKS[id]?.station ?? null;
}
