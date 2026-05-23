import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { FINAL_CTA_CONTENT } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="w-full bg-background py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            {FINAL_CTA_CONTENT.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {FINAL_CTA_CONTENT.subheadline}
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              to={FINAL_CTA_CONTENT.ctaHref}
              className="group flex h-14 items-center justify-center rounded-full bg-brand px-10 text-sm font-bold uppercase tracking-wider text-brand-foreground shadow-sm transition-all hover:-translate-y-1 hover:bg-brand-deep hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
            >
              {FINAL_CTA_CONTENT.ctaLabel}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
