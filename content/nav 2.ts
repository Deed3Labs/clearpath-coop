/* The eight routes. §1
 *
 * NAV is deliberately five links, per §7.6: /capital is reached from
 * /contribute, from /coop and from the footer, not from the nav bar — its
 * audience arrives by introduction, and a sixth item crowds the header at
 * 1080px. /join is a button rather than a nav link, which is what keeps the
 * count at five without hiding it. Easy to promote later if that is wrong. */

export type Route = { href: string; label: string };

export const NAV: readonly Route[] = [
  { href: '/how',        label: 'How it works'   },
  { href: '/shops',      label: 'For shops'      },
  { href: '/housing',    label: 'Housing'        },
  { href: '/contribute', label: 'Contribute land'},
  { href: '/coop',       label: 'The co-op'      },
] as const;

/* Reached contextually, not from the nav. */
export const CONTEXTUAL: readonly Route[] = [
  { href: '/capital', label: 'Clear Capital' },
] as const;

export const JOIN: Route = { href: '/join', label: 'Join' };

/* Everything with a URL — sitemap, QA sweeps, the ?debug=grid pass. */
export const ROUTES: readonly Route[] = [...NAV, ...CONTEXTUAL, JOIN];
