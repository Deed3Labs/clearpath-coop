import { ChargeQR } from './ChargeQR';
import { Check } from '../Icons';
import { CHARGE, PAYOUTS } from '../data';

/* Merchant counter — reference sections 01, 02, 03, 05, 06.
   Net-30 only. §5 and §8: net-14 is not published anywhere on this site, so
   the reference's "you are paid on the 14th" is stated as the terms rather
   than as a date that could be read as a fortnight. */

/* §5 — "What does NOT need to survive: app nav bars, status bars, tab bars,
   scroll positions." On a marketing page they are noise, and they are the
   thing that makes an artifact look like a screenshot somebody pasted in. The
   shop's name stays, because whose counter this is carries meaning. */
function ScreenLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="cap" style={{ marginBottom: 16 }}>
      {children}
    </p>
  );
}

/* §7.3 S3 — three states as a stepper, to make the point that guidance
   retires itself: each panel is replaced by the activity it stood in for, so
   nothing must be dismissed and nothing lingers once untrue. */
export type CounterState = 'day-one' | 'early' | 'running';

export function CounterHome({ state }: { state: CounterState }) {
  const totals = {
    'day-one': { amount: '$0.00', sub: 'No charges yet', dim: true },
    early: { amount: '$600.00', sub: '2 charges · nothing waiting', dim: false },
    running: { amount: '$1,840.00', sub: '4 charges · 1 waiting on the customer', dim: false },
  }[state];

  return (
    <>
      <ScreenLabel>Counter · {CHARGE.merchant}</ScreenLabel>
      <div className="g2" style={{ alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="cap" style={{ margin: '0 0 3px' }}>Today</p>
          <p className="big" style={{ color: totals.dim ? 'var(--text-muted)' : undefined }}>{totals.amount}</p>
          <p style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '5px 0 18px' }}>{totals.sub}</p>
          <button type="button" className="btn-a prim block" style={{ padding: '16px 0', fontSize: 16, marginBottom: 18 }} tabIndex={-1}>
            New charge
          </button>

          {state === 'day-one' && (
            <div className="inset" style={{ padding: '15px 16px', flex: 1 }}>
              <p className="cap">How it goes</p>
              <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                <p>1 · Type the amount from the ticket.</p>
                <p>2 · Turn the screen. They scan it.</p>
                <p>3 · They approve on their phone — here or later.</p>
                <p>4 · You are paid net-30.</p>
              </div>
            </div>
          )}

          {state === 'early' && (
            <div className="inset" style={{ padding: '15px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 7 }}>Your first payout is {PAYOUTS.releaseDate}</p>
              <p className="sub" style={{ lineHeight: 1.7 }}>
                Everything confirmed before then lands together. You can withdraw earlier once there is
                enough in the pool — we will tell you when.
              </p>
            </div>
          )}

          {state === 'running' && (
            <>
              <p className="cap">Waiting</p>
              <div className="card" style={{ padding: '0 14px', flex: 1 }}>
                <div className="trow">
                  <div>
                    <div>Dana R.</div>
                    <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>
                      {CHARGE.amount} · sent 6 min ago · app opened
                    </div>
                  </div>
                  <span className="pill pend">Not confirmed</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {state === 'day-one' ? (
            <>
              <p className="cap">Finish setting up</p>
              <div className="card" style={{ padding: '0 16px', marginBottom: 14 }}>
                <div className="trow">
                  <div><div>Add your counter staff</div><div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>A PIN each, so charges are attributed</div></div>
                  <button type="button" className="btn-a" style={{ fontSize: 12, padding: '4px 11px' }} tabIndex={-1}>Add</button>
                </div>
                <div className="trow">
                  <div><div>Print counter cards</div><div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>Goes home with an estimate</div></div>
                  <button type="button" className="btn-a" style={{ fontSize: 12, padding: '4px 11px' }} tabIndex={-1}>Print</button>
                </div>
                <div className="trow">
                  <div><div className="muted">Bank account added</div><div className="fig" style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>Chase ····9012</div></div>
                  <span style={{ fontSize: 11.5, color: 'var(--text-success)' }}>Done</span>
                </div>
              </div>
              <div className="inset" style={{ padding: '15px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 7 }}>Who to offer it to</p>
                <p className="sub" style={{ lineHeight: 1.7 }}>
                  Anyone whose ticket is over $300. <strong style={{ color: 'var(--text-primary)' }}>Offer it to everyone above that</strong>,
                  not only to people who look like they need it — that is both fairer and where the volume is.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="cap">Today</p>
              <div className="card" style={{ padding: '0 16px', marginBottom: 14 }}>
                {state === 'running' && (
                  <div className="trow">
                    <div><div>Dana R.</div><div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>2:14pm · Jen</div></div>
                    <span className="pill pend">Waiting</span>
                  </div>
                )}
                <div className="trow">
                  <div><div>Marcus T.</div><div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>11:02am · Jen</div></div>
                  <span>$412.00</span>
                </div>
                <div className="trow">
                  <div><div>Priya S.</div><div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>9:47am · Luis</div></div>
                  <span>$188.00</span>
                </div>
              </div>
              <p className="cap">Next payout</p>
              <div className="card" style={{ padding: '13px 14px', marginBottom: 14 }}>
                <div className="rowline">
                  <span style={{ fontSize: 13 }}>{PAYOUTS.releaseDate}</span>
                  <span style={{ fontSize: 19, fontWeight: 500 }}>{state === 'running' ? '$4,210.00' : '$600.00'}</span>
                </div>
                <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 5 }}>Net-30 · may arrive sooner</p>
              </div>
              {state === 'early' && (
                <div className="inset" style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p className="sub" style={{ lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Jen has raised both of today&rsquo;s charges.</strong>{' '}
                    Worth a word with Luis — the shops that do well are the ones where every writer offers it.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export function NewCharge() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{ fontSize: 16, fontWeight: 500 }}>New charge</span>
      </div>
      <div className="g2">
        <div>
          <p className="cap" style={{ margin: '0 0 3px' }}>Amount</p>
          <p className="big" style={{ marginBottom: 20 }}>{CHARGE.amount}</p>
          <div className="inset" style={{ padding: '13px 15px' }}>
            <p className="sub" style={{ marginBottom: 4 }}>This charge</p>
            <div className="rowline" style={{ fontSize: 12.5, marginTop: 6 }}>
              <span className="muted">You receive</span><span>{PAYOUTS.youReceive}</span>
            </div>
            <div className="rowline" style={{ fontSize: 12.5, marginTop: 5 }}>
              <span className="muted">Fee · {PAYOUTS.feeRate}</span><span>{PAYOUTS.fee}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="pad" aria-hidden="true">
            {['1','2','3','4','5','6','7','8','9','.','0','⌫'].map((k) => <div key={k}>{k}</div>)}
          </div>
          <button type="button" className="btn-a prim block" style={{ padding: '14px 0', fontSize: 15, marginTop: 14 }} tabIndex={-1}>
            Continue
          </button>
          <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 11, textAlign: 'center' }}>
            Goes straight to the code — no extra step.
          </p>
        </div>
      </div>
    </>
  );
}

export function ShowTheCode() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 16, fontWeight: 500 }}>{CHARGE.amount}</span>
      </div>
      <p className="sub" style={{ marginBottom: 16 }}>Turn the screen toward them.</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ChargeQR />
      </div>
      <p className="mid" style={{ textAlign: 'center', margin: '18px 0 3px' }}>{CHARGE.amount}</p>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 18 }}>
        {CHARGE.merchant} · the amount is in the code
      </p>
      <div className="inset" style={{ padding: '12px 14px' }}>
        <p className="sub" style={{ lineHeight: 1.6 }}>
          New to Clear? Scanning installs the app and starts signup with this charge already waiting.
        </p>
      </div>
    </>
  );
}

export function WaitingState() {
  return (
    <div className="g2">
      <div>
        <p className="cap">Waiting</p>
        <p className="mid" style={{ marginBottom: 3 }}>{CHARGE.amount}</p>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 18 }}>Dana R. · sent 40 seconds ago</p>
        <p className="sub" style={{ marginBottom: 14, lineHeight: 1.6 }}>
          She can approve any time today. You do not have to wait at the counter.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="btn-a" style={{ flex: 1 }} tabIndex={-1}>Send again</button>
          <button type="button" className="btn-a" style={{ flex: 1 }} tabIndex={-1}>Cancel charge</button>
        </div>
      </div>
      <div className="inset" style={{ padding: '15px 16px' }}>
        <p className="cap" style={{ margin: '0 0 11px' }}>Reached her</p>
        {[['Text', 'Delivered'], ['Email', 'Delivered']].map(([k, v]) => (
          <div key={k} className="rowline" style={{ fontSize: 12.5, marginTop: 7 }}>
            <span className="sub">{k}</span><span className="muted">{v}</span>
          </div>
        ))}
        <div className="rowline" style={{ fontSize: 12.5, marginTop: 7 }}>
          <span className="sub">App</span><span style={{ color: 'var(--text-success)' }}>Opened</span>
        </div>
        <p style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 12, lineHeight: 1.55 }}>
          All three go out together. &ldquo;Opened&rdquo; is what tells you not to walk to the waiting room.
        </p>
      </div>
    </div>
  );
}

export function ConfirmedState() {
  return (
    <>
      <div className="g2">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="tick" style={{ color: 'var(--text-success)' }}><Check size={23} width={2.4} /></div>
          <div>
            <p className="mid">{CHARGE.amount}</p>
            <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 4 }}>Dana R. · approved just now</p>
          </div>
        </div>
        <div className="inset" style={{ padding: '14px 16px' }}>
          <div className="rowline" style={{ fontSize: 13 }}>
            <span className="sub">You receive</span><span style={{ fontWeight: 500 }}>{PAYOUTS.youReceive}</span>
          </div>
          <div className="rowline" style={{ fontSize: 13, marginTop: 7 }}>
            <span className="sub">Fee</span><span>{PAYOUTS.fee} · {PAYOUTS.feeRate}</span>
          </div>
          <div className="rowline" style={{ fontSize: 13, marginTop: 7, paddingTop: 9, borderTop: '0.5px solid var(--border)' }}>
            <span className="sub">Paid out</span><span>{PAYOUTS.releaseDate}</span>
          </div>
        </div>
      </div>
    </>
  );
}
