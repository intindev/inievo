import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { HOME_CAPABILITIES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section className="relative w-full bg-background py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Sticky Header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 flex flex-col items-start">
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {HOME_CAPABILITIES.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {HOME_CAPABILITIES.description}
              </p>
              <Link
                to="/services/sme-web-presence"
                className="group mt-8 inline-flex items-center text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-brand-deep"
              >
                {HOME_CAPABILITIES.viewAllText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="flex flex-col gap-8 lg:col-span-8 lg:mt-0 lg:pl-12">
            {HOME_CAPABILITIES.items.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col items-start gap-6 rounded-3xl bg-secondary/50 p-8 transition-colors hover:bg-secondary md:flex-row md:items-start md:p-10"
              >
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {cap.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 shrink-0 md:mt-0">
                  <Link
                    to={cap.href}
                    className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-foreground transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground"
                    aria-label={`Learn more about ${cap.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
