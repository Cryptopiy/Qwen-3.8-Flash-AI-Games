import * as THREE from 'three';
import { Box2D, CityData } from '../core/types';
import { mulberry32 } from '../core/utils';

export interface WorldCollision {
  boxes: Box2D[];
  obstacles: { x: number; z: number; r: number }[];
}

function makeFacadeTexture(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 64, 64);
  const rnd = mulberry32(4242);
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const x = col * 16 + 3;
      const y = row * 16 + 3;
      ctx.fillStyle = rnd() < 0.18 ? '#f5d78a' : '#39424e';
      ctx.fillRect(x, y, 10, 10);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeRoadTexture(vertical: boolean): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#31363c';
  ctx.fillRect(0, 0, 64, 64);
  const rnd = mulberry32(777);
  ctx.fillStyle = '#2b2f34';
  for (let i = 0; i < 60; i++) {
    ctx.fillRect(rnd() * 62, rnd() * 62, 2, 2);
  }
  ctx.fillStyle = '#c9c9c9';
  if (vertical) {
    ctx.fillRect(3, 0, 1.5, 64);
    ctx.fillRect(59.5, 0, 1.5, 64);
    ctx.fillStyle = '#d8c557';
    ctx.fillRect(31, 6, 2, 28);
  } else {
    ctx.fillRect(0, 3, 64, 1.5);
    ctx.fillRect(0, 59.5, 64, 1.5);
    ctx.fillStyle = '#d8c557';
    ctx.fillRect(6, 31, 28, 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function buildWorld(scene: THREE.Scene, city: CityData): WorldCollision {
  const span = city.worldHalf * 2 + 20;

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(900, 900),
    new THREE.MeshLambertMaterial({ color: 0x4a5340 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.05;
  ground.receiveShadow = true;
  scene.add(ground);

  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(span, 0.1, span),
    new THREE.MeshLambertMaterial({ color: 0x3a3f44 })
  );
  slab.position.y = 0.0;
  slab.receiveShadow = true;
  scene.add(slab);

  const roadLen = city.worldHalf * 2;
  const texV = makeRoadTexture(true);
  const texH = makeRoadTexture(false);
  for (const r of city.roads) {
    const matV = new THREE.MeshLambertMaterial({ map: texV });
    const roadV = new THREE.Mesh(new THREE.BoxGeometry(city.roadHalf * 2, 0.08, roadLen), matV);
    roadV.position.set(r, 0.06, 0);
    roadV.receiveShadow = true;
    scene.add(roadV);

    const matH = new THREE.MeshLambertMaterial({ map: texH });
    const roadH = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.08, city.roadHalf * 2), matH);
    roadH.position.set(0, 0.06, r);
    roadH.receiveShadow = true;
    scene.add(roadH);
  }

  const blockCenters = [-120, -40, 40, 120];
  const walkMat = new THREE.MeshLambertMaterial({ color: 0x8f9297 });
  for (const bx of blockCenters) {
    for (const bz of blockCenters) {
      const walk = new THREE.Mesh(new THREE.BoxGeometry(66, 0.3, 66), walkMat);
      walk.position.set(bx, 0.16, bz);
      walk.receiveShadow = true;
      scene.add(walk);
    }
  }

  const baseFacade = makeFacadeTexture();
  const boxes: Box2D[] = [];
  for (const b of city.buildings) {
    const w = b.box.maxX - b.box.minX;
    const d = b.box.maxZ - b.box.minZ;
    const cx = (b.box.minX + b.box.maxX) / 2;
    const cz = (b.box.minZ + b.box.maxZ) / 2;
    const tex = baseFacade.clone();
    tex.needsUpdate = true;
    tex.repeat.set(Math.max(2, Math.round(w / 8)), Math.max(1, Math.round(b.height / 8)));
    const mat = new THREE.MeshLambertMaterial({ color: b.color, map: tex });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, b.height, d), mat);
    mesh.position.set(cx, 0.31 + b.height / 2, cz);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    boxes.push(b.box);

    if (b.station) {
      const beacon = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 1.6, 2.5),
        new THREE.MeshLambertMaterial({ color: 0x2f6fd0, emissive: 0x1a3f8a, emissiveIntensity: 1 })
      );
      beacon.position.set(cx, 0.31 + b.height + 0.8, cz);
      scene.add(beacon);
    }
  }

  const trunkMat = new THREE.MeshLambertMaterial({ color: 0x6b4a2f });
  const leafMat = new THREE.MeshLambertMaterial({ color: 0x3f6d3a });
  for (const t of city.trees) {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 1.4, 8), trunkMat);
    trunk.position.set(t.x, 1.0, t.z);
    trunk.castShadow = true;
    scene.add(trunk);
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(1.1, 2.4, 8), leafMat);
    leaf.position.set(t.x, 2.6, t.z);
    leaf.castShadow = true;
    scene.add(leaf);
  }

  const r = city.restricted;
  const pad = new THREE.Mesh(
    new THREE.BoxGeometry(r.maxX - r.minX, 0.06, r.maxZ - r.minZ),
    new THREE.MeshBasicMaterial({ color: 0xff3b3b, transparent: true, opacity: 0.16, depthWrite: false })
  );
  pad.position.set((r.minX + r.maxX) / 2, 0.36, (r.minZ + r.maxZ) / 2);
  pad.renderOrder = 2;
  scene.add(pad);

  const wh = city.worldHalf;
  boxes.push(
    { minX: -wh - 8, maxX: -wh, minZ: -wh - 80, maxZ: wh + 80 },
    { minX: wh, maxX: wh + 8, minZ: -wh - 80, maxZ: wh + 80 },
    { minX: -wh - 80, maxX: wh + 80, minZ: -wh - 8, maxZ: -wh },
    { minX: -wh - 80, maxX: wh + 80, minZ: wh, maxZ: wh + 8 }
  );

  return { boxes, obstacles: city.obstacles };
}
