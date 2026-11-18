import type { ItemId } from './items';

export interface ShopEntry {
  item: ItemId;
  count: number;
  price: number;
}

export const MERCHANT_STOCK: ShopEntry[] = [
  { item: 'torch', count: 10, price: 8 },
  { item: 'arrow', count: 30, price: 12 },
  { item: 'salve', count: 2, price: 10 },
  { item: 'copper_pick', count: 1, price: 45 },
  { item: 'copper_sword', count: 1, price: 60 },
  { item: 'bow', count: 1, price: 40 },
  { item: 'wood', count: 20, price: 6 },
];
