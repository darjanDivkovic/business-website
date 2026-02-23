import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Actor } from "next/font/google";
import { Footer } from "@/components/ui/footer";
import { SplashScreen } from "@/components/ui/splash-screen";
import { Providers } from "@/components/providers";
import { Analytics } from "@vercel/analytics/next";

const actor = Actor({
  subsets: ["latin"],
  weight: ["400"], // Actor only has regular
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "darjan.dev",
  description: "Freelance developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${actor.variable} antialiased`}>
        <Providers>
          <SplashScreen />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
