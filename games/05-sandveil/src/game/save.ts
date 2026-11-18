import { SAVE_KEY } from './config';
import { World } from './world/world';
import { inventory } from './inventory';

export interface SaveStats {
  hp: number;
  maxHpBase: number;
  bossDefeated: boolean;
  blessed: boolean;
  hasHome: boolean;
  time: number;
  hints: number[];
}

export interface SaveData {
  v: number;
  seed: number;
  diff: number[];
  opened: number[];
  inv: ReturnType<Inventory['serialize']>;
  stats: SaveStats;
}

type Inventory = typeof inventory;

export function saveGame(world: World, stats: SaveStats) {
  const data: SaveData = {
    v: 1,
    seed: world.seed,
    diff: world.serializeDiff(),
    opened: [...world.openedChests],
    inv: inventory.serialize(),
    stats,
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    /* storage full — keep playing */
  }
}

export function loadGame(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as SaveData;
    if (!d || d.v !== 1 || typeof d.seed !== 'number') return null;
    return d;
  } catch {
    return null;
  }
}

export function hasSave(): boolean {
  return loadGame() !== null;
}

export function clearSave() {
  localStorage.removeItem(SAVE_KEY);
}
