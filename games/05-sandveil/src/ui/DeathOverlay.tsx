import { gs } from '../game/state';

export function DeathOverlay() {
  if (!gs.dead) return null;
  return (
    <div className="death">
      <div className="death-txt">You died.</div>
      <div className="dim">Respawning at your world spawn…</div>
    </div>
  );
}
