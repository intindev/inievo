/**
 * JSON-LD schema builders for Inievo Technologies.
 *
 * Each builder returns a plain object that callers stringify into a
 * `scripts` entry of a TanStack `head()` payload, e.g.:
 *
 *   scripts: [{ type: "application/ld+json",
 *               children: JSON.stringify(organizationSchema()) }]
 *
 * The exported <JsonLd /> component is a tiny convenience for routes that
 * want to inline a schema in JSX (e.g. inside `__root.tsx` or a page body)
 * instead of going through `head()`.
 */

import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import type { FAQ } from "@/lib/types";

export interface SchemaObject {
  readonly "@context": "https://schema.org";
  readonly "@type": string;
  readonly [key: string]: unknown;
}

/** Sitewide Organization block — render once on the homepage. */
export function organizationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: "https://res.cloudinary.com/dp5ap39r6/image/upload/v1777712162/6_ot5ui5.png",
    email: SITE_CONFIG.email,
    founder: { "@type": "Person", name: SITE_CONFIG.founder },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chattogram",
      addressCountry: "BD",
    },
    sameAs: SOCIAL_LINKS.map((s) => s.href),
    serviceType: ["Web Development", "Custom Software", "Professional Web Presence"],
    description: SITE_CONFIG.description,
  };
}

/** Per-service Service schema — call from each service route. */
export function serviceSchema(input: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    areaServed: { "@type": "Country", name: "Bangladesh" },
    description: input.description,
    url: `${SITE_CONFIG.url}${input.path}`,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

/** FAQPage schema built from any FAQ[] (drives Google rich results). */
export function faqSchema(faqs: readonly FAQ[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Breadcrumb schema generated from "/a/b/c" style pathnames. */
export function breadcrumbSchema(path: string): SchemaObject {
  const segments = path.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_CONFIG.url + "/",
    },
    ...segments.map((seg, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: humanizeSegment(seg),
      item: `${SITE_CONFIG.url}/${segments.slice(0, idx + 1).join("/")}`,
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/** Article schema for blog posts. */
export function articleSchema(input: {
  title: string;
  description: string;
  slug: string;
  author: string;
  publishedAt: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    author: { "@type": "Person", name: input.author },
    datePublished: input.publishedAt,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dp5ap39r6/image/upload/v1777712162/6_ot5ui5.png",
      },
    },
    mainEntityOfPage: `${SITE_CONFIG.url}/blog/${input.slug}`,
  };
}

/** Convenience: convert any schema to a TanStack head() scripts entry. */
export function jsonLdScript(schema: SchemaObject) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(schema),
  };
}

function humanizeSegment(seg: string): string {
  return seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Optional inline component — useful when you want a JSON-LD block inside
 * JSX rather than in `head().scripts`.
 */
export function JsonLd({ schema }: { schema: SchemaObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
