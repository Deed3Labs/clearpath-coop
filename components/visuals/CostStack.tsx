import { NUMBERS } from '@/content/housing';

/* /housing S2 (visual brief §4) — two charts for the two numbers a buyer
 * actually weighs: what the house costs, and what the month costs.
 *
 * The purchase price was three figures in a row, which left the reader to do
 * the subtraction the heading is about. As bars on one scale, the fifteen per
 * cent is visibly a cap on top of a large bar and the gap to market visibly
 * is not — which is the whole claim, made before a word of it is read. */

const { bars, monthly } = NUMBERS;

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

/* A fraction of the shared scale, not a percentage — see .stack-col. */
const pc = (n: number) => String(n / bars.scale);

export function CostStack() {
  return (
    <div className="stack">
      <ol className="stack-bars">
        <li>
          <span className="stack-col">
            <span className="stack-bar" style={{ ['--h' as string]: pc(bars.build) }}>
              <span className="stack-fill is-build" />
            </span>
          </span>
          <span className="fig stack-amt">{money(bars.build)}</span>
          <span className="t-sm stack-label">{bars.labels.build}</span>
        </li>

        {/* The member's price is the same bar with the margin drawn as its own
            segment on top, so "plus fifteen per cent" is a thing you can see
            the size of rather than a percentage you have to picture. */}
        <li>
          <span className="stack-col">
            <span className="stack-bar" style={{ ['--h' as string]: pc(bars.member) }}>
              <span
                className="stack-fill is-margin"
                style={{ height: `${(bars.margin / bars.member) * 100}%` }}
              />
              <span className="stack-fill is-build" />
            </span>
          </span>
          <span className="fig stack-amt is-live">{money(bars.member)}</span>
          <span className="t-sm stack-label">
            {bars.labels.member}
            <span className="stack-sub t-note">
              {bars.labels.margin} · {money(bars.margin)}
            </span>
          </span>
        </li>

        <li>
          <span className="stack-col">
            <span className="stack-bar" style={{ ['--h' as string]: pc(bars.market) }}>
              <span className="stack-fill is-market" />
            </span>
          </span>
          <span className="fig stack-amt is-muted">~{money(bars.market)}</span>
          <span className="t-sm stack-label">{bars.labels.market}</span>
        </li>
      </ol>
    </div>
  );
}

/* The running cost, as two ranges on one scale rather than a stacked bar. The
 * brief gives an all-in band and a rental band; inventing a line-by-line
 * breakdown to fill a stack would put figures on this page nobody has stood
 * behind. A range drawn as a range is also just more honest than a midpoint. */
export function MonthlyRange() {
  const at = (n: number) => `${(n / monthly.scale) * 100}%`;

  return (
    <div className="mrange">
      <p className="t-note mrange-cap">{monthly.caption}</p>
      <ol className="mrange-rows">
        {monthly.rows.map((row) => (
          <li key={row.label}>
            <span className="t-sm mrange-label">{row.label}</span>
            <span className="mrange-track">
              <span
                className={`mrange-band${row.live ? ' is-live' : ''}`}
                style={{ left: at(row.from), width: at(row.to - row.from) }}
              />
            </span>
            <span className="fig mrange-amt">
              {money(row.from)}–{money(row.to)}
            </span>
            <span className="t-note mrange-note">{row.note}</span>
          </li>
        ))}
      </ol>
      <div className="mrange-axis" aria-hidden="true">
        <span>$0</span>
        <span>{money(monthly.scale)}</span>
      </div>
    </div>
  );
}
