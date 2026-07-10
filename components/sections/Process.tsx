import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS } from "@/lib/content";

/* Homepage section 6 — The Process (four connected, numbered steps). */
export function Process() {
  return (
    <Section tone="soft">
      <SectionHeading
        eyebrow="Our Process"
        title={
          <>
            A proven process.{" "}
            <span className="text-electric">Measurable results.</span>
          </>
        }
      />

      <ol className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-6">
        {/* Connector line behind the circles (desktop) */}
        <div
          className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-line md:block"
          aria-hidden="true"
        />

        {PROCESS.map((step, i) => (
          <li key={step.step} className="relative">
            <Reveal delay={i * 90} className="flex flex-col items-center text-center">
              <span className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-copper bg-ink-soft font-display text-xl font-bold text-copper">
                {step.step}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-soft">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
