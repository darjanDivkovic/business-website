import { HeroSection } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header-1";
// TEMP: everything but the hero is disabled to isolate scroll jank
import { LogosSection } from "@/components/ui/hero-1";
import { FeaturedProductSection } from "@/components/ui/featured-product-section";
import { GalleryScrollSection } from "@/components/ui/gallery-scroll-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ScrollRevealSection } from "@/components/ui/scroll-reveal-section";
// import { ServicesSection } from "@/components/ui/services-section";
import { AboutTrustSection } from "@/components/ui/about-trust-section";
import { ContactSection } from "@/components/ui/contact-section";

export function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="relative grow overflow-x-clip top-[-57px]">
        <ScrollRevealSection disableEnter>
          <HeroSection />
        </ScrollRevealSection>

        <FeaturedProductSection />

        <ScrollRevealSection amount={0} margin="0px 0px 150px 0px">
          <TestimonialsSection />
        </ScrollRevealSection>

        <ScrollRevealSection amount={0} margin="0px 0px 150px 0px">
          <AboutTrustSection />
        </ScrollRevealSection>

        <ScrollRevealSection amount={0} margin="0px 0px 150px 0px">
          <GalleryScrollSection />
        </ScrollRevealSection>
        {/* <ServicesSection /> */}
        <LogosSection />
        <ScrollRevealSection amount={0} margin="0px 0px 150px 0px">
          <ContactSection />
        </ScrollRevealSection>
      </main>
    </div>
  );
}
