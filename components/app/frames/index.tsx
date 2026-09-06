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
