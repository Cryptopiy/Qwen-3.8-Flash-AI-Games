import Phaser from 'phaser';
import { TILE } from '../config';
import type { GameScene } from '../scenes/GameScene';

export class Npc {
  spr: Phaser.Physics.Arcade.Sprite;
  kind: 'hermit' | 'merchant';
  homeX: number;
  homeY: number;
  private t = 0;
  private dir = 1;

  constructor(scene: GameScene, kind: 'hermit' | 'merchant', x: number, y: number) {
    this.kind = kind;
    this.homeX = x;
    this.homeY = y;
    this.spr = scene.physics.add.sprite(x, y, kind === 'hermit' ? 'npc_hermit' : 'npc_merchant');
    this.spr.setDepth(21);
    const b = this.spr.body as Phaser.Physics.Arcade.Body;
    b.setSize(10, 20).setOffset(3, 4);
    scene.physics.add.collider(this.spr, scene.terrain);
    this.bubble = scene.add.text(x, y - 26, '?', {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: '#ffe14a',
      backgroundColor: '#0008',
      padding: { x: 4, y: 2 },
    }).setDepth(22).setOrigin(0.5);
  }
  bubble: Phaser.GameObjects.Text;

  setHome(x: number, y: number) {
    this.homeX = x;
    this.homeY = y;
  }

  update(dt: number, player: Phaser.Physics.Arcade.Sprite) {
    const b = this.spr.body as Phaser.Physics.Arcade.Body;
    this.t -= dt;
    const near = Math.abs(player.x - this.spr.x) < TILE * 2.2 && Math.abs(player.y - this.spr.y) < TILE * 2.5;
    if (this.t <= 0) {
      this.t = 1600 + Math.random() * 2200;
      if (Math.random() < 0.55) b.setVelocityX(0);
      else {
        this.dir = Math.random() < 0.5 ? -1 : 1;
        b.setVelocityX(this.dir * 22);
      }
    }
    if (Math.abs(this.spr.x - this.homeX) > TILE * 4) {
      this.dir = this.homeX > this.spr.x ? 1 : -1;
      b.setVelocityX(this.dir * 40);
    }
    if (b.blocked.left) this.dir = 1;
    if (b.blocked.right) this.dir = -1;
    this.spr.setFlipX(this.dir < 0);
    this.bubble.setPosition(this.spr.x, this.spr.y - 30 + Math.sin(Date.now() * 0.004) * 2);
    this.bubble.setText(near ? '!' : '?');
  }

  destroy() {
    this.spr.destroy();
    this.bubble.destroy();
  }
}
