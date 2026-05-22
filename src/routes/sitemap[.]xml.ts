/**
 * Dynamic sitemap.xml — keep entries in sync with the public routes.
 */
import { createFileRoute } from "@tanstack/react-router";

import { BLOG_POSTS } from "@/lib/constants";

const BASE_URL = "https://inievo.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services/sme-web-presence", changefreq: "monthly", priority: "0.9" },
          { path: "/services/custom-software", changefreq: "monthly", priority: "0.9" },
          { path: "/services/pro-presence", changefreq: "monthly", priority: "0.9" },
          { path: "/labs", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
        ];
        const postEntries: SitemapEntry[] = BLOG_POSTS.map((p) => ({
          path: `/blog/${p.slug}`,
          lastmod: p.publishedAt,
          changefreq: "monthly",
          priority: "0.5",
        }));

        const urls = [...staticEntries, ...postEntries].map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
