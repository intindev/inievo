/**
 * ServicePageHero — reusable hero for /services/* pages.
 *
 * Light premium layout mirroring the homepage hero language.
 * Focuses on typography and clean spacing.
 */

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServicePageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ServicePageHero({
  tag,
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/contact",
}: ServicePageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-24 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground shadow-sm backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {tag}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {subtitle}
          </motion.p>

          {ctaLabel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex"
            >
              <Link
                to={ctaHref}
                className="group flex h-14 items-center justify-center rounded-full bg-brand px-10 text-[13px] font-bold uppercase tracking-wider text-brand-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                {ctaLabel}
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
