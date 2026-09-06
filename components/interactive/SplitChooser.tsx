'use client';

import { useState } from 'react';
import { SPLIT } from '@/content/how';

/* §6.2 S4 — a segmented control, a row of bars, and a five-row ledger.
 *
 * The bars measure CARRY, not the total. Four totals would be four bars of
 * near-identical length — $958.80 against $1,062.20 is a tenth — and the chart
 * would quietly say the choice barely matters. Carry is what the choice
 * actually moves, and it moves by a factor of six.
 *
 * The figures are declining-balance and are never recomputed here from a flat
 * rate: flat carry would cost the same whether the plan is cleared in month
 * one or month four, which contradicts the one line that separates this from
 * buy-now-pay-later. */

const dollars = (s: string) => Number(s.replace(/[$,]/g, ''));

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

      {/* The visual leads the ledger: what spreading costs, before the table
          of what it costs. */}
      <ol className="splitbars" aria-hidden="true">
        {SPLIT.options.map((o) => (
          <li key={o.key} className={o.key === key ? 'is-on' : undefined}>
            <span className="splitbar-label t-note">{o.label}</span>
            <span className="splitbar-track">
              <span
                className="splitbar-fill"
                style={{ width: `${(dollars(o.carryPlan) / SPLIT.barMax) * 100}%` }}
              />
            </span>
            <span className="splitbar-amt fig">{o.carryPlan}</span>
          </li>
        ))}
      </ol>
      <p className="t-note splitbar-cap">Carry over the whole plan</p>

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
