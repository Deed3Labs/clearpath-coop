'use client';

import { useEffect, useId, useRef, useState } from 'react';

/* A listbox, not a styled <select>.
 *
 * A native select cannot be drawn — the options render in the platform's own
 * menu, in the platform's own type, which on this page is the one control
 * that would not be in the site's voice. So this is the real pattern: a
 * button that owns the value, a listbox of options, and the keyboard
 * behaviour a select has, because a reader who tabs into it expects a select
 * and does not care why it is not one.
 *
 * The value reaches the form through a hidden input, which is what keeps the
 * component honest: FormData reads it exactly as it reads every other field,
 * and nothing about submission is special-cased for it.
 */

type Props = {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
  wide?: boolean;
};

export function FieldSelect({ name, label, placeholder, options, wide }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  /* Which option the keyboard is on, which is not the same as which one is
     chosen — arrowing through a list must not commit anything. */
  const [cursor, setCursor] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const listId = `${id}-list`;
  const labelId = `${id}-label`;

  /* Close on an outside click and on Escape. Both are the same intent, so
     they are the same effect, and both are removed with the listener. */
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  /* Keep the cursor option in view when the list is taller than its box. */
  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector<HTMLElement>('[data-cursor="true"]')?.scrollIntoView({
      block: 'nearest',
    });
  }, [open, cursor]);

  function choose(i: number) {
    setValue(options[i]);
    setCursor(i);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        e.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        const d = e.key === 'ArrowDown' ? 1 : -1;
        setCursor((c) => (c + d + options.length) % options.length);
        return;
      }
      case 'Home':
        if (open) {
          e.preventDefault();
          setCursor(0);
        }
        return;
      case 'End':
        if (open) {
          e.preventDefault();
          setCursor(options.length - 1);
        }
        return;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (open) choose(cursor);
        else setOpen(true);
        return;
      case 'Escape':
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        return;
      case 'Tab':
        setOpen(false);
        return;
      default:
        return;
    }
  }

  return (
    <div className={`join-field fs${wide ? ' is-wide' : ''}`} ref={rootRef}>
      <span className="fs-label" id={labelId}>
        {label}
      </span>

      {/* The value the form actually submits. */}
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        className="fs-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${labelId} ${id}-value`}
        aria-controls={open ? listId : undefined}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
      >
        <span id={`${id}-value`} className="fs-value" data-empty={value ? undefined : ''}>
          {value || placeholder}
        </span>
        <span className="fs-caret" aria-hidden="true" />
      </button>

      {open && (
        <ul className="fs-list" id={listId} role="listbox" aria-labelledby={labelId} ref={listRef}>
          {options.map((o, i) => (
            <li
              key={o}
              role="option"
              aria-selected={o === value}
              data-cursor={i === cursor ? 'true' : undefined}
              className="fs-option"
              /* Mouse down rather than click: click fires after the outside
                 mousedown that closes the list, so the choice was lost. */
              onMouseDown={(e) => {
                e.preventDefault();
                choose(i);
              }}
              onMouseEnter={() => setCursor(i)}
            >
              {o}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
