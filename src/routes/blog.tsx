/**
 * Blog index — listing of published posts with category filter UI.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { ServicePageHero } from "@/components/ui/ServicePageHero";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { breadcrumbSchema, jsonLdScript } from "@/components/seo/JsonLd";
import { SEO_CONFIG, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    buildHead("blog", {
      scripts: [jsonLdScript(breadcrumbSchema(SEO_CONFIG.blog.path))],
    }),
  component: Page,
});

function Page() {
  const [active, setActive] = useState<(typeof BLOG_CATEGORIES)[number]>("All");
  const visible =
    active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);

  return (
    <main>
      <ServicePageHero
        tag="Field notes"
        title="Sharp takes on building from Bangladesh."
        subtitle="Strategy for SMEs, engineering deep-dives, and quiet case studies from real Inievo projects."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div
          role="tablist"
          aria-label="Filter posts by category"
          className="flex flex-wrap gap-2"
        >
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                active === c
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-brand/40 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-brand/40"
            >
              <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">
                  {post.category}
                </span>
                <span>{post.readingMinutes} min read</span>
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <time className="text-xs text-muted-foreground" dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand"
                  aria-label={`Read ${post.title}`}
                >
                  Read
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
