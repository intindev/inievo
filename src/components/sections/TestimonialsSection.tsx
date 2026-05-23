import { HOME_TESTIMONIALS_CONTENT, TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="w-full bg-background py-24 md:py-32 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex flex-col justify-center lg:col-span-1">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {HOME_TESTIMONIALS_CONTENT.headline}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {HOME_TESTIMONIALS_CONTENT.subheadline}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <p className="text-lg leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="mt-8 flex flex-col">
                  <span className="font-semibold text-foreground">{t.author}</span>
                  <span className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
