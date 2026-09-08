import { Ledger, Note, TextLink } from '@/components/primitives';
import {
  StructureDiagram,
  StructureDiagramStacked,
  StructureList,
} from '@/components/marks/StructureDiagram';
import { OPENING, STRUCTURE, GOVERNANCE, PROTOCOL, WHO } from '@/content/coop';

export const metadata = {
  title: 'The co-op',
  description:
    'How Clear is put together: two balance sheets that never touch, the reserved matters a future board cannot reverse, and an ownerless foundation holding the protocol.',
};

/* Migrated to the .hx layout system. The numbered rail is gone; the section
 * number is an inline label.
 *
 * The page had one genuinely strong idea — that a promise written as a policy
 * and the same promise written as a reserved matter are different objects —
 * and it was a sidebar panel next to the headline. It opens the page.
 *
 * The diagram takes the ink band. It is the thing a reader evaluating an
 * entity came for, and it spent the old page as a figure in the middle of a
 * column with a heading above it.
 *
 * Rhythm: a pair of statements -> a full-bleed drawing on ink -> a table and a
 * list -> a sentence and a pair -> a figure and an ask. */

export default function Coop() {
  return (
    <div className="hx">
      {/* S1 - The same promise, written two ways. */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>01</b> {OPENING.kicker}
        </p>
        <div className="hx-grid">
          <h1 className="hx-h2 c-two-thirds">{OPENING.heading}</h1>
          <p className="hx-lede c-third">{OPENING.lede}</p>

          <p className="d3 c-full">{OPENING.quote}</p>
          <div className="c-full hx-cols" data-n="2" data-rows="3">
            {OPENING.sides.map((side) => (
              <div
                className="side"
                key={side.label}
                data-live={'live' in side && side.live ? '' : undefined}
              >
                <p className="side-label">{side.label}</p>
                <p className="side-line">{side.line}</p>
                <p className="t-sm side-note">{side.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S2 - The structure, on this page's one ink band. The drawing above
          860px, the same content as a nested portrait layout below it, and
          the list for assistive technology at every width. */}
      <section className="hx-band" data-tone="ink" id="structure">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>02</b> {STRUCTURE.kicker}
          </p>
          <div className="hx-grid">
            <h2 className="hx-h2 c-two-thirds">{STRUCTURE.heading}</h2>
            <p className="hx-lede c-third">{STRUCTURE.sub}</p>

            <div className="c-full">
              <figure className="dia-figure">
                <StructureDiagram />
                <StructureDiagramStacked />
                <StructureList />
              </figure>
            </div>

            <div className="c-two-thirds">
              <p className="t-body hx-prose">{STRUCTURE.prose}</p>
              <p className="t-body" style={{ marginTop: 'var(--spacing-3)' }}>
                <TextLink href={STRUCTURE.link.href}>{STRUCTURE.link.label}</TextLink>
              </p>
            </div>
            <div className="c-third">
              {STRUCTURE.footnotes.map((f) => (
                <Note key={f.slice(0, 24)}>{f}</Note>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S3 - Governance. The table, then the five things nobody decides
          alone, which were a comma list inside one row's description. */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>03</b> {GOVERNANCE.kicker}
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{GOVERNANCE.heading}</h2>
          <p className="hx-lede c-third">{GOVERNANCE.sub}</p>

          <div className="c-full">
            <Ledger items={[...GOVERNANCE.ledger]} />
          </div>

          <div className="c-full">
            <p className="d3">{GOVERNANCE.reserved.title}</p>
            <ul className="crit" data-cols="2">
              {GOVERNANCE.reserved.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* S4 - The protocol. The best line on the page was the second half of
          a paragraph in a side column. */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>04</b> {PROTOCOL.kicker}
        </p>
        <div className="hx-grid">
          <p className="hx-stage-line c-two-thirds">{PROTOCOL.statement}</p>
          <div className="c-third">
            <p className="t-sm hx-prose">{PROTOCOL.body}</p>
            <Note>{PROTOCOL.note}</Note>
          </div>

          <div className="c-full hx-cols" data-n="2" data-rows="3">
            {PROTOCOL.sides.map((side) => (
              <div
                className="side"
                key={side.label}
                data-live={'live' in side && side.live ? '' : undefined}
              >
                <p className="side-label">{side.label}</p>
                <p className="side-line">{side.line}</p>
                <p className="t-sm side-note">{side.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5 - Who, and what we are looking for. */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>05</b> {WHO.kicker}
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{WHO.heading}</h2>
          <p className="hx-lede c-third">{WHO.sub}</p>

          {/* Two blocks of the same shape, so sharing rows helps them. The
              figure used to be paired with the hiring list, whose third row
              is a note and a link — which dragged "2017"'s caption 250px
              below the number it belongs to. */}
          <div className="c-full hx-cols" data-n="2" data-rows="3">
            {WHO.sides.map((side) => (
              <div className="side" key={side.label}>
                <p className="side-label">{side.label}</p>
                {'figure' in side ? (
                  <p className="side-fig">{side.figure}</p>
                ) : (
                  <p className="side-line">{side.line}</p>
                )}
                <p className="t-sm side-note">{side.note}</p>
              </div>
            ))}
          </div>

          {/* The ask runs the full width rather than sharing a row with a
              figure it has no structural relationship to. */}
          <div className="c-full">
            <p className="d3">{WHO.hiring.title}</p>
            <ul className="crit" data-cols="3">
              {WHO.hiring.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="t-sm hx-prose" style={{ marginTop: 'var(--spacing-3)' }}>
              {WHO.hiring.note}{' '}
              <TextLink href={WHO.hiring.link.href}>{WHO.hiring.link.label}</TextLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
