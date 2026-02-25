import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Actor } from "next/font/google";
import { Footer } from "@/components/ui/footer";
import { SplashScreen } from "@/components/ui/splash-screen";
import { ChatWidget } from "@/components/ui/chat-widget";
import { Analytics } from "@vercel/analytics/next";

const actor = Actor({
  subsets: ["latin"],
  weight: ["400"], // Actor only has regular
  variable: "--font-primary",
  display: "swap",
});

const siteUrl = "https://www.darjan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Darjan.dev",
    default: "Darjan.dev — Freelance React & Next.js Developer",
  },
  description:
    "Freelance React & TypeScript developer building fast, modern web applications. Specializing in Next.js, clean architecture, and performance. Available for projects.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Darjan.dev",
    title: "Darjan — Freelance React & Next.js Developer",
    description:
      "Freelance React & TypeScript developer building fast, modern web applications. Specializing in Next.js, clean architecture, and performance.",
    images: [
      {
        url: siteUrl,
        width: 1200,
        height: 630,
        alt: "Darjan — Freelance React & Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darjan — Freelance React & Next.js Developer",
    description:
      "Freelance React & TypeScript developer building fast, modern web applications. Specializing in Next.js, clean architecture, and performance.",
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
      <body className={`${actor.variable} antialiased`}>
        <SplashScreen />
        {children}
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
