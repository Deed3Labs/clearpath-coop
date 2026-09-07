import { Section, Band, Cols, Col, Ledger, Steps, Panel, Note, Button, FigureXL } from '@/components/primitives';
import { MerchantCalculator } from '@/components/interactive/MerchantCalculator';
import { TimingDiagram } from '@/components/visuals/TimingDiagram';
import { RefundLanes } from '@/components/visuals/RefundLanes';
import { OPENING, DIFFERENCE, COUNTER, FIT, FOUNDING, MONEY, MEMBERSHIP } from '@/content/shops';

export const metadata = {
  title: 'For shops',
  description:
    'Clear finances the customers who cannot pay that day at 2.5% of the ticket, pays you on net-30, and carries the default itself. No exclusivity and no hardware to buy.',
};

export default function Shops() {
  return (
    <>
      {/* S1 — Opening. Cols 3-10, Ledger 11-12. */}
      <Section rail={OPENING.rail}>
        <Cols>
          <Col span={7}>
            <h1 className="page-title">{OPENING.heading}</h1>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{OPENING.sub}</p>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <Button href={OPENING.cta.href}>{OPENING.cta.label}</Button>
            </div>
          </Col>
          <Col span={3}>
            <Ledger items={[...OPENING.ledger]} />
          </Col>
        </Cols>
      </Section>

      {/* S2 — The difference. This page's one ink band (§3), and the argument
          it rests on: the discount is a difference in WHEN money moves, which
          is a timing diagram. The calculator underneath prices it. */}
      <Band tone="ink" rhythm="open" id="the-difference">
        <div className="grid12">
          <p className="rail rail-note">{DIFFERENCE.rail}</p>
          <div className="content">
            <Cols>
              <Col span={6}>
                <h2 className="d2 section-head is-long">{DIFFERENCE.heading}</h2>
              </Col>
              <Col span={4}>
                <p className="d-sub">{DIFFERENCE.sub}</p>
              </Col>
              <Col span={10}>
                <TimingDiagram />
                <Note>{DIFFERENCE.timing.note}</Note>
              </Col>
              <Col span={10}>
                <hr className="band-rule" />
                <p className="t-body" style={{ maxWidth: '46ch' }}>
                  {DIFFERENCE.standfirst}
                </p>
                <div style={{ marginTop: 'var(--spacing-4)' }}>
                  <MerchantCalculator />
                </div>
              </Col>
            </Cols>
          </div>
        </div>
      </Band>

      {/* S3 — At the counter. Steps 3-9, Panels 10-12. */}
      <Section rail={COUNTER.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{COUNTER.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{COUNTER.sub}</p>
          </Col>
          <Col span={7}>
            <Steps items={[...COUNTER.steps]} />
          </Col>
          <Col span={3}>
            <div className="panel-stack">
              {COUNTER.panels.map((p) => (
                <Panel title={p.title} key={p.title}>
                  <p>{p.body}</p>
                </Panel>
              ))}
            </div>
          </Col>
        </Cols>
      </Section>

      {/* S4 — Fit. Two columns. */}
      <Section rail={FIT.rail} rhythm="tight">
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{FIT.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{FIT.sub}</p>
          </Col>
          <Col span={5}>
            <h3 className="d3">{FIT.works.heading}</h3>
            <ul className="terms-list is-single">
              {FIT.works.tests.map((t) => (
                <li className="t-sm" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="t-sm prose">{FIT.works.body}</p>
          </Col>
          <Col span={5}>
            <h3 className="d3">{FIT.doesnt.heading}</h3>
            <ul className="terms-list is-single">
              {FIT.doesnt.tests.map((t) => (
                <li className="t-sm" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="t-sm prose">{FIT.doesnt.body}</p>
          </Col>
        </Cols>
      </Section>

      {/* S5 — Founding partners. */}
      <Section rail={FOUNDING.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{FOUNDING.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{FOUNDING.sub}</p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <FigureXL figure={FOUNDING.figure.value} caption={FOUNDING.figure.caption} live />
            </div>
          </Col>
          <Col span={4}>
            <Ledger items={[...FOUNDING.ledger]} />
          </Col>
          <Col span={6}>
            <p className="d4">{FOUNDING.terms.lead}</p>
            <ul className="terms-list">
              {FOUNDING.terms.list.map((t) => (
                <li className="t-sm" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="t-sm">{FOUNDING.terms.close}</p>
            <Note>{FOUNDING.note}</Note>
          </Col>
          <Col span={4}>
            <Panel title={FOUNDING.panel.title}>
              <p>{FOUNDING.panel.body}</p>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S6 — Getting paid, and refunds. */}
      <Section rail={MONEY.rail}>
        <Cols>
          <Col span={5}>
            <h2 className="d3 section-head">{MONEY.payouts.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-2)' }}>{MONEY.payouts.sub}</p>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              <p>{MONEY.payouts.body}</p>
            </div>
            <Note>{MONEY.payouts.note}</Note>
          </Col>
          <Col span={5}>
            <h2 className="d3 section-head">{MONEY.refunds.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-2)' }}>{MONEY.refunds.sub}</p>
            <div style={{ marginTop: 'var(--spacing-3)' }}>
              <RefundLanes />
            </div>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              <p>{MONEY.refunds.body}</p>
            </div>
            <div style={{ marginTop: 'var(--spacing-3)' }}>
              <Ledger items={[...MONEY.refunds.ledger]} />
            </div>
          </Col>
        </Cols>
      </Section>

      {/* S7 — Membership. */}
      <Section rail={MEMBERSHIP.rail} rhythm="tight">
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{MEMBERSHIP.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{MEMBERSHIP.sub}</p>
            <p className="t-body prose" style={{ marginTop: 'var(--spacing-3)' }}>
              {MEMBERSHIP.body}
            </p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <Button href={MEMBERSHIP.cta.href}>{MEMBERSHIP.cta.label}</Button>
            </div>
          </Col>
        </Cols>
      </Section>
    </>
  );
}
