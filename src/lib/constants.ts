/**
 * Site-wide constants for Inievo Technologies.
 *
 * All user-facing copy, navigation, and brand metadata lives here so
 * components stay declarative and content edits never require touching JSX.
 */

import type { NavLink, SocialLink } from "./types";

export const SITE_CONFIG = {
  name: "Inievo Technologies",
  shortName: "Inievo",
  tagline: "Architecting high-fidelity platforms and bespoke digital experiences.",
  description:
    "Inievo is an elite software engineering studio and digital design atelier. We build high-performance web systems, custom software architectures, and premium brand experiences for ambitious global teams.",
  url: "https://inievo.com",
  email: "hello@inievo.com",
  phone: "+8809678791213",
  address: "Chattogram, Bangladesh",
  founder: "Abu Md. Selim",
  locale: "en-US",
  logo: "https://res.cloudinary.com/dp5ap39r6/image/upload/v1777712162/6_ot5ui5.png",
  social: {
    twitter: "https://x.com/inievo",
    github: "https://github.com/inievo",
    linkedin: "https://www.linkedin.com/company/inievo",
  },
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/", description: "Inievo at a glance" },
  {
    label: "Web Systems",
    href: "/services/sme-web-presence",
    description: "High-performance digital foundations for growing businesses.",
  },
  {
    label: "Bespoke Engineering",
    href: "/services/custom-software",
    description: "Proprietary software architectures engineered to scale.",
  },
  {
    label: "Brand Systems",
    href: "/services/pro-presence",
    description: "Editorial-grade digital identities and elite portfolios.",
  },
  { label: "Labs", href: "/labs", description: "Inievo Labs — including The Chattala" },
  { label: "Blog", href: "/blog", description: "Field notes from our studio" },
  { label: "About", href: "/about", description: "The team and the mission" },
  { label: "Contact", href: "/contact", description: "Start a conversation" },
] as const;

/** Top-level nav shown in the header. Services collapse under one entry. */
export const PRIMARY_NAV: readonly NavLink[] = [
  { label: "Services", href: "/services/sme-web-presence", description: "What we build" },
  { label: "Labs", href: "/labs", description: "Inievo Labs" },
  { label: "Blog", href: "/blog", description: "Field notes" },
  { label: "About", href: "/about", description: "About Inievo" },
  { label: "Contact", href: "/contact", description: "Get in touch" },
] as const;

export const SERVICE_LINKS: readonly NavLink[] = [
  {
    label: "Web Systems",
    href: "/services/sme-web-presence",
    description: "High-performance digital foundations for growing businesses.",
  },
  {
    label: "Bespoke Engineering",
    href: "/services/custom-software",
    description: "Proprietary software architectures engineered to scale.",
  },
  {
    label: "Brand Systems",
    href: "/services/pro-presence",
    description: "Editorial-grade digital identities and elite portfolios.",
  },
] as const;

export const COMPANY_LINKS: readonly NavLink[] = [
  { label: "About", href: "/about", description: "Our story" },
  { label: "Labs", href: "/labs", description: "Inievo Labs" },
  { label: "Blog", href: "/blog", description: "Insights" },
  { label: "Contact", href: "/contact", description: "Reach out" },
] as const;

/** Brand color tokens mirrored for runtime use (charts, inline SVG, etc.). */
export const BRAND_COLORS = {
  primary: "#137ece", // brand blue
  deep: "#0f68ad", // brand deep blue
  tint: "#e8f2fb", // brand soft blue tint
  brandSoft: "#e8f2fb", // soft blue alias
  ink: "#111827", // heading/text color
  paper: "#f7f8fa", // base light background
  highlight: "#a87400", // premium gold/yellow accent
  highlightSoft: "#fdfbf3", // extremely light gold highlight background
  highlightForeground: "#5c3e00", // high-contrast gold/brown text
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/inievo", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/inievo", icon: "github" },
  { label: "X / Twitter", href: "https://x.com/inievo", icon: "twitter" },
  { label: "Dribbble", href: "https://dribbble.com/inievo", icon: "dribbble" },
] as const;

export const CTA = {
  primary: { label: "Initiate a Project", href: "/contact" },
  secondary: { label: "Explore Capabilities", href: "/services/sme-web-presence" },
} as const;

export const FOOTER_NOTE = "";

export const HERO_CONTENT = {
  eyebrow: "Elite Software Engineering & Design Studio",
  headlineStatic1: "Architecting",
  headlineHighlight: "high-fidelity",
  headlineStatic2: "digital systems.",
  subheadline:
    "We partner with ambitious founders, established professionals, and growing enterprises to craft enduring digital platforms that blend structural integrity with timeless design.",
  primaryCta: { label: "Initiate Project", href: "/contact" },
  secondaryCta: { label: "Explore Labs", href: "/labs" },
  floatingStats: [
    { id: "projects", value: "50+", label: "Completed Projects", icon: "rocket" },
    { id: "satisfaction", value: "100%", label: "Client Satisfaction", icon: "heart" },
    { id: "domains", value: "3", label: "Core Capabilities", icon: "layers" },
  ] as const,
} as const;

export const TRUST_BAR_ITEMS = [
  "Web Presence Systems",
  "Bespoke Platform Engineering",
  "Editorial Brand Design",
  "Hyperlocal Product Research",
  "Chattagram, Bangladesh",
] as const;

export const HOME_CAPABILITIES = {
  title: "Capabilities.",
  description:
    "We bridge the gap between heavy engineering and high-end design, delivering platforms that are as robust as they are beautiful.",
  viewAllText: "View full services",
  items: [
    {
      title: "Web Systems",
      description:
        "High-performance digital foundations tailored for growing enterprises. We build highly optimized, SEO-ready platforms that drive conversion and establish market authority.",
      href: "/services/sme-web-presence",
      metrics: ["100/100 Core Web Vitals", "Sub-second LCP"],
    },
    {
      title: "Bespoke Engineering",
      description:
        "Proprietary software architectures engineered to scale. From complex SaaS infrastructure to high-throughput internal tools, we deliver structural integrity without compromise.",
      href: "/services/custom-software",
      metrics: ["Microservices", "Real-time sync"],
    },
    {
      title: "Brand Systems",
      description:
        "Editorial-grade digital identities that command attention. We translate business logic into stunning visual experiences, ensuring every touchpoint feels undeniably premium.",
      href: "/services/pro-presence",
      metrics: ["Design Tokens", "Fluid Typography"],
    },
  ],
} as const;

export const OPERATING_PRINCIPLES = {
  title: "Operating Model.",
  description:
    "We don't assemble templates. We engineer bespoke platforms from the ground up, utilizing modern primitives and strict architectural discipline.",
  items: [
    {
      num: "01",
      title: "Type-Safe Architecture",
      desc: "Every layer, from database schemas to client UI, is strictly typed. We eliminate runtime surprises before they happen.",
    },
    {
      num: "02",
      title: "Edge-First Performance",
      desc: "We deploy to the edge by default. Assets are optimized, queries are cached, and latency is minimized across the globe.",
    },
    {
      num: "03",
      title: "Semantic Design Systems",
      desc: "We don't rely on massive UI libraries. We build bespoke, semantic CSS variable systems that guarantee absolute token integrity.",
    },
    {
      num: "04",
      title: "Uncompromising Accessibility",
      desc: "Digital experiences should be universal. We engineer with ARIA standards, keyboard navigation, and structural semantics baked in.",
    },
  ],
} as const;

export const FINAL_CTA_CONTENT = {
  headline: "Ready to build?",
  subheadline:
    "Whether you need a bespoke platform or a complete brand transformation, we are ready to engineer your vision.",
  ctaLabel: "Start a Conversation",
  ctaHref: "/contact",
} as const;

export const HOME_TESTIMONIALS_CONTENT = {
  headline: "Client Outcomes.",
  subheadline: "What leaders say about partnering with our studio.",
} as const;

export const STATS = [
  {
    id: "projects",
    value: 50,
    suffix: "+",
    label: "Engagements",
    description: "Shipped across bespoke software, digital products, and studio labs.",
  },
  {
    id: "domains",
    value: 3,
    suffix: "",
    label: "Core Verticals",
    description: "Web systems, platform engineering, and brand identity systems.",
  },
  {
    id: "satisfaction",
    value: 100,
    suffix: "%",
    label: "Retention",
    description: "Client satisfaction and long-term project support rate.",
  },
  {
    id: "roi",
    value: 95,
    suffix: "%",
    label: "Performance Gains",
    description: "Average PageSpeed scores and performance improvements after launch.",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    id: "selim",
    name: "Abu Md. Selim",
    role: "Founder & Principal Engineer",
    bio: "Architects the technical direction and leads engineering end-to-end — bridging structural integrity with clean aesthetics.",
    linkedin: "https://www.linkedin.com/in/abu-md-selim",
  },
  {
    id: "design-lead",
    name: "Design Lead",
    role: "Brand & Product Design",
    bio: "Directs visual language and brand systems — designing high-fidelity, editorial-grade user experiences.",
    linkedin: "#",
  },
  {
    id: "engineering-lead",
    name: "Engineering Lead",
    role: "Platforms & Infrastructure",
    bio: "Designs distributed backend infrastructure and scalable cloud systems.",
    linkedin: "#",
  },
  {
    id: "research-lead",
    name: "Research Lead",
    role: "Inievo Labs",
    bio: "Directs hyperlocal user research and coordinates internal product labs.",
    linkedin: "#",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Inievo transformed our operational bottleneck into a high-throughput digital engine. The performance gains were immediate.",
    author: "Rashed Karim",
    role: "Founder",
    company: "Karim & Sons",
  },
  {
    id: "t2",
    quote:
      "Their engineering rigor is exceptional. The systems they built for us are highly resilient and effortlessly scalable.",
    author: "Dr. Nusrat Jahan",
    role: "Cardiologist",
    company: "Private Practice, Dhaka",
  },
  {
    id: "t3",
    quote:
      "They operate as true product partners rather than a transaction service. Their design sensibility is elite.",
    author: "Tanvir Ahmed",
    role: "Director",
    company: "Chattala Trading",
  },
] as const;

export {
  BLOG_POST_SEEDS as BLOG_POSTS,
  BLOG_CATEGORIES_FULL as BLOG_CATEGORIES,
} from "@/data/blog-posts";

export const SERVICE_INTEREST_OPTIONS = [
  "Web Systems",
  "Bespoke Engineering",
  "Brand Systems",
  "Inievo Labs",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = [
  "Under ৳50,000",
  "৳50,000 – ৳2,00,000",
  "৳2,00,000 – ৳10,00,000",
  "৳10,00,000+",
] as const;

export const WHATSAPP_NUMBER = "+8801410177888";
