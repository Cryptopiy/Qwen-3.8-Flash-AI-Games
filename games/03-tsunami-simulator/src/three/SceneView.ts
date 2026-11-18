import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { N, CS, HALF, cellToWorldX, cellToWorldZ, idx, clamp } from '../sim/constants';
import type { World } from '../sim/terrain';
import type { WaterSim } from '../sim/water';

const VERTS = N * N;

function buildGridGeometry(elev: Float32Array, colorSize: 3 | 4): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(VERTS * 3);
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const v = idx(i, j);
      pos[v * 3] = cellToWorldX(i);
      pos[v * 3 + 1] = elev[v];
      pos[v * 3 + 2] = cellToWorldZ(j);
    }
  }
  const indices = new Uint32Array((N - 1) * (N - 1) * 6);
  let p = 0;
  for (let j = 0; j < N - 1; j++) {
    for (let i = 0; i < N - 1; i++) {
      const a = idx(i, j);
      const b = a + 1;
      const c = a + N;
      const d = c + 1;
      indices[p++] = a; indices[p++] = c; indices[p++] = b;
      indices[p++] = b; indices[p++] = c; indices[p++] = d;
    }
  }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(VERTS * colorSize), colorSize));
  g.setIndex(new THREE.BufferAttribute(indices, 1));
  g.computeVertexNormals();
  return g;
}

const SUN = new THREE.Vector3(0.45, 0.8, 0.32).normalize();

export class SceneView {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly controls: OrbitControls;

  private terrainGeo: THREE.BufferGeometry;
  private waterGeo: THREE.BufferGeometry;
  private buildings: THREE.InstancedMesh;
  private carMesh: THREE.InstancedMesh;
  private personMesh: THREE.InstancedMesh;
  private dummy = new THREE.Object3D();
  private world: World;
  private overlay = false;

  constructor(canvas: HTMLCanvasElement, world: World, carCount: number, personCount: number) {
    this.world = world;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x8fb4cf);
    this.scene.fog = new THREE.Fog(0x8fb4cf, 600, 1900);

    this.camera = new THREE.PerspectiveCamera(52, 1, 1, 4000);
    this.camera.position.set(-360, 240, 220);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.set(20, 10, 0);
    this.controls.enableDamping = true;
    this.controls.maxPolarAngle = Math.PI / 2.05;
    this.controls.minDistance = 40;
    this.controls.maxDistance = 1200;
    this.controls.update();

    const hemi = new THREE.HemisphereLight(0xbdd6ef, 0x44553a, 0.85);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff2dc, 1.6);
    sun.position.copy(SUN).multiplyScalar(700);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -330;
    sun.shadow.camera.right = 330;
    sun.shadow.camera.top = 330;
    sun.shadow.camera.bottom = -330;
    sun.shadow.camera.near = 100;
    sun.shadow.camera.far = 1600;
    sun.shadow.bias = -0.0006;
    this.scene.add(sun);

    // terrain
    this.terrainGeo = buildGridGeometry(world.elev, 3);
    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.95,
      metalness: 0,
    });
    const terrain = new THREE.Mesh(this.terrainGeo, terrainMat);
    terrain.receiveShadow = true;
    this.scene.add(terrain);
    this.paintTerrain();

    // water
    this.waterGeo = new THREE.BufferGeometry();
    const wpos = new Float32Array(VERTS * 3);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const v = idx(i, j);
        wpos[v * 3] = cellToWorldX(i);
        wpos[v * 3 + 1] = 0;
        wpos[v * 3 + 2] = cellToWorldZ(j);
      }
    }
    this.waterGeo.setAttribute('position', new THREE.BufferAttribute(wpos, 3));
    this.waterGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(VERTS * 4), 4));
    this.waterGeo.setIndex(this.terrainGeo.getIndex()!.clone());
    const waterMat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const waterMesh = new THREE.Mesh(this.waterGeo, waterMat);
    waterMesh.renderOrder = 2;
    this.scene.add(waterMesh);

    // buildings (instanced boxes)
    const b = world.buildings;
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);
    this.buildings = new THREE.InstancedMesh(
      boxGeo,
      new THREE.MeshStandardMaterial({ vertexColors: false, roughness: 0.8 }),
      Math.max(1, b.length)
    );
    this.buildings.castShadow = true;
    this.buildings.receiveShadow = true;
    b.forEach((bd, n) => {
      this.dummy.position.set(bd.x, bd.h / 2 + Math.max(0, elevAtCell(world, bd.x, bd.z)) - 0.3, bd.z);
      this.dummy.rotation.set(0, ((n * 37) % 9 - 4) * 0.012, 0);
      this.dummy.scale.set(bd.w, bd.h, bd.d);
      this.dummy.updateMatrix();
      this.buildings.setMatrixAt(n, this.dummy.matrix);
      this.buildings.setColorAt(n, new THREE.Color().setHSL(0.08 + (n % 5) * 0.02, 0.06, 0.42 + bd.tone * 0.28));
    });
    this.buildings.instanceMatrix.needsUpdate = true;
    if (this.buildings.instanceColor) this.buildings.instanceColor.needsUpdate = true;
    this.scene.add(this.buildings);

    // cars
    const carGeo = new THREE.BoxGeometry(4.2, 1.5, 2.1);
    this.carMesh = new THREE.InstancedMesh(
      carGeo,
      new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.35 }),
      Math.max(1, carCount)
    );
    this.carMesh.castShadow = true;
    this.scene.add(this.carMesh);

    // people
    this.personMesh = new THREE.InstancedMesh(
      new THREE.CapsuleGeometry(0.35, 0.9, 3, 8),
      new THREE.MeshStandardMaterial({ roughness: 0.9 }),
      Math.max(1, personCount)
    );
    this.personMesh.castShadow = false;
    this.scene.add(this.personMesh);
  }

  setOverlay(on: boolean): void {
    this.overlay = on;
    this.paintTerrain();
  }

  private paintTerrain(): void {
    const { elev, road } = this.world;
    const colors = this.terrainGeo.getAttribute('color') as THREE.BufferAttribute;
    const arr = colors.array as Float32Array;
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const k = idx(i, j);
        const e = elev[k];
        // hill shading from finite differences
        const eL = elev[idx(Math.max(0, i - 1), j)];
        const eR = elev[idx(Math.min(N - 1, i + 1), j)];
        const eD = elev[idx(i, Math.max(0, j - 1))];
        const eU = elev[idx(i, Math.min(N - 1, j + 1))];
        const nx = -(eR - eL) / (2 * CS);
        const nz = -(eU - eD) / (2 * CS);
        const nl = Math.sqrt(nx * nx + nz * nz + 1);
        const shade = clamp(0.55 + 0.85 * ((nx * SUN.x + nz * SUN.z + SUN.y) / nl), 0.15, 1.45);

        let r = 0.4;
        let g = 0.5;
        let bl = 0.3;
        if (this.overlay) {
          // hypsometric tint + 2 m contour lines
          const t = clamp((e + 8) / 30, 0, 1);
          const col = rampColor(t);
          r = col[0];
          g = col[1];
          bl = col[2];
          if (e >= 0 && e % 2 < 0.14) {
            r *= 0.45;
            g *= 0.45;
            bl *= 0.45;
          }
        } else if (e < 0) {
          const t = clamp(-e / 8, 0, 1);
          r = 0.15 - 0.12 * t;
          g = 0.4 - 0.3 * t;
          bl = 0.55 - 0.32 * t;
        } else if (road[k]) {
          r = 0.24;
          g = 0.24;
          bl = 0.26;
        } else if (e < 1.2) {
          r = 0.78;
          g = 0.7;
          bl = 0.5;
        } else if (e < 7) {
          const t = clamp((e - 1.2) / 5.8, 0, 1);
          r = 0.78 - 0.43 * t;
          g = 0.7 - 0.16 * t;
          bl = 0.5 - 0.21 * t;
        } else if (e < 12.5) {
          r = 0.24;
          g = 0.42;
          bl = 0.22;
        } else {
          const t = clamp((e - 12.5) / 10, 0, 1);
          r = 0.5 + 0.32 * t;
          g = 0.48 + 0.34 * t;
          bl = 0.45 + 0.37 * t;
        }
        arr[k * 3] = r * shade;
        arr[k * 3 + 1] = g * shade;
        arr[k * 3 + 2] = bl * shade;
      }
    }
    colors.needsUpdate = true;
  }

  updateWater(water: WaterSim, tAnim: number): void {
    const posAttr = this.waterGeo.getAttribute('position') as THREE.BufferAttribute;
    const colAttr = this.waterGeo.getAttribute('color') as THREE.BufferAttribute;
    const pos = posAttr.array as Float32Array;
    const col = colAttr.array as Float32Array;
    const { elev } = this.world;
    const { depth, velX, velZ } = water;
    const maxD = Math.max(2.5, water.waveHeight * 0.8);
    for (let k = 0; k < VERTS; k++) {
      const e = elev[k];
      const d = depth[k];
      let y = e + d;
      if (d > 0.05 && e > 0) y += Math.sin(k * 0.61 + tAnim * 2.2) * 0.06 * Math.min(1, d);
      pos[k * 3 + 1] = y;

      let alpha: number;
      let r: number;
      let g: number;
      let b: number;
      if (d < 0.015) {
        alpha = 0;
        r = 0.4;
        g = 0.75;
        b = 0.9;
      } else {
        const t = clamp(d / maxD, 0, 1);
        r = 0.3 - 0.27 * t;
        g = 0.72 - 0.55 * t;
        b = 0.92 - 0.42 * t;
        alpha = clamp(0.3 + d * 0.5, 0, 0.88);
        const spd = Math.hypot(velX[k], velZ[k]);
        if (d < 1.1 && spd > 0.8) {
          // bright foam along the moving wave front
          const f = clamp((spd - 0.8) / 2.5, 0, 1) * clamp(1.1 - d, 0, 1);
          r += (0.96 - r) * f;
          g += (0.98 - g) * f;
          b += (0.99 - b) * f;
          alpha = Math.max(alpha, 0.55 + 0.4 * f);
        }
      }
      col[k * 4] = r;
      col[k * 4 + 1] = g;
      col[k * 4 + 2] = b;
      col[k * 4 + 3] = alpha;
    }
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  }

  updateBuildings(): void {
    const c = new THREE.Color();
    this.world.buildings.forEach((b, n) => {
      if (b.flooded) c.setRGB(0.3, 0.36, 0.45);
      else c.setHSL(0.08 + (n % 5) * 0.02, 0.06, 0.42 + b.tone * 0.28);
      this.buildings.setColorAt(n, c);
    });
    if (this.buildings.instanceColor) this.buildings.instanceColor.needsUpdate = true;
  }

  updateCars(cars: { x: number; z: number; y: number; rot: number; tilt: number; hue: number }[]): void {
    const c = new THREE.Color();
    cars.forEach((car, n) => {
      this.dummy.position.set(car.x, car.y + 0.75, car.z);
      this.dummy.rotation.set(car.tilt * 0.4, car.rot, car.tilt);
      this.dummy.scale.set(1, 1, 1);
      this.dummy.updateMatrix();
      this.carMesh.setMatrixAt(n, this.dummy.matrix);
      c.setHSL(car.hue, 0.65, 0.5);
      this.carMesh.setColorAt(n, c);
    });
    this.carMesh.instanceMatrix.needsUpdate = true;
    if (this.carMesh.instanceColor) this.carMesh.instanceColor.needsUpdate = true;
  }

  updatePeople(people: { x: number; z: number; y: number; state: string }[]): void {
    const c = new THREE.Color();
    people.forEach((p, n) => {
      this.dummy.position.set(p.x, p.y + 0.8, p.z);
      const fallen = p.state === 'swept';
      this.dummy.rotation.set(fallen ? 1.35 : 0, 0, 0);
      this.dummy.scale.set(1, fallen ? 0.55 : 1, 1);
      this.dummy.updateMatrix();
      this.personMesh.setMatrixAt(n, this.dummy.matrix);
      if (p.state === 'swept') c.setRGB(0.75, 0.12, 0.1);
      else if (p.state === 'safe') c.setRGB(0.15, 0.7, 0.25);
      else c.setRGB(0.95, 0.85, 0.45);
      this.personMesh.setColorAt(n, c);
    });
    this.personMesh.instanceMatrix.needsUpdate = true;
    if (this.personMesh.instanceColor) this.personMesh.instanceColor.needsUpdate = true;
  }

  resize(w: number, h: number): void {
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  render(): void {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.controls.dispose();
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      if (m.material) {
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        mats.forEach((mm) => mm.dispose());
      }
    });
    this.renderer.dispose();
  }
}

function elevAtCell(world: World, x: number, z: number): number {
  const i = clamp(Math.round((x + HALF) / CS - 0.5), 0, N - 1);
  const j = clamp(Math.round((z + HALF) / CS - 0.5), 0, N - 1);
  return Math.max(0, world.elev[idx(i, j)]);
}

function rampColor(t: number): [number, number, number] {
  // deep blue -> green -> yellow -> red -> white
  const stops: [number, number[]][] = [
    [0.0, [0.1, 0.2, 0.6]],
    [0.28, [0.2, 0.6, 0.3]],
    [0.55, [0.9, 0.85, 0.3]],
    [0.8, [0.85, 0.3, 0.15]],
    [1.0, [1, 1, 1]],
  ];
  for (let s = 0; s < stops.length - 1; s++) {
    const [t0, c0] = stops[s];
    const [t1, c1] = stops[s + 1];
    if (t <= t1) {
      const u = (t - t0) / (t1 - t0);
      return [
        c0[0] + (c1[0] - c0[0]) * u,
        c0[1] + (c1[1] - c0[1]) * u,
        c0[2] + (c1[2] - c0[2]) * u,
      ];
    }
  }
  return [1, 1, 1];
}
