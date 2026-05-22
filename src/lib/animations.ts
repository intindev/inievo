/**
 * animations.ts — Single source of truth for Framer Motion variants.
 *
 * Import these variants instead of defining inline ones. Spring physics
 * are tuned for a calm, premium feel: stiffness 100, damping 20.
 */
import type { Variants, Transition } from "framer-motion";

const spring: Transition = { type: "spring", stiffness: 100, damping: 20 };

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: spring },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: spring },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.2 } },
};

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: spring },
  exit: { opacity: 0, x: -20, transition: { duration: 0.25 } },
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: spring },
  exit: { opacity: 0, x: 20, transition: { duration: 0.25 } },
};

export const cardHoverVariants: Variants = {
  rest: { y: 0, boxShadow: "0 12px 30px -20px rgba(0,0,0,0.25)" },
  hover: {
    y: -8,
    boxShadow: "0 30px 60px -30px rgba(19,126,206,0.35)",
    transition: { type: "spring", stiffness: 240, damping: 22 },
  },
};

export const buttonHoverVariants: Variants = {
  rest: { scale: 1, filter: "brightness(1)" },
  hover: {
    scale: 1.02,
    filter: "brightness(1.08)",
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
  tap: { scale: 0.97 },
};

export const pageTransitionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2, ease: "easeIn" } },
};
