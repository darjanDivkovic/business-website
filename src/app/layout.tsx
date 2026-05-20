import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Actor, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/ui/footer";
import { SplashScreen } from "@/components/ui/splash-screen";
import { ChatWidget } from "@/components/ui/chat-widget";
import { NeuralVortexBackground } from "@/components/ui/neural-vortex-background";
import { LenisProvider } from "@/components/ui/lenis-provider";
import { Analytics } from "@vercel/analytics/next";

const actor = Actor({
  subsets: ["latin"],
  weight: ["400"], // Actor only has regular
  variable: "--font-primary",
  display: "swap",
});

// Monospace — used for the technical micro-labels on the /cloudsforge case study.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://www.darjan.dev";

const rootDescription =
  "Full-stack engineer who shipped a live AI desktop product solo. I build AI-powered features, full-stack products, and design-to-production frontends. Available for founding-team roles and senior contract work.";

// Person structured data — helps Google understand who the site is about and
// connects the branded-search result to verified profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Darjan",
  url: siteUrl,
  jobTitle: "Full-Stack Engineer & AI Product Builder",
  description: rootDescription,
  sameAs: [
    "https://github.com/darjandev",
    "https://linkedin.com/in/darjandev",
    "https://x.com/darjandev",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Darjan.dev",
    default: "Darjan.dev - Full-Stack Engineer & AI Product Builder",
  },
  description: rootDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Darjan.dev",
    title: "Darjan - Full-Stack Engineer & AI Product Builder",
    description: rootDescription,
    images: [
      {
        url: siteUrl,
        width: 1200,
        height: 630,
        alt: "Darjan - Full-Stack Engineer & AI Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darjan - Full-Stack Engineer & AI Product Builder",
    description: rootDescription,
    images: siteUrl,
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${actor.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Global fixed background — sits behind all content, follows scroll.
            No ancestor transform must wrap it or `position: fixed` breaks. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <NeuralVortexBackground className="fixed inset-0 -z-10 h-screen w-screen opacity-90" />
        <LenisProvider />
        <SplashScreen />
        {children}
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
