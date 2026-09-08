import { Suspense } from 'react';
import { JoinForm } from '@/components/interactive/JoinForm';
import { JoinAsides } from '@/components/interactive/JoinAsides';
import { OPENING } from '@/content/join';

export const metadata = {
  title: 'Join',
  description:
    'We are onboarding a small number of members and shops in the Redlands corridor first. Tell us which one you are.',
};

/* The last page onto .hx, and the one that gets to break the pattern.
 *
 * Every other page is making an argument, so it runs five or six sections in
 * an alternating rhythm. This one is a conversion page: somebody arriving has
 * already decided, and the layout's whole job is to hand them the form.
 *
 * So it is three moves rather than six, and the ink band — which everywhere
 * else is the page's big argument — is spent on the form itself. Same
 * vocabulary as the rest of the site, pointed at one thing.
 *
 * §6.8: the form submits for real. Set NEXT_PUBLIC_JOIN_ENDPOINT and it
 * ships; see the TODO in JoinForm. */

export default function Join() {
  return (
    <div className="hx">
      {/* S1 - The question, and nothing else. */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>01</b> Join
        </p>
        <div className="hx-grid">
          <h1 className="hx-h2 c-two-thirds">{OPENING.heading}</h1>
          <p className="hx-lede c-third">{OPENING.lede}</p>
        </div>
      </section>

      {/* S2 - The form, on ink, full bleed. On every other page this band
          carries the argument; here the form is the argument. */}
      <section className="hx-band" data-tone="ink" id="the-form">
        <div className="hx-wrap">
          <div className="hx-grid">
            {/* The mode is read from ?as=, so the form suspends while the
                search params resolve. Without the boundary the whole route
                opts out of static rendering. */}
            <Suspense fallback={<div className="join-fallback" aria-hidden="true" />}>
              <JoinForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* S3 - What happens after you press it, per mode. */}
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>02</b> After you send it
        </p>
        <Suspense fallback={null}>
          <JoinAsides />
        </Suspense>
      </section>
    </div>
  );
}
