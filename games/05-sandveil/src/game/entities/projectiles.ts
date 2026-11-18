import Phaser from 'phaser';
import { TILE, WORLD_W, WORLD_H } from '../config';
import type { GameScene } from '../scenes/GameScene';
import type { Player } from './player';

interface Proj extends Phaser.Physics.Arcade.Sprite {
  life: number;
  dmg: number;
  homing?: boolean;
  fromPlayer: boolean;
}

function makeProj(scene: GameScene, tex: string, x: number, y: number, rot: number): Proj {
  const s = scene.physics.add.sprite(x, y, tex) as Proj;
  s.life = 0;
  s.dmg = 0;
  s.fromPlayer = false;
  s.setDepth(19);
  s.setRotation(rot);
  return s;
}

export class ProjManager {
  arrows: Proj[] = [];
  spores: Proj[] = [];
  scene: GameScene;
  constructor(scene: GameScene) {
    this.scene = scene;
  }

  fireArrow(x: number, y: number, angle: number, dmg: number) {
    const a = makeProj(this.scene, 'arrow', x, y, angle);
    const b = a.body as Phaser.Physics.Arcade.Body;
    b.setAllowGravity(false);
    a.dmg = dmg;
    a.fromPlayer = true;
    b.setVelocity(Math.cos(angle) * 430, Math.sin(angle) * 430);
    this.arrows.push(a);
  }

  fireSpore(x: number, y: number, angle: number, speed: number, dmg: number, homing = false) {
    const s = makeProj(this.scene, 'spore', x, y, 0);
    const b = s.body as Phaser.Physics.Arcade.Body;
    b.setAllowGravity(false);
    b.setSize(6, 6);
    s.dmg = dmg;
    s.homing = homing;
    s.fromPlayer = false;
    b.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    this.spores.push(s);
  }

  fireSeed(x: number, y: number, angle: number, speed: number) {
    const s = makeProj(this.scene, 'seed', x, y, 0);
    const b = s.body as Phaser.Physics.Arcade.Body;
    b.setAllowGravity(true);
    b.setBounce(0.4);
    b.setSize(6, 6);
    s.dmg = 10;
    s.fromPlayer = false;
    b.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed - 40);
    this.spores.push(s);
  }

  update(dt: number, player: Player) {
    const world = this.scene.world;
    const all = [...this.arrows, ...this.spores];
    for (const p of all) {
      p.life += dt;
      if (p.x < 0 || p.y < 0 || p.x > WORLD_W * TILE || p.y > WORLD_H * TILE || p.life > 5000 || !isFinite(p.x) || !isFinite(p.y)) {
        this.remove(p);
        continue;
      }
      const tx = Math.floor(p.x / TILE);
      const ty = Math.floor(p.y / TILE);
      if (world.opaque(tx, ty)) {
        this.scene.spawnDust(p.x, p.y, p.fromPlayer ? 0xd9d9d9 : 0x9a4fd0, 3);
        this.remove(p);
        continue;
      }
      if (p.homing && !p.fromPlayer) {
        const b = p.body as Phaser.Physics.Arcade.Body;
        const a = Math.atan2(player.y - p.y, player.x - p.x);
        const cur = Math.atan2(b.velocity.y, b.velocity.x);
        const spd = Math.hypot(b.velocity.x, b.velocity.y);
        let diff = a - cur;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        const nc = cur + Math.max(-0.028, Math.min(0.028, diff));
        b.setVelocity(Math.cos(nc) * spd, Math.sin(nc) * spd);
      }
      if (!p.fromPlayer) {
        const d = Math.hypot(player.x - p.x, player.y - p.y);
        if (d < 12) {
          player.hurt(p.dmg, p.x);
          this.remove(p);
        }
      }
    }
    for (const a of this.arrows) {
      for (const e of this.scene.enemies.enemies) {
        if (!a.active) continue;
        const d = Math.hypot(e.x - a.x, e.y - a.y);
        if (d < 11) {
          this.scene.enemies.damage(e, a.dmg, a.x);
          this.remove(a);
          break;
        }
      }
      if (this.scene.boss.alive && a.active) {
        const bs = this.scene.boss.sprite;
        if (bs && Math.hypot(bs.x - a.x, bs.y - a.y) < 30) {
          this.scene.boss.damage(a.dmg, a.x);
          this.remove(a);
        }
      }
    }
  }

  isEnemyProjHit(x: number, y: number): Proj | null {
    for (const s of this.spores) if (Math.hypot(s.x - x, s.y - y) < 12) return s;
    return null;
  }

  remove(p: Proj) {
    p.destroy();
    let i = this.arrows.indexOf(p);
    if (i >= 0) this.arrows.splice(i, 1);
    i = this.spores.indexOf(p);
    if (i >= 0) this.spores.splice(i, 1);
  }

  clear() {
    [...this.arrows, ...this.spores].forEach((p) => p.destroy());
    this.arrows = [];
    this.spores = [];
  }
}
