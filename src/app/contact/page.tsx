import type { Metadata } from "next";
import { ContactPage } from "@/app/pages/Contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a project in mind? Get in touch with Darjan — freelance React & TypeScript developer available for web development projects.",
  alternates: {
    canonical: "https://darjan.dev/contact",
  },
  openGraph: {
    title: "Contact | Darjan.dev",
    description:
      "Have a project in mind? Get in touch with Darjan — freelance React & TypeScript developer available for web development projects.",
    url: "https://darjan.dev/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Darjan.dev",
    description:
      "Have a project in mind? Get in touch with Darjan — freelance React & TypeScript developer available for web development projects.",
  },
};

export default function Page() {
  return <ContactPage />;
}