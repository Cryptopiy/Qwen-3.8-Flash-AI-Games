export const TILE = 16;
export const WORLD_W = 520;
export const WORLD_H = 170;
export const VIEW_W = 960;
export const VIEW_H = 540;
export const UNDERGROUND_Y = 92;
export const CAVERN_Y = 130;
export const DAY_MS = 210000;
export const REACH = 5.5;
export const SAVE_KEY = 'sandveil-save-v1';
export const GAME_W = WORLD_W * TILE;
export const GAME_H = WORLD_H * TILE;

export const BIOME_NAMES = ['Forest', 'Desert', 'Snow', 'Blight'];
export function biomeAt(x: number): number {
  return Math.max(0, Math.min(3, Math.floor(x / (WORLD_W / 4))));
}

export function zoneAt(y: number): 'surface' | 'under' | 'cavern' {
  if (y < UNDERGROUND_Y) return 'surface';
  if (y < CAVERN_Y) return 'under';
  return 'cavern';
}
