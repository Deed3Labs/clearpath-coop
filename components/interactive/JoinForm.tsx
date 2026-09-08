'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MODES, NOT_WIRED, type ModeKey } from '@/content/join';

/* §6.8 — four modes, deep-linkable.
 *
 * TODO(endpoint): this form has nowhere to submit to. When there is a real
 * endpoint, delete the not-wired notice, drop `disabled` from the fieldset and
 * the button, and post the payload. Everything else here is finished.
 *
 * It is deliberately switched off rather than left to look functional. The
 * live site's two forms currently accept an email, write it to localStorage
 * and show a success message, which is precisely the "form that silently does
 * nothing" the brief forbids. */

const isMode = (v: string | null): v is ModeKey =>
  !!v && MODES.some((m) => m.key === v);

export function JoinForm() {
  const params = useSearchParams();
  const fromUrl = params.get('as');
  const [mode, setMode] = useState<ModeKey>(isMode(fromUrl) ? fromUrl : 'member');

  const active = MODES.find((m) => m.key === mode) ?? MODES[0];

  return (
    <div className="join">
      <div className="join-tabs" role="group" aria-label="What are you getting in touch about?">
        {MODES.map((m) => (
          <button
            key={m.key}
            type="button"
            className="chooser-option"
            aria-pressed={m.key === mode}
            onClick={() => setMode(m.key)}
          >
            {m.tab}
          </button>
        ))}
      </div>

      <div className="join-body">
        <form
          className="join-form"
          onSubmit={(e) => e.preventDefault()}
          aria-describedby="join-not-wired"
        >
          <fieldset disabled>
            <legend className="sr-only">{active.tab}</legend>

            <div className="join-field">
              <label htmlFor="join-email">Email</label>
              <input id="join-email" name="email" type="email" autoComplete="email" />
            </div>

            {active.fields.map((f) => (
              <div className="join-field" key={f.name}>
                <label htmlFor={`join-${f.name}`}>{f.label}</label>
                <input id={`join-${f.name}`} name={f.name} type={f.type ?? 'text'} />
              </div>
            ))}

            <div className="join-field">
              <label htmlFor="join-note">{active.noteLabel}</label>
              <textarea id="join-note" name="note" rows={4} />
            </div>

            <button type="submit" className="btn" data-variant="primary">
              {active.button}
            </button>
          </fieldset>
        </form>

        <div className="join-aside">
          {/* The honest state, beside the form rather than buried under it,
              and set as a claim rather than a boxed aside — a notice that
              says "this does not work" should not look like a footnote.
              Still referenced by the form's aria-describedby. */}
          <div className="side" id="join-not-wired" data-live="">
            <p className="side-label">Status</p>
            <p className="d3">{NOT_WIRED.title}</p>
            <p className="t-sm side-note">{NOT_WIRED.body}</p>
          </div>

          <div className="side">
            <p className="side-label">What happens next</p>
            <p className="t-sm side-note">{active.next}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
