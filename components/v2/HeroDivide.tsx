'use client';

import { useEffect, useRef, useState } from 'react';
import { onScrollProgress, reducedMotion } from '@/lib/motion';
import { HERO } from '@/content/home';

/* The hero. Two grounds whose split moves with the scroll — no chart, no
 * axis, no legend. The share of the screen each future occupies IS the chart,
 * and the figures count with it.
 *
 * Three things were wrong with the version this replaces:
 *
 * 1. The headline used mix-blend-mode: difference so it could cross both
 *    grounds. Over clay that inverts to about #4DB5D7 — a cyan that is not in
 *    the palette and cannot be made to be. Blend modes are a way of avoiding
 *    a colour decision; the decision here is that the copy has its own
 *    ground and never crosses the boundary.
 * 2. The copy was absolutely positioned over the panels, so at some scroll
 *    positions it sat on top of the figures.
 * 3. It had no chip, no lede and no actions. It was a demo, not a hero.
 *
 * The copy now occupies a band of its own at the top and the split takes the
 * rest, so no element can ever overlap another at any scroll position or any
 * width. */

const { months, rentMonthly, equityMonthly } = HERO;

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function HeroDivide() {
  const track = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(1);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    /* Reduced motion and no-JS both land on month sixty, which is the
       finished argument. Nothing is hidden until a script runs. */
    if (reducedMotion()) return setP(1);
    return onScrollProgress(el, { edge: 'top', vh: 0 }, { edge: 'bottom', vh: 1 }, setP);
  }, []);

  const month = Math.max(1, Math.round(p * months));
  /* The clay share never drops below a floor or reaches the top: at zero it
     would be a sliver nobody reads as a ground, and at a hundred the other
     future disappears before the argument is made. */
  const clay = 16 + (month / months) * 54;

  return (
    <section className="hero" ref={track} aria-label="Rent against Clear over five years">
      <div className="hero-pin">
        <div className="hero-head">
          <div className="wrap">
            <p className="eyebrow">The gap</p>
            <h2 className="d-hard divide-h2">
              You pay for a house <em className="d-turn">either way.</em>
            </h2>
            <p className="lede hero-lede">
              Only one of them ends up being yours. Scroll, and watch five years pass.
            </p>
          </div>
        </div>

        <div className="hero-split">
          <div className="hero-side is-rent" style={{ ['--share' as string]: `${100 - clay}%` }}>
            <div className="hero-side-in">
              <p className="small">{HERO.rent.label}</p>
              <p className="figure sm">{money(rentMonthly * month)}</p>
              <p className="micro">{HERO.rent.caption}</p>
            </div>
          </div>

          <div className="hero-side is-clear" style={{ ['--share' as string]: `${clay}%` }}>
            <div className="hero-side-in">
              <p className="small">{HERO.clear.label}</p>
              <p className="figure">{money(equityMonthly * month)}</p>
              <p className="micro">{HERO.clear.caption}</p>
            </div>
          </div>

          <p className="hero-month" aria-live="off">
            Month {month} of {months}
          </p>
        </div>
      </div>
    </section>
  );
}
