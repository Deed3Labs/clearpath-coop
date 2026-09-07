import { GOVERNANCE } from '@/content/coop';

/* /coop S3 (visual brief §4) — what one member one vote actually looks like.
 *
 * "One vote each regardless of balance" is a claim about SIZE, and size is
 * the thing prose is worst at: a reader who has met a cap table reads the
 * sentence and pictures the arrangement they already know. Two rows of marks
 * settle it before the sentence underneath is read — one row of wildly
 * different circles, one row of identical ones.
 *
 * The weights are an illustration of a shape rather than balances anybody
 * holds, which is what the caption says. */

const { votes, board } = GOVERNANCE;

/* Marks are sized by the SQUARE ROOT of their weight, because a circle's area
   is what the eye reads, not its diameter. Scaling the diameter by weight
   would draw the 5.5 at thirty times the area of the 1 and overstate a point
   that does not need overstating. */
const size = (w: number) => 16 + Math.sqrt(w) * 18;

export function VoteMarks() {
  return (
    <div className="votes">
      {[votes.usual, votes.ours].map((row, i) => (
        <div className={`votes-row${i === 1 ? ' is-ours' : ''}`} key={row.label}>
          <p className="d4 votes-label">{row.label}</p>
          <div className="votes-marks" aria-hidden="true">
            {row.weights.map((w, j) => (
              <span
                key={j}
                className="votes-mark"
                style={{ ['--d' as string]: `${size(w)}px` }}
              />
            ))}
          </div>
          <p className="t-sm votes-note">{row.note}</p>
        </div>
      ))}

      {/* The delegate share is written as a fraction so it holds at any board
          size. Drawn as a fraction of a bar, that survives being read. */}
      <div className="votes-board">
        <p className="t-note votes-board-label">{board.label}</p>
        <div className="votes-board-bar" aria-hidden="true">
          <span
            className="votes-board-delegates"
            style={{ width: `${board.delegates.fraction * 100}%` }}
          />
        </div>
        <div className="votes-board-keys">
          <p className="t-sm">
            <span className="votes-swatch is-delegates" aria-hidden="true" />
            {board.delegates.label}
          </p>
          <p className="t-sm">
            <span className="votes-swatch" aria-hidden="true" />
            {board.rest.label}
          </p>
        </div>
        <p className="t-note votes-note">{board.note}</p>
      </div>
    </div>
  );
}
