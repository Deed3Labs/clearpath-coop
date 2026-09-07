import { Plus_Jakarta_Sans } from 'next/font/google';
import './lab.css';
import { HeroField, HeroStack, HeroDivide } from '@/components/heroes/Heroes';

/* One family doing everything, including the figures — tabular numerals come
   from the font feature rather than from a second typeface. The old system's
   display + text + mono trio is most of what made every page read as a
   technical document. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-lab',
  display: 'swap',
});

export const metadata = {
  title: 'Language v2',
  robots: { index: false, follow: false },
};

const SW = [
  { n: 'Bone', v: '#F4EFE7', note: 'the page', fg: '#241C15' },
  { n: 'Bone 2', v: '#FCFAF6', note: 'cards float lighter', fg: '#241C15' },
  { n: 'Clay', v: '#B24A28', note: 'brand ground · 5.4:1 on white', fg: '#fff' },
  { n: 'Pine', v: '#2C3F33', note: 'land', fg: '#F4EFE7' },
  { n: 'Espresso', v: '#241C15', note: 'text and deep ground', fg: '#F4EFE7' },
  { n: 'Amber', v: '#E0A03C', note: 'one figure per view', fg: '#241C15' },
];

export default function Lab() {
  return (
    <div className={`lab ${jakarta.variable}`}>
      <section>
        <p className="tag">
          <i>00</i> The language <span>New palette · soft and dimensional · one family, no mono</span>
        </p>
        <div className="wrap spec">
          <div className="spec-row">
            <h2 className="title">Palette</h2>
            <div className="swatches">
              {SW.map((s) => (
                <div className="sw" key={s.n} style={{ background: s.v, color: s.fg }}>
                  <b>{s.n}</b>
                  <em>{s.note}</em>
                </div>
              ))}
            </div>
          </div>

          <div className="spec-row">
            <h2 className="title">Type — one family, four jobs</h2>
            <p className="display">Display</p>
            <p className="title">Title</p>
            <p className="lede">
              Lede. A cooperative where what you pay for a place to live ends up being yours.
            </p>
            <p className="figure">$151,200</p>
            <p className="micro">Micro — the caption and the caveat.</p>
          </div>

          <div className="spec-row">
            <h2 className="title">Surface and form</h2>
            <div className="spec-cards">
              <div className="card"><p className="small">Card, flat on the page</p></div>
              <div className="card raised"><p className="small">Card, lifted</p></div>
              <div className="card clay"><p className="small">Card, brand ground</p></div>
              <div className="card dark"><p className="small">Card, deep ground</p></div>
            </div>
            <div className="hero-actions">
              <span className="chip">A chip, not a mono label</span>
              <a className="btn" href="#a">Primary</a>
              <a className="btn ghost" href="#a">Ghost</a>
            </div>
          </div>
        </div>
      </section>

      <section id="a">
        <p className="tag"><i>A</i> The field <span>Brand colour as the ground. Centred.</span></p>
        <HeroField />
      </section>

      <section id="b">
        <p className="tag"><i>B</i> The stack <span>Elevation carries the argument. One card lifts, one does not.</span></p>
        <HeroStack />
      </section>

      <section id="c">
        <p className="tag"><i>C</i> The divide <span>Two grounds. The split moves with the scroll — no chart at all.</span></p>
        <HeroDivide />
      </section>
    </div>
  );
}
