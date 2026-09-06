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
  lede:
    'Your deposit is your share, every member has one vote regardless of balance, and the promises that matter are written where a future board cannot quietly reverse them.',
  panel: {
    title: '“We never sell the land.”',
    body: 'As a policy, a board reverses that in an afternoon. It is written instead as a reserved matter, which cannot pass without the co-op no matter who else joins the board.',
  },
} as const;

export const STRUCTURE = {
  rail: 'Co-op / 02 — structure',
  heading: 'Two balance sheets that never touch.',
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
  ledger: [
    {
      label: 'Members',
      value: 'one vote each',
      description:
        'Not proportional to balance. Your deposit makes you an owner; it does not make you a bigger one.',
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
  prose: [
    'Clear is being built out of Redlands by a very small team, starting with a handful of shops in one corridor rather than a launch. Ten merchants a mile apart compound. Ten across the county do not.',
    'The design work behind it — the credit waterfall, the entity structure, the deed protocol — has been in progress since 2017. What is new is that the first product is small enough to actually ship.',
  ],
  panel: {
    title: 'Working on this?',
    body: 'We are looking for a partnerships lead, a protocol engineer, and two advisers who know development and banking. Equity-only at this stage, and we say that in the first conversation rather than the fourth.',
    link: { href: '/join?as=work', label: 'Get in touch' },
  },
} as const;
