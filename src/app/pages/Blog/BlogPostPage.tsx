import { getPostBySlug, formatDate } from "@/lib/blog";
import { Header } from "@/components/ui/header-1";
import { mdxComponents } from "@/components/ui/mdx-components";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface Props {
  slug: string;
}

const relatedServices = [
  { label: "React App Development", href: "/services" },
  { label: "Frontend Modernisation", href: "/services" },
  { label: "Dashboard & Data UI", href: "/services" },
  { label: "Design-to-Code", href: "/services" },
];

export async function BlogPostPage({ slug }: Props) {
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="flex w-full flex-col">
      <Header />
      <main>
        {/* ── Post header ─────────────────────────────────────────── */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 md:py-16">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ChevronLeft className="size-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5566DD] mb-4">
              {post.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {post.description}
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="text-border select-none">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* ── Content + Sidebar ────────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_268px] gap-12 xl:gap-16">

            {/* Article */}
            <article className="min-w-0">
              <MDXRemote source={post.content} components={mdxComponents} />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-border/60 text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Bottom CTA */}
              <div className="mt-14 rounded-2xl border border-[#3A2490]/50 bg-gradient-to-br from-[#1E1060]/12 via-background to-[#0E2060]/8 p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#5566DD] mb-2">
                  Let&apos;s Work Together
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug">
                  If this approach solved a problem you&apos;re facing, I help
                  teams implement exactly this.
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl">
                  Book a quick 15-minute call and we&apos;ll figure out whether
                  I&apos;m the right fit for your project — no pressure, no
                  sales pitch.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Book a quick call
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
              {/* CTA card */}
              <div className="rounded-xl border border-border bg-background/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Work with Darjan
                </p>
                <h3 className="font-semibold text-foreground leading-snug mb-2">
                  Building something similar?
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  I build React applications for teams that want to ship fast
                  and scale cleanly.
                </p>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/contact">Schedule 15 min →</Link>
                </Button>
              </div>

              {/* Related Services */}
              <div className="rounded-xl border border-border p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Related Services
                </p>
                <ul className="space-y-2.5">
                  {relatedServices.map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        className="text-sm text-muted-foreground hover:text-[#88AAFF] transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight className="size-3 text-[#5566DD] shrink-0 transition-transform group-hover:translate-x-0.5" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
