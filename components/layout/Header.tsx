import Link from 'next/link';
import { NAV, JOIN } from '@/content/nav';

/* Placeholder shell. The real header — logo, mobile sheet, nav — is Phase 2. */
export function Header() {
  return (
    <header className="wrap" style={{ paddingBlock: 'var(--spacing-3)' }}>
      <div className="grid12" style={{ rowGap: 0, alignItems: 'center' }}>
        <Link href="/" className="rail d4">Clear</Link>
        <nav className="content t-sm" aria-label="Main">
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)' }}>
            {NAV.map((r) => (
              <li key={r.href}><Link href={r.href}>{r.label}</Link></li>
            ))}
            <li><Link href={JOIN.href}>{JOIN.label}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
