import * as THREE from 'three';
import { Input } from './core/input';
import {
  Box2D,
  Circle2D,
  CityData,
  Pedestrian,
  Vehicle,
  VehicleKind,
} from './core/types';
import { clamp, lerpAngle, safeVec, mulberry32 } from './core/utils';
import { generateCity, laneSegment } from './world/cityData';
import { buildWorld } from './world/worldBuilder';
import { makeCar, makeCharacter, CarParts, CharacterParts } from './entities/models';
import { CameraRig } from './render/cameraRig';
import { MissionSystem } from './systems/mission';
import {
  carCircles,
  resolveCircleWorld,
  resolveVehiclePair,
  resolveVehicleStatic,
} from './physics/collision';
import { HudStore } from '../ui/hudStore';

const PED_COUNT = 16;
const TRAFFIC_COUNT = 10;
const MAX_POLICE = 3;
const CAR_W = 1.9;
const CAR_L = 4.2;
const WALK_SPEED = 5.2;
const RUN_SPEED = 8.2;
const PLAYER_R = 0.45;
const PED_R = 0.4;

const TRAFFIC_COLORS = [
  0x3566a8, 0xa83535, 0x4a8f4a, 0x7d5aa8, 0xd07f2e, 0x2e8f8f, 0xb0b0b0,
  0xf2c14e, 0x5a6a72, 0x8a4a5e,
];

let nextId = 1;

interface PlayerState {
  pos: THREE.Vector3;
  heading: number;
  phase: number;
  character: CharacterParts;
}

export class GameEngine {
  private container: HTMLElement;
  private store: HudStore;
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private input = new Input();
  private rig = new CameraRig();
  private city: CityData;
  private staticBoxes: Box2D[];
  private obstacles: Circle2D[];
  private allVehicles: Vehicle[] = [];
  private traffic: Vehicle[] = [];
  private police: Vehicle[] = [];
  private peds: Pedestrian[] = [];
  private missionCar: Vehicle;
  private carParts = new Map<number, CarParts>();
  private player: PlayerState;
  private driven: Vehicle | null = null;
  private mission: MissionSystem;
  private heat = 0;
  private wanted = 0;
  private busted = 0;
  private restrictedCd = 0;
  private time = 0;
  private last = 0;
  private raf = 0;
  private hudAcc = 0;
  private running = false;
  private rnd = mulberry32(1234567);

  private onResize = (): void => {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  };

  constructor(container: HTMLElement, store: HudStore) {
    this.container = container;
    this.store = store;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene.background = new THREE.Color(0x8fb8d8);
    this.scene.fog = new THREE.Fog(0x8fb8d8, 160, 480);

    this.camera = new THREE.PerspectiveCamera(58, 1, 0.1, 800);

    const hemi = new THREE.HemisphereLight(0xcfe4f5, 0x3a3f35, 1.0);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff1d6, 2.0);
    sun.position.set(120, 180, 80);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -230;
    sun.shadow.camera.right = 230;
    sun.shadow.camera.top = 230;
    sun.shadow.camera.bottom = -230;
    sun.shadow.camera.far = 520;
    sun.shadow.bias = -0.0005;
    this.scene.add(sun);

    this.city = generateCity();
    const col = buildWorld(this.scene, this.city);
    this.staticBoxes = col.boxes;
    this.obstacles = col.obstacles;

    for (const spot of this.city.parkedSpots) {
      this.createVehicle(
        'parked',
        new THREE.Vector3(spot.x, 0, spot.z),
        spot.heading,
        TRAFFIC_COLORS[Math.floor(this.rnd() * TRAFFIC_COLORS.length)]
      );
    }

    this.missionCar = this.createVehicle(
      'mission',
      new THREE.Vector3(this.city.missionCar.x, 0, this.city.missionCar.z),
      this.city.missionCar.heading,
      0xff8a3d
    );

    this.spawnTraffic();

    this.player = {
      pos: this.city.spawn.clone(),
      heading: Math.PI,
      phase: 0,
      character: makeCharacter(0xf2b705, 0x30415c),
    };
    this.player.character.group.position.copy(this.player.pos);
    this.scene.add(this.player.character.group);

    this.mission = new MissionSystem(this.scene, this.city, this.missionCar);

    this.spawnPeds(PED_COUNT);

    this.input.attach();
    this.rig.attach(this.renderer.domElement);
    window.addEventListener('resize', this.onResize);
    this.onResize();

    const startTarget = this.player.pos.clone();
    this.rig.cur.copy(this.rig.desiredPosition(startTarget, 11));
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.loop);
  }

  dispose(): void {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.input.detach();
    this.rig.detach(this.renderer.domElement);
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }

  private loop = (t: number): void => {
    if (!this.running) return;
    const dt = clamp((t - this.last) / 1000, 0, 0.05);
    this.last = t;
    this.update(dt);
    this.raf = requestAnimationFrame(this.loop);
  };

  // ---------- creation helpers ----------

  private createVehicle(kind: VehicleKind, pos: THREE.Vector3, heading: number, color: number): Vehicle {
    const parts = makeCar(color, kind === 'police');
    parts.group.position.copy(pos);
    parts.group.rotation.y = heading;
    this.scene.add(parts.group);
    const v: Vehicle = {
      id: nextId++,
      kind,
      pos: pos.clone(),
      heading,
      speed: 0,
      width: CAR_W,
      length: CAR_L,
      mesh: parts.group,
      playerDriven: false,
      nodeA: -1,
      nodeB: -1,
      laneTarget: null,
      stuck: 0,
      damageCd: 0,
    };
    this.carParts.set(v.id, parts);
    this.allVehicles.push(v);
    return v;
  }

  private spawnTraffic(): void {
    const nodes = this.city.nodes;
    for (let i = 0; i < TRAFFIC_COUNT; i++) {
      const a = Math.floor(this.rnd() * nodes.length);
      const nbrs = this.city.neighbors[a];
      const b = nbrs[Math.floor(this.rnd() * nbrs.length)];
      const seg = laneSegment(nodes[a], nodes[b], this.city.laneOffset);
      const f = 0.15 + this.rnd() * 0.7;
      const pos = seg.from.clone().lerp(seg.to, f);
      const color = i === 0 ? 0xf2c14e : TRAFFIC_COLORS[Math.floor(this.rnd() * TRAFFIC_COLORS.length)];
      const v = this.createVehicle('traffic', pos, seg.heading, color);
      v.nodeA = a;
      v.nodeB = b;
      this.traffic.push(v);
    }
  }

  private spawnPeds(count: number): void {
    const shirts = [0xd05050, 0x5070d0, 0x50a060, 0xb08040, 0x8060b0, 0x40a0a0, 0xc0c0c0, 0xe0a030];
    for (let i = 0; i < count; i++) {
      const pt = this.randomSidewalkPoint();
      const parts = makeCharacter(
        shirts[Math.floor(this.rnd() * shirts.length)],
        0x2b2f38
      );
      parts.group.position.copy(pt);
      this.scene.add(parts.group);
      this.peds.push({
        id: nextId++,
        pos: pt.clone(),
        heading: this.rnd() * Math.PI * 2,
        target: this.pickPedTarget(pt),
        state: 'walk',
        timer: this.rnd() * 2,
        speed: 1.1 + this.rnd() * 0.9,
        mesh: parts.group,
        phase: this.rnd() * 10,
        knocked: false,
        knockTime: 0,
      });
    }
  }

  private randomSidewalkPoint(): THREE.Vector3 {
    const pts = this.city.sidewalkPoints;
    return pts[Math.floor(this.rnd() * pts.length)].clone();
  }

  private pickPedTarget(from: THREE.Vector3): THREE.Vector3 {
    for (let i = 0; i < 6; i++) {
      const p = this.randomSidewalkPoint();
      if (p.distanceTo(from) > 12) return p;
    }
    return this.randomSidewalkPoint();
  }

  // ---------- main update ----------

  private update(dt: number): void {
    this.time += dt;
    this.restrictedCd = Math.max(0, this.restrictedCd - dt);
    if (this.busted > 0) {
      this.busted -= dt;
      if (this.busted <= 0) {
        this.player.character.group.visible = true;
        this.playerPosFromBust();
      }
    }

    if (this.busted > 0) {
      this.updateTraffic(dt);
      this.updatePeds(dt);
      this.updateMission(dt);
      this.syncVehicleMeshes();
      this.updateCamera(dt);
      this.publishHud(dt);
      this.input.endFrame();
      this.renderer.render(this.scene, this.camera);
      return;
    }

    if (this.input.consume('KeyR')) {
      this.mission.reset();
      this.respawnMissionCar();
    }
    this.tryEnterExit();

    if (this.driven) this.updateDriving(dt);
    else this.updateWalking(dt);

    this.moveAndCollideVehicles(dt);
    this.updateTraffic(dt);
    this.updatePolice(dt);
    this.updatePeds(dt);
    this.checkCrimes();
    this.updateWanted(dt);
    this.updateMission(dt);

    this.syncVehicleMeshes();
    this.syncPedMeshes();
    this.updateCamera(dt);
    this.publishHud(dt);

    this.input.endFrame();
    this.renderer.render(this.scene, this.camera);
  }

  private playerPosFromBust(): void {
    this.player.pos.copy(this.city.spawn);
    this.player.heading = Math.PI;
    this.player.character.group.position.copy(this.player.pos);
  }

  // ---------- player on foot ----------

  private updateWalking(dt: number): void {
    const i = this.input;
    const f = new THREE.Vector3(-Math.sin(this.rig.yaw), 0, -Math.cos(this.rig.yaw));
    const r = new THREE.Vector3(f.z, 0, -f.x);
    const mf = (i.anyDown('KeyW', 'ArrowUp') ? 1 : 0) - (i.anyDown('KeyS', 'ArrowDown') ? 1 : 0);
    const ms = (i.anyDown('KeyD', 'ArrowRight') ? 1 : 0) - (i.anyDown('KeyA', 'ArrowLeft') ? 1 : 0);
    const dir = new THREE.Vector3(f.x * mf + r.x * ms, 0, f.z * mf + r.z * ms);
    const moving = dir.lengthSq() > 0.001;
    const p = this.player;
    if (moving) {
      dir.normalize();
      const speed = i.anyDown('ShiftLeft', 'ShiftRight') ? RUN_SPEED : WALK_SPEED;
      p.pos.x += dir.x * speed * dt;
      p.pos.z += dir.z * speed * dt;
      p.heading = lerpAngle(p.heading, Math.atan2(dir.x, dir.z), clamp(dt * 12, 0, 1));
      p.phase += dt * (speed === RUN_SPEED ? 11 : 7.5);
      const swing = Math.sin(p.phase) * 0.6;
      p.character.ll.rotation.x = swing;
      p.character.rl.rotation.x = -swing;
      p.character.la.rotation.x = -swing * 0.8;
      p.character.ra.rotation.x = swing * 0.8;
    } else {
      for (const l of [p.character.ll, p.character.rl, p.character.la, p.character.ra]) {
        l.rotation.x *= Math.pow(0.02, dt);
      }
    }
    this.resolvePlayerAgainstWorld();
    safeVec(p.pos);
    p.character.group.position.set(p.pos.x, 0, p.pos.z);
    p.character.group.rotation.y = p.heading;
  }

  private vehicleCircles(): Circle2D[] {
    const out: Circle2D[] = [];
    for (const v of this.allVehicles) out.push(...carCircles(v));
    return out;
  }

  private resolvePlayerAgainstWorld(): void {
    const res = resolveCircleWorld(
      this.player.pos.x,
      this.player.pos.z,
      PLAYER_R,
      this.staticBoxes,
      this.vehicleCircles()
    );
    this.player.pos.x = res.x;
    this.player.pos.z = res.z;
  }

  // ---------- player driving ----------

  private updateDriving(dt: number): void {
    const v = this.driven!;
    const i = this.input;
    const fwd = (i.anyDown('KeyW', 'ArrowUp') ? 1 : 0) - (i.anyDown('KeyS', 'ArrowDown') ? 1 : 0);
    const steer = (i.anyDown('KeyD', 'ArrowRight') ? 1 : 0) - (i.anyDown('KeyA', 'ArrowLeft') ? 1 : 0);

    if (fwd > 0) v.speed = Math.min(14, v.speed + 8 * dt);
    else if (fwd < 0) {
      if (v.speed > 0.5) v.speed = Math.max(0, v.speed - 14 * dt);
      else v.speed = Math.max(-5, v.speed - 6 * dt);
    } else {
      v.speed -= v.speed * Math.min(1, dt * 1.3);
      if (Math.abs(v.speed) < 0.06) v.speed = 0;
    }
    if (i.isDown('Space')) {
      v.speed *= Math.pow(0.03, dt);
      if (Math.abs(v.speed) < 0.1) v.speed = 0;
    }

    const speedFactor = clamp(Math.abs(v.speed) / 5, 0, 1);
    v.heading += steer * 2.1 * dt * speedFactor * Math.sign(v.speed || 1);

    v.heading = safeNum2(v.heading);
    v.speed = clamp(safeNum2(v.speed), -8, 16);
    safeVec(v.pos);
  }

  // ---------- enter / exit ----------

  private enterTarget(): Vehicle | null {
    let best: Vehicle | null = null;
    let bestD = 3.6;
    for (const v of this.allVehicles) {
      if (v.kind !== 'parked' && v.kind !== 'mission') continue;
      if (v.playerDriven) continue;
      const d = Math.hypot(v.pos.x - this.player.pos.x, v.pos.z - this.player.pos.z);
      if (d < bestD) {
        bestD = d;
        best = v;
      }
    }
    return best;
  }

  private tryEnterExit(): void {
    if (!this.input.consume('KeyE')) return;
    if (this.driven) {
      const v = this.driven;
      if (Math.abs(v.speed) > 2.6) return;
      v.playerDriven = false;
      this.driven = null;
      const rx = Math.cos(v.heading);
      const rz = -Math.sin(v.heading);
      let px = v.pos.x + rx * (v.width / 2 + 1.1);
      let pz = v.pos.z + rz * (v.width / 2 + 1.1);
      const carCirclesOthers = this.vehicleCircles();
      let res = resolveCircleWorld(px, pz, PLAYER_R, this.staticBoxes, carCirclesOthers);
      if (Math.hypot(res.x - px, res.z - pz) > 0.8) {
        px = v.pos.x - rx * (v.width / 2 + 1.1);
        pz = v.pos.z - rz * (v.width / 2 + 1.1);
        res = resolveCircleWorld(px, pz, PLAYER_R, this.staticBoxes, carCirclesOthers);
      }
      this.player.pos.set(res.x, 0, res.z);
      this.player.character.group.visible = true;
      return;
    }
    const target = this.enterTarget();
    if (!target) return;
    target.playerDriven = true;
    target.speed = 0;
    this.driven = target;
    this.player.character.group.visible = false;
  }

  // ---------- vehicle movement + collisions ----------

  private moveAndCollideVehicles(dt: number): void {
    const movers: Vehicle[] = [];
    if (this.driven) movers.push(this.driven);
    for (const t of this.traffic) movers.push(t);
    for (const p of this.police) movers.push(p);

    for (const v of movers) {
      v.pos.x += Math.sin(v.heading) * v.speed * dt;
      v.pos.z += Math.cos(v.heading) * v.speed * dt;
      const hit = resolveVehicleStatic(v, this.staticBoxes, this.obstacles);
      if (hit) {
        if (v.playerDriven) v.speed *= 0.35;
        else v.speed *= 0.5;
      }
      const wh = this.city.worldHalf - 1;
      v.pos.x = clamp(v.pos.x, -wh, wh);
      v.pos.z = clamp(v.pos.z, -wh, wh);
      safeVec(v.pos);
      v.speed = clamp(safeNum2(v.speed), -8, 18);
      v.heading = safeNum2(v.heading);
      v.damageCd = Math.max(0, v.damageCd - dt);
    }

    const sorted = [...this.allVehicles];
    for (let i = 0; i < sorted.length; i++) {
      for (let j = i + 1; j < sorted.length; j++) {
        const a = sorted[i];
        const b = sorted[j];
        const aMove = a.playerDriven || a.kind === 'traffic' || a.kind === 'police';
        const bMove = b.playerDriven || b.kind === 'traffic' || b.kind === 'police';
        if (!aMove && !bMove) continue;
        const impact = resolveVehiclePair(a, b, aMove && bMove ? 0.5 : aMove ? 1 : 0, aMove && bMove ? 0.5 : bMove ? 1 : 0);
        if (impact <= 0) continue;
        const playerSide = a.playerDriven ? a : b.playerDriven ? b : null;
        const other = playerSide === a ? b : a;
        if (playerSide && impact > 5 && other.damageCd <= 0) {
          other.damageCd = 2;
          if (other.kind === 'police') this.addCrime(1.2);
          else if (other.kind === 'traffic') this.addCrime(0.9);
        }
        if (aMove && a.kind === 'traffic' && impact > 3) a.speed *= 0.6;
        if (bMove && b.kind === 'traffic' && impact > 3) b.speed *= 0.6;
      }
    }
  }

  // ---------- traffic AI ----------

  private updateTraffic(dt: number): void {
    const nodes = this.city.nodes;
    for (const t of this.traffic) {
      if (t.playerDriven) continue;
      if (t.laneTarget === null || t.nodeB < 0) this.pickRoute(t);

      const target = t.laneTarget!;
      const desired = Math.atan2(target.x - t.pos.x, target.z - t.pos.z);
      const speedFactor = clamp(Math.abs(t.speed) / 4, 0.15, 1);
      t.heading = lerpAngle(t.heading, desired, clamp(dt * 2.6 * speedFactor, 0, 1));

      const aheadX = t.pos.x + Math.sin(t.heading) * (t.length / 2 + 2.4);
      const aheadZ = t.pos.z + Math.cos(t.heading) * (t.length / 2 + 2.4);
      let blocked = false;
      for (const o of this.allVehicles) {
        if (o === t) continue;
        for (const c of carCircles(o)) {
          if (Math.hypot(aheadX - c.x, aheadZ - c.z) < c.r + 1.3) blocked = true;
        }
      }
      for (const p of this.peds) {
        if (p.knocked) continue;
        if (Math.hypot(aheadX - p.pos.x, aheadZ - p.pos.z) < 2.1) blocked = true;
      }

      const want = blocked ? 0.8 : 8.5 + (t.id % 3);
      t.speed += clamp(want - t.speed, -6 * dt, 4.5 * dt);
      if (t.speed < 0) t.speed = 0;

      if (Math.hypot(t.pos.x - nodes[t.nodeB].x, t.pos.z - nodes[t.nodeB].z) < 6.5) {
        const prev = t.nodeA;
        t.nodeA = t.nodeB;
        const opts = this.city.neighbors[t.nodeA].filter((n) => n !== prev);
        t.nodeB = (opts.length ? opts : this.city.neighbors[t.nodeA])[
          Math.floor(this.rnd() * (opts.length || this.city.neighbors[t.nodeA].length))
        ];
        t.laneTarget = null;
      } else {
        const dirLen = Math.hypot(target.x - t.pos.x, target.z - t.pos.z);
        if (dirLen > 60) t.laneTarget = null;
      }

      if (blocked && t.speed < 1) {
        t.stuck += dt;
        if (t.stuck > 3.5) {
          t.stuck = 0;
          const opts = this.city.neighbors[t.nodeA].filter((n) => n !== t.nodeB);
          if (opts.length) {
            t.nodeB = opts[Math.floor(this.rnd() * opts.length)];
            t.laneTarget = null;
          }
        }
      } else {
        t.stuck = Math.max(0, t.stuck - dt);
      }
    }
  }

  private pickRoute(t: Vehicle): void {
    const nodes = this.city.nodes;
    if (t.nodeA < 0) t.nodeA = Math.floor(this.rnd() * nodes.length);
    const opts = this.city.neighbors[t.nodeA].filter((n) => n !== t.nodeB);
    t.nodeB = (opts.length ? opts : this.city.neighbors[t.nodeA])[
      Math.floor(this.rnd() * (opts.length || this.city.neighbors[t.nodeA].length))
    ];
    const seg = laneSegment(nodes[t.nodeA], nodes[t.nodeB], this.city.laneOffset);
    t.laneTarget = seg.to;
    t.heading = seg.heading;
  }

  // ---------- police ----------

  private addCrime(n: number): void {
    this.heat = Math.min(6, this.heat + n);
  }

  private policeTargetPos(): THREE.Vector3 {
    return this.driven ? this.driven.pos : this.player.pos;
  }

  private updateWanted(dt: number): void {
    const decay = this.wanted >= 2 ? 0.13 : 0.28;
    this.heat = Math.max(0, this.heat - dt * decay);
    this.wanted = this.heat >= 5 ? 3 : this.heat >= 3 ? 2 : this.heat >= 1 ? 1 : 0;

    while (this.police.length < this.wanted && this.police.length < MAX_POLICE) {
      this.spawnPoliceCar();
    }
    while (this.police.length > this.wanted) {
      const gone = this.police.pop()!;
      this.scene.remove(gone.mesh);
      this.allVehicles.splice(this.allVehicles.indexOf(gone), 1);
    }
  }

  private spawnPoliceCar(): void {
    const nodes = this.city.nodes;
    const tp = this.policeTargetPos();
    let pick = Math.floor(this.rnd() * nodes.length);
    for (let i = 0; i < 16; i++) {
      const cand = Math.floor(this.rnd() * nodes.length);
      if (nodes[cand].distanceTo(tp) > 45) {
        pick = cand;
        break;
      }
    }
    const pos = nodes[pick].clone();
    pos.x += (this.rnd() - 0.5) * 6;
    pos.z += (this.rnd() - 0.5) * 6;
    const heading = Math.atan2(tp.x - pos.x, tp.z - pos.z);
    const v = this.createVehicle('police', pos, heading, 0xffffff);
    this.police.push(v);
  }

  private updatePolice(dt: number): void {
    const tp = this.policeTargetPos();
    for (const p of this.police) {
      const desired = Math.atan2(tp.x - p.pos.x, tp.z - p.pos.z);
      const speedFactor = clamp(Math.abs(p.speed) / 4, 0.2, 1);
      p.heading = lerpAngle(p.heading, desired, clamp(dt * 2.2 * speedFactor, 0, 1));
      const dist = Math.hypot(tp.x - p.pos.x, tp.z - p.pos.z);
      const want = dist > 9 ? 15 : dist < 4.5 ? 0 : 6;
      p.speed += clamp(want - p.speed, -10 * dt, 8 * dt);
      p.speed = clamp(p.speed, -4, 16);

      const parts = this.carParts.get(p.id);
      if (parts && parts.lights) {
        const phase = Math.floor(this.time * 6) % 2 === 0;
        (parts.lights[0].material as THREE.MeshLambertMaterial).emissiveIntensity = phase ? 3 : 0.2;
        (parts.lights[1].material as THREE.MeshLambertMaterial).emissiveIntensity = phase ? 0.2 : 3;
      }
    }

    if (this.wanted > 0 && !this.driven && this.busted <= 0) {
      for (const p of this.police) {
        if (Math.hypot(p.pos.x - this.player.pos.x, p.pos.z - this.player.pos.z) < 3.4 && Math.abs(p.speed) < 4) {
          this.bustPlayer();
          break;
        }
      }
    }
  }

  private bustPlayer(): void {
    this.busted = 3;
    this.heat = 0;
    this.wanted = 0;
    for (const p of this.police) {
      this.scene.remove(p.mesh);
      this.allVehicles.splice(this.allVehicles.indexOf(p), 1);
    }
    this.police.length = 0;
    if (this.driven) {
      this.driven.playerDriven = false;
      this.driven = null;
      this.player.character.group.visible = true;
    }
    this.mission.fail();
    this.player.character.group.visible = false;
  }

  // ---------- crime checks ----------

  private checkCrimes(): void {
    const p = this.driven ? this.driven.pos : this.player.pos;
    const rx = p.x;
    const rz = p.z;
    const r = this.city.restricted;
    if (rx > r.minX && rx < r.maxX && rz > r.minZ && rz < r.maxZ && this.restrictedCd <= 0) {
      this.restrictedCd = 8;
      this.addCrime(2);
    }

    if (this.driven && Math.abs(this.driven.speed) > 4) {
      const circles = carCircles(this.driven);
      for (const ped of this.peds) {
        if (ped.knocked) continue;
        for (const c of circles) {
          if (Math.hypot(c.x - ped.pos.x, c.z - ped.pos.z) < c.r + PED_R) {
            ped.knocked = true;
            ped.knockTime = 0;
            this.addCrime(2);
            break;
          }
        }
      }
    }
  }

  // ---------- pedestrians ----------

  private updatePeds(dt: number): void {
    const carCirc = this.vehicleCircles();
    for (const ped of this.peds) {
      if (ped.knocked) {
        ped.knockTime += dt;
        ped.mesh.rotation.x = lerpAngleTo(ped.mesh.rotation.x, Math.PI / 2, dt * 6);
        ped.mesh.position.y = Math.max(-0.15, ped.mesh.position.y - dt * 0.6);
        if (ped.knockTime > 22) {
          const pt = this.randomSidewalkPoint();
          if (pt.distanceTo(this.player.pos) < 25) continue;
          ped.knocked = false;
          ped.knockTime = 0;
          ped.state = 'walk';
          ped.timer = 0;
          ped.pos.copy(pt);
          ped.target = this.pickPedTarget(pt);
          ped.mesh.rotation.x = 0;
          ped.mesh.position.y = 0;
        }
        ped.mesh.position.x = ped.pos.x;
        ped.mesh.position.z = ped.pos.z;
        continue;
      }

      if (ped.state !== 'flee') {
        if (this.driven && Math.abs(this.driven.speed) > 5) {
          if (Math.hypot(this.driven.pos.x - ped.pos.x, this.driven.pos.z - ped.pos.z) < 7) {
            ped.state = 'flee';
            ped.timer = 4 + this.rnd() * 2;
          }
        } else if (this.wanted > 0) {
          for (const pc of this.police) {
            if (Math.hypot(pc.pos.x - ped.pos.x, pc.pos.z - ped.pos.z) < 6) {
              ped.state = 'flee';
              ped.timer = 3 + this.rnd() * 2;
              break;
            }
          }
        }
      }

      let speed = ped.speed;
      if (ped.state === 'walk') {
        const dx = ped.target.x - ped.pos.x;
        const dz = ped.target.z - ped.pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 1.2) {
          if (this.rnd() < 0.3) {
            ped.state = 'wait';
            ped.timer = 1.5 + this.rnd() * 3;
          } else {
            ped.target = this.pickPedTarget(ped.pos);
          }
        } else {
          const mx = dx / d;
          const mz = dz / d;
          ped.pos.x += mx * speed * dt;
          ped.pos.z += mz * speed * dt;
          ped.heading = lerpAngle(ped.heading, Math.atan2(mx, mz), clamp(dt * 8, 0, 1));
          ped.phase += dt * 6.5;
        }
      } else if (ped.state === 'wait') {
        ped.timer -= dt;
        if (ped.timer <= 0) ped.state = 'walk';
      } else {
        const threat = this.driven ? this.driven.pos : this.police.length ? this.police[0].pos : null;
        if (threat) {
          const dx = ped.pos.x - threat.x;
          const dz = ped.pos.z - threat.z;
          const d = Math.hypot(dx, dz) || 1;
          speed = 3.1;
          ped.pos.x += (dx / d) * speed * dt;
          ped.pos.z += (dz / d) * speed * dt;
          ped.heading = lerpAngle(ped.heading, Math.atan2(dx / d, dz / d), clamp(dt * 8, 0, 1));
          ped.phase += dt * 13;
        }
        ped.timer -= dt;
        if (ped.timer <= 0) ped.state = 'walk';
      }

      const res = resolveCircleWorld(ped.pos.x, ped.pos.z, PED_R, this.staticBoxes, carCirc.concat(this.obstacles));
      ped.pos.x = res.x;
      ped.pos.z = res.z;
      if (res.hit && ped.state === 'walk') {
        if (this.rnd() < 0.02) ped.target = this.pickPedTarget(ped.pos);
      }
      safeVec(ped.pos);
      const wh = this.city.worldHalf - 1;
      ped.pos.x = clamp(ped.pos.x, -wh, wh);
      ped.pos.z = clamp(ped.pos.z, -wh, wh);
    }
  }

  private syncPedMeshes(): void {
    for (const ped of this.peds) {
      ped.mesh.position.x = ped.pos.x;
      ped.mesh.position.z = ped.pos.z;
      if (!ped.knocked) ped.mesh.rotation.y = ped.heading;
      const swing = Math.sin(ped.phase) * 0.55;
      const parts = ped.mesh.userData.parts as
        | { la: THREE.Group; ra: THREE.Group; ll: THREE.Group; rl: THREE.Group }
        | undefined;
      if (parts) {
        parts.ll.rotation.x = ped.state === 'wait' || ped.knocked ? 0 : swing;
        parts.rl.rotation.x = ped.state === 'wait' || ped.knocked ? 0 : -swing;
      }
    }
  }

  // ---------- misc sync ----------

  private syncVehicleMeshes(): void {
    for (const v of this.allVehicles) {
      v.mesh.position.set(v.pos.x, 0, v.pos.z);
      v.mesh.rotation.y = v.heading;
      const parts = this.carParts.get(v.id);
      if (parts && Math.abs(v.speed) > 0.2) {
        for (const w of parts.wheels) w.rotation.x += v.speed * 0.2;
      }
    }
  }

  private respawnMissionCar(): void {
    if (this.driven === this.missionCar) {
      this.driven.playerDriven = false;
      this.driven = null;
      this.player.character.group.visible = true;
    }
    this.missionCar.pos.set(this.city.missionCar.x, 0, this.city.missionCar.z);
    this.missionCar.heading = this.city.missionCar.heading;
    this.missionCar.speed = 0;
  }

  private updateMission(dt: number): void {
    const inMissionCar = this.driven === this.missionCar;
    this.mission.update(dt, this.time, this.player.pos, inMissionCar);
  }

  private updateCamera(dt: number): void {
    let target: THREE.Vector3;
    let autoYaw: number | null = null;
    let wantDist = 11;
    if (this.driven) {
      target = this.driven.pos;
      autoYaw = this.driven.heading + Math.PI;
      wantDist = 13;
    } else {
      target = this.player.pos;
      wantDist = 10;
    }
    this.rig.update(dt, this.camera, target, autoYaw, wantDist);
  }

  private publishHud(dt: number): void {
    this.hudAcc += dt;
    if (this.hudAcc < 0.1) return;
    this.hudAcc = 0;
    const inMissionCar = this.driven === this.missionCar;
    let hint: string | null = null;
    if (this.driven) {
      hint = Math.abs(this.driven.speed) < 2.6 ? 'Press E to exit' : null;
    } else if (this.enterTarget()) {
      hint = 'Press E to enter vehicle';
    }
    const banner = this.busted > 0 ? 'BUSTED!' : this.mission.banner();
    this.store.set({
      mode: this.driven ? 'DRIVING' : 'FOOT',
      speed: this.driven ? Math.abs(this.driven.speed) * 3.6 : 0,
      wanted: this.wanted,
      objective: this.busted > 0 ? 'Wait...' : this.mission.objective(this.player.pos, inMissionCar),
      missionStatus: this.mission.statusLine(),
      hint,
      banner,
    });
  }
}

function lerpAngleTo(a: number, b: number, t: number): number {
  return a + (b - a) * clamp(t, 0, 1);
}

function safeNum2(v: number): number {
  return Number.isFinite(v) ? v : 0;
}
