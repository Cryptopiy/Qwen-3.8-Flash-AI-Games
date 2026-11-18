import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Simulator } from '../physics/simulator';
import type { DamageZone } from '../physics/damage';

const BASE = new THREE.Color('#e7b52f');
const CRASHED = new THREE.Color('#22252b');
const tmp = new THREE.Color();

function applyDamage(mat: THREE.MeshStandardMaterial, dmg: number, base: THREE.Color) {
  tmp.copy(base).lerp(CRASHED, (dmg / 100) * 0.88);
  mat.color.copy(tmp);
  mat.roughness = 0.55 + (dmg / 100) * 0.4;
}

/**
 * The car mesh reads strictly from simulator state: position (x,z), yaw,
 * simulated pitch spring and per-zone damage. Deformation is applied to the
 * matching body-zone meshes (front / rear / left / right).
 */
export function Car({ sim }: { sim: Simulator }) {
  const root = useRef<THREE.Group>(null!);
  const hood = useRef<THREE.Mesh>(null!);
  const trunk = useRef<THREE.Mesh>(null!);
  const sideL = useRef<THREE.Mesh>(null!);
  const sideR = useRef<THREE.Mesh>(null!);
  const bumperF = useRef<THREE.Mesh>(null!);

  const mats = useMemo(
    () => ({
      hood: new THREE.MeshStandardMaterial({ color: BASE.clone(), roughness: 0.55, metalness: 0.15 }),
      trunk: new THREE.MeshStandardMaterial({ color: BASE.clone(), roughness: 0.55, metalness: 0.15 }),
      sideL: new THREE.MeshStandardMaterial({ color: BASE.clone(), roughness: 0.55, metalness: 0.15 }),
      sideR: new THREE.MeshStandardMaterial({ color: BASE.clone(), roughness: 0.55, metalness: 0.15 }),
      body: new THREE.MeshStandardMaterial({ color: '#d9a92c', roughness: 0.6, metalness: 0.1 }),
      cabin: new THREE.MeshStandardMaterial({ color: '#c8982a', roughness: 0.6 }),
      glass: new THREE.MeshStandardMaterial({ color: '#16222e', roughness: 0.15, metalness: 0.55 }),
      dark: new THREE.MeshStandardMaterial({ color: '#181b20', roughness: 0.85 }),
      tire: new THREE.MeshStandardMaterial({ color: '#0c0d10', roughness: 0.95 }),
      light: new THREE.MeshStandardMaterial({ color: '#fff6d8', emissive: '#ffe9a8', emissiveIntensity: 0.9 }),
      tail: new THREE.MeshStandardMaterial({ color: '#ff4444', emissive: '#c21111', emissiveIntensity: 0.8 }),
    }),
    [],
  );

  useFrame(() => {
    if (!root.current) return;
    const c = sim.car;
    root.current.position.set(c.x, 0, c.z);
    root.current.rotation.set(0, c.yaw, 0);
    root.current.rotateX(sim.pitch);

    const zd: Record<DamageZone, number> = sim.zoneDamage;
    const f = zd.front;
    const r = zd.rear;
    const l = zd.left;
    const rt = zd.right;

    if (hood.current) {
      hood.current.position.set(0, 0.74 - f * 0.0016, 1.5 - f * 0.0052);
      hood.current.scale.set(1, Math.max(0.4, 1 - f * 0.0038), Math.max(0.55, 1 - f * 0.0028));
      hood.current.rotation.x = f * 0.0022;
    }
    if (trunk.current) {
      trunk.current.position.set(0, 0.74 - r * 0.0012, -1.62 + r * 0.004);
      trunk.current.scale.set(1, Math.max(0.5, 1 - r * 0.003), Math.max(0.6, 1 - r * 0.0022));
      trunk.current.rotation.x = -r * 0.0015;
    }
    if (sideL.current) {
      sideL.current.position.set(-0.87 + l * 0.005, 0.42, 0);
      sideL.current.scale.set(Math.max(0.35, 1 - l * 0.0045), 1, Math.max(0.85, 1 - l * 0.0015));
    }
    if (sideR.current) {
      sideR.current.position.set(0.87 - rt * 0.005, 0.42, 0);
      sideR.current.scale.set(Math.max(0.35, 1 - rt * 0.0045), 1, Math.max(0.85, 1 - rt * 0.0015));
    }
    if (bumperF.current) {
      bumperF.current.position.set(0, 0.4 - f * 0.0014, 2.14 - f * 0.003);
    }

    applyDamage(mats.hood, f, BASE);
    applyDamage(mats.trunk, r, BASE);
    applyDamage(mats.sideL, l, BASE);
    applyDamage(mats.sideR, rt, BASE);
  });

  return (
    <group ref={root}>
      {/* chassis */}
      <mesh position={[0, 0.46, 0]} material={mats.body} castShadow>
        <boxGeometry args={[CAR_WIDTH_W, 0.55, 4.42]} />
      </mesh>
      {/* hood (front crush zone) */}
      <mesh ref={hood} position={[0, 0.74, 1.5]} material={mats.hood} castShadow>
        <boxGeometry args={[1.56, 0.18, 1.35]} />
      </mesh>
      {/* trunk (rear crush zone) */}
      <mesh ref={trunk} position={[0, 0.74, -1.62]} material={mats.trunk} castShadow>
        <boxGeometry args={[1.56, 0.18, 1.15]} />
      </mesh>
      {/* side damage panels */}
      <mesh ref={sideL} position={[-0.87, 0.42, 0]} material={mats.sideL} castShadow>
        <boxGeometry args={[0.1, 0.34, 3.6]} />
      </mesh>
      <mesh ref={sideR} position={[0.87, 0.42, 0]} material={mats.sideR} castShadow>
        <boxGeometry args={[0.1, 0.34, 3.6]} />
      </mesh>
      {/* cabin + glass */}
      <mesh position={[0, 1.06, -0.12]} material={mats.cabin} castShadow>
        <boxGeometry args={[1.6, 0.48, 1.95]} />
      </mesh>
      <mesh position={[0, 1.08, -0.12]} material={mats.glass}>
        <boxGeometry args={[1.5, 0.4, 1.85]} />
      </mesh>
      {/* bumpers */}
      <mesh ref={bumperF} position={[0, 0.4, 2.14]} material={mats.dark} castShadow>
        <boxGeometry args={[1.84, 0.24, 0.24]} />
      </mesh>
      <mesh position={[0, 0.4, -2.14]} material={mats.dark} castShadow>
        <boxGeometry args={[1.84, 0.24, 0.24]} />
      </mesh>
      {/* lights */}
      <mesh position={[0.62, 0.72, 2.22]} material={mats.light}>
        <boxGeometry args={[0.36, 0.14, 0.06]} />
      </mesh>
      <mesh position={[-0.62, 0.72, 2.22]} material={mats.light}>
        <boxGeometry args={[0.36, 0.14, 0.06]} />
      </mesh>
      <mesh position={[0.62, 0.68, -2.22]} material={mats.tail}>
        <boxGeometry args={[0.36, 0.14, 0.06]} />
      </mesh>
      <mesh position={[-0.62, 0.68, -2.22]} material={mats.tail}>
        <boxGeometry args={[0.36, 0.14, 0.06]} />
      </mesh>
      {/* wheels */}
      {WHEEL_POS.map((p, i) => (
        <mesh key={i} position={p} rotation={[0, 0, Math.PI / 2]} material={mats.tire} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.26, 18]} />
        </mesh>
      ))}
    </group>
  );
}

const CAR_WIDTH_W = 1.82;
const WHEEL_POS: Array<[number, number, number]> = [
  [0.95, 0.35, 1.4],
  [-0.95, 0.35, 1.4],
  [0.95, 0.35, -1.4],
  [-0.95, 0.35, -1.4],
];
