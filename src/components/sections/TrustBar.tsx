/**
 * TrustBar — full-width dual-row marquee strip between hero and stats.
 *
 * Two CSS-only infinite marquees scrolling in opposite directions for
 * visual depth. Pauses on hover. Tinted with the brand color at low
 * opacity with brand-tinted top/bottom borders.
 */

import { TRUST_BAR_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Row({ reverse = false }: { reverse?: boolean }) {
  // Duplicate items so translateX(-50%) produces a seamless loop.
  const items = [...TRUST_BAR_ITEMS, ...TRUST_BAR_ITEMS];
  return (
    <div className="group/marquee relative overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-12 whitespace-nowrap py-4 text-sm font-medium tracking-wide text-foreground/80",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover/marquee:[animation-play-state:paused]",
        )}
        style={{ willChange: "transform" }}
      >
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-3">
            <span>{item}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-brand/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section
      aria-label="What we do"
      className="relative w-full border-y"
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand) 8%, transparent)",
        borderColor: "color-mix(in oklab, var(--brand) 20%, transparent)",
      }}
    >
      <Row />
      <div
        aria-hidden
        className="h-px w-full"
        style={{ background: "color-mix(in oklab, var(--brand) 18%, transparent)" }}
      />
      <Row reverse />

      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"
      />
    </section>
  );
}
