/* The ticker. Facts, separated by rules, running slowly across the bottom of
 * the hero — the reference's device, and it works because it is the only
 * thing on the page moving on its own.
 *
 * The list is rendered twice so the loop has no seam. aria-hidden on the
 * duplicate, and the whole strip is inert to assistive technology: it is a
 * texture made of words, and a screen reader announcing it twice would be
 * worse than not announcing it at all. The same facts are on the page in
 * places where they are read properly. */
export function Marquee({ items }: { items: readonly string[] }) {
  const run = (key: string, hidden?: boolean) => (
    <ul className="marquee-run" key={key} aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {run('a')}
        {run('b', true)}
      </div>
    </div>
  );
}
