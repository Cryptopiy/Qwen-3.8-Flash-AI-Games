import { DAY_MS } from '../config';

export class DayNight {
  t: number;
  constructor(start = 0.12) {
    this.t = start;
  }
  update(dtMs: number) {
    this.t = (this.t + dtMs / DAY_MS) % 1;
  }
  get isDay(): boolean {
    return this.t < 0.5;
  }
  get dayFactor(): number {
    const t = this.t;
    if (t < 0.42) return 1;
    if (t < 0.52) return 1 - (t - 0.42) / 0.1;
    if (t < 0.92) return 0;
    return (t - 0.92) / 0.08;
  }
  get clockLabel(): string {
    const total = this.t * 24;
    const h = Math.floor(total) % 24;
    const m = Math.floor((total * 60) % 60);
    const ap = h < 12 ? 'AM' : 'PM';
    const hh = h % 12 === 0 ? 12 : h % 12;
    return `${hh}:${m.toString().padStart(2, '0')} ${ap}`;
  }
}
