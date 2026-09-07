import type { Metadata } from 'next';
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
  DM_Serif_Display,
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

/* The counterpoint face. The headline is cut between the condensed display
   grotesque and this italic serif — the caps state the fact and the italic
   delivers the turn. One family doing everything was the wrong call: it threw
   away the pairing that makes the sentence land. */
const serif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
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
    <html lang="en" className={`${display.variable} ${text.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <DebugGrid />
      </body>
    </html>
  );
}
