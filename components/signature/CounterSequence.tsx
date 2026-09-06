'use client';

import { useEffect, useRef, useState } from 'react';
import { onScrollProgress, reducedMotion } from '@/lib/motion';
import { TabletFrame, PhoneFrame } from '@/components/app/frames';
import { NewCharge, ShowTheCode, WaitingState, ConfirmedState } from '@/components/app/merchant/CounterScreens';
import { ApproveScreen } from '@/components/app/member/ApproveScreen';
import { ChargeNotification } from '@/components/app/member/ChargeNotification';
import { CHARGE } from '@/components/app/data';

/* §6.2 — a merchant tablet and a member phone, side by side, in one gesture.
   Four beats, both devices on screen throughout.

   Why it earns the budget: every competitor's hero is one phone. The thing
   Clear has that none of them do is that a charge can be raised on one device
   and confirmed asynchronously on another — the customer can be under the car
   and it still completes. Two devices in one frame is the only way to show
   that, and it answers the merchant's real objection without a sentence of
   copy.

   Alignment rule from the app spec, which holds here: the merchant's waiting
   state IS the member's approve screen, unopened. One moment, not two.

   Below 860px the devices stack, the phone leads, and the whole thing becomes
   a tappable four-step stepper — a scrubbed animation in a stacked column is
   unreadable on a phone. */

const BEATS = [
  { n: 1, label: 'New charge', tablet: 'The writer types the amount from the ticket.', phone: 'Dark. Nothing has reached them yet.' },
  { n: 2, label: 'Showing the code', tablet: 'The screen turns. The amount is in the code.', phone: `Wakes: ${CHARGE.merchant} — ${CHARGE.amount}` },
  { n: 3, label: 'Waiting', tablet: 'Delivery receipts beside it. She can approve any time.', phone: 'The approve screen. You have not been charged yet.' },
  { n: 4, label: 'Confirmed', tablet: 'The row turns confirmed, with the fee.', phone: 'Approved.' },
] as const;

function TabletBeat({ beat }: { beat: number }) {
  if (beat === 1) return <NewCharge />;
  if (beat === 2) return <ShowTheCode />;
  if (beat === 3) return <WaitingState />;
  return <ConfirmedState />;
}

function PhoneBeat({ beat }: { beat: number }) {
  if (beat === 1) {
    return (
      <div className="phone-asleep" aria-hidden="true">
        <p className="t-note">Screen off</p>
      </div>
    );
  }
  if (beat === 2) return <ChargeNotification />;
  if (beat === 3) return <ApproveScreen />;
  return (
    <div className="phone-approved">
      <div className="approved-tick" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <p className="approved-amount">{CHARGE.amount}</p>
      <p className="approved-meta">{CHARGE.merchant} · {CHARGE.split}</p>
    </div>
  );
}

export function CounterSequence() {
  const root = useRef<HTMLDivElement>(null);
  const [beat, setBeat] = useState(1);
  /* Until the scrubbed version takes over, the stepper is the only control.
     It stays the control below 860px and whenever motion is reduced, so it is
     never a fallback that has to be built twice. */
  const [scrubbed, setScrubbed] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    /* Below 860px the stepper IS the control, not a fallback, and reduced
       motion keeps it that way. Either case leaves `scrubbed` false, so the
       buttons stay operable and nothing has to be built twice. */
    if (window.matchMedia('(max-width: 860px)').matches) return;
    if (reducedMotion()) return;

    setScrubbed(true);

    /* Four beats across the scrubbed range, snapped rather than tweened:
       these are discrete states of two real screens, not a morph, and a
       half-drawn app screen is not a state the product has. */
    return onScrollProgress(el, { edge: 'top', vh: 0.7 }, { edge: 'bottom', vh: 0.3 }, (p) => {
      setBeat(Math.min(4, Math.max(1, Math.floor(p * 4) + 1)));
    });
  }, []);

  const current = BEATS[beat - 1];

  return (
    <div className="counter" ref={root}>
      <div className="counter-stage">
        <div className="counter-tablet">
          <TabletFrame label={`Merchant tablet — ${current.label}`} height={430}>
            <TabletBeat beat={beat} />
          </TabletFrame>
          <p className="screen-caption">Merchant tablet · {current.label}</p>
        </div>

        <div className="counter-phone">
          <PhoneFrame label={`Member phone — ${current.label}`}>
            <PhoneBeat beat={beat} />
          </PhoneFrame>
          <p className="screen-caption">Member phone · {current.label}</p>
        </div>
      </div>

      {/* The stepper. Visible controls below 860px and whenever the scrubbed
          version has not taken over; above it, it degrades to a read-only
          progress line so the scrub has something to report against. */}
      <div className={`counter-steps${scrubbed ? ' is-readout' : ''}`}>
        {BEATS.map((b) => {
          const on = b.n === beat;
          return (
            <button
              key={b.n}
              type="button"
              className={`counter-step${on ? ' is-on' : ''}`}
              aria-current={on ? 'step' : undefined}
              aria-disabled={scrubbed || undefined}
              onClick={scrubbed ? undefined : () => setBeat(b.n)}
              tabIndex={scrubbed ? -1 : 0}
            >
              <span className="fig counter-step-n">{String(b.n).padStart(2, '0')}</span>
              <span className="counter-step-label">{b.label}</span>
            </button>
          );
        })}
      </div>

      <p className="t-sm counter-read">
        <strong>{current.tablet}</strong> {current.phone}
      </p>

      {/* §5 — "Say so once, quietly, beside the first artifact." It buys the
          licence for the token translation, and it helps with the "in build"
          honesty problem: a composed illustration claims less than a
          photorealistic screenshot does. */}
      <p className="t-note">Screens shown are illustrative.</p>
    </div>
  );
}
