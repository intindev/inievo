import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CalendarCheck,
  Check,
  Feather,
  GraduationCap,
  Quote,
  Ruler,
  Scale,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import {
  breadcrumbSchema,
  faqSchema,
  jsonLdScript,
  serviceSchema,
} from "@/components/seo/JsonLd";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ServicePageHero } from "@/components/ui/ServicePageHero";
import { PRO_FAQS } from "@/data/faqs";
import { SEO_CONFIG, buildHead } from "@/lib/seo";
import { PRO_PAGE } from "@/lib/service-pages";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  stethoscope: Stethoscope,
  ruler: Ruler,
  scale: Scale,
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  "shield-check": ShieldCheck,
  search: Search,
  award: Award,
  "calendar-check": CalendarCheck,
  feather: Feather,
};

export const Route = createFileRoute("/services/pro-presence")({
  head: () =>
    buildHead("pro", {
      scripts: [
        jsonLdScript(
          serviceSchema({
            name: "Professional Web Presence",
            description: SEO_CONFIG.pro.description,
            serviceType: "Professional Personal Website",
            path: SEO_CONFIG.pro.path,
          }),
        ),
        jsonLdScript(faqSchema(PRO_FAQS)),
        jsonLdScript(breadcrumbSchema(SEO_CONFIG.pro.path)),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ServicePageHero
        tag={PRO_PAGE.tag}
        title={PRO_PAGE.heroTitle}
        subtitle={PRO_PAGE.heroSubtitle}
        ctaLabel={PRO_PAGE.ctaLabel}
      />

      {/* Global standard */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              The global standard
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              A personal website is the new business card.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              In developed nations, every respected professional carries a personal site as
              standard. In Bangladesh, this remains a wide-open field — your competitive
              advantage, today.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-foreground/85">
              {[
                "Patients, clients, and journalists Google you first.",
                "A site you control outranks directory listings.",
                "First impressions form in under three seconds.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stylised "world map" — abstract dot grid with brand-tinted regions */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/40 p-6">
            <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden>
              <defs>
                <pattern id="map-dots" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="oklch(0.62 0.16 240 / 0.4)" />
                </pattern>
                <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="oklch(0.62 0.16 240)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="oklch(0.62 0.16 240)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="300" fill="url(#map-dots)" opacity="0.45" />
              {/* Continents (very abstract) */}
              <ellipse cx="80" cy="120" rx="60" ry="40" fill="oklch(0.62 0.16 240 / 0.18)" />
              <ellipse cx="200" cy="100" rx="55" ry="35" fill="oklch(0.62 0.16 240 / 0.18)" />
              <ellipse cx="320" cy="140" rx="50" ry="40" fill="oklch(0.62 0.16 240 / 0.18)" />
              <ellipse cx="220" cy="200" rx="40" ry="22" fill="oklch(0.62 0.16 240 / 0.18)" />
              {/* Bangladesh marker */}
              <circle cx="285" cy="160" r="40" fill="url(#map-glow)" />
              <circle cx="285" cy="160" r="6" fill="oklch(0.7 0.18 240)" />
              <circle cx="285" cy="160" r="6" fill="none" stroke="oklch(0.7 0.18 240)" strokeOpacity="0.6">
                <animate attributeName="r" from="6" to="22" dur="2s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-brand">●</span> Bangladesh — wide open
            </div>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              Who this is for
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed for professionals whose name carries weight.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {PRO_PAGE.personas.map((p, i) => {
              const Icon = ICONS[p.icon] ?? Briefcase;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center transition-colors hover:border-brand/40"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/20 transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-foreground">{p.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            What your website will do for you
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Five quiet advantages that compound for years.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRO_PAGE.outcomes.map((o, i) => {
            const Icon = ICONS[o.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card/40 p-6"
              >
                <Icon className="h-6 w-6 text-brand" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {o.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Premium package */}
      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/40 bg-gradient-to-br from-brand/[0.08] via-transparent to-brand/[0.05] p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(19,126,206,0.35), transparent 60%)",
              filter: "blur(80px)",
            }}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            The Pro Presence package
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need. Nothing you don't.
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PRO_PAGE.package.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-4 text-sm text-foreground/90"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <figure className="rounded-3xl border border-border bg-card/40 p-10 text-center">
          <Quote className="mx-auto h-7 w-7 text-brand/70" />
          <blockquote className="mt-5 font-display text-xl leading-snug text-foreground sm:text-2xl">
            "Inievo treated my website the way I treat my patients — quietly, carefully, and with a
            standard I didn't know I could expect locally."
          </blockquote>
          <figcaption className="mt-5 text-sm text-muted-foreground">
            — Pilot client · Consultant Physician, Chattogram
          </figcaption>
        </figure>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <h2 className="mb-8 text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked
        </h2>
        <FAQAccordion items={PRO_FAQS} />
      </section>

      <CTABanner
        title={PRO_PAGE.closingCta.title}
        subtitle={PRO_PAGE.closingCta.subtitle}
        label={PRO_PAGE.closingCta.label}
      />
    </main>
  );
}
