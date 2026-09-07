import Link from 'next/link';
import './v2.css';
import { Texture } from '@/components/v2/Texture';
import { Marquee } from '@/components/v2/Marquee';
import { CountUp } from '@/components/v2/CountUp';
import { HeroDivide } from '@/components/v2/HeroDivide';
import { HERO, STRANDS, STATUS, CLOSE } from '@/content/home';

export default function Home() {
  return (
    <div className="v2">
      {/* 1 — The claim. The headline is cut between the condensed display
          face and the italic serif: the caps state the fact, the italic
          delivers the turn. */}
      <section className="lede-hero">
        <Texture />
        <div className="wrap">
          <p className="eyebrow">{HERO.eyebrow}</p>

          <h1 className="d-hard hero-title">
            {HERO.headline.hard} <em className="d-turn">{HERO.headline.turn}</em>
          </h1>

          <div className="hero-bottom">
            <div>
              <p className="lede">{HERO.lede}</p>
              <div className="hero-actions" style={{ marginTop: 'var(--spacing-4)' }}>
                <Link className="btn" href={HERO.primary.href}>
                  {HERO.primary.label} <span aria-hidden="true">→</span>
                </Link>
                <Link className="btn ghost" href={HERO.ghost.href}>
                  {HERO.ghost.label}
                </Link>
              </div>
            </div>

            <div className="hero-counter">
              <p className="eyebrow">{HERO.counter.label}</p>
              <p className="figure">
                <CountUp to={HERO.counter.to} />
              </p>
              <p className="micro" style={{ marginTop: 6 }}>{HERO.counter.sub}</p>
            </div>
          </div>
        </div>

        <Marquee items={HERO.marquee} />
      </section>

      {/* 2 — The divide. Two grounds trading space with the scroll. */}
      <HeroDivide />

      <section className="wrap hero-foot">
        <p className="micro">{HERO.note}</p>
        <Link className="strand-link" href={HERO.link.href}>
          {HERO.link.label} →
        </Link>
      </section>

      {/* 3 — What it is. */}
      <section className="field">
        <div className="wrap">
          <div className="split-head">
            <div>
              <p className="eyebrow">What it is</p>
              <h2 className="d-hard band-h2">
                One membership, <em className="d-turn">three things it does.</em>
              </h2>
            </div>
            <p className="lede">{STRANDS.sub}</p>
          </div>

          <ul className="strands">
            {STRANDS.items.map((s) => (
              <li className="strand" key={s.n}>
                <p className="strand-n">{s.n}</p>
                <h3 className="strand-title">{s.title}</h3>
                <p className="small">{s.body}</p>
                <Link className="strand-link" href={s.link.href}>
                  {s.link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — Where this actually is. On the dark ground, because saying what
          does not exist yet should look deliberate rather than buried. */}
      <section className="field inv">
        <div className="wrap">
          <div className="split-head">
            <div>
              <p className="eyebrow">{STATUS.standfirst}</p>
              <h2 className="d-hard band-h2">
                What exists today, <em className="d-turn">plainly.</em>
              </h2>
            </div>
            <p className="lede">{STATUS.sub}</p>
          </div>

          <div className="status">
            {STATUS.ledger.map((row) => (
              <div className="status-row" key={row.label}>
                <p className="small" style={{ color: 'var(--on-dark)' }}>{row.label}</p>
                <span className="status-state" data-state={row.chip}>{row.chip}</span>
                <p className="micro">{row.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — The door. */}
      <section className="field half">
        <div className="wrap">
          <p className="eyebrow">Two front doors</p>
          <h2 className="d-hard band-h2" style={{ maxWidth: '14ch' }}>
            Join as a member, <em className="d-turn">or bring your shop.</em>
          </h2>
          <div className="close-actions">
            <Link className="btn" href={CLOSE.member.href}>
              {CLOSE.member.label} <span aria-hidden="true">→</span>
            </Link>
            <Link className="btn ghost" href={CLOSE.shop.href}>
              {CLOSE.shop.label}
            </Link>
          </div>
          <p className="micro" style={{ marginTop: 'var(--spacing-3)' }}>{CLOSE.note}</p>
        </div>
      </section>
    </div>
  );
}
