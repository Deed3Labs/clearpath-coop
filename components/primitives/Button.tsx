import Link from 'next/link';

/* §4 — radius 999px on interactive controls, and only on interactive
   controls. Hover and focus at 200ms; no other motion. Height is 44px so the
   tap target passes §8.4 without a hit-area hack.
   Styling lives entirely in globals.css under .btn: an inline `border`
   shorthand here silently outranked the variant's border-colour rule and
   made the ghost button borderless. */

type Variant = 'primary' | 'ghost';

export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} data-variant={variant} className={['btn', className].filter(Boolean).join(' ')}>
      {children}
    </Link>
  );
}
