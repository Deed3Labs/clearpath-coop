import { Section, Cols, Col, Ledger, Steps, Panel, Note, Stat, FigureXL, Tiles } from '@/components/primitives';
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
          <Col span={10}>
            <h1 className="page-title">{OPENING.heading}</h1>
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

      {/* S2 — Draw order. Steps 3-9, standfirst 10-12. */}
      <Section rail={DRAW_ORDER.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{DRAW_ORDER.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{DRAW_ORDER.sub}</p>
          </Col>
          <Col span={10}>
            <Steps items={[...DRAW_ORDER.steps]} />
          </Col>
          <Col span={5}>
            <p className="t-body prose">{DRAW_ORDER.standfirst}</p>
          </Col>
          <Col span={5}>
            <Note>{DRAW_ORDER.close}</Note>
          </Col>
        </Cols>
      </Section>

      {/* S3 — Term plans. Prose 3-7, Ledger 8-12. */}
      <Section rail={TERM_PLANS.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{TERM_PLANS.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{TERM_PLANS.sub}</p>
          </Col>
          <Col span={3}>
            <div className="prose t-body">
              {TERM_PLANS.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={7}>
            <Ledger items={[...TERM_PLANS.ledger]} />
            <Note>{TERM_PLANS.close}</Note>
          </Col>
        </Cols>
      </Section>

      {/* S4 — The split. */}
      <Section rail={SPLIT.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{SPLIT.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{SPLIT.sub}</p>
          </Col>
          <Col span={3}>
            <p className="t-body prose">{SPLIT.standfirst}</p>
          </Col>
          <Col span={7}>
            <SplitChooser />
          </Col>
        </Cols>
      </Section>

      {/* S5 — Savings. Prose 3-9, two Panels 10-12. */}
      <Section rail={SAVINGS.rail} rhythm="open">
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{SAVINGS.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{SAVINGS.sub}</p>
          </Col>

          {/* Four facts that were one sixty-word sentence. */}
          <Col span={10}>
            <div className="stat-row">
              {SAVINGS.stats.map((s) => (
                <Stat key={s.figure} figure={s.figure} caption={s.caption} />
              ))}
            </div>
          </Col>

          <Col span={5}>
            <FigureXL figure={SAVINGS.gate.figure} caption={SAVINGS.gate.caption} live />
          </Col>
          <Col span={5}>
            <div className="prose t-body">
              {SAVINGS.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>

          <Col span={10}>
            <p className="d4" style={{ marginBottom: 'var(--spacing-2)' }}>{SAVINGS.tilesHeading}</p>
            <Tiles items={SAVINGS.tiles} />
          </Col>
        </Cols>
      </Section>

      {/* S6 — The cycle. Prose 3-7, Ledger 8-12. */}
      <Section rail={CYCLE.rail} rhythm="tight">
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{CYCLE.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{CYCLE.sub}</p>
          </Col>
          <Col span={3}>
            <p className="t-body prose">{CYCLE.prose}</p>
          </Col>
          <Col span={7}>
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
            <div className="versus">
              <p className="t-note">{COMPARISON.pair.theirs.label}</p>
              <p className="d2 versus-line">{COMPARISON.pair.theirs.line}</p>
              <p className="t-sm versus-note">{COMPARISON.ours[0].description}</p>
            </div>
          </Col>
          <Col span={5}>
            <div className="versus is-ours">
              <p className="t-note">{COMPARISON.pair.ours.label}</p>
              <p className="d2 versus-line">{COMPARISON.pair.ours.line}</p>
              <p className="t-sm versus-note">{COMPARISON.ours[1].description}</p>
            </div>
          </Col>
          <Col span={10}>
            <Ledger items={[...COMPARISON.theirs]} />
          </Col>
        </Cols>
      </Section>
    </>
  );
}
