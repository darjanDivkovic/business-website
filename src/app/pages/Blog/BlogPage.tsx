import { getAllPosts, formatDate, type PostMeta } from "@/lib/blog";
import { Header } from "@/components/ui/header-1";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

// ─── Post Card ────────────────────────────────────────────────────────────────

function PostCard({ post }: { post: PostMeta }) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex flex-col h-full overflow-hidden rounded-xl bg-background p-5 md:p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
            {/* Category */}
            <span className="self-start mb-3 text-xs font-semibold uppercase tracking-widest text-[#5566DD]">
              {post.category}
            </span>

            {/* Title */}
            <h2 className="text-lg font-semibold leading-snug text-foreground line-clamp-2 transition-colors duration-200 group-hover:text-[#88AAFF]">
              {post.title}
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">
              {post.description}
            </p>

            {/* Footer */}
            <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-3" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="text-border">·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3" />
                  {post.readTime}
                </span>
              </div>
              <ArrowRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#88AAFF]" />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex w-full flex-col">
      <Header />
      <main>
        {/* Hero */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5566DD] mb-3">
              WRITING
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              Thoughts on building
              <br className="hidden sm:block" /> the web.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Deep-dives on React, TypeScript, architecture decisions, and the
              craft of shipping great software for modern teams.
            </p>
          </div>
        </div>

        {/* Post grid */}
        <section className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">
              No posts yet — check back soon.
            </p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
