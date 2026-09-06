import { CHARGE, CHARGE_URL } from '../data';

/* The text a member gets. §5 — the references still carry clear.coop/c/8QK2;
   the URL comes from data.ts now and matches what the QR actually encodes.
   "You have not been charged yet" is the whole message. */

export function ChargeNotification() {
  return (
    <>
      <p className="cap">Text · also sent by email and push</p>
      <div className="inset" style={{ padding: 13 }}>
        <p style={{ fontSize: 13, lineHeight: 1.65 }}>
          {CHARGE.merchant} is charging <strong>{CHARGE.amount}</strong> to your Clear account.
          <br />
          <br />
          Approve or decline: {CHARGE_URL.replace('https://', '')}
          <br />
          <br />
          You have not been charged yet.
        </p>
      </div>
    </>
  );
}
