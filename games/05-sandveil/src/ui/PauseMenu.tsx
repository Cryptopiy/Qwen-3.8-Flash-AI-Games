import { gs, store } from '../game/state';
import { gameRef } from '../game/bridge';

export function PauseMenu() {
  if (!gs.paused) return null;
  return (
    <div className="modal-wrap">
      <div className="modal narrow center">
        <h2>Paused</h2>
        <div className="controls-full">
          <div><b>A / D</b> move&ensp;·&ensp;<b>Space</b> jump&ensp;·&ensp;<b>S + Space</b> drop through platforms</div>
          <div><b>Left mouse</b> mine / swing / shoot toward cursor</div>
          <div><b>Right mouse</b> place blocks · open chests · heal · summon · talk</div>
          <div><b>1–0 / wheel</b> hotbar&ensp;·&ensp;<b>E</b> inventory & crafting&ensp;·&ensp;<b>Esc</b> pause</div>
        </div>
        <div className="btnrow">
          <button
            className="btn"
            onClick={() => {
              gameRef.scene?.togglePause();
              store.bump();
            }}
          >
            Resume
          </button>
          <button
            className="btn"
            onClick={() => {
              gameRef.scene?.doSave();
              store.bump();
            }}
          >
            Save
          </button>
          <button
            className="btn danger"
            onClick={() => {
              sessionStorage.setItem('sandveil-new', '1');
              window.location.reload();
            }}
          >
            New World (deletes save)
          </button>
        </div>
        <p className="dim">The world regenerates from its seed — only your edits are stored. Progress saves automatically.</p>
      </div>
    </div>
  );
}
