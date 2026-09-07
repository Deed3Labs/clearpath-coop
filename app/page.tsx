import Link from 'next/link';
import './v2.css';
import { HeroDivide } from '@/components/v2/HeroDivide';
import { HERO, STRANDS, STATUS, CLOSE } from '@/content/home';

/* The home page on visual language v2. Four beats: the argument, what the
 * thing is, where it actually is, and the door.
 *
 * The old "proof" beat is gone — the hero now carries those two figures
 * live, so a section restating them was the same claim twice, once moving
 * and once still. */

export default function Home() {
  return (
    <div className="v2">
      <HeroDivide />

      {/* The disclaimer and the way through to the arithmetic belong with the
          figures they qualify, not in a footer. */}
      <section className="wrap hero-foot">
        <p className="micro">{HERO.note}</p>
        <Link className="strand-link" href={HERO.link.href}>
          {HERO.link.label} →
        </Link>
      </section>

      {/* What it is — three strands as cards. */}
      <section className="field band">
        <div className="wrap">
          <div className="band-head">
            <span className="chip">{STRANDS.rail.split('/')[1]?.trim() ?? 'What it is'}</span>
            <h2 className="display band-h2">{STRANDS.heading}</h2>
            <p className="lede">{STRANDS.sub}</p>
          </div>

          <ul className="strands">
            {STRANDS.items.map((s) => (
              <li className="card strand" key={s.n}>
                <span className="chip">{s.n}</span>
                <h3 className="title">{s.title}</h3>
                <p className="small">{s.body}</p>
                <Link className="strand-link" href={s.link.href}>
                  {s.link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where this actually is. On the deep ground, because saying what does
          not exist yet should feel deliberate rather than buried. */}
      <section className="field dark band">
        <div className="wrap">
          <div className="band-head">
            <span className="chip on-dark">{STATUS.standfirst}</span>
            <h2 className="display band-h2">{STATUS.heading}</h2>
            <p className="lede">{STATUS.sub}</p>
          </div>

          <div className="status">
            {STATUS.ledger.map((row) => (
              <div className="card dark status-card" key={row.label}>
                <div className="status-row">
                  <p className="small">{row.label}</p>
                  <span className="status-chip" data-state={row.chip}>
                    {row.chip}
                  </span>
                  <p className="micro">{row.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The door. */}
      <section className="field clay band">
        <div className="wrap center">
          <h2 className="display">{CLOSE.heading}</h2>
          <div className="close-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn on-dark" href={CLOSE.member.href}>
              {CLOSE.member.label}
            </Link>
            <Link className="btn ghost on-ghost" href={CLOSE.shop.href}>
              {CLOSE.shop.label}
            </Link>
          </div>
          <p className="micro" style={{ marginTop: 'var(--spacing-3)', color: 'rgb(255 255 255 / .72)' }}>
            {CLOSE.note}
          </p>
        </div>
      </section>
    </div>
  );
}
