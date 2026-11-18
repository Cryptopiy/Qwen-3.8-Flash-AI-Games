import { useEffect, useReducer } from 'react';
import { store } from '../game/state';

export function useUi(): number {
  const [, force] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    const unsub = store.subscribe(() => force());
    force();
    return unsub;
  }, []);
  return store.version;
}
