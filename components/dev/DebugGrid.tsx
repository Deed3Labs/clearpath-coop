'use client';

import { useEffect, useState } from 'react';

/* ?debug=grid — draws the 12 columns and the margin rail. (§4)
   Reads the query string after mount so it never forces a Suspense
   boundary or a client-render bailout on a real page. */
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
      <div className="wrap">
        <div className="grid12">
          {Array.from({ length: 12 }, (_, i) => (
            <i key={i} {...(i < 2 ? { 'data-rail': '' } : {})} />
          ))}
        </div>
      </div>
    </div>
  );
}
