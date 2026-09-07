import { Section, Band, Cols, Col, Ledger, Panel, Note, Button, TextLink, FigureXL } from '@/components/primitives';
import { CostStack, MonthlyRange } from '@/components/visuals/CostStack';
import { LotPlan } from '@/components/visuals/LotPlan';
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
          <Col span={7}>
            <h1 className="page-title">{OPENING.heading}</h1>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{OPENING.sub}</p>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
            <Note>{OPENING.note}</Note>
          </Col>
          <Col span={3}>
            <Panel title={OPENING.panel.title}>
              <p>{OPENING.panel.body}</p>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S2 — The numbers. Two charts for the two numbers a buyer weighs, on
          this page's one ink band (§3). The three figures that used to sit in
          a row here left the reader to do the subtraction the heading is
          about. The illustration disclaimer sits with the figures rather than
          in the footer. (§7 Legal) */}
      <Band tone="ink" rhythm="open" id="the-numbers">
        <div className="grid12">
          <p className="rail rail-note">{NUMBERS.rail}</p>
          <div className="content">
            <Cols>
              <Col span={6}>
                <h2 className="d2 section-head">{NUMBERS.heading}</h2>
              </Col>
              <Col span={4}>
                <p className="d-sub">{NUMBERS.sub}</p>
              </Col>
              <Col span={10}>
                <CostStack />
                <Note>{NUMBERS.disclaimer}</Note>
              </Col>
              <Col span={10}>
                <hr className="band-rule" />
              </Col>
              <Col span={5}>
                <MonthlyRange />
              </Col>
              <Col span={5}>
                <div className="prose t-body">
                  {NUMBERS.prose.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>
                <div style={{ marginTop: 'var(--spacing-3)' }}>
                  <Panel variant="mark" title={NUMBERS.panel.title}>
                    <p>{NUMBERS.panel.body}</p>
                  </Panel>
                </div>
              </Col>
            </Cols>
          </div>
        </div>
      </Band>

      {/* S3 — The homes. The plan leads: the sentence it replaces was a plan
          drawing somebody had written out longhand. */}
      <Section rail={HOMES.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{HOMES.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{HOMES.sub}</p>
          </Col>
          <Col span={10}>
            <LotPlan />
          </Col>
          <Col span={4}>
            <div className="prose t-body">
              {HOMES.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={6}>
            <Ledger items={[...HOMES.ledger]} />
          </Col>
        </Cols>
      </Section>

      {/* S4 — Backyards. */}
      <Section rail={BACKYARDS.rail} rhythm="open">
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{BACKYARDS.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{BACKYARDS.sub}</p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <FigureXL figure={BACKYARDS.figure.value} caption={BACKYARDS.figure.caption} />
            </div>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-4)' }}>
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
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{GATE.sub}</p>
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
