import { Section, Cols, Col, Ledger, Panel, Note, Stat, Button, TextLink } from '@/components/primitives';
import { OPENING, NUMBERS, HOMES, BACKYARDS, GATE } from '@/content/housing';

export const metadata = {
  title: 'Housing',
  description:
    'The land under a Clear community is held in common by its members and is never sold. What you buy, pay down and take title to is the house — cost plus fifteen per cent, and we show the cost.',
};

export default function Housing() {
  return (
    <>
      {/* S1 — Opening. */}
      <Section rail={OPENING.rail}>
        <Cols>
          <Col span={10}>
            <h1 className="page-title">{OPENING.heading}</h1>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
            <Note>{OPENING.note}</Note>
          </Col>
          <Col span={6}>
            <Panel variant="plain" title={OPENING.panel.title}>
              <p>{OPENING.panel.body}</p>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S2 — The numbers. Three Stats, with the illustration disclaimer
          directly beneath them rather than in the footer. (§7 Legal) */}
      <Section rail={NUMBERS.rail}>
        <Cols>
          <Col span={10}>
            <h2 className="d2 section-head">{NUMBERS.heading}</h2>
          </Col>
          <Col span={10}>
            <div className="stat-row">
              {NUMBERS.stats.map((s) => (
                <Stat
                  key={s.figure}
                  figure={s.figure}
                  caption={s.caption}
                  live={'live' in s ? s.live : undefined}
                  muted={'muted' in s ? s.muted : undefined}
                />
              ))}
            </div>
            <Note>{NUMBERS.disclaimer}</Note>
          </Col>
          <Col span={6}>
            <div className="prose t-body">
              {NUMBERS.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={4}>
            <Panel variant="mark" title={NUMBERS.panel.title}>
              <p>{NUMBERS.panel.body}</p>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S3 — The homes. Prose 3-7, Ledger 8-12. */}
      <Section rail={HOMES.rail}>
        <Cols>
          <Col span={5}>
            <h2 className="d2 section-head">{HOMES.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              {HOMES.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={5}>
            <Ledger items={[...HOMES.ledger]} />
          </Col>
        </Cols>
      </Section>

      {/* S4 — Backyards. */}
      <Section rail={BACKYARDS.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{BACKYARDS.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              {BACKYARDS.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={3}>
            <Panel title={BACKYARDS.panel.title}>
              <p>{BACKYARDS.panel.body}</p>
              <p>
                <TextLink href={BACKYARDS.panel.link.href}>{BACKYARDS.panel.link.label}</TextLink>
              </p>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S5 — The gate. */}
      <Section rail={GATE.rail} rhythm="tight">
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{GATE.heading}</h2>
            <p className="t-body prose" style={{ marginTop: 'var(--spacing-3)' }}>
              {GATE.prose}
            </p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <Button href={GATE.cta.href}>{GATE.cta.label}</Button>
            </div>
          </Col>
        </Cols>
      </Section>
    </>
  );
}
