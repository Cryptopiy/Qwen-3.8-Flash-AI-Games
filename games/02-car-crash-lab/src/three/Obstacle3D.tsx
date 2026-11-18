import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Simulator } from '../physics/simulator';
import { makeHazardTexture, makeLabelTexture } from '../utils/textures';

/** Obstacle rendered from the definition + live simulated body transform. */
export function Obstacle3D({ sim }: { sim: Simulator }) {
  const root = useRef<THREE.Group>(null!);
  const hazard = useMemo(() => makeHazardTexture(), []);
  const label = useMemo(() => makeLabelTexture(sim.def.label.toUpperCase()), [sim.def]);
  const def = sim.def;

  useFrame(() => {
    if (!root.current) return;
    root.current.position.set(sim.obs.x, 0, sim.obs.z);
    root.current.rotation.y = sim.obs.yaw;
  });

  return (
    <group ref={root}>
      {def.render === 'wall' && (
        <>
          <mesh position={[0, def.height / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[def.hx * 2, def.height, def.hz * 2]} />
            <meshStandardMaterial color="#9aa0a6" roughness={0.95} />
          </mesh>
          <mesh position={[0, def.height + 0.07, 0]} castShadow>
            <boxGeometry args={[def.hx * 2 + 0.2, 0.14, def.hz * 2 + 0.2]} />
            <meshStandardMaterial color="#6f757b" roughness={0.95} />
          </mesh>
          <mesh position={[0, 0.075, def.hz + 0.35]} receiveShadow>
            <boxGeometry args={[def.hx * 2 + 1.6, 0.15, 1]} />
            <meshStandardMaterial color="#565b61" roughness={0.95} />
          </mesh>
        </>
      )}
      {def.render === 'heavyBarrier' && (
        <>
          <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
            <boxGeometry args={[def.hx * 2, 1.1, def.hz * 2]} />
            <meshStandardMaterial color="#2c74b8" roughness={0.55} />
          </mesh>
          <mesh position={[0, 1.14, 0]} castShadow>
            <boxGeometry args={[def.hx * 2 - 0.3, 0.1, def.hz * 2 - 0.2]} />
            <meshStandardMaterial color="#1d5c95" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.72, -def.hz - 0.01]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[def.hx * 1.7, 0.32]} />
            <meshStandardMaterial map={hazard} transparent={false} />
          </mesh>
        </>
      )}
      {def.render === 'lightBarrier' && (
        <>
          {[-1, 1].map((s) => (
            <mesh key={s} position={[s * (def.hx - 0.25), 0.28, 0]} castShadow>
              <boxGeometry args={[0.16, 0.56, 0.45]} />
              <meshStandardMaterial color="#3a3f47" roughness={0.9} />
            </mesh>
          ))}
          <mesh position={[0, 0.72, 0]} castShadow>
            <boxGeometry args={[def.hx * 2, 0.72, def.hz * 2]} />
            <meshStandardMaterial map={hazard} roughness={0.7} />
          </mesh>
        </>
      )}
      {/* name plate facing the approach */}
      <mesh position={[0, def.height + (def.render === 'wall' ? 0.65 : 0.95), -def.hz - 0.02]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3.2, 0.8]} />
        <meshBasicMaterial map={label} transparent />
      </mesh>
    </group>
  );
}
