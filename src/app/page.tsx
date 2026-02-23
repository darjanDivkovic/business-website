import type { Metadata } from "next";
import { HomePage } from "@/app/pages/Home/HomePage";

export const metadata: Metadata = {
  title: {
    absolute: "Darjan.dev",
  },
  description:
    "Freelance React & TypeScript developer building fast, modern web applications. Specializing in Next.js, clean architecture, and performance. Available for projects.",
  alternates: {
    canonical: "https://darjan.dev",
  },
  openGraph: {
    title: "Darjan.dev",
    description:
      "Freelance React & TypeScript developer building fast, modern web applications. Specializing in Next.js, clean architecture, and performance.",
    url: "https://darjan.dev",
  },
};

export default function Page() {
  return <HomePage />;
}
