'use client';

import { useEffect, useRef, useState } from 'react';
import { reducedMotion } from '@/lib/motion';

/* The counter in the hero's top corner. It arrives at its figure once, on
 * first paint, and then holds — a number that ticks forever is a gimmick and
 * this one is a fact about five years, not a live feed. */
export function CountUp({ to, duration = 2200 }: { to: number; duration?: number }) {
  const [v, setV] = useState(to);
  const done = useRef(false);

  useEffect(() => {
    if (reducedMotion() || done.current) return;
    done.current = true;
    let raf = 0;
    const t0 = performance.now() + 350;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - t0) / duration));
      setV(to * (1 - Math.pow(1 - t, 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    setV(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return (
    <>
      {v.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      })}
    </>
  );
}
