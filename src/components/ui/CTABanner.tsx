/**
 * CTABanner — full-width closing call-to-action used across service pages.
 *
 * Dark gradient with brand glow, headline, supporting copy, and a primary
 * button that defaults to /contact.
 */

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  label: string;
  href?: string;
}

export function CTABanner({ title, subtitle, label, href = "/contact" }: CTABannerProps) {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      <div
        className="absolute inset-x-4 inset-y-6 -z-10 rounded-3xl sm:inset-x-8"
        style={{ backgroundImage: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 100%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(19,126,206,0.35), transparent 60%)",
          filter: "blur(110px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-8 text-center"
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-brand px-7 text-brand-foreground shadow-[0_12px_40px_-12px_rgba(19,126,206,0.8)] hover:bg-brand-deep"
          >
            <Link to={href}>
              <span className="inline-flex items-center gap-2 font-medium">
                {label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
