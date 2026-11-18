# Prompt — 2D Sandbox Game

You are an autonomous senior game engineer. Build a **small but complete 2D sandbox action-adventure browser game inspired by Terraria's core gameplay loop**.

The goal is not to copy Terraria's copyrighted assets or exact content. Create a compact polished sandbox where exploration, mining, building, crafting, combat, progression, and a boss encounter all work together.

The result must feel like a coherent game, not disconnected demos.

## Primary Objective

Create a side-view pixel-art sandbox where the player can:

- explore a procedurally generated world;
- walk, jump, and collide with terrain;
- mine blocks, trees, and ores;
- collect and place resources;
- use a hotbar and inventory;
- craft tools, weapons, and stations;
- explore caves and find loot;
- fight multiple enemy types;
- survive a day/night cycle;
- improve equipment;
- build a shelter;
- defeat one original boss;
- save and reload progress.

The core loop should be:

**explore → gather → craft → upgrade → go deeper → fight → loot → build → progress**

## Technical Requirements

Build the project as a browser application using:

- **TypeScript**
- **React**
- **Vite**
- **Phaser 3**

Use Phaser for the real-time game world. React may be used for menus and UI.

The project must run with:

```bash
npm install
npm run dev
```

It should also build successfully with:

```bash
npm run build
```

No backend, external APIs, authentication, paid assets, or proprietary downloads.

Generate original pixel-art graphics locally or include assets created directly inside the repository.

Do not use Terraria sprites, music, sounds, maps, logos, names, or other copyrighted assets.

## Procedural World

Create a tile-based world significantly larger than the viewport.

Include:

- surface terrain;
- underground and deep caverns;
- dirt, stone, trees, and several ores;
- irregular caves and tunnels;
- larger underground rooms;
- small ruins or cabins;
- loot chests.

Use a deterministic seed so the same seed produces approximately the same world.

Terrain should contain hills, valleys, cave networks, and ore veins.

The player must spawn safely on the surface.

## Biomes and Depth

Include at least four visually distinct regions, for example:

- forest;
- desert;
- snow;
- dangerous overgrown biome.

Biomes should differ through terrain, vegetation, backgrounds, enemies, decorations, or loot.

Include at least three vertical zones:

- surface;
- underground;
- deep caverns.

Going deeper should change lighting, ores, enemies, and loot quality.

At least one valuable material must require an upgraded pickaxe.

## Player and Camera

The player must move left/right, jump, fall under gravity, and collide correctly with solid terrain and placed blocks.

Use controls such as:

- `A / D` — move;
- `Space` — jump;
- `1–0` — hotbar;
- mouse wheel — change slot;
- `E` — inventory;
- left mouse — use tool or weapon;
- right mouse — place or interact;
- `Esc` — pause.

Show the actual controls in the game.

Use a smooth side-view camera that follows the player through the world.

## Mining and Building

Mining is a core required mechanic.

The player must target nearby terrain and break blocks with:

- limited reach;
- block hardness;
- visible mining feedback;
- faster mining with stronger tools;
- block-break particles;
- physical item drops;
- pickup into inventory.

A weak pickaxe must not mine every material.

The player must also be able to:

- select a placeable block;
- preview placement;
- place it within reach;
- consume one item;
- collide with the new block;
- remove it again.

Do not allow placing a solid block inside the player.

Include basic terrain blocks, wood, platforms, torches, and crafting stations.

## Inventory and Crafting

Create a functional sandbox inventory with:

- 10-slot hotbar;
- larger inventory;
- stackable items;
- quantities;
- selected-slot highlighting;
- item names or tooltips.

Mining, pickups, crafting, and placement must use the same inventory state.

Include:

- blocks and materials;
- pickaxes and axe;
- melee weapons;
- ranged weapon and ammunition;
- armor;
- healing items;
- crafting stations;
- rare loot.

Include at least three meaningful equipment/tool tiers.

Implement real crafting that consumes ingredients and produces inventory items.

Include:

- hand crafting;
- workbench;
- furnace;
- anvil or equivalent advanced station.

Recipes should cover tools, weapons, torches, blocks, stations, metal bars, equipment, and a boss-related item.

Standing near the appropriate station should unlock additional recipes.

## Lighting and Day/Night

Underground areas must become darker than the surface.

Implement lightweight lighting where caves are darker, torches produce visible local light, and deep regions have a different ambient appearance.

Do not make caves completely unreadable.

Create a continuous day/night cycle affecting:

- sky color;
- surface lighting;
- sun/moon or equivalent indicator;
- enemy spawning.

Night must be noticeably more dangerous than daytime.

## Enemies and Combat

Add at least six ordinary enemy types using different behaviors such as:

- jumping ground enemy;
- walking chaser;
- flying enemy;
- ranged enemy;
- fast biome enemy;
- underground enemy.

Spawning should depend on biome, depth, or time.

Enemies must move independently, attack the player, take damage, react to hits, die, and drop loot.

Implement real-time combat with:

- melee weapon;
- ranged weapon;
- moving projectiles;
- player and enemy health;
- damage and knockback;
- short invulnerability frames;
- death and respawn.

Use readable hit feedback such as particles, flashes, damage numbers, or screen shake.

## Progression and Exploration

Progression should come mainly from exploration and equipment rather than a generic XP level.

Include:

- stronger pickaxes;
- stronger weapons;
- armor or defense improvement;
- at least one rare accessory or permanent stat upgrade.

Place several chests in underground structures.

Chest loot should include useful combinations of torches, ammunition, healing items, ores, equipment, rare weapons, or permanent upgrades.

Deeper exploration must provide rewards unavailable near spawn.

## Shelter and Friendly NPC

Provide enough blocks and objects to build a recognizable small shelter with solid blocks, wood, platforms, torches, and a crafting station.

If practical, add a lightweight housing check based on enclosure, light, and simple furniture.

Add at least one friendly NPC physically present in the world.

The NPC may provide hints, crafting guidance, or sell several starter items.

If housing is implemented, the NPC should be able to occupy a valid shelter.

## Boss Encounter

Implement one original boss. Do not copy an existing Terraria boss.

The boss must:

- have a unique name and appearance;
- have a large health bar;
- be clearly stronger than normal enemies;
- use at least three attack behaviors;
- have at least two phases or a low-health behavior change;
- drop a unique progression reward.

Trigger the boss through a clear gameplay condition such as a crafted item or shrine.

Its reward should unlock a stronger weapon, tool tier, rare material, or accessory.

## HUD and Visual Quality

Include a compact HUD showing:

- health;
- hotbar and stack quantities;
- selected item;
- time-of-day indication;
- useful interaction hints.

Provide short onboarding hints for movement, gathering wood, inventory, and crafting.

Create a polished original pixel-art presentation suitable for screen recording.

Use distinct terrain textures, readable silhouettes, layered backgrounds, biome identity, mining particles, pickup effects, combat effects, day/night color changes, and torch glow.

Pixel graphics should remain sharp when scaled.

The game may strongly resemble Terraria's genre and interaction model, but it must not use copied art or pixel-for-pixel imitation.

## Saving

Persist progress locally in the browser.

Preserve at least:

- world seed;
- modified or placed blocks;
- inventory;
- equipment or upgrades;
- boss progression.

A good implementation may regenerate the base world from the seed and store only modifications.

Refreshing the browser must not always create a fresh game.

## Architecture and Performance

Organize code into logical systems such as:

- scenes;
- world generation;
- tiles;
- player;
- inventory and crafting;
- enemies and combat;
- lighting and day/night;
- saving;
- UI.

Do not put the entire game into one giant React component or Phaser scene.

Avoid rebuilding the whole world every frame, unlimited enemy spawning, one React component per tile, or recalculating all lighting every frame.

Use tilemaps, chunks, batching, or pooling where useful.

A smaller dense stable world is better than an enormous empty one.

## Reliability Requirements

The game must:

- start without runtime errors;
- generate a safe playable spawn;
- keep collision stable;
- allow repeated mining without corrupting tiles;
- keep inventory counts correct;
- prevent crafting without materials;
- prevent placement without the required item;
- keep enemies active over time;
- avoid NaN positions or velocities;
- support death and respawn;
- save and reload progress;
- allow the boss to be reached from a fresh game.

## Acceptance Criteria

The project is complete only if all of the following can be demonstrated:

1. A procedural side-view world larger than the screen is generated.
2. The player can walk, jump, and collide with terrain.
3. Dirt, stone, wood, and multiple ores can be mined and collected.
4. Collected blocks can be placed back into the world.
5. A 10-slot hotbar and functional inventory work with real item quantities.
6. A workbench or equivalent station can be crafted and placed.
7. Crafting stations unlock additional useful recipes.
8. At least four distinct biomes or regions exist.
9. Caves are darker than the surface and torches provide light.
10. Multiple ore/tool tiers exist and stronger tools matter.
11. A continuous day/night cycle changes enemy pressure.
12. At least six ordinary enemy types can appear.
13. Melee and ranged combat both work.
14. The player can take damage, die, and respawn.
15. Underground structures contain useful loot chests.
16. Equipment or permanent stats can be improved.
17. The player can build a recognizable shelter and encounter a friendly NPC.
18. One original multi-stage boss can be triggered, defeated, and drops a meaningful reward.
19. Saving and reloading preserves meaningful progress.
20. The game remains functional after these systems interact in one session.

## Delivery Requirements

Implement the complete project.

Do **not**:

- return only a design document;
- stop after procedural terrain;
- replace gameplay with static mockups;
- fake inventory or crafting values;
- use copyrighted Terraria assets;
- leave required core systems as TODOs;
- omit necessary source files.

At the end, provide:

1. a short summary of implemented systems;
2. the final file structure;
3. exact setup/run commands;
4. controls;
5. a checklist confirming the acceptance criteria;
6. any important simplifications.

Before finishing, run the production build and inspect the implementation for TypeScript errors, broken imports, invalid tile state, inventory synchronization bugs, save/load problems, and unreachable progression.
