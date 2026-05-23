import { TRUST_BAR_ITEMS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="w-full border-y border-border bg-secondary/30 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Specialized In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-end">
            {TRUST_BAR_ITEMS.map((item, i) => (
              <span
                key={i}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
