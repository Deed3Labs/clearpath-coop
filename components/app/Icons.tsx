/* The handful of glyphs the mockups need, drawn. §4 — never emoji or a
   Unicode character doing an icon's job, in any context. That includes the
   padlock on the held permission row (§7.7 S4). */

const s = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

export const Check = ({ size = 15, width = 1.75 }: { size?: number; width?: number }) => (
  <svg {...s(size)} strokeWidth={width}><path d="M20 6 9 17l-5-5" /></svg>
);

export const CheckCircle = ({ size = 15 }: { size?: number }) => (
  <svg {...s(size)} strokeWidth={1.75}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
);

export const Chevron = ({ size = 10 }: { size?: number }) => (
  <svg {...s(size)} strokeWidth={2.4}><path d="m9 18 6-6-6-6" /></svg>
);

export const Back = ({ size = 17 }: { size?: number }) => (
  <svg {...s(size)} strokeWidth={1.75}><path d="m15 18-6-6 6-6" /></svg>
);

export const Close = ({ size = 17 }: { size?: number }) => (
  <svg {...s(size)} strokeWidth={1.75}><path d="M18 6 6 18M6 6l12 12" /></svg>
);

export const Swap = ({ size = 13 }: { size?: number }) => (
  <svg {...s(size)} strokeWidth={2}><path d="M4 7h16M20 7l-3-3M20 17H4M4 17l3 3" /></svg>
);

export const Lock = ({ size = 11 }: { size?: number }) => (
  <svg {...s(size)} strokeWidth={2}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
