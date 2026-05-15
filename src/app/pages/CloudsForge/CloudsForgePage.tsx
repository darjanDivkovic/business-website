import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Play } from "lucide-react";
import { Header } from "@/components/ui/header-1";
import { AppScreenshot } from "@/components/ui/app-screenshot";
import {
  CF_ASSETS,
  CF_JOURNEY,
  CF_LEARNINGS,
  CF_LINKS,
  CF_META,
  CF_TECH,
} from "@/lib/cloudsforge";

/**
 * CloudsForge case study — cinematic treatment.
 *
 * Its own world (deep black, film grain, letterbox framing, scrubber motifs,
 * CloudsForge brand orange/yellow as the single light source, Syne/DM Sans/
 * JetBrains Mono) — tethered to the main site by the shared Header + Footer.
 *
 * Voice: first person, Darjan. "I built this solo." No traction claims.
 */
export function CloudsForgePage() {
  return (
    <div className="flex w-full flex-col bg-cf-bg text-white/85">
      <Header />

      {/* ── Cinematic overlay — fixed, covers the whole page ── */}
      <FilmGrain />

      <main className="relative grow overflow-hidden">
        <Hero />
        <Problem />
        <Solution />
        <Journey />
        <TechStack />
        <DemoReel />
        <Learnings />
        <Closing />
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Cinematic overlays
   ───────────────────────────────────────────────────────────────────────────── */

function FilmGrain() {
  // Inline SVG fractal noise — tiled, animated by the cf-grain keyframe.
  const noise =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] animate-cf-grain opacity-[0.05] mix-blend-overlay"
      style={{ backgroundImage: noise, backgroundSize: "160px 160px" }}
    />
  );
}

/** App-style section label — monospace, tracked, mirrors the CloudsForge UI. */
function Cue({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-white/35">
      <span className="text-cf-orange">{index}</span>
      <span className="h-px w-8 bg-white/15" />
      <span>{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   1. Hero
   ───────────────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-24 lg:px-8">
      {/* Warm projector glow from below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70vh] bg-[radial-gradient(ellipse_at_bottom,rgba(212,93,19,0.22),transparent_65%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full bg-cf-yellow/5 blur-[160px]" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-3 animate-cf-reveal">
          <Image
            src={CF_ASSETS.logo}
            alt="CloudsForge"
            width={52}
            height={52}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-white">
            {CF_META.wordmark}
          </span>
          <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cf-yellow/70">
            Case Study
          </span>
        </div>

        <h1
          className="mt-6 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-white animate-cf-reveal sm:text-4xl lg:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          I built an AI video workstation -{" "}
          <span className="bg-gradient-to-r from-cf-orange to-cf-yellow bg-clip-text text-transparent">
            design through distribution.
          </span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/60 animate-cf-reveal md:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {CF_META.oneLiner}
        </p>

        <div
          className="mt-8 flex flex-wrap items-center gap-4 animate-cf-reveal"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href={CF_LINKS.site}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-cf-orange px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(212,93,19,0.4)] transition-shadow hover:shadow-[0_0_40px_rgba(212,93,19,0.6)]"
          >
            Visit cloudsforge.com
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
            {CF_META.status}
          </span>
        </div>

        {/* Headline screenshot — framed like a film still */}
        <figure
          className="relative mt-12 animate-cf-reveal"
          style={{ animationDelay: "320ms" }}
        >
          <AppScreenshot
            src={CF_ASSETS.screenshots.job}
            alt="CloudsForge - a finished text-to-video job with prompt, render parameters, and output"
            chromeLabel="CloudsForge - Studio · Job #3"
            sizes="(max-width: 1024px) 100vw, 1100px"
            priority
          />
        </figure>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   2. The Problem
   ───────────────────────────────────────────────────────────────────────────── */

function Problem() {
  const friction = [
    "no $10k+ GPU on hand",
    "conda environments",
    "CUDA mismatches",
    "dependency conflicts",
    "multi-page install guides",
    "2–3× GPU markups",
  ];
  return (
    <section className="relative border-t border-white/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Cue index="01" label="The Problem" />
        <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Running open-source AI is{" "}
          <span className="text-cf-orange">unnecessarily hard.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55">
          {CF_META.problem} The capability is open and free - the path to it is
          the wall.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {friction.map((item, i) => (
            <li
              key={item}
              className="group rounded-lg border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-cf-orange/30"
            >
              <span className="font-mono text-xs text-white/30">
                ERR_{String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm text-white/70 group-hover:text-white/90">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   3. The Solution
   ───────────────────────────────────────────────────────────────────────────── */

function Solution() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Cue index="02" label="The Solution" />
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Four steps.{" "}
              <span className="bg-gradient-to-r from-cf-orange to-cf-yellow bg-clip-text text-transparent">
                No terminal required.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              {CF_META.solution}
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Connects to RunPod - real GPU prices, you pay the provider directly",
                "Auto-configures dependencies, models, and environments",
                "Clean UI for the job queue, real-time logs, and gallery",
                "Local-first, zero telemetry, lifetime ownership",
              ].map((point, i) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-cf-yellow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/70">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <AppScreenshot
            src={CF_ASSETS.screenshots.gpus}
            alt="CloudsForge - choose a model, pick a GPU by real price, watch the instance set up live"
            chromeLabel="CloudsForge - Cloud GPUs"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   4. The Journey — scrubber / timeline motif
   ───────────────────────────────────────────────────────────────────────────── */

function Journey() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Cue index="03" label="The Journey" />
        <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Ideation to ship - <span className="text-cf-yellow">solo.</span>
        </h2>

        {/* Scrubber track */}
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-3 hidden h-px bg-white/10 md:block" />
          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {CF_JOURNEY.map((step) => (
              <div key={step.phase} className="relative">
                {/* Playhead marker */}
                <div className="flex items-center gap-3 md:block">
                  <span className="relative z-10 flex size-7 items-center justify-center rounded-full border border-cf-orange/40 bg-cf-bg font-mono text-[11px] text-cf-orange">
                    {step.phase}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   5. Tech Stack
   ───────────────────────────────────────────────────────────────────────────── */

function TechStack() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Cue index="04" label="Tech Stack" />
        <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          The full spectrum - one person.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55">
          Frontend, desktop runtime, cloud orchestration, build pipeline,
          payments. No handoffs, no gaps.
        </p>

        <ul className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {CF_TECH.map((tech, i) => (
            <li
              key={tech}
              className="group flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-cf-yellow/30 hover:bg-cf-yellow/[0.04]"
            >
              <span className="font-mono text-[11px] text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-white/75 group-hover:text-white">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   6. Demo Reel — reserved slot for the upcoming motion-graphics demo
   ───────────────────────────────────────────────────────────────────────────── */

function DemoReel() {
  const hasReel = Boolean(CF_ASSETS.demoReel);

  return (
    <section className="relative isolate overflow-hidden border-t border-white/5 px-6 py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(243,188,71,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-6xl">
        <Cue index="05" label="Demo Reel" />

        <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-black">
          {hasReel ? (
            <video
              className="aspect-video w-full"
              src={CF_ASSETS.demoReel as string}
              controls
              playsInline
              poster={CF_ASSETS.demoClips[0]?.poster}
            />
          ) : (
            /* Reserved slot — labeled placeholder until the motion-graphics demo lands */
            <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-4">
              {/* Sampled stills from real generations, dimmed, as a backdrop */}
              <div className="absolute inset-0 grid grid-cols-4 opacity-25">
                {CF_ASSETS.demoClips.map((clip) => (
                  <Image
                    key={clip.poster}
                    src={clip.poster}
                    alt=""
                    width={480}
                    height={270}
                    className="h-full w-full object-cover"
                    sizes="25vw"
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative flex size-16 items-center justify-center rounded-full border border-cf-orange/40 bg-cf-orange/10">
                <Play className="size-6 fill-cf-orange text-cf-orange" />
              </div>
              <p className="relative text-xl font-semibold text-white">
                Motion-graphics demo - coming soon
              </p>
              <p className="relative max-w-md text-center text-sm text-white/45">
                A full walkthrough reel is in production. The frames behind this
                slot are real CloudsForge generations.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   7. What I Learned
   ───────────────────────────────────────────────────────────────────────────── */

function Learnings() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Cue index="06" label="What I Learned" />
        <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          What shipping a product taught me.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {CF_LEARNINGS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/8 bg-white/[0.02] p-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cf-yellow/80">
                {item.kind}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   8. Closing — soft status + hire-me CTA
   ───────────────────────────────────────────────────────────────────────────── */

function Closing() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/5 px-6 py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60vh] bg-[radial-gradient(ellipse_at_bottom,rgba(212,93,19,0.25),transparent_65%)]" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/35">
          {CF_META.status}
        </p>
        <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          I built this end-to-end.{" "}
          <span className="bg-gradient-to-r from-cf-orange to-cf-yellow bg-clip-text text-transparent">
            Now I want to do it with your team.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
          Design, frontend, backend, DevOps, payments - I&apos;ve carried a real
          product across all of it, solo. I&apos;m available for founding roles,
          senior engineering, and select freelance work.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cf-orange px-6 py-3 text-sm font-semibold text-white shadow-[0_0_36px_rgba(212,93,19,0.5)] transition-shadow hover:shadow-[0_0_48px_rgba(212,93,19,0.7)]"
          >
            Let&apos;s talk
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={CF_LINKS.site}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            Explore CloudsForge
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
