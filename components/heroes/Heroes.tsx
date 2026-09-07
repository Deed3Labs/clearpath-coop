'use client';

import { useEffect, useRef, useState } from 'react';
import { onScrollProgress, reducedMotion } from '@/lib/motion';

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

/* ── A — THE FIELD ─────────────────────────────────────────────────────────
   Full-bleed clay, white type, centred. The single biggest departure: the
   brand colour IS the ground rather than an accent rationed to one element.
   The two numbers sit on a card floating on top of the colour, which is what
   gives the section depth without a drawing in it. */
export function HeroField() {
  return (
    <section className="field clay hero-field">
      <div className="wrap center">
        <span className="chip on-dark">A cooperative in Redlands, California</span>
        <h1 className="display hero-field-h1">
          Rent builds equity.
          <br />
          <em>Just not yours.</em>
        </h1>
        <p className="lede">
          What you pay for a place to live ends up being yours.
        </p>

        <div className="hero-field-cards">
          <div className="card">
            <p className="small">Five years of rent</p>
            <p className="figure sm">{money(151200)}</p>
            <p className="micro">and nothing to show for it</p>
          </div>
          <div className="card raised hero-field-hero-card">
            <p className="small">The same five years, inside Clear</p>
            <p className="figure">{money(90000)}</p>
            <p className="micro">equity you keep</p>
          </div>
        </div>

        <div className="hero-actions">
          <a className="btn on-dark" href="/join">Join as a member</a>
          <a className="btn ghost on-ghost" href="/shops">Bring Clear to your shop</a>
        </div>
      </div>
    </section>
  );
}

/* ── B — THE STACK ─────────────────────────────────────────────────────────
   Bone ground, left-aligned, and the argument is carried by cards with real
   elevation rather than by rules. One card is pressed flat into the page and
   one lifts off it — the depth itself is the difference between the two
   futures, which is a thing the old flat system could not say. */
export function HeroStack() {
  return (
    <section className="hero-stack">
      <div className="wrap hero-stack-grid">
        <div>
          <span className="chip">One membership, three things it does</span>
          <h1 className="display hero-stack-h1">
            Rent builds equity. <em>Just not yours.</em>
          </h1>
          <p className="lede">
            A cooperative where what you pay for a place to live ends up being yours.
          </p>
          <div className="hero-actions">
            <a className="btn" href="/join">Join as a member</a>
            <a className="btn ghost" href="/shops">Bring Clear to your shop</a>
          </div>
        </div>

        <div className="hero-stack-cards">
          <div className="card hero-flat">
            <p className="small">Renting, five years</p>
            <p className="figure sm">{money(151200)}</p>
            <p className="micro">paid out · nothing retained</p>
          </div>
          <div className="card clay raised hero-lift">
            <p className="small" style={{ color: 'rgb(255 255 255 / .8)' }}>
              Inside Clear, five years
            </p>
            <p className="figure">{money(90000)}</p>
            <p className="micro" style={{ color: 'rgb(255 255 255 / .72)' }}>
              equity you keep
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── C — THE DIVIDE ────────────────────────────────────────────────────────
   The screen splits into two grounds and the split MOVES with the scroll:
   the clay side grows as the months pass. No chart, no axis, no legend — the
   proportion of the screen each future occupies is the chart. Indexed to the
   scroll rather than autoplaying, which is the thing Jeton actually does. */
export function HeroDivide() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) return setP(1);
    return onScrollProgress(el, { edge: 'top', vh: 0 }, { edge: 'bottom', vh: 1 }, setP);
  }, []);

  const month = Math.max(1, Math.round(p * 60));
  /* The clay side is the share of the five years already elapsed, floored so
     it is always visibly present rather than a sliver. */
  const share = 18 + (month / 60) * 52;

  return (
    <div className="hero-divide" ref={ref}>
      <div className="hero-divide-pin">
        <div className="hero-divide-a" style={{ ['--share' as string]: `${100 - share}%` }}>
          <div className="hero-divide-inner">
            <p className="small">Renting</p>
            <p className="figure sm">{money(2520 * month)}</p>
            <p className="micro">paid out</p>
          </div>
        </div>

        <div className="hero-divide-b" style={{ ['--share' as string]: `${share}%` }}>
          <div className="hero-divide-inner">
            <p className="small" style={{ color: 'rgb(255 255 255 / .8)' }}>Inside Clear</p>
            <p className="figure">{money(1500 * month)}</p>
            <p className="micro" style={{ color: 'rgb(255 255 255 / .72)' }}>equity you keep</p>
          </div>
        </div>

        <div className="hero-divide-copy">
          <h1 className="display">
            Rent builds equity. <em>Just not yours.</em>
          </h1>
          <p className="micro hero-divide-month">Month {month} of 60</p>
        </div>
      </div>
    </div>
  );
}
