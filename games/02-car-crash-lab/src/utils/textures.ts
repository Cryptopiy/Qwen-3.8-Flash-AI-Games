import * as THREE from 'three';

// Runtime-generated label textures (no external assets required).
export function makeLabelTexture(text: string, fg = '#dfe7f2', bg = 'rgba(8,11,16,0.9)'): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(120,140,170,0.5)';
    ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, canvas.width - 6, canvas.height - 6);
    ctx.fillStyle = fg;
    ctx.font = 'bold 44px "Segoe UI", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 2);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function makeHazardTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#e8e9ec';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d8434a';
    const stripe = 32;
    for (let x = -canvas.height; x < canvas.width; x += stripe * 2) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + stripe, 0);
      ctx.lineTo(x + stripe + canvas.height, canvas.height);
      ctx.lineTo(x + canvas.height, canvas.height);
      ctx.closePath();
      ctx.fill();
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
