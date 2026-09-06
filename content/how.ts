/* How it works. §6.2 — copy is final and lives here, never inline in JSX. */

import type { LedgerItem, StepItem } from '@/components/primitives';

export const OPENING = {
  rail: 'Members / 01',
  heading: 'Credit that gets cheaper the longer you hold it.',
  lede:
    'Every other lender writes you a loan and hopes you keep needing one. Clear is built so your third year costs less than your first, because by then you are borrowing against your own savings.',
  panel: {
    title: 'Your deposit is your share.',
    body: 'No membership fee and nothing to buy. Money in your equity savings account is what makes you a member-owner. One member, one vote, regardless of balance.',
  },
} as const;

export const DRAW_ORDER = {
  rail: 'Members / 02 — draw order',
  heading: 'One balance, drawn cheapest first.',
  standfirst:
    'You do not choose a product. You spend, and the line takes from the cheapest thing backing you before it touches anything expensive. Repayment runs the other way — the most expensive part unwinds first — so the arithmetic works in your favour without you managing it.',
  /* The chips are what each tier COSTS to borrow against, which the page is
     required to show. §7 Legal: no tier's yield and no pool rate anywhere. */
  steps: [
    {
      title: 'Your own savings',
      meta: 'free',
      body: 'Fully backed by money you already have. Borrowing against it costs nothing and can never produce a loss for the co-op.',
    },
    {
      title: 'Bonds and pool shares you hold',
      meta: 'lowest paid rate',
      body: 'Held at a discount to what they are worth today. You keep the position and still receive it in full at maturity.',
    },
    {
      title: 'Your income',
      meta: 'mid',
      body: 'Sized on the income landing in your accounts and what already goes out of them. It grows as your income holds steady and plans clear on time.',
    },
    {
      title: 'Clear Boost™',
      meta: 'highest',
      body: 'Genuinely unsecured, opt-in, and small on purpose. This is the tier that replaces a payday loan or a cash advance.',
    },
  ] satisfies StepItem[],
  close:
    'Every rate is shown on the screen where you take it, before you take it. Cost accrues on what you still owe, so clearing early always costs less. Nothing compounds, and the balance never grows on its own.',
} as const;

export const TERM_PLANS = {
  rail: 'Members / 03 — term plans',
  heading: 'A tire repair and a house sit on the same shelf.',
  prose: [
    'Anything with a set amount and a schedule lands in one place, with one limit across every shop you use. Five plans at five stores is exactly the harm that makes buy-now-pay-later dangerous — nobody, including you, can see the total. Here there is one account and one ceiling, so stacking is not discouraged, it is impossible.',
    'Each rung asks for something real: a linked account, then demonstrated behaviour, then saved credits. You can see the locked ones and what they would cost from your first day.',
  ],
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
  close:
    'The ELPA row is the persuasive one. Even locked it shows real progress — 1,500 of 15,000 credits · on track for Feb 2028 — never a bare zero, because progress toward the thing is the whole point of a locked row.',
} as const;

export const SPLIT = {
  rail: 'Members / 04 — you pick the split',
  heading: 'You choose how to clear it, and you can change your mind.',
  standfirst:
    'At the counter you pick a split. Later that week, or three cycles in, you can pick a different one. Spreading it further costs more, and the screen says so in dollars rather than hiding it in a rate.',
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

export const SAVINGS = {
  rail: 'Members / 05 — savings',
  heading: 'Saving is the thing that changes your terms.',
  prose: [
    'Every dollar you save is matched one-for-one in equity credits and raises your credit limit by a dollar. The match runs for the first 36 months of saving and applies to the first $1,500 you put in each month. Credits vest after your cash has sat for about thirty days, so the number tracks money that actually arrived and stayed.',
    'Drawing against your savings pauses new credits from accruing. It never takes back the ones you already earned. That is a pause, not a penalty, and the app says so.',
    'Your contributions are not withdrawable while you live in a Clear home — you borrow against them instead. They come out on conversion or exit.',
  ],
  panels: [
    {
      title: '15,000 credits',
      body: 'The threshold that unlocks the Equity-Lease Participation Agreement and your Clear Deed. Most first-cohort members are expected to reach it in twelve to eighteen months.',
    },
    {
      title: 'What we do not do',
      /* Kept exactly as written. "No credit-score pull to approve a first
         plan" is a credit-advertising claim — §7 Legal says do not paraphrase
         it into something stronger. */
      list: [
        'No late fees, ever',
        'No compounding, the balance never grows on its own',
        'No credit-score pull to approve a first plan',
        'No shopping app competing with the shops you use',
      ],
    },
  ] as { title: string; body?: string; list?: string[] }[],
} as const;

export const CYCLE = {
  rail: 'Members / 06 — the cycle',
  heading: 'Every thirty days, one number.',
  prose:
    'A cycle closes, the balance rebalances, and you are told where you stand in one line. Nothing is hidden behind a statement and nothing accrues while you are not looking.',
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
  close:
    'The third state is not the same as being clear, and the site should not imply it is. Nothing is owed, but progress is paused. The verb is top off, because you are spending your own money, not servicing a debt.',
} as const;

export const COMPARISON = {
  rail: 'Members / 07',
  heading: 'The honest version of the comparison.',
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
