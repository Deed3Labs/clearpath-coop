import { FORK } from '@/content/contribute';

/* /contribute S2 (visual brief §4) — one property, two paths.
 *
 * This page exists to inform a decision, and a decision between two options
 * is a fork. Drawn as one, the reader compares the same question down both
 * branches at a glance; written out, they would have to hold six pairs in
 * their head while reading two paragraphs in sequence.
 *
 * The last two rows go against us. A comparison that only runs one direction
 * is an advertisement, and this page's credibility depends on not being one —
 * so they are on the chart at the same weight as everything else, not in a
 * caveat underneath it.
 *
 * The fork itself is CSS borders rather than an SVG: it is two lines. */

export function ForkDiagram() {
  return (
    <div className="fork">
      <p className="d4 fork-root">{FORK.root}</p>
      <span className="fork-stem" aria-hidden="true" />

      <div className="fork-heads">
        {FORK.branches.map((b, i) => (
          <p className={`d4 fork-head${i === 1 ? ' is-live' : ''}`} key={b}>
            {b}
          </p>
        ))}
      </div>

      <dl className="fork-rows">
        {FORK.rows.map((row) => (
          <div className="fork-row" key={row.q}>
            <dt className="t-note fork-q">{row.q}</dt>
            <dd className="t-sm fork-a">{row.a}</dd>
            <dd className="t-sm fork-b">{row.b}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
