import { Section, Band, Cols, Col, Ledger, Panel, Note, Pull, FigureXL } from '@/components/primitives';
import { SplitChooser } from '@/components/interactive/SplitChooser';
import { Waterfall } from '@/components/visuals/Waterfall';
import {
  OPENING,
  DRAW_ORDER,
  WATERFALL,
  TERM_PLANS,
  SPLIT,
  SAVINGS,
  CYCLE,
  COMPARISON,
} from '@/content/how';

export const metadata = {
  title: 'How it works',
  description:
    'One balance, drawn cheapest first. Savings-backed credit that gets cheaper the longer you hold it, and a term-plan shelf with a single ceiling across every shop.',
};

/* The spine: the claim, the mechanism, the thing that moves you along it, the
 * guardrails, the honest comparison. Savings used to sit two sections further
 * down, behind term plans and splits — so the page said "your third year is
 * cheaper because you are borrowing against your own savings", drew the order,
 * and then answered "how do I climb it?" three screens later. */

export default function How() {
  return (
    <>
      {/* S1 — The claim. */}
      <Section rail={OPENING.rail}>
        <Cols>
          <Col span={7}>
            <h1 className="page-title">{OPENING.heading}</h1>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
          </Col>
          <Col span={3}>
            <Pull figure={OPENING.pull.figure} caption={OPENING.pull.caption} />
            <div style={{ marginTop: 'var(--spacing-3)' }}>
              <Panel title={OPENING.panel.title}>
                <p>{OPENING.panel.body}</p>
              </Panel>
            </div>
          </Col>
        </Cols>
      </Section>

      {/* S2 — The mechanism, and this page's one ink band (§3). The band is
          the figure and the bar. Nothing else is in it. */}
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
            </Cols>
          </div>
        </div>
      </Band>

      {/* S2b — what the four tiers are, on paper. This was a four-paragraph
          ledger inside the band above, which made that band 1,463px of
          reading on a dark ground. */}
      <Section rail={DRAW_ORDER.tiersRail} rhythm="tight">
        <Cols>
          <Col span={6}>
            <h2 className="d3">{DRAW_ORDER.tiersHeading}</h2>
          </Col>
          <Col span={4}>
            <p className="t-body">{DRAW_ORDER.standfirst}</p>
          </Col>
          <Col span={10}>
            <Ledger
              items={WATERFALL.tiers.map((t) => ({
                label: t.label,
                value: t.cost,
                description: t.body,
              }))}
            />
            <Note>{DRAW_ORDER.close}</Note>
          </Col>
        </Cols>
      </Section>

      {/* S3 — What moves you along that order. Directly behind the mechanism,
          because it is the answer to the question the mechanism raises. */}
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

      {/* S4 — The guardrails: one shelf, one ceiling. */}
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

      {/* S5 — And you choose how to clear it. */}
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

      {/* S6 — The cycle. */}
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

      {/* S7 — The page ends on its strongest line rather than on a table.
          This was two four-row ledgers side by side. */}
      <Section rail={COMPARISON.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{COMPARISON.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{COMPARISON.sub}</p>
          </Col>

          <Col span={10}>
            <dl className="versus">
              <div>
                <dt className="t-note">{COMPARISON.pair.theirs.label}</dt>
                <dd className="versus-line">{COMPARISON.pair.theirs.value}</dd>
              </div>
              <div className="is-ours">
                <dt className="t-note">{COMPARISON.pair.ours.label}</dt>
                <dd className="versus-line">{COMPARISON.pair.ours.value}</dd>
              </div>
            </dl>
            <Note>{COMPARISON.note}</Note>
          </Col>

          <Col span={10}>
            <Ledger items={[...COMPARISON.after]} />
          </Col>
        </Cols>
      </Section>
    </>
  );
}
