import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { buildHead } from "@/lib/seo";
import { SME_PAGE } from "@/lib/service-pages";
import { ServicePageHero } from "@/components/ui/ServicePageHero";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const Route = createFileRoute("/services/sme-web-presence")({
  head: () => buildHead(SME_PAGE.tag),
  component: ServicePage,
});

function ServicePage() {
  return (
    <main className="bg-background">
      <ServicePageHero
        tag={SME_PAGE.tag}
        title={SME_PAGE.heroTitle}
        subtitle={SME_PAGE.heroSubtitle}
        ctaLabel={SME_PAGE.ctaLabel}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Differentiator Compare */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-8 lg:grid-cols-2 pt-16 pb-24 border-t border-border/60"
          >
            <div className="rounded-3xl bg-secondary/50 p-10 transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                The Old Way
              </span>
              <ul className="mt-8 space-y-6">
                {SME_PAGE.problems.map((p) => (
                  <li key={p} className="flex items-start gap-4 text-base text-muted-foreground">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/50" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-brand/20 bg-card p-10 shadow-sm transition-colors hover:border-brand/40">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                The Studio Standard
              </span>
              <ul className="mt-8 space-y-6">
                {SME_PAGE.unlocks.map((u) => (
                  <li key={u} className="flex items-start gap-4 text-base text-foreground/90">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Features List */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 py-24"
          >
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              What we engineer
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {SME_PAGE.features.map((f) => (
                <div key={f.title} className="flex flex-col border-t border-border/60 pt-6">
                  <h3 className="font-display text-xl font-medium text-foreground">{f.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 py-24"
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              From kickoff to launch.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
              {SME_PAGE.process.map((step) => (
                <div key={step.step} className="flex flex-col border-l-2 border-brand/20 pl-6">
                  <span className="text-[10px] font-bold text-brand">{step.step}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FAQs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 pt-24 pb-12"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-center">
                Frequently asked
              </h2>
              <FAQAccordion items={SME_PAGE.faqs} />
            </div>
          </motion.section>
        </div>
      </div>

      <CTABanner
        title={SME_PAGE.closingCta.title}
        subtitle={SME_PAGE.closingCta.subtitle}
        label={SME_PAGE.closingCta.label}
      />
    </main>
  );
}
