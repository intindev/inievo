/**
 * Blog post seeds for Inievo Technologies.
 *
 * These are metadata-only entries. Actual long-form bodies will live in
 * MDX files (or be fetched from a CMS) in a later sprint. For now the
 * `/blog` listing, `/blog/$slug` template, sitemap, and Article JSON-LD
 * all source from this array.
 */

import type { BlogPost } from "@/lib/types";

export interface BlogPostSeed extends BlogPost {
  readonly category: string;
  readonly targetKeyword: string;
}

export const BLOG_POST_SEEDS: readonly BlogPostSeed[] = [
  {
    slug: "why-facebook-shops-need-website-bangladesh",
    title: "Why Every Facebook Shop in Bangladesh Needs a Website",
    excerpt:
      "Facebook is rented space — when the algorithm changes, your business can stop overnight. This post explains why owning a website is no longer a luxury, but survival.",
    publishedAt: "2025-05-02",
    readingMinutes: 6,
    author: "Abu Md. Selim",
    tags: ["SME", "Strategy"],
    category: "SME Growth",
    targetKeyword: "Facebook shop website Bangladesh",
  },
  {
    slug: "is-your-business-ready-for-custom-software",
    title: "Is Your Business Ready for Custom Software?",
    excerpt:
      "Seven signals that show your team has outgrown spreadsheets and off-the-shelf tools — and when building custom is the smartest decision.",
    publishedAt: "2025-04-20",
    readingMinutes: 8,
    author: "Engineering Lead",
    tags: ["Custom Software", "Scaling"],
    category: "Engineering",
    targetKeyword: "custom software for SME Bangladesh",
  },
  {
    slug: "cardiologist-personal-website-case-study",
    title: "How a Doctor's Personal Website Transformed His Practice",
    excerpt:
      "A Dhaka-based cardiologist case study: how a credibility-first website tripled inbound consultations — and which decisions mattered most.",
    publishedAt: "2025-04-05",
    readingMinutes: 5,
    author: "Abu Md. Selim",
    tags: ["Pro Presence", "Case Study"],
    category: "Case Study",
    targetKeyword: "doctor website Bangladesh case study",
  },
  {
    slug: "the-chattala-building-a-hyperlocal-app",
    title: "The Chattala: Building a Hyperlocal App From the Ground Up",
    excerpt:
      "Inievo Labs field notes on designing a city-specific product for Chittagong — what on-the-ground research taught us, and why hyperlocal beats one-size-fits-all.",
    publishedAt: "2025-03-22",
    readingMinutes: 9,
    author: "Research Lead",
    tags: ["Labs", "Research"],
    category: "Labs",
    targetKeyword: "The Chattala Chittagong app",
  },
  {
    slug: "nextjs-vs-wordpress-for-bangladeshi-sme",
    title: "Next.js vs WordPress: Which is Best for Bangladeshi SMEs?",
    excerpt:
      "A clear comparison across four critical dimensions: speed, cost, security, and SEO — plus an honest recommendation on which to choose and when.",
    publishedAt: "2025-03-08",
    readingMinutes: 7,
    author: "Engineering Lead",
    tags: ["Engineering", "SME"],
    category: "Engineering",
    targetKeyword: "Nextjs vs WordPress Bangladesh",
  },
  {
    slug: "web-presence-roi-local-business-case-study",
    title: "Web Presence ROI: A Local Business Case Study",
    excerpt:
      "Numbers, not promises. A Chittagong-based retailer's six-month data broken down — how website plus Facebook synergy increased monthly revenue 1.8x.",
    publishedAt: "2025-02-18",
    readingMinutes: 6,
    author: "Abu Md. Selim",
    tags: ["SME", "Case Study"],
    category: "Case Study",
    targetKeyword: "web presence ROI Bangladesh",
  },
];

export const BLOG_CATEGORIES_FULL = [
  "All",
  "SME Growth",
  "Engineering",
  "Case Study",
  "Labs",
] as const;
