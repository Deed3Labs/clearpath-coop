import { Section, Cols, Col, Ledger, Panel, Note, TextLink } from '@/components/primitives';
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
          <Col span={10}>
            <h1 className="page-title is-long">{OPENING.heading}</h1>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
          </Col>
          <Col span={6}>
            <Panel variant="plain" title={OPENING.panel.title}>
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
            <p className="t-sm section-lede">{STRUCTURE.prose}</p>
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

      {/* S3 — Governance. Two columns. */}
      <Section rail={GOVERNANCE.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{GOVERNANCE.heading}</h2>
            <div style={{ marginTop: 'var(--spacing-3)' }}>
              <Ledger items={[...GOVERNANCE.ledger]} />
            </div>
          </Col>
          <Col span={4}>
            <h2 className="d2 section-head">{GOVERNANCE.protocol.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              {GOVERNANCE.protocol.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <Note>{GOVERNANCE.protocol.note}</Note>
          </Col>
        </Cols>
      </Section>

      {/* S4 — Who. */}
      <Section rail={WHO.rail} rhythm="tight">
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{WHO.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
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
