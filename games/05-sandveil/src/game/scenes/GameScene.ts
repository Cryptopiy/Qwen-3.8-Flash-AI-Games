import Phaser from 'phaser';
import { TILE, WORLD_W, WORLD_H, GAME_W, GAME_H, VIEW_W, VIEW_H, UNDERGROUND_Y, CAVERN_Y, REACH, BIOME_NAMES, biomeAt } from '../config';
import { B, BLOCKS } from '../data/blocks';
import { ITEMS, type ItemId, type ItemDef } from '../data/items';
import { World } from '../world/world';
import { generateWorld, type Loot } from '../world/gen';
import { inventory } from '../inventory';
import { saveGame, loadGame, type SaveData, type SaveStats } from '../save';
import { gs, store, toast, showHint } from '../state';
import { Player } from '../entities/player';
import { EnemyManager, type Enemy } from '../entities/enemies';
import { ProjManager } from '../entities/projectiles';
import { DropManager } from '../entities/drops';
import { Boss } from '../entities/boss';
import { Npc } from '../entities/npc';
import { LightSystem } from '../systems/lighting';
import { DayNight } from '../systems/daynight';
import { findHousing } from '../systems/housing';
import { MERCHANT_STOCK } from '../data/shop';
import { gameRef } from '../bridge';

export class GameScene extends Phaser.Scene {
  world!: World;
  chests!: Map<number, Loot[]>;
  terrain!: Phaser.Tilemaps.TilemapLayer;
  player!: Player;
  enemies!: EnemyManager;
  projs!: ProjManager;
  drops!: DropManager;
  boss!: Boss;
  daynight!: DayNight;
  light!: LightSystem;
  hermit: Npc | null = null;
  merchant: Npc | null = null;
  flags = { bossDefeated: false, blessed: false, hasHome: false };
  keys: Record<string, Phaser.Input.Keyboard.Key> = {};
  private mineTarget = -1;
  private mineProg = 0;
  private crack!: Phaser.GameObjects.Image;
  private skyG!: Phaser.GameObjects.Graphics;
  private hill1!: Phaser.GameObjects.TileSprite;
  private hill2!: Phaser.GameObjects.TileSprite;
  private clouds!: Phaser.GameObjects.TileSprite;
  private stars!: Phaser.GameObjects.Container;
  private sun!: Phaser.GameObjects.Image;
  private moon!: Phaser.GameObjects.Image;
  private glows: Phaser.GameObjects.Image[] = [];
  private hudT = 0;
  private saveT = 0;
  private houseT = 3000;
  private stationT = 0;
  private nearStations = new Set<'hand' | 'workbench' | 'furnace' | 'anvil'>();
  private placeT = 0;
  private tipTimers: Record<string, number> = {};
  private hintShown = new Set<number>();
  private beforeUnload = () => this.doSave();
  private loadedTime = 0;

  constructor() {
    super('Game');
  }

  create(data: { seed: number; load: boolean }) {
    let save: SaveData | null = null;
    if (data.load) save = loadGame();
    const seed = save ? save.seed : data.seed;
    const gen = generateWorld(seed);
    this.world = gen.world;
    this.chests = gen.chests;
    if (save) {
      this.world.applyDiff(save.diff);
      this.world.openedChests = new Set(save.opened);
      inventory.load(save.inv);
      this.flags.bossDefeated = save.stats.bossDefeated;
      this.flags.blessed = save.stats.blessed;
      this.flags.hasHome = save.stats.hasHome;
      this.loadedTime = save.stats.time;
      save.stats.hints.forEach((h) => this.hintShown.add(h));
    } else {
      inventory.slots[0] = { item: 'copper_pick', count: 1 };
      inventory.slots[1] = { item: 'wooden_sword', count: 1 };
      inventory.slots[2] = { item: 'torch', count: 10 };
      inventory.slots[3] = { item: 'salve', count: 2 };
    }

    this.physics.world.setBounds(0, 0, GAME_W, GAME_H);
    this.physics.world.gravity.y = 830;

    const map = this.make.tilemap({ tileWidth: TILE, tileHeight: TILE, width: WORLD_W, height: WORLD_H });
    const ts = map.addTilesetImage('tiles', 'tiles', TILE, TILE)!;
    const layer = map.createBlankLayer('t', ts, 0, 0, WORLD_W, WORLD_H, TILE, TILE)!;
    this.terrain = layer;
    layer.setDepth(5);
    for (let y = 0; y < WORLD_H; y++)
      for (let x = 0; x < WORLD_W; x++) {
        const id = this.world.get(x, y);
        if (id === B.AIR) continue;
        const t = layer.putTileAt(id, x, y, false);
        if (t) this.applyCollision(t, id);
      }

    this.player = new Player(this, (this.world.spawnX + 0.5) * TILE, (this.world.spawnY - 1) * TILE);
    this.physics.add.collider(this.player, this.terrain, undefined, (pl, tile) => this.processTile(pl as Player, tile as Phaser.Tilemaps.Tile));
    if (save) {
      this.player.hp = Math.max(20, save.stats.hp);
      this.player.setMaxHp(save.stats.maxHpBase);
    }
    if (this.flags.blessed) this.player.setMaxHp(120);

    this.daynight = new DayNight(this.loadedTime || 0.12);
    this.enemies = new EnemyManager(this);
    this.projs = new ProjManager(this);
    this.drops = new DropManager(this);
    this.boss = new Boss(this);

    this.createBackground();
    this.light = new LightSystem(this);

    this.merchant = new Npc(this, 'merchant', (this.world.spawnX + 12.5) * TILE, (this.world.spawnY - 1) * TILE);
    this.hermit = new Npc(this, 'hermit', (this.world.spawnX - 10.5) * TILE, (this.world.spawnY - 1) * TILE);

    this.crack = this.add.image(0, 0, 'crack1').setOrigin(0).setDepth(30).setVisible(false);
    for (let i = 0; i < 14; i++) {
      const g = this.add.image(0, 0, 'glow').setDepth(40).setBlendMode(Phaser.BlendModes.ADD).setVisible(false);
      g.displayWidth = 130;
      g.displayHeight = 130;
      this.glows.push(g);
    }

    const cam = this.cameras.main;
    cam.setBounds(0, 0, GAME_W, GAME_H);
    cam.startFollow(this.player, true, 0.12, 0.12);
    cam.setDeadzone(140, 80);

    this.input.mouse?.disableContextMenu();
    const numCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48];
    numCodes.forEach((code, i) => {
      this.input.keyboard!.on('keydown', (ev: KeyboardEvent) => {
        if (ev.keyCode === code) {
          gs.selected = i;
          store.bump();
        }
      });
    });
    this.keys.A = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keys.D = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keys.W = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keys.S = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keys.SPACE = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.input.keyboard!.on('keydown', (ev: KeyboardEvent) => {
      if (ev.keyCode === Phaser.Input.Keyboard.KeyCodes.E) {
        if (gs.dialogue) return;
        gs.invOpen = !gs.invOpen;
        store.bump();
      }
      if (ev.keyCode === Phaser.Input.Keyboard.KeyCodes.ESC) {
        if (gs.invOpen) {
          gs.invOpen = false;
          store.bump();
          return;
        }
        if (gs.dialogue) {
          this.closeDialogue();
          return;
        }
        this.togglePause();
      }
    });
    this.input.on('wheel', (_p: Phaser.Input.Pointer, _go: unknown, _dx: number, dy: number) => {
      if (gs.dialogue) return;
      gs.selected = (gs.selected + (dy > 0 ? 1 : -1) + 10) % 10;
      store.bump();
    });
    this.input.on('pointerdown', (p: Phaser.Input.Pointer) => {
      if (gs.paused || gs.dead || gs.invOpen || gs.dialogue) return;
      if (p.rightButtonDown()) this.rightClick(p);
    });
    window.addEventListener('beforeunload', this.beforeUnload);
    this.events.once('shutdown', () => this.shutdown());

    gameRef.scene = this;
    this.hudSync();
    if (!save) {
      showHint('Welcome to Sandveil — dig, craft, build, survive!', 4000);
      this.time.delayedCall(4200, () => this.triggerHint(0));
    } else {
      toast('World loaded from save.');
    }
  }

  private triggerHint(i: number) {
    if (this.hintShown.has(i)) return;
    this.hintShown.add(i);
    showHint(['Move: A / D — Jump: SPACE', 'Left-click to mine with your pickaxe. Chop wood from trees!', 'Press E for inventory & crafting. 1–0 or wheel pick hotbar slots.', 'Right-click: place blocks, open chests, use potions, talk to NPCs.', 'Enclose a room with a work bench + torch — the Hermit may move in!'][i]);
  }

  private applyCollision(t: Phaser.Tilemaps.Tile, id: number) {
    const def = BLOCKS[id];
    if (def.platform) t.setCollision(false, true, false, false);
    else if (def.solid) t.setCollision(true, true, true, true);
    else t.resetCollision(false);
  }

  private processTile(pl: Player, tile: Phaser.Tilemaps.Tile): boolean {
    if (tile.index === B.PLATFORM) {
      if (pl.dropTimer > 0) return false;
      const b = pl.body as Phaser.Physics.Arcade.Body;
      if (b.velocity.y < 0) return false;
    }
    return true;
  }

  setTile(tx: number, ty: number, id: number) {
    this.world.set(tx, ty, id);
    if (id === B.AIR) {
      const t = this.terrain.removeTileAt(tx, ty);
      void t;
    } else {
      const t = this.terrain.putTileAt(id, tx, ty);
      if (t) this.applyCollision(t, id);
    }
  }

  private createBackground() {
    this.skyG = this.add.graphics().setScrollFactor(0).setDepth(-10);
    this.stars = this.add.container(0, 0).setScrollFactor(0).setDepth(-9);
    for (let i = 0; i < 70; i++) {
      const s = this.add.image(Math.random() * VIEW_W, Math.random() * VIEW_H * 0.7, 'stardot');
      s.setAlpha(0.4 + Math.random() * 0.6);
      this.stars.add(s);
    }
    this.hill1 = this.add.tileSprite(0, VIEW_H * 0.45, VIEW_W, 96, 'hill1').setOrigin(0, 0).setScrollFactor(0.22, 0.05).setDepth(-8);
    this.hill2 = this.add.tileSprite(0, VIEW_H * 0.55, VIEW_W, 96, 'hill2').setOrigin(0, 0).setScrollFactor(0.32, 0.06).setDepth(-7);
    this.clouds = this.add.tileSprite(0, 40, VIEW_W, 64, 'cloud').setOrigin(0, 0).setScrollFactor(0.15, 0.02).setDepth(-6);
    this.sun = this.add.image(0, 0, 'sun').setScrollFactor(0).setDepth(-6);
    this.moon = this.add.image(0, 0, 'moon').setScrollFactor(0).setDepth(-6);
  }

  private tip(key: string, text: string, ms = 2600) {
    const now = this.time.now;
    if (now - (this.tipTimers[key] || -99999) < ms) return;
    this.tipTimers[key] = now;
    toast(text);
  }

  groundYAt(x: number): number {
    const tx = Phaser.Math.Clamp(Math.floor(x / TILE), 0, WORLD_W - 1);
    const ty = this.world.firstSolidBelow(tx, Math.floor(30));
    return ty * TILE;
  }

  lineOfSight(x0: number, y0: number, x1: number, y1: number): boolean {
    const d = Math.hypot(x1 - x0, y1 - y0);
    const steps = Math.max(1, Math.floor(d / 8));
    for (let i = 1; i < steps; i++) {
      const x = x0 + ((x1 - x0) * i) / steps;
      const y = y0 + ((y1 - y0) * i) / steps;
      if (BLOCKS[this.world.get(Math.floor(x / TILE), Math.floor(y / TILE))]?.opaque) return false;
    }
    return true;
  }

  damageNumber(x: number, y: number, n: number, color: string) {
    const t = this.add.text(x, y, `${n}`, { fontFamily: 'monospace', fontSize: '13px', color, fontStyle: 'bold' }).setDepth(60).setOrigin(0.5);
    this.tweens.add({ targets: t, y: y - 26, alpha: 0, duration: 800, onComplete: () => t.destroy() });
  }

  private burst!: Phaser.GameObjects.Particles.ParticleEmitter;
  spawnDust(x: number, y: number, color: number, n = 6) {
    if (!this.burst) {
      this.burst = this.add.particles(0, 0, 'spark', { speed: { min: 40, max: 140 }, lifespan: { min: 200, max: 420 }, scale: { start: 1, end: 0 }, gravityY: 500, emitting: false }).setDepth(46);
    }
    this.burst.setParticleTint(color);
    for (let i = 0; i < n; i++) this.burst.emitParticleAt(x, y, 1);
  }
  spawnBlood(x: number, y: number, n = 6) {
    this.spawnDust(x, y, 0xd94a4a, n);
  }

  hudSync() {
    gs.hp = Math.max(0, Math.round(this.player.hp));
    gs.maxHp = this.player.maxHp;
    gs.defense = this.player.defense;
    gs.coins = inventory.countOf('coins');
    gs.timePct = this.daynight.t;
    gs.isDay = this.daynight.isDay;
    gs.clock = this.daynight.clockLabel;
    const ty = Math.floor(this.player.y / TILE);
    gs.depth = ty < UNDERGROUND_Y ? 'Surface' : ty < CAVERN_Y ? 'Underground' : 'Deep Caverns';
    gs.biome = BIOME_NAMES[biomeAt(Math.floor(this.player.x / TILE))];
    store.bump();
  }

  private scanStations() {
    this.nearStations = new Set(['hand']);
    const ptx = Math.floor(this.player.x / TILE);
    const pty = Math.floor(this.player.y / TILE);
    for (let x = ptx - 4; x <= ptx + 4; x++)
      for (let y = pty - 4; y <= pty + 4; y++) {
        const st = BLOCKS[this.world.get(x, y)]?.station;
        if (st) this.nearStations.add(st);
      }
    gs.near = [...this.nearStations];
  }

  update(time: number, dtRaw: number) {
    const dt = Math.min(50, dtRaw);
    if (gs.paused) return;
    this.daynight.update(dt);

    if (!gs.dead) this.player.update(dt, this.keys);

    const pointer = this.input.activePointer;
    const wx = pointer.worldX;
    const wy = pointer.worldY;
    const tx = Math.floor(wx / TILE);
    const ty = Math.floor(wy / TILE);

    if (!gs.dead && !gs.invOpen && !gs.dialogue) {
      if (pointer.leftButtonDown()) {
        const sel = inventory.slots[gs.selected];
        const sdef = sel ? ITEMS[sel.item] : null;
        if (sdef && (sdef.use === 'sword' || sdef.use === 'bow')) this.tryAttack(sdef.use, sdef, wx, wy);
        else this.tryMine(dt, tx, ty, sdef);
      } else {
        this.mineTarget = -1;
        this.crack.setVisible(false);
      }
      if (pointer.rightButtonDown() && !pointer.leftButtonDown()) {
        this.placeT -= dt;
        if (this.placeT <= 0) {
          const sel = inventory.slots[gs.selected];
          const sdef = sel ? ITEMS[sel.item] : null;
          if (sdef?.block !== undefined && this.world.get(tx, ty) === B.AIR) {
            if (this.tryPlace(tx, ty, sdef)) this.placeT = 130;
          }
        }
      }
    }

    this.enemies.update(dt, this.player);
    this.projs.update(dt, this.player);
    this.drops.update(dt, this.player);
    this.boss.update(dt, this.player);
    this.hermit?.update(dt, this.player);
    this.merchant?.update(dt, this.player);

    gs.npcNear = null;
    for (const n of [this.hermit, this.merchant]) {
      if (n && Math.hypot(n.spr.x - this.player.x, n.spr.y - this.player.y) < TILE * 2.4) gs.npcNear = n.kind;
    }

    this.light.update(this.world, this.cameras.main, this.daynight.dayFactor, Math.floor(this.player.x / TILE), Math.floor(this.player.y / TILE));
    this.drawSky();
    this.updateGlows();

    this.hudT -= dt;
    if (this.hudT <= 0) {
      this.hudT = 180;
      this.scanStations();
      this.hudSync();
    }
    this.houseT -= dt;
    if (this.houseT <= 0) {
      this.houseT = 2200;
      if (!this.flags.hasHome && Math.floor(this.player.y / TILE) < UNDERGROUND_Y - 4) {
        const ok = findHousing(this.world, Math.floor(this.player.x / TILE), Math.floor(this.player.y / TILE));
        if (ok) {
          this.flags.hasHome = true;
          gs.hasHousing = true;
          this.hermit?.setHome(this.player.x, this.player.y);
          toast('Nice shelter! The Hermit wants to move in — talk to him.');
          this.triggerHint(4);
        }
      }
    }
    this.saveT += dt;
    if (this.saveT > 15000) {
      this.saveT = 0;
      this.doSave();
    }
  }

  private drawSky() {
    const df = this.daynight.dayFactor;
    const top = Phaser.Display.Color.Interpolate.ColorWithColor(new Phaser.Display.Color(10, 12, 30), new Phaser.Display.Color(110, 175, 235), 100, Math.round(df * 100));
    const bot = Phaser.Display.Color.Interpolate.ColorWithColor(new Phaser.Display.Color(16, 14, 34), new Phaser.Display.Color(175, 220, 245), 100, Math.round(df * 100));
    const underground = Phaser.Math.Clamp((this.player.y / TILE - UNDERGROUND_Y) / 20, 0, 1);
    const g = this.skyG;
    g.clear();
    if (underground < 0.98) {
      const a = 1 - underground;
      g.fillStyle(Phaser.Display.Color.GetColor(top.r, top.g, top.b), a);
      g.fillRect(0, 0, VIEW_W, VIEW_H / 2);
      g.fillStyle(Phaser.Display.Color.GetColor(bot.r, bot.g, bot.b), a);
      g.fillRect(0, VIEW_H / 2, VIEW_W, VIEW_H / 2);
    } else {
      g.fillStyle(0x0a0a10, 1);
      g.fillRect(0, 0, VIEW_W, VIEW_H);
    }
    const surf = this.player.y / TILE < UNDERGROUND_Y - 6 ? 1 : Phaser.Math.Clamp(1 - (this.player.y / TILE - (UNDERGROUND_Y - 6)) / 24, 0, 1);
    const tint = [0xffffff, 0xe8c99a, 0xbfe0f2, 0xa060d0][biomeAt(Math.floor(this.player.x / TILE))];
    this.hill1.setAlpha(0.75 * surf);
    this.hill2.setAlpha(0.9 * surf);
    this.hill1.setTint(tint);
    this.hill2.setTint(tint);
    this.clouds.setAlpha(0.85 * df * surf);
    this.stars.setAlpha(1 - df);
    const t = this.daynight.t;
    const arc = (u: number) => ({ x: u * VIEW_W, y: VIEW_H * 0.42 - Math.sin(u * Math.PI) * VIEW_H * 0.34 });
    if (t < 0.5) {
      const p = arc(t / 0.5);
      this.sun.setVisible(true).setPosition(p.x, p.y).setAlpha(surf);
      this.moon.setVisible(false);
    } else {
      const p = arc((t - 0.5) / 0.5);
      this.moon.setVisible(true).setPosition(p.x, p.y).setAlpha(surf);
      this.sun.setVisible(false);
    }
  }

  private updateGlows() {
    const ptx = Math.floor(this.player.x / TILE);
    const pty = Math.floor(this.player.y / TILE);
    const srcs: [number, number][] = [[this.player.x, this.player.y]];
    if (this.boss.alive && this.boss.sprite) srcs.push([this.boss.sprite.x, this.boss.sprite.y]);
    for (let y = pty - 12; y <= pty + 12 && srcs.length < 14; y++)
      for (let x = ptx - 16; x <= ptx + 16 && srcs.length < 14; x++) {
        const id = this.world.get(x, y);
        if (id === B.TORCH || id === B.FURNACE) srcs.push([x * TILE + 8, y * TILE + 8]);
      }
    for (let i = 0; i < this.glows.length; i++) {
      const g = this.glows[i];
      if (i < srcs.length) {
        g.setVisible(true).setPosition(srcs[i][0], srcs[i][1]);
        const flick = 126 + Math.sin(this.time.now * 0.011 + i * 3.7) * 8;
        g.setDisplaySize(flick, flick);
      } else g.setVisible(false);
    }
  }

  private tryMine(dt: number, tx: number, ty: number, sdef: ItemDef | null) {
    if (!this.world.inBounds(tx, ty)) return;
    const id = this.world.get(tx, ty);
    if (id === B.AIR) {
      this.crack.setVisible(false);
      return;
    }
    const def = BLOCKS[id];
    const idx = ty * WORLD_W + tx;
    if (this.mineTarget !== idx) {
      this.mineTarget = idx;
      this.mineProg = 0;
    }
    const d = Math.hypot(tx + 0.5 - this.player.x / TILE, ty + 0.5 - this.player.y / TILE);
    if (d > REACH) {
      this.tip('reach', 'Too far away — get closer.');
      this.crack.setVisible(false);
      return;
    }
    const use = sdef?.use;
    let power = 0.6;
    let speed = 0.6;
    if (use === 'pick' || use === 'axe') {
      power = sdef!.power ?? 1;
      speed = sdef!.speed ?? 1;
    } else if (use === 'sword' || use === 'bow') return;
    if (def.minPick > power) {
      this.tip('power', `${def.name} is too hard for this tool — craft a stronger pickaxe!`);
      this.crack.setVisible(false);
      return;
    }
    let mult = 1;
    if (use === 'axe' && (id === B.WOOD || id === B.LEAVES)) mult = 3;
    if (use === 'pick' && (id === B.WOOD || id === B.LEAVES)) mult = 0.5;
    if (inventory.hasAcc('star_core')) mult *= 1.15;
    this.mineProg += (dt * speed * mult) / (def.hardness * 1900);
    this.crack.setVisible(true).setPosition(tx * TILE, ty * TILE).setTexture('crack' + Math.min(4, 1 + Math.floor(this.mineProg * 4)));
    if (this.mineProg > 0.15 && Math.random() < 0.2) this.spawnDust(tx * TILE + 8, ty * TILE + 8, 0xcfc6b8, 1);
    if (this.mineProg >= 1) {
      this.mineProg = 0;
      this.mineTarget = -1;
      this.spawnDust(tx * TILE + 8, ty * TILE + 8, 0x999999, 5);
      if (id === B.LEAVES) {
        if (Math.random() < 0.28) this.drops.spawnItem(tx * TILE + 8, ty * TILE, 'herb', 1);
        this.setTile(tx, ty, B.AIR);
      } else {
        if (id === B.CHEST) {
          const loot = this.chests.get(idx);
          if (loot && !this.world.openedChests.has(idx)) {
            this.world.openedChests.add(idx);
            loot.forEach(([it, n], li) => this.drops.spawnItem(tx * TILE + 8 + (li % 3 - 1) * 10, ty * TILE - 8, it as ItemId, n));
          }
        }
        if (def.drop) this.drops.spawnItem(tx * TILE + 8, ty * TILE, def.drop, def.dropCount ?? 1);
        this.setTile(tx, ty, B.AIR);
        if (def.station) this.tip('station', 'You dismantled a crafting station.', 4000);
        if (id === B.GRASS || id === B.DIRT) this.triggerHint(1);
        if (id === B.WOOD) this.triggerHint(2);
      }
    }
  }

  private tryPlace(tx: number, ty: number, sdef: ItemDef): boolean {
    if (!this.world.inBounds(tx, ty)) return false;
    const id = this.world.get(tx, ty);
    if (id !== B.AIR) return false;
    let adj = false;
    for (let dx = -1; dx <= 1 && !adj; dx++) for (let dy = -1; dy <= 1 && !adj; dy++) if (this.world.get(tx + dx, ty + dy) !== B.AIR) adj = true;
    if (!adj) {
      this.tip('adj', 'Needs something to rest on.');
      return false;
    }
    const d = Math.hypot(tx + 0.5 - this.player.x / TILE, ty + 0.5 - this.player.y / TILE);
    if (d > REACH) {
      this.tip('reach', 'Too far away — get closer.');
      return false;
    }
    const blockId = sdef.block!;
    if (BLOCKS[blockId].solid) {
      const pb = this.player.body as Phaser.Physics.Arcade.Body;
      const pr = new Phaser.Geom.Rectangle(this.player.x - pb.width / 2, this.player.y - pb.height / 2, pb.width, pb.height);
      const tr = new Phaser.Geom.Rectangle(tx * TILE, ty * TILE, TILE, TILE);
      if (Phaser.Geom.Intersects.RectangleToRectangle(pr, tr)) {
        this.tip('inside', "You can't place a block inside yourself!");
        return false;
      }
    }
    this.takeSelected(1);
    this.setTile(tx, ty, blockId);
    if (sdef.id === 'workbench') this.triggerHint(3);
    return true;
  }

  private tryAttack(kind: 'sword' | 'bow', sdef: ItemDef, wx: number, wy: number) {
    const now = this.time.now;
    const cd = kind === 'sword' ? 380 / (sdef.speed ?? 1) : 420 / (sdef.speed ?? 1);
    if (now - this.player.attackCd < cd) return;
    this.player.attackCd = now;
    const dx = wx - this.player.x;
    const dy = wy - this.player.y;
    const a = Math.atan2(dy, dx);
    if (Math.abs(dx) > 4) {
      this.player.setFlipX(dx < 0);
      this.player.facing = dx < 0 ? -1 : 1;
    }
    if (kind === 'sword') {
      this.player.swingTimer = 180;
      const sw = this.add.image(this.player.x, this.player.y - 2, 'slash').setDepth(24).setRotation(a - Math.PI / 2).setScale(1.1).setBlendMode(Phaser.BlendModes.ADD);
      this.tweens.add({ targets: sw, alpha: 0, scale: 1.5, duration: 160, onComplete: () => sw.destroy() });
      const dmg = Math.max(1, Math.round((sdef.dmg ?? 5) * this.player.meleeMult));
      for (const e of [...this.enemies.enemies]) {
        const d = Math.hypot(e.x - this.player.x, e.y - this.player.y);
        const ea = Math.atan2(e.y - this.player.y, e.x - this.player.x);
        let diff = Math.abs(ea - a);
        while (diff > Math.PI) diff = Math.abs(diff - Math.PI * 2);
        if (d < 40 && diff < 1.6) this.enemies.damage(e, dmg, this.player.x);
      }
      if (this.boss.alive && this.boss.sprite) {
        const bs = this.boss.sprite;
        if (Math.hypot(bs.x - this.player.x, bs.y - this.player.y) < 62) this.boss.damage(dmg, this.player.x);
      }
    } else {
      if (inventory.countOf('arrow') <= 0) {
        this.tip('ammo', 'No arrows! Craft some at a work bench (E → Crafting).', 3000);
        return;
      }
      this.takeSelectedArrow();
      const dmg = Math.max(1, Math.round((sdef.dmg ?? 8) * this.player.dmgMult));
      this.projs.fireArrow(this.player.x, this.player.y - 2, a, dmg);
    }
  }

  private takeSelectedArrow() {
    for (let i = 0; i < inventory.slots.length; i++) {
      const s = inventory.slots[i];
      if (s && s.item === 'arrow') {
        s.count--;
        if (s.count <= 0) inventory.slots[i] = null;
        inventory.bump();
        return;
      }
    }
  }

  takeSelected(n: number) {
    const s = inventory.slots[gs.selected];
    if (!s) return false;
    s.count -= n;
    if (s.count <= 0) inventory.slots[gs.selected] = null;
    inventory.bump();
    return true;
  }

  private rightClick(p: Phaser.Input.Pointer) {
    const tx = Math.floor(p.worldX / TILE);
    const ty = Math.floor(p.worldY / TILE);
    if (!this.world.inBounds(tx, ty)) return;
    const d = Math.hypot(tx + 0.5 - this.player.x / TILE, ty + 0.5 - this.player.y / TILE);
    for (const n of [this.hermit, this.merchant]) {
      if (n && Math.hypot(n.spr.x - p.worldX, n.spr.y - p.worldY) < TILE * 1.6) {
        this.openDialogue(n.kind);
        return;
      }
    }
    const id = this.world.get(tx, ty);
    if (id === B.CHEST) {
      if (d > REACH) {
        this.tip('reach', 'Too far away — get closer.');
        return;
      }
      const idx = ty * WORLD_W + tx;
      if (this.world.openedChests.has(idx)) {
        toast('Empty chest.');
        return;
      }
      const loot = this.chests.get(idx);
      if (loot) {
        this.world.openedChests.add(idx);
        loot.forEach(([it, n], li) => this.drops.spawnItem(tx * TILE + 8 + ((li % 3) - 1) * 12, ty * TILE - 6, it as ItemId, n));
        toast('The chest pops open!');
      }
      return;
    }
    const sel = inventory.slots[gs.selected];
    const sdef = sel ? ITEMS[sel.item] : null;
    if (!sdef) return;
    if (sdef.use === 'heal') {
      this.player.heal(sdef.heal ?? 20);
      this.takeSelected(1);
      return;
    }
    if (sdef.use === 'bulb') {
      this.takeSelected(1);
      this.boss.summon(this.player.x + (this.player.facing > 0 ? 140 : -140), this.player.y - 40);
      return;
    }
  }

  openDialogue(who: 'hermit' | 'merchant') {
    if (who === 'hermit') {
      const lines = ['Stay alive out there. Mine light — torches keep the dark honest.', 'Craft at stations: a Work Bench unlocks wooden gear, a Furnace smelts ore, an Anvil forges bars. Silver pickaxes dig shadow ore deep below.', this.flags.hasHome ? 'Your shelter suits me fine. Ask for my blessing any time.' : 'Build me a shelter — enclosed walls, a torch and a work bench — and I will move in.'];
      if (this.flags.hasHome && !this.flags.blessed) lines.push('For your kindness, accept my blessing…');
      gs.dialogue = { who, lines, shop: false };
    } else {
      gs.dialogue = { who, lines: ['Coin for goods, goods for coin. The best bargains this side of the Blight.'], shop: true };
    }
    store.bump();
  }

  closeDialogue() {
    const wasHermit = gs.dialogue?.who === 'hermit';
    gs.dialogue = null;
    if (wasHermit && this.flags.hasHome && !this.flags.blessed) {
      this.flags.blessed = true;
      this.player.setMaxHp(120);
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + 20);
      toast('Hermit’s Blessing: +20 max health (permanent).');
    }
    store.bump();
  }

  buy(index: number) {
    const entry = MERCHANT_STOCK[index];
    if (!entry) return;
    if (inventory.countOf('coins') < entry.price) {
      toast('Not enough coins!');
      return;
    }
    if (inventory.addItem(entry.item, entry.count) > 0) {
      toast('Inventory full!');
      return;
    }
    inventory.removeItem('coins', entry.price);
    toast(`Bought ${entry.count}× ${ITEMS[entry.item].name}.`);
    this.hudSync();
  }

  togglePause() {
    gs.paused = !gs.paused;
    if (gs.paused) {
      this.doSave();
      this.physics.pause();
    } else {
      this.physics.resume();
    }
    store.bump();
  }

  onPlayerDeath() {
    if (gs.dead) return;
    gs.dead = true;
    this.cameras.main.shake(500, 0.01);
    (this.player.body as Phaser.Physics.Arcade.Body).velocity.set(0, 0);
    showHint('You died. Respawning…', 2600);
    store.bump();
    this.time.delayedCall(2600, () => this.respawn());
  }

  respawn() {
    this.player.setPosition((this.world.spawnX + 0.5) * TILE, (this.world.spawnY - 1) * TILE);
    this.player.hp = this.player.maxHp;
    this.player.iTimer = 1400;
    (this.player.body as Phaser.Physics.Arcade.Body).velocity.set(0, 0);
    gs.dead = false;
    gs.invOpen = false;
    this.enemies.clear();
    this.projs.clear();
    toast('You respawn at your world spawn.');
    this.hudSync();
  }

  doSave() {
    const stats: SaveStats = {
      hp: this.player.hp,
      maxHpBase: this.player.maxHpBase,
      bossDefeated: this.flags.bossDefeated,
      blessed: this.flags.blessed,
      hasHome: this.flags.hasHome,
      time: this.daynight.t,
      hints: [...this.hintShown],
    };
    saveGame(this.world, stats);
  }

  shutdown() {
    window.removeEventListener('beforeunload', this.beforeUnload);
    this.doSave();
    this.enemies?.clear();
    this.projs?.clear();
  }

  getEnemies(): Enemy[] {
    return this.enemies.enemies;
  }
}
