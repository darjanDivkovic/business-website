"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

type RevealState = "hidden" | "visible" | "exited";

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  /** Travel distance (px) for the y-translate. */
  travel?: number;
  /** Start in visible state (first section on load). */
  disableEnter?: boolean;
  /** Portion of element that must be in view to trigger (0–1). */
  amount?: number;
  /**
   * IntersectionObserver rootMargin — "top right bottom left". Positive
   * bottom values pre-trigger while the section is still below the fold
   * (e.g. "0px 0px 400px 0px" fires when the section is 400px below the
   * viewport). Negative values delay the trigger.
   */
  margin?: `${number}px ${number}px ${number}px ${number}px`;
}

export function ScrollRevealSection({
  children,
  className = "",
  travel = 180,
  disableEnter = false,
  amount = 0.35,
  margin,
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, margin });
  const [state, setState] = useState<RevealState>(
    disableEnter ? "visible" : "hidden"
  );

  useEffect(() => {
    if (inView) {
      setState("visible");
      return;
    }
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2;
    setState(centerOffset < window.innerHeight / 2 ? "exited" : "hidden");
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, y: travel },
    visible: { opacity: 1, y: 0 },
    exited: { opacity: 0, y: -travel },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={disableEnter ? "visible" : "hidden"}
      animate={state}
      variants={variants}
      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
