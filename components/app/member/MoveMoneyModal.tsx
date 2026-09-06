import { Close, Swap } from '../Icons';

/* Move money — ported from reference/clear-move-money-modals.html §01 and §04.
   §5: amount, then quick-amount chips, then the route, then the keypad, then
   the summary. The route is two cards butted together with the icon ON THE
   SEAM. One summary box, five lines, divided credit-limit footer in green.
   On desktop the keypad takes its own fixed 216px column so amount, route and
   summary stay one continuous read down the left.

   Savings is the only destination shown. The bond and pool variants in the
   reference state a yield, and §5 is absolute: if a screen contains a rate of
   return it does not go on the site. */

export function Keypad() {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];
  return (
    <div className="pad" aria-hidden="true">
      {keys.map((k) => (
        <div key={k} className={k === '.' || k === '⌫' ? 'fn' : undefined}>
          {k}
        </div>
      ))}
    </div>
  );
}

export function RouteLegs() {
  return (
    <div className="route">
      <div className="leg">
        <p className="cap2">From</p>
        <p className="nm">Cash account</p>
        <p className="bal">$2,109.00 free</p>
      </div>
      <div className="leg">
        <p className="cap2">To</p>
        <p className="nm">Savings</p>
        <p className="bal">$6,000.00</p>
      </div>
      <div className="swap" style={{ color: 'var(--text-secondary)' }}>
        <Swap />
      </div>
    </div>
  );
}

export function SummaryBox() {
  return (
    <div className="summary">
      <div className="rowline earn"><span>Credits earned</span><span>+250</span></div>
      <div className="rowline"><span>Savings after</span><span>$6,250.00</span></div>
      <div className="rowline"><span>Credits after</span><span>1,750 of 15,000</span></div>
      <div className="rowline"><span>Reaches 15,000 by</span><span>Jan 2028</span></div>
      <div className="rowline credit"><span>Adds to your credit limit</span><span>+$250.00</span></div>
    </div>
  );
}

export function MoveMoneyModal({ layout = 'desktop' }: { layout?: 'desktop' | 'phone' }) {
  const amount = (
    <>
      <p className="cap" style={{ margin: '0 0 2px' }}>Amount</p>
      <p style={{ fontSize: 38, fontWeight: 500, letterSpacing: '-1.2px', lineHeight: 1.05, marginBottom: 13 }}>
        $250<span style={{ color: 'var(--surface-0)' }}>.00</span>
      </p>
      <div className="chips">
        <button type="button" className="btn-a" tabIndex={-1}>$100</button>
        <button type="button" className="btn-a on" tabIndex={-1}>$250</button>
        <button type="button" className="btn-a" tabIndex={-1}>$500</button>
        <button type="button" className="btn-a" tabIndex={-1}>All</button>
      </div>
    </>
  );

  const head = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
      <b style={{ fontSize: 17, fontWeight: 500 }}>Move money</b>
      <span style={{ color: 'var(--text-secondary)', display: 'flex' }}><Close /></span>
    </div>
  );

  if (layout === 'phone') {
    return (
      <>
        {head}
        {amount}
        <RouteLegs />
        <div style={{ marginBottom: 13 }}><Keypad /></div>
        <div style={{ marginBottom: 12 }}><SummaryBox /></div>
        <button type="button" className="btn-a prim block" style={{ padding: '11px 0' }} tabIndex={-1}>
          Move $250.00 to savings
        </button>
      </>
    );
  }

  return (
    <>
      {head}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 216px', gap: 20, alignItems: 'start' }}>
        <div>
          {amount}
          <RouteLegs />
          <SummaryBox />
        </div>
        <div>
          <Keypad />
          <div
            className="inset"
            style={{ padding: '11px 13px', marginTop: 12, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}
          >
            Credits vest after your cash has sat for about thirty days, so the number tracks money
            that actually arrived and stayed.
          </div>
        </div>
      </div>
      <button type="button" className="btn-a prim block" style={{ padding: '12px 0', marginTop: 18 }} tabIndex={-1}>
        Move $250.00 to savings
      </button>
    </>
  );
}
