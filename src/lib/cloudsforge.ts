/**
 * CloudsForge — centralized assets + case-study content.
 *
 * Single source of truth for the home FeaturedProduct section and the
 * /cloudsforge case study page. Swap asset paths here in one edit (e.g. when
 * migrating to Supabase, or when the motion-graphics demo lands).
 *
 * Positioning note: CloudsForge is built and shipped — no traction/revenue
 * claims anywhere. See FEATURED-PROJECT-PLAN.md (Q1=B).
 */

export const CF_LINKS = {
  site: "https://cloudsforge.com",
  buy: "https://cloudsmith32.gumroad.com/l/cloudsforge?wanted=true",
} as const;

export const CF_ASSETS = {
  logo: "/cloudsforge/logo.png",
  screenshots: {
    /** Cloud GPUs view — model picker, GPU price browser, live instance setup. */
    gpus: "/cloudsforge/screenshot-gpus.png",
    /** Job detail view — prompt, render params, generated output. */
    job: "/cloudsforge/screenshot-job.png",
  },
  /** Example generations from the CloudsForge site. */
  demoClips: [
    {
      src: "/cloudsforge/videos/gen-1.mp4",
      poster: "/cloudsforge/videos/gen-1.jpg",
    },
    {
      src: "/cloudsforge/videos/gen-2.mp4",
      poster: "/cloudsforge/videos/gen-2.jpg",
    },
    {
      src: "/cloudsforge/videos/gen-3.mp4",
      poster: "/cloudsforge/videos/gen-3.jpg",
    },
    {
      src: "/cloudsforge/videos/gen-4.mp4",
      poster: "/cloudsforge/videos/gen-4.jpg",
    },
  ],
  /**
   * Reserved slot for the upcoming motion-graphics demo. Drop the file in and
   * point `demoReel` at it — the page renders the slot as a placeholder until then.
   */
  demoReel: null as string | null,
} as const;

export const CF_META = {
  name: "CloudsForge",
  wordmark: "CloudsForge",
  tagline: "The Workstation for Open-Source AI",
  /** Soft status line — factual, no numbers (Q9a). */
  status: "Available now · Windows · macOS · Linux · $49 one-time",
  oneLiner:
    "I recently built a desktop app that rents you a cloud GPU and configures everything in a couple of clicks - so you can run open-source AI video models at the provider's own rate.",
  problem:
    "These models need data-center GPUs that cost $10k+ - hardware almost nobody owns. Renting one yourself means conda environments, CUDA mismatches, dependency conflicts, and multi-page install guides. The alternative is paying 2-3× markups to subscription tools.",
  solution:
    "CloudsForge connects to RunPod, shows real GPU prices, auto-configures the whole environment, and gives you a clean UI for the job queue, logs, and gallery. You pay the GPU provider directly. Zero markups, zero telemetry.",
} as const;

export const CF_TECH = [
  "Electron",
  "React",
  "TypeScript",
  "Node.js",
  "RunPod API",
  "GitHub Actions CI/CD",
  "Gumroad",
] as const;

/** The journey — what I did, framed as execution, not earnings (Q9). */
export const CF_JOURNEY = [
  {
    phase: "01",
    title: "Research & Design",
    body: "Found the gap - no friction-free desktop client for open-source AI video. Mapped the competition (Runway, Kling, Pika, raw terminal), then designed the full desktop workflow in Figma around one idea: simplicity with control.",
  },
  {
    phase: "02",
    title: "MVP Development",
    body: "Built the desktop app in Electron + React. Wired up the RunPod integration, a job queue with real-time log streaming, and a model manager supporting Open-Sora v2, Wan2.1, and HunyuanVideo.",
  },
  {
    phase: "03",
    title: "Launch & Ship",
    body: "Set up cross-platform builds and code signing through GitHub Actions, shipped on Windows / macOS / Linux, and handled distribution and licensing via Gumroad. One-time $49 - no subscription, ever.",
  },
] as const;

export const CF_LEARNINGS = [
  {
    kind: "Technical",
    title: "Desktop is its own discipline",
    body: "Auto-update strategy, cross-platform testing, code signing, and dependency management are problems the web never makes you solve.",
  },
  {
    kind: "Technical",
    title: "Cloud APIs are async-failure machines",
    body: "Job queuing, provider rate limits, network drops, state sync between local-first and cloud - error handling becomes the architecture.",
  },
  {
    kind: "Product",
    title: "Positioning is a feature",
    body: "Being explicit about what CloudsForge is NOT - not a model, not a provider, not a subscription - did more for clarity than any UI polish.",
  },
  {
    kind: "Founder",
    title: "Building is the smaller half",
    body: "Going from freelancer to founder means support, roadmap calls, and positioning - the code is necessary but it was never the whole job.",
  },
] as const;
