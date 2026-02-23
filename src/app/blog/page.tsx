import type { Metadata } from "next";
import { BlogPage } from "@/app/pages/Blog/BlogPage";

export const metadata: Metadata = {
  title: "Blog | darjan.dev",
  description:
    "Thoughts on React, TypeScript, architecture decisions, and shipping great software — from a freelance developer who builds for modern teams.",
  openGraph: {
    title: "Blog | darjan.dev",
    description:
      "Thoughts on React, TypeScript, architecture decisions, and shipping great software.",
    type: "website",
    url: "https://darjan.dev/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | darjan.dev",
    description:
      "Thoughts on React, TypeScript, architecture decisions, and shipping great software.",
  },
};

export default function Page() {
  return <BlogPage />;
}
