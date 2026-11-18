import type { ItemId } from './items';

export type StationKind = 'hand' | 'workbench' | 'furnace' | 'anvil';

export interface Recipe {
  id: string;
  out: ItemId;
  count: number;
  need: [ItemId, number][];
  station: StationKind;
}

const r = (id: string, out: ItemId, count: number, station: StationKind, need: [ItemId, number][]): Recipe => ({ id, out, count, need, station });

export const RECIPES: Recipe[] = [
  // hand
  r('workbench', 'workbench', 1, 'hand', [['wood', 10]]),
  r('platform', 'platform', 2, 'hand', [['wood', 3]]),
  r('torch', 'torch', 3, 'hand', [['coal', 1], ['wood', 1]]),
  r('chest', 'chest', 1, 'hand', [['wood', 8]]),
  r('wooden_axe', 'wooden_axe', 1, 'hand', [['wood', 6], ['stone', 2]]),
  r('salve', 'salve', 1, 'hand', [['herb', 4]]),
  // workbench
  r('bow', 'bow', 1, 'workbench', [['wood', 8], ['coal', 2]]),
  r('arrow', 'arrow', 5, 'workbench', [['wood', 1], ['stone', 2]]),
  r('wooden_sword', 'wooden_sword', 1, 'workbench', [['wood', 7]]),
  r('wooden_armor', 'wooden_armor', 1, 'workbench', [['wood', 12]]),
  r('draught', 'draught', 1, 'workbench', [['herb', 8], ['coal', 1]]),
  r('furnace', 'furnace', 1, 'workbench', [['stone', 12], ['coal', 2]]),
  r('anvil', 'anvil', 1, 'workbench', [['iron_bar', 5]]),
  // furnace
  r('copper_bar', 'copper_bar', 1, 'furnace', [['copper_ore', 3]]),
  r('iron_bar', 'iron_bar', 1, 'furnace', [['iron_ore', 3]]),
  r('silver_bar', 'silver_bar', 1, 'furnace', [['silver_ore', 3]]),
  r('gold_bar', 'gold_bar', 1, 'furnace', [['gold_ore', 3]]),
  r('shadow_bar', 'shadow_bar', 1, 'furnace', [['shadow_ore', 3]]),
  // anvil
  r('copper_pick', 'copper_pick', 1, 'anvil', [['copper_bar', 6], ['wood', 4]]),
  r('copper_axe', 'copper_axe', 1, 'anvil', [['copper_bar', 4], ['wood', 3]]),
  r('copper_sword', 'copper_sword', 1, 'anvil', [['copper_bar', 8]]),
  r('copper_armor', 'copper_armor', 1, 'anvil', [['copper_bar', 12]]),
  r('iron_pick', 'iron_pick', 1, 'anvil', [['iron_bar', 10], ['wood', 4], ['copper_bar', 2]]),
  r('iron_sword', 'iron_sword', 1, 'anvil', [['iron_bar', 12]]),
  r('iron_armor', 'iron_armor', 1, 'anvil', [['iron_bar', 16]]),
  r('silver_pick', 'silver_pick', 1, 'anvil', [['silver_bar', 10], ['wood', 5]]),
  r('silver_sword', 'silver_sword', 1, 'anvil', [['silver_bar', 14]]),
  r('shadow_armor', 'shadow_armor', 1, 'anvil', [['shadow_bar', 12], ['herb', 4]]),
  r('gloom_bulb', 'gloom_bulb', 1, 'anvil', [['shadow_bar', 10], ['gold_bar', 4]]),
  r('stellarite_bar', 'stellarite_bar', 1, 'anvil', [['shadow_bar', 5], ['gold_bar', 2]]),
  r('star_pick', 'star_pick', 1, 'anvil', [['stellarite_bar', 6]]),
  r('star_blade', 'star_blade', 1, 'anvil', [['stellarite_bar', 7]]),
];

export function recipesFor(stations: Set<StationKind>): Recipe[] {
  return RECIPES.filter((rc) => stations.has(rc.station));
}
