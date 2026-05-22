import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar,
  Check,
  LayoutDashboard,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  X,
  Zap,
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
import { SME_FAQS } from "@/data/faqs";
import { SEO_CONFIG, buildHead } from "@/lib/seo";
import { SME_PAGE } from "@/lib/service-pages";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  zap: Zap,
  search: Search,
  "message-circle": MessageCircle,
  "layout-dashboard": LayoutDashboard,
  smartphone: Smartphone,
  "shield-check": ShieldCheck,
};

export const Route = createFileRoute("/services/sme-web-presence")({
  head: () =>
    buildHead("sme", {
      scripts: [
        jsonLdScript(
          serviceSchema({
            name: "SME Web Presence",
            description: SEO_CONFIG.sme.description,
            serviceType: "Small Business Website Development",
            path: SEO_CONFIG.sme.path,
          }),
        ),
        jsonLdScript(faqSchema(SME_FAQS)),
        jsonLdScript(breadcrumbSchema(SEO_CONFIG.sme.path)),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ServicePageHero
        tag={SME_PAGE.tag}
        title={SME_PAGE.heroTitle}
        subtitle={SME_PAGE.heroSubtitle}
        ctaLabel={SME_PAGE.ctaLabel}
      />

      {/* Facebook-only problem comparison */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            The Facebook-only problem
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Same products. Two very different ceilings.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card/40 p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
              Facebook-only
            </div>
            <ul className="mt-6 space-y-3">
              {SME_PAGE.problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/[0.06] to-transparent p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">
              With your own site
            </div>
            <ul className="mt-6 space-y-3">
              {SME_PAGE.unlocks.map((u) => (
                <li key={u} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Inievo delivers */}
      <section className="bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              What Inievo delivers
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything a modern web store needs — in one package.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SME_PAGE.features.map((f, i) => {
              const Icon = ICONS[f.icon] ?? Zap;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-brand/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            The process
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            From kickoff to launch in four deliberate steps.
          </h2>
        </div>
        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SME_PAGE.process.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-card/40 p-6"
            >
              <span className="font-display text-3xl font-semibold text-brand/70">{s.step}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Pricing teaser */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <div className="rounded-3xl border border-border bg-card/40 p-10">
          <Calendar className="mx-auto h-8 w-8 text-brand" />
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Transparent, SME-friendly packages.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            No surprise fees. No platform lock-in. We share an exact quote after a 30-minute call so
            you can plan with confidence.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <h2 className="mb-8 text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked
        </h2>
        <FAQAccordion items={SME_FAQS} />
      </section>

      <CTABanner
        title={SME_PAGE.closingCta.title}
        subtitle={SME_PAGE.closingCta.subtitle}
        label={SME_PAGE.closingCta.label}
      />
    </main>
  );
}
