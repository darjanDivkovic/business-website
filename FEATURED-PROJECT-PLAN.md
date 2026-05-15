# CloudsForge Portfolio Integration — Build Spec

> Status: decisions locked via grill session. This is the implementation spec, not a strategy doc.
> Scope: **codebase changes only**. Social profiles, blog posts, and outreach copy are out of scope (optional text draft at end).

---

## Positioning (the spine of every copy decision)

**Reality:** CloudsForge is **built and shipped** — available now, $49 one-time, Win/Mac/Linux — but **pre-revenue / minimal traction**. No customer counts, no revenue figures, no "scaling" or "used worldwide" language. Anywhere.

**The message:** "I designed, built, and shipped a real product end-to-end — solo. Here's the proof. Now hire me." Direct, hire-me energy. Not "selective founder too busy for freelance." The product is proof of capability; availability is explicit and eager.

**Voice:** First person, Darjan. "I designed and shipped CloudsForge solo." (`darren@cloudsforge.com` on the CloudsForge site is Darjan's customer-support pseudonym — same person.)

---

## Decisions locked

| # | Decision | Resolution |
|---|----------|------------|
| Q1 | CloudsForge traction | **B** — built/shipped, pre-revenue. Honest framing, no invented metrics. |
| Q2 | Scope | Codebase only. |
| Q3 | Case study placement | **C** — home teaser section **+** dedicated `/cloudsforge` page. Content hardcoded in the page component (no markdown pipeline). |
| Q4 | Hero rewrite | **A** — full founder rewrite. Lightning/beam effect kept. Ends with hire-me CTA. |
| Q5 | Home section order | Hero → FeaturedProduct → Testimonials → AboutTrust → Client Work → Services → Brands/Logos → Contact. |
| Q6 | Assets | Screenshots + logo in hand. Demo = motion-graphics, coming soon → reserved swap-ready slot. |
| Q7 | Aesthetic | Home section coheres with homepage (dark + existing effects). `/cloudsforge` page = **cinematic** — own world, tethered by shared black base. |
| Q8 | Brand tokens | CloudsForge brand: orange `#D45D13`, yellow `#F3BC47` (live-site values). Bg `#060609`, surfaces `#0d0d15` / `#12121c`. |
| Q9 | Content map | Metrics section cut → replaced with soft status line. Freelancer→founder subsection kept (trimmed). |
| Q10 | Asset pipeline | Copy logo + demo videos into `public/cloudsforge/`. Centralized image constants. Correct screenshots provided by user → `public/cloudsforge/screenshot-job.png`, `screenshot-gpus.png`. |
| Q11 | Nav / services / fonts | Nav link added (leftmost). Services intro reframed to hire-me. `/cloudsforge` uses CloudsForge brand fonts: **Syne** (display), **DM Sans** (body), **JetBrains Mono** (mono). |

---

## Codebase map (verified)

- Framework: Next.js 16 App Router, TypeScript, Tailwind v3, dark mode.
- Home page: `src/app/page.tsx` → `src/app/pages/Home/HomePage.tsx` (composes sections).
- Hero + LogosSection: `src/components/ui/hero-1.tsx` (LogosSection currently lives here).
- Header/nav: `src/components/ui/header-1.tsx`.
- Client projects: `src/components/ui/gallery-scroll-section.tsx` (inline `projects` array).
- Services: `src/components/ui/services-section.tsx`.
- Testimonials: `src/components/ui/testimonials-section.tsx`.
- About/Trust: `src/components/ui/about-trust-section.tsx`.
- Contact: `src/components/ui/contact-section.tsx`.
- Root metadata: `src/app/layout.tsx`.
- Site font: Actor (`--font-primary`).

---

## Work items

### 1. Hero — full founder rewrite (`src/components/ui/hero-1.tsx`)
- Keep the lightning/beam visual effect and video background.
- New headline + sub: founder-engineer framing. No "worldwide / scaling / X customers."
- One CTA stays hire-me (`/contact`), one repoints to `/cloudsforge` ("See what I built" or similar).
- Ends on explicit availability.

### 2. New: FeaturedProduct section (`src/components/ui/featured-product-section.tsx`)
- Coheres with homepage: dark base, existing effect vocabulary.
- CloudsForge logo/wordmark + one-line positioning.
- Screenshot, framed (use `screenshot-job.png` or `screenshot-gpus.png`).
- One-sentence problem → one-sentence solution.
- 3–4 tech-stack badges.
- CTA: "See how I built it" → `/cloudsforge`.

### 3. Home layout reorder (`src/app/pages/Home/HomePage.tsx`)
New order: Hero → **FeaturedProduct** → Testimonials → AboutTrust → Client Work → Services → Brands/Logos → Contact.
- LogosSection currently in `hero-1.tsx` — extract or relocate its render so it sits near the bottom.
- Retitle the gallery section "Client Work" (currently "PREVIOUS WORK — Featured Solutions").

### 4. New page: `/cloudsforge` — cinematic case study
- `src/app/cloudsforge/page.tsx` + `src/app/pages/CloudsForge/CloudsForgePage.tsx` (match existing page pattern).
- Aesthetic: deep black (`#060609`), letterbox framing, filmic grain, timeline/scrubber motifs, orange/yellow as the single light source. CloudsForge brand fonts.
- Header/footer stay (tether to main site).
- Structure:
  1. Hero — logo, tagline, headline screenshot (or reserved demo slot).
  2. The Problem — conda/CUDA/dependency hell.
  3. The Solution — what the app does; both screenshots.
  4. The Journey — Research/Design → MVP → Launch. **No revenue claims** — "what I did," not "what it earned."
  5. Tech Stack — React, Electron, Node, RunPod/Vast APIs, CI/CD, Gumroad.
  6. **Reserved demo slot** — labeled placeholder for the motion-graphics demo (swap-ready video/embed).
  7. What I Learned — 3–4 insights incl. trimmed freelancer→founder subsection.
  8. Soft status line — "Available now · Windows/macOS/Linux · $49 one-time." No numbers.
  9. Closing CTA — hire-me → `/contact`, plus visit `cloudsforge.com`.

### 5. Navigation (`src/components/ui/header-1.tsx`)
- Add "CloudsForge" link → `/cloudsforge`, leftmost (left of Services). Mobile menu too.

### 6. Services copy (`src/components/ui/services-section.tsx`)
- New intro: "I built CloudsForge end-to-end — here's what that proves — and I'm available to hire." Hire-me energy, NOT "I'm selective / busy."

### 7. Meta / SEO (`src/app/layout.tsx` + new page metadata)
- Rewrite root description: founder-engineer framing, mentions CloudsForge, states availability.
- `/cloudsforge` page metadata + OpenGraph.

### 8. Assets (`public/cloudsforge/`)
- Copy `logo-nobg.png` + 4 `gen-*.mp4` demo videos (+ posters) from the CloudsForge repo.
- **User provides:** `screenshot-job.png`, `screenshot-gpus.png` (the two corrected screenshots).
- Centralized image constants for one-edit swaps.

---

## Out of scope (optional text draft only, no implementation)
- LinkedIn headline / about, Twitter bio.
- 4 blog posts (the "100 customers launch story" post can't be written truthfully per Q1=B — defer).
- Outreach email templates.

---

## Open user actions
1. Drop the two corrected screenshots into `public/cloudsforge/` as `screenshot-job.png` and `screenshot-gpus.png`.
2. Motion-graphics demo → drop in later; slot is reserved.
