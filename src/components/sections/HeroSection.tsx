/**
 * HeroSection — full-viewport homepage hero for Inievo Technologies.
 *
 * Composition:
 *  - Dark gradient background (#0a0f1e → #0d1a2e) with an SVG dot grid and
 *    a soft, slowly-floating brand-color orb behind the headline.
 *  - Eyebrow tag, two-line headline with a vertically-flipping rotating
 *    word, subheadline, and primary/secondary CTAs.
 *  - Three glassmorphism floating stat cards positioned around the hero.
 *
 * Motion:
 *  - On mount, content reveals in a staggered cascade (eyebrow → headline →
 *    rotating word → sub → CTAs → stat cards).
 *  - Rotating word cycles every 2.5s with a vertical flip; wrapped in
 *    aria-live="polite" for screen readers.
 *  - Orb gently oscillates ±20px on the y-axis; respected reduced motion
 *    via Framer Motion's MotionConfig if needed at the app level.
 */

import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Heart, Layers, Rocket } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  rocket: Rocket,
  heart: Heart,
  layers: Layers,
};

function DotGrid() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
    >
      <defs>
        <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill="rgb(19 126 206 / 0.35)" />
        </pattern>
        <radialGradient id="hero-dots-fade" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="hero-dots-mask">
          <rect width="100%" height="100%" fill="url(#hero-dots-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-dots)" mask="url(#hero-dots-mask)" />
    </svg>
  );
}

function FloatingStat({
  iconKey,
  value,
  label,
  className,
  delay,
  floatDelay = 0,
}: {
  iconKey: string;
  value: string;
  label: string;
  className?: string;
  delay: number;
  floatDelay?: number;
}) {
  const Icon = ICONS[iconKey] ?? Rocket;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("absolute hidden md:block", className)}
      style={{ willChange: "transform" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="flex items-center gap-3 rounded-2xl border border-brand/15 bg-white/70 px-4 py-3 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(19,126,206,0.45)]"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/30">
          <Icon className="h-4 w-4 text-brand" />
        </span>
        <div className="leading-tight">
          <p className="font-display text-base font-semibold text-neutral-900">{value}</p>
          <p className="text-[11px] uppercase tracking-wider text-neutral-500">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}


export function HeroSection() {
  const words = HERO_CONTENT.rotatingWords;
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 800], [0, 240]);
  const headlineY = useTransform(scrollY, [0, 800], [0, 80]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #f3f6fb 0%, #eaf1f9 50%, #dde7f3 100%)",
      }}
    >
      {/* Soft brand orb — parallax 0.3x */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(19,126,206,0.18), transparent 60%)",
          filter: "blur(120px)",
          willChange: "transform",
          y: orbY,
        }}
      />

      {/* Dot grid */}
      <DotGrid />

      {/* Top + bottom subtle vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/70 to-transparent"
      />

      {/* Floating stat cards */}
      <FloatingStat
        iconKey={HERO_CONTENT.floatingStats[1].icon}
        value={HERO_CONTENT.floatingStats[1].value}
        label={HERO_CONTENT.floatingStats[1].label}
        className="right-6 top-28 lg:right-16 lg:top-32"
        delay={0.8}
        floatDelay={0.6}
      />
      <FloatingStat
        iconKey={HERO_CONTENT.floatingStats[0].icon}
        value={HERO_CONTENT.floatingStats[0].value}
        label={HERO_CONTENT.floatingStats[0].label}
        className="bottom-28 left-6 lg:bottom-32 lg:left-16"
        delay={0.9}
        floatDelay={0}
      />
      <FloatingStat
        iconKey={HERO_CONTENT.floatingStats[2].icon}
        value={HERO_CONTENT.floatingStats[2].value}
        label={HERO_CONTENT.floatingStats[2].label}
        className="bottom-28 right-6 lg:bottom-36 lg:right-24"
        delay={1.0}
        floatDelay={1.2}
      />

      {/* Content — parallax 0.1x upward */}
      <motion.div
        style={{ y: headlineY, willChange: "transform" }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-deep backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-brand" />
          {HERO_CONTENT.eyebrow}
        </motion.p>

        <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {HERO_CONTENT.headlineLead}
          </motion.span>

          <span
            aria-live="polite"
            aria-atomic="true"
            className="relative mt-2 block h-[1.1em] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: "100%", opacity: 0, scale: 0.9, rotateX: -40 }}
                animate={{ y: "0%", opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ y: "-100%", opacity: 0, scale: 0.9, rotateX: 40 }}
                transition={{ duration: 0.6, delay: index === 0 ? 0.3 : 0, ease: [0.22, 1, 0.36, 1] }}
                className="block bg-gradient-to-r from-[#137ece] via-[#1f8cd9] to-[#0f5fa3] bg-clip-text text-transparent"
                style={{ willChange: "transform" }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg"
        >
          {HERO_CONTENT.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="group relative h-12 overflow-hidden rounded-full bg-brand px-7 text-brand-foreground shadow-[0_12px_40px_-12px_rgba(19,126,206,0.8)] hover:bg-brand-deep"
          >
            <Link to={HERO_CONTENT.primaryCta.href}>
              <span className="relative z-10 inline-flex items-center gap-2 font-medium">
                {HERO_CONTENT.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)] bg-[length:200%_100%] transition-transform duration-700 group-hover:translate-x-full"
              />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-brand/25 bg-white/60 px-7 text-brand-deep hover:bg-white hover:text-brand-deep"
          >
            <Link to={HERO_CONTENT.secondaryCta.href}>
              <span className="inline-flex items-center gap-2 font-medium">
                {HERO_CONTENT.secondaryCta.label}
                <ArrowDown className="h-4 w-4" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
