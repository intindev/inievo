import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { HERO_CONTENT } from "@/lib/constants";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92svh] w-full items-center justify-center overflow-hidden bg-background pt-24 pb-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Left */}
          <motion.div
            style={{ y: y2 }}
            className="relative z-10 flex flex-col items-start lg:col-span-7 xl:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground shadow-sm backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {HERO_CONTENT.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              {HERO_CONTENT.headlineStatic1} <br className="hidden sm:block" />
              <span className="text-brand">{HERO_CONTENT.headlineHighlight}</span>{" "}
              <br className="hidden sm:block" />
              {HERO_CONTENT.headlineStatic2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to={HERO_CONTENT.primaryCta.href}
                className="group flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-[13px] font-bold uppercase tracking-wider text-background shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                {HERO_CONTENT.primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to={HERO_CONTENT.secondaryCta.href}
                className="group flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-8 text-[13px] font-bold uppercase tracking-wider text-foreground transition-all hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                {HERO_CONTENT.secondaryCta.label}
              </Link>
            </motion.div>
          </motion.div>

          {/* Bento Right */}
          <motion.div
            style={{ y: y1 }}
            className="relative z-10 hidden lg:col-span-5 lg:block xl:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-2 flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-brand/20"
              >
                <ArrowUpRight className="h-5 w-5 text-brand" />
                <div className="mt-12">
                  <p className="font-display text-4xl font-semibold tracking-tight text-foreground">
                    {HERO_CONTENT.floatingStats[0].value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {HERO_CONTENT.floatingStats[0].label}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex aspect-square flex-col justify-between rounded-2xl border border-border bg-secondary p-5 transition-colors hover:border-brand/20"
              >
                <div className="mt-auto">
                  <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {HERO_CONTENT.floatingStats[1].value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {HERO_CONTENT.floatingStats[1].label}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-border bg-brand p-5 text-brand-foreground shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-display text-3xl font-bold tracking-tight">
                  {HERO_CONTENT.floatingStats[2].value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brand-foreground/80">
                  {HERO_CONTENT.floatingStats[2].label}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
