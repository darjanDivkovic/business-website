"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, ArrowRight, Clock, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { DottedSurface } from "@/components/ui/dotted-surface";

interface FormState {
  name: string;
  email: string;
  message: string;
  services: string[];
}

const SERVICE_OPTIONS = [
  {
    id: "short-term",
    label: "Small Short-Term Project",
    variant: "purple-subtle" as const,
  },
  {
    id: "contract",
    label: "Contract / Per Hour",
    variant: "blue-subtle" as const,
  },
  { id: "ai", label: "AI-Powered Features", variant: "amber-subtle" as const },
  { id: "unsure", label: "Not sure yet", variant: "gray-subtle" as const },
];

const EXPECTATIONS = [
  { icon: Clock, text: "Reply within 24 hours" },
  { icon: MessageSquare, text: "Free 15-min intro call" },
];

const inputCls =
  "bg-[#1c1c1c] border-white/[0.08] text-white placeholder:text-white/25 " +
  "focus-visible:ring-white/15 focus-visible:border-white/20";

export function ContactSection({
  preselectedService,
}: {
  preselectedService?: string;
} = {}) {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    message: "",
    services: preselectedService ? [preselectedService] : [],
  });

  React.useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, services: [preselectedService] }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  return (
    <section className="relative bg-black flex items-center overflow-hidden py-24 md:py-32 px-6 lg:px-32">
        {/* 3D dot wave background */}
        <DottedSurface className="opacity-40" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
              {/* ── Left ───────────────────────────────────────────── */}
              <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:pt-3">
                <div className="space-y-5">
                  <p className="opacity-50 text-xs font-semibold uppercase tracking-widest text-white/35">
                    Get in touch
                  </p>
                  <h1 className="mt-10 text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight text-balance mb-12">
                    Let&apos;s build something great together.
                  </h1>
                  <p className="text-white/45 text-sm">
                    Whether you have a clear spec or just a rough idea <br /> —
                    drop me a message and we&apos;ll figure out the best path
                    forward.
                  </p>
                </div>

                <div className="space-y-4 mt-14">
                  {EXPECTATIONS.map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 text-sm text-white/40"
                    >
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5">
                        <Icon className="size-3.5" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:hello@darjan.dev"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors w-fit group"
                >
                  <Mail className="size-4" />
                  hello@darjan.dev
                  <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              {/* ── Right: form card ───────────────────────────────── */}
              <div
                className={cn(
                  "rounded-2xl p-8",
                  "bg-[#0f0f0f]",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_48px_rgba(255,255,255,0.06),0_32px_100px_rgba(255,255,255,0.03)]",
                )}
              >
                <form
                  action="https://formspree.io/f/xzdakkkn"
                  method="POST"
                  className="space-y-10"
                >
                  {/* Hidden field carries selected service badges to Formspree */}
                  <input
                    type="hidden"
                    name="services"
                    value={form.services.join(", ")}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/60 text-sm">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={inputCls}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/60 text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Label htmlFor="message" className="text-white/60 text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Briefly describe what you need..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      className={cn(inputCls, "min-h-[160px] resize-none")}
                    />
                  </div>

                  {/* Service badge toggles */}
                  <div className="space-y-6">
                    <Label className="text-white/60 text-sm">
                      I&apos;m interested in&hellip;
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-10">
                      {SERVICE_OPTIONS.map((opt) => {
                        const selected = form.services.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleServiceToggle(opt.id)}
                            className={cn(
                              "cursor-pointer rounded-full transition-all duration-150",
                              selected
                                ? "opacity-100 ring-2 ring-offset-2 ring-offset-[#0f0f0f] ring-white/30 scale-[1.04]"
                                : "opacity-50 hover:opacity-80",
                            )}
                          >
                            <Badge
                              variant={opt.variant}
                              size="lg"
                              capitalize={false}
                            >
                              {opt.label}
                            </Badge>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full gap-2 bg-white text-black hover:bg-white/90 h-11"
                    >
                      Send message
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </section>
  );
}
