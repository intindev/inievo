import { createFileRoute } from "@tanstack/react-router";

import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
 * Inievo Technologies homepage.
 * Premium light-first editorial-tech experience.
 */
function HomePage() {
  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden bg-background">
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <TechStackSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
}
