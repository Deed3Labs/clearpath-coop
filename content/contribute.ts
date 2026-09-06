/* Contribute land. §6.5 — copy is final and lives here, never inline in JSX.
 *
 * /contribute is THE ACTION, for an individual with one property. /capital is
 * the vehicle, for someone evaluating rather than acting. That division has to
 * stay clean or the two pages cannibalise each other (§6.6). */

import type { StepItem } from '@/components/primitives';

export const OPENING = {
  rail: 'Contribute / 01',
  heading: 'Put the property in. Keep the income. Stop managing it.',
  lede:
    'If you own rental property or land you have been sitting on, you can contribute it to Clear Properties in exchange for units, rather than selling it and paying tax on the whole gain this year.',
  panel: {
    title: 'We are not your tax adviser.',
    body: 'Everything below is how the structure works, not advice about your situation. Bring your CPA to the second conversation. We will send them the documents.',
  },
} as const;

export const HOW = {
  rail: 'Contribute / 02 — how it works',
  heading: 'A contribution, not a sale.',
  steps: [
    {
      title: 'You contribute the property',
      body: 'Title moves to a nominee trust; Clear Properties is the beneficiary. Under section 721, contributing property to a partnership in exchange for an interest in it is not a taxable event.',
    },
    {
      title: 'You receive units',
      body: 'Issued by value: contribute a $437,000 property, receive 437,000 units. Nothing has to be trued up with cash, so there is no boot and no balancing mechanism.',
    },
    {
      title: 'The cash keeps arriving',
      body: 'Rent is earned at the project level, which pays taxes, insurance, maintenance and management. What is left goes up to the fund, which sets reserves and pays a management fee, then distributes pro rata across every unit holder.',
    },
    {
      title: 'Nobody goes first',
      body: 'Clear Capital holds units on exactly the same terms you do — same pool, no priority and no preferred return. Its share shrinks as more contributors join.',
    },
  ] satisfies StepItem[],
  note: 'The agreement requires mandatory tax distributions, so you are never handed a K-1 for income you did not receive in cash.',
} as const;

/* §6.6 S5 reuses this panel VERBATIM and says not to soften it for an
   institutional reader. Exported from here and imported there, so "verbatim"
   is enforced by the module system rather than by remembering. */
export const DOWNSIDES = {
  title: 'The honest downsides.',
  list: [
    'Units are illiquid compared with cash',
    'You do not control the properties',
    'You get a K-1, which arrives later than a 1099 and your accountant will charge you for it',
    'The deferred gain still exists and comes due if you ever sell the units',
    'Concentration risk moves from your one building to a fund, which is usually better but is a change, not a removal',
  ],
} as const;

export const WHO = {
  rail: 'Contribute / 03 — who this is for',
  columns: [
    {
      heading: 'Tired landlords',
      body: 'You own rentals, ideally paid off, and you are done with tenants and three a.m. phone calls. Selling triggers depreciation recapture, capital gains and state tax all at once. Contributing does not.',
    },
    {
      heading: 'People holding raw land',
      body: 'You bought a parcel meaning to do something with it and it turned out to be more than you wanted to handle. Individually these are hard to sell into a thin market. Pooled, they become scale that can be financed and developed.',
    },
    {
      heading: 'Homeowners with a large backyard',
      body: 'A short ground lease with extension options, a removable unit, and monthly income. You approve or decline decisions and we handle permitting.',
    },
  ],
} as const;

export const CLOSE = {
  rail: 'Contribute / 04',
  heading: 'One thing worth saying out loud.',
  prose:
    'A contribution is designed to be held. The anti-abuse rules that make the deferral work also make frequent swapping in and out unworkable — the relevant window is seven years, not seven months. If you are looking to trade property every couple of years, this is the wrong vehicle and we will tell you that on the first call.',
  cta: { href: '/join?as=land', label: 'Send us the property details' },
  onward: {
    before: 'If you hold a portfolio rather than a property, or you are evaluating this on someone else’s behalf, ',
    link: { href: '/capital', label: 'Clear Capital' },
    after: ' sets out the structure.',
  },
} as const;
