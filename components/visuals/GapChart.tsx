'use client';

import { useId, useState } from 'react';

/* The flagship (visual brief §4, Home).
 *
 * Sixty months across the bottom. Two pairs of lines: what you PAY OUT, which
 * is nearly identical either way, and what you KEEP, which is not. Four lines,
 * one obvious shape — you pay the same and one of you ends with nothing.
 *
 * The argument only works because the paid-out pair sits almost on top of each
 * other. That near-coincidence is the point, so the two are drawn at the same
 * weight and neither is highlighted; the eye is meant to read them as one line
 * until it notices the gap below.
 *
 * The plot is a 100×100 box stretched to whatever the column is, with
 * non-scaling strokes — so the chart's HEIGHT is set in CSS rather than
 * inherited from its width. A fixed viewBox aspect made this 136px tall at
 * 390px, where four lines that nearly coincide cannot be told apart, and shrank
 * the axis type to 45% of its size along with it. Stretching a straight line
 * changes its slope and nothing else, and the dots and labels are HTML on top,
 * so they stay round and legible at every width.
 *
 * Mobile (§6): the chart stays horizontal but drops to three lines — the
 * dashed Clear-paid line goes and the readout states that figure instead.
 * Dropping BOTH paid-out lines was the first attempt and it was wrong: the
 * y-scale is set by the rent line, so removing it left the top two thirds of
 * the frame empty with nothing to explain the emptiness. */

const MONTHS = 60;
const RENT = 2520;
const CLEAR_TOTAL = 2350;
const CLEAR_EQUITY = 1500;

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

/* One y-scale for all four lines, or the comparison is a lie. */
const MAX = RENT * MONTHS;

/* Percent of the plot box, top-left origin for SVG, bottom-left for the HTML
   layer above it. */
const px = (m: number) => (m / MONTHS) * 100;
const py = (v: number) => (1 - v / MAX) * 100;
const line = (perMonth: number) => `M 0 100 L 100 ${py(perMonth * MONTHS)}`;

export function GapChart() {
  const [month, setMonth] = useState(60);
  const id = useId();

  const rentPaid = RENT * month;
  const clearPaid = CLEAR_TOTAL * month;
  const clearKept = CLEAR_EQUITY * month;

  return (
    <div className="gap">
      <div className="gap-plot">
        <div className="gap-frame">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="gap-svg"
            role="img"
            aria-label={`Over ${month} months, renting pays out ${money(rentPaid)} and keeps nothing. Inside Clear the same period pays out ${money(clearPaid)} and keeps ${money(clearKept)} in equity.`}
          >
            <g fill="none" vectorEffect="non-scaling-stroke">
              {/* Baseline only. A grid would imply a precision these figures
                  do not have — they are an illustration, and the shape is the
                  claim. */}
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="100"
                stroke="var(--color-ink-28)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />

              {/* Paid out — the pair that nearly coincides. Same weight, no
                  accent: they are supposed to read as one line. */}
              <path
                className="gap-l-paid"
                d={line(RENT)}
                stroke="var(--color-ink-50)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                className="gap-l-paid gap-l-dash"
                d={line(CLEAR_TOTAL)}
                stroke="var(--color-ink-50)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                vectorEffect="non-scaling-stroke"
              />

              {/* Kept. Renting keeps nothing, which is a line ON the baseline —
                  drawn heavier so it reads as a line rather than as the axis. */}
              <path
                d="M 0 100 L 100 100"
                stroke="var(--color-ink)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={line(CLEAR_EQUITY)}
                stroke="var(--color-live)"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>

          {/* Where the reader is. HTML, so the dots stay circular however wide
              the column gets. */}
          <div className="gap-head" style={{ ['--x' as string]: `${px(month)}%` }} aria-hidden="true">
            <i className="gap-dot is-live" style={{ ['--y' as string]: `${100 - py(clearKept)}%` }} />
            <i className="gap-dot" style={{ ['--y' as string]: '0%' }} />
          </div>
        </div>

        <div className="gap-axis" aria-hidden="true">
          <span>month 0</span>
          <span>60</span>
        </div>

        <ul className="gap-key">
          <li>
            <i className="k-paid" />
            Paid out — renting
          </li>
          <li>
            <i className="k-paid k-dash" />
            Paid out — inside Clear
          </li>
          <li>
            <i className="k-kept-rent" />
            Kept — renting
          </li>
          <li>
            <i className="k-kept-clear" />
            Kept — inside Clear
          </li>
        </ul>
      </div>

      <div className="gap-read">
        <div className="gap-read-row">
          <div>
            <p className="t-note">Paid out</p>
            <p className="gap-fig">{money(rentPaid)}</p>
            <p className="t-note gap-sub">renting · {money(clearPaid)} inside Clear</p>
          </div>
          <div>
            <p className="t-note">Kept</p>
            <p className="gap-fig is-live">{money(clearKept)}</p>
            <p className="t-note gap-sub">inside Clear · {money(0)} renting</p>
          </div>
        </div>

        <label className="gap-control">
          <span className="t-note">
            Month <span className="fig">{String(month).padStart(2, '0')}</span> of 60
          </span>
          <input
            id={id}
            type="range"
            min={1}
            max={MONTHS}
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            aria-label="Months elapsed"
            aria-valuetext={`Month ${month} of 60`}
          />
        </label>
      </div>
    </div>
  );
}
