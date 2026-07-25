import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { WhySystemAura } from "@/components/sections/WhySystemAura";
import { OutcomeStrip } from "@/components/sections/OutcomeStrip";
import { FinalCta } from "@/components/sections/FinalCta";

// NOTE: the Trust bar (client logos) and Testimonials sections are intentionally
// left out for now — they'll be added back with real clients once work starts.
// The <TrustBar /> and <Testimonials /> components still exist and can be
// dropped back into this list when you're ready.

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solutions />
      <Industries />
      <Process />
      <FeaturedCaseStudy />
      <RoiCalculator />
      <WhySystemAura />
      <OutcomeStrip />
      <FinalCta />
    </>
  );
}
