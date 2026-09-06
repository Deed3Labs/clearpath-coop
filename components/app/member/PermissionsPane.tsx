import { Back, Lock } from '../Icons';

/* Settings › Advanced › Permissions — §7.7 S4.
   Two group labels, every row styled identically, two lines per row. Group
   labels sit ABOVE their cards, never inside them: a label crammed against a
   card's top edge reads as a stray row. Each group is its own card, so no row
   is styled differently — only the held one swaps its button for a chip, and
   that chip carries a DRAWN padlock, never a padlock character.
   The verb is "turn off", never "revoke". */

const ON = [
  { label: 'Save automatically', note: 'Deposits and auto-save' },
  { label: 'Move savings to cash', note: 'Redeeming back to spendable' },
  { label: 'Hold sent money in escrow', note: 'Until the recipient claims it' },
];

function Row({
  label,
  note,
  control,
  last,
}: {
  label: string;
  note: string;
  control: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        borderBottom: last ? undefined : '0.5px solid var(--border)',
      }}
    >
      <div>
        <p style={{ fontSize: 13 }}>{label}</p>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3, lineHeight: 1.5 }}>{note}</p>
      </div>
      {control}
    </div>
  );
}

export function PermissionsPane() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 4 }}>
        <span style={{ color: 'var(--text-secondary)', display: 'flex' }}><Back /></span>
        <span style={{ fontSize: 17, fontWeight: 500 }}>Permissions</span>
      </div>
      <p className="sub" style={{ marginBottom: 18, lineHeight: 1.55 }}>
        What Clear can do without asking each time.
      </p>

      <p className="cap">On</p>
      <div className="card" style={{ padding: '0 15px' }}>
        {ON.map((r, i) => (
          <Row
            key={r.label}
            label={r.label}
            note={r.note}
            last={i === ON.length - 1}
            control={
              <button type="button" className="btn-a" style={{ padding: '3px 10px', fontSize: 11, flexShrink: 0 }} tabIndex={-1}>
                Turn off
              </button>
            }
          />
        ))}
      </div>

      <p className="cap" style={{ margin: '18px 0 8px' }}>Held while you carry credit</p>
      <div className="card" style={{ padding: '0 15px' }}>
        <Row
          label="Savings held against credit"
          note="$3,000 · lifts when your balance clears"
          last
          control={
            <span
              className="pill pend"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 4, flexShrink: 0 }}
            >
              <Lock /> Held
            </span>
          }
        />
      </div>

      <div style={{ borderTop: '0.5px solid var(--border)', marginTop: 18, paddingTop: 11 }}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.55 }}>
          Turning one off closes nothing — Clear just asks next time.
        </p>
      </div>
    </>
  );
}
