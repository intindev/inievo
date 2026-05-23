import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { buildHead } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/constants";

export const Route = createFileRoute("/blog")({
  head: () => buildHead("Insights"),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Insights
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              Engineering <br />
              field notes.
            </h1>
            <p className="mt-10 text-xl leading-relaxed text-muted-foreground max-w-2xl">
              Thoughts on software architecture, design systems, and building resilient platforms
              for the modern web.
            </p>
          </motion.div>

          <div className="mt-24 space-y-0">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative border-t border-border/60 py-10 transition-colors hover:bg-secondary/20"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-3">
                    <p className="text-sm font-medium text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <span className="mt-2 inline-block text-[11px] font-semibold uppercase tracking-wider text-brand">
                      {post.category}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                      <span className="sr-only">Read {post.title}</span>
                    </Link>
                    <h2 className="font-display text-2xl font-semibold text-foreground group-hover:text-brand transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
