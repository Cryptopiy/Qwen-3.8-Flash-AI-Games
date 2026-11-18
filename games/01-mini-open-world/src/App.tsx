import { useEffect, useRef, useSyncExternalStore } from 'react';
import { GameEngine } from './game/engine';
import { HudStore } from './ui/hudStore';
import HUD from './ui/HUD';

export default function App() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const storeRef = useRef<HudStore | null>(null);
  if (!storeRef.current) storeRef.current = new HudStore();

  useEffect(() => {
    const host = hostRef.current;
    const store = storeRef.current;
    if (!host || !store) return;
    const engine = new GameEngine(host, store);
    engine.start();
    return () => engine.dispose();
  }, []);

  const hud = useSyncExternalStore(storeRef.current.subscribe, storeRef.current.getSnapshot);

  return (
    <div className="app-root">
      <div ref={hostRef} className="canvas-host" />
      <HUD hud={hud} />
    </div>
  );
}
