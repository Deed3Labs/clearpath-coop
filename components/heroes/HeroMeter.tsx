'use client';

import { useEffect, useRef, useState } from 'react';
import { HERO } from '@/content/home';

/* DIRECTION A — THE METER.
 *
 * The argument is an amount and a duration, so the hero is a number with a
 * clock in it. Five years of rent, fast-forwarded: one figure climbs to
 * $151,200 while the figure beside it — what you are left holding — sits at
 * zero and does not move. The stillness of the second number is the whole
 * point, and it only reads as stillness if something else is moving.
 *
 * Then a beat, and the third figure climbs. That beat is the argument: the
 * reader has already felt the first two before the answer arrives.
 *
 * Motion is intrinsic rather than scroll-driven — it happens whether or not
 * the reader does anything, which is also true of the rent. */

const RENT_TOTAL = 151200;
const KEPT_TOTAL = 90000;

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function useCount(to: number, { start, duration }: { start: number; duration: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setV(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now() + start;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - t0) / duration));
      /* power2.out — the figure should arrive, not decelerate forever. */
      setV(to * (1 - Math.pow(1 - t, 2)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, start, duration]);
  return v;
}

export function HeroMeter() {
  const rent = useCount(RENT_TOTAL, { start: 500, duration: 2600 });
  const kept = useCount(KEPT_TOTAL, { start: 3900, duration: 1500 });
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="hl-meter" ref={ref}>
      <h1 className="hl-h1">
        {HERO.headline.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </h1>

      <div className="hl-meter-rows">
        <div className="hl-row">
          <p className="hl-label">Five years of rent</p>
          <p className="hl-fig" aria-live="off">
            {money(rent)}
          </p>
        </div>

        <div className="hl-row">
          <p className="hl-label">What you are left holding</p>
          <p className="hl-fig is-zero">$0</p>
        </div>

        <div className="hl-row is-turn">
          <p className="hl-label">The same five years, inside Clear</p>
          <p className="hl-fig is-live">{money(kept)}</p>
        </div>
      </div>

      <p className="hl-note">Illustration on a $2,520 two-bedroom in Redlands. Not a quote.</p>
    </div>
  );
}
