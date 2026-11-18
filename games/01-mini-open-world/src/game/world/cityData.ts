import * as THREE from 'three';
import { Box2D, BuildingData, Circle2D, CityData, ParkedSpot } from '../core/types';
import { mulberry32 } from '../core/utils';

const ROADS = [-160, -80, 0, 80, 160];
const N = ROADS.length;
const ROAD_HALF = 7;
const BLOCK_CENTERS = [-120, -40, 40, 120];
const WORLD_HALF = 200;
const LANE_OFFSET = 3.6;

const FACADES = [
  0x9a8f80, 0x7d8a96, 0xa4927a, 0x6f7b8c, 0x8c8f94, 0xb0a18f, 0x66707d,
  0x99a3ad, 0x84705f, 0x77808c,
];

function rectBox(cx: number, cz: number, hw: number, hd: number): Box2D {
  return { minX: cx - hw, maxX: cx + hw, minZ: cz - hd, maxZ: cz + hd };
}

export function perimeterPoint(bx: number, bz: number, t: number): THREE.Vector3 {
  const h = 29;
  const s = (((t % 1) + 1) % 1) * 4;
  const e = Math.floor(s);
  const f = s - e;
  let x = 0;
  let z = 0;
  if (e === 0) {
    x = -h + f * 2 * h;
    z = -h;
  } else if (e === 1) {
    x = h;
    z = -h + f * 2 * h;
  } else if (e === 2) {
    x = h - f * 2 * h;
    z = h;
  } else {
    x = -h;
    z = h - f * 2 * h;
  }
  return new THREE.Vector3(bx + x, 0, bz + z);
}

function buildNodes(): { nodes: THREE.Vector3[]; neighbors: number[][] } {
  const nodes: THREE.Vector3[] = [];
  for (const rx of ROADS) for (const rz of ROADS) nodes.push(new THREE.Vector3(rx, 0, rz));
  const neighbors: number[][] = nodes.map(() => []);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const idx = i * N + j;
      if (i > 0) neighbors[idx].push((i - 1) * N + j);
      if (i < N - 1) neighbors[idx].push((i + 1) * N + j);
      if (j > 0) neighbors[idx].push(i * N + (j - 1));
      if (j < N - 1) neighbors[idx].push(i * N + (j + 1));
    }
  }
  return { nodes, neighbors };
}

export function generateCity(): CityData {
  const rnd = mulberry32(987654321);
  const buildings: BuildingData[] = [];
  const obstacles: Circle2D[] = [];
  const trees: { x: number; z: number }[] = [];
  const sidewalkPoints: THREE.Vector3[] = [];

  for (const bx of BLOCK_CENTERS) {
    for (const bz of BLOCK_CENTERS) {
      for (let k = 0; k < 8; k++) sidewalkPoints.push(perimeterPoint(bx, bz, k / 8));

      for (const t of [0, 0.25, 0.5, 0.75]) {
        const p = perimeterPoint(bx, bz, t);
        const dir = new THREE.Vector3(bx - p.x, 0, bz - p.z).normalize();
        const tx = p.x + dir.x * 2.5;
        const tz = p.z + dir.z * 2.5;
        trees.push({ x: tx, z: tz });
        obstacles.push({ x: tx, z: tz, r: 0.85 });
      }

      if (bx === -40 && bz === 120) {
        buildings.push({ box: rectBox(bx, bz, 15, 12), height: 14, color: 0x86a4b8, station: true });
        continue;
      }

      const layout = Math.floor(rnd() * 3);
      const addBldg = (cx: number, cz: number, hw: number, hd: number) => {
        hw = Math.min(hw, 26 - Math.abs(cx - bx));
        hd = Math.min(hd, 26 - Math.abs(cz - bz));
        if (hw < 4 || hd < 4) return;
        buildings.push({
          box: rectBox(cx, cz, hw, hd),
          height: 8 + rnd() * 30,
          color: FACADES[Math.floor(rnd() * FACADES.length)],
        });
      };

      if (layout === 0) {
        addBldg(bx + (rnd() * 8 - 4), bz + (rnd() * 8 - 4), 12 + rnd() * 8, 12 + rnd() * 8);
      } else if (layout === 1) {
        addBldg(bx - 11.5, bz, 10.5, 14 + rnd() * 8);
        addBldg(bx + 11.5, bz, 10.5, 14 + rnd() * 8);
      } else {
        for (const sx of [-1, 1]) {
          for (const sz of [-1, 1]) {
            if (rnd() < 0.25) continue;
            addBldg(bx + sx * 11.5, bz + sz * 11.5, 9.5, 9.5);
          }
        }
      }
    }
  }

  const { nodes, neighbors } = buildNodes();

  const parkedSpots: ParkedSpot[] = [
    { x: -155.5, z: -120, heading: 0 },
    { x: -155.5, z: 25, heading: Math.PI },
    { x: -4.5, z: -115, heading: Math.PI },
    { x: 4.5, z: 115, heading: 0 },
    { x: 84.5, z: -135, heading: Math.PI },
  ];

  const restricted = rectBox(-40, 120, 26, 26);

  return {
    roads: ROADS,
    roadHalf: ROAD_HALF,
    worldHalf: WORLD_HALF,
    laneOffset: LANE_OFFSET,
    buildings,
    obstacles,
    trees,
    sidewalkPoints,
    nodes,
    neighbors,
    parkedSpots,
    spawn: new THREE.Vector3(40, 0, 69),
    missionStart: new THREE.Vector3(-124, 0, -65),
    missionCar: { x: 84.5, z: -46, heading: Math.PI },
    destination: new THREE.Vector3(-120, 0, 94),
    restricted,
    restrictedCenter: new THREE.Vector3(-40, 0, 120),
  };
}

export function laneSegment(
  a: THREE.Vector3,
  b: THREE.Vector3,
  laneOffset: number
): { from: THREE.Vector3; to: THREE.Vector3; heading: number } {
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const len = Math.hypot(dx, dz) || 1;
  const rx = dz / len;
  const rz = -dx / len;
  const from = new THREE.Vector3(a.x + rx * laneOffset, 0, a.z + rz * laneOffset);
  const to = new THREE.Vector3(b.x + rx * laneOffset, 0, b.z + rz * laneOffset);
  return { from, to, heading: Math.atan2(dx, dz) };
}
