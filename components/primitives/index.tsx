import Link from 'next/link';

/* §4 — three blocks, and no more: Panel, Ledger, Steps. Plus Stat and Chip.
   Anything that wants to be a fourth kind of container is a Ledger. */

/* ── Section ──────────────────────────────────────────────────────────────
   Every section is one grid: the rail note in columns 1-2, content in 3-12.
   Below 1080px the rail collapses and its note becomes a single line above
   the content — which the CSS already does, so a page never restates it. */
export function Section({
  rail,
  children,
  id,
  rhythm,
}: {
  /* Optional: the closing beat is an invitation, not a numbered part of the
     argument, so it carries no reference note. */
  rail?: string;
  children: React.ReactNode;
  id?: string;
  /* Identical padding on every band reads as a wireframe. A section can say
     how much air it wants. (visual brief §3) */
  rhythm?: 'tight' | 'open';
}) {
  return (
    <section className={`wrap ${rhythm ? `section-${rhythm}` : 'section'}`} id={id}>
      <div className="grid12">
        {rail ? <p className="rail rail-note">{rail}</p> : null}
        <div className="content">{children}</div>
      </div>
    </section>
  );
}

/* A content row that subdivides the parent grid rather than nesting a second
   one with a different gutter. §4: misalignment between sections is always a
   nested grid. */
export function Cols({ children }: { children: React.ReactNode }) {
  return <div className="cols10">{children}</div>;
}

export function Col({
  span,
  children,
  className,
}: {
  span: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className} style={{ gridColumn: `span ${span}`, minWidth: 0 }}>
      {children}
    </div>
  );
}

/* ── Panel — the quiet container. `mark` carries the one real caveat per
      page and takes a full-strength ink border. ────────────────────────── */
export function Panel({
  title,
  children,
  variant,
}: {
  title?: string;
  children: React.ReactNode;
  variant?: 'mark';
}) {
  return (
    <div className={`panel${variant === 'mark' ? ' panel-mark' : ''}`}>
      {title && <p className="d4 panel-title">{title}</p>}
      <div className="t-sm">{children}</div>
    </div>
  );
}

/* ── Ledger — label / value, with an optional description spanning both.
      The workhorse: most non-prose content on this site is a ledger. ───── */
export type LedgerItem = {
  label: string;
  value: string;
  /* Cobalt appears once per viewport, on the figure that matters most. */
  live?: boolean;
  muted?: boolean;
  chip?: string;
  description?: React.ReactNode;
};

export function Ledger({ items }: { items: LedgerItem[] }) {
  return (
    <dl className="ledger">
      {items.map((it) => (
        <div className="ledger-row" key={it.label}>
          <dt className="t-sm">{it.label}</dt>
          <dd className={`fig${it.live ? ' is-live' : ''}${it.muted ? ' is-muted' : ''}`}>
            {it.chip ? <Chip>{it.chip}</Chip> : it.value}
          </dd>
          {it.description && <p className="ledger-desc t-sm">{it.description}</p>}
        </div>
      ))}
    </dl>
  );
}

/* ── Steps — numbered rows, only where content is genuinely sequential. ── */
export type StepItem = { title: string; meta?: string; body: React.ReactNode };

export function Steps({ items }: { items: StepItem[] }) {
  return (
    <ol className="steps">
      {items.map((s, i) => (
        <li className="step" key={s.title}>
          <span className="step-n fig" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <p className="d4 step-title">
              {s.title}
              {s.meta && <Chip>{s.meta}</Chip>}
            </p>
            <div className="t-body step-body">{s.body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ── Stat — a rule, a mono figure, a caption. Not a boxed card. ────────── */
export function Stat({
  figure,
  caption,
  live,
  muted,
}: {
  figure: string;
  caption: string;
  live?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="stat">
      <p className={`stat-fig fig${live ? ' is-live' : ''}${muted ? ' is-muted' : ''}`}>{figure}</p>
      <p className="t-sm stat-cap">{caption}</p>
    </div>
  );
}

export { Button } from './Button';

export function Chip({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

export function Note({ children }: { children: React.ReactNode }) {
  return <p className="t-note note-block">{children}</p>;
}

/* No arrow appended. §7. */
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="tlink">
      {children}
    </Link>
  );
}

/* ── Set-pieces (visual brief §5) ─────────────────────────────────────────
   The visual carries the claim and the prose fills in what the visual loses,
   so these are section-leading elements, not decoration. */

/* A band that owns the full width of the viewport. `ink` is the one dark
   band a page is allowed; it inverts the palette's roles rather than
   introducing a second one. */
export function Band({
  children,
  tone = 'paper',
  rhythm,
  id,
}: {
  children: React.ReactNode;
  tone?: 'paper' | 'ink';
  rhythm?: 'tight' | 'open';
  id?: string;
}) {
  const cls = [
    'bleed',
    tone === 'ink' ? 'band-ink' : '',
    rhythm ? `section-${rhythm}` : 'section',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={cls} id={id}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/* One sentence at display size, full bleed, nothing else in the band.
 *
 * Raised paper by default, not ink: §3 allows ONE full-bleed ink band per
 * page, and on the home page the gap chart spends it. A statement is loud
 * because of its size and the emptiness around it, not because of its
 * ground — `tone="ink"` is there for pages that have not spent theirs. */
export function Statement({
  children,
  tone = 'raised',
}: {
  children: React.ReactNode;
  tone?: 'raised' | 'ink';
}) {
  return (
    <section className={`bleed statement ${tone === 'ink' ? 'band-ink' : 'band-raised'}`}>
      <div className="wrap">
        <div className="grid12">
          <p className="content">{children}</p>
        </div>
      </div>
    </section>
  );
}

/* One number at 140–220px with a short caption. One per page, two at most. */
export function FigureXL({
  figure,
  caption,
  live,
}: {
  figure: string;
  caption: React.ReactNode;
  live?: boolean;
}) {
  return (
    <div className="figure-xl-block">
      <span className={`figure-xl${live ? ' is-live' : ''}`}>{figure}</span>
      <p className="t-sm figure-xl-cap">{caption}</p>
    </div>
  );
}

/* A number lifted out of a paragraph and set in the margin rail. */
export function Pull({ figure, caption }: { figure: string; caption: string }) {
  return (
    <div className="pull">
      <span className="pull-fig">{figure}</span>
      <span className="t-note pull-cap">{caption}</span>
    </div>
  );
}
