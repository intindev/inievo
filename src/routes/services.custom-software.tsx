import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { buildHead } from "@/lib/seo";
import { CUSTOM_PAGE } from "@/lib/service-pages";
import { ServicePageHero } from "@/components/ui/ServicePageHero";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const Route = createFileRoute("/services/custom-software")({
  head: () => buildHead(CUSTOM_PAGE.tag),
  component: CustomSoftwarePage,
});

function CustomSoftwarePage() {
  return (
    <main className="bg-background">
      <ServicePageHero
        tag={CUSTOM_PAGE.tag}
        title={CUSTOM_PAGE.heroTitle}
        subtitle={CUSTOM_PAGE.heroSubtitle}
        ctaLabel={CUSTOM_PAGE.ctaLabel}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Decisions List */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3 pt-16 pb-24 border-t border-border/60"
          >
            {CUSTOM_PAGE.decisions.map((d) => (
              <div key={d.question} className="flex flex-col rounded-3xl bg-secondary/30 p-8">
                <p className="font-display text-xl font-semibold text-foreground leading-snug">
                  {d.question}
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{d.yes}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                    <span>{d.no}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.section>

          {/* Capabilities List */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 py-24"
          >
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Core Capabilities
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {CUSTOM_PAGE.capabilities.map((cap) => (
                <div key={cap.title} className="flex flex-col border-t border-border/60 pt-6">
                  <h3 className="font-display text-xl font-medium text-foreground">{cap.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Standards & Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 py-24"
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Engineering Standards.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
              {CUSTOM_PAGE.standards.map((standard) => (
                <div key={standard.title} className="flex flex-col border-l-2 border-brand/20 pl-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {standard.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-wrap gap-4">
              {CUSTOM_PAGE.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-foreground"
                >
                  {tech}
                </span>
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
              <FAQAccordion items={CUSTOM_PAGE.faqs} />
            </div>
          </motion.section>
        </div>
      </div>

      <CTABanner
        title={CUSTOM_PAGE.closingCta.title}
        subtitle={CUSTOM_PAGE.closingCta.subtitle}
        label={CUSTOM_PAGE.closingCta.label}
      />
    </main>
  );
}
