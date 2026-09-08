'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* The header had no way of saying which page you were on. `aria-current` is
   the correct hook for that — assistive technology reads it, and the style
   keys off the same attribute so the two can never disagree. */
export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const path = usePathname();
  const current = path === href || (href !== '/' && path.startsWith(href + '/'));
  return (
    <Link href={href} className="navlink" aria-current={current ? 'page' : undefined}>
      {children}
    </Link>
  );
}
