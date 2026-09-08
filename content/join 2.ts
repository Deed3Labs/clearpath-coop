/* Join. §6.8 — copy is final and lives here, never inline in JSX. */

export const OPENING = {
  rail: 'Join / 01',
  heading: 'Tell us which one you are.',
  lede:
    'We are onboarding a small number of members and shops in the Redlands corridor first. If you are somewhere else, say so — the waitlist is how we decide where to go next.',
} as const;

export type ModeKey = 'member' | 'shop' | 'land' | 'work';

export type Field = { name: string; label: string; type?: 'text' | 'number' };

/* Each mode carries two asides. They were one paragraph, and every one of the
   four had the same shape inside it: what we will do, and then the thing that
   might make you walk away. Split, because the second half is the half that
   earns trust and it was riding at the end of a sentence about scheduling. */
export const MODES: {
  key: ModeKey;
  tab: string;
  fields: Field[];
  button: string;
  noteLabel: string;
  next: string;
  caveatLabel: string;
  caveat: string;
}[] = [
  {
    key: 'member',
    tab: 'I want to join',
    fields: [{ name: 'zip', label: 'ZIP' }],
    button: 'Join the waitlist',
    noteLabel: 'Anything we should know',
    next: 'You will hear from us before we open in your area, and we will not email you about anything else.',
    caveatLabel: 'What this is not',
    /* §7 Legal: a credit-advertising claim. Do not paraphrase it into
       anything stronger than it already is. */
    caveat: 'Joining the waitlist is not an application and does not affect your credit.',
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
    next: 'A founder calls you, not a sales team.',
    caveatLabel: 'The first question',
    caveat: 'Whether you can wait thirty days for the money. If the answer is no, we will say this is not a fit rather than sign you.',
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
    next: 'We will walk through what a contribution would look like and what it would not.',
    caveatLabel: 'Bring your CPA',
    caveat: 'To the second conversation, not the first. We will send them the documents.',
  },
  {
    key: 'work',
    tab: 'I want to work on it',
    fields: [],
    button: 'Get in touch',
    noteLabel: 'What would you want to work on?',
    next: 'Everything at this stage is equity-only with no salary, and we say that in the first conversation.',
    caveatLabel: 'Before you write',
    caveat: 'If you need income in the next three months, this is the wrong thing for you.',
  },
];

/* §6.8: "Wire the form to a real endpoint or leave a clearly labelled TODO.
   Never a form that silently does nothing."

   The form is now built to submit for real: it posts to
   NEXT_PUBLIC_JOIN_ENDPOINT, and shipping is a matter of setting that
   variable. What it will never do is the thing §6.8 forbids — the live site's
   old form accepted an email, wrote it to localStorage and showed a success
   message. If the endpoint is missing or the request fails, this one says so
   and says nothing was stored. There is no path through it that reports
   success without a 2xx from a real endpoint. */
export const SUBMIT = {
  sending: 'Sending…',
  ok: 'We have it. You will hear from us.',
  /* No address in it, because the site does not publish one yet. When it
     does, add it here — a failure the reader can do something about is worth
     more than an apology. */
  error: 'That did not send, and nothing was stored. Please try again.',
} as const;
