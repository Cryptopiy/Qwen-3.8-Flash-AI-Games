import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Simulator } from '../physics/simulator';
import { makeLabelTexture } from '../utils/textures';

const MARKER_Z: number[] = [];
for (let z = -25; z <= 20; z += 5) MARKER_Z.push(z);

/** Runway, distance markers, impact zone ring. Static + one animated ring. */
export function Track({ sim }: { sim: Simulator }) {
  const ringMat = useRef<THREE.MeshBasicMaterial>(null!);
  const labels = useMemo(
    () =>
      MARKER_Z.filter((z) => z <= 0).map((z) => ({
        z,
        tex: makeLabelTexture(`${Math.abs(z)} m`, '#9fb4d0', 'rgba(10,14,20,0.75)'),
      })),
    [],
  );

  useFrame(() => {
    if (!ringMat.current) return;
    const pulse =
      sim.phase === 'impacted' && !sim.lastResult ? 0.35 + 0.25 * Math.sin(sim.tSim * 14) : 0.14;
    ringMat.current.opacity = pulse;
  });

  return (
    <group>
      {/* apron */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[260, 260]} />
        <meshStandardMaterial color="#12161c" roughness={1} />
      </mesh>
      {/* runway */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0, -4]} receiveShadow>
        <planeGeometry args={[18, 62]} />
        <meshStandardMaterial color="#262b32" roughness={0.95} />
      </mesh>
      {/* edge lines */}
      {[-8.7, 8.7].map((x) => (
        <mesh key={x} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.012, -4]}>
          <planeGeometry args={[0.18, 62]} />
          <meshBasicMaterial color="#c9d4e2" />
        </mesh>
      ))}
      {/* center dashes */}
      {Array.from({ length: 14 }, (_, i) => -32 + i * 5).map((z) => (
        <mesh key={z} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, z]}>
          <planeGeometry args={[0.16, 2.6]} />
          <meshBasicMaterial color="#7f8ca0" transparent opacity={0.65} />
        </mesh>
      ))}
      {/* distance markers */}
      {MARKER_Z.map((z) => (
        <mesh key={z} position={[-9.6, 0.45, z]} castShadow>
          <boxGeometry args={[0.1, 0.9, 0.1]} />
          <meshStandardMaterial color={z === 0 ? '#ff5566' : '#8fa2bd'} emissive={z === 0 ? '#551122' : '#000000'} />
        </mesh>
      ))}
      {labels.map(({ z, tex }) => (
        <mesh key={`lbl${z}`} position={[-8.4, 0.02, z]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.4, 1.2]} />
          <meshBasicMaterial map={tex} transparent opacity={0.95} />
        </mesh>
      ))}
      {/* zero line at impact zone */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.014, 0]}>
        <planeGeometry args={[18, 0.3]} />
        <meshBasicMaterial color="#ff4757" transparent opacity={0.85} />
      </mesh>
      {/* impact zone ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.016, 0]}>
        <ringGeometry args={[3.0, 3.35, 48]} />
        <meshBasicMaterial ref={ringMat} color="#ff4757" transparent opacity={0.14} />
      </mesh>
    </group>
  );
}
