import { Ledger, Note, Stat, Tiles, Button } from '@/components/primitives';
import { MerchantCalculator } from '@/components/interactive/MerchantCalculator';
import { OPENING, DIFFERENCE, COUNTER, FIT, FOUNDING, MONEY, MEMBERSHIP } from '@/content/shops';

export const metadata = {
  title: 'For shops',
  description:
    'Clear finances the customers who cannot pay that day at 2.5% of the ticket, pays you on net-30, and carries the default itself. No exclusivity and no hardware to buy.',
};

/* Migrated to the .hx layout system. The numbered rail is gone; the section
 * number is an inline label.
 *
 * Rhythm: the question and its four terms → the money argument on full-bleed
 * ink → the counter as four equal cells → who it is and is not for →
 * founding terms → payouts and refunds → the door. No two consecutive
 * sections share a shape.
 *
 * The ink band goes to the calculator, because "why are you cheaper than the
 * card on the wall" is the thing a shop owner is actually deciding on. */

export default function Shops() {
  return (
    <div className="hx">
      {/* ── S1 · The question, and the four terms that answer it. ─────── */}
      <section className="hx-band hx-wrap" data-pad="open">
        <p className="hx-label">
          <b>01</b> For shops
        </p>
        <div className="hx-grid">
          <h1 className="hx-h2 c-two-thirds">{OPENING.heading}</h1>
          <p className="hx-lede c-third">{OPENING.lede}</p>

          {/* The four terms were a ledger of label/value pairs. They are
              four figures — the whole offer, before any prose. */}
          <div className="c-full">
            <div className="stat-row">
              {OPENING.ledger.map((t) => (
                <Stat
                  key={t.label}
                  figure={t.value}
                  caption={t.label}
                  live={'live' in t ? t.live : undefined}
                />
              ))}
            </div>
          </div>

          <div className="c-full">
            <Button href={OPENING.cta.href}>{OPENING.cta.label}</Button>
          </div>
        </div>
      </section>

      {/* ── S2 · The money argument, on this page's one ink band. ─────── */}
      <section className="hx-band" data-tone="ink" id="the-difference">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>02</b> The difference
          </p>
          <div className="hx-grid">
            <h2 className="hx-h2 c-two-thirds">{DIFFERENCE.heading}</h2>
            <p className="hx-lede c-third">{DIFFERENCE.standfirst}</p>
            <div className="c-full">
              <MerchantCalculator />
              <Note>{DIFFERENCE.note}</Note>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3 · At the counter. Four equal cells: a sequence whose steps
             carry the same weight. ─────────────────────────────────────── */}
      <section className="hx-band" data-pad="tight">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>03</b> At the counter
          </p>
          <div className="hx-grid" style={{ marginBottom: 'clamp(32px, 4vw, 64px)' }}>
            <h2 className="hx-h2 c-full">{COUNTER.heading}</h2>
          </div>
        </div>

        <div className="hx-bento">
          {COUNTER.steps.map((s, i) => (
            <article className="cell" data-size="eq4" key={s.title}>
              <p className="cell-n">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="cell-title">{s.title}</h3>
              <p className="t-sm cell-body">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="hx-wrap" style={{ marginTop: 'clamp(32px, 4vw, 64px)' }}>
          <div className="hx-grid">
            {COUNTER.panels.map((p) => (
              <div className="c-half" key={p.title}>
                <p className="d4">{p.title}</p>
                <p className="t-sm" style={{ marginTop: 'var(--spacing-2)', color: 'var(--color-ink-70)' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4 · Fit. The honest one, set as a pair. ───────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>04</b> Fit
        </p>
        <div className="hx-grid">
          <div className="c-half">
            <div className="versus is-ours">
              <p className="versus-line">{FIT.works.heading}</p>
              <p className="t-sm versus-note">{FIT.works.lead}</p>
              <p className="t-sm versus-note">{FIT.works.body}</p>
            </div>
          </div>
          <div className="c-half">
            <div className="versus">
              <p className="versus-line">{FIT.doesnt.heading}</p>
              <p className="t-sm versus-note">{FIT.doesnt.lead}</p>
              <p className="t-sm versus-note">{FIT.doesnt.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S5 · Founding partners. Four terse terms as tiles. ─────────── */}
      <section className="hx-band hx-wrap" data-pad="open">
        <p className="hx-label">
          <b>05</b> Founding partners
        </p>
        <div className="hx-grid">
          <h2 className="hx-h2 c-two-thirds">{FOUNDING.heading}</h2>
          <p className="hx-lede c-third">{FOUNDING.standfirst}</p>

          <div className="c-full">
            <Tiles
              items={FOUNDING.ledger.map((t) => ({
                line: t.value,
                note: t.label,
              }))}
            />
          </div>

          <div className="c-half">
            <p className="d4">{FOUNDING.panel.title}</p>
            <p className="t-sm" style={{ marginTop: 'var(--spacing-2)', color: 'var(--color-ink-70)' }}>
              {FOUNDING.panel.body}
            </p>
          </div>
          <div className="c-half">
            <p className="t-body prose">{FOUNDING.terms}</p>
            <Note>{FOUNDING.note}</Note>
          </div>
        </div>
      </section>

      {/* ── S6 · Getting paid, and refunds. ────────────────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>06</b> The money
        </p>
        <div className="hx-grid">
          <div className="c-half">
            <h2 className="d3">{MONEY.payouts.heading}</h2>
            <p className="t-sm" style={{ marginTop: 'var(--spacing-2)', color: 'var(--color-ink-70)' }}>
              {MONEY.payouts.body}
            </p>
            <Note>{MONEY.payouts.note}</Note>
          </div>
          <div className="c-half">
            <h2 className="d3">{MONEY.refunds.heading}</h2>
            <p className="t-sm" style={{ marginTop: 'var(--spacing-2)', color: 'var(--color-ink-70)' }}>
              {MONEY.refunds.body}
            </p>
          </div>
          <div className="c-full">
            <Ledger items={[...MONEY.refunds.ledger]} />
          </div>
        </div>
      </section>

      {/* ── S7 · The door. ─────────────────────────────────────────────── */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>07</b> Membership
        </p>
        <div className="hx-grid">
          <p className="hx-stage-line c-two-thirds">{MEMBERSHIP.heading}</p>
          <div className="c-third">
            <p className="t-sm" style={{ color: 'var(--color-ink-70)' }}>{MEMBERSHIP.body}</p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <Button href={MEMBERSHIP.cta.href}>{MEMBERSHIP.cta.label}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
