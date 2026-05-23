import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { BLOG_POSTS } from "@/lib/constants";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) return buildHead("Not Found");
    return buildHead(loaderData.post.title, {
      description: loaderData.post.excerpt,
    });
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background pt-32 pb-32 text-foreground">
      <article className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="group mb-12 inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          <header className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl text-foreground">
              {post.title}
            </h1>
            <div className="mt-8 flex items-center gap-4 border-l-2 border-brand pl-4 text-sm font-medium text-muted-foreground">
              <p>{post.author}</p>
              <span className="h-1 w-1 rounded-full bg-border" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* Cleaner production-grade article rendering */}
          <div className="prose prose-lg prose-zinc max-w-none text-muted-foreground prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground prose-h2:text-3xl prose-h3:text-2xl prose-a:text-brand prose-a:font-medium prose-a:underline-offset-4 hover:prose-a:text-brand-deep prose-strong:text-foreground prose-strong:font-semibold prose-blockquote:border-l-brand prose-blockquote:bg-secondary/30 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-foreground/90">
            <p className="lead text-xl leading-relaxed text-foreground/90 mb-12 font-medium">
              {post.excerpt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>
    </main>
  );
}
