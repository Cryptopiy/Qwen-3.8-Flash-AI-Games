import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import type { Simulator } from '../physics/simulator';
import { Car } from './Car';
import { Obstacle3D } from './Obstacle3D';
import { Track } from './Track';
import { Effects } from './Effects';

function CameraRig({ sim }: { sim: Simulator }) {
  const { camera, gl } = useThree();
  const ctrl = useRef({
    az: -2.35,
    el: 0.34,
    dist: 30,
    tx: 0,
    tz: -3,
    down: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const el = gl.domElement;
    const onDown = (e: PointerEvent) => {
      ctrl.current.down = true;
      ctrl.current.lastX = e.clientX;
      ctrl.current.lastY = e.clientY;
      el.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      const c = ctrl.current;
      if (!c.down) return;
      c.az += (e.clientX - c.lastX) * 0.005;
      c.el = Math.min(1.35, Math.max(0.06, c.el + (e.clientY - c.lastY) * 0.004));
      c.lastX = e.clientX;
      c.lastY = e.clientY;
    };
    const onUp = () => {
      ctrl.current.down = false;
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const c = ctrl.current;
      c.dist = Math.min(80, Math.max(9, c.dist * (1 + Math.sign(e.deltaY) * 0.08)));
    };
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('wheel', onWheel);
    };
  }, [gl]);

  useFrame((_, dt) => {
    const c = ctrl.current;
    const follow = sim.phase !== 'idle';
    const gx = follow ? sim.car.x : 0;
    const gz = follow ? sim.car.z : -3;
    const k = Math.min(1, dt * 2.4);
    c.tx += (gx - c.tx) * k;
    c.tz += (gz - c.tz) * k;
    const horiz = Math.cos(c.el) * c.dist;
    camera.position.set(
      c.tx + Math.sin(c.az) * horiz + sim.shakeX,
      1.4 + Math.sin(c.el) * c.dist + sim.shakeY,
      c.tz + Math.cos(c.az) * horiz,
    );
    camera.lookAt(c.tx, 1.2, c.tz);
  });
  return null;
}

function Stepper({ sim }: { sim: Simulator }) {
  const last = useRef(0);
  useFrame((state) => {
    const now = state.clock.elapsedTime;
    const dt = last.current === 0 ? 0 : now - last.current;
    last.current = now;
    sim.step(dt);
  });
  return null;
}

export function Scene({ sim }: { sim: Simulator }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      camera={{ fov: 50, near: 0.2, far: 500, position: [-20, 10, -20] }}
      onCreated={({ scene, gl: renderer }) => {
        scene.background = new THREE.Color('#0b0f16');
        scene.fog = new THREE.Fog('#0b0f16', 55, 220);
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <hemisphereLight intensity={0.5} color="#b8c8e0" groundColor="#151a22" />
      <ambientLight intensity={0.22} />
      <directionalLight
        castShadow
        position={[26, 38, -18]}
        intensity={1.7}
        color="#fff4e0"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-38}
        shadow-camera-right={38}
        shadow-camera-top={38}
        shadow-camera-bottom={-38}
        shadow-camera-far={140}
        shadow-bias={-0.0004}
      />
      <directionalLight position={[-20, 16, 22]} intensity={0.35} color="#7fa8d8" />
      <Stepper sim={sim} />
      <CameraRig sim={sim} />
      <Track sim={sim} />
      <Obstacle3D sim={sim} />
      <Car sim={sim} />
      <Effects sim={sim} />
    </Canvas>
  );
}
