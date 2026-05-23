import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => buildHead("About"),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              The Studio
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              Engineering <br />
              without compromise.
            </h1>
            <p className="mt-10 text-xl leading-relaxed text-muted-foreground">
              Inievo is an elite software engineering studio based in Chattogram, Bangladesh. We do
              not assemble templates; we architect high-performance digital systems and
              editorial-grade brand identities from the ground up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 space-y-16 border-t border-border/60 pt-16"
          >
            <section className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                  Our Philosophy
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-loose">
                  We believe that speed, structural integrity, and exquisite design are not mutually
                  exclusive. A fast system should look beautiful, and a beautiful interface should
                  be engineered to scale. We partner directly with founders and teams to eliminate
                  technical debt and establish long-term digital authority.
                </p>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                  The Approach
                </h2>
              </div>
              <div className="space-y-8 md:col-span-8">
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-loose">
                  Our process is anchored in raw architectural discipline. We favor typed languages,
                  semantic markup, zero-runtime CSS, and edge-native deployments. Every line of code
                  is written with absolute intent.
                </p>
                <div className="flex flex-col gap-6 rounded-2xl bg-secondary/50 p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Uncompromising Quality Bar
                  </h3>
                  <ul className="space-y-4 text-base text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>Strictly typed domains to prevent runtime regressions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>
                        Accessibility-first semantics, treating a11y as a core requirement.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>Relentless optimization for sub-second Core Web Vitals.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
