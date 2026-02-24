"use client";

import { Header } from "@/components/ui/header-1";
import { ServicesSection } from "@/components/ui/services-section";
import { ContactSection } from "@/components/ui/contact-section";

export function ServicesPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="relative grow overflow-hidden">
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
