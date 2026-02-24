import { ContactSection } from "@/components/ui/contact-section";
import { Header } from "@/components/ui/header-1";

export function ContactPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />
      <main className="mx-auto w-full max-w-[min(60vw,1400px)] px-5 sm:px-6 lg:px-8">
        <ContactSection />
      </main>
    </div>
  );
}
