// Obstacle catalogue. Each obstacle has meaningfully different physical
// behavior: mass (impulse sharing), restitution, surface friction and
// "rigidity" (how much of the absorbed normal energy turns into damage).

export interface ObstacleDef {
  id: string;
  label: string;
  description: string;
  /** XZ footprint half extents (m). */
  hx: number;
  hz: number;
  /** Visual height (m). */
  height: number;
  /** Center Y of the collision box (informational). */
  centerY: number;
  /** 0 => immovable (infinite mass, kinematic). */
  massKg: number;
  restitution: number;
  /** Ground friction used while the obstacle slides after being hit. */
  groundFrictionMu: number;
  /** Damage scaling factor: how "hard" the impact feels to the vehicle. */
  rigidity: number;
  render: 'wall' | 'heavyBarrier' | 'lightBarrier';
}

export const OBSTACLES: ObstacleDef[] = [
  {
    id: 'wall',
    label: 'Concrete wall',
    description: 'Rigid barrier — effectively immovable. Maximum rebound and damage.',
    hx: 6,
    hz: 0.5,
    height: 3,
    centerY: 1.5,
    massKg: 0,
    restitution: 0.05,
    groundFrictionMu: 0,
    rigidity: 1.0,
    render: 'wall',
  },
  {
    id: 'heavyBarrier',
    label: 'Heavy water barrier',
    description: 'Movable but very massive. Partially absorbs momentum and slides.',
    hx: 2.6,
    hz: 0.55,
    height: 1.15,
    centerY: 0.6,
    massKg: 1200,
    restitution: 0.15,
    groundFrictionMu: 0.62,
    rigidity: 0.82,
    render: 'heavyBarrier',
  },
  {
    id: 'lightBarrier',
    label: 'Light barricade',
    description: 'Easily displaced. Low normal impulse — car plows through with less damage.',
    hx: 1.8,
    hz: 0.14,
    height: 1.05,
    centerY: 0.6,
    massKg: 80,
    restitution: 0.25,
    groundFrictionMu: 0.35,
    rigidity: 0.45,
    render: 'lightBarrier',
  },
];

export const DEFAULT_OBSTACLE_ID = 'wall';

export function getObstacleDef(id: string): ObstacleDef {
  return OBSTACLES.find((o) => o.id === id) ?? OBSTACLES[0];
}
