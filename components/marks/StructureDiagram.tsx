import { STRUCTURE } from '@/content/coop';

/* §6.7 S2 — the ownership tree, hand-authored.
 *
 * Rules the drawing obeys, from the brief:
 *   · A dashed outline means ownerless and NOTHING else. Only the foundation
 *     is dashed.
 *   · Ownership lines solid. The foundation-to-ClearLabs line is dotted and
 *     labelled, because a contract is not ownership.
 *   · Below 860px it becomes a nested list, not a horizontally scrolling
 *     image.
 *
 * Two notes for whoever changes this next.
 *
 * ClearLabs is drawn as the last of the four children rather than third as
 * §6.7 lists them, so it sits beside the foundation it contracts with. Any
 * other order routes the dotted line straight through Clear Capital Holdings,
 * which would read as a relationship that does not exist.
 *
 * Every coordinate is derived from the constants below rather than typed in.
 * "When a row gains or loses a box, every connector below it silently
 * mis-aligns" — so nothing here is free to mis-align: add a child and the
 * bus, the stems and the drops all move together. */

const W = 1000;
const BOX_H = 76;
const ROOT_H = 68;

const ROW1_Y = 16;
const ROW2_Y = 150;
const ROW3_Y = 300;

const CHILD_W = 180;
const CHILD_GAP = 16;
const CHILD_X0 = 8;
const centreOf = (i: number) => CHILD_X0 + i * (CHILD_W + CHILD_GAP) + CHILD_W / 2;

const FOUNDATION_W = 180;
const FOUNDATION_X = CHILD_X0 + 4 * (CHILD_W + CHILD_GAP);

const GC_W = 170;
const GC_GAP = 16;

/* Clear Capital Holdings is the third child; its subtree hangs from it. */
const HOLDINGS_I = 2;
const CLEARLABS_I = 3;

function Box({
  x,
  y,
  w,
  h,
  name,
  note,
  dashed,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  name: string;
  note: string;
  dashed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="var(--color-paper-2)"
        stroke="var(--color-ink)"
        strokeWidth="1"
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      <text x={x + w / 2} y={y + h / 2 - 4} className="dia-name">
        {name}
      </text>
      <text x={x + w / 2} y={y + h / 2 + 16} className="dia-note">
        {note}
      </text>
    </g>
  );
}

export function StructureDiagram() {
  const { root, children, holdingsChildren, foundation, contractLabel } = STRUCTURE;

  /* Centred over its OWN children, not over the canvas. The foundation sits
     outside the ownership tree and to the right, so centring on the canvas
     pushes the root off its own subtree by a hundred units. */
  const rootCx = (centreOf(0) + centreOf(children.length - 1)) / 2;
  const busY = ROW2_Y - 30;

  const holdingsCx = centreOf(HOLDINGS_I);
  const clearlabsRight = CHILD_X0 + CLEARLABS_I * (CHILD_W + CHILD_GAP) + CHILD_W;

  /* Grandchildren are centred under Holdings, whatever Holdings' index is. */
  const gcTotal = holdingsChildren.length * GC_W + (holdingsChildren.length - 1) * GC_GAP;
  const gcX0 = holdingsCx - gcTotal / 2;
  const gcCentre = (i: number) => gcX0 + i * (GC_W + GC_GAP) + GC_W / 2;
  const gcBusY = ROW3_Y - 30;

  /* The dotted contract line drops below both boxes and elbows across, so the
     label has somewhere to sit that is not on top of the drawing. */
  const elbowY = ROW2_Y + BOX_H + 22;
  const foundationCx = FOUNDATION_X + FOUNDATION_W / 2;
  const clearlabsCx = centreOf(CLEARLABS_I);

  return (
    <svg
      viewBox={`0 0 ${W} ${ROW3_Y + BOX_H + 12}`}
      className="dia"
      aria-hidden="true"
      focusable="false"
    >
      {/* Ownership — solid. */}
      <g fill="none" stroke="var(--color-ink)" strokeWidth="1">
        <path d={`M ${rootCx} ${ROW1_Y + ROOT_H} V ${busY}`} />
        <path d={`M ${centreOf(0)} ${busY} H ${centreOf(children.length - 1)}`} />
        {children.map((c, i) => (
          <path key={c.name} d={`M ${centreOf(i)} ${busY} V ${ROW2_Y}`} />
        ))}

        <path d={`M ${holdingsCx} ${ROW2_Y + BOX_H} V ${gcBusY}`} />
        <path d={`M ${gcCentre(0)} ${gcBusY} H ${gcCentre(holdingsChildren.length - 1)}`} />
        {holdingsChildren.map((c, i) => (
          <path key={c.name} d={`M ${gcCentre(i)} ${gcBusY} V ${ROW3_Y}`} />
        ))}
      </g>

      {/* Contract — dotted, and labelled, because it is not ownership. */}
      <g fill="none" stroke="var(--color-ink-50)" strokeWidth="1" strokeDasharray="2 4">
        <path
          d={`M ${foundationCx} ${ROW2_Y + BOX_H} V ${elbowY} H ${clearlabsCx} V ${ROW2_Y + BOX_H}`}
        />
      </g>
      <text
        x={(foundationCx + clearlabsRight) / 2 + 10}
        y={elbowY + 20}
        className="dia-note dia-contract"
      >
        {contractLabel}
      </text>

      <Box x={rootCx - 120} y={ROW1_Y} w={240} h={ROOT_H} name={root.name} note={root.note} />

      {children.map((c, i) => (
        <Box
          key={c.name}
          x={CHILD_X0 + i * (CHILD_W + CHILD_GAP)}
          y={ROW2_Y}
          w={CHILD_W}
          h={BOX_H}
          name={c.name}
          note={c.note}
        />
      ))}

      {/* The only dashed box on the drawing. */}
      <Box
        x={FOUNDATION_X}
        y={ROW2_Y}
        w={FOUNDATION_W}
        h={BOX_H}
        name={foundation.name}
        note={foundation.note}
        dashed
      />

      {holdingsChildren.map((c, i) => (
        <Box
          key={c.name}
          x={gcX0 + i * (GC_W + GC_GAP)}
          y={ROW3_Y}
          w={GC_W}
          h={BOX_H}
          name={c.name}
          note={c.note}
        />
      ))}
    </svg>
  );
}

/* The text alternative, and the mobile version — one thing, not two. It is
   always in the DOM for assistive technology and becomes the visible drawing
   below 860px, because a diagram that scrolls sideways on a phone is worse
   than a list. */
export function StructureList() {
  const { root, children, holdingsChildren, foundation, contractLabel } = STRUCTURE;

  return (
    <div className="dia-list">
      <p className="dia-list-root">
        <strong>{root.name}</strong> <span className="t-note">{root.note}</span>
      </p>
      <ul>
        {children.map((c) => (
          <li key={c.name}>
            <strong>{c.name}</strong> <span className="t-note">{c.note}</span>
            {c.name === STRUCTURE.children[HOLDINGS_I].name && (
              <ul>
                {holdingsChildren.map((g) => (
                  <li key={g.name}>
                    <strong>{g.name}</strong> <span className="t-note">{g.note}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <p className="dia-list-outside">
        <strong>{foundation.name}</strong> <span className="t-note">{foundation.note}</span>
        <br />
        <span className="t-note">
          Outside the ownership tree — it {contractLabel}.
        </span>
      </p>
    </div>
  );
}
