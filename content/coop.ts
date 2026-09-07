/* The co-op. §6.7 — copy is final and lives here, never inline in JSX.
 *
 * Structural page: the reader is evaluating an entity, so "the co-op holds the
 * land and never sells it" is the correct register here, as on /capital. (§6) */

import type { LedgerItem } from '@/components/primitives';

export const OPENING = {
  rail: 'Co-op / 01',
  /* "Bank" is a restricted term and Clear is not one — the footer legal block
     on every page says so explicitly. An H1 claiming it while the footer
     disclaims it is a contradiction a regulator would read as the claim, not
     the disclaimer. "Lender" is accurate, unrestricted, and keeps the
     sentence's incongruity — the thing that lends is the thing that builds. */
  heading: 'A lender that happens to build houses, owned by the people who use it.',
  sub: 'Your deposit is your share. Every member has one vote regardless of balance.',
  lede:
    'The promises that matter are written where a future board cannot quietly reverse them.',
  panel: {
    title: '“We never sell the land.”',
    body: 'As a policy, a board reverses that in an afternoon. It is written instead as a reserved matter, which cannot pass without the co-op no matter who else joins the board.',
  },
} as const;

export const STRUCTURE = {
  rail: 'Co-op / 02 — structure',
  heading: 'Two balance sheets that never touch.',
  sub: 'Land backstops construction borrowing and never credit losses.',
  prose:
    'Housing sits on one side — land and contributed property. Money sits on the other — deposits, credit and loans. Land backstops construction borrowing and never credit losses, and a member’s savings never fund another member’s credit.',
  /* The diagram's contents, so the drawing and its text alternative are
     generated from one source and cannot drift apart. */
  root: { name: 'The co-op', note: 'members, one member one vote' },
  children: [
    { name: 'Program entity', note: 'accounts, cards, payments' },
    { name: 'Deed & Title Co', note: 'records, administration' },
    { name: 'Clear Capital Holdings', note: 'where outside investors sit' },
    { name: 'ClearLabs', note: 'builds the protocol' },
  ],
  /* Sit under Clear Capital Holdings. */
  holdingsChildren: [
    { name: 'Clear Lending', note: 'funds the credit book' },
    { name: 'Properties', note: 'contributed' },
  ],
  /* Outside the ownership tree. A dashed outline means ownerless and nothing
     else — this is the only dashed box in the drawing. */
  foundation: { name: 'Protocol foundation', note: 'ownerless, holds the source' },
  contractLabel: 'contracts ClearLabs to maintain it',
  footnotes: [
    'Members hold no shares in Clear Capital Holdings; it is a separate company with its own board.',
    'Investors can hold a seat on that board; the co-op board is elected by members and stays member-only.',
  ],
  link: { href: '/capital', label: 'How outside capital enters' },
} as const;

export const GOVERNANCE = {
  rail: 'Co-op / 03 — governance',
  heading: 'Who decides what.',
  sub: 'One member, one vote. Not one dollar, one vote — which is the arrangement this is usually confused with.',
  /* Feeds components/visuals/VoteMarks.tsx. "One vote each regardless of
     balance" is a claim about SIZE, and size is the one thing prose is worst
     at. Two rows of marks settle it before the sentence under them is read. */
  votes: {
    usual: {
      label: 'One dollar, one vote',
      note: 'A shareholder with a hundred times the balance has a hundred times the say.',
      /* Relative weights, not real balances — an illustration of a shape. */
      weights: [1, 0.35, 5.5, 0.6, 2.2, 0.2, 0.9],
    },
    ours: {
      label: 'One member, one vote',
      note: 'Your deposit makes you an owner. It does not make you a bigger one.',
      weights: [1, 1, 1, 1, 1, 1, 1],
    },
  },
  /* The delegate share is written as a fraction so it holds at any board
     size, which is itself the point — so it is drawn as a fraction of a bar
     rather than stated as a number of seats. */
  board: {
    label: 'The board',
    delegates: { fraction: 1 / 3, label: 'Delegated by regional councils' },
    rest: { label: 'Elected at large by members' },
    note: 'Written as a fraction, so it holds whatever size the board grows to.',
  },
  ledger: [
    {
      label: 'Members',
      value: 'one vote each',
      /* Just the first sentence now: the marks above this ledger already say
         "your deposit does not make you a bigger owner", one screen up and in
         almost these words. A caption and a ledger row should not be the same
         sentence twice. */
      description: 'Not proportional to balance.',
    },
    {
      label: 'Regional councils',
      value: 'per community',
      description:
        'Actual residents, governing their own place. From outside it looks like an HOA. It is not one.',
    },
    {
      label: 'Delegate assembly',
      value: 'one third of the board',
      description:
        'Each community delegates its council chair. Written as a fraction so it holds at any board size.',
    },
    {
      label: 'Reserved matters',
      value: 'need the co-op',
      description:
        'Selling land, diluting members, amending the purpose, replacing the manager, related-party deals above a threshold.',
    },
  ] satisfies LedgerItem[],
  protocol: {
    heading: 'And what the protocol is for.',
    prose: [
      'The ledger, the credit issuers and the tokenized deed and title records run on open-source contracts held by a Wyoming statutory foundation that nobody owns. ClearLabs is currently paid to maintain them and is deliberately not the only party that could be.',
      'If governance ever diverged, the co-op can fork the code — it already funds the maintainer, so it has the capability and not just the right. Control is unnecessary when exit is credible.',
    ],
    note: 'github.com/Deed3Labs/Protocol-Contracts · AGPL-3.0',
  },
} as const;

export const WHO = {
  rail: 'Co-op / 04 — who',
  heading: 'Small, local, and honest about it.',
  sub: 'Ten merchants a mile apart compound. Ten across the county do not.',
  figure: { value: '2017', caption: 'when the design work behind this started. What is new is that the first product is small enough to ship.' },
  prose: [
    'Clear is being built out of Redlands by a very small team, starting with a handful of shops in one corridor rather than a launch.',
    'The design work behind it is the credit waterfall, the entity structure and the Clear protocol.',
  ],
  panel: {
    title: 'Working on this?',
    body: 'We are looking for a partnerships lead, a protocol engineer, and two advisers who know development and banking. Equity-only at this stage, and we say that in the first conversation rather than the fourth.',
    link: { href: '/join?as=work', label: 'Get in touch' },
  },
} as const;
