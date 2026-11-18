import { iconDataURL } from '../game/icons';

const cache = new Map<string, string>();

export function icon(id: string): string {
  let u = cache.get(id);
  if (!u) {
    u = iconDataURL(id);
    cache.set(id, u);
  }
  return u;
}
