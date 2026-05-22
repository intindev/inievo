/**
 * FAQAccordion — single-open accordion for service-page FAQs.
 *
 * Uses Framer Motion's AnimatePresence + height/opacity tween for smooth
 * expand/collapse. Buttons are real <button>s with aria-expanded /
 * aria-controls so the component is fully keyboard accessible.
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
    <ul className={cn("divide-y divide-border rounded-2xl border border-border bg-card/40", className)}>
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
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-accent/40"
            >
              <span className="text-base font-medium text-foreground">{item.question}</span>
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground transition-transform duration-300",
                  isOpen && "rotate-45 border-brand text-brand",
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
                  <p className="px-6 pb-6 pr-16 text-sm leading-relaxed text-muted-foreground">
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
