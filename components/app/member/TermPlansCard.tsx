import { ClearsFromFooter } from './ClearsFromFooter';
import { CHARGE, LIMITS, ELPA } from '../data';

/* Term plans — reference "Term plans — the fixed-term shelf". §5:
   The header shows credit used of limit, and that figure is the SUM of the
   row amounts so it checks at a glance. One amount per row. Progress rides in
   the detail line as a tinted percent, never a per-row bar — no bars anywhere
   in this component. Every row states its carry rate, locked or active.
   The ELPA sits below a rule under its own label, excluded from the header
   total, and a locked ELPA shows real progress rather than a bare zero. */

export type PlanRow = {
  name: string;
  when?: string;
  amount?: string;
  locked?: boolean;
  detail: React.ReactNode;
};

export function TermPlanRow({ row }: { row: PlanRow }) {
  return (
    <div
      style={{
        padding: '11px 0',
        borderBottom: '0.5px solid var(--border)',
        opacity: row.locked ? 0.55 : 1,
      }}
    >
      <div className="rowline" style={{ marginBottom: 3 }}>
        <span style={{ fontSize: 13 }}>
          {row.name}
          {row.when && <span className="muted"> · {row.when}</span>}
        </span>
        {row.locked ? (
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Locked</span>
        ) : (
          <span style={{ fontSize: 13 }}>{row.amount}</span>
        )}
      </div>
      <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{row.detail}</p>
    </div>
  );
}

export function TermPlansCard({
  used,
  rows,
  elpa = true,
  footer = true,
}: {
  used: string;
  rows: PlanRow[];
  elpa?: boolean;
  footer?: boolean;
}) {
  return (
    <>
      <div className="rowline" style={{ marginBottom: 12 }}>
        <span className="lbl">Term plans</span>
        <span className="val">
          {used}{' '}
          <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--text-muted)' }}>
            of {LIMITS.termPlan}
          </span>
        </span>
      </div>

      <div style={{ borderTop: '0.5px solid var(--border)' }}>
        {rows.map((r) => (
          <TermPlanRow key={r.name} row={r} />
        ))}
      </div>

      {elpa && (
        <>
          <p className="cap" style={{ margin: '17px 0 3px' }}>{ELPA.groupLabel}</p>
          <div style={{ borderTop: '0.5px solid var(--border)' }}>
            <TermPlanRow
              row={{ name: ELPA.label, locked: true, detail: ELPA.progress }}
            />
          </div>
        </>
      )}

      {footer && <ClearsFromFooter />}
    </>
  );
}

/* The shelf a member sees on day one from a counter: the plan they just
   agreed to, and everything else stating its unlock condition.
   $940.00 of $3,000.00 — the row sums to the header, and the header is inside
   the limit. (§8 mockup audit) */
export const DAY_ONE_ROWS: PlanRow[] = [
  {
    name: CHARGE.merchant,
    when: 'today',
    amount: CHARGE.amount,
    detail: `${CHARGE.split.replace('split', 'Split')} · ${CHARGE.perCycle} a cycle · ${CHARGE.rateShort}`,
  },
  {
    name: 'Clear Cash™',
    locked: true,
    detail: 'Unlocks after six clean cycles · 2.5% / cycle',
  },
];

/* The direct-signup shelf: nothing running, everything locked, each row
   saying what would open it. */
export const LOCKED_ROWS: PlanRow[] = [
  {
    name: 'Partner credit',
    locked: true,
    detail: 'Unlocks with a linked account · at partner shops · 2% / cycle',
  },
  {
    name: 'Clear Cash™',
    locked: true,
    detail: 'Unlocks after six clean cycles · 2.5% / cycle',
  },
];
