'use client';

import { useState } from 'react';
import { Back } from '../Icons';
import { CHARGE, LIMITS } from '../data';

/* Approve a charge — reference "A charge arrives — the member side".
   §6.2 alignment rule: the merchant's waiting state IS this screen, unopened.
   One moment, not two, so the two must not drift.

   §7.2 S4 renders the split chooser INSIDE this screen rather than as a bare
   web widget. Figures are declining-balance on $940.00 at 2% a cycle with
   payments levelled — flat carry would cost the same whether cleared in month
   one or four, which contradicts the one line separating this from BNPL.
   No bars: splits are counts, not ratios. */

export type SplitKey = 'full' | '2' | '4' | '12';

export const SPLITS: Record<
  SplitKey,
  { label: string; each: string; carryCycle: string; carryPlan: string; total: string; doneBy: string }
> = {
  full:  { label: 'In full', each: '$958.80', carryCycle: '$18.80', carryPlan: '$18.80',  total: '$958.80',   doneBy: 'October 2026' },
  '2':   { label: 'In 2',    each: '$484.10', carryCycle: '$18.80', carryPlan: '$28.20',  total: '$968.20',   doneBy: 'November 2026' },
  '4':   { label: 'In 4',    each: '$246.75', carryCycle: '$18.80', carryPlan: '$47.00',  total: '$987.00',   doneBy: 'January 2027' },
  '12':  { label: 'In 12',   each: '$88.52',  carryCycle: '$18.80', carryPlan: '$122.20', total: '$1,062.20', doneBy: 'September 2027' },
};

const ORDER: SplitKey[] = ['full', '2', '4', '12'];

export function ApproveScreen({
  interactive = false,
  initial = '4',
}: {
  interactive?: boolean;
  initial?: SplitKey;
}) {
  const [split, setSplit] = useState<SplitKey>(initial);
  const s = SPLITS[split];

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <span style={{ color: 'var(--text-secondary)', display: 'flex' }}><Back /></span>
        <span style={{ fontSize: 15, fontWeight: 500 }}>Approve a charge</span>
      </div>

      <p className="sub" style={{ marginBottom: 3 }}>{CHARGE.merchant} wants to charge</p>
      <p className="big-m" style={{ marginBottom: 16 }}>{CHARGE.amount}</p>

      <div className="card" style={{ padding: '12px 14px', marginBottom: 12 }}>
        <p className="cap">How to clear it · {CHARGE.rate}</p>

        <div style={{ display: 'flex', gap: 5, marginBottom: 11 }}>
          {ORDER.map((k) => {
            const on = k === split;
            return (
              <button
                key={k}
                type="button"
                className={`btn-a${on ? ' on' : ''}`}
                style={{ flex: 1, padding: '5px 0', fontSize: 11 }}
                aria-pressed={interactive ? on : undefined}
                tabIndex={interactive ? 0 : -1}
                onClick={interactive ? () => setSplit(k) : undefined}
              >
                {SPLITS[k].label}
              </button>
            );
          })}
        </div>

        <div style={{ fontSize: 12, lineHeight: 2.1, borderTop: '0.5px solid var(--border)', paddingTop: 9 }}>
          <div className="rowline"><span className="lbl" style={{ fontSize: 12 }}>Each cycle</span><span>{s.each}</span></div>
          <div className="rowline"><span className="lbl" style={{ fontSize: 12 }}>Carry this cycle</span><span>{s.carryCycle}</span></div>
          {/* A dollar total must never sit beside a per-cycle rate (§5) —
              hence the rate lives in the header above, not on this row. */}
          <div className="rowline"><span className="lbl" style={{ fontSize: 12 }}>Carry over the plan</span><span>{s.carryPlan}</span></div>
          <div className="rowline"><span className="lbl" style={{ fontSize: 12 }}>Total</span><span style={{ fontWeight: 500 }}>{s.total}</span></div>
          <div className="rowline"><span className="lbl" style={{ fontSize: 12 }}>Done by</span><span>{s.doneBy}</span></div>
        </div>
      </div>

      {/* Limit and Clears-from appear here because this is the moment a member
          most wants to check them — the same split footer as Term plans, so it
          is one pattern rather than two. */}
      <div
        style={{
          borderTop: '0.5px solid var(--border)',
          paddingTop: 10,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          marginBottom: 13,
        }}
      >
        <div style={{ paddingRight: 14 }}>
          <p className="cap" style={{ margin: '0 0 3px' }}>Limit</p>
          <p className="fig" style={{ fontSize: 11.5 }}>{LIMITS.cycle}</p>
        </div>
        <div style={{ paddingLeft: 14, borderLeft: '0.5px solid var(--border)' }}>
          <p className="cap" style={{ margin: '0 0 3px' }}>Clears from</p>
          <p className="fig" style={{ fontSize: 11.5 }}>{LIMITS.clearsFrom}</p>
        </div>
      </div>

      <button type="button" className="btn-a prim block" style={{ padding: '9px 0', marginBottom: 7 }} tabIndex={-1}>
        Approve
      </button>
      <button type="button" className="btn-a block" style={{ padding: '9px 0' }} tabIndex={-1}>
        Not now
      </button>
      <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 10, lineHeight: 1.55, textAlign: 'center' }}>
        Expires in 24 hours. Nothing is charged until you approve.
      </p>
    </>
  );
}
