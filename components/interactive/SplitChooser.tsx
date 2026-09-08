'use client';

import { useState } from 'react';
import { SPLIT } from '@/content/how';

/* §6.2 S4 — a segmented control against a five-row ledger.
 *
 * No bars: splits are counts, not ratios, and a bar would imply a proportion
 * that does not exist. The figures are declining-balance and are never
 * recomputed here from a flat rate — flat carry would cost the same whether
 * the plan is cleared in month one or month four, which contradicts the one
 * line that separates this from buy-now-pay-later. */

type Option = (typeof SPLIT.options)[number];
type Field = Exclude<keyof Option, 'key' | 'label' | 'cycles'>;

export function SplitChooser() {
  const [key, setKey] = useState<string>('4');
  const active = SPLIT.options.find((o) => o.key === key) ?? SPLIT.options[2];

  return (
    <div className="chooser">
      {/* What is being divided, stated before the control that divides it.
          The figure used to appear once, in the last line under the ledger. */}
      <div className="chooser-balance">
        <p className="chooser-balance-label t-sm">{SPLIT.balance.label}</p>
        <p className="chooser-balance-fig fig">{SPLIT.balance.figure}</p>
      </div>

      <div className="chooser-control" role="group" aria-label="How to clear it">
        {SPLIT.options.map((o) => {
          const on = o.key === key;
          return (
            <button
              key={o.key}
              type="button"
              className="chooser-option"
              aria-pressed={on}
              onClick={() => setKey(o.key)}
            >
              {o.label}
            </button>
          );
        })}
      </div>

      {/* The balance cut into equal parts. The section note says no bars,
          because a bar implies a proportion — but N equal segments is a
          count, which is exactly what a split is. The reading is carried by
          the caption; the bar is decoration for it, hence aria-hidden. */}
      <div className="chooser-split">
        <div className="chooser-split-bar" aria-hidden="true">
          {Array.from({ length: active.cycles }, (_, i) => (
            <span key={i} />
          ))}
        </div>
        <p className="chooser-split-cap t-sm">
          {active.cycles === 1
            ? `One payment of ${active.each}`
            : `${active.cycles} payments of ${active.each}`}
        </p>
      </div>

      {/* aria-live so a change announces the figures rather than silently
          swapping them under a screen-reader user. */}
      <dl className="ledger chooser-ledger" aria-live="polite">
        {SPLIT.rows.map((row) => (
          <div className="ledger-row" key={row.label}>
            <dt className="t-sm">{row.label}</dt>
            <dd className={`fig${row.field === 'total' ? ' is-live' : ''}`}>
              {active[row.field as Field]}
            </dd>
          </div>
        ))}
      </dl>

      <p className="t-note chooser-caption">{SPLIT.caption}</p>
      <p className="t-sm chooser-close">{SPLIT.close}</p>
    </div>
  );
}
