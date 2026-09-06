import { TermPlansCard, DAY_ONE_ROWS, LOCKED_ROWS } from './TermPlansCard';
import { CHARGE } from '../data';

/* Day one — two arrivals, two screens. Reference: "Day one — two arrivals".
   §7.2 S1: same components, reversed order. The counter path leads with the
   plan, because it is why they are here, and puts savings directly beneath
   where the cost of not saving is visible against a real number. The direct
   path leads with saving, because there is nothing else, and the locked shelf
   sits below showing what saving unlocks. */

export type Arrival = 'counter' | 'direct';

export function HomeScreen({ arrival }: { arrival: Arrival }) {
  const counter = arrival === 'counter';

  const savings = counter ? (
    <div className="card accent" style={{ padding: '12px 14px' }}>
      <p className="cap" style={{ color: 'var(--text-accent)', margin: '0 0 5px' }}>Make this free</p>
      <p style={{ fontSize: 12, marginBottom: 11, lineHeight: 1.6 }}>
        Borrowing against your own savings costs nothing. You&rsquo;re paying <strong>2%</strong>{' '}
        because there&rsquo;s nothing behind it yet.
      </p>
      <button type="button" className="btn-a prim block" style={{ padding: '6px 0' }} tabIndex={-1}>
        Start saving
      </button>
    </div>
  ) : (
    <div className="card accent" style={{ padding: '12px 14px', marginBottom: 10 }}>
      <p style={{ fontSize: 12, fontWeight: 500, marginBottom: 4 }}>Start with anything</p>
      <p className="sub" style={{ marginBottom: 11, lineHeight: 1.6 }}>
        Saving is what makes everything else free. Most members start at $25 a paycheck.
      </p>
      <button type="button" className="btn-a prim block" style={{ padding: '6px 0' }} tabIndex={-1}>
        Set up auto-save
      </button>
    </div>
  );

  const shelf = (
    <div className="card" style={{ padding: '12px 14px', marginBottom: counter ? 10 : 0 }}>
      {counter ? (
        <TermPlansCard used={CHARGE.amount} rows={DAY_ONE_ROWS} elpa={false} />
      ) : (
        <>
          <div className="rowline" style={{ marginBottom: 11 }}>
            <span className="lbl" style={{ fontSize: 12 }}>Term plans</span>
            <span className="val muted">$0.00</span>
          </div>
          <div style={{ borderTop: '0.5px solid var(--border)' }}>
            {LOCKED_ROWS.map((r) => (
              <div key={r.name} style={{ padding: '10px 0', borderBottom: '0.5px solid var(--border)', opacity: 0.55 }}>
                <div className="rowline" style={{ marginBottom: 3 }}>
                  <span style={{ fontSize: 13 }}>{r.name}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Locked</span>
                </div>
                <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{r.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '0.5px solid var(--border)', marginTop: 9, paddingTop: 9 }}>
            <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>Nothing scheduled yet</p>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <p className="cap">{counter ? 'From a counter' : 'Signed up directly'}</p>
      <p className="sub" style={{ marginBottom: 4 }}>Available to spend</p>
      <p className="big-m muted">$0.00</p>
      <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '2px 0 12px' }}>Nothing saved yet</p>

      {counter ? (
        <>
          {shelf}
          {savings}
        </>
      ) : (
        <>
          {savings}
          {shelf}
        </>
      )}
    </>
  );
}
