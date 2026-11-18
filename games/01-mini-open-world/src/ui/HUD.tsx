import { HudState } from '../game/core/types';

export default function HUD({ hud }: { hud: HudState }) {
  const stars = '★'.repeat(hud.wanted) + '☆'.repeat(Math.max(0, 3 - hud.wanted));
  return (
    <div className="hud">
      <div className="hud-panel hud-top-left">
        <div className="hud-objective">{hud.objective}</div>
        <div className="hud-mission">{hud.missionStatus}</div>
      </div>

      <div className={`hud-panel hud-top-right ${hud.wanted > 0 ? 'wanted' : ''}`}>
        <span className="hud-label">WANTED</span> <span className="hud-stars">{stars}</span>
      </div>

      {hud.hint && !hud.banner && <div className="hud-hint">{hud.hint}</div>}

      {hud.banner && <div className="hud-banner">{hud.banner}</div>}

      <div className="hud-panel hud-bottom-left">
        <div className="hud-label">CONTROLS</div>
        WASD / Arrows — move &amp; drive · E — enter / exit car<br />
        Space — handbrake · Shift — run · R — restart mission<br />
        Mouse drag — orbit camera · Wheel — zoom
      </div>

      <div className="hud-panel hud-bottom-right">
        <div className="hud-mode">{hud.mode}</div>
        <div className="hud-speed">{hud.speed.toFixed(0)}<span className="hud-unit"> km/h</span></div>
      </div>
    </div>
  );
}
