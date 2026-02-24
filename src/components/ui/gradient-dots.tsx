"use client";

import { motion } from "framer-motion";
import React from "react";

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  /** Dot diameter in px (default: 6) */
  dotSize?: number;
  /** Grid spacing in px — center-to-center (default: 20) */
  spacing?: number;
  /** Blob drift animation duration in seconds (default: 28) */
  duration?: number;
  /** Hue-rotate oscillation duration in seconds (default: 14) */
  colorCycleDuration?: number;
  /** Solid background colour (default: #000) */
  backgroundColor?: string;
};

export function GradientDots({
  dotSize = 6,
  spacing = 20,
  duration = 28,
  colorCycleDuration = 6,
  backgroundColor = "#000000",
  className,
  style,
  ...props
}: GradientDotsProps) {
  const rowHeight = spacing * 1.732;
  const half = spacing / 2;
  const halfRow = rowHeight / 2;
  const r = dotSize / 2;

  /*
   * Between the dots we use rgba(0,0,0,0.8) instead of fully-opaque black.
   * This lets ~20% of the colour blobs bleed through everywhere as a soft
   * ambient glow, while the dots themselves (transparent holes) show the
   * blobs at full brightness — creating bright dots on a dimly glowing field.
   */
  const between = `rgba(0,0,0,0.80)`;

  return (
    <motion.div
      className={`absolute inset-0${className ? ` ${className}` : ""}`}
      style={{
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent ${r}px, ${between} ${r}px),
          radial-gradient(circle at 50% 50%, transparent ${r}px, ${between} ${r}px),
          radial-gradient(circle at 22% 28%, #7755EE, transparent 50%),
          radial-gradient(circle at 78% 72%, #AAAAFF, transparent 50%),
          radial-gradient(circle at 75% 20%, #5566DD, transparent 48%),
          radial-gradient(ellipse  at 25% 80%, rgba(255,255,255,0.45), transparent 42%)
        `,
        backgroundSize: `
          ${spacing}px ${rowHeight}px,
          ${spacing}px ${rowHeight}px,
          160% 160%,
          160% 160%,
          140% 140%,
          180% 180%
        `,
        backgroundPosition: `0px 0px, ${half}px ${halfRow}px, 0% 0%, 100% 100%, 100% 0%, 0% 100%`,
        ...style,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${half}px ${halfRow}px,   0%   0%, 100% 100%, 100%   0%,   0% 100%`,
          `0px 0px, ${half}px ${halfRow}px, 100%  60%,   0%  40%,   0% 100%, 100%   0%`,
          `0px 0px, ${half}px ${halfRow}px,  55% 100%,  45%   0%,  50%  55%,  50%  45%`,
          `0px 0px, ${half}px ${halfRow}px,   0%   0%, 100% 100%, 100%   0%,   0% 100%`,
        ],
        filter: ["hue-rotate(-25deg)", "hue-rotate(25deg)"],
      }}
      transition={{
        backgroundPosition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
        filter: {
          duration: colorCycleDuration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      {...props}
    />
  );
}
