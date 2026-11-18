import { World } from '../world/world';
import { B, BLOCKS } from '../data/blocks';

function passable(id: number): boolean {
  const d = BLOCKS[id];
  return !!d && !d.opaque;
}

export function findHousing(world: World, startX: number, startY: number): boolean {
  const sx = Math.floor(startX);
  const sy = Math.floor(startY);
  if (!passable(world.get(sx, sy))) return false;
  const seen = new Set<number>();
  const key = (x: number, y: number) => y * 10000 + x;
  const queue: [number, number][] = [[sx, sy]];
  seen.add(key(sx, sy));
  let count = 0;
  let torches = 0;
  let bench = 0;
  while (queue.length) {
    const [x, y] = queue.shift()!;
    count++;
    if (count > 340) return false;
    const id = world.get(x, y);
    if (id === B.TORCH) torches++;
    if (id === B.WORKBENCH) bench++;
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ] as const) {
      const nx = x + dx;
      const ny = y + dy;
      if (!world.inBounds(nx, ny)) return false;
      const k = key(nx, ny);
      if (seen.has(k)) continue;
      const nid = world.get(nx, ny);
      if (passable(nid)) {
        seen.add(k);
        queue.push([nx, ny]);
      } else if (ny <= 0) {
        return false;
      }
    }
  }
  return count >= 14 && torches >= 1 && bench >= 1;
}
