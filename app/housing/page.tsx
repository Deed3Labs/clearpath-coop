import { Ledger, Note, FigureXL, Button, TextLink } from '@/components/primitives';
import { OPENING, NUMBERS, MONTHLY, HOMES, BACKYARDS, GATE } from '@/content/housing';

export const metadata = {
  title: 'Housing',
  description:
    'The land under a Clear community is held in common by its members and is never sold. What you buy, pay down and take title to is the house — cost plus fifteen per cent, and we show the cost.',
};

/* Migrated to the .hx layout system. The numbered rail is gone; the section
 * number is an inline label.
 *
 * Rhythm: a pair of statements → three figures on full-bleed ink → a rate card
 * → unequal cells edge to edge → three columns → one sentence. No two
 * consecutive sections share a shape.
 *
 * The ink band goes to the numbers, because "cost plus fifteen per cent, and
 * we show the cost" is the claim the whole page rests on and it was previously
 * a stat row halfway down with nothing marking it as the point. */

export default function Housing() {
  return (
    <div className="hx">
      {/* ── S1 · Two things separated, set side by side. ────────────────── */}
      <section className="hx-band hx-wrap" data-pad="open">
        <p className="hx-label">
          <b>01</b> {OPENING.kicker}
        </p>
        <div className="hx-grid">
          <h1 className="hx-h2 c-two-thirds">{OPENING.heading}</h1>
          <p className="hx-lede c-third">{OPENING.lede}</p>

          <div className="c-full hx-cols" data-n="2" data-rows="3">
            {OPENING.sides.map((side) => (
              <div
                className="side"
                key={side.label}
                data-live={'live' in side && side.live ? '' : undefined}
              >
                <p className="side-label">{side.label}</p>
                <p className="side-line">{side.line}</p>
                <p className="t-sm side-note">{side.note}</p>
              </div>
            ))}
          </div>

          <div className="c-full">
            <Note>{OPENING.note}</Note>
          </div>
        </div>
      </section>

      {/* ── S2 · The numbers. Full-bleed ink, three figures at set-piece
             size. §7 Legal: the illustration label sits with them. ──────── */}
      <section className="hx-band" data-tone="ink" id="the-numbers">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>02</b> {NUMBERS.kicker}
          </p>
          <div className="hx-grid">
            <h2 className="hx-h2 c-two-thirds">{NUMBERS.heading}</h2>
            <p className="hx-lede c-third">{NUMBERS.lede}</p>

            <div className="c-full hx-tally" data-n="3">
              {NUMBERS.columns.map((c) => (
                <div
                  className="tally"
                  key={c.key}
                  data-live={'live' in c && c.live ? '' : undefined}
                  data-muted={'muted' in c && c.muted ? '' : undefined}
                >
                  <p className="tally-label">{c.label}</p>
                  <div className="tally-row">
                    <p className="tally-fig fig" data-weight="loud">
                      {c.figure}
                    </p>
                    <p className="t-sm tally-note">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="c-full">
              <Note>{NUMBERS.disclaimer}</Note>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3 · Every month. A rate card, set as one. ──────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>03</b> {MONTHLY.kicker}
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{MONTHLY.heading}</h2>
          <p className="hx-lede c-third">{MONTHLY.lede}</p>
          <div className="c-full">
            <Ledger items={[...MONTHLY.ledger]} />
            <Note>{MONTHLY.disclaimer}</Note>
          </div>
        </div>
      </section>

      {/* ── S4 · The homes. Bento, edge to edge, unequal cells. ─────────── */}
      <section className="hx-band" data-pad="tight">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>04</b> {HOMES.kicker}
          </p>
          <div className="hx-grid" style={{ marginBottom: 'clamp(32px, 4vw, 64px)' }}>
            <h2 className="hx-h2 c-two-thirds">{HOMES.heading}</h2>
            <p className="hx-lede c-third">{HOMES.lede}</p>
          </div>
        </div>

        {/* Outside the wrap: the bento runs the full viewport, edge to edge. */}
        <div className="hx-bento">
          {HOMES.cells.map((c) => (
            <article className="cell" data-size={c.size} key={c.n}>
              <p className="cell-n">{c.n}</p>
              <h3 className="cell-title">{c.title}</h3>
              <p className="t-sm cell-body">{c.body}</p>
              <div className="cell-gate">
                <p className="cell-gate-fig">{c.gate}</p>
                <p className="t-note cell-gate-note">{c.gateNote}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── S5 · Backyards. Three parties to one arrangement. ───────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>05</b> {BACKYARDS.kicker}
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{BACKYARDS.heading}</h2>
          <p className="hx-lede c-third">{BACKYARDS.lede}</p>

          <div className="c-full hx-split">
            {BACKYARDS.columns.map((col) => (
              <div className="door" key={col.key}>
                <h3 className="door-head">{col.heading}</h3>
                <p className="door-fig fig">{col.figure}</p>
                <p className="t-sm door-note">{col.figureNote}</p>
                <p className="t-sm door-body">{col.body}</p>
                {col.link ? (
                  <p className="door-link">
                    <TextLink href={col.link.href}>{col.link.label}</TextLink>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6 · The gate. One sentence, and the number it ends on. ─────── */}
      <section className="hx-band hx-wrap" data-pad="open">
        <p className="hx-label">
          <b>06</b> {GATE.kicker}
        </p>
        <div className="hx-grid">
          <p className="hx-stage-line c-two-thirds">{GATE.statement}</p>
          <div className="c-third">
            <FigureXL figure={GATE.figure} caption={GATE.figureCaption} live />
            <p className="t-sm hx-prose">{GATE.body}</p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <Button href={GATE.cta.href}>{GATE.cta.label}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
