'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* The header had no way of saying which page you were on. `aria-current` is
   the correct hook for that — assistive technology reads it, and the style
   keys off the same attribute so the two can never disagree. */
export function NavLink({
  href,
  children,
  className = 'navlink',
}: {
  href: string;
  children: React.ReactNode;
  /* The sheet wants the same "which page am I on" logic at display size, so
     the class is a prop. Sharing the component rather than the rule is what
     keeps the header and the sheet from disagreeing about what counts as the
     current page — "/" matching only itself, in particular. */
  className?: string;
}) {
  const path = usePathname();
  const current = path === href || (href !== '/' && path.startsWith(href + '/'));
  return (
    <Link href={href} className={className} aria-current={current ? 'page' : undefined}>
      {children}
    </Link>
  );
}
