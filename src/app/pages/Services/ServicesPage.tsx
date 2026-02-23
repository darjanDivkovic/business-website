"use client";

import { useRef, useState } from "react";
import { Header } from "@/components/ui/header-1";
import { ServicesSection } from "@/components/ui/services-section";
import { ContactSection } from "@/components/ui/contact-section";

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined,
  );
  const contactRef = useRef<HTMLDivElement>(null);

  const handleServiceSelect = (contactId: string) => {
    setSelectedService(contactId);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="relative grow overflow-hidden">
        <ServicesSection onServiceSelect={handleServiceSelect} />
        <div ref={contactRef}>
          <ContactSection preselectedService={selectedService} />
        </div>
      </main>
    </div>
  );
}
