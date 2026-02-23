import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

// ─── Custom Components ────────────────────────────────────────────────────────

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-[#3A2490]/40 bg-[#1E1060]/10 px-5 py-4 [&>p:last-child]:mb-0">
      {children}
    </div>
  );
}

function ServiceCTA({
  title,
  description,
  ctaText = "Schedule a free 15-min call",
  ctaHref = "/contact",
}: {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <div className="my-10 rounded-2xl border border-[#3A2490]/50 bg-gradient-to-br from-[#1E1060]/12 to-[#0E2060]/8 p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#5566DD] mb-2">
        Work With Me
      </p>
      <h4 className="text-xl font-semibold text-foreground mb-2 mt-0">
        {title}
      </h4>
      <p className="text-muted-foreground mb-6 leading-relaxed text-base mt-0">
        {description}
      </p>
      <Button asChild>
        <Link href={ctaHref}>
          {ctaText}
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
    </div>
  );
}

// ─── Prose Element Overrides ──────────────────────────────────────────────────

export const mdxComponents = {
  // Headings
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-10 mb-4 first:mt-0"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-2xl font-semibold tracking-tight text-foreground mt-10 mb-4 border-b border-border/50 pb-3"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-xl font-semibold text-foreground mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="text-lg font-semibold text-foreground mt-6 mb-2"
      {...props}
    />
  ),

  // Body text
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5"
      {...props}
    />
  ),

  // Lists
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-5 space-y-2.5 list-none" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-5 space-y-2.5 list-decimal list-inside" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li
      className="flex gap-3 text-base md:text-lg text-muted-foreground leading-relaxed before:content-['→'] before:text-[#5566DD] before:font-semibold before:shrink-0 before:mt-0.5"
      {...props}
    />
  ),

  // Inline code
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="px-1.5 py-0.5 rounded bg-white/8 text-[#9999F8] text-[0.875em] font-mono border border-white/8"
      {...props}
    />
  ),

  // Code block
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl bg-[#050508] border border-border/60 p-5 text-sm font-mono leading-relaxed"
      {...props}
    />
  ),

  // Blockquote
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-[#5566DD] pl-5 [&>p]:text-foreground/70 [&>p]:italic"
      {...props}
    />
  ),

  // Links
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-[#88AAFF] underline decoration-[#5566DD]/50 hover:decoration-[#88AAFF] underline-offset-2 transition-colors"
      {...props}
    />
  ),

  // HR
  hr: () => <hr className="my-10 border-border/40" />,

  // Strong / Em
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-foreground/80" {...props} />
  ),

  // Custom MDX components
  Callout,
  ServiceCTA,
};
