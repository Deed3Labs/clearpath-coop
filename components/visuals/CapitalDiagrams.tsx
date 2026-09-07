import { SPLIT, PROTECTIONS } from '@/content/capital';

/* /capital (visual brief §4) — two structural claims, both of them shapes.
 *
 * "Two balance sheets that never touch" is a claim about structure, and a
 * structural claim drawn as two columns with a gap down the middle is checked
 * in a glance rather than taken on trust. The gap is the argument, so the gap
 * is the largest thing in the drawing.
 *
 * "No preferred return anywhere in the stack" is the first thing an
 * institutional reader checks, and it is also a shape: four layers with you
 * near the bottom, against one layer with everybody in it. Two seconds. */

const { sheets } = SPLIT;
const { stacks } = PROTECTIONS;

export function TwoSheets() {
  return (
    <div className="sheets">
      {sheets.columns.map((col, i) => (
        <div className="sheets-col" key={col.key}>
          <p className="d4 sheets-title">{col.title}</p>
          <ul className="sheets-holds">
            {col.holds.map((h) => (
              <li className="t-sm" key={h}>
                {h}
              </li>
            ))}
          </ul>
          <p className="t-note sheets-backs">{col.backs}</p>
          <p className="t-note sheets-never">{col.never}</p>

          {/* The divider is drawn once, between the two columns. */}
          {i === 0 && (
            <span className="sheets-divider" aria-hidden="true">
              <span className="sheets-divider-label">{sheets.divider}</span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function PayoutStacks() {
  return (
    <div className="stacks">
      {[stacks.theirs, stacks.ours].map((s, i) => (
        <div className="stacks-col" key={s.label}>
          <p className="t-note stacks-label">{s.label}</p>
          <ol className={`stacks-list${i === 1 ? ' is-ours' : ''}`}>
            {s.layers.map((layer) => (
              <li className="t-sm" key={layer}>
                {layer}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
