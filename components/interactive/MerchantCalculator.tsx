'use client';

import { useState } from 'react';
import { Stat } from '@/components/primitives';
import { DIFFERENCE } from '@/content/shops';

/* §6.3 S2 — a range against four Stats.
 *
 * A Stat is a rule, a figure and a caption, never a boxed card, so the four
 * read as a row of measurements rather than a dashboard.
 *
 * The arithmetic: a 6% provider takes v × 0.06, Clear takes v × 0.025, and the
 * difference over a year is v × 0.035 × 12. Six is the LOW end of the 6–12%
 * spread the copy names — pay-in-four sits there, the long 0% promotions and
 * the no-credit-needed tiers run higher. Comparing against a competitor's
 * cheapest product is the only version of this figure nobody can pick apart.
 * Klarna's 30 cents a transaction is deliberately not modelled — it needs a
 * transaction count nobody has entered, and guessing one would make the
 * comparison look precise when it is an illustration. */

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
      <label className="calc-field">
        <span className="t-note">Financed through Clear each month</span>
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

      <div className="calc-stats" aria-live="polite">
        <Stat figure={money(volume)} caption={DIFFERENCE.stats[0].caption} />
        <Stat figure={money(theirs)} caption={DIFFERENCE.stats[1].caption} muted />
        <Stat figure={money(ours)} caption={DIFFERENCE.stats[2].caption} />
        <Stat figure={money(kept)} caption={DIFFERENCE.stats[3].caption} live />
      </div>
    </div>
  );
}
