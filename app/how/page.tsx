import { Section, Band, Cols, Col, Ledger, Panel, Note, Pull, FigureXL } from '@/components/primitives';
import { SplitChooser } from '@/components/interactive/SplitChooser';
import { Waterfall } from '@/components/visuals/Waterfall';
import { OPENING, DRAW_ORDER, WATERFALL, TERM_PLANS, SPLIT, SAVINGS, CYCLE, COMPARISON } from '@/content/how';

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
            <h1 className="page-title">{OPENING.heading}</h1>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
          </Col>
          <Col span={2}>
            <Pull figure={OPENING.pull.figure} caption={OPENING.pull.caption} />
            <div style={{ marginTop: 'var(--spacing-3)' }}>
              <Panel title={OPENING.panel.title}>
                <p>{OPENING.panel.body}</p>
              </Panel>
            </div>
          </Col>
        </Cols>
      </Section>

      {/* S2 — Draw order. The signature visual, and this page's one ink band
          (§3): "cheapest first" is an ordering, and orderings are what
          diagrams are for. The tier ledger explains what the bar shows. */}
      <Band tone="ink" rhythm="open" id="draw-order">
        <div className="grid12">
          <p className="rail rail-note">{DRAW_ORDER.rail}</p>
          <div className="content">
            <Cols>
              <Col span={6}>
                <h2 className="d2 section-head">{DRAW_ORDER.heading}</h2>
              </Col>
              <Col span={4}>
                <p className="d-sub">{DRAW_ORDER.sub}</p>
              </Col>
              <Col span={10}>
                <Waterfall />
                <Note>{WATERFALL.note}</Note>
              </Col>
              <Col span={10}>
                <div className="cols10" style={{ marginTop: 'var(--spacing-4)' }}>
                  <Col span={5}>
                    <p className="t-body">{DRAW_ORDER.standfirst}</p>
                  </Col>
                  <Col span={5}>
                    <Note>{DRAW_ORDER.close}</Note>
                  </Col>
                </div>
              </Col>
            </Cols>
          </div>
        </div>
      </Band>

      {/* S3 — Term plans. Prose 3-7, Ledger 8-12. */}
      <Section rail={TERM_PLANS.rail}>
        <Cols>
          <Col span={5}>
            <h2 className="d2 section-head">{TERM_PLANS.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{TERM_PLANS.sub}</p>
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
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{SPLIT.sub}</p>
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
      <Section rail={SAVINGS.rail} rhythm="open">
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{SAVINGS.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{SAVINGS.sub}</p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <FigureXL figure={SAVINGS.figure.value} caption={SAVINGS.figure.caption} live />
            </div>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-4)' }}>
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
      <Section rail={CYCLE.rail} rhythm="tight">
        <Cols>
          <Col span={5}>
            <h2 className="d2 section-head">{CYCLE.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{CYCLE.sub}</p>
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
      <Section rail={COMPARISON.rail} rhythm="tight">
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{COMPARISON.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{COMPARISON.sub}</p>
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
