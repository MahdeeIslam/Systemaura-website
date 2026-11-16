import { Hero } from "@/components/sections/Hero";
import { Workflow } from "@/components/sections/Workflow";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { StickyCta } from "@/components/sections/StickyCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Workflow />
      <WhatWeDo />
      <RoiCalculator />
      <WhatWeBuild />
      <StickyCta />
    </>
  );
}
