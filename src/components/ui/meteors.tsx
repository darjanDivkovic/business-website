"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Meteor {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

export function Meteors({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number || 20 }, (_, idx) => ({
        id: idx,
        top: Math.floor(Math.random() * 100) + "%",
        left: Math.floor(Math.random() * 800 - 400) + "px",
        animationDelay: (Math.random() * 0.6 + 0.2).toFixed(6) + "s",
        animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
      })),
    );
  }, [number]);

  return (
    <>
      {meteors.map((m) => (
        <span
          key={"meteor" + m.id}
          className={cn(
            "animate-meteor-effect pointer-events-none absolute top-1/2 left-1/2 h-px w-px rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-px before:bg-gradient-to-r before:from-white before:to-transparent",
            className,
          )}
          style={{
            top: m.top,
            left: m.left,
            animationDelay: m.animationDelay,
            animationDuration: m.animationDuration,
          }}
        />
      ))}
    </>
  );
}
