"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RocketIcon, ArrowRightIcon } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* Outer vertical rail lines — track the max-w-6xl container edges */}

      {/* Main content — padded to match section standard */}
      <div className="relative flex flex-col items-center justify-center gap-5 px-6 pb-28 lg:px-8">
        {/*
          Inner decorative lines — sit at the padding boundary.
          px-6 (24px) on mobile → left-6/right-6
          lg:px-8 (32px) on desktop → lg:left-8/lg:right-8
        */}

        <Image
          src="/darjan.png"
          alt="Darjan"
          width={80}
          height={80}
          priority
          className="size-16 rounded-full outline outline-2 outline-white/75 [outline-offset:-1px] object-cover [object-position:calc(3px)_top] shadow-lg md:size-20 border-4 border-white/40"
        />

        <Link
          className="group flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow mt-4 hidden md:visible"
          href="/cloudsforge"
        >
          <RocketIcon className="size-3 text-muted-foreground" />
          <span className="text-xs">
            CloudsForge - built &amp; shipped solo
          </span>
          <span className="block h-5 border-l" />
          <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
        </Link>

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

        <p className="mt-6 max-w-md text-center text-sm text-muted-foreground md:text-base">
          Available for engineering positions, or building alongside founders
          solving real problems.
        </p>

        <div className="flex items-center justify-center w-full md:w-unset flex-col md:flex-row mt-16 md:mt-0 gap-3 pt-2 absolute bottom-[-40px] md:bottom-0">
          <Button asChild>
            <Link href="/contact">Hire me</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cloudsforge">See what I built</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function LogosSection() {
  return (
    <section className="relative border-t border-b">
      <div className="mx-auto max-w-6xl space-y-4 px-6 py-8 lg:px-8 ">
        <h2 className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-md opacity-20">
          Trusted by <span className="text-foreground">Companies</span> around
          the globe
        </h2>
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}

const logos = [
  {
    src: "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/Pequity.png",
    alt: "Pequity Logo",
  },
  {
    src: "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/Kandor.png",
    alt: "Kandor Logo",
  },
  {
    src: "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/Kinnect.png",
    alt: "Kinnect Logo",
  },
  {
    src: "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/InnoScripta.png",
    alt: "InnoScripta Logo",
  },
  {
    src: "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/BildIT.png",
    alt: "Bild-IT Logo",
  },
  {
    src: "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/BarzFreak.png",
    alt: "Barz Freak Logo",
  },
  {
    src: "https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/LegioGeminaLogo.png",
    alt: "Legio Gemina Logo",
  },
];
