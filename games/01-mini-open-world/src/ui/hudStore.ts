import { HudState } from '../game/core/types';

export class HudStore {
  state: HudState = {
    mode: 'FOOT',
    speed: 0,
    wanted: 0,
    objective: '',
    missionStatus: '',
    hint: null,
    banner: null,
  };

  private listeners = new Set<() => void>();

  getSnapshot = (): HudState => this.state;

  subscribe = (l: () => void): (() => void) => {
    this.listeners.add(l);
    return () => {
      this.listeners.delete(l);
    };
  };

  set(patch: Partial<HudState>): void {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach((l) => l());
  }
}
