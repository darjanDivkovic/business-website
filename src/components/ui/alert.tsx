import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("relative rounded-lg border", {
  variants: {
    variant: {
      default: "border-zinc-700 bg-zinc-900 text-zinc-200",
      warning: "border-amber-500/50 text-amber-400 bg-amber-950/30",
      error: "border-red-800/60 text-red-400 bg-red-950/40",
      success: "border-emerald-700/50 text-emerald-400 bg-emerald-950/30",
      info: "border-blue-700/50 text-blue-400 bg-blue-950/30",
    },
    size: {
      sm: "px-4 py-3",
      lg: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, icon, action, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, size }), className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="grow flex items-center">
          {icon && <span className="me-3 inline-flex shrink-0">{icon}</span>}
          {children}
        </div>
        {action && <div className="flex items-center shrink-0">{action}</div>}
      </div>
    </div>
  ),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("text-sm font-medium", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm opacity-80", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
