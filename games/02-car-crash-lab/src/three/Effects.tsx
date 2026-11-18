import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Simulator } from '../physics/simulator';

const MAX_SKID = 700;
const DEBRIS_SLOTS = 40;
const MAX_SPARKS = 90;

const dummy = new THREE.Object3D();

/** Skid marks (instanced quads) + debris (instanced boxes) + spark points. */
export function Effects({ sim }: { sim: Simulator }) {
  const skid = useRef<THREE.InstancedMesh>(null!);
  const debris = useRef<THREE.InstancedMesh>(null!);
  const sparkPts = useRef<THREE.Points>(null!);
  const sparkGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(MAX_SPARKS * 3);
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0);
    return g;
  }, []);

  const debrisColors = useMemo(() => {
    const map: Record<number, string> = { 0: '#d9a92c', 1: '#9fd6e8', 2: '#1c1f24' };
    return map;
  }, []);

  useFrame(() => {
    // skid marks
    if (skid.current) {
      const marks = sim.skidMarks;
      const n = Math.min(marks.length, MAX_SKID);
      for (let i = 0; i < n; i++) {
        const m = marks[i];
        dummy.position.set(m.x, 0.02, m.z);
        dummy.rotation.set(-Math.PI / 2, 0, m.yaw);
        dummy.scale.set(0.24, 0.5, 1);
        dummy.updateMatrix();
        skid.current.setMatrixAt(i, dummy.matrix);
      }
      skid.current.count = n;
      skid.current.instanceMatrix.needsUpdate = true;
    }
    // debris
    if (debris.current) {
      const d = sim.debris;
      const n = Math.min(d.length, DEBRIS_SLOTS);
      for (let i = 0; i < n; i++) {
        const p = d[i];
        dummy.position.set(p.x, p.y, p.z);
        dummy.rotation.set(p.rot * 0.8, p.rot, p.rot * 0.5);
        dummy.scale.setScalar(p.size * 6);
        dummy.updateMatrix();
        debris.current.setMatrixAt(i, dummy.matrix);
        const c = new THREE.Color(debrisColors[p.kind] ?? '#cccccc');
        debris.current.setColorAt(i, c);
      }
      debris.current.count = n;
      debris.current.instanceMatrix.needsUpdate = true;
      if (debris.current.instanceColor) debris.current.instanceColor.needsUpdate = true;
    }
    // sparks
    if (sparkPts.current) {
      const attr = sparkGeo.getAttribute('position') as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      const s = sim.sparks;
      const n = Math.min(s.length, MAX_SPARKS);
      for (let i = 0; i < n; i++) {
        arr[i * 3] = s[i].x;
        arr[i * 3 + 1] = s[i].y;
        arr[i * 3 + 2] = s[i].z;
      }
      attr.needsUpdate = true;
      sparkGeo.setDrawRange(0, n);
      const mat = sparkPts.current.material as THREE.PointsMaterial;
      mat.opacity = 0.95;
    }
  });

  useEffect(() => {
    if (skid.current) skid.current.count = 0;
    if (debris.current) debris.current.count = 0;
    return () => {
      sparkGeo.dispose();
    };
  }, [sparkGeo]);

  return (
    <group>
      <instancedMesh ref={skid} args={[undefined, undefined, MAX_SKID]} frustumCulled={false}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#0a0b0d" transparent opacity={0.55} depthWrite={false} />
      </instancedMesh>
      <instancedMesh ref={debris} args={[undefined, undefined, DEBRIS_SLOTS]} frustumCulled={false} castShadow>
        <boxGeometry args={[0.12, 0.08, 0.14]} />
        <meshStandardMaterial color="#ffffff" roughness={0.6} />
      </instancedMesh>
      <points ref={sparkPts} geometry={sparkGeo} frustumCulled={false}>
        <pointsMaterial
          color="#ffd27a"
          size={0.09}
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
