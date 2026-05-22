/**
 * ServicesSection — three-pillar bento card grid for the homepage.
 *
 * Each card represents one of Inievo's core service lines (SME web
 * presence, custom software, professional presence). Cards animate in
 * with a Framer Motion `variants` stagger and lift on hover. The third
 * card (pro presence) gets a prestige border treatment to signal that
 * Inievo is pioneering this category in Bangladesh.
 */

import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowUpRight, Code2, Store, UserSquare2 } from "lucide-react";
import { useRef, type ComponentType, type SVGProps } from "react";

import { cn } from "@/lib/utils";

interface ServiceCardData {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tag: string;
  headline: string;
  body: string;
  pill: string;
  cta: { label: string; href: string };
  prestige?: boolean;
}

const SERVICE_CARDS: readonly ServiceCardData[] = [
  {
    id: "sme",
    icon: Store,
    tag: "For Local Businesses & Online Shops",
    headline: "Your Facebook Shop Deserves a Real Home",
    body:
      "Thousands of buyers search Google before they trust a brand. A professional website is no longer optional — it's the difference between a sale and a scroll. We build fast, credible, and automated web stores that work while you sleep.",
    pill: "Starting at an SME-friendly budget",
    cta: { label: "See How It Works", href: "/services/sme-web-presence" },
  },
  {
    id: "custom",
    icon: Code2,
    tag: "For Growing Businesses & Institutions",
    headline: "Software That Grows With Your Ambition",
    body:
      "Off-the-shelf tools break when your business evolves. We architect custom software and mobile apps built on a scalable foundation — so adding new features is effortless, not expensive. Institutional, commercial, or personal — we build it right the first time.",
    pill: "Scalable · Maintainable · Future-proof",
    cta: { label: "Explore Custom Builds", href: "/services/custom-software" },
  },
  {
    id: "pro",
    icon: UserSquare2,
    tag: "For Doctors, Engineers & High-Profile Professionals",
    headline: "The World Googles You. Be Ready.",
    body:
      "Abroad, every respected professional has a personal website. In Bangladesh, this is a wide-open opportunity. We build trust-first, credential-showcasing websites that position you as the authority in your field — because your expertise deserves a platform worthy of it.",
    pill: "🇧🇩 Pioneering This Category in Bangladesh",
    cta: { label: "Build Your Legacy", href: "/services/pro-presence" },
    prestige: true,
  },
] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceCard({
  card,
  containerRef,
  position,
}: {
  card: ServiceCardData;
  containerRef: React.RefObject<HTMLDivElement | null>;
  position: number;
}) {
  const Icon = card.icon;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  // Per-card stagger window: each card rotates 3deg → 0 as it scrolls in
  const start = 0.1 + position * 0.12;
  const rotateX = useTransform(scrollYProgress, [start, start + 0.25], [3, 0]);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      style={{ rotateX, transformPerspective: 1200, willChange: "transform" }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-8 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_24px_60px_-40px_rgba(0,0,0,0.35)] transition-shadow duration-500",
        card.prestige
          ? "border-transparent bg-gradient-to-br from-card to-card [background-clip:padding-box] ring-1 ring-brand/30 hover:ring-brand/60"
          : "border-border hover:border-brand/40",
      )}
    >
      {/* Prestige gradient border */}
      {card.prestige && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl p-[1px] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude]"
          style={{
            background:
              "linear-gradient(140deg, rgba(19,126,206,0.7), rgba(19,126,206,0) 40%, rgba(19,126,206,0.5))",
          }}
        />
      )}

      {/* Hover glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(19,126,206,0.45), transparent 60%)" }}
      />

      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30 transition-transform duration-500 group-hover:scale-105">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {card.tag}
        </span>
      </div>

      <h3 className="mt-7 font-display text-2xl font-semibold leading-tight text-foreground">
        {card.headline}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.body}</p>

      <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
        {card.pill}
      </div>

      <div className="mt-auto pt-8">
        <Link
          to={card.cta.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand"
        >
          {card.cta.label}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative w-full py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            Three pillars
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            One studio. Three audiences. One uncompromising standard.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Whether you sell out of a Facebook shop, run a growing institution, or are a
            professional whose name carries weight — we have a track built for you.
          </p>
        </div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {SERVICE_CARDS.map((card, i) => (
            <ServiceCard key={card.id} card={card} containerRef={gridRef} position={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
