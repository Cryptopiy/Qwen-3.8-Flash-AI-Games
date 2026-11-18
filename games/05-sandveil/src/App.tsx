import Phaser from 'phaser';
import { useEffect, useRef, useState } from 'react';
import { createGameConfig } from './game/scenes/BootScene';
import { bootReq, gameRef } from './game/bridge';
import { hasSave, clearSave } from './game/save';
import { gs, store } from './game/state';
import { inventory } from './game/inventory';
import { useUi } from './ui/useUi';
import { TitleScreen } from './ui/TitleScreen';
import { HUD, Toasts } from './ui/HUD';
import { InventoryPanel } from './ui/InventoryPanel';
import { DialoguePanel } from './ui/DialoguePanel';
import { PauseMenu } from './ui/PauseMenu';
import { DeathOverlay } from './ui/DeathOverlay';

inventory.subscribe(() => store.bump());

export default function App() {
  useUi();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const gameR = useRef<Phaser.Game | null>(null);
  const [saveExists, setSaveExists] = useState(hasSave());

  const launch = (load: boolean, seed?: number) => {
    if (gameR.current) {
      gameR.current.destroy(true);
      gameR.current = null;
      gameRef.game = null;
      gameRef.scene = null;
    }
    bootReq.load = load;
    bootReq.seed = load ? 0 : seed ?? Math.floor(Math.random() * 2147483647);
    if (!load) {
      clearSave();
      inventory.slots.fill(null);
      inventory.equippedArmor = null;
      inventory.equippedAcc = null;
    }
    setSaveExists(hasSave());
    gs.screen = 'game';
    store.bump();
    const el = mountRef.current;
    if (!el) return;
    el.innerHTML = '';
    const g = new Phaser.Game(createGameConfig(el));
    gameR.current = g;
    gameRef.game = g;
  };

  useEffect(() => {
    if (sessionStorage.getItem('sandveil-new')) {
      sessionStorage.removeItem('sandveil-new');
      launch(false);
    }
    return () => {
      gameR.current?.destroy(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!gs.toast) return;
    const t = setTimeout(() => {
      gs.toast = '';
      store.bump();
    }, 3000);
    return () => clearTimeout(t);
  }, [gs.toastId, gs.toast]);

  useEffect(() => {
    const t = setInterval(() => setSaveExists(hasSave()), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="root">
      <div ref={mountRef} className="canvas-mount" />
      {gs.screen === 'title' && <TitleScreen hasSave={saveExists} onStart={launch} />}
      {gs.screen === 'game' && (
        <>
          <HUD />
          <Toasts />
          <InventoryPanel />
          <DialoguePanel />
          <DeathOverlay />
          <PauseMenu />
        </>
      )}
    </div>
  );
}
