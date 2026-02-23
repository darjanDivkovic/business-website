import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RocketIcon, ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

export function HeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl h-[88vh] md:h-[70vh] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://letzmwekswulldwvtsto.supabase.co/storage/v1/object/public/business-website-images/BackgroundBeam.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mobile-only: dark top gradient so the sticky header stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent md:hidden"
      />

      {/* Blurred black circles — soften top-left and top-right corners
          so the video loop seam and edges blend into the page background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-[80vh] rounded-full bg-black hidden md:block"
        style={{ filter: "blur(72px)", opacity: 0.88 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-[60vh] rounded-full bg-black hidden md:block"
        style={{ filter: "blur(72px)", opacity: 0.88 }}
      />

      <div
        className="pointer-events-none absolute bottom-[-50px] left-[-50px] h-[30vh] w-[30vh] rounded-full blur-xl hidden md:block"
        style={{ background: "linear-gradient(to bottom, transparent, black)" }}
      />

      <div
        className="pointer-events-none absolute bottom-[0px] right-[-50px] h-[40vh] w-[25vh] rounded-full blur-xl hidden md:block"
        style={{ background: "linear-gradient(to bottom, transparent, black)" }}
      />

      {/* Outer vertical rail lines — track the max-w-6xl container edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-6xl lg:block"
      >
        <div className="absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/10 [mask-image:linear-gradient(to_bottom,transparent_80%,black)]" />
        <div className="absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/10 [mask-image:linear-gradient(to_bottom,transparent_80%,black)]" />
      </div>

      {/* Main content — padded to match section standard */}
      <div className="relative flex flex-col items-left justify-center gap-5 px-6 pt-32 pb-28 lg:px-8">
        {/*
          Inner decorative lines — sit at the padding boundary.
          px-6 (24px) on mobile → left-6/right-6
          lg:px-8 (32px) on desktop → lg:left-8/lg:right-8
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-[1] size-full overflow-hidden mt-[5vh]"
        >
          <div className="absolute inset-y-0 left-6 w-px bg-gradient-to-b from-transparent via-border to-border lg:left-8 " />
          <div className="absolute inset-y-0 right-6 w-px bg-gradient-to-b from-transparent via-border to-border lg:right-8" />
          <div className="absolute inset-y-0 left-10 w-px bg-gradient-to-b from-transparent via-border/40 to-border/40 lg:left-14" />
          <div className="absolute inset-y-0 right-10 w-px bg-gradient-to-b from-transparent via-border/40 to-border/40 lg:right-14" />
        </div>

        <a
          className={cn(
            "group flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow mt-10",
            "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards transition-all delay-500 duration-500 ease-out",
          )}
          href="#link"
        >
          <RocketIcon className="size-3 text-muted-foreground" />
          <span className="text-xs">shipped new features!</span>
          <span className="block h-5 border-l" />
          <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
        </a>

        <h1
          className={cn(
            "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards text-balance text-left text-4xl tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl",
            "[text-shadow:0_0px_50px_color-mix(in_oklch,var(--color-foreground)_20%,transparent)]",
          )}
        >
          High-Quality Solutions. <br /> Real results.{" "}
          <br className="md:hidden" /> No fluff.
        </h1>

        <p className="animate-in fade-in opacity-60">
          At prices you can actually afford <br className="md:hidden" /> and
          validate
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-4 flex items-left w-full md:w-unset pr-12 flex-col md:flex-row mt-16 md:mt-0 gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out absolute bottom-[-40px] md:bottom-0">
          <Button variant="outline">Book a Call</Button>
          <Button>Get started</Button>
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
