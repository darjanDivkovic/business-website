"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  User,
  Briefcase,
  DollarSign,
  Calendar,
} from "lucide-react";

import { MultiStepForm } from "@/components/ui/multi-step-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Replace YOUR_FORM_ID with your Formspree form ID (e.g. "xpwzgkqr")
const FORMSPREE_URL = "https://formspree.io/f/mlgwanow";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  message: string;
}

const inputClass =
  "bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-white/20 focus-visible:border-zinc-600";

const labelClass = "text-zinc-400 text-sm flex items-center gap-1.5";

const ContactSection = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const totalSteps = 3;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const getValidationError = (): string | null => {
    if (currentStep === 1) {
      if (!formData.name.trim()) return "Please enter your full name.";
      if (!formData.email.trim()) return "Please enter your email address.";
      if (!/\S+@\S+\.\S+/.test(formData.email))
        return "Please enter a valid email address.";
    }
    if (currentStep === 2) {
      if (!formData.projectType) return "Please select a project type.";
      if (!formData.description.trim())
        return "Please describe your project briefly.";
    }
    return null;
  };

  const handleNext = async () => {
    const validationError = getValidationError();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);

    if (currentStep < totalSteps) {
      setCurrentStep((s) => s + 1);
    } else {
      await handleSubmit();
    }
  };

  const handleBack = () => {
    setError(null);
    setCurrentStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          description: formData.description,
          budget: formData.budget || "Not specified",
          timeline: formData.timeline || "Not specified",
          message: formData.message || "",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setIsSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please try again or reach out directly by email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitles = ["Nice to meet you", "Pick a Service", "Final details"];

  const stepDescriptions = [
    "Let's start with your contact information.",
    "Tell me what type of service you require.",
    "Budget, timeline, and anything else.",
  ];

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="rounded-full border border-white/15 bg-white/5 p-5">
            <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">
              You're all set!
            </h2>
            <p className="text-zinc-400 max-w-xs leading-relaxed">
              Thanks{" "}
              <span className="text-white">{formData.name.split(" ")[0]}</span>!
              I'll get back to you at{" "}
              <span className="text-white">{formData.email}</span> within 24
              hours.
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData({
                name: "",
                email: "",
                projectType: "",
                description: "",
                budget: "",
                timeline: "",
                message: "",
              });
            }}
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4"
          >
            Submit another request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center py-16 gap-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-3">
          Get in Touch
        </h1>
        <p className="text-zinc-500 max-w-sm mx-auto leading-relaxed">
          Have a project in mind? Fill out the form and I'll get back to you
          within 24 hours.
        </p>
      </div>

      <MultiStepForm
        currentStep={currentStep}
        totalSteps={totalSteps}
        title={stepTitles[currentStep - 1]}
        description={stepDescriptions[currentStep - 1]}
        onBack={handleBack}
        onNext={handleNext}
        backButtonText="Back"
        nextButtonText={
          currentStep === totalSteps
            ? isSubmitting
              ? "Sending..."
              : "Send Message"
            : "Continue"
        }
        error={error}
        isLoading={isSubmitting}
        className="w-full"
      >
        {/* Step 1: Contact Info */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className={labelClass}>
                <User className="h-3.5 w-3.5" />
                Full Name <span className="text-zinc-600">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={inputClass}
                autoComplete="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className={labelClass}>
                <Mail className="h-3.5 w-3.5" />
                Email Address <span className="text-zinc-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClass}
                autoComplete="email"
              />
            </div>
          </div>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="projectType" className={labelClass}>
                <Briefcase className="h-3.5 w-3.5" />
                Project Type <span className="text-zinc-600">*</span>
              </Label>
              <Select
                value={formData.projectType}
                onValueChange={(v) => updateField("projectType", v)}
              >
                <SelectTrigger
                  id="projectType"
                  className="bg-zinc-900 border-zinc-800 text-white data-[placeholder]:text-zinc-600 focus:ring-white/20 focus:border-zinc-600"
                >
                  <SelectValue placeholder="Select a project type..." />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                  <SelectItem value="Website / Landing Page">
                    Small Short-Term Projects
                  </SelectItem>
                  <SelectItem value="Contract Per Hour">
                    Contract Per Hour
                  </SelectItem>
                  <SelectItem value="AI-Powered Features">
                    AI-Powered Features
                  </SelectItem>
                  <SelectItem value="I don't know yet">
                    I don't know yet
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className={labelClass}>
                Project Description <span className="text-zinc-600">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Briefly describe what you need — the more context the better."
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                className={`${inputClass} min-h-[110px] resize-none`}
              />
            </div>
          </div>
        )}

        {/* Step 3: Budget & Timeline */}
        {currentStep === 3 && (
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget" className={labelClass}>
                  <DollarSign className="h-3.5 w-3.5" />
                  Budget Range
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(v) => updateField("budget", v)}
                >
                  <SelectTrigger
                    id="budget"
                    className="bg-zinc-900 border-zinc-800 text-white data-[placeholder]:text-zinc-600 focus:ring-white/20 focus:border-zinc-600"
                  >
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectItem value="Under $1,000">Under $1,000</SelectItem>
                    <SelectItem value="$1,000 – $5,000">
                      $1,000 – $5,000
                    </SelectItem>
                    <SelectItem value="$5,000 – $10,000">
                      $5,000 – $10,000
                    </SelectItem>
                    <SelectItem value="$10,000+">$10,000+</SelectItem>
                    <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline" className={labelClass}>
                  <Calendar className="h-3.5 w-3.5" />
                  Timeline
                </Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(v) => updateField("timeline", v)}
                >
                  <SelectTrigger
                    id="timeline"
                    className="bg-zinc-900 border-zinc-800 text-white data-[placeholder]:text-zinc-600 focus:ring-white/20 focus:border-zinc-600"
                  >
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectItem value="ASAP">ASAP</SelectItem>
                    <SelectItem value="1–3 months">1–3 months</SelectItem>
                    <SelectItem value="3–6 months">3–6 months</SelectItem>
                    <SelectItem value="Flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className={labelClass}>
                Anything else?
              </Label>
              <Textarea
                id="message"
                placeholder="Links, references, questions — anything helpful to know."
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={`${inputClass} min-h-[110px] resize-none`}
              />
            </div>
          </div>
        )}
      </MultiStepForm>
    </div>
  );
};

export default ContactSection;
