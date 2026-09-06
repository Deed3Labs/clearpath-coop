'use client';

import { useId, useState } from 'react';
import { WATERFALL as W } from '@/content/how';

/* The signature visual for /how (visual brief §4).
 *
 * "Drawn cheapest first" is the single hardest claim on this site to make in
 * prose — it is an ordering, and orderings are what diagrams are for. One bar
 * is the purchase. Its segments are what backs it, in the order the line takes
 * them, and the slider is how much the member has saved.
 *
 * The argument is in the motion: as savings rise the expensive segments are
 * pushed off the right-hand end, and the figure above the bar walks to 100%.
 * Nobody has to be told that their third year is cheaper than their first.
 *
 * The tiers are distinguished by hatching rather than by four more colours.
 * Hatch density reads as cost without needing a key, and it keeps the accent
 * free for the one thing that matters — the part that is already yours.
 *
 * The list under the bar is the legend AND the explanation. They were two
 * lists for a while, and it printed the same four labels twice in a row. */

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function Waterfall() {
  const [saved, setSaved] = useState<number>(W.savingsStart);
  const id = useId();

  /* Fill the draw from the cheapest tier down, which is the whole claim. */
  let left = W.draw;
  const filled = W.tiers.map((t) => {
    const capacity = t.capacity ?? saved;
    const used = Math.max(0, Math.min(capacity, left));
    left -= used;
    return { ...t, used };
  });

  const yours = filled.reduce((sum, t) => sum + (t.yours ? t.used : 0), 0);
  const pct = Math.round((yours / W.draw) * 100);

  return (
    <div className="fall">
      <div className="fall-figure">
        <span className={`figure-xl${pct === 100 ? ' is-live' : ''}`}>{pct}%</span>
        <p className="t-sm figure-xl-cap">{W.captionYours}</p>
      </div>

      <div
        className="fall-bar"
        role="img"
        aria-label={filled
          .filter((t) => t.used > 0)
          .map((t) => `${money(t.used)} from ${t.label}, ${t.cost}`)
          .join('. ')}
      >
        {filled.map((t) => (
          <div
            key={t.key}
            className={`fall-seg fall-${t.key}`}
            style={{ width: `${(t.used / W.draw) * 100}%` }}
            hidden={t.used === 0}
          />
        ))}
      </div>

      <ol className="fall-key">
        {filled.map((t) => (
          <li key={t.key} className={t.used === 0 ? 'is-off' : undefined}>
            <span className={`fall-swatch fall-${t.key}`} aria-hidden="true" />
            <span className="fall-key-label">{t.label}</span>
            <span className="fall-key-amt fig">{t.used === 0 ? '—' : money(t.used)}</span>
            <span className="fall-key-cost t-note">{t.cost}</span>
            <p className="fall-key-body t-sm">{t.body}</p>
          </li>
        ))}
      </ol>

      <label className="fall-control">
        <span className="t-note">
          Your savings balance <span className="fig">{money(saved)}</span>
        </span>
        <input
          id={id}
          type="range"
          min={0}
          max={W.savingsMax}
          step={20}
          value={saved}
          onChange={(e) => setSaved(Number(e.target.value))}
          aria-label="Your savings balance"
          aria-valuetext={`${money(saved)} saved`}
        />
      </label>
    </div>
  );
}
