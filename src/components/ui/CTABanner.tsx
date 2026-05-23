/**
 * CTABanner — full-width closing call-to-action used across service pages.
 *
 * Light premium gradient box with strong typography and a primary CTA.
 */

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  label: string;
  href?: string;
}

export function CTABanner({ title, subtitle, label, href = "/contact" }: CTABannerProps) {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center rounded-[2.5rem] bg-foreground px-8 py-20 text-center text-background shadow-lg md:px-20 md:py-28">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-background/80 md:text-xl">
              {subtitle}
            </p>
          )}
          <div className="mt-12 flex justify-center">
            <Link
              to={href}
              className="group inline-flex h-14 items-center justify-center rounded-full bg-brand px-10 text-sm font-bold uppercase tracking-wider text-brand-foreground shadow-sm transition-all hover:-translate-y-1 hover:bg-brand-deep hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-foreground"
            >
              {label}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
