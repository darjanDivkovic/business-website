"use client";
"use no memo";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/lib/utils";

export type CarouselApi = UseEmblaCarouselType[1];

type CarouselContextValue = {
  api: CarouselApi;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

type CarouselProps = React.ComponentProps<"div"> & {
  opts?: Parameters<typeof useEmblaCarousel>[0];
  setApi?: (api: CarouselApi) => void;
};

/**
 * Carousel — the viewport (overflow: hidden) wraps children directly.
 * CarouselContent adds the inner flex container; CarouselItem handles each slide.
 */
function Carousel({ children, className, opts, setApi, ...props }: CarouselProps) {
  const [emblaRef, api] = useEmblaCarousel({ axis: "x", ...opts });

  React.useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  return (
    <CarouselContext.Provider value={{ api }}>
      <div className={cn("relative", className)} {...props}>
        {/* Embla viewport — ref lives here, inside the same component */}
        <div ref={emblaRef} className="overflow-hidden">
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex", className)} {...props}>
      {children}
    </div>
  );
}

function CarouselItem({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Carousel, CarouselContent, CarouselItem };