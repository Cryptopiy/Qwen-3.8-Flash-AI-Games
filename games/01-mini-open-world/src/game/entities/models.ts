import * as THREE from 'three';

export interface CharacterParts {
  group: THREE.Group;
  la: THREE.Group;
  ra: THREE.Group;
  ll: THREE.Group;
  rl: THREE.Group;
}

export function makeCharacter(shirt: number, pants: number): CharacterParts {
  const g = new THREE.Group();
  const skin = 0xd9b38c;

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.52, 0.62, 0.3),
    new THREE.MeshLambertMaterial({ color: shirt })
  );
  body.position.y = 1.02;
  body.castShadow = true;
  g.add(body);

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.17, 12, 10),
    new THREE.MeshLambertMaterial({ color: skin })
  );
  head.position.y = 1.5;
  head.castShadow = true;
  g.add(head);

  const limb = (x: number, y: number, len: number, color: number): THREE.Group => {
    const grp = new THREE.Group();
    grp.position.set(x, y, 0);
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, len, 0.14),
      new THREE.MeshLambertMaterial({ color })
    );
    m.position.y = -len / 2;
    m.castShadow = true;
    grp.add(m);
    g.add(grp);
    return grp;
  };

  const la = limb(-0.33, 1.3, 0.5, shirt);
  const ra = limb(0.33, 1.3, 0.5, shirt);
  const ll = limb(-0.14, 0.72, 0.68, pants);
  const rl = limb(0.14, 0.72, 0.68, pants);

  g.userData.parts = { la, ra, ll, rl };
  return { group: g, la, ra, ll, rl };
}

export interface CarParts {
  group: THREE.Group;
  wheels: THREE.Mesh[];
  lights: THREE.Mesh[] | null;
}

export function makeCar(color: number, police: boolean): CarParts {
  const g = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.9, 0.55, 4.2),
    new THREE.MeshLambertMaterial({ color: police ? 0xe8e8ee : color })
  );
  body.position.y = 0.65;
  body.castShadow = true;
  g.add(body);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(1.66, 0.5, 1.9),
    new THREE.MeshLambertMaterial({ color: police ? 0x20242e : 0x22303c })
  );
  cabin.position.set(0, 1.15, -0.2);
  cabin.castShadow = true;
  g.add(cabin);

  if (police) {
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(1.92, 0.18, 4.21),
      new THREE.MeshLambertMaterial({ color: 0x1a1e28 })
    );
    stripe.position.y = 0.6;
    g.add(stripe);
  }

  const wheels: THREE.Mesh[] = [];
  const wheelMat = new THREE.MeshLambertMaterial({ color: 0x14161a });
  const wheelGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.24, 14);
  for (const wx of [-0.95, 0.95]) {
    for (const wz of [1.4, -1.4]) {
      const w = new THREE.Mesh(wheelGeo, wheelMat);
      w.rotation.z = Math.PI / 2;
      w.position.set(wx, 0.36, wz);
      w.castShadow = true;
      g.add(w);
      wheels.push(w);
    }
  }

  const headMat = new THREE.MeshLambertMaterial({ color: 0xfff2cc, emissive: 0xfff2cc, emissiveIntensity: 0.8 });
  const tailMat = new THREE.MeshLambertMaterial({ color: 0xd03030, emissive: 0xd03030, emissiveIntensity: 0.6 });
  for (const hx of [-0.6, 0.6]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.08), headMat);
    hl.position.set(hx, 0.66, 2.1);
    g.add(hl);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.08), tailMat);
    tl.position.set(hx, 0.66, -2.1);
    g.add(tl);
  }

  let lights: THREE.Mesh[] | null = null;
  if (police) {
    const red = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.2, 0.5),
      new THREE.MeshLambertMaterial({ color: 0xff2a2a, emissive: 0xff2a2a, emissiveIntensity: 2 })
    );
    red.position.set(-0.24, 1.5, -0.2);
    g.add(red);
    const blue = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.2, 0.5),
      new THREE.MeshLambertMaterial({ color: 0x2a5aff, emissive: 0x2a5aff, emissiveIntensity: 2 })
    );
    blue.position.set(0.24, 1.5, -0.2);
    g.add(blue);
    lights = [red, blue];
  }

  return { group: g, wheels, lights };
}
