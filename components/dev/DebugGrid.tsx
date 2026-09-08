'use client';

import { useEffect, useState } from 'react';

/* ?debug=grid — draws the twelve columns every page is built on.
   Reads the query string after mount so it never forces a Suspense
   boundary or a client-render bailout on a real page.

   It used to draw the old centred container and its two-column margin rail,
   which no longer exist: it was showing a grid nothing on the site aligned
   to, which is worse than no overlay at all. */
export function DebugGrid() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const check = () =>
      setOn(new URLSearchParams(window.location.search).get('debug') === 'grid');
    check();
    window.addEventListener('popstate', check);
    return () => window.removeEventListener('popstate', check);
  }, []);

  if (!on) return null;

  return (
    <div className="debug-grid" aria-hidden="true">
      <div className="hx-wrap">
        <div className="hx-grid">
          {Array.from({ length: 12 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
