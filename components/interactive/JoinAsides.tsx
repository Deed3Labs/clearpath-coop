'use client';

import { useSearchParams } from 'next/navigation';
import { MODES, type ModeKey } from '@/content/join';

/* The two asides read the same ?as= the form does, so a deep link lands on
   the right pair. They sit under the form rather than beside it: on a
   conversion page the thing to the right of a field should be nothing.

   They do not follow a click on the selector — that would move copy under
   someone mid-form for no reason. The deep link is what carries intent here,
   and the default pair is true of every mode. */

const isMode = (v: string | null): v is ModeKey => !!v && MODES.some((m) => m.key === v);

export function JoinAsides() {
  const params = useSearchParams();
  const fromUrl = params.get('as');
  const active = MODES.find((m) => m.key === (isMode(fromUrl) ? fromUrl : 'member')) ?? MODES[0];

  return (
    <div className="hx-cols" data-n="2" data-rows="2">
      <div className="side">
        <p className="side-label">What happens next</p>
        <p className="t-sm side-note">{active.next}</p>
      </div>
      <div className="side">
        <p className="side-label">{active.caveatLabel}</p>
        <p className="t-sm side-note">{active.caveat}</p>
      </div>
    </div>
  );
}
