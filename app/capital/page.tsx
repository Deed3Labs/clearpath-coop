import { Section, Cols, Col, Ledger, Steps, Panel, Button, TextLink } from '@/components/primitives';
import {
  OPENING,
  SPLIT,
  SCALE,
  PROTECTIONS,
  DOWNSIDES,
  DOWNSIDES_SECTION,
  NEXT,
} from '@/content/capital';

export const metadata = {
  title: 'Clear Capital',
  description:
    'Clear Capital Holdings is the separate company through which investors and property contributors participate in the cooperative’s assets — and what stops it ending up on the opposite side of the members.',
};

export default function Capital() {
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

      {/* S2 — Why the two sides do not collide. Structural voice: here the
          co-op is the legal actor and the reader is evaluating an entity. */}
      <Section rail={SPLIT.rail}>
        <Cols>
          <Col span={5}>
            <h2 className="d2 section-head">{SPLIT.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              {SPLIT.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={5}>
            <Ledger items={[...SPLIT.ledger]} />
          </Col>
        </Cols>
      </Section>

      {/* S3 — Contributing at scale. */}
      <Section rail={SCALE.rail}>
        <Cols>
          <Col span={10}>
            <h2 className="d2 section-head">{SCALE.heading}</h2>
          </Col>
          <Col span={4}>
            <div className="prose t-body">
              <p>{SCALE.prose}</p>
              <p>
                <TextLink href={SCALE.link.href}>{SCALE.link.label}</TextLink>
              </p>
            </div>
          </Col>
          <Col span={6}>
            <Ledger items={[...SCALE.ledger]} />
          </Col>
        </Cols>
      </Section>

      {/* S4 — What actually protects a contributor. */}
      <Section rail={PROTECTIONS.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{PROTECTIONS.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="t-sm section-lede">{PROTECTIONS.standfirst}</p>
          </Col>
          <Col span={10}>
            <Steps items={[...PROTECTIONS.steps]} />
          </Col>
        </Cols>
      </Section>

      {/* S5 — The honest downsides. The panel is imported from
          content/contribute so "verbatim" is enforced by the module system
          rather than by remembering, and it is not softened for an
          institutional reader. */}
      <Section rail={DOWNSIDES_SECTION.rail} rhythm="tight">
        <Cols>
          <Col span={6}>
            <Panel title={DOWNSIDES.title}>
              <ul className="panel-list">
                {DOWNSIDES.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
          </Col>
          <Col span={4}>
            <p className="t-body prose">{DOWNSIDES_SECTION.extra}</p>
          </Col>
        </Cols>
      </Section>

      {/* S6 — What happens next, and what does not. */}
      <Section rail={NEXT.rail} rhythm="tight">
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{NEXT.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              {NEXT.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <Button href={NEXT.cta.href}>{NEXT.cta.label}</Button>
            </div>
          </Col>
        </Cols>
      </Section>
    </>
  );
}
