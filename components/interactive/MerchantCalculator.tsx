'use client';

import { useState } from 'react';
import { DIFFERENCE } from '@/content/shops';

/* §6.3 S2 — a range against one large figure and three supporting ones.
 *
 * The four Stats used to sit at equal weight, which made the reader do the
 * subtraction themselves. What is kept over a year is the only figure a shop
 * owner is actually deciding on, so it is set at figure size and the other
 * three become the ledger that explains where it came from.
 *
 * The arithmetic is the brief's: a six per cent provider takes v × 0.06, Clear
 * takes v × 0.025, and the difference over a year is v × 0.035 × 12. Klarna's
 * 30 cents a transaction is deliberately not modelled — it needs a transaction
 * count nobody has entered, and guessing one would make the comparison look
 * precise when it is an illustration. */

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });

export function MerchantCalculator() {
  const { range } = DIFFERENCE;
  const [volume, setVolume] = useState<number>(range.initial);

  const theirs = volume * 0.06;
  const ours = volume * 0.025;
  const kept = volume * 0.035 * 12;

  return (
    <div className="calc">
      <div className="calc-figure">
        <span className="figure-xl is-live">{money(kept)}</span>
        <p className="t-sm figure-xl-cap">{DIFFERENCE.stats[3].caption}</p>
      </div>

      <div className="calc-side">
        <label className="calc-field">
          <span className="t-note">{DIFFERENCE.stats[0].caption}</span>
          <input
            type="range"
            min={range.min}
            max={range.max}
            step={range.step}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-valuetext={money(volume)}
          />
        </label>

        <dl className="ledger calc-ledger" aria-live="polite">
          <div className="ledger-row">
            <dt className="t-sm">{DIFFERENCE.stats[0].caption}</dt>
            <dd className="fig">{money(volume)}</dd>
          </div>
          <div className="ledger-row">
            <dt className="t-sm">{DIFFERENCE.stats[1].caption}</dt>
            <dd className="fig is-muted">{money(theirs)}</dd>
          </div>
          <div className="ledger-row">
            <dt className="t-sm">{DIFFERENCE.stats[2].caption}</dt>
            <dd className="fig">{money(ours)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
