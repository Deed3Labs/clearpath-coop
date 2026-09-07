import Link from 'next/link';
import { Ledger, Note, TextLink } from '@/components/primitives';
import { HERO, GAP, PHASES, WAYS_IN, STATUS, UNDERNEATH } from '@/content/home';

/* The home page. Built on the .hx layout system, not converted from the old
 * sections — the two-column numbered rail those used boxed every band into
 * columns 3–12, which made an edge-to-edge bento structurally impossible.
 * The rail is gone; the section number is an inline label.
 *
 * Rhythm, deliberately: type → two figures on full-bleed ink → unequal cells
 * edge to edge → two columns → a list → one sentence. No two consecutive
 * sections share a shape. */

export default function Home() {
  return (
    <div className="hx">
      {/* ── S1 · Hero ──────────────────────────────────────────────────── */}
      <section className="hx-band hx-wrap hero" data-pad="open">
        <div className="hx-grid hero-grid">
          <h1 className="d1 hero-headline">
            <span data-rise style={{ ['--i' as string]: 0 }}>
              {HERO.headline[0]}
            </span>
            <span
              className="misreg"
              data-ghost={HERO.headline[1]}
              data-rise
              style={{ ['--i' as string]: 1 }}
            >
              {HERO.headline[1]}
            </span>
          </h1>

          <p className="hx-lede hero-lede" data-rise style={{ ['--i' as string]: 2 }}>
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

          <div className="hero-meta" data-rise style={{ ['--i' as string]: 4 }}>
            {HERO.meta.map((m) => (
              <p className="t-note" key={m}>
                {m}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── S2 · The gap. Full-bleed ink, two figures in tension. ───────── */}
      <section className="hx-band" data-tone="ink" id="the-gap">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>01</b> {GAP.kicker}
          </p>
          <div className="hx-grid">
            <h2 className="hx-h2 c-two-thirds">{GAP.heading}</h2>

            <div className="c-full hx-tally">
              {GAP.columns.map((c) => (
                <div className="tally" key={c.key} data-live={c.live ? '' : undefined}>
                  <p className="tally-label">{c.label}</p>
                  <div className="tally-row">
                    <p className="tally-fig" data-weight="quiet">{c.paid}</p>
                    <p className="t-note tally-note">{c.paidNote}</p>
                  </div>
                  <div className="tally-row">
                    <p className="tally-fig fig" data-weight="loud">{c.kept}</p>
                    <p className="t-sm tally-note">{c.keptNote}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="t-body c-half">{GAP.close}</p>
            <div className="c-half">
              <Note>{GAP.note}</Note>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3 · Three phases. Bento, edge to edge, unequal cells. ──────── */}
      <section className="hx-band" data-pad="tight">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>02</b> {PHASES.kicker}
          </p>
          <div className="hx-grid" style={{ marginBottom: 'clamp(32px, 4vw, 64px)' }}>
            <h2 className="hx-h2 c-two-thirds">{PHASES.heading}</h2>
            <p className="hx-lede c-third">{PHASES.standfirst}</p>
          </div>
        </div>

        {/* Outside the wrap: the bento runs the full viewport, edge to edge. */}
        <div className="hx-bento">
          {PHASES.steps.map((s) => (
            <article className="cell" data-size={s.size} key={s.n}>
              <p className="cell-n">{s.n}</p>
              <h3 className="cell-title">{s.title}</h3>
              <p className="t-sm cell-body">{s.body}</p>
              <div className="cell-gate">
                <p className="cell-gate-fig">{s.gate}</p>
                <p className="t-note cell-gate-note">{s.gateNote}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── S4 · Two ways in. ──────────────────────────────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>03</b> {WAYS_IN.kicker}
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{WAYS_IN.heading}</h2>

          <div className="c-full hx-split">
            <div className="door">
              <h3 className="d3">{WAYS_IN.shop.heading}</h3>
              <p className="door-fig fig">{WAYS_IN.shop.figure}</p>
              <p className="t-sm door-note">{WAYS_IN.shop.figureNote}</p>
              <p className="t-sm door-body">{WAYS_IN.shop.body}</p>
              <p className="door-link">
                <TextLink href={WAYS_IN.shop.link.href}>{WAYS_IN.shop.link.label}</TextLink>
              </p>
            </div>

            <div className="door">
              <h3 className="d3">{WAYS_IN.member.heading}</h3>
              <p className="door-fig fig">{WAYS_IN.member.figure}</p>
              <p className="t-sm door-note">{WAYS_IN.member.figureNote}</p>
              <p className="t-sm door-body">{WAYS_IN.member.body}</p>
              <Note>{WAYS_IN.member.note}</Note>
              <p className="door-link">
                <TextLink href={WAYS_IN.member.link.href}>{WAYS_IN.member.link.label}</TextLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5 · Status. A list of facts, set as a list. ────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>04</b> {STATUS.kicker}
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{STATUS.heading}</h2>
          <p className="hx-lede c-third">{STATUS.standfirst}</p>
          <div className="c-full">
            <Ledger items={[...STATUS.ledger]} />
          </div>
        </div>
      </section>

      {/* ── S6 · Underneath. One sentence, and the page ends on it. ─────── */}
      <section className="hx-band hx-wrap" data-pad="open">
        <p className="hx-label">
          <b>05</b> {UNDERNEATH.kicker}
        </p>
        <div className="hx-grid">
          <p className="hx-stage-line c-two-thirds">{UNDERNEATH.statement}</p>
          <div className="c-third">
            <p className="t-sm">{UNDERNEATH.body}</p>
            <Note>{UNDERNEATH.source}</Note>
            <p className="t-body" style={{ marginTop: 'var(--spacing-3)' }}>
              <TextLink href={UNDERNEATH.link.href}>{UNDERNEATH.link.label}</TextLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
