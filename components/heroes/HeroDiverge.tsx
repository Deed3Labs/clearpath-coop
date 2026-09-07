'use client';

import { useEffect, useRef, useState } from 'react';
import { onScrollProgress, reducedMotion } from '@/lib/motion';
import { HERO } from '@/content/home';

/* DIRECTION C — THE DIVERGENCE.
 *
 * Indexed to the scroll rather than autoplaying, which is the thing Jeton
 * gets right: the reader drives it, nothing runs at them, and the pace is
 * theirs. Scrolling advances the clock — sixty months — and two lines leave
 * the same origin. One never leaves the floor. The figures count with the
 * lines, so the number and the shape arrive together.
 *
 * One accent against neutral, same as Jeton's single red: cobalt is the line
 * that climbs and nothing else on the screen is allowed to use it.
 *
 * Reduced motion and no-JS both land on month sixty — the finished state,
 * which is the argument. Nothing here is hidden until a script runs. */

const MONTHS = 60;
const RENT = 2520;
const EQUITY = 1500;
const MAX = RENT * MONTHS;

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

/* Percent of the plot box. */
const px = (m: number) => (m / MONTHS) * 100;
const py = (v: number) => (1 - v / MAX) * 100;

export function HeroDiverge() {
  const frame = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(1);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    if (reducedMotion()) {
      setP(1);
      return;
    }
    return onScrollProgress(el, { edge: 'top', vh: 0 }, { edge: 'bottom', vh: 1 }, setP);
  }, []);

  const month = Math.max(1, Math.round(p * MONTHS));
  const paid = RENT * month;
  const kept = EQUITY * month;

  return (
    <div className="hl-diverge" ref={frame}>
      <div className="hl-pin">
        <div className="hl-diverge-copy">
          <h1 className="hl-h1">
            {HERO.headline.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h1>
          <p className="hl-month">
            Month <span className="hl-month-n">{String(month).padStart(2, '0')}</span> of 60
          </p>
        </div>

        <div className="hl-plot">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="hl-svg" aria-hidden="true">
            <line x1="0" y1="100" x2="100" y2="100" stroke="var(--color-ink-28)" strokeWidth="1"
              vectorEffect="non-scaling-stroke" />
            {/* What you pay out. Same either way, so it is drawn once and
                quietly — it is the ceiling, not the argument. */}
            <path d={`M 0 100 L ${px(month)} ${py(paid)}`} fill="none" stroke="var(--color-ink-28)"
              strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            {/* Renting keeps nothing: a line that never leaves the floor. */}
            <path d={`M 0 100 L ${px(month)} 100`} fill="none" stroke="var(--color-ink)"
              strokeWidth="2" vectorEffect="non-scaling-stroke" />
            {/* The one line allowed to use the accent. */}
            <path d={`M 0 100 L ${px(month)} ${py(kept)}`} fill="none" stroke="var(--color-live)"
              strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          </svg>

          <span className="hl-dot is-live"
            style={{ left: `${px(month)}%`, bottom: `${100 - py(kept)}%` }} aria-hidden="true" />
          <span className="hl-dot" style={{ left: `${px(month)}%`, bottom: '0%' }} aria-hidden="true" />

          <div className="hl-readout">
            <div>
              <p className="hl-label">Paid out</p>
              <p className="hl-fig is-small">{money(paid)}</p>
            </div>
            <div>
              <p className="hl-label">Yours</p>
              <p className="hl-fig is-small is-live">{money(kept)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
