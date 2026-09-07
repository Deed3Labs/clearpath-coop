/* Clear Capital. §6.6 — copy is final and lives here, never inline in JSX.
 *
 * This is a STRUCTURAL page: the reader is evaluating an entity, not deciding
 * where to live, so "the co-op holds the land and never sells it" is the
 * correct register here and must not be find-and-replaced into the
 * member-facing "held in common" voice used on Home, How it works and
 * Housing. Two registers, chosen by audience. (§6) */

import type { LedgerItem, StepItem } from '@/components/primitives';

export { DOWNSIDES } from './contribute';

export const OPENING = {
  rail: 'Capital / 01',
  heading: 'Outside money sits here, and it does not sit on the members’ side.',
  lede:
    'Clear Capital Holdings is the company through which investors and property contributors participate in the cooperative’s assets. It is deliberately a separate company with its own board, so that what protects a member and what attracts an investor are not the same set of promises being pulled in two directions.',
  panel: {
    title: 'Nothing on this page is an offer.',
    body: 'No terms, no rate, no subscription. This page describes how the structure is built. Anything further happens in a private conversation and under the applicable exemption.',
  },
} as const;

export const SPLIT = {
  rail: 'Capital / 02 — the split',
  heading: 'The land is the reason this works for both sides.',
  prose: [
    'The co-op holds land permanently and never sells it. Members buy, pay down and take title to the structure. So member equity accrues in the structure, and appreciation accrues to the land the co-op holds — which is what backs construction borrowing as the portfolio grows.',
    'Land backstops construction borrowing and never credit losses. A member’s savings never fund another member’s credit. Two balance sheets, and they do not touch.',
  ],
  ledger: [
    {
      label: 'Members hold',
      value: 'the structure',
      description:
        'Bought down through an Equity-Lease Participation Agreement, ending in a Clear Deed.',
    },
    {
      label: 'The co-op holds',
      value: 'the land',
      description:
        'Permanently. Selling it is a reserved matter that cannot pass without the co-op.',
    },
    {
      label: 'Contributors hold',
      value: 'units',
      description: 'In Clear Properties, pro rata, on the same terms as everyone else in the pool.',
    },
  ] satisfies LedgerItem[],
} as const;

export const SCALE = {
  rail: 'Capital / 03 — contributions',
  heading: 'A contribution is not a sale, and it is not a fund raise.',
  prose:
    'Property comes in under section 721 in exchange for units issued by value. Nothing is trued up with cash, so there is no boot and no balancing mechanism. The mechanics are identical whether it is one duplex or a portfolio — what changes at scale is the diligence, not the structure.',
  link: { href: '/contribute', label: 'How a single-property contribution works' },
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
} as const;

export const PROTECTIONS = {
  rail: 'Capital / 04 — protections',
  heading: 'The protections are structural, not promises.',
  standfirst:
    'A promise is a policy, and a board reverses a policy in an afternoon. These are written where a future board cannot.',
  steps: [
    {
      title: 'No preferred return anywhere in the stack',
      body: 'Including for the sponsor. There is no waterfall in which somebody is paid before you, which is the usual place where the economics quietly move.',
    },
    {
      title: 'Reserved matters',
      body: 'Selling land, diluting members, amending the purpose, replacing the manager and related-party deals above a threshold cannot pass without the co-op. That constrains the sponsor as much as it constrains an investor.',
    },
    {
      title: 'Board composition is fixed by kind, not by headcount',
      body: 'Investors can hold a seat on the Holdings board. The co-op board is elected by members and stays member-only. Neither can quietly become the other.',
    },
    {
      title: 'The ledger is public',
      body: 'Balances, credit lines and title records run on open-source contracts held by an ownerless foundation. Diligence does not depend on our cooperation.',
    },
  ] satisfies StepItem[],
} as const;

export const DOWNSIDES_SECTION = {
  rail: 'Capital / 05 — the downsides',
  extra:
    'Concentration is a real question here in the other direction too. Early cohorts are geographically concentrated in one corridor by design, because that is what makes the merchant and housing sides compound. Geographic diversity comes later, and anyone underwriting this should price that.',
} as const;

export const NEXT = {
  rail: 'Capital / 06',
  heading: 'What happens next, and what does not.',
  prose: [
    'We do not publish terms, rates or projected returns, and you should be sceptical of a housing cooperative that does. What we will do is walk through the structure with you and your advisers, send the documents, and answer whatever your CPA and counsel ask.',
    'We are not your tax or legal advisers, and nothing here is advice about your situation.',
  ],
  cta: { href: '/join?as=land', label: 'Start a conversation' },
} as const;
