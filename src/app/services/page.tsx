import type { Metadata } from "next";
import { ServicesPage } from "@/app/pages/Services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development services by Darjan — React, TypeScript, Next.js, full-stack development, performance optimization, and modern UI. Let's build something great.",
  alternates: {
    canonical: "https://darjan.dev/services",
  },
  openGraph: {
    title: "Services | Darjan.dev",
    description:
      "Web development services by Darjan — React, TypeScript, Next.js, full-stack development, performance optimization, and modern UI.",
    url: "https://darjan.dev/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Darjan.dev",
    description:
      "Web development services by Darjan — React, TypeScript, Next.js, full-stack development, performance optimization, and modern UI.",
  },
};

export default function Page() {
  return <ServicesPage />;
}
