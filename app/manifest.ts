import type { MetadataRoute } from 'next';

/* The 192 and 512 icons exist for Android home-screen installs, which is the
   only thing that reads them. Everything else uses icon.svg. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Clear',
    short_name: 'Clear',
    description: 'A member-owned cooperative.',
    start_url: '/',
    display: 'browser',
    background_color: '#DFE3DE',
    theme_color: '#DFE3DE',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
