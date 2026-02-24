import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header-1";
import { GalleryScrollSection } from "@/components/ui/gallery-scroll-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ServicesSection } from "@/components/ui/services-section";
import { AboutTrustSection } from "@/components/ui/about-trust-section";
import ContactSection from "@/components/ui/contact-section";

export function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="relative grow overflow-hidden top-[-57px]">
        <HeroSection />
        <LogosSection />
        <AboutTrustSection />
        <GalleryScrollSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
