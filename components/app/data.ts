/* Canonical figures — §5. One consistent world.
 *
 * Every mockup reads from here rather than carrying its own literals, so the
 * §8 mockup audit ("plan rows sum to the header total; the header total does
 * not exceed the limit") can be checked once instead of screen by screen.
 *
 * Where the references disagree with §5 the brief wins: the references show a
 * day-one member on a $1,500.00 / $312.00 limit, and §5 fixes the limits at
 * $3,000.00 and $850.00/cycle. One world beats two. */

export const CHARGE = {
  merchant: "Mike's Tire",
  amount: '$940.00',
  split: 'split in 4',
  perCycle: '$246.75',
  carryCycle: '$18.80',
  carryPlan: '$47.00',
  total: '$987.00',
  /* Never set on the same line as a dollar total — "$47.00 · 2% / cycle"
     reads as forty-seven dollars a cycle. (§5) */
  rate: '2% a cycle on what you still owe',
  rateShort: '2% / cycle',
  doneBy: 'January 2027',
} as const;

export const LIMITS = {
  termPlan: '$3,000.00',
  cycle: '$850.00/cycle',
  clearsFrom: 'Chase ····4471',
} as const;

export const ELPA = {
  label: 'ELPA — buy a home',
  progress: '1,500 of 15,000 credits · on track for Feb 2028',
  groupLabel: 'Your home — outside this limit',
} as const;

/* §5 — the references still point at clear.coop/c/8QK2. The merchant file was
   already corrected to useclear.org; the member file was not. Fixed here, and
   the QR itself encodes this exact string. */
export const CHARGE_URL = 'https://useclear.org/c/8QK2';

/* §7.3 — the payouts panel. "available today: $2,400 of $3,030."
   Net-30 only; net-14 is not published anywhere. (§5, §8) */
export const PAYOUTS = {
  availableToday: '$2,400.00',
  ofTotal: '$3,030.00',
  releasesLater: '$630.00',
  releaseDate: 'Dec 14',
  fee: '$23.50',
  feeRate: '2.5%',
  youReceive: '$916.50',
} as const;

/* The four cycle-card states (§7.2 S6). Green appears in exactly one. */
export type CycleState = 'short' | 'covered' | 'own-savings' | 'clear';
