import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { Zap, Clock, Sparkles, Check, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface ServiceData {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
  comingSoon?: boolean;
  colSpan?: boolean;
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
  },
  {
    icon: Sparkles,
    title: "AI-Powered Features",
    tagline: "Coming Soon",
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
  },
];

// ─── Section ─────────────────────────────────────────────────────────────────

export function ServicesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How I Can Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Flexible engagement models built around your project and timeline.
          </p>
        </div>

        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          {services.map((service, idx) =>
            service.colSpan ? (
              <AiCard key={service.title} service={service} />
            ) : (
              <ServiceCard
                key={service.title}
                service={service}
                isFeatured={idx === 0}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Service Card (top two) ───────────────────────────────────────────────────

function ServiceCard({
  service,
  isFeatured,
}: {
  service: ServiceData;
  isFeatured?: boolean;
}) {
  return (
    <FeatureCard
      className={
        isFeatured
          ? "overflow-hidden bg-white/2 text-white relative"
          : undefined
      }
    >
      {isFeatured && (
        <div className="absolute inset-0 opacity-30">
          <Meteors number={20} />
        </div>
      )}

      <CardHeader className="relative z-10 pb-0">
        <CardHeading
          icon={service.icon}
          title={service.title}
          tagline={service.tagline}
          description={service.description}
          dark={isFeatured}
        />
      </CardHeader>

      <CardContent className="relative z-10 pt-4">
        <OfferingsList offerings={service.offerings} dark={isFeatured} />
      </CardContent>
    </FeatureCard>
  );
}

// ─── AI Card (full-width, coming soon) ───────────────────────────────────────

function AiCard({ service }: { service: ServiceData }) {
  return (
    <FeatureCard className="lg:col-span-2">
      <div className="p-6">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <CardHeading
            icon={service.icon}
            title={service.title}
            tagline={service.tagline}
            description={service.description}
          />

          <span className="inline-flex items-center rounded-full border border-dashed px-3 py-1 text-sm font-medium text-muted-foreground">
            Coming Soon
          </span>
        </div>

        {/* Offerings in a 2–3 col grid */}
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-md border border-dashed px-3 py-2 text-sm text-muted-foreground opacity-60"
            >
              <Check className="size-4 shrink-0 text-primary" />
              {item}
            </div>
          ))}
        </div>

        {/* Decorative circles */}
        <div className="mt-10 flex justify-center gap-6 overflow-hidden">
          <CircularUI
            circles={[{ pattern: "border" }, { pattern: "border" }]}
          />
          <CircularUI circles={[{ pattern: "none" }, { pattern: "primary" }]} />
          <CircularUI circles={[{ pattern: "blue" }, { pattern: "none" }]} />
          <CircularUI
            circles={[{ pattern: "primary" }, { pattern: "none" }]}
            className="hidden sm:block"
          />
        </div>
      </div>
    </FeatureCard>
  );
}

// ─── Shared sub-components ───────────────────────────────────────────────────

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

function FeatureCard({ children, className }: FeatureCardProps) {
  return (
    <Card className={cn("group relative rounded-none bg-white/2", className)}>
      <CardDecorator />
      {children}
    </Card>
  );
}

function CardDecorator() {
  return (
    <>
      <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-primary" />
      <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-primary" />
      <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-primary" />
      <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-primary" />
    </>
  );
}

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  dark?: boolean;
}

function CardHeading({
  icon: Icon,
  title,
  tagline,
  description,
  dark,
}: CardHeadingProps) {
  return (
    <div className="p-6 pb-0">
      <span
        className={cn(
          "flex items-center gap-2 text-sm",
          dark ? "text-white/60" : "text-muted-foreground",
        )}
      >
        <Icon className="size-4" />
        {tagline}
      </span>
      <p className={cn("mt-3 text-xl font-semibold", dark && "text-white")}>
        {title}
      </p>
      <p
        className={cn(
          "mt-2 text-sm",
          dark ? "text-white/60" : "text-muted-foreground",
        )}
      >
        {description}
      </p>
    </div>
  );
}

function OfferingsList({
  offerings,
  dark,
}: {
  offerings: string[];
  dark?: boolean;
}) {
  return (
    <ul className="mt-4 space-y-2 px-6 mb-6">
      {offerings.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-center gap-2 text-sm",
            dark && "text-white/80",
          )}
        >
          <Check
            className={cn(
              "size-4 shrink-0",
              dark ? "text-white" : "text-primary",
            )}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── Circular decorative UI (for AI card) ────────────────────────────────────

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  circles: CircleConfig[];
  className?: string;
}

function CircularUI({ circles, className }: CircularUIProps) {
  return (
    <div className={className}>
      <div className="size-fit rounded-2xl bg-gradient-to-b from-border to-transparent p-px">
        <div className="relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] bg-gradient-to-b from-background to-muted/25 p-4">
          {circles.map((circle, i) => (
            <div
              key={i}
              className={cn("size-7 rounded-full border sm:size-8", {
                "border-primary": circle.pattern === "none",
                "border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--border)),hsl(var(--border))_1px,transparent_1px,transparent_4px)]":
                  circle.pattern === "border",
                "border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--primary)),hsl(var(--primary))_1px,transparent_1px,transparent_4px)]":
                  circle.pattern === "primary",
                "z-1 border-blue-500 bg-background bg-[repeating-linear-gradient(-45deg,theme(colors.blue.500),theme(colors.blue.500)_1px,transparent_1px,transparent_4px)]":
                  circle.pattern === "blue",
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
