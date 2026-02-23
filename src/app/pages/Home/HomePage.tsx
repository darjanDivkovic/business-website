import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header-1";
import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ServicesSection } from "@/components/ui/services-section";

export function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="relative grow overflow-hidden top-[-57px]">
        <HeroSection />
        <LogosSection />
        <ServicesSection />
        <hr />
        <GalleryHoverCarousel heading="Featured Projects" />
        <hr />
        <TestimonialsSection />
      </main>
    </div>
  );
}
