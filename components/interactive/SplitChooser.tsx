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
type Field = Exclude<keyof Option, 'key' | 'label'>;

export function SplitChooser() {
  const [key, setKey] = useState<string>('4');
  const active = SPLIT.options.find((o) => o.key === key) ?? SPLIT.options[2];

  return (
    <div className="chooser">
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
