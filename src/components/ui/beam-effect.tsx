"use client";

// Smaller particles — 1 × 4 px streaks instead of 1.5 × 7
const PARTICLES = [
  { id:  0, x:   0, y:   5, delay: 0.0, dur: 2.4 },
  { id:  1, x:  -3, y:  25, delay: 0.5, dur: 2.0 },
  { id:  2, x:   4, y:  10, delay: 1.1, dur: 2.6 },
  { id:  3, x:  -2, y:  50, delay: 0.3, dur: 2.2 },
  { id:  4, x:   2, y:  70, delay: 1.7, dur: 2.0 },
  { id:  5, x:  -5, y:  90, delay: 0.8, dur: 2.5 },
  { id:  6, x:   6, y:  35, delay: 2.2, dur: 2.1 },
  { id:  7, x:  -1, y: 110, delay: 0.2, dur: 2.7 },
  { id:  8, x:   3, y: 130, delay: 1.4, dur: 2.3 },
  { id:  9, x:  -7, y:  15, delay: 0.6, dur: 2.5 },
  { id: 10, x:   4, y: 150, delay: 1.9, dur: 2.1 },
  { id: 11, x:  -3, y: 160, delay: 0.4, dur: 2.4 },
  { id: 12, x:   5, y:  75, delay: 2.5, dur: 2.2 },
  { id: 13, x:  -4, y: 120, delay: 1.0, dur: 2.6 },
  { id: 14, x:   1, y:  45, delay: 0.7, dur: 2.3 },
  { id: 15, x:  -6, y:  85, delay: 1.5, dur: 2.5 },
  { id: 16, x:   7, y:  60, delay: 2.0, dur: 2.0 },
  { id: 17, x:  -2, y: 140, delay: 0.9, dur: 2.7 },
  { id: 18, x:   3, y:  55, delay: 1.3, dur: 2.1 },
  { id: 19, x:  -8, y: 100, delay: 0.1, dur: 2.4 },
  { id: 20, x:   5, y: 155, delay: 2.7, dur: 2.2 },
  { id: 21, x:  -4, y:  30, delay: 1.6, dur: 2.6 },
  { id: 22, x:   0, y:  80, delay: 0.4, dur: 2.3 },
  { id: 23, x:  -5, y:  40, delay: 2.1, dur: 2.8 },
  { id: 24, x:   8, y: 145, delay: 0.8, dur: 2.1 },
];

// Width-pulse layers expand from the beam's origin (top center)
const widthPulseStyle = (delay = "0s"): React.CSSProperties => ({
  transformOrigin: "50% 0%",
  animation: `beam-width-pulse 5s ease-in-out ${delay} infinite`,
});

export function BeamEffect() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        contain: "paint",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 100%)",
      }}
    >
      {/* ── 1. Wide atmospheric cloud ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 100% at 50% 5%, oklch(0.36 0.22 275 / 0.72) 0%, oklch(0.26 0.16 278 / 0.28) 50%, transparent 100%)",
        }}
      />

      {/* ── 2. Outer conic glow — 22° wide, atmospheric ── */}
      <div
        className="animate-beam-glow"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "conic-gradient(at 50% 0%, transparent 79deg, oklch(0.44 0.24 278 / 0.85) 90deg, transparent 101deg)",
          filter: "blur(60px)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 96%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 96%)",
        }}
      />

      {/* ── 3. Mid conic — 12° wide, vivid blue, pulses in width ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...widthPulseStyle("0.6s"),
        }}
      >
        <div
          className="animate-beam-glow"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "conic-gradient(at 50% 0%, transparent 84deg, oklch(0.74 0.26 244 / 0.92) 90deg, transparent 96deg)",
            filter: "blur(26px)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 88%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 88%)",
            animationDelay: "0.6s",
          }}
        />
      </div>

      {/* ── 4. White-hot core cone — 5° wide, thick bright white ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...widthPulseStyle("1.2s"),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "conic-gradient(at 50% 0%, transparent 87.5deg, oklch(0.97 0.04 240 / 0.98) 90deg, transparent 92.5deg)",
            filter: "blur(10px)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        />
      </div>

      {/* ── 5. Inner sharp shaft — 3° wide, pure white, minimal blur ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "conic-gradient(at 50% 0%, transparent 88.5deg, white 90deg, transparent 91.5deg)",
          filter: "blur(3px)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 78%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 78%)",
        }}
      />

      {/* ── 6. SVG curved wing streaks ── */}
      <svg
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="wingInner" x1="500" y1="0" x2="500" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="white"   stopOpacity="0" />
            <stop offset="8%"   stopColor="white"   stopOpacity="0.95" />
            <stop offset="55%"  stopColor="#88aaff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#5566dd" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wingOuter" x1="500" y1="0" x2="500" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="white"   stopOpacity="0" />
            <stop offset="12%"  stopColor="#aabbff" stopOpacity="0.60" />
            <stop offset="72%"  stopColor="#4455cc" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3344bb" stopOpacity="0" />
          </linearGradient>
          <filter id="blurWingInner"><feGaussianBlur stdDeviation="2" /></filter>
          <filter id="blurWingOuter"><feGaussianBlur stdDeviation="7" /></filter>
        </defs>

        {/* Outer left */}
        <path d="M 500 0 C 490 200, 290 430, 10 700"
          fill="none" stroke="url(#wingOuter)" strokeWidth="3.5"
          filter="url(#blurWingOuter)"
          style={{ animation: "beam-glow 4s ease-in-out infinite 0.8s" }} />
        {/* Inner left */}
        <path d="M 500 0 C 494 240, 390 490, 195 700"
          fill="none" stroke="url(#wingInner)" strokeWidth="2"
          filter="url(#blurWingInner)"
          style={{ animation: "beam-glow 4s ease-in-out infinite 0.3s" }} />
        {/* Inner right */}
        <path d="M 500 0 C 506 240, 610 490, 805 700"
          fill="none" stroke="url(#wingInner)" strokeWidth="2"
          filter="url(#blurWingInner)"
          style={{ animation: "beam-glow 4s ease-in-out infinite 0.3s" }} />
        {/* Outer right */}
        <path d="M 500 0 C 510 200, 710 430, 990 700"
          fill="none" stroke="url(#wingOuter)" strokeWidth="3.5"
          filter="url(#blurWingOuter)"
          style={{ animation: "beam-glow 4s ease-in-out infinite 0.8s" }} />
      </svg>

      {/* ── 7. Razor-thin core line ── */}
      <div
        className="animate-beam-pulse absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "2px",
          height: "78%",
          background: "linear-gradient(to bottom, white 0%, white 30%, oklch(0.92 0.08 235) 55%, transparent 100%)",
          filter: "blur(0.5px)",
          boxShadow: "0 0 10px 5px rgba(255,255,255,1), 0 0 30px 12px rgba(160,200,255,0.7)",
        }}
      />

      {/* ── 8. Entry bloom ── */}
      <div
        className="animate-beam-pulse absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "320px",
          height: "180px",
          background:
            "radial-gradient(ellipse at 50% 0%, white 0%, oklch(0.88 0.18 242 / 0.7) 20%, oklch(0.68 0.24 258 / 0.35) 45%, transparent 72%)",
          filter: "blur(16px)",
          animationDelay: "0.3s",
        }}
      />

      {/* ── 9. Bottom impact — bright white sphere + wide diffuse pool ── */}
      {/* Inner bright sphere */}
      <div
        className="animate-beam-pulse absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: "14%",
          width: "220px",
          height: "220px",
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.92 0.16 242 / 0.90) 0%, oklch(0.75 0.25 252 / 0.55) 35%, transparent 70%)",
          filter: "blur(14px)",
          animationDelay: "0.5s",
        }}
      />
      {/* Outer wide pool */}
      <div
        className="animate-beam-glow absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: "5%",
          width: "1150px",
          height: "340px",
          background:
            "radial-gradient(ellipse at 50% 42%, oklch(0.82 0.28 248 / 0.84) 0%, oklch(0.62 0.28 260 / 0.52) 20%, oklch(0.46 0.22 272 / 0.28) 50%, transparent 76%)",
          filter: "blur(44px)",
          animationDelay: "1.0s",
        }}
      />

      {/* ── 10. Particles — tiny 1×4 px sparks ── */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `calc(50% + ${p.x}px)`,
            top: `${p.y}px`,
            width: "1px",
            height: "4px",
            background: "linear-gradient(to bottom, white, rgba(180,210,255,0.3))",
            borderRadius: "1px",
            filter: "blur(0.3px)",
            boxShadow: "0 0 2px 1px rgba(210,230,255,0.6)",
            animation: `particle-fall ${p.dur}s ease-in ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
