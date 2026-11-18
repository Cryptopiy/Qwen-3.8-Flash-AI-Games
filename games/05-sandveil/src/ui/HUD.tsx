import { gs, store } from '../game/state';
import { inventory } from '../game/inventory';
import { ITEMS } from '../game/data/items';
import { HOTBAR } from '../game/inventory';
import { gameRef } from '../game/bridge';
import { Slot } from './Slot';

export function HUD() {
  return (
    <>
      <div className="hud-topleft">
        <div className="hpbar">
          <div className="hpfill" style={{ width: `${Math.max(0, (gs.hp / gs.maxHp) * 100)}%` }} />
          <span className="hptxt">
            {gs.hp} / {gs.maxHp}
          </span>
        </div>
        <div className="chips">
          <span title="Defense">🛡 {gs.defense}</span>
          <span title="Coins">🪙 {gs.coins}</span>
        </div>
      </div>
      <div className="hud-topright">
        <span>{gs.isDay ? '☀' : '☾'}</span>
        <div className="timebar">
          <div className="timefill" style={{ width: `${gs.timePct * 100}%` }} />
        </div>
        <span className="clock">{gs.clock}</span>
        <div className="chips">
          <span>{gs.biome}</span>
          <span>{gs.depth}</span>
        </div>
      </div>
      {gs.boss && (
        <div className="bossbar">
          <div className="bossname">{gs.boss.name}</div>
          <div className="bossfill" style={{ width: `${gs.boss.pct * 100}%` }} />
        </div>
      )}
      {gs.npcNear && <div className="npcnear">Right-click the {gs.npcNear === 'hermit' ? 'Hermit' : 'Wandering Merchant'} to talk</div>}
      <div className="hotwrap">
        <div className="hotbar">
          {inventory.slots.slice(0, HOTBAR).map((s, i) => (
            <Slot
              key={i}
              slot={s}
              index={i}
              selected={gs.selected === i}
              onClick={() => {
                gs.selected = i;
                store.bump();
              }}
              onContext={() => {
                if (s && (ITEMS[s.item].kind === 'armor' || ITEMS[s.item].kind === 'accessory')) inventory.equip(i);
              }}
            />
          ))}
        </div>
        {gs.hint && (
          <div className="hint">
            {gs.hint.text}
            <button
              className="hintx"
              onClick={() => {
                gs.hint = null;
                store.bump();
              }}
            >
              ×
            </button>
          </div>
        )}
      </div>
      <div className="controls" onClick={() => gameRef.scene?.togglePause()}>
        <b>Controls</b>
        <div>A/D move · Space jump · S+Space drop through</div>
        <div>LMB mine / attack · RMB place / open / use · Wheel or 1–0 select</div>
        <div>E inventory & crafting · Esc pause & controls</div>
      </div>
    </>
  );
}

export function Toasts() {
  return gs.toast ? (
    <div className="toast" key={gs.toastId}>
      {gs.toast}
    </div>
  ) : null;
}
