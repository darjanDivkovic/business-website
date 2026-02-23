"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Code2, Rocket, ShieldCheck, Clock, MessageSquare } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import SectionTitleComponent from "./SectionTitleComponent";

// ─── Video base ───────────────────────────────────────────────────────────────

const BASE =
  "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/Trust/";

// ─── Data ─────────────────────────────────────────────────────────────────────

const items = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Code2 className="h-4 w-4" />,
    title: "Full-Stack, End to End",
    description:
      "From pixel-perfect frontends to robust backends and databases — I handle the full stack so you never have to juggle multiple contractors.",
    video: BASE + "FullStack.mp4",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Clock className="h-4 w-4" />,
    title: "5+ Years in the Trenches",
    description:
      "Half a decade building production apps for startups and scale-ups. I've seen what breaks at scale — and how to avoid it from day one.",
    video: BASE + "FiveYears.mp4",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Rocket className="h-4 w-4" />,
    title: "Ship Fast, Break Nothing",
    description:
      "Speed without chaos. I move quickly and ship working software by keeping codebases clean, tested, and easy to iterate on. Your deadline is real — I treat it that way.",
    video: BASE + "ShipFast.mp4",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <MessageSquare className="h-4 w-4" />,
    title: "You'll Always Know Where Things Stand",
    description:
      "No disappearing acts. Async-first updates, clear timelines, and honest feedback when something needs to change.",
    video: BASE + "KnowWhereYouStand.mp4?v=2",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "Built to Last, Not Just to Launch",
    description:
      "I write code I'd be happy to maintain a year from now. Good architecture, sensible abstractions, and zero cowboy deployments.",
    video: BASE + "BultToLast.mp4",
  },
];

// ─── VideoBackground ──────────────────────────────────────────────────────────
// Plays the video, and on each natural end:
//   1. fades opacity to 0 (700ms CSS transition)
//   2. restarts from the beginning
//   3. fades back to full opacity

function VideoBackground({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    ref.current?.play().catch(() => {
      // Browser may pause background/power-saving media — silently ignore
    });
  }, []);

  const handleEnded = useCallback(() => {
    setFading(true); // trigger fade-to-black
    setTimeout(() => {
      if (ref.current) {
        ref.current.currentTime = 0;
        ref.current.play().catch(() => {
          // Browser may pause background/power-saving media — silently ignore
        });
      }
      setFading(false); // fade back in
    }, 750); // slightly longer than the 700ms CSS transition
  }, []);

  return (
    <>
      <video
        ref={ref}
        src={src}
        muted
        playsInline
        onEnded={handleEnded}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          fading ? "opacity-0" : "opacity-[0.48]",
        )}
      />
      {/* Gradient overlay — heavier at the bottom where the text lives */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/55 to-background/10" />
    </>
  );
}

// ─── GridItem ─────────────────────────────────────────────────────────────────

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  video: string;
}

const GridItem = ({ area, icon, title, description, video }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          {/* Video + overlay sit behind everything */}
          <VideoBackground src={video} />

          {/* Content on top */}
          <div className="relative z-10 flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted/80 p-2 backdrop-blur-sm">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

export function AboutTrustSection() {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionTitleComponent
        prefix="Why work with me"
        header="A developer you can actually rely on"
      >
        I&apos;m Darjan — a freelance developer who builds clean, fast, and
        maintainable web products. Here&apos;s what that means in practice.
      </SectionTitleComponent>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {items.map((item) => (
          <GridItem
            key={item.title}
            area={item.area}
            icon={item.icon}
            title={item.title}
            description={item.description}
            video={item.video}
          />
        ))}
      </ul>
    </section>
  );
}
