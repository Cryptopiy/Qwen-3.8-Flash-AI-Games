import Phaser from 'phaser';
import { createAllTextures } from '../textures';
import { gs, store } from '../state';
import { bootReq } from '../bridge';
import { GameScene } from './GameScene';

export class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }
  create() {
    createAllTextures(this);
    gs.screen = 'game';
    store.bump();
    this.scene.start('Game', { seed: bootReq.seed, load: bootReq.load });
  }
}

export function createGameConfig(parent: HTMLElement): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    parent,
    width: 960,
    height: 540,
    pixelArt: true,
    roundPixels: true,
    backgroundColor: '#0a0a10',
    physics: {
      default: 'arcade',
      arcade: { debug: false },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    disableContextMenu: true,
    scene: [BootScene, GameScene],
  };
}
