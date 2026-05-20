# darjan.dev — Copy Rewrite Plan for Claude Code

Run this plan from the project root:
`C:\Users\User\Desktop\DARJAN.DEV\business-website`

Each task has the exact file, the exact string to find, and the exact replacement.
Do them in order. No structural changes — copy only.

---

## 1. `src/app/layout.tsx` — Meta description + titles

**Find:**

```ts
const rootDescription =
  "Full-stack engineer who ships products end-to-end. I designed, built, and shipped CloudsForge - a desktop AI video workstation - solo. Available for founding roles, senior engineering, and select freelance work.";
```

**Replace with:**

```ts
const rootDescription =
  "Full-stack engineer who shipped a live AI desktop product solo. I build AI-powered features, full-stack products, and design-to-production frontends. Available for founding-team roles and senior contract work.";
```

---

**Find:**

```ts
  title: {
    template: "%s | Darjan.dev",
    default: "Darjan.dev - Full-Stack Engineer & Product Builder",
  },
```

**Replace with:**

```ts
  title: {
    template: "%s | Darjan.dev",
    default: "Darjan.dev - Full-Stack Engineer & AI Product Builder",
  },
```

---

**Find:**

```ts
    title: "Darjan - Full-Stack Engineer & Product Builder",
    description: rootDescription,
    images: [
      {
        url: siteUrl,
        width: 1200,
        height: 630,
        alt: "Darjan - Full-Stack Engineer & Product Builder",
      },
    ],
```

**Replace with:**

```ts
    title: "Darjan - Full-Stack Engineer & AI Product Builder",
    description: rootDescription,
    images: [
      {
        url: siteUrl,
        width: 1200,
        height: 630,
        alt: "Darjan - Full-Stack Engineer & AI Product Builder",
      },
    ],
```

---

**Find:**

```ts
    title: "Darjan - Full-Stack Engineer & Product Builder",
    description: rootDescription,
    images: siteUrl,
```

**Replace with:**

```ts
    title: "Darjan - Full-Stack Engineer & AI Product Builder",
    description: rootDescription,
    images: siteUrl,
```

---

## 2. `src/components/ui/hero-1.tsx` — Hero headline + sub-headline + CTAs

**Find:**

```tsx
<h1
  className={cn(
    "max-w-2xl text-balance text-center text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl lg:text-5xl shadow-3xl",
    "[text-shadow:0_0px_50px_color-mix(in_oklch,var(--color-foreground)_20%,transparent)]",
    "text-foreground/55",
  )}
>
  Seasoned{" "}
  <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent font-semibold">
    Full-Stack Engineer
  </span>{" "}
  <br /> building and shipping{" "}
  <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent font-semibold">
    real products
  </span>
  .
</h1>
```

**Replace with:**

```tsx
<h1
  className={cn(
    "max-w-2xl text-balance text-center text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl lg:text-5xl shadow-3xl",
    "[text-shadow:0_0px_50px_color-mix(in_oklch,var(--color-foreground)_20%,transparent)]",
    "text-foreground/55",
  )}
>
  I build{" "}
  <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent font-semibold">
    AI-powered products
  </span>{" "}
  <br /> and I&apos;ve already{" "}
  <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent font-semibold">
    shipped one
  </span>
  .
</h1>
```

---

**Find:**

```tsx
<p className="mt-6 max-w-md text-center text-sm text-muted-foreground md:text-base">
  Available for engineering positions, or building alongside founders solving
  real problems.
</p>
```

**Replace with:**

```tsx
<p className="mt-6 max-w-md text-center text-sm text-muted-foreground md:text-base">
  Full-stack engineer with 6+ years at startups. I work with founding teams who
  need someone who thinks in products, not tickets — and ships end-to-end
  without hand-holding.
</p>
```

---

**Find:**

```tsx
          <Button asChild>
            <Link href="/contact">Hire me</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cloudsforge">See what I built</Link>
          </Button>
```

**Replace with:**

```tsx
          <Button asChild>
            <Link href="/contact">Work with me</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cloudsforge">See what I shipped</Link>
          </Button>
```

---

## 3. `src/components/ui/featured-product-section.tsx` — CloudsForge section header

**Find:**

```tsx
<SectionTitleComponent
  prefix="recent activity: founded CloudsForge"
  header="I don't just ship features. I ship products."
>
  {CF_META.oneLiner}
</SectionTitleComponent>
```

**Replace with:**

```tsx
<SectionTitleComponent
  prefix="Proof, not promises"
  header="From and idea, over POC, to MVP and launch in less then 2 months, solo"
>
  {CF_META.oneLiner}
</SectionTitleComponent>
```

---

## 4. `src/components/ui/services-section.tsx` — Services data + section header

This file has three changes: the section title copy, and the `services` array.

### 4a. Section title copy

**Find:**

```tsx
<SectionTitleComponent
  prefix="Work With Me"
  header="I shipped my own product. I can ship yours."
>
  CloudsForge proves I execute end-to-end - design, code, DevOps, launch.
  I&apos;m available for founding roles and senior engineering, and I take on
  select freelance work too.
</SectionTitleComponent>
```

**Replace with:**

```tsx
<SectionTitleComponent
  prefix="Work With Me"
  header="Four things I'm actually good at."
>
  Not a commodity hire. I bring product thinking, AI integration experience, and
  6+ years of shipping at startups. Here&apos;s what that looks like in
  practice.
</SectionTitleComponent>
```

---

### 4b. Services array — full replacement

**Find:**

```ts
const services: ServiceData[] = [
  {
    icon: Zap,
    title: "Small Short-Term Projects",
    tagline: "Fixed pricing · starting from 200$  · Fast turnaround",
    description:
      "Ideal for one-off tasks like Figma to HTML conversions or responsive updates - scoped, priced upfront, delivered fast.",
    offerings: [
      "Figma to HTML / CSS / JS conversions",
      "Landing pages and marketing sites",
      "UI components and design systems",
      "Responsive website updates & optimizations",
      "React-based interactive features",
    ],
    badge: { text: "Most Popular", variant: "purple-subtle" },
    hoverScheme: "purple",
    showButtons: true,
    contactId: "short-term",
  },
  {
    icon: Clock,
    title: "Contract Per Hour",
    tagline: "Starting from 35$/h",
    description:
      "Ongoing support for complex features, API integrations, and UI/UX redesigns in SaaS environments - billed by the hour.",
    offerings: [
      "SaaS application development",
      "UI/UX redesigns",
      "Frontend product features",
      "API integrations and automations",
      "Corporate websites",
    ],
    badge: { text: "Best for Scale", variant: "blue-subtle" },
    hoverScheme: "blue",
    showButtons: true,
    contactId: "contract",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Features",
    tagline: "AI & Automation",
    description:
      "Integrating AI-driven features into web apps for smarter, more adaptive user experiences.",
    offerings: [
      "AI chat interfaces & assistants",
      "Smart content generation",
      "Personalization & recommendation engines",
      "LLM API integrations",
      "Predictive UI & intelligent forms",
      "Automated workflows",
    ],
    comingSoon: true,
    colSpan: true,
    badge: { text: "Coming Soon", variant: "amber-subtle" as const },
    titleColor: "#F39301",
    checkColor: "#371800",
    contactId: "ai",
  },
];
```

**Replace with:**

```ts
const services: ServiceData[] = [
  {
    icon: Sparkles,
    title: "AI Feature Integration",
    tagline: "I've shipped a live AI product — I know how this actually works",
    description:
      "I wire AI into your product correctly. Not just dropping in an API call, but architecting the prompting, state, error handling, and UX so it works in production.",
    offerings: [
      "LLM API integrations (OpenAI, Anthropic, open-source)",
      "AI chat interfaces & streaming UX",
      "Prompt architecture & context management",
      "AI-powered workflows and automations",
      "Personalization & recommendation engines",
      "Intelligent forms and adaptive UI",
    ],
    badge: { text: "Core Strength", variant: "amber-subtle" as const },
    colSpan: true,
    titleColor: "#F39301",
    checkColor: "#371800",
    contactId: "ai",
  },
  {
    icon: Zap,
    title: "Full-Stack Product Builds",
    tagline: "Fixed scope · $800–2,500 · 1–3 weeks",
    description:
      "From design to deployment. I handle frontend, backend, database, and infrastructure — so you're not juggling multiple contractors who don't talk to each other.",
    offerings: [
      "React / Next.js frontends",
      "Node.js backends and REST APIs",
      "Database design (Postgres, Supabase)",
      "Auth, payments, third-party integrations",
      "Vercel / AWS deployment",
    ],
    badge: { text: "Most Popular", variant: "purple-subtle" },
    hoverScheme: "purple",
    showButtons: true,
    contactId: "short-term",
  },
  {
    icon: Clock,
    title: "Senior Contract Work",
    tagline: "Starting from $50/hr · hourly or retainer",
    description:
      "Ongoing capacity for complex features, codebase rescue, or design-to-production frontend. I work well inside existing teams and messy codebases.",
    offerings: [
      "Design-to-React, pixel-perfect implementation",
      "Legacy codebase features & refactoring",
      "SaaS product frontend development",
      "Design system architecture",
      "Performance audits and improvements",
    ],
    badge: { text: "Best for Teams", variant: "blue-subtle" },
    hoverScheme: "blue",
    showButtons: true,
    contactId: "contract",
  },
];
```

---

## 5. `src/components/ui/footer.tsx` — Footer tagline

**Find:**

```tsx
<p className="mt-2 text-sm text-muted-foreground leading-relaxed opacity-60">
  Frontend freelancer crafting fast, pixel-perfect interfaces.
</p>
```

**Replace with:**

```tsx
<p className="mt-2 text-sm text-muted-foreground leading-relaxed opacity-60">
  Full-stack engineer. AI product builder. Available for contracts and founding
  roles.
</p>
```

---

## 6. `src/components/ui/testimonials-section.tsx` — Section copy + testimonial order

### 6a. Section title copy

**Find:**

```tsx
<SectionTitleComponent
  prefix="Testimonials"
  header="What my colleagues say about working with me"
>
  These are testimonials from real, top-tier industry professionals that I had
  the enormous pleasure of working with. Started as coworkers, but became
  friends that forever shaped me as a professional and a person, for which I am
  forever grateful.
  <br />
  <br />
  Thank you, where ever you might be today.
</SectionTitleComponent>
```

**Replace with:**

```tsx
<SectionTitleComponent
  prefix="Testimonials"
  header="From people who've actually worked with me"
>
  Real colleagues. Real teams. Startups, scale-ups, and everything in between.
  These aren&apos;t endorsements — they&apos;re from people who watched me ship.
</SectionTitleComponent>
```

---

### 6b. Reorder testimonials — Ji Tae and Warren first

**Find:**

```ts
const testimonials: StaggerTestimonial[] = [
  {
    tempId: 0,
    name: "Seena Mojahedi",
```

**Replace with** — move the entire array so Ji Tae (tempId 2) is index 0, Warren (tempId 1) is index 1, Seena (tempId 0) is index 2, then the rest unchanged. Full replacement:

```ts
const testimonials: StaggerTestimonial[] = [
  {
    tempId: 0,
    name: "Ji Tae Kim",
    role: "Product Designer",
    company: "Uber",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/JosephKim.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan is an engineer who thinks like a designer. He can turn any design into a flawless and stunning feature that delights your end users.",
    audio: "/Voices/JiTaeKim.mp3",
  },
  {
    tempId: 1,
    name: "Warren Lebovics",
    role: "Co-Founder",
    company: "Pequity",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Warren.png",
    date: "March 2023",
    relationship: "Managed Darjan directly",
    quote:
      "Darjan is a designer's dream frontend partner. Any team is lucky to have him.",
    audio: "/Voices/Warren.mp3",
  },
  {
    tempId: 2,
    name: "Seena Mojahedi",
    role: "Director",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Seena.png",
    date: "May 2024",
    relationship: "Managed Darjan directly",
    quote:
      "Simply put, Darjan is EXCELLENT. He shows up with poise and positive energy, is self-motivated, and gets stuff done.",
    audio: "/Voices/Seena.mp3",
  },
  {
    tempId: 3,
    name: "Jeff Auston",
    role: "Engineering Lead",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Jeff.png",
    date: "March 2023",
    relationship: "Managed Darjan directly",
    quote:
      "Darjan worked with our team for more than 2 years. I would hire Darjan again - highly recommend him for any team looking for a strong engineer.",
    audio: "/Voices/Jeff.mp3",
  },
  {
    tempId: 4,
    name: "Harsh Patel",
    role: "Product Manager",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Harsh.png",
    date: "April 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan is a PM's engineer. Right from backlog grooming to product launch he was a terrific partner, customer centric and delivered big time.",
    audio: "/Voices/Harsh.mp3",
  },
  {
    tempId: 5,
    name: "Mohamed Anwer",
    role: "Senior Software Engineer",
    company: "Pequity",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Mohamed.png",
    date: "April 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "I was consistently impressed by his productivity and speed. His ability to solve complex problems in a timely manner is truly exceptional.",
    audio: "/Voices/Mohamed.mp3",
  },
  {
    tempId: 6,
    name: "Colby Dugger",
    role: "Marketing Lead",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Colby.png",
    date: "May 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "The turnaround time and cross-functional collaboration were unmatched. I highly recommend him to anyone looking for a top-tier developer.",
    audio: "/Voices/Colby.mp3",
  },
  {
    tempId: 7,
    name: "Joseph Lee",
    role: "Senior Full Stack Engineer",
    company: "BetterComp",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/JosephLee.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan fearlessly took on difficult frontend assignments and skillfully translated detailed Figma designs into functioning code.",
    audio: "/Voices/Joseph.mp3",
  },
  {
    tempId: 8,
    name: "Ioana Manoliu",
    role: "Senior Software Engineer",
    company: "ADP",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Ioana.png",
    date: "March 2023",
    relationship: "Senior to Darjan",
    quote:
      "If anyone is searching for the absolute frontend rockstar, I have to recommend Darjan! He makes frontends look pixel perfect in the most efficient manner.",
    audio: "/Voices/Ioana.mp3",
  },
  {
    tempId: 9,
    name: "Giannis Koutsaftakis",
    role: "Staff Frontend Engineer",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Giannis.png",
    date: "March 2023",
    relationship: "Senior to Darjan",
    quote:
      "He is an exceptional front-end developer with excellent proficiency in Python too. He has delivered high-quality projects that have exceeded our clients' expectations.",
    audio: "/Voices/Giannis.mp3",
  },
  {
    tempId: 10,
    name: "Petar Ćevriz",
    role: "Software Engineer",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Petar.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "Darjan was instrumental in delivering complex frontend projects and his work exceeded expectations.",
    audio: "/Voices/Petar.mp3",
  },
  {
    tempId: 11,
    name: "Milos Glendza",
    role: "Software Developer",
    company: "ServalIT",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/People/Milos.png",
    date: "March 2023",
    relationship: "Worked with Darjan on the same team",
    quote:
      "He was the go-to guy when things needed to be perfect on the UI side, but had no fear when things needed to be done outside his expertise as well.",
    audio: "/Voices/Milos.mp3",
  },
];
```

---

## Summary of what changed and why

| File                           | Change                                   | Why                                                                                                                                 |
| ------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `layout.tsx`                   | Meta description + title                 | Old description buried the AI angle; now leads with it                                                                              |
| `hero-1.tsx`                   | Headline, sub-headline, CTA labels       | "Seasoned Full-Stack Engineer" is generic; new headline leads with the differentiator                                               |
| `featured-product-section.tsx` | Section prefix + header                  | "Proof, not promises" frames CloudsForge as credibility, not a side project                                                         |
| `services-section.tsx`         | All three service cards + section header | AI card was "Coming Soon" — you've shipped one. Reordered so AI is first and full-width. Hourly rate corrected to $50/hr floor.     |
| `footer.tsx`                   | Tagline                                  | "Frontend freelancer" contradicts the full-stack claim everywhere else                                                              |
| `testimonials-section.tsx`     | Section copy + testimonial order         | Ji Tae ("engineer who thinks like a designer") and Warren ("designer's dream") are your two strongest quotes — they should be first |

## One thing Claude Code cannot fix

The `ServicesSection` is currently commented out in `HomePage.tsx`:

```tsx
{
  /* <ServicesSection /> */
}
```

You should uncomment this once the services copy is updated — the new version is worth showing. That's a one-line change in `src/app/pages/Home/HomePage.tsx`.
