/* For shops. §6.3 — copy is final and lives here, never inline in JSX. */

import type { LedgerItem, StepItem } from '@/components/primitives';

export const OPENING = {
  rail: 'Shops / 01',
  heading: 'How many jobs a week do you write up and lose?',
  sub: 'Every service writer knows the number.',
  lede:
    'Clear finances those customers at 2.5% of the ticket, pays you on net-30, and carries the default itself.',
  cta: { href: '/join?as=shop', label: 'Talk to us about your shop' },
  ledger: [
    /* Cobalt once per viewport, on the figure that matters most: the rate. */
    { label: 'Your rate', value: '2.5%', live: true },
    { label: 'You are paid', value: 'net-30' },
    { label: 'Who bears a default', value: 'we do' },
    { label: 'Exclusivity', value: 'none' },
  ] satisfies LedgerItem[],
} as const;

export const DIFFERENCE = {
  rail: 'Shops / 02 — the difference',
  heading: 'Six per cent is not greed. It is the price of getting paid tomorrow.',
  sub: 'They settle with you immediately and have to fund every dollar of it. We wait thirty days. That timing difference is the entire discount.',
  standfirst:
    'Klarna sits near 5.99% plus 30 cents and Affirm near 6%. By the time our payout goes out, much of what your customer owes is already collected.',
  /* Feeds components/visuals/TimingDiagram.tsx. The argument this page rests
     on is a difference in WHEN money moves, which is a timing diagram and not
     a paragraph. Positions are per cent of a thirty-day track. */
  timing: {
    figure: '30 days',
    caption: 'of waiting is the entire discount',
    axis: ['day 0', 'day 30'],
    lanes: [
      {
        key: 'theirs',
        who: 'A six per cent provider',
        pays: 0,
        paysLabel: 'pays you on day 0',
        /* One unbroken block: their own capital, out the whole time. */
        fill: 'solid',
        fillLabel: 'their money is out for the whole thirty days',
      },
      {
        key: 'ours',
        who: 'Clear',
        pays: 100,
        paysLabel: 'pays you on day 30',
        /* Four blocks with air between them: money arriving, not money out. */
        fill: 'arriving',
        fillLabel: 'the customer has been repaying the whole time',
      },
    ],
    note: 'Which is also why we cannot pay you sooner, and why we do not pretend we can.',
  },
  /* §6.3 S2 — the calculator's four stats and their arithmetic. */
  range: { min: 2000, max: 60000, step: 500, initial: 12000 },
  stats: [
    { key: 'volume', caption: 'Financed through Clear each month' },
    { key: 'theirs', caption: 'What a six per cent provider takes' },
    { key: 'ours', caption: 'What Clear takes' },
    {
      key: 'kept',
      caption:
        'Kept over a year, for waiting three extra weeks on money you were not going to see at all if the customer walked.',
    },
  ],
} as const;

export const COUNTER = {
  rail: 'Shops / 03 — at the counter',
  heading: 'Two taps for your writer. Three minutes for the customer.',
  sub: 'The split is never chosen on your device, which is what matters if there is ever a dispute.',
  steps: [
    {
      title: 'Enter the amount',
      body: 'The number your own system already produced. No items, no tips, no splitting the ticket — this is not a point of sale.',
    },
    {
      title: 'Turn the screen',
      body: 'The tablet shows a code. A new customer scans it and the app installs from the browser; an existing member just gets a notification. Same gesture either way, so nobody has to remember which kind of customer they are dealing with.',
    },
    {
      title: 'The customer approves the amount on their own phone',
      body: 'They pick how to clear it and approve. The split is never chosen on your device, which is what matters if there is ever a dispute.',
    },
    {
      title: 'You see it confirmed',
      body: 'If their phone is dead or they are under the car, the charge sits waiting and you can see whether the text was delivered before they drive off. No card terminal can do that.',
    },
  ] satisfies StepItem[],
  panels: [
    {
      title: 'Signup happens once per member, not once per shop.',
      body: 'The first customer through your door signs up from scratch. By your twentieth, most people walking in already hold an active line — there is nothing for your writer to do but enter a number.',
    },
    {
      title: 'Your existing financing signage is a reason to talk, not a reason not to.',
      body: 'Synchrony takes your prime customers. Snap and Acima take the declines and can cost that customer close to double the ticket by the end. We take the same declined customer without doing that to them. No exclusivity, so you never have to choose.',
    },
  ],
} as const;

export const FIT = {
  rail: 'Shops / 04 — fit',
  heading: 'Whether this is for you.',
  sub: 'The second column is the one worth reading. We would rather lose you now than in month two.',
  works: {
    heading: 'This works for you if',
    lead: 'Tickets are $300 and up · You lose jobs because people cannot pay that day · You can wait thirty days for the money.',
    body: 'Auto repair, tires, dental, veterinary, HVAC, appliances, furniture, equipment. Trades where financing is already part of how the sale closes.',
  },
  doesnt: {
    heading: 'It does not work for you if',
    lead: 'Your average ticket is twelve dollars, or you need the cash the same week.',
    body: 'A shop that signs up and then waits on a payout it cannot afford to wait for is a reference lost permanently. If that is you, we will say so on the first call.',
  },
} as const;

export const FOUNDING = {
  rail: 'Shops / 05 — founding partners',
  heading: 'The first five shops are working out the kinks with us.',
  sub: 'That is worth paying for, so we do. Capped at five, and when they are gone they are gone.',
  figure: { value: '5', caption: 'founding partners, then the rate goes to standard' },
  ledger: [
    { label: 'Rate', value: '2% for life', live: true, description: 'Standard is 2.5%.' },
    { label: 'First twenty charges', value: 'no fee', description: 'The beta period, on us.' },
    {
      label: 'Named as a founding partner',
      value: 'in the app',
      description: 'In the partner directory every member sees.',
    },
    { label: 'Support', value: 'the founder’s number', description: 'Not a queue.' },
  ] satisfies LedgerItem[],
  panel: {
    title: 'Getting set up takes about twenty minutes.',
    body: 'Six steps at your back-office computer, and nobody from Clear ever sees your banking credentials. The last step is a one-dollar test charge you refund straight away, so your writers have run the whole loop once before a customer is standing there.',
  },
  note: 'The merchant app runs at merchants.useclear.org. It installs from a browser on a tablet, a phone or the shop PC. There is no hardware to buy.',
  terms:
    'Your terms are six lines, not a document: rate · fee on the first twenty charges · payout timing · who bears a default · approval cap · leaving any time. An owner who reads six lines has actually read their agreement.',
} as const;

export const MONEY = {
  rail: 'Shops / 06 — the money',
  payouts: {
    heading: 'You should be able to get from a bank deposit back to the tickets.',
    sub: 'Every payout traces to the charges inside it.',
    body: 'A merchant who cannot reconcile against their own books will not trust the number, and will ask for a spreadsheet every month for the rest of the relationship.',
    /* Net-30 only. §7 Legal: net-14 is not published anywhere. */
    note: 'Withdrawals are capped by what the pool holds, and the app says so rather than failing silently. Net-30 only.',
  },
  refunds: {
    heading: 'Your writer can start a refund. Only you can move your money.',
    sub: 'The manager-override pattern every till already uses, so it needs no training.',
    body: 'Nothing is said to the customer until an owner has authorised it. A refund a writer promised and an owner declined is the worst possible counter conversation.',
    /* Feeds components/visuals/RefundLanes.tsx. Who acts, in order, and — the
       part the prose kept having to spell out — who is not yet involved. Three
       lanes make "the customer hears nothing until step three" a thing you can
       see rather than a sentence you have to trust. */
    lanes: {
      actors: ['Your writer', 'You', 'The customer'],
      steps: [
        { actor: 0, label: 'Starts the refund', detail: 'With the customer standing there.' },
        { actor: 1, label: 'Enters the owner code', detail: 'Sees what it does to the payout.' },
        { actor: 2, label: 'Is told', detail: 'And not before.' },
      ],
      note: 'Three steps, and the customer is only in the last one.',
    },
    ledger: [
      {
        label: 'The two people see different numbers',
        value: 'by design',
        description:
          'The writer sees what the customer gets back. The owner sees what it does to his payout — which is the figure the person authorising actually cares about.',
      },
      {
        label: 'Carry is not refunded',
        value: 'the time stands',
        description: 'A refund unwinds the purchase, not the time the customer held the plan.',
      },
    ] satisfies LedgerItem[],
  },
} as const;

export const MEMBERSHIP = {
  rail: 'Shops / 07',
  heading: 'Signing also makes you a partner member of the co-op.',
  sub: 'You are not a vendor account.',
  body: 'The merchant agreement admits your business as a partner member, which is why you appear in the directory members browse, and why both sides of every transaction are members of the same cooperative. You can leave any time.',
  cta: { href: '/join?as=shop', label: 'Start a conversation' },
} as const;
