import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header-1";

export function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="relative grow overflow-hidden">
        <HeroSection />
        <LogosSection />
      </main>
    </div>
  );
}
