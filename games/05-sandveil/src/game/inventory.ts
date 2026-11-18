import { ITEMS, type ItemId } from './data/items';
import { RECIPES, type Recipe } from './data/recipes';
import type { StationKind } from './data/recipes';

export interface Slot {
  item: ItemId;
  count: number;
}

export const HOTBAR = 10;
export const INV_SIZE = 40;

type Listener = () => void;

export class Inventory {
  slots: (Slot | null)[] = new Array(INV_SIZE).fill(null);
  equippedArmor: Slot | null = null;
  equippedAcc: Slot | null = null;
  version = 0;
  private listeners = new Set<Listener>();

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  bump() {
    this.version++;
    this.listeners.forEach((l) => l());
  }

  def(s: Slot | null) {
    return s ? ITEMS[s.item] : null;
  }

  addItem(id: ItemId, count = 1): number {
    const def = ITEMS[id];
    if (!def) return count;
    for (let i = 0; i < this.slots.length && count > 0; i++) {
      const s = this.slots[i];
      if (s && s.item === id && s.count < def.stack) {
        const add = Math.min(def.stack - s.count, count);
        s.count += add;
        count -= add;
      }
    }
    for (let i = 0; i < this.slots.length && count > 0; i++) {
      if (!this.slots[i]) {
        const add = Math.min(def.stack, count);
        this.slots[i] = { item: id, count: add };
        count -= add;
      }
    }
    this.bump();
    return count; // leftover (inventory full)
  }

  countOf(id: ItemId): number {
    let n = 0;
    for (const s of this.slots) if (s && s.item === id) n += s.count;
    return n;
  }

  removeItem(id: ItemId, count: number): boolean {
    if (this.countOf(id) < count) return false;
    for (let i = this.slots.length - 1; i >= 0 && count > 0; i--) {
      const s = this.slots[i];
      if (s && s.item === id) {
        const take = Math.min(s.count, count);
        s.count -= take;
        count -= take;
        if (s.count <= 0) this.slots[i] = null;
      }
    }
    this.bump();
    return true;
  }

  takeSlot(i: number): Slot | null {
    const s = this.slots[i];
    this.slots[i] = null;
    this.bump();
    return s;
  }
  setSlot(i: number, s: Slot | null) {
    this.slots[i] = s;
    this.bump();
  }
  swapSlots(a: number, b: number) {
    const t = this.slots[a];
    this.slots[a] = this.slots[b];
    this.slots[b] = t;
    this.bump();
  }
  mergeInto(i: number): boolean {
    const s = this.slots[i];
    if (!s) return false;
    const rest = this.addItem(s.item, s.count);
    if (rest > 0) {
      s.count = rest;
      return false;
    }
    this.slots[i] = null;
    this.bump();
    return true;
  }

  equip(i: number): boolean {
    const s = this.slots[i];
    if (!s) return false;
    const def = ITEMS[s.item];
    if (!def) return false;
    if (def.kind === 'armor') {
      const prev = this.equippedArmor;
      this.equippedArmor = { item: s.item, count: 1 };
      this.slots[i] = prev;
      this.bump();
      return true;
    }
    if (def.kind === 'accessory') {
      const prev = this.equippedAcc;
      this.equippedAcc = { item: s.item, count: 1 };
      this.slots[i] = prev;
      this.bump();
      return true;
    }
    return false;
  }
  unequipArmor() {
    if (this.equippedArmor && this.addItem(this.equippedArmor.item, 1) === 0) {
      this.equippedArmor = null;
      this.bump();
    }
  }
  unequipAcc() {
    if (this.equippedAcc && this.addItem(this.equippedAcc.item, 1) === 0) {
      this.equippedAcc = null;
      this.bump();
    }
  }

  get armorDef(): number {
    return this.equippedArmor ? ITEMS[this.equippedArmor.item].def ?? 0 : 0;
  }
  get defense(): number {
    return this.armorDef;
  }

  hasAcc(id: ItemId): boolean {
    return !!this.equippedAcc && this.equippedAcc.item === id;
  }

  serialize() {
    return {
      slots: this.slots.map((s) => (s ? ([s.item, s.count] as [ItemId, number]) : (0 as const))),
      armor: this.equippedArmor ? this.equippedArmor.item : (0 as const),
      acc: this.equippedAcc ? this.equippedAcc.item : (0 as const),
    };
  }
  load(d: { slots: (0 | [ItemId, number])[]; armor: ItemId | 0; acc: ItemId | 0 }) {
    this.slots = new Array(INV_SIZE).fill(null);
    (d.slots || []).slice(0, INV_SIZE).forEach((e, i) => {
      if (e && ITEMS[e[0]]) this.slots[i] = { item: e[0], count: e[1] };
    });
    this.equippedArmor = d.armor && ITEMS[d.armor] ? { item: d.armor, count: 1 } : null;
    this.equippedAcc = d.acc && ITEMS[d.acc] ? { item: d.acc, count: 1 } : null;
    this.bump();
  }
}

export const inventory = new Inventory();

export function canCraft(rc: Recipe, stations: Set<StationKind>): boolean {
  if (!stations.has(rc.station)) return false;
  return rc.need.every(([id, n]) => inventory.countOf(id) >= n);
}

export function craft(rc: Recipe, stations: Set<StationKind>): boolean {
  if (!canCraft(rc, stations)) return false;
  for (const [id, n] of rc.need) inventory.removeItem(id, n);
  const left = inventory.addItem(rc.out, rc.count);
  if (left > 0) {
    for (const [id, n] of rc.need) inventory.addItem(id, n);
    return false;
  }
  inventory.bump();
  return true;
}

export { RECIPES };
