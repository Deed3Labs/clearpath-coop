/* How it works. §6.2 — copy is final and lives here, never inline in JSX.
 *
 * Second pass on the layout system. The migration kept the copy as it was and
 * only changed the containers, which left the page's real fault untouched:
 * four of its seven sections put one sentence in a narrow column beside a tall
 * table, and the sentence column ran out 162px, 389px and 404px above the
 * bottom of its row. A column that short is not a column, it is a caption.
 *
 * So the tables run full width now and the prose beside them was either cut to
 * the part that is an argument, or turned into the thing it was describing —
 * a list of what each rung asks for, a pair of statements about savings.
 *
 * §7 Legal, throughout: no tier's yield and no pool rate anywhere. The draw
 * order shows what each tier COSTS to borrow against, which is required, and
 * nothing about what any of them pays. */

import type { LedgerItem, StepItem } from '@/components/primitives';

/* ── 01 · The claim ──────────────────────────────────────────────────────
   The membership facts were a 155-character paragraph in a half-width block
   with nothing beside it. They are four separate facts and they are read as
   four, on rules, two by two. */
export const OPENING = {
  kicker: 'Members',
  heading: 'Credit that gets cheaper the longer you hold it.',
  lede: 'Every other lender writes you a loan and hopes you keep needing one. Clear is built so your third year costs less than your first, because by then you are borrowing against your own savings.',
  membership: {
    title: 'Your deposit is your share.',
    criteria: [
      'No membership fee',
      'Nothing to buy',
      'Your equity savings account is what makes you a member-owner',
      'One member, one vote, regardless of balance',
    ],
  },
} as const;

/* ── 02 · Draw order ─────────────────────────────────────────────────────
   Four EQUAL cells. The widths used to decrease along the sequence, which
   read as a hierarchy the copy did not support — and worse, the third cell
   was the narrowest while carrying the longest body, so it wrapped to five
   lines against two in its neighbour. The order is carried by the number,
   which is what a number is for. */
export const DRAW_ORDER = {
  kicker: 'Draw order',
  heading: 'One balance, drawn cheapest first.',
  sub: 'You do not choose a product. You spend, and the line takes from the cheapest thing backing you before it touches anything expensive.',
  standfirst:
    'Repayment runs the other way — the most expensive part unwinds first — so the arithmetic works in your favour without you managing it.',
  /* The meta is what each tier COSTS to borrow against, which the page is
     required to show. §7 Legal: no tier's yield and no pool rate anywhere. */
  steps: [
    {
      title: 'Your own savings',
      meta: 'free',
      body: 'Fully backed by money you already have. Borrowing against it costs nothing and cannot produce a loss.',
    },
    {
      title: 'Bonds and pool shares you hold',
      meta: 'lowest paid rate',
      body: 'Held at a discount to what they are worth today. You keep the position and it matures in full.',
    },
    {
      title: 'Your income',
      meta: 'mid',
      body: 'Sized on the income landing in your accounts. It grows as your income holds and plans clear on time.',
    },
    {
      title: 'Clear Boost™',
      meta: 'highest',
      body: 'Genuinely unsecured, opt-in, and small on purpose. The tier that replaces a payday loan.',
    },
  ] satisfies StepItem[],
  close:
    'Every rate is shown on the screen where you take it, before you take it. Cost accrues on what you still owe, so clearing early always costs less. Nothing compounds, and the balance never grows on its own.',
} as const;

/* ── 03 · Term plans ─────────────────────────────────────────────────────
   The shelf runs full width, because a three-row rate table beside a
   one-third column of prose left 162px of nothing under the prose. What each
   rung asks for was buried inside the row descriptions; it is a list now. */
export const TERM_PLANS = {
  kicker: 'Term plans',
  heading: 'A tire repair and a house sit on the same shelf.',
  sub: 'One limit across every shop you use, so five plans at five stores cannot happen.',
  ledger: [
    {
      label: 'Partner credit',
      value: '2% a cycle',
      description:
        'Financing at a Clear shop. Needs a linked bank account. Paid by QR code, never a card swipe.',
    },
    {
      label: 'Clear Cash™',
      value: '2.5% a cycle',
      description:
        'Cash to your account rather than a spending line. Unlocks after six clean cycles. This is the personal loan, without the personal loan.',
    },
    {
      label: 'Your home — outside this limit',
      value: 'set at signing',
      description:
        'The Equity-Lease Participation Agreement. Unlocks at 15,000 equity credits and is underwritten on the structure itself, so it never eats into the room you need for a repair.',
    },
  ] satisfies LedgerItem[],
  asks: {
    title: 'Each rung asks for something real.',
    criteria: ['A linked bank account', 'Six clean cycles', '15,000 saved equity credits'],
    note: 'You can see the locked ones and what they would cost from your first day.',
  },
  stacking: {
    title: 'Stacking is not discouraged. It is impossible.',
    body: 'Nobody, including you, can see the total when plans are spread across five stores. Here there is one account and one ceiling.',
  },
  close:
    'The ELPA row shows real progress even while locked — 1,500 of 15,000 credits · on track for Feb 2028 — never a bare zero, because progress toward the thing is the whole point of a locked row.',
} as const;

/* ── 04 · You pick the split ─────────────────────────────────────────────
   The chooser runs full width. It was two-thirds of the row with a
   two-sentence column next to it, and that column ran out 404px above the
   bottom — the largest hole on the site. */
export const SPLIT = {
  kicker: 'You pick the split',
  heading: 'You choose how to clear it, and you can change your mind.',
  sub: 'Spreading it further costs more, and the screen says so in dollars rather than hiding it in a rate.',
  standfirst:
    'At the counter you pick a split. Later that week, or three cycles in, you can pick a different one.',
  /* Declining balance on $940.00 at 2% a cycle, payments levelled. §6.2 is
     explicit that these must not be recomputed from a flat rate: flat carry
     would cost the same whether cleared in month one or four, which
     contradicts the one line separating this from BNPL. */
  options: [
    { key: 'full', label: 'In full', each: '$958.80', carryCycle: '$18.80', carryPlan: '$18.80', total: '$958.80', doneBy: 'October 2026' },
    { key: '2', label: 'In 2', each: '$484.10', carryCycle: '$18.80', carryPlan: '$28.20', total: '$968.20', doneBy: 'November 2026' },
    { key: '4', label: 'In 4', each: '$246.75', carryCycle: '$18.80', carryPlan: '$47.00', total: '$987.00', doneBy: 'January 2027' },
    { key: '12', label: 'In 12', each: '$88.52', carryCycle: '$18.80', carryPlan: '$122.20', total: '$1,062.20', doneBy: 'September 2027' },
  ],
  rows: [
    { label: 'Each cycle', field: 'each' },
    { label: 'Carry this cycle', field: 'carryCycle' },
    { label: 'Carry over the plan', field: 'carryPlan' },
    { label: 'Total', field: 'total' },
    { label: 'Done by', field: 'doneBy' },
  ],
  caption: '2% a cycle on what you still owe',
  close: 'Clearing early always costs less. Based on a $940.00 charge at Mike’s Tire.',
} as const;

/* ── 05 · Savings ────────────────────────────────────────────────────────
   The two paragraphs beside the set-piece figure were each one claim with an
   explanation attached, which is the shape of a statement and its note, not
   of prose. */
export const SAVINGS = {
  kicker: 'Savings',
  heading: 'Saving is the thing that changes your terms.',
  sub: 'Every dollar you save is matched one-for-one in equity credits, and raises your credit limit by a dollar.',
  /* The first paragraph was four facts in one sentence — a ledger someone had
     written out. Set as figures, each fact is what it was in the prose, no
     more; the sentence itself is gone because the figures ARE the sentence. */
  stats: [
    { figure: '1:1', caption: 'Matched in equity credits, dollar for dollar' },
    { figure: '36 mo', caption: 'The match runs for the first thirty-six months of saving' },
    { figure: '$1,500', caption: 'The most that is matched in any one month' },
    { figure: '~30 days', caption: 'Before credits vest — the number tracks money that arrived and stayed' },
  ],
  /* The page's one set-piece figure. */
  gate: {
    label: 'The gate',
    figure: '15,000',
    caption: 'credits unlocks your ELPA and your Clear Deed. Most first-cohort members are expected to reach it in twelve to eighteen months.',
  },
  sides: [
    {
      label: 'Drawing on savings',
      line: 'A pause, not a penalty.',
      note: 'New credits stop accruing while you are drawn against. The ones you have already earned are never taken back, and the app says so.',
    },
    {
      label: 'While you live there',
      line: 'You borrow, not withdraw.',
      note: 'Contributions are not withdrawable while you live in a Clear home. They come out on conversion or exit.',
    },
  ],
  tilesHeading: 'What we do not do',
  /* Kept exactly as written. "No credit-score pull to approve a first plan"
     is a credit-advertising claim — §7 Legal says do not paraphrase it into
     something stronger. */
  tiles: [
    { line: 'No late fees', note: 'ever' },
    { line: 'No compounding', note: 'the balance never grows on its own' },
    { line: 'No credit-score pull', note: 'to approve a first plan' },
    { line: 'No shopping app', note: 'competing with the shops you use' },
  ],
} as const;

/* ── 06 · The cycle ──────────────────────────────────────────────────────
   Four states, full width. The single sentence that sat beside them ran out
   389px above the bottom of the row; it is half of a pair underneath now. */
export const CYCLE = {
  kicker: 'The cycle',
  heading: 'Every thirty days, one number.',
  sub: 'A cycle closes, the balance rebalances, and you are told where you stand in one line.',
  ledger: [
    {
      label: 'You are short this cycle',
      value: 'repay',
      description: 'The only state that asks anything of you.',
    },
    {
      label: 'Your deposit covers it',
      value: 'repay early',
      description: 'Nothing is required. Clearing early still costs less.',
    },
    {
      label: 'You are carrying only your own savings',
      value: 'top off',
      description:
        'Nothing is owed. But drawing on your savings pauses your progress toward a home, which is the reason to top it back up.',
    },
    {
      label: 'Nothing carried',
      value: 'all clear',
      description: 'The one that says everything is at zero.',
    },
  ] satisfies LedgerItem[],
  /* This pair used to be one editorial note that had leaked into the copy —
     it literally said "the site should not imply it is", which is a direction
     to whoever writes the page, not something to publish. */
  pair: [
    {
      title: 'Nothing is hidden behind a statement.',
      body: 'Nothing accrues while you are not looking, and there is no document to open later to find out what changed.',
    },
    {
      title: 'Top off is not repay.',
      body: 'In the third state nothing is owed, but progress is paused. The verb is top off because you are spending your own money, not servicing a debt.',
    },
  ],
} as const;

export const COMPARISON = {
  kicker: 'The comparison',
  heading: 'The honest version of the comparison.',
  sub: 'Including the part where they beat us.',
  /* The page's closing moment, so it is set large and the break is decided
     here rather than left to the measure: two lines against two lines, both
     turning after the verb. Left to wrap, "You owe nothing." fitted on one
     line and "You own something." took two, which put a hole under the first
     and made a deliberately symmetrical pair look like an accident. */
  pair: {
    theirs: { label: 'Klarna’s best outcome for you', lines: ['You owe', 'nothing.'] },
    ours: { label: 'Ours', lines: ['You own', 'something.'] },
  },
  ours: [
    {
      label: 'Klarna’s best outcome for you',
      value: 'you owe nothing',
      description:
        'Then you are back where you started, and their app is trying to sell you something else.',
    },
    {
      label: 'Ours',
      value: 'you own something',
      description:
        'The waterfall is designed to move you from borrowing to spending your own money.',
    },
  ] satisfies LedgerItem[],
  theirs: [
    {
      label: 'Their advantage we cannot match',
      value: 'one tap',
      description:
        'Klarna is a single tap at checkout. Your first Clear transaction asks for a membership and a linked account, and takes about three minutes.',
    },
    {
      label: 'What happens after that',
      value: 'no application',
      description:
        'You sign up once, not once per shop. Every later purchase anywhere in the network is just your existing line.',
    },
  ] satisfies LedgerItem[],
} as const;
