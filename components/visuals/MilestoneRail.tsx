import { PHASES } from '@/content/home';

/* Visual brief §4, Home — "not three cards in a row. A single line with
 * stations on it, so the sequence AND the distance between stations are both
 * visible."
 *
 * The distance is the argument: the gap between saving and signing is a year
 * or more, and three equal cards would hide that. The stations are spaced by
 * how far apart they actually are, not evenly.
 *
 * Vertical on mobile, which §4 notes is the better orientation anyway — the
 * rail runs down the left and the stations hang off it. */

/* How long each phase LASTS, not where its gate falls. An earlier version
   placed the stations at their fractional position along the rail, which put
   each dot somewhere in the middle of its own column with a connector line
   dangling nowhere near the text it belonged to. The distance reads better as
   column WIDTH: saving is long, signing is longer, and redemption is the one
   you stay in, so it gets an open tail rather than an end.

   The spans are 0.42 / 0.5 / 0.28 and live in globals.css as literal grid
   tracks, because `fr` is not permitted inside calc() and so cannot come from
   a custom property set here. Keep the two in step. */

export function MilestoneRail() {
  return (
    <ol className="rail-mile">
      {PHASES.steps.map((p) => (
        <li key={p.title}>
          <span className="rail-mile-station" aria-hidden="true" />
          <p className="rail-mile-gate fig">{p.gate}</p>
          <p className="d4 rail-mile-title">{p.title}</p>
          <p className="t-sm rail-mile-body">{p.body}</p>
        </li>
      ))}
    </ol>
  );
}
