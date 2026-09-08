/* Clear Capital. §6.6 — copy is final and lives here, never inline in JSX.
 *
 * This is a STRUCTURAL page: the reader is evaluating an entity, not deciding
 * where to live, so "the co-op holds the land and never sells it" is the
 * correct register here and must not be find-and-replaced into the
 * member-facing "held in common" voice used on Home, How it works and
 * Housing. Two registers, chosen by audience. (§6)
 *
 * Rewritten for the layout system. §7 Legal is the binding constraint on this
 * page and nothing about it changed: no terms, no rate, no projected return,
 * no yield, and the "nothing here is an offer" disclaimer stays at the top
 * where a reader meets it before anything else.
 *
 * The page was six sections of heading, paragraph and table. Its argument —
 * that the two sides are separated by structure rather than by promise — was
 * the second half of a 300-character lede. It opens the page. */

import type { LedgerItem } from '@/components/primitives';

export { DOWNSIDES } from './contribute';

/* ── 01 · The claim ──────────────────────────────────────────────────────
   Two boards, which is the whole answer to "whose side are you on". Drawn
   from the lede and from what was protection three. */
export const OPENING = {
  kicker: 'Clear Capital',
  heading: 'Outside money sits here, and it does not sit on the members’ side.',
  lede: 'Clear Capital Holdings is the company through which investors and property contributors participate in the cooperative’s assets.',
  sides: [
    {
      label: 'The co-op board',
      line: 'Elected by members. Member-only.',
      note: 'What protects a member is written here, and it is not up for negotiation with anyone outside the membership.',
    },
    {
      label: 'The Holdings board',
      line: 'Its own company. Its own board.',
      note: 'Investors can hold a seat on it. Neither board can quietly become the other, which is the point of there being two.',
      live: true,
    },
  ],
  /* §7 Legal. Stays at the top, in full, and is not softened. */
  note: 'Nothing on this page is an offer. No terms, no rate, no subscription. This page describes how the structure is built; anything further happens in a private conversation and under the applicable exemption.',
} as const;

/* ── 02 · The split ──────────────────────────────────────────────────────
   Three holders, three columns, on the page's one ink band. It was a
   three-row table beside two paragraphs. */
export const SPLIT = {
  kicker: 'The split',
  heading: 'The land is the reason this works for both sides.',
  sub: 'Member equity accrues in the structure. Appreciation accrues to the land the co-op holds, which is what backs construction borrowing as the portfolio grows.',
  columns: [
    {
      label: 'Members hold',
      line: 'The structure.',
      note: 'Bought down through an Equity-Lease Participation Agreement, ending in a Clear Deed.',
    },
    {
      label: 'The co-op holds',
      line: 'The land.',
      note: 'Permanently. Selling it is a reserved matter that cannot pass without the co-op.',
      live: true,
    },
    {
      label: 'Contributors hold',
      line: 'Units.',
      note: 'In Clear Properties, pro rata, on the same terms as everyone else in the pool.',
    },
  ],
  close:
    'Land backstops construction borrowing and never credit losses. A member’s savings never fund another member’s credit. Two balance sheets, and they do not touch.',
} as const;

/* ── 03 · Contributions ──────────────────────────────────────────────────
   The four terms, as a table, because that is what they are. */
export const SCALE = {
  kicker: 'Contributions',
  heading: 'A contribution is not a sale, and it is not a fund raise.',
  sub: 'Property comes in under section 721 in exchange for units issued by value. Nothing is trued up with cash, so there is no boot and no balancing mechanism.',
  ledger: [
    {
      label: 'Issued by',
      value: 'value',
      description: 'Contribute at appraised value, receive units one-for-one against it.',
    },
    {
      label: 'Clear Capital’s own position',
      value: 'same pool, no priority',
      description:
        'It holds units on exactly the same terms as every contributor. No preferred return, no priority, and its share shrinks as more contributors join.',
    },
    {
      label: 'Distributions',
      value: 'pro rata',
      description:
        'Rent is earned at the project level, which pays taxes, insurance, maintenance and management. The fund sets reserves, pays a management fee, and distributes what is left.',
    },
    {
      label: 'Tax distributions',
      value: 'mandatory',
      description:
        'Required by the agreement, so a holder is never handed a K-1 for income they did not receive in cash.',
    },
  ] satisfies LedgerItem[],
  scale:
    'The mechanics are identical whether it is one duplex or a portfolio. What changes at scale is the diligence, not the structure.',
  link: { href: '/contribute', label: 'How a single-property contribution works' },
} as const;

/* ── 04 · Protections ────────────────────────────────────────────────────
   Four equal cells, each with the term it turns on in the mono line. The
   titles were sentence-length and the cells are 272px, so the claim is the
   title and the qualifier moved up to the meta. */
export const PROTECTIONS = {
  kicker: 'Protections',
  heading: 'The protections are structural, not promises.',
  sub: 'A promise is a policy, and a board reverses a policy in an afternoon. These are written where a future board cannot.',
  steps: [
    {
      title: 'No preferred return',
      meta: 'anywhere in the stack',
      body: 'Including for the sponsor. There is no waterfall in which somebody is paid before you.',
    },
    {
      title: 'Reserved matters',
      meta: 'five of them',
      body: 'Selling land, diluting members, amending the purpose, replacing the manager, related-party deals above a threshold.',
    },
    {
      title: 'Board composition',
      meta: 'fixed by kind',
      body: 'Investors can hold a Holdings seat. The co-op board is elected by members and stays member-only.',
    },
    {
      title: 'The ledger is public',
      meta: 'open source',
      body: 'Balances, credit lines and title records run on contracts held by an ownerless foundation.',
    },
  ],
} as const;

/* ── 05 · The downsides ──────────────────────────────────────────────────
   DOWNSIDES is imported from ./contribute, verbatim and unsoftened — §6.6
   says not to soften it for an institutional reader, and the module system
   enforces that rather than anyone remembering. */
export const DOWNSIDES_SECTION = {
  kicker: 'The downsides',
  sub: 'Five of them, in the same words the single-property page uses.',
  extra: {
    title: 'And one that runs the other way.',
    body: 'Early cohorts are geographically concentrated in one corridor by design, because that is what makes the merchant and housing sides compound. Geographic diversity comes later, and anyone underwriting this should price that.',
  },
} as const;

/* ── 06 · Next ───────────────────────────────────────────────────────────
   §7 Legal: no terms, no rates, no projected returns, and that refusal is
   itself the argument. */
export const NEXT = {
  kicker: 'Next',
  statement: 'We do not publish terms, rates or projected returns.',
  body: 'You should be sceptical of a housing cooperative that does. What we will do is walk through the structure with you and your advisers, send the documents, and answer whatever your CPA and counsel ask.',
  note: 'We are not your tax or legal advisers, and nothing here is advice about your situation.',
  cta: { href: '/join?as=land', label: 'Start a conversation' },
} as const;
