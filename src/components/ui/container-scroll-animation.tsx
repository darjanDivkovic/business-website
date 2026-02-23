"use client";

import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";

// ─── ContainerScroll ─────────────────────────────────────────────────────────
//
//  Drives a 3-D perspective card that rotates from a tilted angle into flat view
//  as the user scrolls through the component's scroll range.
//
//  titleComponent  — rendered above the card, translates upward on scroll
//  children        — rendered inside the card

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [12, 0] : [20, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.75, 0.95] : [1.06, 1],
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      ref={containerRef}
      className="h-[46rem] md:h-[62rem] flex items-center justify-center relative"
    >
      <div
        className="py-10 md:py-36 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <ScrollTitle translate={translate}>{titleComponent}</ScrollTitle>
        <ScrollCard rotate={rotate} scale={scale}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ScrollTitle({
  translate,
  children,
}: {
  translate: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-6xl mx-auto px-6 lg:px-8"
    >
      {children}
    </motion.div>
  );
}

function ScrollCard({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ rotateX: rotate, scale, willChange: "transform" }}
      className={[
        "max-w-6xl -mt-6 md:-mt-10 mx-auto",
        "h-[28rem] md:h-[36rem] w-full",
        // Dark card with white rim light and depth shadow
        "bg-background border border-white/10 rounded-2xl overflow-hidden",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_60px_rgba(170,187,255,0.10),0_32px_80px_rgba(0,0,0,0.55)]",
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}
