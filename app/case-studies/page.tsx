import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaSection } from "@/components/sections/CtaSection";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How operations-heavy businesses cut admin, improved visibility and got paid faster — told through the problems we solved and the results they saw.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Real problems. <span className="text-electric">Real results.</span>
          </>
        }
        intro="A look at the kinds of problems we remove and the outcomes our clients feel — laid out as problem, solution and result."
      />

      <Section tone="ink">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.slug} delay={i * 80}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        {/* NOTE: these case studies are illustrative examples that reflect the
            types of results we deliver. Replace with real, verified client
            numbers and named references before going live. */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-slate-soft">
          These examples are illustrative of the outcomes we deliver. We&rsquo;ll
          share named references and verified numbers as part of your audit.
        </p>
      </Section>

      <CtaSection
        heading="Want results like these for your business?"
        sub="Every project starts with a free Operational Audit. We'll find your biggest opportunities and show you what's possible."
      />
    </>
  );
}
