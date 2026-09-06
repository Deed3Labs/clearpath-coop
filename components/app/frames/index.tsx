/* Device frames and captions. §5 — thin outline only. No glossy bezel, no
   notch, no home indicator, no hardware buttons, no camera dot. Flat and
   square-on: no 3D tilt, no drop shadow, no reflection. Every fintech site
   does the floating tilted phone and it is the fastest way to look like a
   template. */

export function PhoneFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="app app-phone" role="img" aria-label={label}>
      {children}
    </div>
  );
}

/* 900px wide. Below 1080px it is scale-transformed rather than allowed to
   overflow or to shrink its type — a tablet screenshot whose 13px labels
   become 8px is not what the merchant will see. */
export function TabletFrame({
  children,
  label,
  height = 560,
}: {
  children: React.ReactNode;
  label: string;
  height?: number;
}) {
  return (
    <div className="app-tablet-scaler" style={{ ['--h' as string]: `${height}px` }}>
      <div className="app app-tablet" role="img" aria-label={label} style={{ minHeight: height }}>
        {children}
      </div>
    </div>
  );
}

/* When the point is one component, show just that component on the paper
   ground with a caption, like a spec sheet. (§5) */
export function Crop({
  children,
  label,
  width,
}: {
  children: React.ReactNode;
  label: string;
  width?: number;
}) {
  return (
    <div className="app app-crop" role="img" aria-label={label} style={width ? { width } : undefined}>
      {children}
    </div>
  );
}

/* Every mockup gets a mono caption naming the screen. (§5) */
export function ScreenCaption({ children }: { children: React.ReactNode }) {
  return <p className="screen-caption">{children}</p>;
}

/* A framed mockup plus its caption, so the two can never be separated. */
export function Mock({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: string;
}) {
  return (
    <figure style={{ margin: 0, minWidth: 0 }}>
      {children}
      <ScreenCaption>{caption}</ScreenCaption>
    </figure>
  );
}

/* ── The annotated specimen ───────────────────────────────────────────────
   §5 names this the signature treatment for this site: one component at
   generous size on the paper, with thin 1px leader lines running out to short
   mono annotations set in the margin. It is how a drawing is annotated and how
   a design portfolio presents work, it belongs to the survey language the rest
   of the site is built in, and it turns a screenshot into an argument.

   The annotations are a real list, so with no CSS and on a screen reader the
   component still reads as "here is a thing, and here is what to notice about
   it". The leader lines are drawn, decorative, and hidden from assistive tech. */

export type Annotation = {
  /* Vertical position along the specimen, 0 at its top edge and 1 at its
     bottom, so an annotation stays attached to the row it describes as the
     component reflows. */
  at: number;
  text: string;
};

export function Specimen({
  children,
  caption,
  notes,
  width = 420,
}: {
  children: React.ReactNode;
  caption: string;
  notes: Annotation[];
  width?: number;
}) {
  return (
    <figure className="specimen" style={{ ['--specimen-w' as string]: `${width}px` }}>
      <div className="specimen-piece app">{children}</div>

      <ul className="specimen-notes">
        {notes.map((n) => (
          <li key={n.text} style={{ ['--at' as string]: n.at }}>
            <span className="specimen-leader" aria-hidden="true" />
            <span className="specimen-note">{n.text}</span>
          </li>
        ))}
      </ul>

      <figcaption className="screen-caption specimen-caption">{caption}</figcaption>
    </figure>
  );
}
