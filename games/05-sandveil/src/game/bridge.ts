import type Phaser from 'phaser';
import type { GameScene } from './scenes/GameScene';

export const bootReq = {
  seed: 0,
  load: false,
  pending: false,
};

export const gameRef: { scene: GameScene | null; game: Phaser.Game | null } = { scene: null, game: null };
