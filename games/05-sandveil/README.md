# Sandveil — 2D Sandbox (Terraria-inspired, original assets)

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

A complete side-view pixel sandbox built with **TypeScript + React + Vite + Phaser 3**.
Explore a seeded procedural world, mine, craft, build, fight, survive the night, house the Hermit, and defeat the boss **Thornmaw**.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (dist/)
```

## Controls

| Key | Action |
| --- | --- |
| A / D | Move |
| Space | Jump (S + Space drops through platforms) |
| Left mouse | Mine with pickaxe/axe · swing sword · shoot bow toward cursor |
| Right mouse | Place blocks · open chests · heal · talk to NPCs · summon boss |
| 1–0 / mouse wheel | Hotbar slot |
| E | Inventory & crafting |
| Esc | Pause (saves) |

## Progression loop

Wood → Work Bench → Bow/Arrows → Furnace (smelt bars) → Anvil (tools, weapons, armor) →
Silver pickaxe → Shadow ore (deep caverns) → **Gloom Bulb** (Anvil) → right-click to summon **Thornmaw** →
Stellarite gear + Starforged Core accessory.

Chests with rare accessories (Swift Boots, Titan Glove, Depth Amulet) sit in underground rooms.
Building an enclosed shelter with a torch + work bench makes the Hermit move in and grants a permanent +20 HP blessing.
Night and depth increase enemy pressure; light falls off underground and torches push it back.

Progress saves to localStorage (seed + tile diff + inventory + flags). The same seed regenerates the same world.

## Structure

```
src/
  game/
    config.ts            world constants
    core/rng.ts          seeded noise
    data/                blocks, items, recipes, shop tables
    world/               procedural generation + tile model w/ edit diff
    entities/            player, enemies, boss, npcs, drops, projectiles
    systems/             lighting, day/night, housing check
    scenes/              Boot (texture generation), Game (glue/input/camera)
    inventory.ts         shared inventory + crafting (UI & game use the same state)
    save.ts              localStorage persistence
    state.ts / bridge.ts UI store bridge (React ⇄ Phaser)
    art.ts icons.ts textures.ts   procedurally generated pixel art (no external assets)
  ui/                    React HUD, inventory/crafting, dialogue/shop, menus
```
