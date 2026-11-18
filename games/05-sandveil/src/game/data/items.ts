export type ItemId = string;

export interface ItemDef {
  id: ItemId;
  name: string;
  kind: 'block' | 'material' | 'tool' | 'consumable' | 'armor' | 'accessory' | 'summon' | 'currency';
  use?: 'pick' | 'axe' | 'sword' | 'bow' | 'trowel' | 'heal' | 'bulb';
  block?: number;
  stack: number;
  power?: number;
  speed?: number;
  dmg?: number;
  def?: number;
  heal?: number;
  price?: number;
  desc: string;
  rarity?: number;
}

const it = (d: ItemDef) => d;

export const ITEMS: Record<ItemId, ItemDef> = {};
function add(d: ItemDef) {
  ITEMS[d.id] = d;
}

// terrain / block items
add(it({ id: 'dirt', name: 'Dirt', kind: 'block', use: 'trowel', block: 1, stack: 99, desc: 'Plain earth. Place it with right-click.' }));
add(it({ id: 'stone', name: 'Stone', kind: 'block', use: 'trowel', block: 5, stack: 99, desc: 'Solid rock. The builder’s friend.' }));
add(it({ id: 'sand', name: 'Sand', kind: 'block', use: 'trowel', block: 3, stack: 99, desc: 'Fine desert sand.' }));
add(it({ id: 'snow', name: 'Snow', kind: 'block', use: 'trowel', block: 4, stack: 99, desc: 'Cold and compact.' }));
add(it({ id: 'wood', name: 'Wood', kind: 'block', use: 'trowel', block: 6, stack: 99, desc: 'Chopped from trees. Crafting staple.' }));
add(it({ id: 'brick', name: 'Stone Brick', kind: 'block', use: 'trowel', block: 20, stack: 99, desc: 'Cut masonry, ruins-proof.' }));
add(it({ id: 'platform', name: 'Platform', kind: 'block', use: 'trowel', block: 19, stack: 99, desc: 'Walk-on plank. Press S+Space to drop through.' }));
add(it({ id: 'torch', name: 'Torch', kind: 'block', use: 'trowel', block: 14, stack: 99, desc: 'Warm light in dark caves.' }));
add(it({ id: 'workbench', name: 'Work Bench', kind: 'block', use: 'trowel', block: 15, stack: 99, desc: 'A station for wooden crafts.' }));
add(it({ id: 'furnace', name: 'Furnace', kind: 'block', use: 'trowel', block: 16, stack: 99, desc: 'Smelts ore into bars. Gives off light.' }));
add(it({ id: 'anvil', name: 'Anvil', kind: 'block', use: 'trowel', block: 17, stack: 99, desc: 'Forges bars into gear.' }));
add(it({ id: 'chest', name: 'Chest', kind: 'block', use: 'trowel', block: 18, stack: 99, desc: 'Stores loot. Right-click to open.' }));

// materials
add(it({ id: 'coal', name: 'Coal', kind: 'material', stack: 99, desc: 'Fuel for torches and furnaces.' }));
add(it({ id: 'herb', name: 'Glimmer Herb', kind: 'material', stack: 99, desc: 'Falls from leaves. Brews healing.' }));
add(it({ id: 'copper_ore', name: 'Copper Ore', kind: 'material', stack: 99, desc: 'Smelt into copper bars.' }));
add(it({ id: 'iron_ore', name: 'Iron Ore', kind: 'material', stack: 99, desc: 'Smelt into iron bars.' }));
add(it({ id: 'silver_ore', name: 'Silver Ore', kind: 'material', stack: 99, desc: 'Needs an iron pickaxe.' }));
add(it({ id: 'gold_ore', name: 'Gold Ore', kind: 'material', stack: 99, desc: 'Needs a silver pickaxe.' }));
add(it({ id: 'shadow_ore', name: 'Shadow Ore', kind: 'material', stack: 99, desc: 'Deep-cavern metal. Needs a silver pickaxe.' }));
add(it({ id: 'copper_bar', name: 'Copper Bar', kind: 'material', stack: 99, desc: 'Forged copper.' }));
add(it({ id: 'iron_bar', name: 'Iron Bar', kind: 'material', stack: 99, desc: 'Forged iron.' }));
add(it({ id: 'silver_bar', name: 'Silver Bar', kind: 'material', stack: 99, desc: 'Forged silver.' }));
add(it({ id: 'gold_bar', name: 'Gold Bar', kind: 'material', stack: 99, desc: 'Forged gold.' }));
add(it({ id: 'shadow_bar', name: 'Shadow Bar', kind: 'material', stack: 99, desc: 'Forged shadow metal.' }));
add(it({ id: 'stellarite_bar', name: 'Stellarite Bar', kind: 'material', stack: 99, desc: 'Star-forged alloy. Only after Thornmaw falls.' }));
add(it({ id: 'arrow', name: 'Arrow', kind: 'material', stack: 99, desc: 'Bow ammunition.' }));
add(it({ id: 'coins', name: 'Coins', kind: 'currency', stack: 999, desc: 'Dropped by foes. Traders accept them.' }));

// tools
add(it({ id: 'copper_pick', name: 'Copper Pickaxe', kind: 'tool', use: 'pick', stack: 1, power: 1, speed: 1, dmg: 4, desc: 'Mines stone, copper, coal, iron.' }));
add(it({ id: 'iron_pick', name: 'Iron Pickaxe', kind: 'tool', use: 'pick', stack: 1, power: 2, speed: 1.6, dmg: 6, desc: 'Mines silver and gold.' }));
add(it({ id: 'silver_pick', name: 'Silver Pickaxe', kind: 'tool', use: 'pick', stack: 1, power: 3, speed: 2.3, dmg: 7, desc: 'Mines shadow ore.' }));
add(it({ id: 'star_pick', name: 'Starforged Pickaxe', kind: 'tool', use: 'pick', stack: 1, power: 4, speed: 3.4, dmg: 9, desc: 'The fastest pick there is.' }));
add(it({ id: 'wooden_axe', name: 'Wooden Axe', kind: 'tool', use: 'axe', stack: 1, power: 1, speed: 1, dmg: 3, desc: 'Fells trees fast.' }));
add(it({ id: 'copper_axe', name: 'Copper Axe', kind: 'tool', use: 'axe', stack: 1, power: 1, speed: 1, dmg: 5, desc: 'A sturdier axe.' }));

// weapons
add(it({ id: 'wooden_sword', name: 'Wooden Sword', kind: 'tool', use: 'sword', stack: 1, dmg: 7, speed: 1, desc: 'Better than nothing.' }));
add(it({ id: 'copper_sword', name: 'Copper Shortsword', kind: 'tool', use: 'sword', stack: 1, dmg: 12, speed: 1, desc: 'A reliable blade.' }));
add(it({ id: 'iron_sword', name: 'Iron Broadsword', kind: 'tool', use: 'sword', stack: 1, dmg: 18, speed: 0.95, desc: 'Heavy and keen.' }));
add(it({ id: 'silver_sword', name: 'Silver Blade', kind: 'tool', use: 'sword', stack: 1, dmg: 24, speed: 1.05, desc: 'Quick, glowing edge.' }));
add(it({ id: 'star_blade', name: 'Starforged Greatsword', kind: 'tool', use: 'sword', stack: 1, dmg: 42, speed: 0.85, desc: 'Ends arguments and bosses.' }));
add(it({ id: 'bow', name: 'Hunting Bow', kind: 'tool', use: 'bow', stack: 1, dmg: 8, speed: 1, desc: 'Fires arrows toward the cursor.' }));

// consumables
add(it({ id: 'salve', name: 'Herbal Salve', kind: 'consumable', use: 'heal', stack: 20, heal: 25, desc: 'Right-click to heal 25.' }));
add(it({ id: 'draught', name: 'Glimmer Draught', kind: 'consumable', use: 'heal', stack: 20, heal: 70, desc: 'Right-click to heal 70.' }));

// armor
add(it({ id: 'wooden_armor', name: 'Wooden Vest', kind: 'armor', stack: 1, def: 2, desc: 'Crude but it turns a bite.' }));
add(it({ id: 'copper_armor', name: 'Copper Plate', kind: 'armor', stack: 1, def: 5, desc: 'Beaten copper cuirass.' }));
add(it({ id: 'iron_armor', name: 'Iron Mail', kind: 'armor', stack: 1, def: 9, desc: 'Solid ring mail.' }));
add(it({ id: 'shadow_armor', name: 'Shadow Weave', kind: 'armor', stack: 1, def: 14, desc: 'Woven darkness and herbs.' }));

// accessories
add(it({ id: 'depth_amulet', name: 'Depth Amulet', kind: 'accessory', stack: 1, desc: '+30 max health.' }));
add(it({ id: 'swift_boots', name: 'Swift Boots', kind: 'accessory', stack: 1, desc: 'Move faster, jump higher.' }));
add(it({ id: 'titan_glove', name: 'Titan Glove', kind: 'accessory', stack: 1, desc: '+25% melee damage.' }));
add(it({ id: 'star_core', name: 'Starforged Core', kind: 'accessory', stack: 1, desc: '+15% damage and faster mining.' }));

// summon
add(it({ id: 'gloom_bulb', name: 'Gloom Bulb', kind: 'summon', use: 'bulb', stack: 5, desc: 'Right-click anywhere to summon Thornmaw.' }));

export const HAND_PICK = { power: 0.6, speed: 0.6 };

export function itemDef(id: ItemId): ItemDef {
  return ITEMS[id];
}
