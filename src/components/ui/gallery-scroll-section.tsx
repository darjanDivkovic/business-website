"use client";
"use no memo";

import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import SectionTitleComponent from "./SectionTitleComponent";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    id: "item-1",
    title: "Community Website & Shop – Barz Freak",
    summary:
      "From concept to launch, I spearheaded the end-to-end development of Barz Freak as a responsive, mobile-first website optimized for cross-browser compatibility and high-performance loading times.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/BarzFreakPoster.png",
  },
  {
    id: "item-2",
    title: "Pequity – B2B SaaS Application",
    summary:
      "At Pequity, a San Francisco-based equity management SaaS, I served as UI/UX Developer delivering polished, high-converting interfaces while extending functionality with third-party tools.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/PequityPoster.png",
  },
  {
    id: "item-3",
    title: "Marketing Portal for Browser Game Alliance",
    summary:
      "Designed and developed a personalized portal for browser-game alliances — where players could be invited, track rankings, and manage their alliance profile.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/LegioGemina.png",
  },
  {
    id: "item-4",
    title: "Predictive Analytics Dashboard",
    summary:
      "Advanced forecasting UI that visualises historical data to surface future trends — helping teams make confident, data-driven decisions at a glance.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/BarzFreakPoster.png",
  },
  {
    id: "item-5",
    title: "Neural Network Architecture Explorer",
    summary:
      "Interactive deep-learning model visualiser built with React — letting engineers inspect layer weights, activation maps, and gradient flows in real time.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/LegioGemina.png",
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export function GalleryScrollSection() {
  return (
    <section className="bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-left mb-8">
            <SectionTitleComponent
              className="text-left mb-0"
              prefix="PREVIOUS WORK"
              header="Featured Solutions"
            >
              — Explore the collection of latest projects Darjan has been
              involved with
            </SectionTitleComponent>

            {/* Swipe hint */}
            <motion.div
              className="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0 pb-1"
              animate={{ x: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            >
              <span>swipe to explore</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </motion.div>
          </div>
        }
      >
        {/* Inner padding creates breathing room from the card border */}
        <div className="relative w-full h-full py-4 md:py-5">
          {/* Left edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-background to-transparent" />
          {/* Right edge fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

          <Carousel
            opts={{ dragFree: true }}
            className="w-full h-full [&>div]:h-full"
          >
            <CarouselContent className="ml-0 pl-4 md:pl-6 h-full">
              {projects.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-[82%] sm:basis-[52%] md:basis-[300px] pr-4 h-full"
                >
                  <Link
                    href={item.url}
                    className="group relative flex flex-col h-full w-full"
                  >
                    {/* Outer border wrapper — GlowingEffect lives here */}
                    <div className="relative flex flex-col h-full w-full rounded-[1.25rem] border-[0.75px] border-border p-1.5">
                      <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                      />
                      {/* Inner card */}
                      <div className="relative flex flex-col h-full w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
                        {/* Fixed-ratio image — never stretches beyond natural proportions */}
                        <div className="relative w-full aspect-[4/3] shrink-0 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 82vw, (max-width: 768px) 52vw, 300px"
                            quality={95}
                            priority={item.id === "item-1"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>

                        {/* Text panel — always visible below image */}
                        <div className="relative flex flex-col grow px-4 py-3 border-t border-white/8">
                          <h4 className="text-sm font-semibold md:text-base leading-snug line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="mt-1.5 text-xs text-muted-foreground md:text-sm line-clamp-2 grow">
                            {item.summary}
                          </p>
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute bottom-3 right-3 h-7 w-7 rounded-full transition-transform duration-300 group-hover:-rotate-45"
                            tabIndex={-1}
                          >
                            <ArrowRight className="size-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </ContainerScroll>
    </section>
  );
}
