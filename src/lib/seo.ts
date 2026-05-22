/**
 * Centralized SEO configuration for every public Inievo route.
 *
 * The site runs on TanStack Start, so we return the native `head()` shape
 * ({ meta, links, scripts }) — not a Next.js `Metadata` object. Routes call
 * `buildHead("home")` (optionally with extras) so titles, descriptions, OG
 * tags, canonical, keywords, and JSON-LD all live in ONE place.
 */

import { SITE_CONFIG } from "./constants";

export type PageKey =
  | "home"
  | "sme"
  | "custom"
  | "pro"
  | "labs"
  | "blog"
  | "about"
  | "contact";

export interface SeoEntry {
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly path: string; // canonical path, leading slash, no trailing slash
}

export const SEO_CONFIG: Readonly<Record<PageKey, SeoEntry>> = {
  home: {
    title: "Inievo Technologies | Digital Growth Partner Bangladesh",
    description:
      "High-performance websites, custom software, and professional web presence for SMEs and top professionals across Bangladesh.",
    keywords: [
      "IT agency Bangladesh",
      "web development Chittagong",
      "website for small business Bangladesh",
      "custom software Bangladesh",
      "professional website doctor Bangladesh",
    ],
    path: "/",
  },
  sme: {
    title: "SME Web Presence Bangladesh | Inievo Technologies",
    description:
      "Inievo builds fast, credible, and SEO-optimized websites for local businesses and Facebook-based shops in Bangladesh. Affordable packages. Modern technology.",
    keywords: [
      "Facebook shop website Bangladesh",
      "SME website Bangladesh",
      "ecommerce website Chittagong",
      "small business website Dhaka",
      "affordable website Bangladesh",
    ],
    path: "/services/sme-web-presence",
  },
  custom: {
    title: "Custom Software & App Development Bangladesh | Inievo",
    description:
      "Budget-friendly, scalable custom software and mobile apps for businesses and institutions in Bangladesh. Built clean. Built to last.",
    keywords: [
      "custom software Bangladesh",
      "mobile app developer Bangladesh",
      "ERP development Chittagong",
      "SaaS development Bangladesh",
      "React Native app Bangladesh",
    ],
    path: "/services/custom-software",
  },
  pro: {
    title: "Professional Websites for Doctors & Engineers | Inievo",
    description:
      "Build your digital authority. Inievo creates trust-first personal websites for doctors, engineers, lawyers, and high-profile professionals in Bangladesh.",
    keywords: [
      "doctor website Bangladesh",
      "personal website lawyer Bangladesh",
      "engineer portfolio website",
      "physician personal website Dhaka",
      "professional portfolio website Bangladesh",
    ],
    path: "/services/pro-presence",
  },
  labs: {
    title: "Inievo Labs | Research-Driven Innovation & The Chattala",
    description:
      "Where Inievo builds for the community. Meet The Chattala — a hyperlocal web app for Chittagong, and explore our research philosophy.",
    keywords: [
      "The Chattala",
      "Chittagong web app",
      "hyperlocal Bangladesh",
      "Inievo Labs",
      "research driven product Bangladesh",
    ],
    path: "/labs",
  },
  blog: {
    title: "Inievo Blog | Field Notes on Building Digital in Bangladesh",
    description:
      "Strategy for SMEs, engineering deep-dives, and quiet case studies from the Inievo studio in Bangladesh.",
    keywords: [
      "Bangladesh tech blog",
      "SME growth blog",
      "web development insights Bangladesh",
    ],
    path: "/blog",
  },
  about: {
    title: "About Inievo Technologies | A Studio Built in Bangladesh",
    description: `Founded by ${SITE_CONFIG.founder}, Inievo is a Bangladesh-based studio engineering trust into every product we ship — for clients at home and abroad.`,
    keywords: [
      "About Inievo",
      "Abu Md. Selim",
      "Bangladesh software studio",
      "Chittagong IT agency",
    ],
    path: "/about",
  },
  contact: {
    title: "Contact Inievo Technologies | Start a Project Conversation",
    description:
      "Start a project conversation with Inievo Technologies. Free initial audit available — typically 24-hour response from our Chittagong studio.",
    keywords: [
      "contact Inievo",
      "hire web developer Bangladesh",
      "software agency Chittagong contact",
    ],
    path: "/contact",
  },
};

export interface HeadExtras {
  readonly scripts?: Array<Record<string, unknown>>;
  readonly extraMeta?: Array<Record<string, string>>;
  readonly ogType?: "website" | "article" | "product";
}

/**
 * Returns a TanStack Start `head()` payload for a known page key.
 * Pass `extras.scripts` to inject JSON-LD blocks built via `@/components/seo/JsonLd`.
 */
export function buildHead(pageKey: PageKey, extras: HeadExtras = {}) {
  const entry = SEO_CONFIG[pageKey];
  const ogType = extras.ogType ?? "website";

  return {
    meta: [
      { title: entry.title },
      { name: "description", content: entry.description },
      { name: "keywords", content: entry.keywords.join(", ") },
      { name: "author", content: SITE_CONFIG.founder },
      { property: "og:title", content: entry.title },
      { property: "og:description", content: entry.description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: entry.path },
      { property: "og:site_name", content: SITE_CONFIG.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: entry.title },
      { name: "twitter:description", content: entry.description },
      ...(extras.extraMeta ?? []),
    ] as Array<Record<string, string>>,
    links: [{ rel: "canonical", href: entry.path }] as Array<Record<string, string>>,
    scripts: (extras.scripts ?? []) as Array<Record<string, unknown>>,
  };
}
