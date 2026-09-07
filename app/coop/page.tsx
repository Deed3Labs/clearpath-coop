import { Section, Band, Cols, Col, Ledger, Panel, Note, TextLink, FigureXL } from '@/components/primitives';
import { VoteMarks } from '@/components/visuals/VoteMarks';
import {
  StructureDiagram,
  StructureDiagramStacked,
  StructureList,
} from '@/components/marks/StructureDiagram';
import { OPENING, STRUCTURE, GOVERNANCE, WHO } from '@/content/coop';

export const metadata = {
  title: 'The co-op',
  description:
    'How Clear is put together: two balance sheets that never touch, the reserved matters a future board cannot reverse, and an ownerless foundation holding the protocol.',
};

export default function Coop() {
  return (
    <>
      {/* S1 — Opening. */}
      <Section rail={OPENING.rail}>
        <Cols>
          <Col span={7}>
            <h1 className="page-title is-long">{OPENING.heading}</h1>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{OPENING.sub}</p>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
          </Col>
          <Col span={3}>
            <Panel title={OPENING.panel.title}>
              <p>{OPENING.panel.body}</p>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S2 — Structure. The drawing above 860px, the same content as a nested
          list below it and for assistive technology. */}
      <Section rail={STRUCTURE.rail}>
        <Cols>
          <Col span={5}>
            <h2 className="d2 section-head">{STRUCTURE.heading}</h2>
          </Col>
          <Col span={5}>
            <p className="d-sub">{STRUCTURE.sub}</p>
            <Note>{STRUCTURE.prose}</Note>
          </Col>
          <Col span={10}>
            <figure className="dia-figure">
              <StructureDiagram />
              <StructureDiagramStacked />
              <StructureList />
            </figure>

            <div className="dia-footnotes">
              {STRUCTURE.footnotes.map((f) => (
                <p className="t-note" key={f.slice(0, 24)}>
                  {f}
                </p>
              ))}
            </div>

            <p className="t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              <TextLink href={STRUCTURE.link.href}>{STRUCTURE.link.label}</TextLink>
            </p>
          </Col>
        </Cols>
      </Section>

      {/* S3 — Governance, on this page's one ink band (§3). The marks lead:
          "one vote each regardless of balance" is a claim about size, and
          size is what prose is worst at. */}
      <Band tone="ink" rhythm="open" id="governance">
        <div className="grid12">
          <p className="rail rail-note">{GOVERNANCE.rail}</p>
          <div className="content">
            <Cols>
              <Col span={6}>
                <h2 className="d2 section-head">{GOVERNANCE.heading}</h2>
              </Col>
              <Col span={4}>
                <p className="d-sub">{GOVERNANCE.sub}</p>
              </Col>
              <Col span={6}>
                <VoteMarks />
              </Col>
              <Col span={4}>
                <Ledger items={[...GOVERNANCE.ledger]} />
              </Col>
              <Col span={10}>
                <hr className="band-rule" />
              </Col>
              <Col span={6}>
                <h3 className="d3">{GOVERNANCE.protocol.heading}</h3>
                <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
                  {GOVERNANCE.protocol.prose.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>
                <Note>{GOVERNANCE.protocol.note}</Note>
              </Col>
            </Cols>
          </div>
        </div>
      </Band>

      {/* S4 — Who. */}
      <Section rail={WHO.rail} rhythm="tight">
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{WHO.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{WHO.sub}</p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <FigureXL figure={WHO.figure.value} caption={WHO.figure.caption} />
            </div>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-4)' }}>
              {WHO.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={3}>
            <Panel title={WHO.panel.title}>
              <p>{WHO.panel.body}</p>
              <p>
                <TextLink href={WHO.panel.link.href}>{WHO.panel.link.label}</TextLink>
              </p>
            </Panel>
          </Col>
        </Cols>
      </Section>
    </>
  );
}
