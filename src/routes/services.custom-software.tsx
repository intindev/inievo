import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Database,
  Globe,
  Layers,
  Plug,
  Smartphone,
  Sparkles,
  Workflow,
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
import { CUSTOM_FAQS } from "@/data/faqs";
import { SEO_CONFIG, buildHead } from "@/lib/seo";
import { CUSTOM_PAGE } from "@/lib/service-pages";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  globe: Globe,
  smartphone: Smartphone,
  plug: Plug,
  "bar-chart-3": BarChart3,
  workflow: Workflow,
  "building-2": Building2,
  layers: Layers,
  "book-open": BookOpen,
  database: Database,
  sparkles: Sparkles,
};

export const Route = createFileRoute("/services/custom-software")({
  head: () =>
    buildHead("custom", {
      scripts: [
        jsonLdScript(
          serviceSchema({
            name: "Custom Software & App Development",
            description: SEO_CONFIG.custom.description,
            serviceType: "Custom Software Development",
            path: SEO_CONFIG.custom.path,
          }),
        ),
        jsonLdScript(faqSchema(CUSTOM_FAQS)),
        jsonLdScript(breadcrumbSchema(SEO_CONFIG.custom.path)),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <main>
      <ServicePageHero
        tag={CUSTOM_PAGE.tag}
        title={CUSTOM_PAGE.heroTitle}
        subtitle={CUSTOM_PAGE.heroSubtitle}
        ctaLabel={CUSTOM_PAGE.ctaLabel}
      />

      {/* Decision flow */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            Do you actually need custom software?
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Three honest questions before you commit a single taka.
          </h2>
        </div>

        <ol className="mx-auto mt-14 max-w-3xl space-y-4">
          {CUSTOM_PAGE.decisions.map((d, i) => (
            <motion.li
              key={d.question}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card/40 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand/15 text-xs font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold text-foreground">{d.question}</p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-brand/30 bg-brand/5 p-4 text-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                    Yes
                  </p>
                  <p className="mt-1 text-foreground/90">{d.yes}</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4 text-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    No
                  </p>
                  <p className="mt-1 text-muted-foreground">{d.no}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Capabilities grid */}
      <section className="bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              Capabilities
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              One studio. Every layer of the stack.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOM_PAGE.capabilities.map((c, i) => {
              const Icon = ICONS[c.icon] ?? Globe;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <Icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Build standard */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            The Inievo build standard
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What "built right" actually means.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CUSTOM_PAGE.standards.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Layers;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card/40 p-7"
              >
                <Icon className="h-6 w-6 text-brand" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Case study teaser */}
      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/[0.08] via-transparent to-transparent p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            From Inievo Labs
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The Chattala — a hometown platform, engineered to scale.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A research-driven product built in-house that proves the same architecture we deploy
            for clients. Full case study coming soon.
          </p>
          <a
            href="/labs"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
          >
            Visit Inievo Labs <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-card/40 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            Tech we trust
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            A pragmatic, modern stack — chosen for longevity.
          </h2>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {CUSTOM_PAGE.stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/80"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h2 className="mb-8 text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked
        </h2>
        <FAQAccordion items={CUSTOM_FAQS} />
      </section>

      <CTABanner
        title={CUSTOM_PAGE.closingCta.title}
        subtitle={CUSTOM_PAGE.closingCta.subtitle}
        label={CUSTOM_PAGE.closingCta.label}
      />
    </main>
  );
}
