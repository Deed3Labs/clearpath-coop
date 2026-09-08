import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    /* Every route the old static site published keeps working. §8 — Redirects.
     * /capital.html carried the only external inbound links; a fragment on it
     * (/capital.html#who) lands on /capital rather than 404ing, because a
     * redirect drops the hash and the browser reapplies it to a page that no
     * longer has that anchor. Landing at the top of the right page is the
     * correct failure.
     *
     * statusCode 301 rather than permanent:true — that helper emits a 308, and
     * §8 asks for a 301. Modern crawlers treat them the same; older ones do
     * not, and these paths exist for old inbound links. */
    return [
      { source: '/capital.html',      destination: '/capital', statusCode: 301 },
      { source: '/clearcapital',      destination: '/capital', statusCode: 301 },
      { source: '/clearcapital.html', destination: '/capital', statusCode: 301 },
      { source: '/index.html',        destination: '/',        statusCode: 301 },
    ];
  },
};

export default config;
