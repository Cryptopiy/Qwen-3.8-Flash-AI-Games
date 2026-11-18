import type { StationKind } from './data/recipes';

export interface Hint {
  id: number;
  text: string;
}

export interface DialogueState {
  who: 'hermit' | 'merchant';
  lines: string[];
  shop: boolean;
}

export interface ShopEntry {
  item: string;
  count: number;
  price: number;
  label: string;
}

type Listener = () => void;

class Store {
  version = 0;
  private listeners = new Set<Listener>();
  bump() {
    this.version++;
    this.listeners.forEach((l) => l());
  }
  subscribe(fn: Listener) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }
}

export const store = new Store();

export const gs = {
  screen: 'title' as 'title' | 'game',
  paused: false,
  invOpen: false,
  dead: false,
  respawnIn: 0,
  hint: null as Hint | null,
  toast: '',
  toastId: 0,
  near: [] as StationKind[],
  boss: null as null | { name: string; pct: number },
  dialogue: null as DialogueState | null,
  timePct: 0,
  isDay: true,
  clock: '6:00 AM',
  depth: 'Surface' as 'Surface' | 'Underground' | 'Deep Caverns',
  biome: 'Forest',
  hp: 100,
  maxHp: 100,
  defense: 0,
  coins: 0,
  hasSave: false,
  seedInput: '',
  hasHousing: false,
  selected: 0,
  npcNear: null as null | 'hermit' | 'merchant',
  shopOpen: false,
};

export function toast(text: string) {
  gs.toast = text;
  gs.toastId++;
  store.bump();
}

let hintTimer = 0;
export function showHint(text: string, ms = 4200) {
  if (hintTimer) clearTimeout(hintTimer);
  gs.hint = { id: Date.now(), text };
  store.bump();
  hintTimer = setTimeout(() => {
    gs.hint = null;
    store.bump();
  }, ms) as unknown as number;
}

export function useUi(): number {
  return store.version;
}
