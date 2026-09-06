import Link from 'next/link';
import { ROUTES } from '@/content/nav';

/* Placeholder shell. The real header — logo, mobile sheet, nav — is Phase 2. */
export function Header() {
  return (
    <header className="container" style={{ paddingBlock: 'var(--spacing-3)' }}>
      <div className="grid12" style={{ rowGap: 0, alignItems: 'center' }}>
        <Link href="/" className="rail d4">Clear</Link>
        <nav className="content t-sm" aria-label="Main">
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)' }}>
            {ROUTES.map((r) => (
              <li key={r.href}><Link href={r.href}>{r.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
