/* Home. §7.1 — copy is final and lives here, never inline in JSX.
 *
 * The home page is four beats, not seven sections.
 *
 * It used to open with the claim and then summarise, in turn, the gap, the
 * three phases, the two ways in, the status and the protocol — five sections
 * each standing in for a page that already exists and says it better. That is
 * a table of contents written out longhand, and it is why every visual added
 * to it read as filler: the page had no job of its own for a visual to serve.
 *
 * A splash has one job. Make someone believe one thing, show them the shape of
 * what they have arrived at, and give them a door. */

import type { LedgerItem } from '@/components/primitives';

export const HERO = {
  /* The hero is the argument now, not an introduction to it. It carries the
     two figures live as you scroll, which is why the separate "proof" beat
     that stated the same two numbers is gone — it was the same claim twice,
     once moving and once still. Its disclaimer and its link live here. */
  chip: 'A cooperative in Redlands, California',
  headline: ['Rent builds equity.', 'Just not yours.'],
  lede: 'What you pay for a place to live ends up being yours.',
  primary: { href: '/join', label: 'Join as a member' },
  ghost: { href: '/shops', label: 'Bring Clear to your shop' },
  rent: { label: 'Renting', caption: 'paid out, and nothing retained' },
  clear: { label: 'Inside Clear', caption: 'equity you keep' },
  months: 60,
  rentMonthly: 2520,
  equityMonthly: 1500,
  note: 'Illustration on a $2,520 two-bedroom in Redlands. Not a quote.',
  link: { href: '/how', label: 'The arithmetic, in full' },
} as const;

/* §6.1 lists three approved alternates, already weighed. Kept here so the
   decision is visible in the code rather than lost in a document, and so
   nobody writes a fourth.
     · 'You are already buying a house. Someone else is keeping it.'
     · 'You already pay for a house every month. It just isn\'t yours.'
     · 'Your rent is making someone else rich.' — strongest hook, riskiest:
       it names a beneficiary, and /contribute and /capital on this same site
       ask landlords to bring their property in. */

/* Beat three — one band instead of three sections.
 *
 * The arrival here is "a general person learning about the co-op itself, what
 * it contains and does — not just picking one small thing, as it's the whole
 * of it all and how they work together that makes us different". Three
 * sections each summarising a page made that whole harder to see rather than
 * easier. Three strands side by side make the shape legible in one look, and
 * the pages behind them do the explaining. */
export const STRANDS = {
  rail: '02 / What it is',
  heading: 'One membership, three things it does.',
  sub: 'Most places do one of these. Doing all three is what makes the arithmetic work.',
  items: [
    {
      n: 'Spend',
      title: 'Credit backed by your own savings',
      body: 'Financing at the counter, drawn from the cheapest thing behind you first — which by your third year is your own money.',
      link: { href: '/how', label: 'How the member side works' },
    },
    {
      n: 'Save',
      title: 'Saving that turns into a house',
      body: 'Every dollar saved is matched in equity credits. At 15,000 you sign, and take title to the structure.',
      link: { href: '/housing', label: 'The housing programme' },
    },
    {
      n: 'Own',
      title: 'A share of the thing doing it',
      body: 'Your deposit is your share. One member, one vote, and the land under every community is held in common and never sold.',
      link: { href: '/coop', label: 'How the co-op is put together' },
    },
  ],
} as const;

/* Beat four — the door, and the honest list beside it.
 *
 * The status list stays on the home page rather than moving to /coop. A page
 * asking people to save with a thing that does not exist yet has to say so
 * where they arrive, not one click in. It is kept tight: this is a footnote to
 * the invitation, not a section competing with it. */
export const STATUS = {
  rail: '03 / Where this is',
  heading: 'What exists today, plainly.',
  sub: 'A co-op that asks people to save with it should be straight about what it has actually built.',
  standfirst: 'This list is maintained, not marketing.',
  ledger: [
    {
      label: 'Member app — savings, credit, term plans, card',
      value: 'in build',
      chip: 'in build',
      description:
        'Design complete across 53 screens. Accounts and cards run on Lithic, wallets on Privy.',
    },
    {
      label: 'Merchant counter app',
      value: 'in build',
      chip: 'in build',
      description:
        'Tablet-first, installs from a browser. Charge, show a code, refund with an owner code.',
    },
    {
      label: 'Protocol contracts',
      value: 'in build',
      chip: 'in build',
      description:
        'Public and open source. Savings-backed credit needs no outside capital, so it ships first.',
    },
    {
      label: 'First merchant partners',
      value: 'signing',
      chip: 'signing',
      description: 'Auto repair, tires and similar trades in the Redlands corridor.',
    },
    {
      label: 'First homes',
      value: 'not yet',
      chip: 'not yet',
      description:
        'Twelve detached homes, paced to member savings and financing capacity. Land first.',
    },
  ] satisfies LedgerItem[],
} as const;

export const CLOSE = {
  heading: 'Two front doors.',
  member: { href: '/join', label: 'Join as a member' },
  shop: { href: '/shops', label: 'Bring Clear to your shop' },
  note: 'Onboarding a small number of members and shops in the Redlands corridor first.',
} as const;
