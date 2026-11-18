import * as THREE from 'three';

export interface Box2D {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export interface Circle2D {
  x: number;
  z: number;
  r: number;
}

export interface BuildingData {
  box: Box2D;
  height: number;
  color: number;
  station?: boolean;
}

export interface ParkedSpot {
  x: number;
  z: number;
  heading: number;
}

export interface CityData {
  roads: number[];
  roadHalf: number;
  worldHalf: number;
  laneOffset: number;
  buildings: BuildingData[];
  obstacles: Circle2D[];
  trees: { x: number; z: number }[];
  sidewalkPoints: THREE.Vector3[];
  nodes: THREE.Vector3[];
  neighbors: number[][];
  parkedSpots: ParkedSpot[];
  spawn: THREE.Vector3;
  missionStart: THREE.Vector3;
  missionCar: ParkedSpot;
  destination: THREE.Vector3;
  restricted: Box2D;
  restrictedCenter: THREE.Vector3;
}

export type VehicleKind = 'parked' | 'traffic' | 'police' | 'mission';

export interface Vehicle {
  id: number;
  kind: VehicleKind;
  pos: THREE.Vector3;
  heading: number;
  speed: number;
  width: number;
  length: number;
  mesh: THREE.Group;
  playerDriven: boolean;
  nodeA: number;
  nodeB: number;
  laneTarget: THREE.Vector3 | null;
  stuck: number;
  damageCd: number;
}

export interface Pedestrian {
  id: number;
  pos: THREE.Vector3;
  heading: number;
  target: THREE.Vector3;
  state: 'walk' | 'wait' | 'flee';
  timer: number;
  speed: number;
  mesh: THREE.Group;
  phase: number;
  knocked: boolean;
  knockTime: number;
}

export interface HudState {
  mode: 'FOOT' | 'DRIVING';
  speed: number;
  wanted: number;
  objective: string;
  missionStatus: string;
  hint: string | null;
  banner: string | null;
}
