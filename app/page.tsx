import Link from 'next/link';
import { Section, Band, Statement, Cols, Col, Ledger, Panel, Note, TextLink } from '@/components/primitives';
import { GapChart } from '@/components/visuals/GapChart';
import { MilestoneRail } from '@/components/visuals/MilestoneRail';
import { HERO, STATEMENT, GAP, PHASES, WAYS_IN, STATUS, UNDERNEATH } from '@/content/home';

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

      {/* S2 — The gap. The page's one full-bleed ink band (§3), and the only
          place the chart could sit: it is the strongest thing on the page and
          the ground change says so. The visual leads, the prose fills in what
          a chart cannot say. */}
      <Band tone="ink" rhythm="open" id="the-gap">
        <div className="grid12">
          <p className="rail rail-note">{GAP.rail}</p>
          <div className="content">
            <Cols>
              <Col span={6}>
                <h2 className="d2 section-head">{GAP.heading}</h2>
              </Col>
              <Col span={4}>
                <p className="d-sub">{GAP.sub}</p>
              </Col>
              <Col span={10}>
                <GapChart />
              </Col>
              <Col span={6}>
                <div className="prose t-body">
                  {GAP.prose.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>
              </Col>
              <Col span={4}>
                <Ledger items={[...GAP.ledger]} />
                <Note>{GAP.note}</Note>
              </Col>
            </Cols>
          </div>
        </div>
      </Band>

      {/* S3 — Three phases. A rail with stations, not three cards: the
          distance between the gates is half the claim. */}
      <Section rail={PHASES.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{PHASES.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{PHASES.sub}</p>
            <Note>{PHASES.standfirst}</Note>
          </Col>
          <Col span={10}>
            <MilestoneRail />
          </Col>
        </Cols>
      </Section>

      {/* S4 — Two ways in. Two columns, 3-7 and 8-12. */}
      <Section rail={WAYS_IN.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{WAYS_IN.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{WAYS_IN.sub}</p>
          </Col>
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

      {/* The statement. One sentence at display size and nothing else in the
          band — it is the line the whole argument rests on. */}
      <Statement>{STATEMENT}</Statement>

      {/* S5 — Status. Tight rhythm: a list of facts wants density, not air,
          and identical padding on every band reads as a wireframe. */}
      <Section rail={STATUS.rail} rhythm="tight">
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{STATUS.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{STATUS.sub}</p>
            <Note>{STATUS.standfirst}</Note>
          </Col>
          <Col span={10}>
            <Ledger items={[...STATUS.ledger]} />
          </Col>
        </Cols>
      </Section>

      {/* S6 — Underneath. */}
      <Section rail={UNDERNEATH.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{UNDERNEATH.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>
              {UNDERNEATH.sub}
            </p>
            <div className="prose t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              <p>{UNDERNEATH.prose}</p>
              <p>
                <TextLink href={UNDERNEATH.link.href}>{UNDERNEATH.link.label}</TextLink>
              </p>
            </div>
          </Col>
          <Col span={4}>
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
