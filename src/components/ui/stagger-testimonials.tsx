"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

export type StaggerTestimonial = {
  tempId: string | number;
  name: string;
  role: string;
  company?: string;
  image: string;
  quote: string;
  date: string;
  relationship: string;
  /** Public-relative path, e.g. "/Voices/Seena.mp3" */
  audio?: string;
};

// ─── Wave bars (one set, animation gated by `playing`) ────────────────────────

const WAVE_BAR_COUNT = 22;

const waveVariants: Variants[] = Array.from({ length: WAVE_BAR_COUNT }).map(
  () => ({
    initial: { scaleY: 1 },
    animate: {
      scaleY: [1, Math.random() * 1.4 + 1, 1],
      transition: {
        duration: Math.random() * 0.5 + 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 0.5,
      },
    },
  }),
);

const BAR_HEIGHTS = Array.from({ length: WAVE_BAR_COUNT }).map(
  (_, i) => 6 + ((i * 7) % 14),
);

// ─── Audio player (only rendered on the center card) ──────────────────────────

function AudioPlayer({ src, isCenter }: { src: string; isCenter: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;
    const onEnd = () => setPlaying(false);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.pause();
      audio.removeEventListener("ended", onEnd);
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (!isCenter && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
    }
  }, [isCenter]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div
      className="flex items-center gap-3 rounded-md border border-white/15 bg-white/5 p-2.5 backdrop-blur"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90"
      >
        {playing ? (
          <Pause size={18} />
        ) : (
          <Play size={18} className="ml-[2px]" />
        )}
      </button>
      <div className="flex h-8 flex-1 items-center justify-center gap-[3px]">
        {waveVariants.map((v, i) => (
          <motion.div
            key={i}
            className="w-[3px] origin-center rounded-full bg-white/80"
            style={{ height: BAR_HEIGHTS[i] }}
            variants={v}
            initial="initial"
            animate={playing ? "animate" : "initial"}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

interface TestimonialCardProps {
  position: number;
  testimonial: StaggerTestimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

function TestimonialCard({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialCardProps) {
  const isCenter = position === 0;

  const distance = Math.abs(position);
  const isAdjacent = distance === 1;
  const opacity =
    isCenter || isAdjacent ? 1 : Math.max(0.35, 1 - distance * 0.25);

  const targetX = (cardSize / 1.5) * position;
  const targetY = isCenter ? -20 : position % 2 ? 25 : -5;
  const targetRotate = isCenter ? 0 : position % 2 ? 2.5 : -2.5;

  return (
    <motion.div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute cursor-pointer select-none border-[3px] p-7 rounded-xl text-white transition-[border-color,background-color] duration-200",
        isCenter
          ? "border-white/80 bg-white/[0.06] shadow-[0_20px_60px_-15px_rgba(255,255,255,0.15)] backdrop-blur"
          : isAdjacent
            ? "border-white/10 bg-black hover:border-white/25"
            : "border-white/10 bg-black hover:border-white/25",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        left: `calc(50% - ${cardSize / 2}px)`,
        top: `calc(50% - ${cardSize / 2}px)`,
        zIndex: isCenter ? 10 : 10 - distance,
        willChange: "transform",
      }}
      animate={{ x: targetX, y: targetY, rotate: targetRotate }}
      transition={{
        type: "spring",
        stiffness: 340,
        damping: 32,
        mass: 0.7,
      }}
    >
      <div style={{ opacity: isCenter ? 1 : opacity }}>
        <div className="flex items-start gap-3">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className={cn(
              "h-12 w-12 shrink-0 rounded-full object-cover object-top ring-1",
              isCenter ? "ring-white/30" : "ring-white/10",
            )}
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {testimonial.name}
            </p>
            <p className="truncate text-xs text-white/60">
              {testimonial.role}
              {testimonial.company ? ` · ${testimonial.company}` : ""}
            </p>
            <p className="truncate text-[10px] text-white/40">
              {testimonial.date} · {testimonial.relationship}
            </p>
          </div>
        </div>

        <blockquote className="mt-5 text-sm leading-relaxed text-white/85 sm:text-[15px]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      {isCenter && testimonial.audio && (
        <div className="absolute bottom-7 left-7 right-7">
          <AudioPlayer src={testimonial.audio} isCenter={isCenter} />
        </div>
      )}
    </motion.div>
  );
}

// ─── Carousel ────────────────────────────────────────────────────────────────

interface StaggerTestimonialsProps {
  testimonials: StaggerTestimonial[];
}

export function StaggerTestimonials({
  testimonials,
}: StaggerTestimonialsProps) {
  const [cardSize, setCardSize] = useState(365);
  const [list, setList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const next = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = next.shift();
        if (!item) return;
        next.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = next.pop();
        if (!item) return;
        next.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(next);
  };

  useEffect(() => {
    const update = () => {
      const sm = window.matchMedia("(min-width: 640px)").matches;
      const size = sm
        ? Math.min(window.innerHeight * 0.58, window.innerWidth * 0.26, 460)
        : Math.min(window.innerHeight * 0.5, 300);
      setCardSize(size);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {list.map((t, index) => {
        const position =
          list.length % 2
            ? index - (list.length + 1) / 2
            : index - list.length / 2;
        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

    </div>
  );
}
