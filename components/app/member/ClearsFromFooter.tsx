import { Chevron } from '../Icons';
import { LIMITS } from '../data';

/* §5 — one split row, one line per half, label inline: `Limit $850.00/cycle`
   and `Clears from Chase ····4471`, symmetric 14px either side of a centred
   hairline. The quietest thing on the card. Four treatments were reviewed
   before this one won; it is not a place to improvise. */

export function ClearsFromFooter() {
  return (
    <div className="clears-footer">
      <div>
        <p>
          <span className="muted">Limit</span> {LIMITS.cycle}
        </p>
        <span className="muted" style={{ flexShrink: 0, display: 'flex' }}>
          <Chevron />
        </span>
      </div>
      <div>
        <p>
          <span className="muted">Clears from</span> {LIMITS.clearsFrom}
        </p>
        <span className="muted" style={{ flexShrink: 0, display: 'flex' }}>
          <Chevron />
        </span>
      </div>
    </div>
  );
}
