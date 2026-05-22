/**
 * About — Inievo's story, values, team, and the case for building from Bangladesh.
 */
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Heart, Linkedin, ShieldCheck, Users } from "lucide-react";

import { CTABanner } from "@/components/ui/CTABanner";
import { ServicePageHero } from "@/components/ui/ServicePageHero";
import { SITE_CONFIG, TEAM_MEMBERS } from "@/lib/constants";

import { breadcrumbSchema, jsonLdScript } from "@/components/seo/JsonLd";
import { SEO_CONFIG, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead("about", {
      scripts: [jsonLdScript(breadcrumbSchema(SEO_CONFIG.about.path))],
    }),
  component: Page,
});

const VALUES = [
  { icon: ShieldCheck, title: "Honesty", body: "We say what we mean and ship what we promise." },
  { icon: Award, title: "Craft", body: "We sweat the details that compound into trust." },
  { icon: Users, title: "Community", body: "We build with — and for — the people we serve." },
  { icon: Heart, title: "Excellence", body: "Good enough isn't. Our floor is high on purpose." },
] as const;

function Page() {
  return (
    <main>
      <ServicePageHero
        tag="About Inievo"
        title="Built by people who believe the internet should work for everyone."
        subtitle="We are a small studio with a long memory — engineers, designers, and researchers who would rather make one thing remarkable than ten things forgettable."
      />

      {/* Our story */}
      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
          Our story
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          A studio that started with one stubborn belief.
        </h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Inievo was founded by {SITE_CONFIG.founder} on a simple observation: the
            digital tools that elevate businesses elsewhere in the world were
            disproportionately absent for the small shops, professionals, and
            institutions of Bangladesh. Not because the talent was missing — but because
            no one was treating the work with the seriousness it deserved.
          </p>
          <p>
            So we built a studio that would. We invest the way a serious agency
            invests — in research, in craft, in long-term partnerships — and we ship to
            a standard that earns the kind of repeat work we're proud of. That's the
            entire premise. There isn't a more sophisticated story to tell.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              Our values
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Four words we actually hold each other to.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl border border-border bg-card p-8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              The team
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Small on purpose. Senior on principle.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((m) => (
              <article
                key={m.id}
                className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
              >
                <div
                  aria-hidden
                  className="aspect-square w-full rounded-2xl bg-gradient-to-br from-brand/20 via-brand/5 to-background"
                />
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {m.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.18em] text-brand">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.bio}
                </p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bangladesh */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32" style={{ backgroundImage: "linear-gradient(140deg, #0a0f1e 0%, #0c1628 55%, #0d1a2e 100%)" }}>
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(19,126,206,0.28), transparent 60%)",
            filter: "blur(110px)",
          }}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
              Why Bangladesh
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              From here. For the world.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              We don't think of Bangladesh as a constraint to overcome. We think of it
              as the most interesting place to build right now — full of communities
              the global internet has barely begun to serve, and full of talent that's
              ready to serve them. That's our advantage, and we lean into it on every
              project.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
          >
            <svg
              viewBox="0 0 200 150"
              className="absolute inset-0 h-full w-full p-10 text-brand"
              aria-label="Stylized map of Bangladesh"
              role="img"
            >
              <path
                d="M70 20 L120 25 L140 50 L150 80 L130 110 L100 130 L70 125 L60 100 L50 70 L60 40 Z"
                fill="currentColor"
                fillOpacity="0.18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <motion.circle
                cx="95"
                cy="95"
                r="4"
                fill="#137ece"
                animate={{ scale: [1, 1.6, 1], opacity: [0.9, 0.4, 0.9] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
      </section>

      <CTABanner
        
        title="If this sounds like your kind of studio, let's talk."
        subtitle="We take on a small number of partners each quarter. Tell us about your project."
        label="Start the conversation"
        href="/contact"
      />
    </main>
  );
}
