import { HOMES } from '@/content/housing';

/* /housing S3 (visual brief §4) — one lot, seen from above.
 *
 * "A covered front porch, a rear porch onto a patio and yard, and a garage
 * set behind and to the side off a perimeter drive, which wraps the yard into
 * an L" is a plan drawing that somebody wrote out as a sentence. Drawn, the L
 * is obvious and the sentence is unnecessary.
 *
 * The viewBox is in feet, so the geometry means something and the proportions
 * are the proportions. preserveAspectRatio is left at its default: a plan that
 * stretches is not a plan.
 *
 * Labels are numbered markers against a key rather than leader lines. At 327px
 * — the drawing's real width on a phone, which §2 says is the width that
 * matters — seven leader lines and their type would be unreadable, and the
 * convention is one every reader of a floor plan already knows. */

const { plan } = HOMES;

/* Feet. Street at the bottom edge. Keys are SVG attribute names, because
   these objects are spread straight onto <rect> — `w` and `h` spread cleanly
   and render nothing at all, which is a quiet way to lose a drawing. */
const LOT = { width: 100, height: 130 };
const HOUSE = { x: 8, y: 62, width: 56, height: 50 };
const FRONT_PORCH = { x: 16, y: 112, width: 40, height: 10 };
const REAR_PORCH = { x: 16, y: 52, width: 40, height: 10 };
const PATIO = { x: 10, y: 34, width: 50, height: 18 };
const GARAGE = { x: 72, y: 8, width: 26, height: 30 };
const DRIVE = { x: 78, y: 38, width: 20, height: 92 };

/* Where each key number sits on the drawing, in the same feet. */
const MARKS: Record<number, [number, number]> = {
  1: [36, 117],
  2: [36, 87],
  3: [36, 57],
  4: [35, 43],
  5: [71, 73],
  6: [85, 23],
  7: [88, 100],
};

export function LotPlan() {
  return (
    <figure className="plan">
      <svg
        viewBox={`-4 -4 ${LOT.width + 8} ${LOT.height + 8}`}
        className="plan-svg"
        role="img"
        aria-label={plan.keys.map((k) => `${k.n}, ${k.label}`).join('. ')}
      >
        {/* The lot line. Dashed, because a boundary is not a wall. */}
        <rect
          x="0"
          y="0"
          width={LOT.width}
          height={LOT.height}
          fill="none"
          stroke="var(--color-ink-28)"
          strokeWidth="0.6"
          strokeDasharray="3 2.5"
        />

        {/* The yard is unfilled paper. On a plan, open ground is the absence
            of anything drawn on it. */}
        <rect {...DRIVE} className="plan-drive" />
        <rect {...PATIO} className="plan-patio" />
        <rect {...FRONT_PORCH} className="plan-porch" />
        <rect {...REAR_PORCH} className="plan-porch" />
        <rect {...GARAGE} className="plan-outbuilding" />
        <rect {...HOUSE} className="plan-house" />

        {plan.keys.map((k) => {
          const [x, y] = MARKS[k.n];
          return (
            <g key={k.n} className="plan-mark">
              <circle cx={x} cy={y} r="4.6" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central">
                {k.n}
              </text>
            </g>
          );
        })}

        <text x={LOT.width / 2} y={LOT.height + 3.4} textAnchor="middle" className="plan-street">
          street
        </text>
      </svg>

      <ol className="plan-key">
        {plan.keys.map((k) => (
          <li key={k.n}>
            <span className="fig plan-key-n">{k.n}</span>
            <span className="plan-key-label">{k.label}</span>
            {k.note && <span className="t-note plan-key-note">{k.note}</span>}
          </li>
        ))}
      </ol>

      <figcaption className="t-note plan-cap">{plan.caption}</figcaption>
    </figure>
  );
}
