/* Join. §6.8 — copy is final and lives here, never inline in JSX. */

export const OPENING = {
  rail: 'Join / 01',
  heading: 'Tell us which one you are.',
  sub: 'We are onboarding a small number of members and shops in the Redlands corridor first.',
  lede:
    'If you are somewhere else, say so — the waitlist is how we decide where to go next.',
} as const;

export type ModeKey = 'member' | 'shop' | 'land' | 'work';

export type Field = { name: string; label: string; type?: 'text' | 'number' };

export const MODES: {
  key: ModeKey;
  tab: string;
  fields: Field[];
  button: string;
  noteLabel: string;
  next: string;
}[] = [
  {
    key: 'member',
    tab: 'I want to join',
    fields: [{ name: 'zip', label: 'ZIP' }],
    button: 'Join the waitlist',
    noteLabel: 'Anything we should know',
    next: 'You will hear from us before we open in your area, and we will not email you about anything else. Joining the waitlist is not an application and does not affect your credit.',
  },
  {
    key: 'shop',
    tab: 'I run a shop',
    fields: [
      { name: 'zip', label: 'ZIP' },
      { name: 'business', label: 'Business name' },
      { name: 'ticket', label: 'Typical ticket' },
    ],
    button: 'Request a call',
    noteLabel: 'What do you sell, and roughly how many jobs a week walk out over cost?',
    next: 'A founder calls you, not a sales team. The first question is whether you can wait thirty days for the money — if the answer is no, we will say this is not a fit rather than sign you.',
  },
  {
    key: 'land',
    tab: 'I own property',
    fields: [
      { name: 'zip', label: 'ZIP' },
      { name: 'own', label: 'What do you own' },
    ],
    button: 'Send the details',
    noteLabel: 'Where is it, roughly what is it worth, and is there a mortgage on it?',
    next: 'We will walk through what a contribution would look like and what it would not. Bring your CPA to the second conversation — we will send them the documents.',
  },
  {
    key: 'work',
    tab: 'I want to work on it',
    fields: [],
    button: 'Get in touch',
    noteLabel: 'What would you want to work on?',
    next: 'Everything at this stage is equity-only with no salary, and we say that in the first conversation. If you need income in the next three months, this is the wrong thing for you.',
  },
];

/* §6.8: "Wire the form to a real endpoint or leave a clearly labelled TODO.
   Never a form that silently does nothing."

   There is no endpoint. Phase 0 found a Formspree integration on the live site
   with an empty form ID, which is why both live forms currently accept an
   email and quietly drop it into localStorage. That is the exact failure this
   line exists to prevent, so this form does not pretend: submission is
   disabled and says why, in the open, above the button. */
export const NOT_WIRED = {
  title: 'This form is not connected yet.',
  body: 'There is no endpoint behind it, so nothing is sent and nothing is stored. Rather than accept your details and drop them, it is switched off until it has somewhere to go.',
} as const;
