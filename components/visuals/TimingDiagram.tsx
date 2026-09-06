import { DIFFERENCE } from '@/content/shops';

/* The signature visual for /shops (visual brief §4).
 *
 * This page's whole argument is a difference in WHEN money moves, and "when"
 * is a timing diagram, not a paragraph. Two lanes over the same thirty days:
 * a six per cent provider pays the shop on day 0 and then funds the ticket
 * out of its own pocket for a month; Clear pays on day 30, by which time the
 * customer's repayments have been arriving the whole time.
 *
 * The lanes differ in what the bar MEANS, so they are drawn differently. One
 * unbroken block is capital sitting out. Four blocks with air between them is
 * money arriving. A reader gets the shape before reading either label — which
 * is the point, because the sentence version of this takes four clauses.
 *
 * No client JS: nothing here moves, and the page already spends its budget on
 * the calculator underneath. */

const { timing } = DIFFERENCE;

export function TimingDiagram() {
  return (
    <div className="timing">
      <div className="timing-figure">
        <span className="figure-xl">{timing.figure}</span>
        <p className="t-sm figure-xl-cap">{timing.caption}</p>
      </div>

      <div className="timing-lanes">
        {timing.lanes.map((lane) => (
          <div className="timing-lane" key={lane.key} data-pays={lane.pays === 100 ? 'end' : 'start'}>
            <p className="d4 timing-who">{lane.who}</p>

            <div className="timing-track">
              <div className={`timing-fill is-${lane.fill}`} aria-hidden="true">
                {lane.fill === 'arriving' &&
                  [0, 1, 2, 3].map((i) => <span key={i} className="timing-block" />)}
              </div>
              <span
                className="timing-mark"
                style={{ ['--at' as string]: `${lane.pays}%` }}
                aria-hidden="true"
              />
            </div>

            <p className="t-note timing-pays" style={{ ['--at' as string]: `${lane.pays}%` }}>
              {lane.paysLabel}
            </p>
            <p className="t-sm timing-fill-label">{lane.fillLabel}</p>
          </div>
        ))}

        <div className="timing-axis" aria-hidden="true">
          {timing.axis.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
