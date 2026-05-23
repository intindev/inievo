import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/labs")({
  head: () => buildHead("Labs"),
  component: LabsPage,
});

const LAB_PROJECTS = [
  {
    title: "The Chattala",
    description:
      "A hyperlocal media platform serving the Chattogram region. Engineered for maximum speed and SEO penetration, establishing a modern digital standard for regional publishing.",
    status: "Active",
    metrics: ["1M+ Reads", "Sub-200ms TTFB"],
  },
  {
    title: "Inievo Core Tokens",
    description:
      "An internal design token architecture for zero-runtime React styling. Extracts Tailwind v4 configurations into highly predictable, type-safe variables for enterprise UIs.",
    status: "Internal",
    metrics: ["0kb Runtime", "100% Strict Type"],
  },
];

function LabsPage() {
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
              Inievo Labs
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              Research & <br />
              exploration.
            </h1>
            <p className="mt-10 text-xl leading-relaxed text-muted-foreground">
              A dedicated space for internal tooling, open-source initiatives, and experimental
              digital products. Labs is where we incubate ideas before they become studio standards.
            </p>
          </motion.div>

          <div className="mt-24 space-y-8">
            {LAB_PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6 rounded-3xl border border-border/40 bg-secondary/30 p-8 md:flex-row md:items-start md:p-12 transition-colors hover:bg-secondary/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs font-medium uppercase tracking-wider text-brand"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
