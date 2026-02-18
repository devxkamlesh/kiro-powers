import { HeroSection } from "@/components/hero-section";
import { PowersSection } from "@/components/powers-section";
import { FeaturesSection } from "@/components/features-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <PowersSection />
      <FeaturesSection />
      <UseCasesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
