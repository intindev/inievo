/**
 * TestimonialsSection — minimal blue band with white quote cards.
 * Horizontal snap scroll with dot indicators below.
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.scrollWidth / TESTIMONIALS.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(TESTIMONIALS.length - 1, Math.max(0, idx)));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / TESTIMONIALS.length;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-[#137ece] py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
            Trusted voices
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            What our clients tell their friends.
          </h2>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative w-[85%] flex-shrink-0 snap-center rounded-2xl bg-white p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] sm:w-[60%] lg:w-[32%]"
            >
              <Quote className="h-5 w-5 text-[#137ece]" aria-hidden />
              <blockquote className="mt-3 font-display text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-3 text-sm">
                <div className="font-semibold text-foreground">{t.author}</div>
                <div className="text-muted-foreground">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
