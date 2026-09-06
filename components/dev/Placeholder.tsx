/* Phase 1 scaffold. Each route resolves, sits on the grid, and shows its
   rail note so ?debug=grid has something real to check alignment against. */
export function Placeholder({ rail, title }: { rail: string; title: string }) {
  return (
    <section className="wrap section">
      <div className="grid12">
        <p className="rail rail-note">{rail}</p>
        <div className="content">
          <h1 className="d1" style={{ maxWidth: '16ch' }}>{title}</h1>
          <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
            Placeholder. Copy and layout land in a later phase.
          </p>
        </div>
      </div>
    </section>
  );
}
