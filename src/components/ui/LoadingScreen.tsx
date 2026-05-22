/**
 * LoadingScreen — first-visit-only branded loader.
 *
 * - Shows once per session (sessionStorage flag).
 * - Skipped entirely when prefers-reduced-motion is set.
 * - Max duration: 1.8s. Fades out without blocking interaction.
 */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOGO_DARK_BG =
  "https://res.cloudinary.com/dp5ap39r6/image/upload/v1777712181/inievo_full_logo_png_dydmze.png";
const ICON =
  "https://res.cloudinary.com/dp5ap39r6/image/upload/v1777712162/6_ot5ui5.png";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("inievo:splash");
    if (reduced || seen) return;
    sessionStorage.setItem("inievo:splash", "1");
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="fixed inset-0 z-[300] grid place-items-center bg-[#0a0f1e]"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-5">
            <motion.img
              src={ICON}
              alt=""
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: [
                  "drop-shadow(0 0 0 rgba(19,126,206,0))",
                  "drop-shadow(0 0 24px rgba(19,126,206,0.7))",
                  "drop-shadow(0 0 8px rgba(19,126,206,0.4))",
                ],
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-16 w-16"
            />
            <motion.img
              src={LOGO_DARK_BG}
              alt="Inievo"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-6 w-auto"
            />
          </div>
          <motion.span
            initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-x-0 bottom-0 h-[2px] bg-brand"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
