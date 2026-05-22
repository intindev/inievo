/**
 * LabsTeaser — homepage section that previews Inievo Labs and The Chattala.
 */
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";

export function LabsTeaser() {
  return (
    <section className="relative w-full py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            <FlaskConical className="h-3.5 w-3.5" /> Inievo Labs
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            We don't just build for clients. We build for <span className="text-brand">society</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our research arm ships hyperlocal products that solve real problems for real
            communities — starting with The Chattala, a web app for the heart of
            Chittagong.
          </p>
          <Link
            to="/labs"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand"
          >
            Tour the lab
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(19,126,206,0.5), transparent 60%)",
            }}
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Featured project
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
            The Chattala
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A hyperlocal web app for the heart of Chittagong — built to make a
            culture-rich community visible on the internet.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "TanStack", "Postgres", "Edge"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
