"use client";

import {
  Code2,
  Rocket,
  ShieldCheck,
  Clock,
  MessageSquare,
  Layers,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const items = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Code2 className="h-4 w-4" />,
    title: "Full-Stack, End to End",
    description:
      "From pixel-perfect frontends to robust backends and databases — I handle the full stack so you never have to juggle multiple contractors.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Clock className="h-4 w-4" />,
    title: "5+ Years in the Trenches",
    description:
      "Half a decade building production apps for startups and scale-ups. I've seen what breaks at scale — and how to avoid it from day one.",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Rocket className="h-4 w-4" />,
    title: "Ship Fast, Break Nothing",
    description:
      "Speed without chaos. I move quickly and ship working software by keeping codebases clean, tested, and easy to iterate on. Your deadline is real — I treat it that way.",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <MessageSquare className="h-4 w-4" />,
    title: "You'll Always Know Where Things Stand",
    description:
      "No disappearing acts. Async-first updates, clear timelines, and honest feedback when something needs to change.",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "Built to Last, Not Just to Launch",
    description:
      "I write code I'd be happy to maintain a year from now. Good architecture, sensible abstractions, and zero cowboy deployments.",
  },
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
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
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
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

export function AboutTrustSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Why work with me
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
          A developer you can actually rely on
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          I&apos;m Darjan — a freelance developer who builds clean, fast, and
          maintainable web products. Here&apos;s what that means in practice.
        </p>
      </div>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {items.map((item) => (
          <GridItem
            key={item.title}
            area={item.area}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}
