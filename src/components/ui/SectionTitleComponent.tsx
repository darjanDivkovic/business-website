import { ReactNode } from "react";

interface SectionTitleProps {
  prefix: string;
  header: string;
  children?: ReactNode;
  className?: string;
}

export function SectionTitleComponent({
  prefix,
  header,
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        {prefix}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
        {header}
      </h2>
      <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
        {children}
      </p>
    </div>
  );
}
