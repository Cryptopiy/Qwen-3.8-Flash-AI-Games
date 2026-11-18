import * as THREE from 'three';
import { CityData, Vehicle } from '../core/types';

type MissionState = 'approach' | 'getCar' | 'deliver' | 'done' | 'failed';

function makeMarker(color: number): THREE.Group {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(
    new THREE.CylinderGeometry(3.2, 3.2, 5, 28, 1, true),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  ring.position.y = 2.5;
  g.add(ring);
  const pillar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.35, 0.35, 4, 10),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.65, depthWrite: false })
  );
  pillar.position.y = 2;
  g.add(pillar);
  return g;
}

function makePing(color: number): THREE.Group {
  const g = new THREE.Group();
  const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.55, 1.3, 10),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false })
  );
  cone.rotation.x = Math.PI;
  g.add(cone);
  return g;
}

export class MissionSystem {
  state: MissionState = 'approach';
  timer = 0;
  private start: THREE.Group;
  private dest: THREE.Group;
  private ping: THREE.Group;
  private car: Vehicle;
  private city: CityData;

  constructor(scene: THREE.Scene, city: CityData, car: Vehicle) {
    this.city = city;
    this.car = car;
    this.start = makeMarker(0x2ee6a6);
    this.start.position.copy(city.missionStart);
    scene.add(this.start);
    this.dest = makeMarker(0xffc94d);
    this.dest.position.copy(city.destination);
    this.dest.visible = false;
    scene.add(this.dest);
    this.ping = makePing(0xff8a3d);
    scene.add(this.ping);
  }

  reset(): void {
    this.state = 'approach';
    this.timer = 0;
  }

  fail(): void {
    if (this.state !== 'done') this.state = 'failed';
  }

  update(dt: number, time: number, playerPos: THREE.Vector3, inMissionCar: boolean): void {
    const pulse = 1 + Math.sin(time * 3) * 0.08;
    this.start.scale.setScalar(this.state === 'approach' ? pulse : 0.001);
    this.start.visible = this.state === 'approach';
    this.start.rotation.y += dt * 0.8;

    this.dest.visible = this.state === 'deliver' || this.state === 'done';
    this.dest.scale.setScalar(this.dest.visible ? pulse : 0.001);
    this.dest.rotation.y += dt * 0.8;

    this.ping.visible = this.state === 'getCar' || this.state === 'deliver';
    this.ping.position.set(
      this.car.pos.x,
      3.2 + Math.sin(time * 4) * 0.25,
      this.car.pos.z
    );

    switch (this.state) {
      case 'approach':
        if (playerPos.distanceTo(this.city.missionStart) < 4.5) this.state = 'getCar';
        break;
      case 'getCar':
        if (inMissionCar) {
          this.state = 'deliver';
          this.timer = 90;
        }
        break;
      case 'deliver': {
        this.timer -= dt;
        if (this.timer <= 0) {
          this.timer = 0;
          this.state = 'failed';
        } else if (inMissionCar && this.car.pos.distanceTo(this.city.destination) < 7) {
          this.state = 'done';
        }
        break;
      }
      default:
        break;
    }
  }

  objective(playerPos: THREE.Vector3, inMissionCar: boolean): string {
    switch (this.state) {
      case 'approach': {
        const d = Math.round(playerPos.distanceTo(this.city.missionStart));
        return `Go to the mission marker (${d} m)`;
      }
      case 'getCar':
        return 'Enter the orange-marked car [E]';
      case 'deliver':
        return inMissionCar
          ? `Drive to the drop-off point — ${Math.ceil(this.timer)} s`
          : 'Return to the marked car [E]';
      case 'done':
        return 'Mission complete! Press R to replay';
      case 'failed':
        return 'Mission failed. Press R to retry';
    }
  }

  statusLine(): string {
    switch (this.state) {
      case 'approach':
        return 'MISSION: not started';
      case 'getCar':
        return 'MISSION: started — get the car';
      case 'deliver':
        return 'MISSION: delivery in progress';
      case 'done':
        return 'MISSION: SUCCESS';
      case 'failed':
        return 'MISSION: FAILED';
    }
  }

  banner(): string | null {
    if (this.state === 'done') return 'MISSION COMPLETE!';
    if (this.state === 'failed') return 'MISSION FAILED';
    return null;
  }
}
