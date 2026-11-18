import { gs, store } from '../game/state';
import { MERCHANT_STOCK } from '../game/data/shop';
import { ITEMS } from '../game/data/items';
import { gameRef } from '../game/bridge';
import { icon } from './iconCache';

export function DialoguePanel() {
  const d = gs.dialogue;
  if (!d) return null;
  return (
    <div className="modal-wrap">
      <div className="modal narrow">
        <div className="modal-title">{d.who === 'hermit' ? 'The Hermit' : 'Wandering Merchant'}</div>
        {d.lines.map((l, i) => (
          <p key={i} className="dline">
            “{l}”
          </p>
        ))}
        {d.shop && (
          <div className="shoplist">
            {MERCHANT_STOCK.map((e, i) => (
              <button key={i} className="shoprow" onClick={() => gameRef.scene?.buy(i)}>
                <img src={icon(e.item)} width={24} height={24} alt="" />
                <span>
                  {ITEMS[e.item].name} ×{e.count}
                </span>
                <span className="price">🪙 {e.price}</span>
              </button>
            ))}
          </div>
        )}
        <div className="dim">Your coins: {gs.coins}</div>
        <button
          className="btn"
          onClick={() => {
            gameRef.scene?.closeDialogue();
            store.bump();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
