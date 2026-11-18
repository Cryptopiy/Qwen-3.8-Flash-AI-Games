// Damage model.
//
// Simplified assumptions (documented in the in-app "Physics model" panel):
//  - Absorbed normal energy: E_abs = 0.5 * mu * v_n^2 * (1 - e^2) * rigidity
//    where mu is the reduced mass of car/obstacle, v_n the normal component of
//    the car velocity at first contact, e the restitution coefficient.
//  - Damage % = E_abs / E_REF * 100 * zoneFactor, clamped to [0, 100].
//    E_REF = 700 kJ is the reference energy of a "catastrophic" frontal crash.
//  - Impact force estimate: F = total normal impulse / assumed impact time
//    (120 ms crumple duration). Clearly an estimate, not a measured force.

import { clamp } from './geometry';
import type { ObstacleDef } from './obstacles';

export type DamageZone = 'front' | 'rear' | 'left' | 'right';

export const E_REF_JOULES = 700_000;
export const ASSUMED_IMPACT_TIME_S = 0.12;

const ZONE_FACTOR: Record<DamageZone, number> = {
  front: 1.0,
  rear: 0.8,
  left: 0.92,
  right: 0.92,
};

export function severityFor(damagePct: number): 'minor' | 'moderate' | 'severe' | 'catastrophic' {
  if (damagePct < 20) return 'minor';
  if (damagePct < 50) return 'moderate';
  if (damagePct < 80) return 'severe';
  return 'catastrophic';
}

/**
 * Determine the primary impact zone from the world collision normal.
 * `n` points from the obstacle toward the car (outward), so the incoming
 * direction relative to the car is -n.
 */
export function impactZoneFromNormal(
  nx: number,
  nz: number,
  carYaw: number,
): { zone: DamageZone; cosIncidence: number } {
  // Car forward axis (sin y, cos y), right axis (cos y, -sin y) in (x,z).
  const fx = Math.sin(carYaw);
  const fz = Math.cos(carYaw);
  const rx = Math.cos(carYaw);
  const rz = -Math.sin(carYaw);
  // Direction the car pushes INTO the obstacle:
  const ix = -nx;
  const iz = -nz;
  const fComp = ix * fx + iz * fz; // + => struck the front
  const rComp = ix * rx + iz * rz; // + => struck the right side
  const cosIncidence = clamp(Math.abs(fComp) >= Math.abs(rComp) ? Math.abs(fComp) : Math.abs(rComp), 0, 1);
  let zone: DamageZone;
  if (Math.abs(fComp) >= Math.abs(rComp)) zone = fComp >= 0 ? 'front' : 'rear';
  else zone = rComp >= 0 ? 'right' : 'left';
  return { zone, cosIncidence };
}

export function absorbedNormalEnergy(
  carMassKg: number,
  obstacle: ObstacleDef,
  normalSpeedMs: number,
): number {
  const m = Math.max(1, carMassKg);
  const mu =
    obstacle.massKg <= 0
      ? m // immovable wall -> reduced mass = car mass
      : (m * obstacle.massKg) / (m + obstacle.massKg);
  const e = clamp(obstacle.restitution, 0, 0.9);
  const v = Math.max(0, normalSpeedMs);
  return 0.5 * mu * v * v * (1 - e * e) * obstacle.rigidity;
}

export function damageFromEnergy(absorbedJ: number, zone: DamageZone): number {
  const pct = (absorbedJ / E_REF_JOULES) * 100 * ZONE_FACTOR[zone];
  return clamp(pct, 0, 100);
}

export function estimateImpactForceKN(totalNormalImpulseNs: number): number {
  return Math.max(0, totalNormalImpulseNs) / ASSUMED_IMPACT_TIME_S / 1000;
}
