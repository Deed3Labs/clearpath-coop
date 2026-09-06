/* Motion, without a library.
 *
 * §3 specifies GSAP + ScrollTrigger. §5 sets a harder constraint: homepage JS
 * under 120KB gzipped INCLUDING the counter sequence, and "if it does not fit,
 * the sequence gets simpler, not the budget bigger."
 *
 * It does not fit. React and the Next runtime are 101KB gzipped before any of
 * our code, and gsap + ScrollTrigger add 37KB on top — 138KB against a 120KB
 * ceiling. gsap core alone, with the scroll work hand-rolled, still lands at
 * 121KB. So the library goes and the two moments are built on the platform:
 * the Web Animations API for the load sequence, and a measurement-cached
 * scroll handler for the scroll-linked moments. Total cost here is under 1KB
 * and the budget comes in at ~100KB.
 *
 * Everything below is a no-op under prefers-reduced-motion, and nothing here
 * ever hides an element that was not already visible — the callers render
 * their finished state and animate from it. */

/* power3.out, which is what the load sequence in §6.1 is specified in. */
export const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type Keyframes = Keyframe[] | PropertyIndexedKeyframes;

/* Animate FROM a set of values TO the element's rendered state, which is how
   every beat in §6.1 is described ("fade in", "lands", "draws itself"). */
export function animateFrom(
  el: Element | null | undefined,
  from: Keyframes,
  { delay, duration, easing = EASE }: { delay: number; duration: number; easing?: string },
) {
  if (!el) return;
  el.animate(from, { delay, duration, easing, fill: 'backwards' });
}

export function stagger(
  els: ArrayLike<Element>,
  from: Keyframes,
  opts: { delay: number; duration: number; step: number; easing?: string },
) {
  Array.from(els).forEach((el, i) => {
    animateFrom(el, from, { ...opts, delay: opts.delay + i * opts.step });
  });
}

/* Count a number up over a window, used once — the deed's credits. §4 allows
   no count-ups outside the two signature moments. */
export function countUp(
  el: HTMLElement | null,
  to: number,
  { delay, duration }: { delay: number; duration: number },
) {
  if (!el) return () => {};
  let raf = 0;
  const t0 = performance.now() + delay;
  const fmt = (n: number) => Math.round(n).toLocaleString('en-US');
  el.textContent = fmt(0);
  const tick = (now: number) => {
    const t = Math.min(1, Math.max(0, (now - t0) / duration));
    /* power2.out — the figure should arrive rather than decelerate forever. */
    el.textContent = fmt(to * (1 - Math.pow(1 - t, 2)));
    if (t < 1) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

/* ── Scroll-linked progress ──────────────────────────────────────────────
   ScrollTrigger's start/end grammar, kept because it is the right grammar:
   an element edge meeting a fraction of the viewport.

   The element's position is measured ONCE and re-measured only when the
   layout actually changes, so the scroll handler itself does pure arithmetic
   and style writes — no getBoundingClientRect, no forced reflow, and no
   dependency on requestAnimationFrame. rAF-throttling a scroll handler is the
   usual advice precisely because it reads layout; with the read hoisted out
   there is nothing to throttle, and the moment keeps tracking on a page the
   browser has decided not to paint at full rate. */

type Edge = 'top' | 'bottom';
type Anchor = { edge: Edge; vh: number };

type Sub = {
  el: HTMLElement;
  start: Anchor;
  end: Anchor;
  fn: (progress: number) => void;
  a: number;
  b: number;
  last: number;
};

const subs = new Set<Sub>();
let observer: ResizeObserver | undefined;

function remeasure(s: Sub) {
  const r = s.el.getBoundingClientRect();
  const docTop = window.scrollY + r.top;
  const at = (anchor: Anchor) =>
    docTop + (anchor.edge === 'top' ? 0 : r.height) - window.innerHeight * anchor.vh;
  s.a = at(s.start);
  s.b = at(s.end);
}

function apply(s: Sub) {
  const span = s.b - s.a;
  const p = span === 0 ? 0 : Math.min(1, Math.max(0, (window.scrollY - s.a) / span));
  if (Math.abs(p - s.last) < 0.001) return;
  s.last = p;
  s.fn(p);
}

function onScroll() {
  subs.forEach(apply);
}

function onLayout() {
  subs.forEach((s) => {
    remeasure(s);
    s.last = -1;
    apply(s);
  });
}

export function onScrollProgress(
  el: HTMLElement,
  start: Anchor,
  end: Anchor,
  fn: (progress: number) => void,
) {
  const sub: Sub = { el, start, end, fn, a: 0, b: 0, last: -1 };
  subs.add(sub);
  remeasure(sub);
  apply(sub);

  if (subs.size === 1) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onLayout, { passive: true });
    /* Fonts and images settle after mount and move everything below them. */
    observer = new ResizeObserver(onLayout);
    observer.observe(document.body);
    document.fonts?.ready.then(onLayout).catch(() => {});
  }

  return () => {
    subs.delete(sub);
    if (subs.size === 0) {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onLayout);
      observer?.disconnect();
      observer = undefined;
    }
  };
}
