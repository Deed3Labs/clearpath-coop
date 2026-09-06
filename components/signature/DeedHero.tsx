'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { EASE, animateFrom, countUp, onScrollProgress, reducedMotion, stagger } from '@/lib/motion';
import { ParcelInset } from './ParcelInset';
import { HERO, DEED } from '@/content/home';

/* §6.1 — the hero is not an illustration of a house. It is the artifact the
   member is working toward: a Clear Deed, precisely typeset, that issues
   itself.

   Everything below renders COMPLETE and static. Nothing starts hidden in the
   markup or the stylesheet, so with JavaScript off or reduced motion on this
   is already the finished document, stamp included — which for some visitors
   is the only version they get. The timeline sets its own from-states at
   runtime and is the only thing that ever hides anything. */

const FIELDS = DEED.fields;

export function DeedHero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (reducedMotion()) return;

    const q = <T extends Element>(sel: string) => el.querySelectorAll<T>(sel);

    /* ── Load, ~1.6s, once, power3.out throughout. §6.1 ─────────────────── */

    /* 0 → 400ms — the outer rule draws itself top-left to bottom-right. Two
       strokes leave the same corner and meet at the opposite one, which is
       what "top-left to bottom-right" describes on a rectangle. The dash is
       set here rather than in the stylesheet, so a page without JavaScript
       renders the rule whole. */
    q<SVGPathElement>('.deed-rule path').forEach((p) => {
      const len = p.getTotalLength();
      p.animate(
        [{ strokeDasharray: len, strokeDashoffset: len }, { strokeDasharray: len, strokeDashoffset: 0 }],
        { duration: 400, easing: EASE, fill: 'backwards' },
      );
    });

    /* 350 → 750ms — the inset draws: the land plate first, in olive, then the
       structure above it, with the gap already present. */
    animateFrom(el.querySelector('.parcel-plate'), [{ opacity: 0, transform: 'scale(0.94)' }, { opacity: 1, transform: 'none' }], { delay: 350, duration: 280 });
    animateFrom(el.querySelector('.parcel-structure-in'), [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }], { delay: 520, duration: 280 });

    /* 600 → 1100ms — field rows fade in on a 60ms stagger, labels before
       values. Interleaved rather than two sweeps, so each row reads as a row. */
    stagger(q('.deed-field-label'), [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], { delay: 600, duration: 340, step: 60 });
    stagger(q('.deed-field-value'), [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], { delay: 660, duration: 340, step: 60 });

    /* 900 → 1600ms — the credits count. */
    const stopCount = countUp(el.querySelector<HTMLElement>('.deed-credits-figure'), DEED.credits, { delay: 900, duration: 700 });

    /* 1350 → 1600ms — the stamp lands. */
    animateFrom(el.querySelector('.deed-stamp'), [{ opacity: 0, transform: 'scale(1.15) rotate(2deg)' }, { opacity: 1, transform: 'none' }], { delay: 1350, duration: 250 });

    /* ── Scroll moment. As the hero scrolls out, the structure lifts further
          off the plate and the dimension line draws between them. Contained
          entirely within the 200px inset. Scrubbed, so it reverses on the way
          back up. ──────────────────────────────────────────────────────── */
    const structure = el.querySelector<SVGGElement>('.parcel-structure');
    const dim = el.querySelector<SVGGElement>('.parcel-dim');

    const stopScroll = onScrollProgress(el, { edge: 'bottom', vh: 0.9 }, { edge: 'bottom', vh: 0.25 }, (p) => {
      if (structure) structure.style.transform = `translateY(${(-18 * p).toFixed(2)}px)`;
      if (dim) dim.style.opacity = String(p);
    });

    return () => {
      stopCount();
      stopScroll();
    };
  }, []);

  return (
    <section className="wrap section hero" ref={root}>
      <div className="grid12 hero-grid">
        <div className="hero-copy">
          <h1 className="d1 hero-headline">{HERO.headline}</h1>
          <p className="t-lede hero-lede">{HERO.lede}</p>
          <div className="hero-actions">
            <Link href={HERO.primary.href} className="btn" data-variant="primary">
              {HERO.primary.label}
            </Link>
            <Link href={HERO.ghost.href} className="btn" data-variant="ghost">
              {HERO.ghost.label}
            </Link>
          </div>
        </div>

        <div className="hero-deed">
          <article className="deed" aria-label="A Clear Deed, issued">
            {/* The rule is the deed's only border, so a static render still
                has one. Two paths from the top-left corner meeting at the
                bottom-right. */}
            <svg
              className="deed-rule"
              viewBox="0 0 500 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 0.5 0.5 H 499.5 V 599.5"
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 0.5 0.5 V 599.5 H 499.5"
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <header className="deed-head">
              <p className="deed-title">{DEED.title}</p>
              <p className="deed-no fig">{DEED.number}</p>
            </header>

            <div className="deed-body">
              <ParcelInset />

              <div className="deed-fields">
                <div className="deed-field">
                  <p className="deed-field-label">{DEED.holder}</p>
                  <p className="deed-field-value deed-holder-rule" aria-hidden="true" />
                </div>

                {FIELDS.map((f) => {
                  /* Split on the separator so a wrap puts "· not conveyed"
                     together on the second line, rather than leaving the dot
                     dangling at the end of the first. */
                  const [head, ...rest] = f.value.split(' · ');
                  return (
                    <div className={`deed-field${'land' in f && f.land ? ' is-land' : ''}`} key={f.label}>
                      <p className="deed-field-label">{f.label}</p>
                      <p className="deed-field-value">
                        {head}
                        {rest.map((part) => (
                          <span key={part}> {'\u00B7\u00A0'}{part}</span>
                        ))}
                      </p>
                    </div>
                  );
                })}

                <div className="deed-field">
                  <p className="deed-field-label">{DEED.creditsLabel}</p>
                  <p className="deed-field-value deed-credits">
                    <span className="deed-credits-figure fig">
                      {DEED.credits.toLocaleString('en-US')}
                    </span>
                    <span className="fig"> / {DEED.creditsOf}</span>
                  </p>
                </div>
              </div>
            </div>

            <footer className="deed-foot">
              <p className="deed-token fig">{DEED.token}</p>
              <p className="deed-stamp fig">{DEED.status}</p>
            </footer>
          </article>
        </div>

        <div className="hero-meta">
          {HERO.meta.map((m) => (
            <p className="t-note" key={m}>
              {m}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
