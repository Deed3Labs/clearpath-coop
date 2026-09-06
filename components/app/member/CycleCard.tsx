import { CheckCircle } from '../Icons';
import type { CycleState } from '../data';

/* Cycle card — reference "Cycle — four states". §5:
   Two rows, a divider, large numeral countdown right. The border carries the
   state: accent when short, default when covered, green ONLY when everything
   is at zero. Carrying secured credit is a default border, not green.
   The label never changes and the number never becomes prose — nothing to
   clear reads $0.00, so the eye lands in the same place every time.
   No progress bar: bars were rejected here repeatedly. */

const STATES: Record<
  CycleState,
  { amount: string; border: string; detail: React.ReactNode; button: string | null }
> = {
  short: {
    amount: '$700.00',
    border: 'var(--border-accent)',
    button: 'Repay',
    detail: (
      <>
        <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Nov 1 deposit covers $500.00</p>
        <p style={{ fontSize: 12, color: 'var(--text-accent)', marginTop: 2 }}>$200.00 short</p>
      </>
    ),
  },
  covered: {
    amount: '$700.00',
    border: 'var(--border)',
    button: 'Repay early',
    detail: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-success)' }}>
        <CheckCircle />
        <span style={{ fontSize: 13 }}>Nov 1 deposit covers it</span>
      </span>
    ),
  },
  'own-savings': {
    amount: '$0.00',
    border: 'var(--border)',
    button: 'Top off',
    detail: (
      <>
        <p style={{ fontSize: 13 }}>Using $5,400.00 of your own savings</p>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>
          Nothing owed · credits paused while drawn · carry $10.40
        </p>
      </>
    ),
  },
  clear: {
    amount: '$0.00',
    border: 'var(--tier-asset)',
    button: null,
    detail: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--text-success)' }}>
        <CheckCircle />
        <span style={{ fontSize: 13 }}>All clear · nothing carried</span>
      </span>
    ),
  },
};

export function CycleCard({ state }: { state: CycleState }) {
  const s = STATES[state];
  return (
    <div className="card" style={{ borderColor: s.border, padding: '14px 18px' }}>
      <div className="rowline" style={{ alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>To clear this cycle</p>
          <p style={{ fontSize: 22, fontWeight: 500, marginTop: 3 }}>{s.amount}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 26, fontWeight: 500, lineHeight: 1 }}>6</p>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>days left</p>
        </div>
      </div>
      <div
        style={{
          borderTop: '0.5px solid var(--border)',
          marginTop: 13,
          paddingTop: 12,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div>{s.detail}</div>
        {s.button && (
          <button type="button" className="btn-a" style={{ flexShrink: 0 }} tabIndex={-1}>
            {s.button}
          </button>
        )}
      </div>
    </div>
  );
}
