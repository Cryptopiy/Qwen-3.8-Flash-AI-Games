import { useState } from 'react';

export function TitleScreen({ hasSave, onStart }: { hasSave: boolean; onStart: (load: boolean, seed?: number) => void }) {
  const [seed, setSeed] = useState('');
  const newWorld = () => {
    let s = parseInt(seed.trim(), 10);
    if (!isFinite(s)) s = Math.floor(Math.random() * 2147483647);
    onStart(false, s >>> 0);
  };
  return (
    <div className="title">
      <h1>SANDVEIL</h1>
      <p className="dim">a tiny sandbox of digging, crafting and dark places — an original Terraria-inspired adventure</p>
      <div className="title-box">
        <label>
          World seed <i>(optional)</i>
          <input value={seed} onChange={(e) => setSeed(e.target.value)} placeholder="random" />
        </label>
        <div className="btnrow">
          <button className="btn big" onClick={newWorld}>
            New World
          </button>
          {hasSave && (
            <button className="btn big" onClick={() => onStart(true)}>
              Continue
            </button>
          )}
        </div>
        <ul className="tips">
          <li>Chop wood, mine stone and coal — craft a Work Bench.</li>
          <li>Smelt ores in a Furnace, forge gear on an Anvil.</li>
          <li>Silver pickaxes open the deep shadow ore. Night is dangerous — keep torches.</li>
          <li>Weave a Gloom Bulb, summon Thornmaw, and become star-forged.</li>
        </ul>
      </div>
    </div>
  );
}
