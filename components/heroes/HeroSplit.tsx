import { HERO } from '@/content/home';

/* DIRECTION B — THE SPLIT.
 *
 * The mechanism rather than the amount. A payment arrives every month and
 * forks: one part leaves and is gone, one part lands and stays. The left
 * column falls out of frame forever; the right column accumulates into a
 * stack that is still there at the end of the loop.
 *
 * Product-led in the literal sense — this is what the thing does, running.
 *
 * Pure CSS: twelve blocks on staggered delays, no JavaScript at all. The
 * reduced-motion state is the finished stack, which is the truthful still
 * frame of the animation rather than a blank box. */

const BLOCKS = Array.from({ length: 12 }, (_, i) => i);

export function HeroSplit() {
  return (
    <div className="hl-split">
      <h1 className="hl-h1">
        {HERO.headline.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </h1>

      <div className="hl-stage" aria-hidden="true">
        <div className="hl-lane is-out">
          <p className="hl-lane-label">Rent</p>
          <div className="hl-chute">
            {BLOCKS.map((i) => (
              <span key={i} className="hl-block is-falling" style={{ ['--i' as string]: i }} />
            ))}
          </div>
          <p className="hl-lane-foot">gone</p>
        </div>

        <div className="hl-lane is-kept">
          <p className="hl-lane-label">Inside Clear</p>
          <div className="hl-chute">
            {BLOCKS.map((i) => (
              <span key={i} className="hl-block is-landing" style={{ ['--i' as string]: i }} />
            ))}
          </div>
          <p className="hl-lane-foot">yours</p>
        </div>
      </div>

      <p className="hl-note">
        The same payment, both sides. One of them is still there in five years.
      </p>
    </div>
  );
}
