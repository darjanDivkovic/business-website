"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StarBorderProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** Length of the traveling light streak (px). */
  lightWidth?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Streak color. */
  lightColor?: string;
  /** Width of the static ring (px). */
  borderWidth?: number;
  /** Static border color underneath the streak. */
  borderColor?: string;
  /** How much of the inside ring is exposed to glow (px). Tune up for a thicker glowing rim. */
  glowRim?: number;
}

/**
 * StarBorder — traveling light streak around a content card. Uses the same
 * offset-path technique as the featured-project StarButton, but emits a thin
 * line that rotates with the path tangent (so it reads as a comet trail along
 * the border, not a static blob).
 */
export function StarBorder({
  children,
  className,
  innerClassName,
  lightWidth = 160,
  duration = 2.6,
  lightColor = "#FFFFFF",
  borderWidth = 2,
  borderColor = "rgba(255,255,255,0.22)",
  glowRim = 4,
}: StarBorderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      el.style.setProperty(
        "--path",
        `path('M 0 0 H ${el.offsetWidth} V ${el.offsetHeight} H 0 V 0')`
      );
    };
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={
        {
          "--duration": duration,
          "--light-width": `${lightWidth}px`,
          "--light-color": lightColor,
          borderWidth,
          borderStyle: "solid",
          borderColor,
          padding: glowRim,
          isolation: "isolate",
        } as CSSProperties
      }
      className={cn("relative overflow-hidden", className)}
    >
      <div
        aria-hidden
        className="animate-star-btn pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,var(--light-color)_50%,transparent_100%)]"
        style={
          {
            offsetPath: "var(--path)",
            offsetDistance: "0%",
            width: "var(--light-width)",
            height: `${(borderWidth + glowRim) * 2}px`,
          } as CSSProperties
        }
      />
      <div
        className={cn(
          "relative z-[1] rounded-[inherit] bg-black",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
