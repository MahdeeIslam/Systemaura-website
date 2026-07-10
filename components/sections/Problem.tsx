import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { PROBLEMS } from "@/lib/content";

/* Homepage section 3 — The Problem. */
export function Problem() {
  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Common Challenges We Solve"
        title="Is your business struggling with any of these?"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <Card hover className="h-full">
              <IconBadge name={p.icon} tone="copper" />
              <h3 className="mt-5 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                {p.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-base italic leading-relaxed text-slate-soft">
        These problems cost businesses thousands of dollars every month in lost
        productivity and missed opportunities.
      </p>
    </Section>
  );
}
