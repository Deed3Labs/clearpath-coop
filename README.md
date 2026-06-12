# ClearPath Co-op — Landing Site

Marketing site for **ClearPath**, a member-owned housing cooperative that turns the
rent you already pay into a path to debt-free homeownership.

> **Hero:** *Your rent is making someone else rich.*

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Main landing page — problem, how it works, the flywheel, product ecosystem, membership tracks, waitlist CTA |
| `capital.html` | Clear Capital sub-site for asset partners — served at `/capital` |
| `assets/strategy.md` | Internal master strategy reference (not linked publicly) |

## Tech
- **Single-file, zero-build.** Plain HTML/CSS/JS — just open or host the files.
- **Self-hosted brand fonts** in `assets/fonts/` — **Coolvetica** (display) + **General Sans** (body/UI), with **DM Serif Display** (Google) for the italic accents.
- **GSAP 3.12 + ScrollTrigger** (CDN) — headline reveal, scroll reveals, step-bar fills.
- **Canvas particle field** in the hero (vanilla, monochrome).
- Custom cursor, magnetic buttons, full-screen mobile menu, dark/light theme toggle (persisted), live "rent lost" counter.
- Fully responsive (breakpoints at 1020 / 900 / 640 / 430px) and respects `prefers-reduced-motion`.
- Graceful fallback: if GSAP fails to load, all content still renders.

## Run locally
No build step. Either open `index.html` directly, or serve the folder:

```bash
cd clearpath-coop
python3 -m http.server 8080
# visit http://localhost:8080
```

## Deploy
Drop the folder on any static host — **Netlify, Vercel, GitHub Pages, Cloudflare Pages.**
`index.html` is the entry point.

## Wiring the waitlist
The CTA form currently validates the email and stores it in `localStorage` so signups
aren't lost pre-backend. To capture real leads, replace the marked block in the
`WAITLIST FORM` script in `index.html` with a POST to your endpoint
(Formspree, Netlify Forms, or your own API).

## Brand tokens
- **Grayscale for now** (color is intentionally held back so we can add it deliberately later): BG `#0A0A0A` · Ink `#F4F4F2` · grays in between. Accent = pure white in dark mode, pure black in light mode.
- One inverted light section (Clear Capital) provides contrast rhythm.
- Display: **Coolvetica** · Body/UI: **General Sans** · Italic accent: **DM Serif Display**
- Logo: the brand "C" mark image (`assets/logo.png`) in a rounded-square tile with a border — shown as-is in both themes (no inversion).

---
© 2026 ClearPath Co-op · Informational only — not an offer of securities or financial advice.
