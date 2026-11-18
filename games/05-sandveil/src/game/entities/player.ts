import Phaser from 'phaser';
import { TILE } from '../config';
import { inventory } from '../inventory';
import type { GameScene } from '../scenes/GameScene';

export class Player extends Phaser.Physics.Arcade.Sprite {
  hp = 100;
  maxHpBase = 100;
  iTimer = 0;
  swingTimer = 0;
  attackCd = 0;
  dropTimer = 0;
  facing = 1;
  scene: GameScene;

  constructor(scene: GameScene, x: number, y: number) {
    super(scene, x, y, 'player');
    this.scene = scene;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    const b = this.body as Phaser.Physics.Arcade.Body;
    b.setSize(10, 22).setOffset(3, 2);
    this.setDepth(20);
    this.setMaxHp(100);
  }

  get maxHp(): number {
    return this.maxHpBase + (inventory.hasAcc('depth_amulet') ? 30 : 0);
  }
  setMaxHp(v: number) {
    this.maxHpBase = v;
  }
  get dmgMult(): number {
    return inventory.hasAcc('star_core') ? 1.15 : 1;
  }
  get meleeMult(): number {
    return this.dmgMult * (inventory.hasAcc('titan_glove') ? 1.25 : 1);
  }
  get defense(): number {
    return inventory.defense;
  }

  update(dt: number, keys: Record<string, Phaser.Input.Keyboard.Key>) {
    const b = this.body as Phaser.Physics.Arcade.Body;
    const speed = 150 * (inventory.hasAcc('swift_boots') ? 1.25 : 1);
    const onGround = b.blocked.down || b.touching.down;
    let move = 0;
    if (keys.A.isDown) move -= 1;
    if (keys.D.isDown) move += 1;
    b.setVelocityX(move * speed);
    if (move !== 0) {
      this.facing = move;
      this.setFlipX(move < 0);
    }
    if (keys.SPACE.isDown && onGround) {
      b.setVelocityY(inventory.hasAcc('swift_boots') ? -390 : -330);
    }
    if (keys.S.isDown && keys.SPACE.isDown && onGround) this.dropTimer = 220;
    this.dropTimer = Math.max(0, this.dropTimer - dt);
    this.iTimer = Math.max(0, this.iTimer - dt);
    this.swingTimer = Math.max(0, this.swingTimer - dt);
    this.attackCd = Math.max(0, this.attackCd - dt);
    this.visible = this.iTimer > 0 ? Math.floor(this.iTimer / 80) % 2 === 0 : true;
    const bob = move !== 0 && onGround ? Math.sin(this.scene.time.now * 0.018) * 0.08 : 0;
    this.setScale(1, 1 + bob);
  }

  hurt(dmg: number, srcX: number) {
    if (this.iTimer > 0) return;
    const real = Math.max(1, Math.round(dmg - this.defense * 0.6));
    this.hp -= real;
    this.iTimer = 850;
    const b = this.body as Phaser.Physics.Arcade.Body;
    b.setVelocityX((this.x < srcX ? -1 : 1) * 160);
    b.setVelocityY(-140);
    this.scene.damageNumber(this.x, this.y - 18, real, '#ff6a5a');
    this.scene.cameras.main.shake(90, 0.004);
    this.scene.spawnBlood(this.x, this.y);
    this.scene.hudSync();
    if (this.hp <= 0) this.scene.onPlayerDeath();
  }

  heal(n: number) {
    this.hp = Math.min(this.maxHp, this.hp + n);
    this.scene.damageNumber(this.x, this.y - 18, n, '#7ad07a');
    this.scene.hudSync();
  }
}
