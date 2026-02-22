"use client";
"use no memo";

import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

const defaultItems: GalleryHoverCarouselItem[] = [
  {
    id: "item-1",
    title: "Community Website & Shop – Barz Freak",
    summary:
      "From concept to launch, I spearheaded the end-to-end development of Barz Freak as a responsive, mobile-first website optimized for cross-browser compatibility and high-performance loading times, ensuring seamless user experiences across desktops, tablets, and smartphones.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/BarzFreakPoster.png",
  },
  {
    id: "item-2",
    title: "Pequity - B2B SaaS Application",
    summary:
      "At Pequity, a San Francisco-based equity management SaaS helping organizations achieve pay equity and transparent compensation, I served as UI/UX Developer from 2021 to September 2023. Leveraging 5+ years of frontend expertise (React.js, Vue.js, TypeScript, Tailwind/SCSS, API integrations), I delivered polished, high-converting interfaces while extending functionality with third-party tools and building automation scripts to power marketing at scale.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/PequityPoster.png",
  },
  {
    id: "item-3",
    title: "Marketing Portal for browser game alliance",
    summary:
      "I embarked on the exciting task of designing and developing a website for a browser game that revolves around alliances of players The objective was to create a personalized portal where players could be invited to join alliances.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/LegioGemina.png",
  },
  {
    id: "item-4",
    title: "Predictive Analytics",
    summary:
      "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/BarzFreakPoster.png",
  },
  {
    id: "item-5",
    title: "Neural Network Architecture",
    summary:
      "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
    url: "#",
    image:
      "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/LegioGemina.png",
  },
];

export default function GalleryHoverCarousel({
  heading = "Featured Projects",
  items = defaultItems,
}: {
  heading?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  return (
    <section className="bg-background py-16 md:py-24 overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mb-8 md:mb-14 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <h3 className="max-w-xl mx-2 text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            {heading}{" "}
            <span className="text-base text-muted-foreground lg:text-2xl">
              — Explore the collection of latest projects Darjan has been
              involved with
            </span>
          </h3>

          {/* Swipe hint */}
          <motion.div
            className="mt-4 md:mt-0 flex items-center gap-1.5 text-sm text-muted-foreground shrink-0"
            animate={{ x: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <span>swipe to explore</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </motion.div>
        </div>
      </div>

      {/* Carousel — full viewport width */}
      <Carousel opts={{ dragFree: true }} className="w-full">
        <CarouselContent className="ml-0 pl-6 lg:pl-8">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-[85vw] sm:basis-[55vw] md:basis-[420px] pr-5"
            >
              <Link
                href={item.url}
                className="group relative block h-[40vh] w-full"
              >
                <Card className="h-full w-full overflow-hidden rounded-2xl border-border/50">
                  {/* Image shrinks on hover to reveal text */}
                  <div className="relative h-full w-full transition-all duration-500 group-hover:h-[55%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 55vw, 420px"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Text panel slides up on hover */}
                  <div className="absolute bottom-0 left-0 w-full translate-y-full bg-background/95 px-4 pb-4 pt-3 backdrop-blur-sm transition-transform duration-500 group-hover:translate-y-0">
                    <h4 className="text-base font-semibold md:text-lg">
                      {item.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground md:text-base">
                      {item.summary}
                    </p>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-3 right-3 h-8 w-8 rounded-full transition-transform duration-300 group-hover:-rotate-45"
                      tabIndex={-1}
                    >
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
