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

export const metadata: Metadata = {
  metadataBase: new URL("https://darjan.dev"),
  title: {
    template: "%s | Darjan.dev",
    default: "Darjan.dev",
  },
  description:
    "Freelance React & TypeScript developer building fast, modern web applications. Specializing in Next.js, clean architecture, and performance. Available for projects.",
  keywords: [
    "freelance developer",
    "React developer",
    "TypeScript developer",
    "Next.js developer",
    "frontend developer",
    "web development",
    "Darjan",
    "darjan.dev",
  ],
  authors: [{ name: "Darjan", url: "https://darjan.dev" }],
  creator: "Darjan",
  publisher: "Darjan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darjan.dev",
    siteName: "Darjan.dev",
    title: "Darjan.dev",
    description:
      "Freelance React & TypeScript developer building fast, modern web applications. Specializing in Next.js, clean architecture, and performance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darjan.dev",
    description:
      "Freelance React & TypeScript developer building fast, modern web applications. Specializing in Next.js, clean architecture, and performance.",
  },
  alternates: {
    canonical: "https://darjan.dev",
  },
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
