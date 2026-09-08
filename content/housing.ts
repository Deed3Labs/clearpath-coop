/* Housing. §6.4 — copy is final and lives here, never inline in JSX.
 *
 * Member-facing page, so the ownership voice rule applies (§6): the land is
 * held in common by members. Never "ours" against "yours", and never "the
 * co-op keeps the land" — that casts the co-op as a landlord, which is the one
 * thing it is not. The structural register is correct on /coop and /capital
 * and is used there instead.
 *
 * Rewritten for the layout system. This was the most prose-heavy page on the
 * site: five sections, every one of them a heading and two paragraphs, and the
 * three figures that are the entire argument sat in a row halfway down where
 * nothing marked them as the point. Each section now declares its archetype
 * and the copy is cut to what that archetype holds. Prose survives where a
 * sentence does something a figure cannot.
 *
 * §7 Legal, throughout: every housing figure carries an illustration label
 * ADJACENT to it, never in the footer. */

import type { LedgerItem } from '@/components/primitives';

/* ── 01 · Opening ─────────────────────────────────────────────────────────
   A pair of statements. The page's whole thesis is that two things are being
   separated, and a paragraph explaining that separation is weaker than seeing
   the two of them set side by side. */
export const OPENING = {
  kicker: 'ClearPath',
  heading: 'Take the land out of the price and the price changes.',
  lede: 'The land under a Clear community is held in common by its members and is never sold. What you buy is the house.',
  sides: [
    {
      label: 'The land',
      line: 'Held in common. Never sold.',
      note: 'Appreciation stays in the commons and every member holds a share of it, so members and investors are never reaching for the same dollar.',
    },
    {
      label: 'The house',
      line: 'Yours, at cost plus 15%.',
      note: 'Unlike land, a house has a cost you can point at. It is also why the price sits below market with no subsidy, no covenant and no income test.',
      live: true,
    },
  ],
  note: 'ClearPath is the housing program of the Clear cooperative.',
} as const;

/* ── 02 · The numbers ─────────────────────────────────────────────────────
   The page's big moment, on ink. Three figures at set-piece size. The
   affordable-housing disclaimer is the lede rather than a panel, because it
   is a thing a reader needs before the figures, not after them. */
export const NUMBERS = {
  kicker: 'The numbers',
  heading: 'Cost plus fifteen per cent, and we show the cost.',
  lede: 'This is not affordable housing, and we do not want it confused with it. No income restrictions and no qualifying bands — mixing incomes inside one neighbourhood is the point, not a compromise.',
  columns: [
    {
      key: 'build',
      label: 'To build the structure',
      figure: '$289,099',
      note: 'First cohort, Inland Empire.',
    },
    {
      key: 'member',
      label: 'What a member pays',
      figure: '$332,464',
      note: 'The build cost plus fifteen per cent, and nothing else.',
      live: true,
    },
    {
      key: 'market',
      label: 'A comparable home',
      figure: '~$450,000',
      note: 'On the open market, same corridor.',
      muted: true,
    },
  ],
  /* §7 Legal: adjacent to the figures. */
  disclaimer:
    'First-cohort figures for the Inland Empire, shown as illustrations of how the model works rather than quotes, offers or predictions.',
} as const;

/* ── 03 · Every month ─────────────────────────────────────────────────────
   A rate card, set as one. The old version was a 260-word paragraph doing
   arithmetic in prose, which is the one thing prose is worst at. */
export const MONTHLY = {
  kicker: 'Every month',
  heading: 'Two lines on the bill, and the app keeps them apart.',
  lede: 'One of them ends up being yours and one of them does not, so they are never shown to you as a single number.',
  ledger: [
    {
      label: 'Equity contribution',
      value: 'from $500',
      live: true,
      description: 'Straight to your balance. This is the part you keep.',
    },
    {
      label: 'Community fee',
      value: '~$850',
      description: 'Property taxes, insurance and shared costs. It moves when those move.',
    },
    {
      label: 'All in, including utilities',
      value: '$3,000–3,500',
      description: 'What a household actually pays in a month.',
    },
    {
      label: 'A comparable single-family rental',
      value: '$4,500–5,500',
      muted: true,
      description: 'None of which comes back.',
    },
  ] satisfies LedgerItem[],
  /* §7 Legal: adjacent to the figures. */
  disclaimer: 'First-cohort illustrations for the Inland Empire. Not quotes, offers or predictions.',
} as const;

/* ── 04 · The homes ───────────────────────────────────────────────────────
   A bento of three EQUAL cells. The spec ledger it replaces was accurate and
   unreadable — eleven rows of label and value where three of them were the
   design and the rest were consequences of it. Each cell carries the
   consequence as its gate.

   Equal, because unequal widths encode a hierarchy and there is not one here:
   the front, the back and the workshop are three parts of one house, and
   making the first widest would claim the porch matters most.

   All three gates are figures. A row where two cells end on a number and the
   third ends on a phrase reads as a mistake, and "Co-op owned" set in mono at
   figure size looked like one. The kits and the power moved to the standfirst,
   which is where a fact with no number belongs.

   NOT "all detached": duplexes and fourplexes are planned for later
   communities, so that claim is false beyond the first cohort. The unit mix
   figure is what is actually true at every stage. */
export type HomeCell = {
  n: string;
  title: string;
  body: string;
  gate: string;
  gateNote: string;
};

export const HOMES = {
  kicker: 'The homes',
  heading: 'A porch at both ends.',
  lede: 'Permitted, code-compliant California dwellings built from panelised kits and finished by local trades. The community owns the solar and storage, and residents buy their power from it.',
  cells: [
    {
      n: '01',
      title: 'The front is arrival and neighbours.',
      body: 'A covered porch on every home, set at the street. It is the half of the house your neighbours meet.',
      gate: '1–3 bed',
      gateNote: 'the unit mix inside every community',
    },
    {
      n: '02',
      title: 'The back is where you actually live.',
      body: 'A rear porch onto a patio and yard, proportioned so the smallest home has the ratio of the largest.',
      gate: '900–950',
      gateNote: 'square feet at the smallest, two bed and two bath',
    },
    {
      n: '03',
      title: 'The garage is a workshop, set back.',
      body: 'Behind and to the side, off a perimeter drive that wraps the yard into an L.',
      gate: '1.5 car',
      gateNote: 'on every home, off the perimeter drive',
    },
  ] satisfies HomeCell[],
} as const;

/* ── 05 · Backyards ───────────────────────────────────────────────────────
   Three parties to one arrangement, so three columns. It was three paragraphs
   that each happened to be about a different person, which is a structure the
   reader had to find for themselves.

   The big line is NOT set in mono here. Only one of the three is a number,
   and "Passive" and "One person" set as figures in Plex Mono read as a
   mistake rather than as emphasis — the same fault as "Co-op owned" in the
   bento. There is no honest figure for a homeowner's role or for a household
   of one, so they are statements, set in the display face like statements.

   The ask moved out of the first column. A link anchored to the bottom of one
   column left the other two 89px and 113px short of the row's baseline, which
   is most of what read as wonky; and "own a backyard?" is a section-level
   invitation anyway, not a footnote to one third of a row. */
export const BACKYARDS = {
  kicker: 'Before the communities',
  heading: 'Backyards first, because they are available now.',
  lede: 'A master-planned community is an eighteen-to-thirty-six month problem. A backyard is not. The co-op leases them from homeowners and places relocatable studios and one-bedrooms on them.',
  columns: [
    {
      key: 'owner',
      heading: 'You own the backyard',
      line: 'Income, and a veto.',
      note: 'a ground lease on the back of your lot',
      body: 'You stay passive. Clear handles permitting and the leasing, and every decision on the unit comes to you to approve or decline.',
    },
    {
      key: 'unit',
      heading: 'The unit itself',
      line: '450–650',
      note: 'square feet, one open volume with high ceilings',
      body: 'Built to come apart and move, so when a lease ends the structure goes somewhere else and the next placement costs less.',
    },
    {
      key: 'renter',
      heading: 'Whoever lives in it',
      line: 'One person.',
      note: 'the household almost nothing gets built for',
      body: 'Renting alone is close to impossible without roommates, and almost nothing gets built for the person trying to do it anyway.',
    },
  ],
  ask: {
    line: 'Own a lot with real separation between the house and the back fence? We would like to talk about a ground lease.',
    link: { href: '/contribute', label: 'How contributions work' },
  },
} as const;

/* ── 06 · The gate ────────────────────────────────────────────────────────
   The section said "five milestones, each unlocking something real" and then
   showed none of them — one 154-character paragraph next to a large number,
   which is the blandest thing on the page and the last thing a reader sees.

   A path is a sequence, so it gets the track: three marks on one rule, the
   moment in mono, the sentence short, the detail as a note. The paragraph is
   gone; every line of it now sits under the mark it belongs to.

   The three marks are the arc, not the five gates. Naming five specific gates
   would mean inventing four of them — only the last one is documented — and a
   made-up milestone on a page about deeds is not a thing to guess at. */
export const GATE = {
  kicker: 'The gate',
  statement: 'The path to a deed is visible from your first deposit.',
  figure: '15,000',
  figureCaption: 'equity credits, and you sign for the deed to your home',
  track: [
    {
      when: 'First deposit',
      what: 'Your deposit is your membership share.',
      note: 'Saving from there earns matched credits and raises a credit line you draw on at no cost.',
    },
    {
      when: 'Along the way',
      what: 'Five gates, each unlocking something real.',
      note: 'You can see where you are and the date you are on track for, from the same screen where you save.',
      live: true,
    },
    {
      when: 'At the gate',
      what: 'You sign, and the deed is yours.',
      note: 'Your Equity-Lease Participation Agreement and your Clear Deed. The land stays in the commons, and the house is yours to hold title to outright.',
    },
  ],
  cta: { href: '/join', label: 'Start saving' },
} as const;
