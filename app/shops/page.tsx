import { Section, Cols, Col, Ledger, Steps, Panel, Note, Button } from '@/components/primitives';
import { MerchantCalculator } from '@/components/interactive/MerchantCalculator';
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

      {/* S2 — The difference. */}
      <Section rail={DIFFERENCE.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head is-long">{DIFFERENCE.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="t-sm section-lede">{DIFFERENCE.standfirst}</p>
          </Col>
          <Col span={10}>
            <MerchantCalculator />
          </Col>
        </Cols>
      </Section>

      {/* S3 — At the counter. Steps 3-9, Panels 10-12. */}
      <Section rail={COUNTER.rail}>
        <Cols>
          <Col span={10}>
            <h2 className="d2 section-head">{COUNTER.heading}</h2>
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
      <Section rail={FIT.rail}>
        <Cols>
          <Col span={5}>
            <h3 className="d3">{FIT.works.heading}</h3>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-2)' }}>
              <p>{FIT.works.lead}</p>
              <p>{FIT.works.body}</p>
            </div>
          </Col>
          <Col span={5}>
            <h3 className="d3">{FIT.doesnt.heading}</h3>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-2)' }}>
              <p>{FIT.doesnt.lead}</p>
              <p>{FIT.doesnt.body}</p>
            </div>
          </Col>
        </Cols>
      </Section>

      {/* S5 — Founding partners. */}
      <Section rail={FOUNDING.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{FOUNDING.heading}</h2>
            <p className="t-body prose" style={{ marginTop: 'var(--spacing-3)' }}>
              {FOUNDING.standfirst}
            </p>
          </Col>
          <Col span={4}>
            <Ledger items={[...FOUNDING.ledger]} />
          </Col>
          <Col span={6}>
            <p className="t-body prose">{FOUNDING.terms}</p>
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
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              <p>{MONEY.payouts.body}</p>
            </div>
            <Note>{MONEY.payouts.note}</Note>
          </Col>
          <Col span={5}>
            <h2 className="d3 section-head">{MONEY.refunds.heading}</h2>
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
      <Section rail={MEMBERSHIP.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{MEMBERSHIP.heading}</h2>
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
