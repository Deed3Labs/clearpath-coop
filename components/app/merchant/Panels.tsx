import { PAYOUTS, CHARGE } from '../data';

/* Charges list, payouts, terms, refund and the directory listing.
   References 06, 07, 13, 16 and 12. Net-30 throughout — §8 forbids publishing
   net-14 anywhere, and on the site it would become the opening position. */

/* §7.3 S4 — waiting rows sort to the top and are tinted, each row names the
   staff member who raised it, and expired is a visible state rather than a
   silent disappearance. */
export function ChargesList() {
  const rows = [
    { name: 'Dana R.', meta: '2:14pm · Jen · sent by text, email, app', amount: CHARGE.amount, status: 'Waiting', waiting: true },
    { name: 'Marcus T.', meta: '11:02am · Jen · split in 4', amount: '$412.00', status: 'Confirmed' },
    { name: 'Priya S.', meta: '9:47am · Luis · in full', amount: '$188.00', status: 'Confirmed' },
    { name: 'Ray C.', meta: 'Yesterday · Luis · split in 2', amount: '$1,240.00', status: 'Confirmed' },
    { name: 'Tom B.', meta: 'Yesterday · Jen', amount: '$310.00', status: 'Expired', expired: true },
  ];

  return (
    <>
      <div className="rowline" style={{ marginBottom: 14, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <button type="button" className="btn-a on" style={{ fontSize: 12 }} tabIndex={-1}>Waiting · 1</button>
          <button type="button" className="btn-a" style={{ fontSize: 12 }} tabIndex={-1}>Today</button>
          <button type="button" className="btn-a" style={{ fontSize: 12 }} tabIndex={-1}>This month</button>
        </div>
        <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>4 charges today · $1,840.00</span>
      </div>

      <div className="card" style={{ padding: '0 16px' }}>
        {rows.map((r) => (
          <div
            key={r.name}
            className="trow"
            style={r.waiting ? { background: 'var(--bg-accent)', margin: '0 -16px', padding: '12px 16px' } : undefined}
          >
            <div>
              <div style={{ fontWeight: r.waiting ? 500 : 400 }}>{r.name}</div>
              <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>{r.meta}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={r.expired ? { color: 'var(--text-muted)' } : undefined}>{r.amount}</span>
              {r.waiting ? (
                <span className="pill pend">Waiting</span>
              ) : (
                <span style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>{r.status}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* §7.3 S6 — available today $2,400.00 of $3,030.00. Withdrawal is capped by
   what the pool holds and says so, rather than failing silently. The bar is a
   composition of three states of the same money, not a progress bar. */
export function PayoutsPanel() {
  return (
    <div className="g2">
      <div>
        <p className="cap" style={{ margin: '0 0 3px' }}>Available today</p>
        <p className="big">{PAYOUTS.availableToday}</p>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '5px 0 14px' }}>
          of {PAYOUTS.ofTotal} owed · {PAYOUTS.releasesLater} releases {PAYOUTS.releaseDate}
        </p>

        <div className="comp" aria-hidden="true">
          <span style={{ flex: 2400, background: 'var(--tier-free)' }} />
          <span style={{ flex: 630, background: 'var(--tier-locked)' }} />
        </div>

        <div style={{ marginTop: 14, borderTop: '0.5px solid var(--border)' }}>
          <div className="trow">
            <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <i aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tier-free)', display: 'block' }} />
              <span>
                <span style={{ display: 'block' }}>Released and ready</span>
                <span style={{ display: 'block', fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>Free to move today</span>
              </span>
            </span>
            <span>{PAYOUTS.availableToday}</span>
          </div>
          <div className="trow" style={{ opacity: 0.6 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <i aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tier-locked)', display: 'block' }} />
              <span>
                <span style={{ display: 'block' }}>Releases {PAYOUTS.releaseDate}</span>
                <span style={{ display: 'block', fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>On your next payout</span>
              </span>
            </span>
            <span>{PAYOUTS.releasesLater}</span>
          </div>
        </div>

        <button type="button" className="btn-a prim block" style={{ padding: '13px 0', fontSize: 15, marginTop: 14 }} tabIndex={-1}>
          Withdraw
        </button>
        <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 10, textAlign: 'center', lineHeight: 1.55 }}>
          Net-30, and sooner when the pool allows
        </p>
      </div>

      <div>
        <div className="inset" style={{ padding: '15px 16px', marginBottom: 14 }}>
          <p className="cap" style={{ margin: '0 0 11px' }}>How the next payout settles</p>
          <div className="rowline" style={{ fontSize: 13 }}>
            <span className="sub">Clears your balance</span><span>$1,180.00</span>
          </div>
          <div className="rowline" style={{ fontSize: 13, marginTop: 7 }}>
            <span className="sub">To your cash account</span><span style={{ fontWeight: 500 }}>$1,850.00</span>
          </div>
          <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 12, lineHeight: 1.6 }}>
            You are carrying $1,180.00 on Clear. That clears first — it costs you no carry.
          </p>
        </div>
        <p className="cap">Paid out</p>
        <div className="card" style={{ padding: '0 16px' }}>
          <div className="trow">
            <div><div>Nov 14</div><div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>28 charges · Chase ····9012</div></div>
            <span>$16,180.00</span>
          </div>
          <div className="trow">
            <div><div>Oct 14</div><div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>24 charges · Chase ····9012</div></div>
            <span>$13,940.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* §7.3 S5 — six lines an owner will actually read, rather than a contract
   they will scroll. */
export function TermsCards() {
  return (
    <>
      <div className="g2" style={{ marginBottom: 14 }}>
        <div className="card" style={{ padding: '14px 16px' }}>
          <p className="cap">What you pay</p>
          <div className="rowline" style={{ fontSize: 13 }}><span className="sub">Your rate</span><span>2.5% of financed amount</span></div>
          <div className="rowline" style={{ fontSize: 13, marginTop: 7 }}><span className="sub">Instead of</span><span className="muted">Card processing</span></div>
          <div className="rowline" style={{ fontSize: 13, marginTop: 7 }}><span className="sub">Setup, monthly, hardware</span><span>None</span></div>
        </div>
        <div className="card" style={{ padding: '14px 16px' }}>
          <p className="cap">What you get</p>
          <div className="rowline" style={{ fontSize: 13 }}><span className="sub">You are paid</span><span>Net-30</span></div>
          <div className="rowline" style={{ fontSize: 13, marginTop: 7 }}><span className="sub">Who bears a default</span><span>Clear</span></div>
          <div className="rowline" style={{ fontSize: 13, marginTop: 7 }}><span className="sub">Approval cap</span><span>$1,500 per charge</span></div>
        </div>
      </div>
      <div className="inset" style={{ padding: '14px 16px' }}>
        <div className="rowline" style={{ fontSize: 13 }}>
          <span className="sub">Exclusivity</span><span>None — keep Synchrony, Snap, anything else</span>
        </div>
        <div className="rowline" style={{ fontSize: 13, marginTop: 7 }}>
          <span className="sub">Leaving</span><span>Any time, no fee, no notice</span>
        </div>
      </div>
    </>
  );
}

/* §7.3 S6 — three steps, each carrying a role chip. The writer sees what the
   customer gets back; the owner sees what it does to his payout. The record
   keeps both names. */
export type RefundStepKey = 1 | 2 | 3;

export function RefundStep({ step }: { step: RefundStepKey }) {
  if (step === 1) {
    return (
      <>
        <div className="rowline" style={{ alignItems: 'center', marginBottom: 12 }}>
          <span className="cap" style={{ margin: 0 }}>Step 1 · Review</span>
          <span className="role">Jen · counter</span>
        </div>
        <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 12 }}>Refund $412.00 to Marcus T.?</p>
        <div className="inset" style={{ padding: '13px 15px', marginBottom: 14 }}>
          <div className="rowline" style={{ fontSize: 12.5 }}><span className="sub">His plan closes</span><span>$412.00</span></div>
          <div className="rowline" style={{ fontSize: 12.5, marginTop: 6 }}><span className="sub">He gets back</span><span>$99.91</span></div>
          <div className="rowline" style={{ fontSize: 12.5, marginTop: 6 }}><span className="sub">Carry he already paid</span><span>$8.24 — kept</span></div>
          <div className="rowline" style={{ fontSize: 12.5, marginTop: 6, paddingTop: 8, borderTop: '0.5px solid var(--border)' }}>
            <span className="sub">Off your next payout</span><span style={{ fontWeight: 500 }}>$401.70</span>
          </div>
        </div>
        <button type="button" className="btn-a prim block" style={{ padding: '11px 0', marginBottom: 8 }} tabIndex={-1}>Send to an owner</button>
        <button type="button" className="btn-a block" style={{ padding: '9px 0' }} tabIndex={-1}>Cancel</button>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 11, lineHeight: 1.55 }}>
          Nothing moves yet. Mike will get this on his phone, or he can type his code here.
        </p>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <div className="rowline" style={{ alignItems: 'center', marginBottom: 12 }}>
          <span className="cap" style={{ margin: 0 }}>Step 2 · Waiting</span>
          <span className="role needs">Needs an owner</span>
        </div>
        <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Waiting on Mike</p>
        <p className="sub" style={{ marginBottom: 16, lineHeight: 1.6 }}>
          Jen requested a $412.00 refund for Marcus T. at 2:31pm.
        </p>
        <div className="inset" style={{ padding: '13px 15px', marginBottom: 14 }}>
          <div className="rowline" style={{ fontSize: 12.5 }}><span className="sub">Sent to Mike</span><span className="muted">Delivered</span></div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 9, lineHeight: 1.55 }}>
            The request persists until an owner acts on it, and shows who raised it and when.
          </p>
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.55 }}>
          The customer has not been told anything yet. Nothing has moved.
        </p>
      </>
    );
  }

  return (
    <>
      <div className="rowline" style={{ alignItems: 'center', marginBottom: 12 }}>
        <span className="cap" style={{ margin: 0 }}>Step 3 · Authorise</span>
        <span className="role needs">Mike · owner</span>
      </div>
      <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Approve this refund?</p>
      <p className="sub" style={{ marginBottom: 16, lineHeight: 1.6 }}>
        <strong style={{ color: 'var(--text-primary)' }}>Jen</strong> requested this for Marcus T.
      </p>
      <div className="inset" style={{ padding: '13px 15px', marginBottom: 14 }}>
        <div className="rowline" style={{ fontSize: 12.5 }}><span className="sub">Refund</span><span style={{ fontWeight: 500 }}>$412.00</span></div>
        <div className="rowline" style={{ fontSize: 12.5, marginTop: 6 }}><span className="sub">Off your next payout</span><span>$401.70</span></div>
        <div className="rowline" style={{ fontSize: 12.5, marginTop: 6 }}><span className="sub">Next payout becomes</span><span>$3,808.30</span></div>
      </div>
      <button type="button" className="btn-a prim block" style={{ padding: '11px 0', marginBottom: 8 }} tabIndex={-1}>Approve refund</button>
      <button type="button" className="btn-a block" style={{ padding: '9px 0' }} tabIndex={-1}>Decline</button>
      <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 11, lineHeight: 1.55 }}>
        Declining tells Jen, not the customer.
      </p>
    </>
  );
}

/* §7.3 S7 — how members see you. Appearing in the directory is part of what a
   merchant is sold, so it is shown rather than described. */
export function DirectoryListing() {
  return (
    <>
      <p className="cap">Clear Partners</p>
      <div className="card" style={{ padding: '0 15px' }}>
        <div className="trow">
          <div>
            <div style={{ fontWeight: 500 }}>{CHARGE.merchant}</div>
            <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>Auto repair · 0.8 mi · Redlands</div>
          </div>
          <span className="pill" style={{ color: 'var(--text-accent)', borderColor: 'var(--border-accent)' }}>CREDIT</span>
        </div>
        <div className="trow">
          <div>
            <div>Valley Dental</div>
            <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>Dental · 1.4 mi · Redlands</div>
          </div>
          <span className="pill" style={{ color: 'var(--text-accent)', borderColor: 'var(--border-accent)' }}>CREDIT</span>
        </div>
        <div className="trow">
          <div>
            <div>Orange St Appliance</div>
            <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>Appliances · 2.1 mi · Redlands</div>
          </div>
          <span className="pill" style={{ color: 'var(--text-accent)', borderColor: 'var(--border-accent)' }}>CREDIT</span>
        </div>
      </div>
    </>
  );
}
