/* Credit line + available to spend — a crop for §7.2 S2 (draw order).
   Reference: "Limit breakdown (sub-view of Home)", reduced to what the site
   is allowed to show.

   The tier RATES here are what a member PAYS to borrow, which the brief
   requires on the draw-order page ("every rate is shown on the screen where
   you take it"). They are not rates of return, which is what §5 forbids —
   no yield, no APY, no pool rate, and no Earn screen anywhere. */

const TIERS = [
  { dot: 'var(--tier-cash)',        name: 'Your own savings',        amount: '$3,000.00',  note: 'Fully backed · free' },
  { dot: 'var(--tier-asset)',       name: 'Bonds and pool shares',   amount: '$8,300.00',  note: 'Held at a discount to value today' },
  { dot: 'var(--tier-income-text)', name: 'Your income',             amount: '$1,000.00',  note: 'Read from your accounts · 1.5% a cycle' },
  { dot: 'var(--tier-boost-text)',  name: 'Clear Boost™',            amount: 'Not added',  note: 'Opt-in · 3% a cycle', dim: true },
];

export function CreditCard() {
  return (
    <>
      <p className="sub" style={{ marginBottom: 4 }}>Available to spend</p>
      <p className="big">$12,300.00</p>
      <p style={{ fontSize: 11.5, color: 'var(--text-muted)', margin: '2px 0 14px' }}>
        Drawn cheapest first, from the top
      </p>

      <div style={{ borderTop: '0.5px solid var(--border)' }}>
        {TIERS.map((t) => (
          <div
            key={t.name}
            style={{ padding: '10px 0', borderBottom: '0.5px solid var(--border)', opacity: t.dim ? 0.55 : 1 }}
          >
            <div className="rowline" style={{ marginBottom: 2 }}>
              <span style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 7 }}>
                <i
                  aria-hidden="true"
                  style={{ width: 7, height: 7, borderRadius: '50%', background: t.dot, display: 'block' }}
                />
                {t.name}
              </span>
              <span style={{ fontSize: 13 }}>{t.amount}</span>
            </div>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', paddingLeft: 14 }}>{t.note}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 11, lineHeight: 1.6 }}>
        Repayment runs the other way — the most expensive part unwinds first.
      </p>
    </>
  );
}
