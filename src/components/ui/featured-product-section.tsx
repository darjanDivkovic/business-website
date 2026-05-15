"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { AppScreenshot } from "@/components/ui/app-screenshot";
import { StarButton } from "@/components/ui/star-button";
import { SectionTitleComponent } from "./SectionTitleComponent";
import { CF_ASSETS, CF_META } from "@/lib/cloudsforge";

type RevealState = "hidden" | "visible" | "exited";

/**
 * FeaturedProduct — home page section, top spot (founder credibility first).
 *
 * Scroll behavior: the section pins (sticky) and a second screenshot slides
 * in horizontally from the right, partially overlaying the first
 * (cards-stagger). The full case study lives on /cloudsforge.
 */
export function FeaturedProductSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Same y+opacity reveal as ScrollRevealSection on entry, but exit is gated
  // by scroll progress: as soon as the pin nears its end the section fades to
  // 0 opacity (no y-travel on exit). Scrolling back up restores it to 1.
  const REVEAL_TRAVEL = 180;
  const EXIT_PROGRESS = 0.9;
  const inView = useInView(containerRef, { amount: 0.15 });
  const [pinEnding, setPinEnding] = useState(false);
  const [revealState, setRevealState] = useState<RevealState>("hidden");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPinEnding(latest >= EXIT_PROGRESS);
  });

  useEffect(() => {
    if (pinEnding) {
      setRevealState("exited");
      return;
    }
    if (inView) {
      setRevealState("visible");
      return;
    }
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2;
    setRevealState(centerOffset < window.innerHeight / 2 ? "exited" : "hidden");
  }, [inView, pinEnding]);

  const revealVariants = {
    hidden: { opacity: 0, y: REVEAL_TRAVEL },
    visible: { opacity: 1, y: 0 },
    exited: { opacity: 0, y: 0 },
  };

  // Section pins immediately (sticky). Slide-in starts shortly after pin so
  // the horizontal motion feels like a key beat, not a delayed payoff.
  const SLIDE_START = 0.12;
  const SLIDE_END = 0.6;

  // Second screenshot slides in from off-screen-right, lands with a small
  // right-shift so the first card peeks behind it on the left. Final offset
  // is intentionally small (~3%) so the second card's right edge never goes
  // past the viewport — both cards stay fully visible at natural size.
  const secondX = useTransform(
    scrollYProgress,
    [SLIDE_START, SLIDE_END],
    ["105%", "3%"],
  );
  // First card stays put — slight scale-down only, for a layered feel.
  const firstScale = useTransform(
    scrollYProgress,
    [SLIDE_START, SLIDE_END],
    [1, 0.97],
  );

  return (
    <section
      ref={containerRef}
      className="relative w-screen"
      style={{ height: "200vh" }}
    >
      <motion.div
        className="sticky top-14 flex h-screen w-full flex-col overflow-hidden pt-10 pb-12"
        initial="hidden"
        animate={revealState}
        variants={revealVariants}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div className="flex-row sm:flex-col items-center justify-between gap-8 px-6 lg:px-[14%]">
          <SectionTitleComponent
            prefix="recent activity: founded CloudsForge"
            header="I don't just ship features. I ship products."
          >
            {CF_META.oneLiner}
          </SectionTitleComponent>

          <div className="flex shrink-0 justify-center">
            <StarButton
              onClick={() => router.push("/cloudsforge")}
              onMouseEnter={() => router.prefetch("/cloudsforge")}
              borderWidth={3}
              className="h-12 px-6 text-base"
            >
              See how I built it
              <ArrowRight className="size-4" />
            </StarButton>
          </div>
        </div>

        {/* Tilted 3D stack of CloudsForge UIs. Second card slides in from the right. */}
        <div className="relative mt-12 sm:mt-6 flex-1 overflow-hidden [perspective:2000px] md:mt-10">
          <div className="origin-top transform-gpu [transform:rotateX(16deg)]">
            <div className="relative mx-auto w-full max-w-[1400px] [mask-image:linear-gradient(to_bottom,black_68%,transparent_100%)]">
              {/* First screenshot — base layer */}
              <motion.div
                style={{ scale: firstScale }}
                className="relative origin-center"
              >
                <AppScreenshot
                  src={CF_ASSETS.screenshots.gpus}
                  alt="CloudsForge - Cloud GPU browser and live instance setup"
                  chromeLabel="CloudsForge - Studio"
                  sizes="(max-width: 1280px) 100vw, 1400px"
                  shadow="none"
                />
              </motion.div>

              {/* Second screenshot — slides in from the right on pin */}
              <motion.div
                style={{ x: secondX }}
                className="absolute inset-x-0 top-0"
              >
                <AppScreenshot
                  src={CF_ASSETS.screenshots.job}
                  alt="CloudsForge - Job view with prompt, parameters and output"
                  chromeLabel="CloudsForge - Job"
                  sizes="(max-width: 1280px) 100vw, 1400px"
                  shadow="dark"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
