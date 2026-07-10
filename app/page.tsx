import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { WhySystemAura } from "@/components/sections/WhySystemAura";
import { OutcomeStrip } from "@/components/sections/OutcomeStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Solutions />
      <Industries />
      <Process />
      <FeaturedCaseStudy />
      <RoiCalculator />
      <WhySystemAura />
      <OutcomeStrip />
      <Testimonials />
      <FinalCta />
    </>
  );
}
