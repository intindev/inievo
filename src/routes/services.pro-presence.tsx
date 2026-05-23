import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { buildHead } from "@/lib/seo";
import { PRO_PAGE } from "@/lib/service-pages";
import { ServicePageHero } from "@/components/ui/ServicePageHero";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const Route = createFileRoute("/services/pro-presence")({
  head: () => buildHead(PRO_PAGE.tag),
  component: ProPresencePage,
});

function ProPresencePage() {
  return (
    <main className="bg-background">
      <ServicePageHero
        tag={PRO_PAGE.tag}
        title={PRO_PAGE.heroTitle}
        subtitle={PRO_PAGE.heroSubtitle}
        ctaLabel={PRO_PAGE.ctaLabel}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Outcomes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 pt-16 pb-24"
          >
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              The Value
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {PRO_PAGE.outcomes.map((cap) => (
                <div key={cap.title} className="flex flex-col border-t border-border/60 pt-6">
                  <h3 className="font-display text-xl font-medium text-foreground">{cap.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Personas & Package */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 py-24"
          >
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  Engineered For
                </h2>
                <ul className="mt-8 space-y-4">
                  {PRO_PAGE.personas.map((persona) => (
                    <li
                      key={persona.title}
                      className="flex items-center gap-4 text-lg font-medium text-muted-foreground"
                    >
                      <span className="h-2 w-2 rounded-full bg-brand/30" />
                      {persona.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-border bg-secondary/30 p-10">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    The Foundation Package
                  </h3>
                  <ul className="mt-8 space-y-5">
                    {PRO_PAGE.package.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 text-base text-foreground/90"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
              <FAQAccordion items={PRO_PAGE.faqs} />
            </div>
          </motion.section>
        </div>
      </div>

      <CTABanner
        title={PRO_PAGE.closingCta.title}
        subtitle={PRO_PAGE.closingCta.subtitle}
        label={PRO_PAGE.closingCta.label}
      />
    </main>
  );
}
