/**
 * useCounter — animates a numeric value from 0 → target when `active` is true.
 *
 * Uses requestAnimationFrame with an easeOutCubic curve. Respects
 * `prefers-reduced-motion` by snapping to the target instantly.
 */
import { useEffect, useState } from "react";

export function useCounter(target: number, active: boolean, duration = 1600): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}
