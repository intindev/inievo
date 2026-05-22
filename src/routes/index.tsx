import { createFileRoute } from "@tanstack/react-router";

import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LabsTeaser } from "@/components/sections/LabsTeaser";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { jsonLdScript, organizationSchema } from "@/components/seo/JsonLd";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead("home", {
      scripts: [jsonLdScript(organizationSchema())],
    }),
  component: HomePage,
});

/**
 * Inievo Technologies homepage. Sprints 2–4 assemble the hero, trust bar,
 * services grid, stats, labs teaser, testimonials, blog teaser, and final CTA.
 */
function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <ServicesSection />
      <LabsTeaser />
      <TechStackSection />
      <TestimonialsSection />
      <BlogTeaser />
      <FinalCTASection />
    </main>
  );
}
