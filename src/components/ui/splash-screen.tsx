"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { cn } from "@/lib/utils";

export function SplashScreen() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), 1500);
    const goneTimer = setTimeout(() => setGone(true), 2100);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        "bg-black",
        "transition-opacity duration-[600ms] ease-in-out",
        leaving ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      {/* Subtle radial ambient glow around the centre */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_38%_at_50%_50%,rgba(255,255,255,0.045)_0%,transparent_100%)]" />

      <div className="relative flex flex-col items-center gap-9">
        <Image
          src={Logo}
          alt="darjan.dev"
          width={140}
          height={32}
          className="h-10 w-auto animate-logo-flash"
          priority
        />

        {/* Progress bar — soft glow track + white fill */}
        <div className="relative w-28 h-px rounded-full overflow-hidden bg-white/10">
          <div className="absolute inset-0 origin-left animate-splash-progress bg-gradient-to-r from-white/60 via-white to-white/60" />
        </div>
      </div>
    </div>
  );
}
