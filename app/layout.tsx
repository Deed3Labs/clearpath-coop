import type { Metadata } from 'next';
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DebugGrid } from '@/components/dev/DebugGrid';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz', 'wdth'],
  display: 'swap',
  variable: '--font-bricolage',
});

const text = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
});

/* IBM Plex Mono ships no 450; 400/500 is the nearest pair. */
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

/* Visual language v2. One family doing everything, figures included — the
   old display/text/mono trio is most of what made every page read as a
   technical document. Loaded here rather than per-page so each page can pick
   up the new language as it is rebuilt. */
const v2 = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-v2',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://useclear.org'),
  title: {
    default: 'Clear — a member-owned cooperative',
    template: '%s · Clear',
  },
  description:
    'Clear is a member-owned cooperative. Point-of-sale financing at local shops, savings-backed credit, and housing where the land is held in common by members.',
  /* opengraph-image.tsx and the icon files under app/ are picked up by
     convention; only the parts Next cannot infer are declared here. */
  openGraph: {
    type: 'website',
    siteName: 'Clear',
    locale: 'en_US',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable} ${mono.variable} ${v2.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <DebugGrid />
      </body>
    </html>
  );
}
