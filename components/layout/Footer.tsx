import Link from 'next/link';
import { Logo } from '@/components/marks/Logo';
import { BRAND_LINE, FOOTER_COLUMNS, LEGAL } from '@/content/footer';

/* §7 — Footer, every page. Four columns, then the legal block, which §8
   requires on every route without exception. */

export function Footer() {
  return (
    <footer className="wrap site-footer">
      <div className="grid12">
        <div className="footer-brand">
          <Link href="/" aria-label="Clear — home">
            <Logo size={21} />
          </Link>
          <p className="t-sm" style={{ marginTop: 'var(--spacing-2)', maxWidth: '28ch' }}>
            {BRAND_LINE}
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <nav key={col.heading} className="footer-col" aria-label={col.heading}>
            <p className="t-note">{col.heading}</p>
            <ul className="t-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a href={l.href} className="tlink" rel="noreferrer noopener">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="tlink">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-legal">
        {LEGAL.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </footer>
  );
}
