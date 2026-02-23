import { ContactSection } from "@/components/ui/contact-section";
import { Header } from "@/components/ui/header-1";

export function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="relative grow overflow-hidden top-[-57px]">
        <ContactSection />
      </main>
    </div>
  );
}
