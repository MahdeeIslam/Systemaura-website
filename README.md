# SystemAura Solutions — Marketing Website

A production-ready marketing site for **SystemAura Solutions**, a B2B company that
builds custom systems, automations, web applications and websites for
operations-heavy businesses (glass manufacturing, cabinet making, construction,
shopfitting, trades).

The site has one job: **convert business owners into booked "Free Operational
Audit" calls.** The primary call-to-action everywhere is _Book a Free Operational
Audit_.

---

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css`)
- Fonts via **`next/font`** — Space Grotesk (display) + Inter (body)
- No backend in v1: the ROI calculator and booking form are fully client-side
- No paid dependencies. Icons, the logo and the animated "connected systems"
  motif are all hand-built inline SVG.

---

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

### Node version

Developed and tested on Node 20. Next 15.5's recommended engine is **Node ≥
20.9**. On older 20.x the app still runs and builds; one type-aware ESLint rule
(`@typescript-eslint/no-unused-expressions`) is disabled in
[`eslint.config.mjs`](eslint.config.mjs) so the lint pass doesn't crash. Remove
that override once you're on Node ≥ 20.9.

---

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, Header, Footer, skip-link
  page.tsx              Homepage (composes the 12 sections in order)
  globals.css           Design tokens (@theme) + base styles + keyframes
  icon.svg              Brand favicon (the S monogram)
  services/             /services
  industries/           /industries  +  industries/[slug] (templated per trade)
  case-studies/         /case-studies
  about/                /about
  contact/              /contact (booking form)

components/
  ui/                   Primitives: Button, Card, SectionHeading, Eyebrow,
                        Section, IconBadge, Icon, Reveal
  brand/                Logo (S monogram) + NodeNetwork (animated motif)
  layout/               Header, Footer, PageHero
  sections/             One component per homepage section + reusable CtaSection
  cards/                CaseStudyCard (shared)
  forms/                ContactForm (validation + success state)

lib/
  content.ts            ALL site copy + data (edit here, not in components)
  cn.ts                 Tiny className joiner
```

> **Copy lives in `lib/content.ts`.** Headlines, services, industries, case
> studies, testimonials and the trust bar are all data-driven from this one
> file, so you can update wording without touching layout code.

---

## Customising the brand

### Colours

All brand colours are defined once as Tailwind theme tokens in
[`app/globals.css`](app/globals.css) under `@theme`. Change a hex value and it
updates everywhere (`bg-ink`, `text-electric`, `border-copper`, etc.):

| Token            | Hex       | Use                                            |
| ---------------- | --------- | ---------------------------------------------- |
| `ink`            | `#111111` | Primary background                             |
| `electric`       | `#2563EB` | Primary accent — CTAs, key headline words      |
| `copper`         | `#B87333` | Secondary accent — eyebrows, icons, numbering  |
| `paper`          | `#F8F8F8` | Primary text on dark / light section backgrounds |
| `slate`          | `#475569` | Muted text, borders, secondary UI              |
| `ink-card`       | `#1A1A1A` | Lifted card surfaces                           |
| `slate-soft`     | `#94A3B8` | Readable muted body text on dark               |

### Fonts

Swap the two `next/font` imports in [`app/layout.tsx`](app/layout.tsx). They feed
the `--font-display` and `--font-sans` tokens used by `font-display` / `font-sans`
utilities — no other changes needed.

---

## Integration points (`// TODO`)

Everything below works as a polished placeholder today. Search the codebase for
`TODO` to find each one.

| What                       | Where                                                        | Note                                                                 |
| -------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| **Booking form handler**   | `components/forms/ContactForm.tsx` (`submit()`)              | Currently logs the request + shows a success state. Wire to Calendly / a CRM / email. |
| **Real client logos**      | `lib/content.ts` → `TRUST_LOGOS`                             | Text placeholders today; replace with real logo SVGs.                |
| **Real testimonials**      | `lib/content.ts` → `TESTIMONIALS`                           | Placeholder quotes/names; a video-testimonial slot is already laid out. |
| **Case-study numbers**     | `lib/content.ts` → `CASE_STUDIES`                           | Illustrative examples until verified client figures are added.       |
| **Phone number**           | `lib/content.ts` → `COMPANY.phone`                          | Placeholder.                                                         |
| **"Why" boardroom image**  | `components/sections/WhySystemAura.tsx`                      | A branded placeholder panel; swap for a real photo via `next/image`. |

---

## Accessibility & performance

- Semantic HTML, a "skip to content" link, visible keyboard focus, and ARIA on
  the nav, mobile menu and form.
- All ambient/scroll motion is disabled under `prefers-reduced-motion`.
- Decorative SVGs are `aria-hidden`; there are no raster images to slow the page.
- Mobile-first and responsive; the production build ships ~100 kB of First Load
  JS, keeping Lighthouse scores high.

---

## Copy & tone rules (please keep)

- Never mention "React", "AI", "APIs", "integrations" or "development" in
  customer-facing copy — translate every feature into a business outcome.
- Active voice. Sentence case for body; deliberate caps only for eyebrows.
- Buttons say what happens ("Book a Free Operational Audit", "View Case
  Studies", "Book My Audit").
```
