/* Home. §7.1 — copy is final and lives here, never inline in JSX. */

import type { LedgerItem } from '@/components/primitives';

/* The three phases are a rail with stations on it, not numbered steps, so they
   carry the gate that ends each phase rather than an index. */
export type Phase = { title: string; gate: string; body: string };

export const HERO = {
  /* Two sentences, set as two lines. The break is the sentence break at every
     width rather than wherever the measure happens to fall. */
  headline: ['Rent builds equity.', 'Just not yours.'],
  lede:
    'Clear is a cooperative. You take title to the house. The land is held in common by every member, which is what stops it being sold out from under you. What you pay in becomes equity you keep.',
  primary: { href: '/join', label: 'Join as a member' },
  ghost: { href: '/shops', label: 'Bring Clear to your shop' },
  meta: [
    'Building in Redlands, California',
    'First cohort — 12 detached homes',
    'Protocol source is public',
  ],
} as const;

/* §6.1 lists three approved alternates, already weighed. Kept here so the
   decision is visible in the code rather than lost in a document, and so
   nobody writes a fourth.
     · 'You are already buying a house. Someone else is keeping it.'
     · 'You already pay for a house every month. It just isn\'t yours.'
     · 'Your rent is making someone else rich.' — strongest hook, riskiest:
       it names a beneficiary, and /contribute and /capital on this same site
       ask landlords to bring their property in. */

/* §5 — one sentence at display size, full bleed on ink. The strongest line on
   the site, and the one the whole argument rests on. */
export const STATEMENT = 'You pay for a house every month either way. Only one of them ends up yours.';

export const GAP = {
  rail: '01 / The gap',
  heading: 'Five years of rent buys you a stack of receipts.',
  /* The skimmable layer: headline → sub-headline → visual → figure. The
     paragraph is the fourth thing a reader meets, not the first. */
  sub: 'You pay about the same either way. Only one of you ends the five years holding something.',
  prose: [
    'A two-bedroom in Redlands runs about $2,520 a month. Five years of that is $151,200 handed to someone else.',
    'Inside Clear the same money has somewhere to land. Not a discount on rent — a different destination for it.',
  ],
  ledger: [
    {
      label: 'Renting, five years',
      value: '$151,200',
      description: 'Paid out. Nothing retained.',
    },
    {
      label: 'Inside Clear, five years',
      value: '$90,000',
      live: true,
      description:
        'Equity contributions at $1,500 a month, every dollar credited to your balance. With the community fee on top your monthly total is $2,350 — lower than the rent above, not higher.',
    },
  ] satisfies LedgerItem[],
  note: 'Illustration of how the model works. Not a quote.',
} as const;

export const PHASES = {
  rail: '02 / Three phases',
  heading: 'Renter, owner, earner.',
  sub: 'Three phases of one membership, each with a gate you can see from the first day.',
  standfirst: 'Not three ways of describing the same payment.',
  steps: [
    {
      title: 'You rent, and you save at the same time.',
      gate: '15,000 credits',
      body: 'Your deposit is your membership share. There is no buy-in and nothing to purchase. Saving earns matched credits and raises a credit line you can draw on at no cost, because you are spending your own money.',
    },
    {
      title: 'You take title to the house, and hold the land with everyone else.',
      gate: 'ELPA and Clear Deed',
      body: 'Your monthly payment splits into an equity contribution and a community fee that covers property taxes and shared costs. The land underneath is held in common and cannot be sold, so nobody can sell the ground out from under a neighbourhood.',
    },
    {
      title: 'You redeem the title, and the equity stays portable.',
      gate: 'Redemption',
      body: 'Once your contributions cover the structure you hold it outright. From there you can carry your equity into a different Clear home when your life changes size.',
    },
  ] satisfies Phase[],
} as const;

export const WAYS_IN = {
  rail: '03 / Two ways in',
  heading: 'Two front doors.',
  sub: 'A shop raises the charge. The customer approves it on their own phone, in their own time.',
  shop: {
    heading: 'You run the shop',
    prose: [
      'You write up jobs every week that walk out because the customer cannot pay that day. Clear finances them at 2.5% of the ticket and pays you on net-30. Klarna and Affirm sit near six per cent for the same job.',
    ],
    link: { href: '/shops', label: 'The merchant terms in full' },
  },
  member: {
    heading: 'You are standing at a counter',
    prose: [
      'Your car needs $940 of work you cannot cover today. The shop shows you a code and three minutes later you have a plan you chose yourself — and a membership that keeps working at every other shop in the network.',
      'No credit-score pull to approve your first plan.',
    ],
    link: { href: '/how', label: 'How the member side works' },
  },
} as const;

export const STATUS = {
  rail: '04 / Status',
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

export const UNDERNEATH = {
  rail: '05 / Underneath',
  heading: 'The ledger is public, and the co-op does not own it.',
  sub: 'A member-owned institution should not be the only party able to check its own arithmetic.',
  prose:
    'Balances, credit lines, deeds and titles run on an open-source protocol held by an ownerless Wyoming foundation. The co-op is a user of that protocol, not its owner. Anyone can read the code or fork it.',
  link: { href: '/coop', label: 'How the co-op is put together' },
  panel: {
    source: 'github.com/Deed3Labs/Protocol-Contracts · AGPL-3.0',
    body: [
      'Real-world asset tokenization carrying deeds and titles, a mutual credit ledger, term and revolving credit issuers, an assurance pool and discount bonds.',
      'A few of the credit primitives build on Stable Credit. The tokenization layer and most of what sits above it is ours.',
    ],
  },
} as const;
