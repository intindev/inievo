import { motion } from "framer-motion";

import { OPERATING_PRINCIPLES } from "@/lib/constants";

export function TechStackSection() {
  return (
    <section className="w-full bg-secondary/50 py-24 text-foreground md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {OPERATING_PRINCIPLES.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {OPERATING_PRINCIPLES.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {OPERATING_PRINCIPLES.items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col border-t border-border/60 pt-6"
            >
              <span className="text-sm font-semibold text-brand">{item.num}</span>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
