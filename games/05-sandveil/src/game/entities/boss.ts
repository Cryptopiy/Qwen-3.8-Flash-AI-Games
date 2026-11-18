import Phaser from 'phaser';
import { TILE } from '../config';
import { gs, toast, showHint } from '../state';
import type { GameScene } from '../scenes/GameScene';
import type { Player } from './player';

const BOSS_MAX = 900;

export class Boss {
  sprite: Phaser.Physics.Arcade.Sprite | null = null;
  hp = BOSS_MAX;
  alive = false;
  phase = 1;
  scene: GameScene;
  private sporeT = 2500;
  private slamT = 6500;
  private vineT = 11000;
  private burstT = 5000;
  private slamState: 'up' | 'down' | '' = '';
  private slamT2 = 0;
  private flashT = 0;

  constructor(scene: GameScene) {
    this.scene = scene;
  }

  summon(x: number, y: number) {
    if (this.alive) return;
    this.alive = true;
    this.phase = 1;
    this.hp = BOSS_MAX;
    const s = this.scene.physics.add.sprite(x, y - 140, 'boss');
    s.setDepth(25);
    s.setScale(0.2);
    (s.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
    (s.body as Phaser.Physics.Arcade.Body).setSize(40, 40);
    this.scene.tweens.add({ targets: s, scale: 1, duration: 700, ease: 'Back.easeOut' });
    this.sprite = s;
    gs.boss = { name: 'Thornmaw, Heart of the Blight', pct: 1 };
    this.scene.cameras.main.shake(500, 0.006);
    this.scene.cameras.main.flash(600, 60, 20, 80);
    toast('Thornmaw awakens!');
    showHint('Defeat Thornmaw — stay mobile and punish its slams!', 6000);
  }

  update(dt: number, player: Player) {
    if (!this.alive || !this.sprite) return;
    const s = this.sprite;
    const b = s.body as Phaser.Physics.Arcade.Body;
    const dx = player.x - s.x;
    const dy = player.y - 120 - s.y;
    const mult = this.phase === 2 ? 0.6 : 1;
    const dist = Math.hypot(dx, dy);
    if (this.slamState === '') {
      const spd = Math.min(70 * (this.phase === 2 ? 1.5 : 1), dist);
      b.setVelocity((dx / (dist || 1)) * spd, (dy / (dist || 1)) * spd + Math.sin(this.scene.time.now * 0.003) * 14);
    }
    if (dist < 24) player.hurt(20, s.x);
    if (this.flashT > 0) {
      this.flashT -= dt;
      s.setTintFill(0xff88ff);
      if (this.flashT <= 0) s.clearTint();
    }
    this.sporeT -= dt;
    this.slamT -= dt;
    this.vineT -= dt;
    this.burstT -= dt;

    if (this.sporeT <= 0) {
      this.sporeT = (this.phase === 2 ? 1600 : 2600) + Math.random() * 400;
      const base = Math.atan2(player.y - s.y, player.x - s.x);
      for (let i = 0; i < 7; i++) {
        const a = base + (i - 3) * 0.22;
        this.scene.projs.fireSpore(s.x, s.y, a, 185, 12, this.phase === 2);
      }
      this.scene.spawnDust(s.x, s.y, 0xb46bff, 8);
    }
    if (this.slamT <= 0 && this.slamState === '') {
      this.slamT = 8000;
      this.slamState = 'up';
      this.slamT2 = 550;
      this.scene.tweens.add({ targets: s, scaleY: 1.15, scaleX: 0.9, duration: 250, yoyo: true });
    }
    if (this.slamState === 'up') {
      b.setVelocity(0, -240);
      this.slamT2 -= dt;
      if (this.slamT2 <= 0) {
        this.slamState = 'down';
        b.setVelocity((dx > 0 ? 1 : -1) * 120, 760);
      }
    } else if (this.slamState === 'down') {
      this.slamT2 -= dt;
      const groundBelow = this.scene.groundYAt(s.x) - 24;
      if (s.y >= groundBelow || this.slamT2 < -800) {
        this.slamState = '';
        this.scene.cameras.main.shake(220, 0.009);
        this.scene.spawnDust(s.x, s.y + 20, 0x8a5f38, 16);
        for (let i = 0; i < 8; i++) this.scene.projs.fireSpore(s.x + (i - 4) * 14, s.y + 16, -Math.PI / 2 + (i - 4) * 0.18, 120, 10);
        const d = Math.hypot(player.x - s.x, player.y - (s.y + 10));
        if (d < 110 && (player.body as Phaser.Physics.Arcade.Body).blocked.down) player.hurt(18, s.x);
      }
    }
    if (this.vineT <= 0) {
      this.vineT = this.phase === 2 ? 7000 : 12000;
      for (let i = 0; i < 3; i++) {
        const e = this.scene.enemies.spawnDef('sprout', s.x + (i - 1) * 30, s.y + 26);
        e.hp = e.maxHp = this.phase === 2 ? 35 : 25;
      }
      toast('Thornmaw spawns gloom sprouts!');
    }
    if (this.phase === 2 && this.burstT <= 0) {
      this.burstT = 5200;
      for (let i = 0; i < 12; i++) this.scene.projs.fireSpore(s.x, s.y, (i / 12) * Math.PI * 2, 150, 12);
      this.scene.spawnDust(s.x, s.y, 0xe0b8ff, 14);
    }
  }

  damage(d: number, srcX: number) {
    if (!this.alive || !this.sprite) return;
    this.hp -= d;
    this.flashT = 90;
    this.scene.damageNumber(this.sprite.x, this.sprite.y - 24, d, '#ffd76a');
    gs.boss = { name: 'Thornmaw, Heart of the Blight', pct: Math.max(0, this.hp / BOSS_MAX) };
    if (this.phase === 1 && this.hp <= BOSS_MAX / 2) {
      this.phase = 2;
      this.sprite.setTint(0xff5aa0);
      this.scene.tweens.add({ targets: this.sprite, tint: 0xffffff, duration: 400, yoyo: true, repeat: 3 });
      toast('Thornmaw enters a frenzy!');
      this.scene.cameras.main.shake(400, 0.006);
    }
    if (this.hp <= 0) this.die(srcX);
  }

  die(_srcX: number) {
    if (!this.sprite) return;
    this.alive = false;
    const s = this.sprite;
    gs.boss = null;
    this.scene.spawnBlood(s.x, s.y, 30);
    this.scene.spawnDust(s.x, s.y, 0xb46bff, 30);
    this.scene.cameras.main.shake(600, 0.01);
    for (let i = 0; i < 5; i++) this.scene.drops.spawnItem(s.x + (Math.random() - 0.5) * 60, s.y, 'stellarite_bar', 1);
    this.scene.drops.spawnItem(s.x, s.y - 10, 'star_core', 1);
    this.scene.drops.spawnItem(s.x, s.y + 10, 'coins', 150);
    this.scene.flags.bossDefeated = true;
    toast('Thornmaw has fallen! The star-forged age begins.');
    showHint('Craft Stellarite Bars, the Starforged Greatsword and Pickaxe at an Anvil!', 6000);
    const tw = this.scene.tweens.add({
      targets: s,
      alpha: 0,
      scale: 1.4,
      duration: 900,
      onComplete: () => s.destroy(),
    });
    void tw;
  }

  clear() {
    this.sprite?.destroy();
    this.sprite = null;
    this.alive = false;
  }
}
