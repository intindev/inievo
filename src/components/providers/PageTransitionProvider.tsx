/**
 * PageTransitionProvider — sweeps a thin brand progress bar across the top of
 * the viewport on every route change and fades page content in/out.
 *
 * Uses TanStack Router's `useRouterState` to read the current pathname (the
 * AnimatePresence key) instead of Next.js usePathname.
 */
import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

import { pageTransitionVariants } from "@/lib/animations";

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      {/* Top progress bar — sweeps across on every route change */}
      <AnimatePresence mode="wait">
        <motion.span
          key={`bar-${pathname}`}
          aria-hidden
          initial={{ scaleX: 0, transformOrigin: "0% 50%", opacity: 1 }}
          animate={{ scaleX: 1, transformOrigin: "0% 50%", opacity: 1 }}
          exit={{ scaleX: 1, transformOrigin: "100% 50%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] bg-brand"
          style={{ willChange: "transform, opacity" }}
        />
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={pageTransitionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ willChange: "transform, opacity" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
