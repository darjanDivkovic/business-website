import type { Metadata } from "next";
import { AboutPage } from "@/app/pages/About/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Darjan — a freelance React & TypeScript developer with a passion for clean code, modern architecture, and building software that ships.",
  alternates: {
    canonical: "https://darjan.dev/about",
  },
  openGraph: {
    title: "About | Darjan.dev",
    description:
      "Learn about Darjan — a freelance React & TypeScript developer with a passion for clean code, modern architecture, and building software that ships.",
    url: "https://darjan.dev/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Darjan.dev",
    description:
      "Learn about Darjan — a freelance React & TypeScript developer with a passion for clean code, modern architecture, and building software that ships.",
  },
};

export default function Page() {
  return <AboutPage />;
}