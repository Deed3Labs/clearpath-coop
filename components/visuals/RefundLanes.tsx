import { MONEY } from '@/content/shops';

/* /shops S6 — who acts on a refund, in order.
 *
 * The prose had to spell out, twice, that the customer is not told until an
 * owner has authorised it. Three lanes make that visible: the steps march
 * left to right and the customer's lane is empty until the last one. It is
 * the shape of the drawing that carries the claim.
 *
 * A swimlane and not a numbered list, because a list says what happens and a
 * swimlane says who it happens to. */

const { lanes } = MONEY.refunds;

export function RefundLanes() {
  return (
    <div className="lanes">
      {lanes.actors.map((actor, row) => (
        <div className="lanes-row" key={actor}>
          <p className="t-note lanes-actor">{actor}</p>
          <ol className="lanes-track">
            {lanes.steps.map((step, i) => (
              <li key={step.label} className={step.actor === row ? 'is-on' : undefined}>
                {step.actor === row ? (
                  <>
                    <span className="lanes-step">
                      <span className="fig lanes-n">{i + 1}</span>
                      <span className="d4 lanes-label">{step.label}</span>
                    </span>
                    <span className="t-sm lanes-detail">{step.detail}</span>
                  </>
                ) : (
                  <span className="lanes-empty" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
      <p className="t-note lanes-note">{lanes.note}</p>
    </div>
  );
}
