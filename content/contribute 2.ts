/* Contribute land. §6.5 — copy is final and lives here, never inline in JSX.
 *
 * /contribute is THE ACTION, for an individual with one property. /capital is
 * the vehicle, for someone evaluating rather than acting. That division has to
 * stay clean or the two pages cannibalise each other (§6.6).
 *
 * Rewritten for the layout system. The page was four sections of heading and
 * paragraph, and its whole argument — that contributing is not selling — was
 * a subordinate clause inside the lede. It is the opening pair now.
 *
 * The one figure on the page, "seven years, not seven months", was buried in
 * the middle of a 320-character closing paragraph. It closes the page. */

import type { StepItem } from '@/components/primitives';

/* Naming: the instrument is "yield-bearing shares", not "units". On a site
   where /housing calls a dwelling a unit and the unit mix runs one-bed to
   three-bed, "units" read as housing rather than as the thing you receive for
   contributing property. The full term appears on first use on each page and
   "shares" carries it thereafter.
   "Share" also means a membership share elsewhere on the site — a portion of
   the co-op, which every member holds by depositing. That is a different
   sense, in a different register, for a different reader, and the pages that
   use it are unchanged. */

/* ── 01 · The offer ──────────────────────────────────────────────────────
   Two ways to stop being a landlord, set side by side. Both halves are drawn
   from copy that was already on the page — the recapture list came out of the
   "tired landlords" column, the §721 sentence out of step one. */
export const OPENING = {
  kicker: 'Contribute',
  heading: 'Put the property in. Keep the income. Stop managing it.',
  lede: 'If you own rental property or land you have been sitting on, you can contribute it to Clear Properties in exchange for yield-bearing shares.',
  sides: [
    {
      label: 'Selling it',
      line: 'Tax on the whole gain, this year.',
      note: 'Depreciation recapture, capital gains and state tax, all at once.',
    },
    {
      label: 'Contributing it',
      /* Full stop rather than "and": "Shares" is wider than "Units" was, and
         the comma version measured 2 lines against 1 on the other side. */
      line: 'Shares. The income keeps arriving.',
      note: 'Under section 721, contributing property to a partnership in exchange for an interest in it is not a taxable event.',
      live: true,
    },
  ],
  /* Stays near the top and stays plain. */
  note: 'We are not your tax adviser. Everything here is how the structure works, not advice about your situation. Bring your CPA to the second conversation and we will send them the documents.',
} as const;

/* ── 02 · How it works ───────────────────────────────────────────────────
   Four equal cells on the page's one ink band. The mono line above each
   carries the step number and the term that step turns on, which is the
   pattern the draw order uses on /how. */
export const HOW = {
  kicker: 'How it works',
  heading: 'A contribution, not a sale.',
  sub: 'Four steps, and none of them is a closing.',
  steps: [
    {
      title: 'You put the property in',
      meta: '§721',
      body: 'Title moves to a nominee trust, with Clear Properties as the beneficiary. Not a taxable event.',
    },
    {
      title: 'You receive shares',
      meta: '1:1 by value',
      body: 'Contribute a $437,000 property, receive 437,000 shares. No boot and no balancing mechanism.',
    },
    {
      title: 'The cash keeps arriving',
      meta: 'pro rata',
      body: 'Rent is earned at the project level, which pays taxes and management. The rest goes out to every holder.',
    },
    {
      title: 'Nobody goes first',
      meta: 'same terms',
      body: 'Clear Capital holds shares on the terms you do — same pool, no priority, no preferred return.',
    },
  ] satisfies (StepItem & { meta: string })[],
  note: 'The agreement requires mandatory tax distributions, so you are never handed a K-1 for income you did not receive in cash.',
} as const;

/* §6.6 S5 reuses this panel VERBATIM and says not to soften it for an
   institutional reader. Exported from here and imported there, so "verbatim"
   is enforced by the module system rather than by remembering.

   The list itself is untouched. Only the framing around it is new, because a
   section called "the honest downsides" that sits in a sidebar is not being
   honest with the reader about how much it means it. */
export const DOWNSIDES = {
  title: 'The honest downsides.',
  list: [
    'Shares are illiquid compared with cash',
    'You do not control the properties',
    'You get a K-1, which arrives later than a 1099 and your accountant will charge you for it',
    'The deferred gain still exists and comes due if you ever sell the shares',
    'Concentration risk moves from your one building to a fund, which is usually better but is a change, not a removal',
  ],
} as const;

export const DOWNSIDES_INTRO = {
  kicker: 'The downsides',
  /* Was "in the same type as everything else on this page", which is a note
     about the typography, not something a reader wants. Same fault as the
     one on /capital. */
  sub: 'Five of them, and every one is a real cost of doing it this way.',
} as const;

/* ── 04 · Who this is for ────────────────────────────────────────────────
   Three people, so three columns. Each was a heading over a long paragraph;
   each now leads with the sentence that tells a reader whether they are the
   person being described. */
export const WHO = {
  kicker: 'Who this is for',
  heading: 'Three people this is built for.',
  columns: [
    {
      key: 'landlords',
      heading: 'Tired landlords',
      line: 'You are done with tenants.',
      body: 'Rentals, ideally paid off, and no appetite left for three a.m. phone calls. Selling triggers everything at once. Contributing does not.',
    },
    {
      key: 'land',
      heading: 'People holding raw land',
      line: 'Pooled, it becomes scale.',
      body: 'A parcel you bought meaning to do something with. One of them is hard to sell into a thin market. Together they can be financed and developed.',
    },
    {
      key: 'backyards',
      heading: 'Homeowners with a backyard',
      line: 'A ground lease, and income.',
      body: 'Extension options, a removable unit and monthly income. You approve or decline decisions and Clear handles permitting.',
    },
  ],
} as const;

/* ── 05 · The close ──────────────────────────────────────────────────────
   The page's one figure, and the thing most likely to make someone walk away
   before they waste a call. It was the middle clause of a 320-character
   paragraph. */
export const CLOSE = {
  kicker: 'One thing worth saying out loud',
  statement: 'A contribution is designed to be held.',
  figure: '7 years',
  figureCaption: 'not seven months — the window the anti-abuse rules turn on',
  body: 'The rules that make the deferral work also make frequent swapping in and out unworkable. If you are looking to trade property every couple of years, this is the wrong vehicle, and we will tell you that on the first call.',
  cta: { href: '/join?as=land', label: 'Send us the property details' },
  onward: {
    before: 'If you hold a portfolio rather than a property, or you are evaluating this on someone else’s behalf, ',
    link: { href: '/capital', label: 'Clear Capital' },
    after: ' sets out the structure.',
  },
} as const;
