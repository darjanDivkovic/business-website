"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Sparkles, Check, LucideIcon } from "lucide-react";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import SectionTitleComponent from "./SectionTitleComponent";

// ─── Cosmic palette ───────────────────────────────────────────────────────────
//
//  Derived from beam-effect.tsx (same source as the background video).
//  Purple  → atmospheric cloud   oklch(0.36–0.44, 0.22–0.24, 275–278)
//  Blue    → vivid mid conic     oklch(0.74, 0.26, 244)
//  Ice     → SVG wing streaks    #88aaff / #aabbff
//
type HoverScheme = "purple" | "blue";

const SCHEMES = {
  purple: {
    // Card appearance
    cardGradient:
      "bg-gradient-to-br from-[#1E1060]/14 via-background to-[#3A2490]/7",
    hoverBorder: "hover:border-[#3A2490]/36",
    // Hover-only gradient overlay
    overlayGradient:
      "bg-gradient-to-br from-[#1E1060]/16 via-transparent to-[#3A2490]/10",
    // Ambient blur orbs
    orbTop: "bg-[#1E1060]/0 group-hover:bg-[#1E1060]/20",
    orbBottom: "bg-[#3A2490]/0 group-hover:bg-[#3A2490]/14",
    // Corner decorators on hover
    cornerTop:
      "group-hover:border-[#5566DD] group-hover:shadow-[0_0_8px_rgba(85,102,221,0.75)]",
    cornerBottom:
      "group-hover:border-[#3A2490] group-hover:shadow-[0_0_8px_rgba(58,36,144,0.75)]",
    // Typography on hover
    titleGlow: "group-hover:drop-shadow-[0_0_10px_rgba(85,102,221,0.62)]",
    taglineHover: "group-hover:text-[#5566DD]/76",
    iconHover: "group-hover:text-[#5566DD]",
    // Button on hover
    buttonGlow: "group-hover:shadow-[0_0_18px_rgba(58,36,144,0.46)]",
    // Inline color values
    titleColor: "#9999F8",
    checkColor: "#8080E0",
  },
  blue: {
    cardGradient:
      "bg-gradient-to-br from-[#0E2060]/14 via-background to-[#1E50C0]/7",
    hoverBorder: "hover:border-[#1E50C0]/36",
    overlayGradient:
      "bg-gradient-to-br from-[#0E2060]/16 via-transparent to-[#1E50C0]/10",
    orbTop: "bg-[#0E2060]/0 group-hover:bg-[#0E2060]/20",
    orbBottom: "bg-[#1E50C0]/0 group-hover:bg-[#1E50C0]/14",
    cornerTop:
      "group-hover:border-[#4488FF] group-hover:shadow-[0_0_8px_rgba(68,136,255,0.75)]",
    cornerBottom:
      "group-hover:border-[#1E50C0] group-hover:shadow-[0_0_8px_rgba(30,80,192,0.75)]",
    titleGlow: "group-hover:drop-shadow-[0_0_10px_rgba(68,136,255,0.62)]",
    taglineHover: "group-hover:text-[#4488FF]/76",
    iconHover: "group-hover:text-[#4488FF]",
    buttonGlow: "group-hover:shadow-[0_0_18px_rgba(30,80,192,0.46)]",
    titleColor: "#88AAFF",
    checkColor: "#5580E0",
  },
} as const;

// ─── Data ────────────────────────────────────────────────────────────────────

interface ServiceData {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
  comingSoon?: boolean;
  colSpan?: boolean;
  badge?: {
    text: string;
    variant:
      | "purple-subtle"
      | "blue-subtle"
      | "green-subtle"
      | "amber-subtle"
      | "trial";
  };
  hoverScheme?: HoverScheme;
  /** Only for cards without a hoverScheme (e.g. AI card) */
  titleColor?: string;
  /** Only for cards without a hoverScheme (e.g. AI card) */
  checkColor?: string;
  showButtons?: boolean;
}

const services: ServiceData[] = [
  {
    icon: Zap,
    title: "Small Short-Term Projects",
    tagline: "Fixed pricing · Fast turnaround",
    description:
      "Ideal for one-off tasks like Figma to HTML conversions or responsive updates — scoped, priced upfront, delivered fast.",
    offerings: [
      "Figma to HTML / CSS / JS conversions",
      "Landing pages and marketing sites",
      "UI components and design systems",
      "Responsive website updates & optimizations",
      "React-based interactive features",
      "Small-to-medium frontend enhancements",
    ],
    badge: { text: "Most Popular", variant: "purple-subtle" },
    hoverScheme: "purple",
    showButtons: true,
  },
  {
    icon: Clock,
    title: "Contract Per Hour",
    tagline: "For SaaS apps & ongoing work",
    description:
      "Ongoing support for complex features, API integrations, and UI/UX redesigns in SaaS environments — billed by the hour.",
    offerings: [
      "SaaS application development",
      "UI/UX redesigns",
      "Frontend product features",
      "API integrations and automations",
      "Corporate websites",
      "ATS and HR tech solutions",
    ],
    badge: { text: "Best for Scale", variant: "blue-subtle" },
    hoverScheme: "blue",
    showButtons: true,
  },
  {
    icon: Sparkles,
    title: "AI-Powered Features",
    tagline: "AI & Automation",
    description:
      "Integrating AI-driven features into web apps for smarter, more adaptive user experiences.",
    offerings: [
      "AI chat interfaces & assistants",
      "Smart content generation",
      "Personalization & recommendation engines",
      "LLM API integrations",
      "Predictive UI & intelligent forms",
      "Automated workflows",
    ],
    comingSoon: true,
    colSpan: true,
    badge: { text: "Coming Soon", variant: "amber-subtle" as const },
    titleColor: "#F39301",
    checkColor: "#371800",
  },
];

// ─── Section ─────────────────────────────────────────────────────────────────

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-16 border relative overflow-hidden"
    >
      {/* Aurora blobs — purple left, blue right — fade in on scroll */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute -top-48 -left-16 w-[480px] h-[480px] rounded-full blur-[130px] bg-[#1E1060]/9",
            "transition-opacity duration-[2500ms]",
            inView ? "opacity-100 animate-aurora-drift" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute -bottom-40 -right-16 w-[420px] h-[420px] rounded-full blur-[110px] bg-[#0E2060]/9",
            "transition-opacity duration-[2500ms] [animation-delay:3s]",
            inView ? "opacity-100 animate-aurora-drift" : "opacity-0",
          )}
        />
      </div>

      {/* One-shot scan sweep — uses wing-streak color */}
      {inView && !scanned && (
        <div
          className="pointer-events-none absolute inset-y-0 z-30 w-20 bg-gradient-to-r from-transparent via-[#5566DD]/20 to-transparent animate-scan-sweep"
          onAnimationEnd={() => setScanned(true)}
        />
      )}

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionTitleComponent
          prefix="How I Can Help"
          header="Services Tailored and customizable for your specific needs."
        >
          Find a suitable service or simply reach out via any Book a Call button
          to set up a free 15-min Call
        </SectionTitleComponent>

        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          {services.map((service, idx) =>
            service.colSpan ? (
              <AiCard
                key={service.title}
                service={service}
                inView={inView}
                delay={idx * 160}
              />
            ) : (
              <ServiceCard
                key={service.title}
                service={service}
                inView={inView}
                delay={idx * 160}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  inView,
  delay,
}: {
  service: ServiceData;
  inView?: boolean;
  delay?: number;
}) {
  const scheme = service.hoverScheme ? SCHEMES[service.hoverScheme] : null;

  return (
    <FeatureCard
      scheme={service.hoverScheme}
      className={cn(
        !inView && "opacity-0",
        inView && "animate-card-slide-up",
        scheme && [
          "overflow-hidden",
          scheme.cardGradient,
          "transition-[transform,border-color] duration-500 ease-out",
          "hover:scale-[1.014] hover:-translate-y-1",
          scheme.hoverBorder,
        ],
      )}
      style={{ animationDelay: `${delay ?? 0}ms` }}
    >
      {scheme && (
        <>
          {/* Gradient intensifier — invisible at rest */}
          <div
            className={cn(
              "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
              scheme.overlayGradient,
            )}
          />

          {/* Meteor shower — dim at rest, full on hover */}
          <div className="absolute inset-0 opacity-[0.18] group-hover:opacity-90 transition-opacity duration-700 pointer-events-none">
            <Meteors number={22} />
          </div>

          {/* Ambient blur orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className={cn(
                "absolute -top-20 left-1/3 w-52 h-52 rounded-full blur-[55px] transition-all duration-700",
                scheme.orbTop,
              )}
            />
            <div
              className={cn(
                "absolute -bottom-20 right-1/3 w-52 h-52 rounded-full blur-[55px] transition-all duration-700",
                scheme.orbBottom,
              )}
            />
          </div>
        </>
      )}

      <CardHeader className="relative z-10 pb-0">
        <CardHeading
          icon={service.icon}
          title={service.title}
          tagline={service.tagline}
          description={service.description}
          titleColor={service.titleColor}
          scheme={service.hoverScheme}
          badge={service.badge}
        />
      </CardHeader>

      <CardContent
        className={cn("relative z-10 pt-4", service.showButtons && "pb-0")}
      >
        <OfferingsList
          offerings={service.offerings}
          checkColor={service.checkColor}
          scheme={service.hoverScheme}
        />
      </CardContent>

      {service.showButtons && (
        <div className="relative z-10 flex flex-col gap-3 px-6 pb-6 mt-4 mb-4">
          <Button
            className={cn(
              "w-full transition-shadow duration-300",
              scheme && scheme.buttonGlow,
            )}
          >
            Get this Service
          </Button>
          <Button variant="outline" className="w-full">
            Book a Call
          </Button>
        </div>
      )}
    </FeatureCard>
  );
}

// ─── AI Card (full-width, coming soon) ───────────────────────────────────────

function AiCard({
  service,
  inView,
  delay,
}: {
  service: ServiceData;
  inView?: boolean;
  delay?: number;
}) {
  return (
    <FeatureCard
      className={cn(
        "lg:col-span-2",
        !inView && "opacity-0",
        inView && "animate-card-slide-up",
      )}
      style={{ animationDelay: `${delay ?? 0}ms` }}
    >
      <div className="p-6">
        <div>
          <CardHeading
            icon={service.icon}
            title={service.title}
            tagline={service.tagline}
            description={service.description}
            titleColor={service.titleColor}
            badge={service.badge}
          />
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-md border border-dashed px-3 py-2 text-sm text-muted-foreground opacity-60"
            >
              <Check
                className="size-4 shrink-0"
                style={{ color: service.checkColor }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </FeatureCard>
  );
}

// ─── Shared sub-components ───────────────────────────────────────────────────

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
  scheme?: HoverScheme;
  style?: CSSProperties;
}

function FeatureCard({ children, className, scheme, style }: FeatureCardProps) {
  return (
    <Card
      className={cn("group relative rounded-none bg-white/2", className)}
      style={style}
    >
      <CardDecorator scheme={scheme} />
      {children}
    </Card>
  );
}

function CardDecorator({ scheme }: { scheme?: HoverScheme }) {
  const s = scheme ? SCHEMES[scheme] : null;
  return (
    <>
      <span
        className={cn(
          "absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-primary transition-all duration-300",
          s && `group-hover:size-[10px] ${s.cornerTop}`,
        )}
      />
      <span
        className={cn(
          "absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-primary transition-all duration-300",
          s && `group-hover:size-[10px] ${s.cornerTop}`,
        )}
      />
      <span
        className={cn(
          "absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-primary transition-all duration-300",
          s && `group-hover:size-[10px] ${s.cornerBottom}`,
        )}
      />
      <span
        className={cn(
          "absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-primary transition-all duration-300",
          s && `group-hover:size-[10px] ${s.cornerBottom}`,
        )}
      />
    </>
  );
}

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  titleColor?: string;
  scheme?: HoverScheme;
  badge?: ServiceData["badge"];
}

function CardHeading({
  icon: Icon,
  title,
  tagline,
  description,
  titleColor,
  scheme,
  badge,
}: CardHeadingProps) {
  const s = scheme ? SCHEMES[scheme] : null;
  const resolvedTitle = s?.titleColor ?? titleColor;

  return (
    <div className="p-6 px-2 pb-0">
      {/* Mobile: badge stacks above title */}
      {badge && (
        <div className="mb-3 sm:hidden">
          <Badge variant={badge.variant} size="sm" capitalize={false}>
            {badge.text}
          </Badge>
        </div>
      )}

      {/* Title row — badge sits inline on sm+ */}
      <div className="flex items-start justify-between gap-3">
        <p
          className={cn(
            "text-xl font-semibold transition-all duration-500",
            s?.titleGlow,
          )}
          style={resolvedTitle ? { color: resolvedTitle } : undefined}
        >
          {title}
        </p>
        {badge && (
          <div className="hidden sm:block shrink-0 mt-0.5">
            <Badge variant={badge.variant} size="sm" capitalize={false}>
              {badge.text}
            </Badge>
          </div>
        )}
      </div>

      <span
        className={cn(
          "mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300",
          s?.taglineHover,
        )}
      >
        <Icon
          className={cn(
            "size-4 shrink-0 transition-colors duration-300",
            s?.iconHover,
          )}
        />
        {tagline}
      </span>
      <p className="mt-4 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function OfferingsList({
  offerings,
  checkColor,
  scheme,
}: {
  offerings: string[];
  checkColor?: string;
  scheme?: HoverScheme;
}) {
  const s = scheme ? SCHEMES[scheme] : null;
  const resolvedCheck = s?.checkColor ?? checkColor;

  return (
    <ul className="mt-4 space-y-2 px-0 mb-4">
      {offerings.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-sm transition-colors duration-200 group-hover:text-foreground/88"
        >
          <Check
            className={cn("size-4 shrink-0", !resolvedCheck && "text-primary")}
            style={resolvedCheck ? { color: resolvedCheck } : undefined}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
