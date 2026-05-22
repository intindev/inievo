/**
 * StatsSection — animated count-up stats triggered on scroll into view.
 *
 * Layout: 4-column desktop, 2x2 tablet, stacked mobile. Subtle vertical
 * separators between stats on lg+. Each counter animates from 0 to its
 * target via `useCounter` once the section enters the viewport.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { useCounter } from "@/hooks/use-counter";
import { STATS } from "@/lib/constants";

function Stat({
  value,
  suffix,
  label,
  description,
  active,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  active: boolean;
  index: number;
}) {
  const n = useCounter(value, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="relative px-6 py-8 text-center lg:px-8 lg:text-left"
    >
      <p className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
        <span className="bg-gradient-to-br from-brand to-brand-deep bg-clip-text text-transparent">
          {n.toLocaleString("en-US")}
          {suffix}
        </span>
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/90">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <section ref={ref} className="relative w-full py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            Proof, not promises
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A results-driven digital studio delivering measurable impact.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {STATS.map((s, i) => (
            <Stat
              key={s.id}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              description={s.description}
              active={inView}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
