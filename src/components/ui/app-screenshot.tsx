import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * AppScreenshot — a CloudsForge app screenshot in a faux desktop window.
 * Static frame: window chrome + image, one contained shadow.
 */

type ShadowVariant = "orange" | "dark" | "none";

interface AppScreenshotProps {
  src: string;
  alt: string;
  /** Text shown in the faux window-chrome title bar. */
  chromeLabel: string;
  sizes?: string;
  priority?: boolean;
  /** Applied to the outer container. */
  className?: string;
  /** Outer drop-shadow style. Defaults to "orange". */
  shadow?: ShadowVariant;
}

const SHADOW_CLASS: Record<ShadowVariant, string> = {
  orange: "shadow-[0_30px_80px_-24px_rgba(212,93,19,0.4)]",
  dark: "shadow-[0_30px_80px_-24px_rgba(0,0,0,0.55)]",
  none: "",
};

export function AppScreenshot({
  src,
  alt,
  chromeLabel,
  sizes,
  priority,
  className,
  shadow = "orange",
}: AppScreenshotProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-xl border border-white/10 bg-cf-surface",
          SHADOW_CLASS[shadow],
        )}
      >
        {/* Faux window chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/8 bg-cf-surface-2 px-3 py-2">
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="ml-2 font-mono text-[10px] tracking-tight text-white/30">
            {chromeLabel}
          </span>
        </div>

        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          sizes={sizes}
          quality={100}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
