import { Ledger, Note, Stat, FigureXL, Tiles } from '@/components/primitives';
import { SplitChooser } from '@/components/interactive/SplitChooser';
import { OPENING, DRAW_ORDER, TERM_PLANS, SPLIT, SAVINGS, CYCLE, COMPARISON } from '@/content/how';

export const metadata = {
  title: 'How it works',
  description:
    'One balance, drawn cheapest first. Savings-backed credit that gets cheaper the longer you hold it, and a term-plan shelf with a single ceiling across every shop.',
};

/* Migrated to the .hx layout system the home page established. The old
 * two-column numbered rail is gone — it boxed every section into columns 3–12
 * and made the same shape seven times.
 *
 * Rhythm: title → the mechanism on full-bleed ink → a ledger → the chooser →
 * the figures → a ledger → the closing pair. No two consecutive sections
 * share a shape, and the one dark band is spent on the draw order, which is
 * what the whole page is about. */

/* Cell widths for the draw order, decreasing along the sequence: the line
   exhausts the cheapest tier before it touches the next, so the first is the
   widest. A layout decision, not content, so it lives here. */
const TIER_SIZES = ['xl4', 'lg4', 'md4', 'sm4'] as const;

export default function How() {
  return (
    <div className="hx">
      {/* ── S1 · The claim. ────────────────────────────────────────────── */}
      <section className="hx-band hx-wrap" data-pad="open">
        <p className="hx-label">
          <b>01</b> Members
        </p>
        <div className="hx-grid">
          <h1 className="hx-h2 c-two-thirds">{OPENING.heading}</h1>
          <p className="hx-lede c-third">{OPENING.lede}</p>
          <div className="c-half">
            <p className="d4">{OPENING.panel.title}</p>
            <p className="t-sm hx-prose">{OPENING.panel.body}</p>
          </div>
        </div>
      </section>

      {/* ── S2 · The mechanism, on this page's one ink band. The four tiers
             as a bento, widest first. ──────────────────────────────────── */}
      <section className="hx-band" data-tone="ink" id="draw-order">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>02</b> Draw order
          </p>
          <div className="hx-grid" style={{ marginBottom: 'clamp(32px, 4vw, 64px)' }}>
            <h2 className="hx-h2 c-two-thirds">{DRAW_ORDER.heading}</h2>
            <p className="hx-lede c-third">{DRAW_ORDER.sub}</p>
          </div>
        </div>

        <div className="hx-bento">
          {DRAW_ORDER.steps.map((t, i) => (
            <article className="cell" data-size={TIER_SIZES[i]} key={t.title}>
              <p className="cell-n">{t.meta}</p>
              <h3 className="cell-title">{t.title}</h3>
              <p className="t-sm cell-body">{t.body}</p>
            </article>
          ))}
        </div>

        <div className="hx-wrap" style={{ marginTop: 'clamp(32px, 4vw, 64px)' }}>
          <div className="hx-grid">
            <p className="t-body c-half">{DRAW_ORDER.standfirst}</p>
            <div className="c-half">
              <Note>{DRAW_ORDER.close}</Note>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3 · One shelf, one ceiling. ───────────────────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>03</b> Term plans
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{TERM_PLANS.heading}</h2>
          <p className="hx-lede c-third">{TERM_PLANS.sub}</p>
          <div className="c-third">
            <div className="prose t-body">
              {TERM_PLANS.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="c-two-thirds">
            <Ledger items={[...TERM_PLANS.ledger]} />
            <Note>{TERM_PLANS.close}</Note>
          </div>
        </div>
      </section>

      {/* ── S4 · You choose how to clear it. ───────────────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>04</b> You pick the split
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{SPLIT.heading}</h2>
          <p className="hx-lede c-third">{SPLIT.sub}</p>
          <div className="c-third">
            <p className="t-body prose">{SPLIT.standfirst}</p>
          </div>
          <div className="c-two-thirds">
            <SplitChooser />
          </div>
        </div>
      </section>

      {/* ── S5 · What moves you along that order. The page's figures. ─── */}
      <section className="hx-band hx-wrap" data-pad="open">
        <p className="hx-label">
          <b>05</b> Savings
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{SAVINGS.heading}</h2>
          <p className="hx-lede c-third">{SAVINGS.sub}</p>

          {/* Four facts that were one sixty-word sentence. */}
          <div className="c-full">
            <div className="stat-row">
              {SAVINGS.stats.map((s) => (
                <Stat key={s.figure} figure={s.figure} caption={s.caption} />
              ))}
            </div>
          </div>

          <div className="c-half">
            <FigureXL figure={SAVINGS.gate.figure} caption={SAVINGS.gate.caption} live />
          </div>
          <div className="c-half">
            <div className="prose t-body">
              {SAVINGS.prose.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="c-full">
            <p className="d4" style={{ marginBottom: 'var(--spacing-2)' }}>{SAVINGS.tilesHeading}</p>
            <Tiles items={SAVINGS.tiles} />
          </div>
        </div>
      </section>

      {/* ── S6 · The cycle. ────────────────────────────────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>06</b> The cycle
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{CYCLE.heading}</h2>
          <p className="hx-lede c-third">{CYCLE.sub}</p>
          <div className="c-third">
            <p className="t-body prose">{CYCLE.prose}</p>
          </div>
          <div className="c-two-thirds">
            <Ledger items={[...CYCLE.ledger]} />
            <Note>{CYCLE.close}</Note>
          </div>
        </div>
      </section>

      {/* ── S7 · The page ends on its strongest line, not on a table. ─── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>07</b> The comparison
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{COMPARISON.heading}</h2>
          <p className="hx-lede c-third">{COMPARISON.sub}</p>

          {/* A pair whose rows line up: label, line, note. The two sat in
              separate grid cells and flowed independently, so a two-line
              claim on one side put its note out of step with the other. */}
          <div className="c-full hx-cols" data-n="2" data-rows="3">
            <div className="versus">
              <p className="t-note">{COMPARISON.pair.theirs.label}</p>
              <p className="versus-line">{COMPARISON.pair.theirs.line}</p>
              <p className="t-sm versus-note hx-prose">{COMPARISON.ours[0].description}</p>
            </div>
            <div className="versus is-ours">
              <p className="t-note">{COMPARISON.pair.ours.label}</p>
              <p className="versus-line">{COMPARISON.pair.ours.line}</p>
              <p className="t-sm versus-note hx-prose">{COMPARISON.ours[1].description}</p>
            </div>
          </div>

          <div className="c-full">
            <Ledger items={[...COMPARISON.theirs]} />
          </div>
        </div>
      </section>
    </div>
  );
}
