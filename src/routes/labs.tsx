/**
 * Inievo Labs — research arm and featured product showcase (The Chattala).
 */
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Lock, Sparkles, Users, FlaskConical, Clock } from "lucide-react";

import { CTABanner } from "@/components/ui/CTABanner";
import { ServicePageHero } from "@/components/ui/ServicePageHero";

import { breadcrumbSchema, jsonLdScript } from "@/components/seo/JsonLd";
import { SEO_CONFIG, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/labs")({
  head: () =>
    buildHead("labs", {
      scripts: [jsonLdScript(breadcrumbSchema(SEO_CONFIG.labs.path))],
    }),
  component: Page,
});

const PILLARS = [
  {
    icon: Users,
    title: "Community-First Design",
    body: "We start with the people who'll use the product, not the technology behind it.",
  },
  {
    icon: FlaskConical,
    title: "Research Before Code",
    body: "Field research, interviews, and lived experience shape every product decision.",
  },
  {
    icon: Clock,
    title: "Build For the Next 10 Years",
    body: "Boring infrastructure, predictable maintenance, joyful interfaces.",
  },
] as const;

const FUTURE = [
  { title: "Project Aurora", hint: "Civic data, made human." },
  { title: "Project Mela", hint: "Local commerce, reimagined." },
  { title: "Project Nodi", hint: "Stories from the rivers." },
] as const;

function Page() {
  return (
    <main>
      <ServicePageHero
        tag="Inievo Labs"
        title="We Don't Just Build for Clients. We Build for Bangladesh."
        subtitle="Inievo Labs is where curiosity meets code. Our internal research arm builds hyperlocal digital products that solve real problems for real communities."
      />

      {/* Featured project — The Chattala */}
      <section className="relative w-full py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.6 }}
            whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ willChange: "clip-path, opacity" }}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-12 lg:p-16"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(19,126,206,0.5), transparent 60%)",
              }}
            />
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30">
                    <Sparkles className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                      Featured project
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                      The Chattala
                    </h2>
                  </div>
                </div>
                <p className="mt-6 font-display text-xl italic text-muted-foreground">
                  A hyperlocal web app for the heart of Chittagong.
                </p>
                <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <h3 className="text-foreground">Why we built it</h3>
                    <p className="mt-2">
                      We saw a community rich in culture but invisible on the internet.
                      The Chattala makes the city legible — for locals and for the world.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">The philosophy</h3>
                    <p className="mt-2">
                      Hyperlocal technology is the most impactful technology. It serves
                      a real, knowable group of people — and you can measure the change.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">What it does</h3>
                    <p className="mt-2">
                      A discovery surface for places, voices, and events from across
                      Chittagong — designed for low-bandwidth and bilingual reading.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">The challenge</h3>
                    <p className="mt-2">
                      Bilingual typography, contributor trust, and shipping fast on a
                      research budget — without compromising on craft.
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  aria-label="Visit The Chattala live product"
                  className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-brand-foreground shadow-[0_12px_40px_-12px_rgba(19,126,206,0.8)] transition-colors hover:bg-brand-deep"
                >
                  Live product
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div>
                <div className="aspect-[4/5] rounded-2xl border border-border bg-gradient-to-br from-brand/15 via-background to-background p-6">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <span className="font-display text-5xl font-semibold tracking-tight text-foreground">
                      চট্টলা
                    </span>
                    <span className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      The Chattala
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Tech stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "React 19",
                      "TanStack Start",
                      "Tailwind v4",
                      "Postgres",
                      "Edge runtime",
                      "Framer Motion",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research philosophy */}
      <section className="relative w-full bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              Our belief
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Technology should serve people, not the other way around.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-border bg-card p-8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future projects teaser */}
      <section className="relative w-full py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Coming from the lab
            </h2>
            <p className="hidden text-sm text-muted-foreground sm:block">In research</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {FUTURE.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-3xl border border-dashed border-border bg-card/40 p-8"
              >
                <Lock
                  className="h-5 w-5 text-muted-foreground/60"
                  aria-hidden
                />
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground/80">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground/70">{f.hint}</p>
                <span className="mt-6 inline-block rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Stealth
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        
        title="Have a hyperlocal idea worth building?"
        subtitle="If your project serves a real community in Bangladesh, we want to hear about it."
        label="Pitch the lab"
        href="/contact"
      />
    </main>
  );
}
