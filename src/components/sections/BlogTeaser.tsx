/**
 * BlogTeaser — homepage section showing the two latest posts.
 */
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { BLOG_POSTS } from "@/lib/constants";

export function BlogTeaser() {
  const latest = BLOG_POSTS.slice(0, 2);
  return (
    <section className="relative w-full py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              Field notes
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Sharp takes, written for builders.
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand"
          >
            View all posts
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {latest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-colors hover:border-brand/40"
            >
              <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">
                  {post.category}
                </span>
                <span>{post.readingMinutes} min read</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-foreground transition-colors hover:text-brand"
                aria-label={`Read ${post.title}`}
              >
                Read article
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
