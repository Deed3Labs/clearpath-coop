'use client';

import { useEffect, useRef } from 'react';
import { reducedMotion } from '@/lib/motion';

/* The drafting ground: a faint grid with particles drifting across it.
 *
 * The reference does this with a full-viewport canvas and it is most of why
 * that page reads as a surface rather than a slide. Flat colour behind a
 * headline is the single biggest tell of a site that was laid out rather than
 * designed.
 *
 * The grid is CSS — two repeating gradients cost nothing and never repaint.
 * Only the particles need a canvas, and they are deliberately few: this sits
 * behind the LCP element, so it defers its first frame and does nothing at
 * all under prefers-reduced-motion. */

const COUNT = 46;

export function Texture() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv || reducedMotion()) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let dots: P[] = [];

    const seed = () => {
      const box = cv.getBoundingClientRect();
      w = box.width;
      h = box.height;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        /* Slow enough to read as drift rather than as animation. */
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.3 + 0.14,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        /* Wrap rather than bounce — a bounce reads as a boundary and there
           is no boundary here. */
        if (d.x < -4) d.x = w + 4;
        if (d.x > w + 4) d.x = -4;
        if (d.y < -4) d.y = h + 4;
        if (d.y > h + 4) d.y = -4;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(21, 22, 26, ${d.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    seed();
    const ro = new ResizeObserver(seed);
    ro.observe(cv);
    /* Behind the LCP element, so it waits for it. */
    const start = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 400);

    return () => {
      window.clearTimeout(start);
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="texture" aria-hidden="true">
      <canvas ref={ref} className="texture-dots" />
    </div>
  );
}
