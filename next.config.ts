import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Clear Capital keeps its live URL. The legacy single-file page is served
    // verbatim from public/ until §9.2 is decided.
    return [{ source: '/capital', destination: '/capital.html' }];
  },
  async redirects() {
    return [
      { source: '/clearcapital', destination: '/capital', permanent: true },
      { source: '/clearcapital.html', destination: '/capital', permanent: true },
    ];
  },
};

export default config;
