/* Home. §7.1 — copy is final and lives here, never inline in JSX. */

import type { LedgerItem, StepItem } from '@/components/primitives';

export const HERO = {
  headline: 'Rent builds equity. Just not yours.',
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

export const GAP = {
  rail: '01 / The gap',
  heading: 'Five years of rent buys you a stack of receipts.',
  prose: [
    'A two-bedroom in Redlands runs about $2,520 a month. Pay it for five years and you have handed someone $151,200 and kept nothing — no equity, no title, no claim on the thing you lived in.',
    'Inside Clear the same money has somewhere to land. That is the whole idea. Not a discount on rent. A different destination for it.',
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
  standfirst:
    'Three phases of one membership, not three ways of describing the same payment. Each has a gate you can see from the first day.',
  steps: [
    {
      title: 'You rent, and you save at the same time.',
      body: 'Your deposit is your membership share — there is no buy-in and nothing to purchase. Money in your equity savings account earns matched credits and raises a credit line you can draw on at no cost, because you are spending your own money. At 15,000 credits the home path unlocks.',
    },
    {
      title: 'You take title to the house, and hold the land with everyone else.',
      body: 'You sign an Equity-Lease Participation Agreement and a Clear Deed. Your monthly payment splits into an equity contribution and a community fee that covers property taxes and shared costs. The land underneath is held in common and cannot be sold, so nobody can sell the ground out from under a neighbourhood — and land appreciation stays where every member shares it, rather than becoming something members and investors reach for from opposite sides.',
    },
    {
      title: 'You redeem the title, and the equity stays portable.',
      body: 'Once your contributions cover the structure you hold it outright. From there you can recontribute the home through Clear Capital and earn on it, or carry your equity into a different Clear home when your life changes size.',
    },
  ] satisfies StepItem[],
} as const;

export const WAYS_IN = {
  rail: '03 / Two ways in',
  shop: {
    heading: 'You run the shop',
    prose: [
      'You write up jobs every week that walk out the door because the customer cannot pay that day. Clear finances them at 2.5% of the ticket and pays you on net-30. Klarna and Affirm sit near six per cent for the same job.',
      'Five founding partners get 2% for life and no fee on their first twenty charges. After that, standard terms.',
    ],
    link: { href: '/shops', label: 'The merchant terms in full' },
  },
  member: {
    heading: 'You are standing at a counter',
    prose: [
      'Your car needs $940 of work you cannot cover today. The shop shows you a code, you scan it, and three minutes later you have a plan you chose yourself — in full, or split two, four or twelve ways — and a membership that keeps working at every other shop in the network.',
      'No credit-score pull to approve your first plan. We read the income landing in your bank account and what already goes out of it, with your permission.',
    ],
    link: { href: '/how', label: 'How the member side works' },
  },
} as const;

export const STATUS = {
  rail: '04 / Status',
  heading: 'What exists today, plainly.',
  standfirst:
    'A co-op that asks people to save with it should be straight about what it has actually built. This list is maintained, not marketing.',
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
  prose:
    'Balances, credit lines, deeds and titles run on an open-source protocol held by an ownerless Wyoming foundation. The co-op is a user of that protocol, not its owner, and anyone can read the code or fork it. That is deliberate: a member-owned institution should not be the only party able to check its own arithmetic.',
  link: { href: '/coop', label: 'How the co-op is put together' },
  panel: {
    source: 'github.com/Deed3Labs/Protocol-Contracts · AGPL-3.0',
    body: [
      'Real-world asset tokenization carrying deeds and titles, a mutual credit ledger, term and revolving credit issuers, an assurance pool and discount bonds.',
      'A few of the credit primitives build on Stable Credit. The tokenization layer and most of what sits above it is ours.',
    ],
  },
} as const;
