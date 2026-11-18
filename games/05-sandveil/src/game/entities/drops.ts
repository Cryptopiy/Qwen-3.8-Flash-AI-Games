import Phaser from 'phaser';
import { TILE } from '../config';
import { inventory } from '../inventory';
import type { ItemId } from '../data/items';
import type { GameScene } from '../scenes/GameScene';
import type { Player } from './player';

interface Drop {
  spr: Phaser.Physics.Arcade.Sprite;
  item: ItemId;
  count: number;
  t: number;
}

export class DropManager {
  drops: Drop[] = [];
  scene: GameScene;
  constructor(scene: GameScene) {
    this.scene = scene;
  }

  spawnItem(x: number, y: number, item: ItemId, count: number) {
    for (const d of this.drops) {
      if (d.item === item && Math.hypot(d.spr.x - x, d.spr.y - y) < TILE * 2 && d.count + count <= 99) {
        d.count += count;
        d.spr.setTexture('ic_' + item);
        return;
      }
    }
    if (this.drops.length > 80) {
      const old = this.drops.shift();
      old?.spr.destroy();
    }
    const spr = this.scene.physics.add.sprite(x, y, 'ic_' + item);
    spr.setDisplaySize(14, 14);
    spr.setDepth(17);
    const b = spr.body as Phaser.Physics.Arcade.Body;
    b.setSize(10, 10).setOffset(11, 11);
    b.setBounce(0.35);
    b.setCollideWorldBounds(true);
    this.scene.physics.add.collider(spr, this.scene.terrain);
    b.setVelocity((Math.random() - 0.5) * 90, -120);
    this.drops.push({ spr, item, count, t: 0 });
  }

  update(dt: number, player: Player) {
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      d.t += dt;
      const dx = player.x - d.spr.x;
      const dy = player.y - d.spr.y;
      const dist = Math.hypot(dx, dy);
      if (d.t > 500 && dist < 64) {
        const b = d.spr.body as Phaser.Physics.Arcade.Body;
        const a = Math.atan2(dy, dx);
        const pull = Math.min(320, 90 + (64 - dist) * 6);
        b.setVelocity(Math.cos(a) * pull, Math.sin(a) * pull);
      }
      if (d.t > 600 && dist < 16) {
        const left = inventory.addItem(d.item, d.count);
        if (left === 0) {
          this.scene.spawnDust(player.x, player.y - 8, 0xffe14a, 4);
          d.spr.destroy();
          this.drops.splice(i, 1);
        } else {
          d.count = left;
        }
      }
      if (d.t > 90000) {
        d.spr.destroy();
        this.drops.splice(i, 1);
      }
    }
  }

  clear() {
    this.drops.forEach((d) => d.spr.destroy());
    this.drops = [];
  }
}
