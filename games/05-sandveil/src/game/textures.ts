import Phaser from 'phaser';
import { makeCanvas, rect, buildTilesCanvas } from './art';
import { iconCanvas, allItemIds } from './icons';

function addTex(scene: Phaser.Scene, key: string, c: HTMLCanvasElement) {
  if (scene.textures.exists(key)) return;
  scene.textures.addCanvas(key, c);
}

function px(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  rect(ctx, x, y, w, h, color);
}

export function createAllTextures(scene: Phaser.Scene) {
  addTex(scene, 'tiles', buildTilesCanvas());
  allItemIds().forEach((id) => addTex(scene, 'ic_' + id, iconCanvas(id)));

  // player
  {
    const [c, ctx] = makeCanvas(16, 24);
    px(ctx, 3, 0, 10, 3, '#5c3c20'); // hair
    px(ctx, 3, 2, 10, 8, '#e0a878'); // face
    px(ctx, 9, 5, 2, 2, '#2a2a30'); // eye
    px(ctx, 3, 7, 8, 2, '#5c3c20'); // beard-ish shade
    px(ctx, 2, 10, 12, 8, '#2a9aa8'); // shirt
    px(ctx, 2, 10, 3, 7, '#1f7682');
    px(ctx, 12, 11, 3, 6, '#e0a878'); // arm
    px(ctx, 4, 18, 4, 4, '#3a3f8a'); // legs
    px(ctx, 9, 18, 4, 4, '#3a3f8a');
    px(ctx, 3, 22, 5, 2, '#4a3520');
    px(ctx, 9, 22, 5, 2, '#4a3520');
    addTex(scene, 'player', c);
  }

  const enemyTex = (key: string, draw: (ctx: CanvasRenderingContext2D) => void) => {
    const [c, ctx] = makeCanvas(16, 16);
    draw(ctx);
    addTex(scene, key, c);
  };

  enemyTex('e_gloop', (ctx) => {
    px(ctx, 3, 6, 10, 9, '#3fae4f');
    px(ctx, 4, 4, 8, 3, '#57c96a');
    px(ctx, 2, 9, 12, 5, '#3fae4f');
    px(ctx, 5, 8, 2, 2, '#101820');
    px(ctx, 10, 8, 2, 2, '#101820');
    px(ctx, 6, 3, 2, 2, '#a8f0b4');
  });
  enemyTex('e_shambler', (ctx) => {
    px(ctx, 5, 1, 7, 6, '#d8d2c0');
    px(ctx, 6, 3, 2, 2, '#20180f');
    px(ctx, 9, 3, 2, 2, '#20180f');
    px(ctx, 6, 6, 5, 1, '#b8b2a0');
    px(ctx, 5, 8, 7, 6, '#9a948a');
    px(ctx, 6, 9, 5, 1, '#d8d2c0');
    px(ctx, 6, 11, 5, 1, '#d8d2c0');
    px(ctx, 5, 14, 3, 2, '#7a746a');
    px(ctx, 9, 14, 3, 2, '#7a746a');
  });
  enemyTex('e_scorchling', (ctx) => {
    px(ctx, 2, 6, 10, 6, '#d97a2a');
    px(ctx, 10, 3, 6, 6, '#e89a3f');
    px(ctx, 13, 5, 2, 2, '#501f00');
    px(ctx, 1, 8, 3, 2, '#b05a1a');
    px(ctx, 4, 12, 2, 3, '#b05a1a');
    px(ctx, 9, 12, 2, 3, '#b05a1a');
    px(ctx, 6, 5, 4, 2, '#f7c948');
  });
  enemyTex('e_moth', (ctx) => {
    px(ctx, 7, 4, 3, 8, '#7a5230');
    px(ctx, 0, 2, 7, 8, '#bcd8ea');
    px(ctx, 10, 2, 6, 8, '#bcd8ea');
    px(ctx, 1, 3, 4, 4, '#e8f4fb');
    px(ctx, 11, 3, 4, 4, '#e8f4fb');
    px(ctx, 7, 2, 3, 2, '#201820');
  });
  enemyTex('e_caster', (ctx) => {
    px(ctx, 6, 8, 4, 7, '#2c7a33');
    px(ctx, 3, 1, 10, 8, '#1f5c2a');
    px(ctx, 5, 3, 2, 2, '#c8f060');
    px(ctx, 9, 3, 2, 2, '#c8f060');
    px(ctx, 2, 6, 3, 2, '#3fae4f');
    px(ctx, 12, 5, 3, 2, '#3fae4f');
    px(ctx, 6, 14, 4, 2, '#17401d');
  });
  enemyTex('e_crawler', (ctx) => {
    px(ctx, 2, 5, 12, 8, '#6e5030');
    px(ctx, 3, 4, 10, 3, '#8a6a42');
    px(ctx, 4, 6, 8, 2, '#5c4026');
    px(ctx, 5, 9, 2, 2, '#ffd94a');
    px(ctx, 9, 9, 2, 2, '#ffd94a');
    px(ctx, 1, 8, 2, 5, '#4a3520');
    px(ctx, 13, 8, 2, 5, '#4a3520');
  });
  enemyTex('e_wisp', (ctx) => {
    px(ctx, 5, 3, 7, 7, '#8a4fd0');
    px(ctx, 6, 4, 5, 5, '#c78ae8');
    px(ctx, 7, 5, 2, 2, '#ffffff');
    px(ctx, 10, 5, 2, 2, '#301040');
    px(ctx, 4, 10, 3, 3, '#5c2a82');
    px(ctx, 8, 11, 3, 3, '#5c2a82');
  });
  enemyTex('e_sprout', (ctx) => {
    px(ctx, 6, 7, 4, 7, '#2c7a33');
    px(ctx, 3, 2, 10, 6, '#3fae4f');
    px(ctx, 5, 4, 2, 2, '#101820');
    px(ctx, 9, 4, 2, 2, '#101820');
    px(ctx, 2, 4, 2, 2, '#57c96a');
    px(ctx, 12, 4, 2, 2, '#57c96a');
  });

  // boss 48x48
  {
    const [c, ctx] = makeCanvas(48, 48);
    px(ctx, 10, 8, 28, 30, '#1f5c2a');
    px(ctx, 12, 6, 24, 6, '#2c7a33');
    px(ctx, 8, 14, 32, 20, '#17401d');
    px(ctx, 14, 10, 4, 28, '#9a4fd0');
    px(ctx, 26, 8, 4, 30, '#9a4fd0');
    px(ctx, 34, 12, 3, 24, '#7a2fa0');
    px(ctx, 16, 16, 8, 8, '#ffe14a');
    px(ctx, 18, 18, 4, 4, '#501f00');
    px(ctx, 28, 17, 6, 6, '#c78ae8');
    px(ctx, 30, 19, 2, 2, '#201028');
    px(ctx, 12, 30, 24, 6, '#0d2412');
    for (let i = 0; i < 6; i++) px(ctx, 13 + i * 4, 30, 3, 3 + (i % 2) * 2, '#d8f0c0');
    px(ctx, 4, 18, 6, 4, '#b46bff');
    px(ctx, 38, 18, 6, 4, '#b46bff');
    px(ctx, 22, 2, 4, 6, '#2c7a33');
    addTex(scene, 'boss', c);
  }

  // npc hermit
  {
    const [c, ctx] = makeCanvas(16, 24);
    px(ctx, 4, 1, 8, 4, '#6a5a3a'); // hat
    px(ctx, 2, 4, 12, 2, '#6a5a3a');
    px(ctx, 4, 6, 8, 5, '#e0a878');
    px(ctx, 6, 8, 2, 1, '#201810');
    px(ctx, 9, 8, 2, 1, '#201810');
    px(ctx, 5, 10, 7, 5, '#d8d2c0'); // beard
    px(ctx, 3, 11, 11, 9, '#5c4a2e'); // robe
    px(ctx, 3, 20, 11, 3, '#4a3a22');
    addTex(scene, 'npc_hermit', c);
  }
  // merchant
  {
    const [c, ctx] = makeCanvas(16, 24);
    px(ctx, 3, 0, 10, 3, '#a03a3a');
    px(ctx, 4, 3, 8, 6, '#e8c19a');
    px(ctx, 6, 5, 2, 2, '#201810');
    px(ctx, 9, 5, 2, 2, '#201810');
    px(ctx, 2, 9, 12, 9, '#c8542a'); // vest
    px(ctx, 6, 10, 4, 8, '#e6c14a'); // sash
    px(ctx, 4, 18, 4, 5, '#5c3c60');
    px(ctx, 9, 18, 4, 5, '#5c3c60');
    addTex(scene, 'npc_merchant', c);
  }

  // arrow, spore, seed
  {
    const [c, ctx] = makeCanvas(16, 6);
    px(ctx, 1, 2, 11, 2, '#a06a36');
    px(ctx, 12, 1, 4, 4, '#d9d9d9');
    px(ctx, 0, 0, 3, 6, '#cfd8e0');
    addTex(scene, 'arrow', c);
  }
  {
    const [c, ctx] = makeCanvas(8, 8);
    px(ctx, 1, 1, 6, 6, '#b46bff');
    px(ctx, 2, 2, 3, 3, '#e0b8ff');
    addTex(scene, 'spore', c);
  }
  {
    const [c, ctx] = makeCanvas(8, 8);
    px(ctx, 1, 1, 6, 6, '#3fae4f');
    px(ctx, 2, 2, 3, 3, '#c8f060');
    addTex(scene, 'seed', c);
  }
  // slash arc
  {
    const [c, ctx] = makeCanvas(32, 32);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(6, 16, 18, -0.9, 0.9);
    ctx.stroke();
    addTex(scene, 'slash', c);
  }
  // spark particle
  {
    const [c, ctx] = makeCanvas(4, 4);
    px(ctx, 0, 0, 4, 4, '#ffffff');
    addTex(scene, 'spark', c);
  }
  // glow
  {
    const [c, ctx] = makeCanvas(64, 64);
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
    g.addColorStop(0, 'rgba(255,210,130,0.65)');
    g.addColorStop(0.5, 'rgba(255,170,80,0.25)');
    g.addColorStop(1, 'rgba(255,150,60,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    addTex(scene, 'glow', c);
  }
  // cracks
  for (let s = 1; s <= 4; s++) {
    const [c, ctx] = makeCanvas(16, 16);
    ctx.strokeStyle = `rgba(10,8,6,${0.35 + s * 0.15})`;
    ctx.lineWidth = 1;
    const n = s * 2;
    for (let i = 0; i < n; i++) {
      const x = 2 + ((i * 7) % 12);
      const y = 2 + ((i * 5) % 12);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 4 - (i % 3) * 2, y + 5);
      ctx.stroke();
    }
    addTex(scene, 'crack' + s, c);
  }
  // hills silhouettes
  for (const [key, col] of [
    ['hill1', '#2a4a2f'],
    ['hill2', '#1e3522'],
  ] as [string, string][]) {
    const [c, ctx] = makeCanvas(128, 64);
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(0, 64);
    for (let x = 0; x <= 128; x += 8) ctx.lineTo(x, 30 + Math.sin(x * 0.12) * 10 + (x % 24 < 8 ? -8 : 0));
    ctx.lineTo(128, 64);
    ctx.closePath();
    ctx.fill();
    addTex(scene, key, c);
  }
  // cloud
  {
    const [c, ctx] = makeCanvas(48, 16);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(12, 10, 10, 6, 0, 0, Math.PI * 2);
    ctx.ellipse(26, 8, 12, 7, 0, 0, Math.PI * 2);
    ctx.ellipse(38, 11, 8, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    addTex(scene, 'cloud', c);
  }
  // sun / moon
  {
    const [c, ctx] = makeCanvas(24, 24);
    ctx.fillStyle = '#ffe14a';
    ctx.beginPath();
    ctx.arc(12, 12, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff7c0';
    ctx.beginPath();
    ctx.arc(10, 10, 4, 0, Math.PI * 2);
    ctx.fill();
    addTex(scene, 'sun', c);
  }
  {
    const [c, ctx] = makeCanvas(24, 24);
    ctx.fillStyle = '#dfe8f2';
    ctx.beginPath();
    ctx.arc(12, 12, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#b9c6d6';
    ctx.beginPath();
    ctx.arc(9, 10, 2, 0, Math.PI * 2);
    ctx.arc(15, 14, 3, 0, Math.PI * 2);
    ctx.arc(13, 8, 1.5, 0, Math.PI * 2);
    ctx.fill();
    addTex(scene, 'moon', c);
  }
  {
    const [c, ctx] = makeCanvas(2, 2);
    px(ctx, 0, 0, 2, 2, '#ffffff');
    addTex(scene, 'stardot', c);
  }
}
