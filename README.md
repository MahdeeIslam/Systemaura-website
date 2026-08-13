# SystemAura Solutions — Marketing Website

A production-ready marketing site for **SystemAura Solutions**, a B2B company that
builds custom systems, automations, web applications and websites for
operations-heavy businesses (glass manufacturing, cabinet making, construction,
shopfitting, trades).

The site has one job: **convert business owners into booked "Free Operational
Audit" calls.** The primary call-to-action everywhere is _Book a Free Operational
Audit_.

Core message: **Better operations, less manual work, more profits.**

**Design:** a light, slightly-warm UI — SystemAura blue for interaction, copper
as a premium accent, deep navy text on a warm off-white canvas, per the Website
Redesign & Interaction Guide. The homepage leads with a clearly-labelled **demo
dashboard** and a **Manual work → Automation → One connected system** explainer.

---

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css`)
- Fonts via **`next/font`** — Space Grotesk (display) + Inter (body)
- No backend in v1: the booking form is client-side (emailed via Web3Forms)
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
updates everywhere (`bg-canvas`, `text-blue`, `border-copper`, etc.):

| Token           | Hex       | Use                                              |
| --------------- | --------- | ------------------------------------------------ |
| `blue`          | `#2563EB` | Primary — buttons, links, active states, icons   |
| `copper`        | `#B87333` | Accent — section labels, secondary highlights    |
| `copper-light`  | `#D79452` | Soft copper for gradients / hover glow           |
| `canvas`        | `#F7F6F2` | Page background — warm off-white                  |
| `surface`       | `#FFFFFF` | Cards, dashboards, panels                         |
| `mist`          | `#EEF2F7` | Blue-grey alternate sections                      |
| `navy`          | `#0F172A` | Headings + important text, dark sections (footer) |
| `slate`         | `#475569` | Body copy + descriptions                          |
| `hair` / `hair-cool` | `#E6E3DC` / `#E2E8F0` | Hairline borders                     |

> The old dark-theme names (`ink`, `paper`, `line`, `slate-soft`, `electric`)
> still exist as aliases mapped to the light values, so older components keep
> working — prefer the names above in new code.

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
| **Booking form → email**   | `components/forms/ContactForm.tsx` (`submit()`)              | Booking requests are emailed via [Web3Forms](https://web3forms.com) (free, no backend). **Setup:** create an access key with the business email, set it as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (see below). Until it's set, the form still validates + confirms but only logs the request. |
| **Client logos + testimonials** | `app/page.tsx`, `lib/content.ts`, `components/sections/TrustBar.tsx` + `Testimonials.tsx` | Both sections are currently left off the homepage until real clients exist. Re-add `<TrustBar />` / `<Testimonials />` to `app/page.tsx` and fill the data in `content.ts`. |
| **Case-study numbers**     | `lib/content.ts` → `CASE_STUDIES`                           | Illustrative examples until verified client figures are added.       |
| **"Why" boardroom image**  | `components/sections/WhySystemAura.tsx`                      | A branded placeholder panel; swap for a real photo via `next/image`. |

### Email delivery env var

Create a free access key at [web3forms.com](https://web3forms.com) using the
business inbox, then set it wherever the app runs:

```bash
# .env.local  (local dev) — and add the same key in your host's env settings
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
```

Every _Book a Free Operational Audit_ request will then be emailed to that inbox.
Prefer Calendly or a CRM instead? Swap the `fetch` in `ContactForm.tsx`.

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
- Buttons say what happens ("Book a Free Operational Audit", "Book Free Audit").

## Content & credibility rules (important)

- **No unverified proof.** Do not publish client counts, systems-built /
  hours-saved figures, revenue claims, testimonials or client logos unless they
  are backed by real, approved client data.
- The hero dashboard and the Jobs table are **example data** and are each
  labelled **"Demo"** — keep that label if you change the numbers.
- Keep the site focused on real, understandable outcomes: less manual work,
  fewer mistakes, better visibility, faster follow-up, more time to grow.
