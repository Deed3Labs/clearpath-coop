/* Housing. §6.4 — copy is final and lives here, never inline in JSX.
 *
 * Member-facing page, so the ownership voice rule applies (§6): the land is
 * held in common by members. Never "ours" against "yours", and never "the
 * co-op keeps the land" — that casts the co-op as a landlord, which is the one
 * thing it is not. The structural register is correct on /coop and /capital
 * and is used there instead. */

import type { LedgerItem } from '@/components/primitives';

export const OPENING = {
  rail: 'Housing / 01',
  heading: 'Take the land out of the price and the price changes.',
  sub: 'What you take title to is the house — which, unlike land, has a cost you can point at.',
  lede:
    'The land under a Clear community is held in common by its members and is never sold.',
  note: 'ClearPath is the housing program of the Clear cooperative.',
  panel: {
    title: 'Why this is not a technicality.',
    body: 'Land appreciation stays in the commons, so the collateral base backing every project keeps growing and every member holds a share of it. Members and investors are never reaching for the same dollar. It is also the reason the price sits below market without a subsidy, a covenant or an income test.',
  },
} as const;

export const NUMBERS = {
  rail: 'Housing / 02 — the numbers',
  heading: 'Cost plus fifteen per cent, and we show the cost.',
  sub: 'The margin is the small bar on top. The gap to market is the tall one beside it.',
  /* Feeds components/visuals/CostStack.tsx. Three bars on one scale: the
     build cost, the same cost with the fifteen per cent shown as a separate
     cap on top of it, and the market comparable. Set as three figures in a
     row the reader had to do the subtraction; set as bars, the margin is
     visibly a sliver and the gap to market visibly is not. */
  bars: {
    scale: 460000,
    build: 289099,
    margin: 43365,
    member: 332464,
    market: 450000,
    labels: {
      build: 'What the structure costs to build',
      margin: 'The fifteen per cent',
      member: 'What a member pays',
      market: 'A comparable home, open market',
    },
  },
  /* The running cost, as two ranges on one scale. Ranges and not a stacked
     bar: the brief gives an all-in band and a rental band, and inventing a
     line-by-line breakdown to fill a stacked bar would put figures on this
     page that nobody has stood behind. */
  monthly: {
    scale: 6000,
    rows: [
      { label: 'All in, inside Clear', from: 3000, to: 3500, live: true, note: 'Of which $500 a month or more is equity you keep.' },
      { label: 'A comparable rental', from: 4500, to: 5500, live: false, note: 'Of which nothing is.' },
    ],
    caption: 'Monthly, including utilities',
  },
  stats: [
    { figure: '$289,099', caption: 'What the structure costs to build, first cohort' },
    /* Cobalt once per viewport, on the figure that matters most. */
    { figure: '$332,464', caption: 'What a member pays for it — cost plus 15%', live: true },
    { figure: '~$450,000', caption: 'What a comparable home costs on the open market', muted: true },
  ],
  /* §7 Legal: every housing figure is labelled as an illustration ADJACENT to
     the figure, not in the footer. */
  disclaimer:
    'First-cohort figures for the Inland Empire, shown as illustrations of how the model works rather than quotes, offers or predictions.',
  prose: [
    'Your monthly payment is two things, and the app shows them separately. An equity contribution from $500 a month, which goes straight to your balance. And a community fee of around $850 that covers property taxes, insurance and shared costs, and moves when those move.',
  ],
  panel: {
    title: 'This is not affordable housing, and we do not want it confused with it.',
    body: 'No income restrictions and no qualifying bands. Mixing incomes inside one neighbourhood is the point, not a compromise. The price is lower because of how the model is built, not because someone is subsidising it.',
  },
} as const;

export const HOMES = {
  rail: 'Housing / 03 — the homes',
  heading: 'Detached, with a porch at both ends.',
  sub: 'The front is arrival and neighbours. The back is where you actually live.',
  /* Feeds components/visuals/LotPlan.tsx. Labels here, geometry in the
     component — so the drawing and the key it is read through cannot drift
     apart, the way the structure diagram on /coop is built. */
  plan: {
    caption: 'One lot, seen from above. Not to scale.',
    keys: [
      { n: 1, label: 'Covered front porch', note: 'Onto the street and the neighbours.' },
      { n: 2, label: 'The house', note: 'Two bed two bath from 900–950 sq ft.' },
      { n: 3, label: 'Rear porch', note: 'Covered, onto the patio.' },
      { n: 4, label: 'Patio', note: '' },
      { n: 5, label: 'Yard', note: 'Wrapped into an L by the drive.' },
      { n: 6, label: 'Garage and workshop', note: '1.5 car, set behind and to the side.' },
      { n: 7, label: 'Perimeter drive', note: '' },
    ],
  },
  prose: [
    'The yard is proportional, so the smallest home has the same outdoor-to-indoor ratio as the largest. Unit mix runs one-bed to three-bed inside every community.',
  ],
  ledger: [
    { label: 'All detached', value: 'no duplexes' },
    { label: 'Front porch, rear porch, patio, yard', value: 'every home' },
    { label: 'Garage and workshop', value: '1.5 car' },
    {
      label: 'Built from',
      value: 'panelised kits',
      description: 'Permitted, code-compliant California dwellings, finished by local trades.',
    },
    {
      label: 'Power',
      value: 'co-op owned',
      description: 'The community owns the solar and storage; residents buy power from it.',
    },
  ] satisfies LedgerItem[],
} as const;

export const BACKYARDS = {
  rail: 'Housing / 04 — before the communities',
  heading: 'Backyards first, because they are available now.',
  sub: 'Master-planned communities are an eighteen-to-thirty-six month problem. Backyards are not.',
  figure: { value: '450–650', caption: 'square feet, one open volume, built to come apart and move' },
  prose: [
    'The co-op leases backyards from homeowners and places relocatable studios and one-bedrooms on them, with high ceilings and configurable by whoever lives there.',
    'The homeowner stays passive: they receive income, they approve or decline decisions, and Clear handles permitting. The units are built to come apart and move, so when a lease ends the structure goes somewhere else and the next placement costs less.',
    'The renter we are building these for is a single person. Renting alone is close to impossible without roommates, and almost nothing gets built for that.',
  ],
  panel: {
    title: 'Own a backyard?',
    body: 'If you have a lot with real separation between the house and the back fence, we would like to talk about a ground lease.',
    link: { href: '/contribute', label: 'How contributions work' },
  },
} as const;

export const GATE = {
  rail: 'Housing / 05 — the gate',
  heading: 'The path to a deed is visible from your first deposit.',
  sub: 'Five milestones, each unlocking something real.',
  prose:
    'It ends with signing your Equity-Lease Participation Agreement and your Clear Deed at 15,000 equity credits. You can see where you are and the date you are on track for, every day, from the same screen where you save.',
  cta: { href: '/join', label: 'Start saving' },
} as const;
