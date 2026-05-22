/**
 * ServicePageHero — reusable hero for /services/* pages.
 *
 * Dark gradient backdrop that mirrors the homepage hero language without
 * pulling focus from the headline. Optional CTA renders as a brand
 * button linking to /contact.
 */

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

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
    <section
      className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40"
      style={{
        backgroundImage:
          "linear-gradient(140deg, #0a0f1e 0%, #0c1628 55%, #0d1a2e 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(19,126,206,0.25), transparent 60%)",
          filter: "blur(110px)",
        }}
      />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {tag}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {subtitle}
        </motion.p>
        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-brand px-7 text-brand-foreground shadow-[0_12px_40px_-12px_rgba(19,126,206,0.8)] hover:bg-brand-deep"
            >
              <Link to={ctaHref}>
                <span className="inline-flex items-center gap-2 font-medium">
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
