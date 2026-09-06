import { Section, Cols, Col, Ledger, Steps, Panel, Note } from '@/components/primitives';
import { SplitChooser } from '@/components/interactive/SplitChooser';
import { OPENING, DRAW_ORDER, TERM_PLANS, SPLIT, SAVINGS, CYCLE, COMPARISON } from '@/content/how';

export const metadata = {
  title: 'How it works',
  description:
    'One balance, drawn cheapest first. Savings-backed credit that gets cheaper the longer you hold it, and a term-plan shelf with a single ceiling across every shop.',
};

export default function How() {
  return (
    <>
      {/* S1 — Opening. Cols 3-10, Panel 11-12. */}
      <Section rail={OPENING.rail}>
        <Cols>
          <Col span={8}>
            <h1 className="d1 section-head">{OPENING.heading}</h1>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
          </Col>
          <Col span={2}>
            <Panel title={OPENING.panel.title}>
              <p>{OPENING.panel.body}</p>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S2 — Draw order. Steps 3-9, standfirst 10-12. */}
      <Section rail={DRAW_ORDER.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{DRAW_ORDER.heading}</h2>
          </Col>
          <Col span={3}>
            <p className="t-sm section-lede">{DRAW_ORDER.standfirst}</p>
          </Col>
          <Col span={10}>
            <Steps items={[...DRAW_ORDER.steps]} />
            <p className="t-body prose" style={{ marginTop: 'var(--spacing-3)' }}>
              {DRAW_ORDER.close}
            </p>
          </Col>
        </Cols>
      </Section>

      {/* S3 — Term plans. Prose 3-7, Ledger 8-12. */}
      <Section rail={TERM_PLANS.rail}>
        <Cols>
          <Col span={5}>
            <h2 className="d2 section-head">{TERM_PLANS.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              {TERM_PLANS.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={5}>
            <Ledger items={[...TERM_PLANS.ledger]} />
            <Note>{TERM_PLANS.close}</Note>
          </Col>
        </Cols>
      </Section>

      {/* S4 — The split. */}
      <Section rail={SPLIT.rail}>
        <Cols>
          <Col span={5}>
            <h2 className="d2 section-head">{SPLIT.heading}</h2>
            <p className="t-body prose" style={{ marginTop: 'var(--spacing-3)' }}>
              {SPLIT.standfirst}
            </p>
          </Col>
          <Col span={5}>
            <SplitChooser />
          </Col>
        </Cols>
      </Section>

      {/* S5 — Savings. Prose 3-9, two Panels 10-12. */}
      <Section rail={SAVINGS.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{SAVINGS.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              {SAVINGS.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={3}>
            <div className="panel-stack">
              {SAVINGS.panels.map((p) => (
                <Panel title={p.title} key={p.title}>
                  {p.body ? (
                    <p>{p.body}</p>
                  ) : (
                    <ul className="panel-list">
                      {p.list?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </Panel>
              ))}
            </div>
          </Col>
        </Cols>
      </Section>

      {/* S6 — The cycle. Prose 3-7, Ledger 8-12. */}
      <Section rail={CYCLE.rail}>
        <Cols>
          <Col span={5}>
            <h2 className="d2 section-head">{CYCLE.heading}</h2>
            <p className="t-body prose" style={{ marginTop: 'var(--spacing-3)' }}>
              {CYCLE.prose}
            </p>
          </Col>
          <Col span={5}>
            <Ledger items={[...CYCLE.ledger]} />
            <Note>{CYCLE.close}</Note>
          </Col>
        </Cols>
      </Section>

      {/* S7 — Comparison. Two ledgers, 3-7 and 8-12. */}
      <Section rail={COMPARISON.rail}>
        <Cols>
          <Col span={10}>
            <h2 className="d2 section-head">{COMPARISON.heading}</h2>
          </Col>
          <Col span={5}>
            <Ledger items={[...COMPARISON.ours]} />
          </Col>
          <Col span={5}>
            <Ledger items={[...COMPARISON.theirs]} />
          </Col>
        </Cols>
      </Section>
    </>
  );
}
