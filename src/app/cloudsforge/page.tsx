import type { Metadata } from "next";
import { CloudsForgePage } from "@/app/pages/CloudsForge/CloudsForgePage";

const description =
  "CloudsForge - a desktop AI video workstation I designed, built, and shipped solo. The full case study: problem, solution, journey, tech stack, and what shipping a product end-to-end taught me.";

export const metadata: Metadata = {
  title: "CloudsForge - Case Study",
  description,
  alternates: {
    canonical: "https://www.darjan.dev/cloudsforge",
  },
  openGraph: {
    title: "CloudsForge - Case Study | Darjan.dev",
    description,
    url: "https://www.darjan.dev/cloudsforge",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudsForge - Case Study | Darjan.dev",
    description,
  },
};

// SoftwareApplication structured data — lets Google show CloudsForge as a
// product (name, OS, price) and link it back to Darjan as the author.
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CloudsForge",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows, macOS, Linux",
  description,
  url: "https://www.darjan.dev/cloudsforge",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Darjan",
    url: "https://www.darjan.dev",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <CloudsForgePage />
    </>
  );
}
