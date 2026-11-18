import { useState } from 'react';
import { gs, store, toast } from '../game/state';
import { inventory, craft, canCraft, HOTBAR } from '../game/inventory';
import { RECIPES, type StationKind } from '../game/data/recipes';
import { ITEMS } from '../game/data/items';
import { Slot } from './Slot';

export function InventoryPanel() {
  const [pending, setPending] = useState<number | null>(null);
  if (!gs.invOpen) return null;
  const stations = new Set<StationKind>(['hand', ...gs.near]);
  const list = RECIPES.filter((r) => stations.has(r.station));

  const clickSlot = (i: number) => {
    if (pending === null) {
      if (inventory.slots[i]) setPending(i);
    } else {
      inventory.swapSlots(pending, i);
      setPending(null);
    }
  };

  const doCraft = (rid: string) => {
    const rc = RECIPES.find((r) => r.id === rid);
    if (!rc) return;
    if (craft(rc, stations)) toast(`Crafted ${ITEMS[rc.out].name}${rc.count > 1 ? ` ×${rc.count}` : ''}.`);
    else toast('Missing materials.');
  };

  return (
    <div className="modal-wrap" onClick={() => setPending(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          Inventory <span className="dim">— click an item, then click another slot to move it · right-click armor/accessories to equip</span>
          <button className="close" onClick={() => { gs.invOpen = false; store.bump(); }}>✕ E</button>
        </div>
        <div className="eqrow">
          <div className="eqbox">
            <div className="eqlabel">Armor</div>
            <Slot
              slot={inventory.equippedArmor}
              onClick={() => inventory.unequipArmor()}
              onContext={() => inventory.unequipArmor()}
            />
          </div>
          <div className="eqbox">
            <div className="eqlabel">Accessory</div>
            <Slot slot={inventory.equippedAcc} onClick={() => inventory.unequipAcc()} onContext={() => inventory.unequipAcc()} />
          </div>
          <div className="eqinfo">
            Defense {inventory.defense} · Max HP {gs.maxHp}
            <div className="dim">Depth Amulet +30 HP · Swift Boots speed · Titan Glove melee · Star Core all-damage &amp; mining</div>
          </div>
        </div>
        <div className="invgrid">
          {inventory.slots.map((s, i) => (
            <div key={i} className={i < HOTBAR ? 'hotsec' : 'mains' + (i === HOTBAR ? ' topdiv' : '')}>
              <Slot
                slot={s}
                index={i}
                pending={pending === i}
                onClick={() => clickSlot(i)}
                onContext={() => {
                  if (s) {
                    const k = ITEMS[s.item].kind;
                    if (k === 'armor' || k === 'accessory') inventory.equip(i);
                  }
                  setPending(null);
                }}
              />
            </div>
          ))}
        </div>
        <div className="craft-title">
          Crafting <span className="dim">— stations near you: {gs.near.length ? [...new Set(gs.near)].join(', ') : 'hand only'}</span>
        </div>
        <div className="craftlist">
          {list.map((r) => {
            const ok = canCraft(r, stations);
            const def = ITEMS[r.out];
            return (
              <button key={r.id} className={'recipe' + (ok ? '' : ' no')} onClick={() => doCraft(r.id)} title={def.desc}>
                <span className={'st st-' + r.station}>{r.station === 'hand' ? '✋' : r.station[0].toUpperCase()}</span>
                <span className="rname">
                  {def.name}
                  {r.count > 1 ? ` ×${r.count}` : ''}
                </span>
                <span className="ring">
                  {r.need.map(([id, n]) => (
                    <span key={id} className={inventory.countOf(id) >= n ? 'have' : 'lack'}>
                      {ITEMS[id].name} {inventory.countOf(id)}/{n}
                    </span>
                  ))}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
