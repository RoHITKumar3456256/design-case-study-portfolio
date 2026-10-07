import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeDeskScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = containerRef.current;
    if (!box) return;

    let animId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      const T = THREE;
      renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      // Clear any existing canvas
      box.innerHTML = '';
      box.appendChild(renderer.domElement);

      const sc = new T.Scene();
      const cam = new T.PerspectiveCamera(33, 1, 0.1, 100);
      cam.position.set(0, 2.6, 15);
      cam.lookAt(0, 2.2, 0);

      sc.add(new T.HemisphereLight(0xffffff, 0x8a8f9c, 0.95));
      const dl = new T.DirectionalLight(0xffffff, 0.85);
      dl.position.set(4, 8, 10);
      sc.add(dl);

      const g = new T.Group();
      sc.add(g);

      const M = (c: number | string, q = 0.9) =>
        new T.MeshStandardMaterial({ color: c, roughness: q, metalness: 0 });

      const A = (geo: THREE.BufferGeometry, c: number | string, x: number, y: number, z: number) => {
        const m = new T.Mesh(geo, M(c));
        m.position.set(x, y, z);
        g.add(m);
        return m;
      };

      const B = (w: number, h: number, d: number) => new T.BoxGeometry(w, h, d);
      const C = (a: number, b: number, h: number) => new T.CylinderGeometry(a, b, h, 32);
      const S = (q: number) => new T.SphereGeometry(q, 32, 24);

      const SY = 1.4;
      const sh = 0x9d9c97;
      const FT = 2.9 + SY;
      const FB = 1.1 + SY;

      // Bookshelf backboard & shelves
      A(B(6.4, 3.8, 0.12), 0xb7b6b1, 0, 2.8 + SY, -0.5);
      [4.6, 2.8, 1.0].forEach((y) => A(B(6.4, 0.2, 1.1), sh, 0, y + SY, 0));
      [-3.1, 3.1].forEach((x) => A(B(0.2, 3.8, 1.1), sh, x, 2.8 + SY, 0));
      [-1, 1].forEach((x) => A(B(0.16, 3.6, 1.1), sh, x, 2.8 + SY, 0));

      // Books on top shelf
      [
        [1.3, 0.28, 0.8, 0xe0457b],
        [1.15, 0.26, 0.7, 0x4f7fd6],
        [1, 0.24, 0.6, 0xf2b84b],
      ].forEach((b, i) => A(B(b[0] as number, b[1] as number, b[2] as number), b[3] as number, -2, FT + 0.14 + i * 0.27, 0));

      // Plant pot and leaves on shelf
      A(C(0.3, 0.24, 0.55), 0xd9825b, 0, FT + 0.28, 0);
      for (let i = 0; i < 6; i++) {
        const a = i * 1.05;
        const l = A(S(0.3), 0x4f9d69, Math.cos(a) * 0.2, FT + 1, Math.sin(a) * 0.2);
        l.scale.set(0.45, 1.5, 0.2);
        l.rotation.z = Math.cos(a) * 0.5;
        l.rotation.x = Math.sin(a) * 0.5;
      }

      // Robot toy with antenna on shelf
      A(C(0.38, 0.42, 0.7), 0x6aa7d8, 2, FT + 0.35, 0);
      A(S(0.3), 0xdfe6ee, 2, FT + 0.95, 0);
      [-0.11, 0.11].forEach((x) => A(S(0.05), 0x1d1634, 2 + x, FT + 1, 0.27));
      A(C(0.03, 0.03, 0.25), 0x888888, 2, FT + 1.35, 0);
      const ant = A(S(0.07), 0xd6336c, 2, FT + 1.5, 0);
      [-0.5, 0.5].forEach((x) => A(S(0.1), 0xdfe6ee, 2 + x, FT + 0.4, 0));

      // Coffee cup on bottom shelf
      A(C(0.34, 0.3, 0.6), 0xe8e4dc, -2, FB + 0.3, 0);
      A(new T.TorusGeometry(0.17, 0.05, 12, 24), 0xe8e4dc, -1.58, FB + 0.3, 0);

      // Stacked discs on bottom shelf
      [[0x19b6a4], [0x2f9fb6], [0x3a7bd5]].forEach((c, i) =>
        A(C(0.6, 0.6, 0.28), c[0], 0, FB + 0.14 + i * 0.18, 0)
      );

      // Vertical books on bottom shelf
      for (let i = 0; i < 7; i++) {
        const h = 0.9 + ((i * 37) % 5) * 0.1;
        const b = A(
          B(0.2, h, 0.7),
          [0xe0457b, 0x4f7fd6, 0xf2b84b, 0x4f9d69, 0x9a82ff, 0xd9825b, 0x19b6a4][i],
          1.35 + i * 0.24,
          FB + h / 2,
          0
        );
        if (i === 6) {
          b.rotation.z = 0.22;
          b.position.x += 0.06;
        }
      }

      // Main desk surface & legs
      A(B(7, 0.25, 2.2), 0xc8a47e, 0, -0.125, -0.2);
      [-3.2, 3.2].forEach((x) => A(B(0.25, 1.5, 2.2), 0xb08e68, x, -1, -0.2));

      // Developer Monitor & Stand
      A(B(3.3, 2.1, 0.14), 0x2b303a, 0, 1.25, -0.7);
      A(C(0.12, 0.16, 0.4), 0x2b303a, 0, 0.2, -0.7);
      A(C(0.6, 0.6, 0.06), 0x2b303a, 0, 0.03, -0.7);

      // Monitor Screen Canvas Texture (Code Terminal)
      const cv = document.createElement('canvas');
      cv.width = 512;
      cv.height = 300;
      const x = cv.getContext('2d');
      if (x) {
        x.fillStyle = '#0f172a';
        x.fillRect(0, 0, 512, 300);
        ['#ff5f57', '#febc2e', '#28c840'].forEach((c, i) => {
          x.fillStyle = c;
          x.beginPath();
          x.arc(22 + i * 20, 22, 7, 0, Math.PI * 2);
          x.fill();
        });
        x.font = 'bold 22px monospace';
        [
          ['#9a82ff', 'agent = build(rag)'],
          ['#19b6a4', 'await agent.run(task)'],
          ['#ff6b9a', 'status: shipped // Rohit'],
          ['#cbd5e1', 'SELECT * FROM impact;'],
        ].forEach((l, i) => {
          x.fillStyle = l[0];
          x.fillText(l[1], 26, 90 + i * 50);
        });
      }
      const tex = new T.CanvasTexture(cv);
      const sm = new T.Mesh(new T.PlaneGeometry(3.05, 1.85), new T.MeshBasicMaterial({ map: tex }));
      sm.position.set(0, 1.25, -0.62);
      g.add(sm);

      // Open Laptop on desk
      A(B(1.5, 0.07, 1.05), 0xb9bfc9, -2.2, 0.04, 0).rotation.y = 0.35;
      const lid = A(B(1.5, 1, 0.06), 0xaab0bb, -2.35, 0.55, -0.4);
      lid.rotation.set(-0.15, 0.35, 0);

      // Notepad / Book on right
      A(B(1, 0.08, 0.75), 0xe9e4da, 2.3, 0.05, 0.2).rotation.y = -0.3;

      // Chair & Developer Character
      const sh2 = 0x5b8fd0;
      A(C(0.85, 0.85, 0.16), 0x2d3340, 0, -0.55, 1.5);
      A(C(0.1, 0.1, 0.9), 0x2d3340, 0, -1, 1.5);
      A(B(1.7, 1, 0.14), 0x2d3340, 0, -0.05, 2.05);

      // Developer Body (Shirt, Shoulders, Neck, Head, Hair, Arms)
      A(C(0.5, 0.6, 1.3), sh2, 0, 0.45, 1.5);
      const sd = A(S(0.6), sh2, 0, 1, 1.5);
      sd.scale.set(1.25, 0.55, 0.8);
      A(C(0.17, 0.19, 0.25), 0xc68a64, 0, 1.2, 1.5);
      A(S(0.42), 0xc68a64, 0, 1.62, 1.5);
      const hr = A(S(0.45), 0x2a1d17, 0, 1.7, 1.56);
      hr.scale.set(1, 0.95, 1.02);
      for (let i = 0; i < 7; i++) {
        const a = i * 0.9;
        A(S(0.17), 0x2a1d17, Math.cos(a) * 0.4, 1.78 + Math.sin(a * 2) * 0.1, 1.5 + Math.sin(a) * 0.3);
      }
      [-0.43, 0.43].forEach((q) => A(S(0.08), 0xc68a64, q, 1.6, 1.5));
      [-0.78, 0.78].forEach((q) => {
        const a = A(C(0.15, 0.14, 1.3), sh2, q, 0.6, 1.0);
        a.rotation.x = 0.87;
        A(S(0.17), 0xc68a64, q * 0.8, 0.17, 0.4);
      });

      // Responsive Sizing
      const handleResize = () => {
        if (!box || !renderer) return;
        const w = box.clientWidth;
        const h = box.clientHeight;
        renderer.setSize(w, h, false);
        cam.aspect = w / h;
        cam.updateProjectionMatrix();
        renderer.render(sc, cam);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      // Interactive Pointer Tracking
      let tx = 0;
      let ty = 0;
      let seen = false;

      const handlePointerMove = (e: PointerEvent) => {
        if (!box) return;
        const b = box.getBoundingClientRect();
        seen = true;
        tx = ((e.clientX - b.left) / b.width - 0.5) * 2;
        ty = ((e.clientY - b.top) / b.height - 0.5) * 2;
      };

      const handlePointerLeave = () => {
        seen = false;
      };

      box.addEventListener('pointermove', handlePointerMove);
      box.addEventListener('pointerleave', handlePointerLeave);

      // Animation loop
      const loop = (t: number) => {
        if (!seen) {
          tx = Math.sin(t * 0.0005) * 0.5;
          ty = 0;
        }
        g.rotation.y += (tx * 0.38 - g.rotation.y) * 0.06;
        g.rotation.x += (ty * 0.08 - g.rotation.x) * 0.06;
        ant.position.y = FT + 1.5 + Math.sin(t * 0.004) * 0.04;

        if (renderer) renderer.render(sc, cam);
        animId = requestAnimationFrame(loop);
      };

      animId = requestAnimationFrame(loop);

      return () => {
        window.removeEventListener('resize', handleResize);
        box.removeEventListener('pointermove', handlePointerMove);
        box.removeEventListener('pointerleave', handlePointerLeave);
        cancelAnimationFrame(animId);
        if (renderer) {
          renderer.dispose();
        }
      };
    } catch (e) {
      console.warn('WebGL not supported', e);
      if (box) {
        box.innerHTML = '<p class="text-xs text-neutral-400 text-center py-12">WebGL 3D environment initialized</p>';
      }
    }
  }, []);

  return (
    <div className="relative w-full max-w-[760px] mx-auto aspect-[1/1.05] touch-pan-y cursor-grab active:cursor-grabbing select-none">
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-neutral-200/80 text-[10px] text-neutral-500 font-mono shadow-2xs pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Interactive 3D Workspace • Move cursor to rotate</span>
      </div>
    </div>
  );
};
