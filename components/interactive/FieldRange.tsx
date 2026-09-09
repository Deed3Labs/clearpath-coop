'use client';

import { useId, useState } from 'react';

/* A quantity you drag rather than type.
 *
 * "Typical ticket" and "jobs a week" were a text box and half a sentence in
 * the note. Both are estimates, and a text box asks for a precision the
 * reader does not have — so it gets "about a grand", or nothing. A range
 * always returns a number, and the reader can see the size of what they are
 * saying while they say it.
 *
 * The top of the scale is open. Somebody at the ceiling is telling us "at
 * least this", so the readout says so rather than pretending the number is
 * exact.
 */

type Props = {
  name: string;
  label: string;
  min: number;
  max: number;
  step: number;
  start: number;
  format: 'usd' | 'count';
  topLabel: string;
  wide?: boolean;
};

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function FieldRange({
  name,
  label,
  min,
  max,
  step,
  start,
  format,
  topLabel,
  wide,
}: Props) {
  const [value, setValue] = useState(start);
  const id = useId();

  const atTop = value >= max;
  const read = atTop ? topLabel : format === 'usd' ? usd.format(value) : String(value);
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className={`join-field fr${wide ? ' is-wide' : ''}`}>
      {/* Label and answer on one line: the question and what you have said in
          reply belong together, and it keeps the control three rows tall
          instead of four. */}
      <div className="fr-head">
        <label className="fr-label" htmlFor={`${id}-input`}>
          {label}
        </label>
        {/* The figure face, because it is a figure. aria-hidden because the
            input already announces its own value to a screen reader, and a
            second reading of the same number is noise. */}
        <output className="fr-value fig" htmlFor={`${id}-input`} aria-hidden="true">
          {read}
        </output>
      </div>

      <input
        id={`${id}-input`}
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        /* The number alone is not the answer at the ceiling, so the spoken
           value carries the same "or more" the readout shows. */
        aria-valuetext={read}
        onChange={(e) => setValue(Number(e.currentTarget.value))}
        /* Fills the track behind the thumb without a second element to keep
           in sync. */
        style={{ ['--fr-pct' as string]: `${pct}%` }}
      />

      <div className="fr-scale" aria-hidden="true">
        <span>{format === 'usd' ? usd.format(min) : min}</span>
        <span>{topLabel}</span>
      </div>
    </div>
  );
}
