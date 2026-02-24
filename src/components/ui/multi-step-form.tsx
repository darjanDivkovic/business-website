"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const multiStepFormVariants = cva("flex flex-col w-full", {
  variants: {
    size: {
      default: "md:max-w-[680px]",
      sm: "md:max-w-[520px]",
      lg: "md:max-w-[840px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface MultiStepFormProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof multiStepFormVariants> {
  currentStep: number;
  totalSteps: number;
  title: string;
  description: string;
  onBack: () => void;
  onNext: () => void;
  backButtonText?: string;
  nextButtonText?: string;
  footerContent?: React.ReactNode;
  error?: string | null;
  isLoading?: boolean;
}

const MultiStepForm = React.forwardRef<HTMLDivElement, MultiStepFormProps>(
  (
    {
      className,
      size,
      currentStep,
      totalSteps,
      title,
      description,
      onBack,
      onNext,
      backButtonText = "Back",
      nextButtonText = "Next Step",
      footerContent,
      error,
      isLoading,
      children,
      ...props
    },
    ref,
  ) => {
    const progress = Math.round((currentStep / totalSteps) * 100);

    const variants = {
      hidden: { opacity: 0, x: 32 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -32 },
    };

    return (
      <Card
        ref={ref}
        className={cn(
          multiStepFormVariants({ size }),
          "border-white/10 bg-zinc-950/80 backdrop-blur-sm rounded-xl",
          className,
        )}
        {...props}
      >
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
              {currentStep} / {totalSteps}
            </span>
            <span className="text-xs text-zinc-600">{progress}%</span>
          </div>
          <CardTitle className="text-white text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-zinc-400 text-sm">{description}</CardDescription>
          <div className="pt-3">
            <Progress value={progress} className="h-px bg-zinc-800" />
          </div>
        </CardHeader>

        <CardContent className="min-h-[260px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 rounded-lg border border-red-800/50 bg-red-950/30 px-3 py-2.5 text-sm text-red-400"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t border-white/5 pt-4">
          <div>{footerContent}</div>
          <div className="flex gap-2">
            {currentStep > 1 && (
              <Button variant="glass-dark" onClick={onBack} disabled={isLoading}>
                {backButtonText}
              </Button>
            )}
            <Button variant="glass-white" onClick={onNext} disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border border-black/30 border-t-black" />
                  {nextButtonText}
                </span>
              ) : (
                nextButtonText
              )}
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  },
);

MultiStepForm.displayName = "MultiStepForm";

export { MultiStepForm };
