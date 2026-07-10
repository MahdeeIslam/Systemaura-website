import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CASE_STUDIES } from "@/lib/content";

/* Homepage section 7 — Featured case study. */
export function FeaturedCaseStudy() {
  const featured = CASE_STUDIES.find((c) => c.featured) ?? CASE_STUDIES[0];

  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Case Studies"
        title={
          <>
            Real problems. <span className="text-electric">Real results.</span>
          </>
        }
      />

      <Reveal className="mx-auto mt-14 max-w-4xl">
        <CaseStudyCard study={featured} featured />
      </Reveal>

      <div className="mt-10 flex justify-center">
        <Button href="/case-studies" variant="secondary" withArrow>
          View All Case Studies
        </Button>
      </div>
    </Section>
  );
}
