# darjan.dev — SEO Roadmap

Honest scoping doc. The copy-rewrite plan handles **on-page copy** + **2 free technical
fixes**. Everything below is the *separate, ongoing* SEO effort. Read it before deciding
how much time SEO is worth.

## The blunt truth first

A new site with no backlinks and no marketing **will not rank** for competitive terms
("AI engineer", "hire full-stack developer", "freelance React developer") for months,
regardless of meta tags. Meta tags are ~10% of ranking. Backlinks, content depth, and
domain age are the other 90%. SEO is a 6–12 month compounding game, not a config change.

**What you actually control short-term:** how you look in *branded* search (someone
heard your name and Googled you) and *long-tail* search (very specific, low-competition
phrases). Win those first.

---

## Tier 0 — In the copy-rewrite plan (already scoped)

- [ ] Add `/cloudsforge` to `src/app/sitemap.ts` — the page exists but isn't listed.
- [ ] Add JSON-LD structured data:
  - `Person` schema in `src/app/layout.tsx` (name, jobTitle, url, sameAs → LinkedIn/GitHub).
  - `SoftwareApplication` schema on `src/app/cloudsforge/page.tsx` (name, OS, price `$49`,
    `offers`, applicationCategory).
- [ ] Sharpen on-page copy + per-page `<title>`/description (the copy plan does this).

---

## Tier 1 — Branded search (do this within weeks, high ROI)

The fastest real win. When a prospect/recruiter hears "Darjan" and searches, the result
must convert.

- [ ] **Google Search Console** — verify the domain, submit `sitemap.xml`. Without this
      you are flying blind; everything else depends on the data it gives you.
- [ ] Make sure `darjan.dev` ranks #1 for your own name + "darjan.dev". Usually automatic,
      but confirm in Search Console once indexed.
- [ ] Consistent identity across the web (these become `sameAs` links and trust signals):
      LinkedIn, GitHub, X/Twitter, any dev profiles — same name, same headline, same photo,
      all linking back to `darjan.dev`.
- [ ] Set up basic analytics (Plausible / Vercel Analytics / GA4) so you can see what
      search terms and pages actually bring people in.

## Tier 2 — On-page keyword targeting (one-time, per page)

Each page should target **one** realistic primary phrase. Don't keyword-stuff — pick the
phrase, make sure it's in the `<title>`, the `<h1>`, and the meta description naturally.

- [ ] `/` — branded + positioning ("Darjan — full-stack & AI product engineer").
- [ ] `/services` — a buyer phrase ("hire a full-stack AI engineer", "AI integration
      contractor"). Lower competition than the homepage term.
- [ ] `/cloudsforge` — **your best long-tail bet.** Target specific phrases real users
      type: "run open-source AI video models", "rent cloud GPU desktop app", "cloud GPU
      for AI video". Low competition, high intent, and the product page can genuinely
      rank for these.
- [ ] `/about` — "Darjan" + credibility terms.
- [ ] Blog posts — each post targets one long-tail question (see Tier 4).

## Tier 3 — Technical health (mostly already done, verify)

- [x] `robots.ts`, `sitemap.ts`, per-page metadata exist.
- [ ] Confirm every page has a unique title + description (no duplicates).
- [ ] Confirm `metadataBase` / canonical URLs are set so there's no www/non-www or
      trailing-slash duplication.
- [ ] Run Lighthouse / PageSpeed — Core Web Vitals are a ranking factor. (Note: there's
      a history of scroll-jank work in this repo; janky scroll hurts the UX signal.)
- [ ] Confirm `opengraph-image.jpg` renders correctly when the site is shared.
- [ ] Image `alt` text on all meaningful images.

## Tier 4 — Content (the real long-game, ongoing)

This is what actually moves organic traffic. No content = no ranking for anything you
don't already have a brand for.

- [ ] Use the existing `/blog` to publish genuinely useful posts answering specific
      questions in your niche — e.g. "How I shipped a desktop AI app solo", "Renting
      cloud GPUs for AI video: what it actually costs", "Figma-to-React without the mess".
- [ ] Each post = one long-tail keyword + a real answer. 1 good post/month beats 10 thin ones.
- [ ] CloudsForge content has the clearest path to ranking — it's a specific product in a
      low-competition space. Lean here.

## Tier 5 — Off-page / backlinks (slowest, compounding)

- [ ] Get `darjan.dev` linked from places that already rank: your LinkedIn, GitHub
      profile/READMEs, dev.to / Hashnode crossposts of your blog, Product Hunt / relevant
      directories for CloudsForge.
- [ ] Launch CloudsForge somewhere with backlink value (Product Hunt, Hacker News, niche
      AI-tool directories) — this drives both backlinks and direct traffic.
- [ ] Never buy links. One spammy link removal is more work than it's worth.

---

## Priority order if time is limited

1. Tier 0 (in the plan) — do now.
2. Search Console + analytics (Tier 1) — do now, it's the measurement layer.
3. Branded-search consistency (Tier 1) — do within weeks.
4. `/cloudsforge` long-tail targeting (Tier 2) — best near-term ranking shot.
5. Content (Tier 4) — start whenever you can commit to consistency; stop if you can't.
6. Backlinks (Tier 5) — happens naturally once CloudsForge launches publicly.

**Reality check:** items 1–4 are a few days of focused work and give you a clean,
verifiable, branded-search-ready site. Items 5–6 are the months-long part. Don't expect
generic-term ranking until content + backlinks have compounded.
