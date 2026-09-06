import { Check } from '../Icons';
import { ELPA } from '../data';

/* Credits progress and the five milestones — §7.4 S5, "the gate".
   The locked ELPA row shows real progress, never a bare zero: a member who
   cannot see the date they are on track for cannot tell whether the path is
   real. */

const MILESTONES = [
  { label: 'Open your account', note: 'Your deposit is your share', done: true },
  { label: 'Link a bank account', note: 'Unlocks partner credit at Clear shops', done: true },
  { label: 'Six clean cycles', note: 'Unlocks Clear Cash™', done: false, now: true },
  { label: '15,000 equity credits', note: 'Unlocks the Equity-Lease Participation Agreement', done: false },
  { label: 'Sign your Clear Deed', note: 'You hold the structure; the co-op holds the land', done: false },
];

export function MilestoneRow() {
  return (
    <>
      <p className="cap">Equity credits</p>
      <div className="rowline" style={{ alignItems: 'baseline', marginBottom: 3 }}>
        <span style={{ fontSize: 26, fontWeight: 500 }}>1,500</span>
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>of 15,000</span>
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginBottom: 16 }}>
        On track for Feb 2028
      </p>

      <div style={{ borderTop: '0.5px solid var(--border)' }}>
        {MILESTONES.map((m) => (
          <div
            key={m.label}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              padding: '11px 0',
              borderBottom: '0.5px solid var(--border)',
              opacity: m.done || m.now ? 1 : 0.55,
            }}
          >
            <span
              style={{
                width: 15,
                flexShrink: 0,
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 2,
                color: m.done ? 'var(--text-success)' : 'var(--text-muted)',
              }}
            >
              {m.done ? (
                <Check size={13} width={2.6} />
              ) : (
                <i
                  aria-hidden="true"
                  style={{
                    width: 7, height: 7, borderRadius: '50%', display: 'block',
                    border: '1.5px solid currentColor',
                    background: m.now ? 'currentColor' : 'transparent',
                  }}
                />
              )}
            </span>
            <span style={{ minWidth: 0 }}>
              <p style={{ fontSize: 13 }}>{m.label}</p>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2, lineHeight: 1.5 }}>{m.note}</p>
            </span>
          </div>
        ))}
      </div>

      <div style={{ paddingTop: 11, opacity: 0.55 }}>
        <div className="rowline" style={{ marginBottom: 3 }}>
          <span style={{ fontSize: 13 }}>{ELPA.label}</span>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Locked</span>
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{ELPA.progress}</p>
      </div>
    </>
  );
}
