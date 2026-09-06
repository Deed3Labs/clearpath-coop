import { notFound } from 'next/navigation';
import { LogoMark, Logo } from '@/components/marks/Logo';

/* Dev only (§3). Absent from the sitemap, disallowed in robots.txt, never
   linked, and 404 in production — Next has no way to drop a route from the
   build itself, so the guard is the exclusion. Set KITCHEN_SINK=1 to expose
   it on a preview deploy, which is how Phase 2.5 gets reviewed without
   shipping it to useclear.org.
   Phase 2.5 fills this out with the app component library; for now it carries
   the mark so the two variants can be checked at real sizes. */

const VISIBLE = process.env.NODE_ENV !== 'production' || process.env.KITCHEN_SINK === '1';

export const metadata = { title: 'Kitchen sink', robots: { index: false, follow: false } };

const SIZES = [16, 21, 28, 40, 64, 120, 220];

export default function KitchenSink() {
  if (!VISIBLE) notFound();

  return (
    <div className="wrap section">
      <div className="grid12">
        <p className="rail rail-note">dev / kitchen sink</p>
        <div className="content">
          <h1 className="d2">Kitchen sink</h1>

          <h2 className="d4" style={{ marginTop: 'var(--spacing-5)' }}>
            Mark — auto variant
          </h2>
          <p className="t-note" style={{ marginTop: 'var(--spacing-1)' }}>
            solid below 40px, outline at and above it
          </p>
          <div style={row}>
            {SIZES.map((s) => (
              <figure key={s} style={cell}>
                <LogoMark size={s} />
                <figcaption className="t-note">{s}px</figcaption>
              </figure>
            ))}
          </div>

          <h2 className="d4" style={{ marginTop: 'var(--spacing-5)' }}>
            Forced outline — where it stops working
          </h2>
          <div style={row}>
            {SIZES.map((s) => (
              <figure key={s} style={cell}>
                <LogoMark size={s} variant="outline" />
                <figcaption className="t-note">{s}px</figcaption>
              </figure>
            ))}
          </div>

          <h2 className="d4" style={{ marginTop: 'var(--spacing-5)' }}>
            Forced solid
          </h2>
          <div style={row}>
            {SIZES.map((s) => (
              <figure key={s} style={cell}>
                <LogoMark size={s} variant="solid" />
                <figcaption className="t-note">{s}px</figcaption>
              </figure>
            ))}
          </div>

          <h2 className="d4" style={{ marginTop: 'var(--spacing-5)' }}>
            Lockup
          </h2>
          <div style={row}>
            {[21, 28, 40, 64].map((s) => (
              <figure key={s} style={cell}>
                <Logo size={s} />
                <figcaption className="t-note">{s}px</figcaption>
              </figure>
            ))}
          </div>

          <h2 className="d4" style={{ marginTop: 'var(--spacing-5)' }}>
            On ink, and in land
          </h2>
          <div style={row}>
            <figure
              style={{
                ...cell,
                background: 'var(--color-ink)',
                color: 'var(--color-paper)',
                padding: 'var(--spacing-3)',
              }}
            >
              <Logo size={40} />
            </figure>
            <figure style={{ ...cell, color: 'var(--color-land)' }}>
              <LogoMark size={64} />
            </figure>
            <figure style={{ ...cell, color: 'var(--color-live)' }}>
              <LogoMark size={64} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

const row: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-end',
  gap: 'var(--spacing-4)',
  flexWrap: 'wrap',
  marginTop: 'var(--spacing-3)',
};

const cell: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--spacing-1)',
  margin: 0,
};
