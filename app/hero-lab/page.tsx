import './hero-lab.css';
import { HeroMeter } from '@/components/heroes/HeroMeter';
import { HeroSplit } from '@/components/heroes/HeroSplit';
import { HeroDiverge } from '@/components/heroes/HeroDiverge';

/* Not linked from the nav and not in the sitemap — a scratch surface for
   judging three hero directions against each other before one of them
   becomes the home page. */
export const metadata = {
  title: 'Hero lab',
  robots: { index: false, follow: false },
};

const SLOTS = [
  {
    key: 'A',
    name: 'The meter',
    note: 'Autoplays. Furthest from the Jeton model, which avoids autoplay.',
    el: <HeroMeter />,
  },
  {
    key: 'B',
    name: 'The split',
    note: 'Looping CSS, zero JS. The metaphor object — money that leaves, money that stays.',
    el: <HeroSplit />,
  },
  {
    key: 'C',
    name: 'The divergence',
    note: 'Indexed to scroll. Closest to Jeton: the reader drives it, nothing runs at them.',
    el: <HeroDiverge />,
  },
];

export default function HeroLab() {
  return (
    <div className="hl-page">
      {SLOTS.map((s) => (
        <section className="hl-slot" key={s.key}>
          <p className="hl-tag">
            <b>{s.key}</b>
            {s.name}
            <span>{s.note}</span>
          </p>
          <div className="hl-wrap">{s.el}</div>
        </section>
      ))}
    </div>
  );
}
