import Link from 'next/link';
import { Section, Cols, Col, Ledger, Steps, Panel, Note, TextLink } from '@/components/primitives';
import { HERO, GAP, PHASES, WAYS_IN, STATUS, UNDERNEATH } from '@/content/home';

export default function Home() {
  return (
    <>
      {/* S1 — Hero. Type-led: the headline owns it and nothing sits beside
          it. Agreed at review per §5. */}
      <section className="wrap section hero">
        <div className="grid12 hero-grid">
          <div className="hero-copy">
            <h1 className="d1 hero-headline">
              {HERO.headline.map((line, i) => (
                <span key={line} data-rise style={{ ['--i' as string]: i }}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="t-lede hero-lede" data-rise style={{ ['--i' as string]: 2 }}>
              {HERO.lede}
            </p>
            <div className="hero-actions" data-rise style={{ ['--i' as string]: 3 }}>
              <Link href={HERO.primary.href} className="btn" data-variant="primary">
                {HERO.primary.label}
              </Link>
              <Link href={HERO.ghost.href} className="btn" data-variant="ghost">
                {HERO.ghost.label}
              </Link>
            </div>
          </div>

          <div className="hero-meta" data-rise style={{ ['--i' as string]: 4 }}>
            {HERO.meta.map((m) => (
              <p className="t-note" key={m}>
                {m}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* S2 — the gap. Prose 3-9, ledger 10-12 of the twelve-column grid,
          which is columns 1-7 and 8-10 of the ten content tracks. */}
      <Section rail={GAP.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{GAP.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              {GAP.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Col>
          <Col span={3}>
            <Ledger items={[...GAP.ledger]} />
            <Note>{GAP.note}</Note>
          </Col>
        </Cols>
      </Section>

      {/* S3 — three phases. */}
      <Section rail={PHASES.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{PHASES.heading}</h2>
          </Col>
          <Col span={3}>
            <p className="t-sm section-lede">{PHASES.standfirst}</p>
          </Col>
          <Col span={10}>
            <Steps items={[...PHASES.steps]} />
          </Col>
        </Cols>
      </Section>

      {/* S4 — Two ways in. Two columns, 3-7 and 8-12. */}
      <Section rail={WAYS_IN.rail}>
        <Cols>
          <Col span={5}>
            <h3 className="d3">{WAYS_IN.shop.heading}</h3>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-2)' }}>
              {WAYS_IN.shop.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
              <p>
                <TextLink href={WAYS_IN.shop.link.href}>{WAYS_IN.shop.link.label}</TextLink>
              </p>
            </div>
          </Col>
          <Col span={5}>
            <h3 className="d3">{WAYS_IN.member.heading}</h3>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-2)' }}>
              {WAYS_IN.member.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
              <p>
                <TextLink href={WAYS_IN.member.link.href}>{WAYS_IN.member.link.label}</TextLink>
              </p>
            </div>
          </Col>
        </Cols>
      </Section>

      {/* S5 — status. */}
      <Section rail={STATUS.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{STATUS.heading}</h2>
          </Col>
          <Col span={3}>
            <p className="t-sm section-lede">{STATUS.standfirst}</p>
          </Col>
          <Col span={10}>
            <Ledger items={[...STATUS.ledger]} />
          </Col>
        </Cols>
      </Section>

      {/* S6 — underneath. */}
      <Section rail={UNDERNEATH.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{UNDERNEATH.heading}</h2>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              <p>{UNDERNEATH.prose}</p>
              <p>
                <TextLink href={UNDERNEATH.link.href}>{UNDERNEATH.link.label}</TextLink>
              </p>
            </div>
          </Col>
          <Col span={3}>
            <Panel variant="mark">
              <p className="t-note">{UNDERNEATH.panel.source}</p>
              {UNDERNEATH.panel.body.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Panel>
          </Col>
        </Cols>
      </Section>
    </>
  );
}
