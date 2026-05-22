/**
 * Blog post template — readable article layout with author block, category
 * breadcrumb, share buttons, and a related-posts section.
 */
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Linkedin, Link as LinkIcon, Twitter } from "lucide-react";

import {
  articleSchema,
  breadcrumbSchema,
  jsonLdScript,
} from "@/components/seo/JsonLd";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/constants";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post not found — Inievo" }] };
    const path = `/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} — Inievo Blog` },
        { name: "description", content: post.excerpt },
        { name: "author", content: post.author },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
        { property: "og:site_name", content: SITE_CONFIG.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        jsonLdScript(
          articleSchema({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            author: post.author,
            publishedAt: post.publishedAt,
          }),
        ),
        jsonLdScript(breadcrumbSchema(path)),
      ],
    };
  },
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const shareUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const tweetHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    post.title,
  )}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinHref = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    shareUrl,
  )}`;

  return (
    <main className="bg-background pb-24 pt-32 sm:pt-40">
      <article className="mx-auto max-w-3xl px-6">
        <nav className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <Link to="/blog" className="inline-flex items-center gap-1 hover:text-brand">
            <ArrowLeft className="h-3 w-3" /> Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-brand">{post.category}</span>
        </nav>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-4 border-y border-border py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
              {(post.author as string)
                .split(" ")
                .map((s: string) => s[0])
                .join("")
                .slice(0, 2)}
            </span>
            <div>
              <div className="font-medium text-foreground">{post.author}</div>
              <time dateTime={post.publishedAt} className="text-xs">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readingMinutes} min read
              </time>
            </div>
          </div>
        </div>

        <div className="prose prose-neutral mt-10 max-w-none text-base leading-relaxed text-foreground/90 dark:prose-invert">
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          <p>
            This is a placeholder body for the post. The Inievo blog will host original
            essays, case studies, and field reports from our work across Bangladesh.
            We're publishing slowly and deliberately — quality over cadence.
          </p>
          <p>
            Subscribe via our LinkedIn page, or check back at the start of each month
            for fresh writing from the studio.
          </p>
        </div>

        {/* Share */}
        <div className="mt-12 flex items-center gap-3 border-t border-border pt-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Share
          </span>
          <a
            href={tweetHref}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on X"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Copy link"
            onClick={() => {
              if (typeof navigator !== "undefined") {
                void navigator.clipboard?.writeText(shareUrl);
              }
            }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <LinkIcon className="h-4 w-4" />
          </button>
        </div>
      </article>

      {/* Related */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Keep reading
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-3xl border border-border bg-card p-7 transition-colors hover:border-brand/40"
            >
              <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                {p.category}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-brand">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
