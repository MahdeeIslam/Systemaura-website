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
    "Example scenarios showing how operations-heavy businesses can cut admin, improve visibility and get paid faster — laid out as problem, solution and outcome.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Problems we solve, <span className="text-electric">and how.</span>
          </>
        }
        intro="Example scenarios showing the kinds of problems we remove and the outcomes we aim for — laid out as problem, solution and outcome."
      />

      <Section tone="ink">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.slug} delay={i * 80}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        {/* These are generic example scenarios, not specific client results. */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-slate-soft">
          These are example scenarios to show how we work — not specific client
          results. We&rsquo;ll walk through what&rsquo;s realistic for your
          business in your free Operational Audit.
        </p>
      </Section>

      <CtaSection
        heading="Want to see what's possible for your business?"
        sub="Every project starts with a free Operational Audit. We'll find your biggest opportunities and show you what's possible."
      />
    </>
  );
}
