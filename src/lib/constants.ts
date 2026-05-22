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
  tagline: "Engineering trust into every pixel and every line of code.",
  description:
    "Inievo Technologies is a premium IT agency from Bangladesh — building bespoke software, web presence, and digital products for ambitious teams.",
  url: "https://inievo.com",
  email: "hello@inievo.com",
  phone: "+8809678791213",
  address: "Chattogram, Bangladesh",
  founder: "Abu Md. Selim",
  locale: "en-US",
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/", description: "Inievo at a glance" },
  {
    label: "SME Web Presence",
    href: "/services/sme-web-presence",
    description: "Launch-ready sites for growing businesses",
  },
  {
    label: "Custom Software",
    href: "/services/custom-software",
    description: "Bespoke platforms engineered to scale",
  },
  {
    label: "Pro Presence",
    href: "/services/pro-presence",
    description: "Premium digital brand systems",
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
    label: "SME Web Presence",
    href: "/services/sme-web-presence",
    description: "Launch-ready sites for growing businesses",
  },
  {
    label: "Custom Software",
    href: "/services/custom-software",
    description: "Bespoke platforms engineered to scale",
  },
  {
    label: "Pro Presence",
    href: "/services/pro-presence",
    description: "Premium digital brand systems",
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
  primary: "#137ece",
  deep: "#0f5fa3",
  tint: "#e8f4fd",
  ink: "#0a0f1e",
  paper: "#f8fafc",
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/inievo", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/inievo", icon: "github" },
  { label: "X / Twitter", href: "https://x.com/inievo", icon: "twitter" },
  { label: "Dribbble", href: "https://dribbble.com/inievo", icon: "dribbble" },
] as const;

export const CTA = {
  primary: { label: "Get a Free Audit", href: "/contact" },
  secondary: { label: "Explore Services", href: "/services/sme-web-presence" },
} as const;

export const FOOTER_NOTE = "";

export const HERO_CONTENT = {
  eyebrow: "Transforming visionary ideas into scalable realities",
  headlineLead: "We Build Digital",
  rotatingWords: ["Presence", "Authority", "Systems", "Legacies"] as const,
  subheadline:
    "From local shops to elite professionals — Inievo architects digital experiences that build trust, drive growth, and scale with your ambition.",
  primaryCta: { label: "Start Your Project", href: "/contact" },
  secondaryCta: { label: "See Our Work", href: "/labs" },
  floatingStats: [
    { id: "projects", value: "50+", label: "Projects Delivered", icon: "rocket" },
    { id: "satisfaction", value: "100%", label: "Client Satisfaction", icon: "heart" },
    { id: "domains", value: "3", label: "Core Domains", icon: "layers" },
  ] as const,
} as const;

export const TRUST_BAR_ITEMS = [
  "🏪 Local Business Growth",
  "⚡ Custom Software",
  "👤 Pro Web Presence",
  "🔬 Research-Driven",
  "📱 Mobile-First",
  "🇧🇩 Made in Bangladesh",
] as const;

export const STATS = [
  {
    id: "projects",
    value: 50,
    suffix: "+",
    label: "Projects",
    description: "Shipped across SME, enterprise, and labs work.",
  },
  {
    id: "domains",
    value: 3,
    suffix: "",
    label: "Domains",
    description: "Web presence, custom software, and pro brand systems.",
  },
  {
    id: "satisfaction",
    value: 100,
    suffix: "%",
    label: "Satisfaction",
    description: "Repeat-client rate across every engagement to date.",
  },
  {
    id: "roi",
    value: 2,
    suffix: "x",
    label: "Avg ROI",
    description: "Average measurable return within the first 12 months.",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    id: "selim",
    name: "Abu Md. Selim",
    role: "Founder & Principal Engineer",
    bio: "Architects every Inievo engagement end-to-end — from research to launch.",
    linkedin: "https://www.linkedin.com/in/abu-md-selim",
  },
  {
    id: "design-lead",
    name: "Design Lead",
    role: "Brand & Product Design",
    bio: "Crafts trust-first interfaces that feel inevitable.",
    linkedin: "#",
  },
  {
    id: "engineering-lead",
    name: "Engineering Lead",
    role: "Platforms & Infrastructure",
    bio: "Owns scalable architectures across our custom builds.",
    linkedin: "#",
  },
  {
    id: "research-lead",
    name: "Research Lead",
    role: "Inievo Labs",
    bio: "Leads hyperlocal product research from Chattogram.",
    linkedin: "#",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "They didn't just build a website — they rebuilt how customers find and trust us.",
    author: "Rashed Karim",
    role: "Founder",
    company: "Karim & Sons",
  },
  {
    id: "t2",
    quote:
      "The platform feels like it was made for our team. Three months in and we still can't break it.",
    author: "Dr. Nusrat Jahan",
    role: "Cardiologist",
    company: "Private Practice, Dhaka",
  },
  {
    id: "t3",
    quote:
      "Inievo treated our project like a partnership, not a transaction. Rare and refreshing.",
    author: "Tanvir Ahmed",
    role: "Director",
    company: "Chattala Trading",
  },
] as const;

export { BLOG_POST_SEEDS as BLOG_POSTS, BLOG_CATEGORIES_FULL as BLOG_CATEGORIES } from "@/data/blog-posts";

export const SERVICE_INTEREST_OPTIONS = [
  "SME Web Presence",
  "Custom Software",
  "Pro Presence",
  "Inievo Labs",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = [
  "Under ৳50,000",
  "৳50,000 – ৳2,00,000",
  "৳2,00,000 – ৳10,00,000",
  "৳10,00,000+",
] as const;

export const WHATSAPP_NUMBER = "+8801XXXXXXXXX";

