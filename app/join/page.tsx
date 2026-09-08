import { Suspense } from 'react';
import { JoinForm } from '@/components/interactive/JoinForm';
import { OPENING } from '@/content/join';

export const metadata = {
  title: 'Join',
  description:
    'We are onboarding a small number of members and shops in the Redlands corridor first. Tell us which one you are.',
};

/* Migrated to the .hx layout system, and the last page to move — with it, the
 * header lines up with the content on every page rather than six of seven.
 *
 * One section, deliberately. Every other page earns five or six because it is
 * making an argument; this one is a form, and the fastest thing it can do for
 * someone who has already decided is get out of the way.
 *
 * §6.8 is unchanged: the form has no endpoint, so submission stays disabled
 * and says so above the button rather than accepting details and dropping
 * them. See the TODO in JoinForm. */

export default function Join() {
  return (
    <div className="hx">
      <section className="hx-band hx-wrap" data-pad="tight">
        <p className="hx-label">
          <b>01</b> Join
        </p>
        <div className="hx-grid">
          <h1 className="hx-h2 c-two-thirds">{OPENING.heading}</h1>
          <p className="hx-lede c-third">{OPENING.lede}</p>

          <div className="c-full">
            {/* The mode is read from ?as=, so the form suspends while the
                search params resolve. Without the boundary the whole route
                opts out of static rendering. */}
            <Suspense fallback={<div className="join-fallback" aria-hidden="true" />}>
              <JoinForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
