/**
 * FinalCTASection — full-width closing band on the homepage.
 */
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-[#137ECE] px-8 py-14 text-center shadow-[0_30px_80px_-30px_rgba(19,126,206,0.6)] sm:px-14 sm:py-20"
        >
          <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to build something remarkable?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Tell us where you are today and where you want to be. We'll come back with a
            plan, not a pitch.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#137ECE] shadow-lg transition-colors hover:bg-white/90"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/labs"
              className="inline-flex h-12 items-center rounded-full border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Explore Inievo Labs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
