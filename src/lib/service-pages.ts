/**
 * Service-page content for Inievo Technologies.
 *
 * Each entry encapsulates everything the corresponding route renders so
 * presentation code stays declarative and copy edits never require
 * touching JSX.
 */

import type { FAQ } from "./types";

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface ServiceProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export interface ServicePersona {
  readonly title: string;
  readonly icon: string;
}

export interface ServicePageData {
  readonly slug: string;
  readonly tag: string;
  readonly heroTitle: string;
  readonly heroSubtitle: string;
  readonly ctaLabel: string;
  readonly faqs: readonly FAQ[];
  readonly closingCta: { readonly title: string; readonly subtitle: string; readonly label: string };
}

export const SME_PAGE: ServicePageData & {
  features: readonly ServiceFeature[];
  process: readonly ServiceProcessStep[];
  problems: readonly string[];
  unlocks: readonly string[];
} = {
  slug: "sme-web-presence",
  tag: "SME & E-commerce Web Presence",
  heroTitle: "Stop Selling Only on Facebook. Start Owning Your Market.",
  heroSubtitle:
    "A website isn't a cost — it's your most loyal salesperson, working 24/7, building trust with every click.",
  ctaLabel: "Get a Free Audit",
  problems: [
    "No Google search visibility — invisible to new buyers.",
    "Shoppers question credibility without a real domain.",
    "Order DMs and comments must be answered manually.",
    "Reach is throttled the moment the algorithm shifts.",
    "No payment automation — every sale needs a human.",
  ],
  unlocks: [
    "Rank for the queries your customers already type.",
    "A branded domain that signals legitimacy in seconds.",
    "Automated order flow with WhatsApp & Messenger.",
    "Traffic and revenue you own — independent of any platform.",
    "One dashboard for products, stock, and customer data.",
  ],
  features: [
    {
      title: "Lightning-fast site",
      description: "Core Web Vitals optimised — sub-second loads on 3G.",
      icon: "zap",
    },
    {
      title: "SEO-ready from day one",
      description: "Schema, sitemaps, and metadata wired before launch.",
      icon: "search",
    },
    {
      title: "WhatsApp & Messenger orders",
      description: "Customers tap once, you receive a structured order.",
      icon: "message-circle",
    },
    {
      title: "Admin dashboard",
      description: "Manage products, stock, and orders without a developer.",
      icon: "layout-dashboard",
    },
    {
      title: "Mobile-first design",
      description: "Built for the phone, gracefully scaled to desktop.",
      icon: "smartphone",
    },
    {
      title: "SSL, hosting & care",
      description: "Secure hosting and maintenance bundled, not bolted on.",
      icon: "shield-check",
    },
  ],
  process: [
    { step: "01", title: "Discover", description: "We audit your business, buyers, and goals." },
    { step: "02", title: "Design", description: "A clickable prototype before a single line of code." },
    { step: "03", title: "Build", description: "Engineered with performance and SEO from day one." },
    { step: "04", title: "Launch", description: "We migrate, monitor, and stay on for 30 days." },
  ],
  faqs: [
    {
      question: "How long until my store is live?",
      answer:
        "Most SME web presences ship in 3–5 weeks from kickoff, depending on catalogue size and integrations.",
    },
    {
      question: "Can I keep selling on Facebook too?",
      answer:
        "Absolutely — your website becomes your hub. Facebook, Instagram, and TikTok feed traffic into it.",
    },
    {
      question: "Will I be locked into a platform?",
      answer:
        "No. We hand you the keys: domain, hosting, source code, and dashboards are yours.",
    },
    {
      question: "Do you handle payments and delivery?",
      answer:
        "We integrate the local gateways and courier APIs you already use — bKash, Nagad, Pathao, Steadfast, and more.",
    },
    {
      question: "What does ongoing maintenance look like?",
      answer:
        "Hosting, SSL, security patches, and small content changes are bundled into a flat monthly care plan.",
    },
  ],
  closingCta: {
    title: "Ready to Outgrow Facebook?",
    subtitle:
      "We'll audit your current presence and map a launch plan in a single 30-minute call.",
    label: "Let's Talk",
  },
};

export const CUSTOM_PAGE: ServicePageData & {
  capabilities: readonly ServiceFeature[];
  standards: readonly ServiceFeature[];
  stack: readonly string[];
  decisions: readonly { readonly question: string; readonly yes: string; readonly no: string }[];
} = {
  slug: "custom-software",
  tag: "Custom Software & Apps",
  heroTitle: "Complex Problems. Elegant Solutions. Built to Last.",
  heroSubtitle:
    "Off-the-shelf tools break when your business evolves. We architect systems that grow with you — feature by feature, year after year.",
  ctaLabel: "Start a Build",
  decisions: [
    {
      question: "Are spreadsheets the source of truth?",
      yes: "You've outgrown them.",
      no: "You're close — let's audit.",
    },
    {
      question: "Do staff copy data between tools?",
      yes: "Custom workflow needed.",
      no: "Lean automation may suffice.",
    },
    {
      question: "Do customers ask for features SaaS can't offer?",
      yes: "Build it custom.",
      no: "Configure SaaS first.",
    },
  ],
  capabilities: [
    { title: "Web Apps", description: "Performant, type-safe, SSR-ready.", icon: "globe" },
    { title: "Mobile Apps", description: "iOS + Android from one codebase.", icon: "smartphone" },
    { title: "API Integrations", description: "Stripe, ERPs, gateways, AI.", icon: "plug" },
    { title: "Dashboards", description: "Decision-grade analytics UI.", icon: "bar-chart-3" },
    { title: "Automation", description: "Workflows that replace manual ops.", icon: "workflow" },
    { title: "Institution Portals", description: "Schools, clinics, NGOs.", icon: "building-2" },
  ],
  standards: [
    {
      title: "Clean architecture",
      description: "Domain logic isolated from frameworks — replace anything later.",
      icon: "layers",
    },
    {
      title: "Documented codebase",
      description: "Every module readable by the next engineer on day one.",
      icon: "book-open",
    },
    {
      title: "Scalable database design",
      description: "Indexed, normalised, and ready for 100x your data.",
      icon: "database",
    },
    {
      title: "Effortless feature growth",
      description: "Adding a screen takes hours, not weeks.",
      icon: "sparkles",
    },
  ],
  stack: [
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Cloudflare",
    "Supabase",
  ],
  faqs: [
    {
      question: "How do you price custom software?",
      answer:
        "Fixed-scope MVPs are quoted per phase. Long-term builds run on a transparent monthly retainer with milestones.",
    },
    {
      question: "Will my team own the code?",
      answer:
        "Yes — every repo, deployment, and credential is delivered to you. No vendor lock-in.",
    },
    {
      question: "Do you support after launch?",
      answer:
        "We offer SLA-backed care plans, plus growth retainers for teams that want us to keep shipping features.",
    },
    {
      question: "Can you join an existing team?",
      answer:
        "Yes. We embed with internal engineers, follow your standards, and contribute via pull requests.",
    },
    {
      question: "What if requirements change?",
      answer:
        "They will. Our architecture and contracts are explicitly designed for change without rework.",
    },
  ],
  closingCta: {
    title: "Tell Us Your Idea. We'll Make It Real.",
    subtitle: "A short discovery call is the fastest way to estimate scope and timeline.",
    label: "Book Discovery",
  },
};

export const PRO_PAGE: ServicePageData & {
  personas: readonly ServicePersona[];
  outcomes: readonly ServiceFeature[];
  package: readonly string[];
} = {
  slug: "pro-presence",
  tag: "Professional Web Presence",
  heroTitle: "You've Earned Your Reputation. Now Own Your Digital Identity.",
  heroSubtitle:
    "Abroad, every respected professional has a personal website. In Bangladesh, this is a wide-open opportunity — today.",
  ctaLabel: "Reserve Your Identity",
  personas: [
    { title: "Physicians & Consultants", icon: "stethoscope" },
    { title: "Engineers & Architects", icon: "ruler" },
    { title: "Lawyers & Advocates", icon: "scale" },
    { title: "Academics & Researchers", icon: "graduation-cap" },
    { title: "Business Leaders & Executives", icon: "briefcase" },
  ],
  outcomes: [
    {
      title: "Instant credibility",
      description: "First-time clients arrive already convinced.",
      icon: "shield-check",
    },
    {
      title: "Rank for your name",
      description: "Own the first page when people Google you.",
      icon: "search",
    },
    {
      title: "Showcase credentials",
      description: "Publications, awards, and milestones — beautifully.",
      icon: "award",
    },
    {
      title: "Online bookings",
      description: "Consultations, slots, and intakes without phone tag.",
      icon: "calendar-check",
    },
    {
      title: "Control the narrative",
      description: "Your story, your way — outside any social platform.",
      icon: "feather",
    },
  ],
  package: [
    "Custom-designed homepage built around your specialty",
    "About, credentials, and publications/CV pages",
    "Booking or contact intake with email + WhatsApp",
    "Press, media, and speaking-engagements section",
    "Personal-domain email setup (you@yourname.com)",
    "Annual hosting, SSL, and quarterly content refresh",
  ],
  faqs: [
    {
      question: "I'm not a tech person — is this difficult?",
      answer:
        "Not at all. We interview you for an hour, write the copy, gather your credentials, and present a finished site for approval.",
    },
    {
      question: "Will my site stay up to date?",
      answer:
        "Yes — quarterly content refreshes are bundled. New publications, awards, and media mentions are added for you.",
    },
    {
      question: "How private is my data?",
      answer:
        "You decide what appears publicly. Booking data, intake forms, and emails are stored with industry-standard encryption.",
    },
    {
      question: "Can I take bookings or payments?",
      answer:
        "Yes — we integrate booking calendars and, if relevant, online payment for consultations or paid resources.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most professional websites launch within 2–3 weeks of our kickoff interview.",
    },
  ],
  closingCta: {
    title: "Reserve Your Professional Identity Today.",
    subtitle: "A 20-minute call is enough to define your positioning and scope your launch.",
    label: "Book a Consultation",
  },
};
