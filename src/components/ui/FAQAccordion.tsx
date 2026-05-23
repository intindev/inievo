/**
 * FAQAccordion — single-open accordion for service-page FAQs.
 *
 * Uses Framer Motion's AnimatePresence + height/opacity tween for smooth
 * expand/collapse. Buttons are fully accessible with hover and focus states.
 */

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";

import type { FAQ } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: readonly FAQ[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul
      className={cn(
        "divide-y divide-border/60 rounded-3xl border border-border/60 bg-secondary/30",
        className,
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <li key={item.question}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-secondary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand/40 sm:px-8 rounded-sm active:bg-secondary"
            >
              <span
                className={cn(
                  "font-display text-base font-semibold transition-colors",
                  isOpen ? "text-brand" : "text-foreground group-hover:text-foreground/80",
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/80 bg-background text-muted-foreground transition-all duration-300 group-hover:border-brand/30",
                  isOpen && "rotate-45 border-brand/50 bg-brand/5 text-brand",
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-8 pr-16 text-base leading-relaxed text-muted-foreground sm:px-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
