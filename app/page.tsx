import Link from 'next/link';
import { Section, Band, Cols, Col, Ledger, Note, TextLink } from '@/components/primitives';
import { HERO, PROOF, STRANDS, STATUS, CLOSE } from '@/content/home';

/* Four beats. See the header of content/home.ts for why it is four and not
 * seven, and why the flagship chart is on /how rather than here. */

export default function Home() {
  return (
    <>
      {/* 1 — The claim. Type-led: the headline owns it and nothing sits
          beside it. Agreed at review per §5. */}
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
            <p className="hero-lede" data-rise style={{ ['--i' as string]: 2 }}>
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

      {/* 2 — The proof. This page's one ink band (§3), carrying one figure at
          full size and the sentence it lands. Nothing else is in it. */}
      <Band tone="ink" rhythm="open" id="the-gap">
        <div className="grid12">
          <p className="rail rail-note">{PROOF.rail}</p>
          <div className="content proof">
            <p className="proof-figure">{PROOF.figure}</p>
            <p className="proof-caption t-sm">{PROOF.caption}</p>

            <div className="proof-turn">
              <h2 className="d2 proof-heading">{PROOF.heading}</h2>
              <p className="d-sub">{PROOF.sub}</p>
            </div>

            <div className="proof-ledger">
              <Ledger items={[...PROOF.ledger]} />
              <Note>{PROOF.note}</Note>
              <p className="t-body proof-link">
                <TextLink href={PROOF.link.href}>{PROOF.link.label}</TextLink>
              </p>
            </div>
          </div>
        </div>
      </Band>

      {/* 3 — What it is. Three strands, one band. */}
      <Section rail={STRANDS.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{STRANDS.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{STRANDS.sub}</p>
          </Col>
          <Col span={10}>
            <ol className="strands">
              {STRANDS.items.map((item) => (
                <li key={item.n}>
                  <p className="strand-n">{item.n}</p>
                  <h3 className="d4 strand-title">{item.title}</h3>
                  <p className="t-sm strand-body">{item.body}</p>
                  <p className="strand-link">
                    <TextLink href={item.link.href}>{item.link.label}</TextLink>
                  </p>
                </li>
              ))}
            </ol>
          </Col>
        </Cols>
      </Section>

      {/* 4 — Where this is, and the door. Tight: a footnote to the
          invitation, not a section competing with it. */}
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

      <Section rhythm="tight" id="close">
        <Cols>
          <Col span={10}>
            <div className="close">
              <h2 className="d2 close-head">{CLOSE.heading}</h2>
              <div className="close-actions">
                <Link href={CLOSE.member.href} className="btn" data-variant="primary">
                  {CLOSE.member.label}
                </Link>
                <Link href={CLOSE.shop.href} className="btn" data-variant="ghost">
                  {CLOSE.shop.label}
                </Link>
              </div>
              <p className="t-note close-note">{CLOSE.note}</p>
            </div>
          </Col>
        </Cols>
      </Section>
    </>
  );
}
