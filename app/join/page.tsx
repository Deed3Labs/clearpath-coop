import { Suspense } from 'react';
import { JoinForm } from '@/components/interactive/JoinForm';

export const metadata = {
  title: 'Join',
  description:
    'We are onboarding a small number of members and shops in the Redlands corridor first. Tell us which one you are.',
};

/* The last page onto .hx, and the one that gets to break the pattern.
 *
 * Every other page is making an argument, so it runs five or six sections in
 * an alternating rhythm. This one is a conversion page: somebody arriving has
 * already decided, and the layout's only job is to hand them the form.
 *
 * So it is one band, not three. The question, the four answers, the fields
 * and the two notes are one composition on one screen — nothing to scroll
 * past to reach the thing the page is for. The ink band, which everywhere
 * else carries the page's argument, is spent on the form.
 *
 * §6.8: the form submits for real. Set NEXT_PUBLIC_JOIN_ENDPOINT and it
 * ships; see the TODO in JoinForm. */

export default function Join() {
  return (
    <div className="hx">
      <section className="hx-band" data-tone="ink" id="the-form">
        <div className="hx-wrap">
          <p className="hx-label">
            <b>01</b> Join
          </p>
          {/* The mode is read from ?as=, so the form suspends while the search
              params resolve. Without the boundary the whole route opts out of
              static rendering. */}
          <Suspense fallback={<div className="join-fallback" aria-hidden="true" />}>
            <JoinForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
