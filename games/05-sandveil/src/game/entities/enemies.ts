import Phaser from 'phaser';
import { TILE, UNDERGROUND_Y, CAVERN_Y, WORLD_W, WORLD_H, biomeAt } from '../config';
import { mulberry32, hash2 } from '../core/rng';
import type { GameScene } from '../scenes/GameScene';
import type { Player } from './player';
import type { ItemId } from '../data/items';

export interface EnemyDef {
  key: string;
  tex: string;
  hp: number;
  dmg: number;
  speed: number;
  flying: boolean;
  behavior: 'hop' | 'chase' | 'dash' | 'fly' | 'ranged' | 'burrow';
  zone: 'surface' | 'under' | 'cavern' | 'any';
  night?: boolean;
  biomes?: number[];
  coins: [number, number];
  dropItem?: [ItemId, number, number];
  r: number;
}

export const ENEMY_DEFS: Record<string, EnemyDef> = {
  gloop: { key: 'gloop', tex: 'e_gloop', hp: 30, dmg: 8, speed: 90, flying: false, behavior: 'hop', zone: 'surface', biomes: [0, 2, 3], coins: [1, 4], dropItem: ['coal', 1, 0.2], r: 7 },
  scorchling: { key: 'scorchling', tex: 'e_scorchling', hp: 40, dmg: 14, speed: 40, flying: false, behavior: 'dash', zone: 'surface', biomes: [1], coins: [2, 7], dropItem: ['coal', 2, 0.35], r: 7 },
  moth: { key: 'moth', tex: 'e_moth', hp: 25, dmg: 9, speed: 60, flying: true, behavior: 'fly', zone: 'surface', biomes: [2], coins: [1, 5], dropItem: ['herb', 1, 0.4], r: 7 },
  caster: { key: 'caster', tex: 'e_caster', hp: 35, dmg: 8, speed: 26, flying: false, behavior: 'ranged', zone: 'surface', biomes: [3], coins: [3, 8], dropItem: ['herb', 2, 0.6], r: 7 },
  wisp: { key: 'wisp', tex: 'e_wisp', hp: 30, dmg: 13, speed: 105, flying: true, behavior: 'fly', zone: 'surface', night: true, coins: [4, 12], dropItem: ['draught', 1, 0.15], r: 6 },
  shambler: { key: 'shambler', tex: 'e_shambler', hp: 55, dmg: 12, speed: 48, flying: false, behavior: 'chase', zone: 'under', coins: [5, 14], dropItem: ['salve', 1, 0.3], r: 7 },
  crawler: { key: 'crawler', tex: 'e_crawler', hp: 70, dmg: 15, speed: 34, flying: true, behavior: 'burrow', zone: 'cavern', coins: [8, 20], dropItem: ['shadow_ore', 2, 0.45], r: 7 },
  sprout: { key: 'sprout', tex: 'e_sprout', hp: 25, dmg: 9, speed: 70, flying: false, behavior: 'chase', zone: 'any', coins: [0, 2], r: 6 },
};

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  def: EnemyDef;
  hp: number;
  maxHp: number;
  stateT = 0;
  state = 'idle';
  dir = 1;
  seed = Math.floor(Math.random() * 10000);
  flashT = 0;
  constructor(scene: GameScene, x: number, y: number, def: EnemyDef) {
    super(scene, x, y, def.tex);
    this.def = def;
    this.hp = def.hp;
    this.maxHp = def.hp;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    const b = this.body as Phaser.Physics.Arcade.Body;
    b.setSize(12, 12);
    this.setDepth(18);
    b.setAllowGravity(!def.flying);
    b.setBounce(0.1, 0);
  }
}

export class EnemyManager {
  enemies: Enemy[] = [];
  private scene: GameScene;
  private rnd = mulberry32(9871);
  spawnTimer = 2000;

  constructor(scene: GameScene) {
    this.scene = scene;
  }

  get count() {
    return this.enemies.length;
  }

  spawnDef(key: string, x: number, y: number): Enemy {
    const def = ENEMY_DEFS[key];
    const e = new Enemy(this.scene, x, y, def);
    if (def.behavior !== 'burrow' && !def.flying) this.scene.physics.add.collider(e, this.scene.terrain);
    this.enemies.push(e);
    return e;
  }

  private trySpawn(player: Player) {
    const s = this.scene;
    const world = s.world;
    const ptx = Math.floor(player.x / TILE);
    const pty = Math.floor(player.y / TILE);
    const pzone = pty < UNDERGROUND_Y ? 'surface' : pty < CAVERN_Y ? 'under' : 'cavern';
    const night = !s.daynight.isDay;
    const cap = pzone === 'surface' ? (night ? 11 : 5) : pzone === 'under' ? 8 : 7;
    if (this.enemies.length >= cap) return;
    const left = this.rnd() < 0.5;
    const tx = ptx + (left ? -(18 + Math.floor(this.rnd() * 14)) : 18 + Math.floor(this.rnd() * 14));
    if (tx < 2 || tx >= WORLD_W - 2) return;
    let ty: number;
    if (pzone === 'surface') {
      ty = world.heightAt(tx) - 2;
    } else {
      const y0 = pzone === 'under' ? UNDERGROUND_Y + 4 : CAVERN_Y + 4;
      const y1 = pzone === 'under' ? CAVERN_Y - 2 : WORLD_H - 8;
      ty = Math.max(pzone === 'under' ? UNDERGROUND_Y + 4 : CAVERN_Y + 2, Math.floor(y0 + this.rnd() * (y1 - y0)));
      ty = Math.min(y1, Math.floor(player.y / TILE) + (this.rnd() * 20 - 10));
      if (ty < y0 || ty > y1) return;
    }
    if (!world.solid(tx, ty + 2) || world.solid(tx, ty) || world.solid(tx, ty + 1)) return;
    const biome = biomeAt(tx);
    const zoneKey = world.heightAt(tx) < UNDERGROUND_Y && pzone === 'surface' ? 'surface' : pzone;
    const pool = Object.values(ENEMY_DEFS).filter((d) => {
      if (d.key === 'sprout') return false;
      if (zoneKey === 'surface') return d.zone === 'surface' && (!d.biomes || d.biomes.includes(biome)) && (!d.night || night);
      if (zoneKey === 'under') return d.zone === 'under' || d.zone === 'any';
      return d.zone === 'cavern' || d.zone === 'under';
    });
    if (!pool.length) return;
    const def = pool[Math.floor(this.rnd() * pool.length)];
    const e = this.spawnDef(def.key, tx * TILE + 8, ty * TILE + 2);
    e.setAlpha(0);
    e.setDepth(18);
    this.scene.tweens.add({ targets: e, alpha: 1, duration: 400 });
  }

  update(dt: number, player: Player) {
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = this.scene.daynight.isDay ? 3200 : 1500;
      if (this.scene.boss.alive) this.spawnTimer = 4000;
      else this.trySpawn(player);
    }
    const pd = this.scene.daynight.dayFactor;
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      const b = e.body as Phaser.Physics.Arcade.Body;
      if (e.flashT > 0) {
        e.flashT -= dt;
        if (e.flashT % 100 < 50) e.setTintFill(0xffffff);
        else e.clearTint();
        if (e.flashT <= 0) e.clearTint();
      }
      const dx = player.x - e.x;
      const dy = player.y - e.y;
      const dist = Math.hypot(dx, dy);
      const tileDist = dist / TILE;
      if (tileDist > 46) {
        this.kill(e, false);
        continue;
      }
      e.stateT -= dt;
      switch (e.def.behavior) {
        case 'hop': {
          if (b.blocked.down && e.stateT <= 0 && dist < TILE * 14) {
            b.setVelocityY(-250);
            b.setVelocityX((dx > 0 ? 1 : -1) * (60 + hash2(e.seed, i, 3) * 50));
            e.stateT = 1100 + hash2(e.seed, i, 4) * 700;
          } else if (b.blocked.down) b.setVelocityX(b.velocity.x * 0.8);
          break;
        }
        case 'chase': {
          const v = e.def.speed * (pd < 0.5 && e.def.key === 'sprout' ? 1.15 : 1);
          b.setVelocityX(dx > 0 ? v : -v);
          e.setFlipX(dx < 0);
          if (b.blocked.down && (b.blocked.left || b.blocked.right)) b.setVelocityY(-300);
          break;
        }
        case 'dash': {
          if (e.state === 'idle') {
            b.setVelocityX(e.dir * e.def.speed);
            e.setFlipX(e.dir < 0);
            if (b.blocked.left) e.dir = 1;
            if (b.blocked.right) e.dir = -1;
            if (tileDist < 7 && Math.abs(dy) < TILE * 2 && e.stateT <= 0) {
              e.state = 'windup';
              e.stateT = 420;
              b.setVelocityX(0);
            }
          } else if (e.state === 'windup') {
            b.setVelocityX(0);
            e.setTint(0xffdd88);
            if (e.stateT <= 0) {
              e.state = 'dash';
              e.stateT = 420;
              e.dir = dx > 0 ? 1 : -1;
              e.clearTint();
            }
          } else if (e.state === 'dash') {
            b.setVelocityX(e.dir * 430);
            if (e.stateT <= 0 || b.blocked.left || b.blocked.right) {
              e.state = 'idle';
              e.stateT = 1700;
            }
          }
          break;
        }
        case 'fly': {
          const spd = e.def.speed;
          const wob = Math.sin((this.scene.time.now + e.seed * 300) * 0.004) * 30;
          const targetY = player.y - 50 + wob;
          b.setVelocityX(dx > 0 ? spd : -spd);
          b.setVelocityY((targetY - e.y) * 1.4 + (e.def.key === 'wisp' ? Math.sin(this.scene.time.now * 0.008 + e.seed) * 60 : 0));
          e.setFlipX(dx < 0);
          break;
        }
        case 'ranged': {
          if (tileDist < 5) b.setVelocityX(dx > 0 ? -e.def.speed : e.def.speed);
          else if (tileDist > 9) b.setVelocityX(dx > 0 ? e.def.speed : -e.def.speed);
          else b.setVelocityX(0);
          e.setFlipX(dx < 0);
          if (b.blocked.down && b.blocked.left) b.setVelocityY(-260);
          if (b.blocked.down && b.blocked.right) b.setVelocityY(-260);
          if (e.stateT <= 0 && tileDist < 12 && tileDist > 1.5 && this.scene.lineOfSight(e.x, e.y, player.x, player.y)) {
            e.stateT = 2100;
            const a = Math.atan2(dy, dx);
            this.scene.projs.fireSeed(e.x, e.y, a, 175);
          }
          break;
        }
        case 'burrow': {
          const a = Math.atan2(dy, dx);
          b.setVelocity(Math.cos(a) * e.def.speed, Math.sin(a) * e.def.speed);
          if (hash2(e.seed, this.scene.time.now | 7, 5) < 0.06) this.scene.spawnDust(e.x, e.y, 0x8a6a42, 1);
          break;
        }
      }
      if (!e.def.flying && b.velocity.x === 0 && b.blocked.down && e.def.behavior !== 'dash' && dist < TILE * 10) {
        b.setVelocityY(-280);
      }
      if (dist < 13) {
        player.hurt(e.def.dmg, e.x);
      }
    }
  }

  damage(e: Enemy, dmg: number, srcX: number) {
    e.hp -= dmg;
    e.flashT = 160;
    const b = e.body as Phaser.Physics.Arcade.Body;
    b.setVelocityX((e.x < srcX ? -1 : 1) * 130);
    if (!e.def.flying) b.setVelocityY(-90);
    this.scene.damageNumber(e.x, e.y - 12, dmg, '#ffd76a');
    this.scene.spawnBlood(e.x, e.y);
    if (e.hp <= 0) this.kill(e, true);
  }

  kill(e: Enemy, loot: boolean) {
    const idx = this.enemies.indexOf(e);
    if (idx >= 0) this.enemies.splice(idx, 1);
    if (loot) {
      this.scene.spawnBlood(e.x, e.y, 10);
      const d = e.def;
      const n = Math.round(d.coins[0] + Math.random() * (d.coins[1] - d.coins[0]));
      if (n > 0) this.scene.drops.spawnItem(e.x, e.y, 'coins', n);
      if (d.dropItem && Math.random() < d.dropItem[2]) this.scene.drops.spawnItem(e.x, e.y, d.dropItem[0], d.dropItem[1]);
    }
    e.destroy();
  }

  clear() {
    for (const e of this.enemies) e.destroy();
    this.enemies = [];
  }
}
