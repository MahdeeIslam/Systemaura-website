import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/brand/Logo";
import { NodeNetwork } from "@/components/brand/NodeNetwork";
import { WHY_POINTS } from "@/lib/content";

/* Homepage section 9 — Why SystemAura. */
export function WhySystemAura() {
  return (
    <Section tone="ink">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Promise"
            title={
              <>
                We don&rsquo;t just build systems.{" "}
                <span className="text-electric">We build better businesses.</span>
              </>
            }
          />

          <ul className="mt-10 flex flex-col gap-7">
            {WHY_POINTS.map((point, i) => (
              <li key={point.title}>
                <Reveal delay={i * 80} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-inset ring-electric/30">
                    <Icon name="check" size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-soft">
                      {point.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Supporting visual.
            TODO: replace with a real dark, premium boardroom/office photo
            (with the S monogram on the wall), loaded via next/image. */}
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-ink-card to-ink">
            <NodeNetwork
              variant="quiet"
              className="absolute inset-0 h-full w-full"
            />
            <div
              className="glow-electric absolute -left-10 bottom-0 h-56 w-56"
              aria-hidden="true"
            />
            {/* "Monogram on the wall" */}
            <div className="absolute inset-0 flex items-center justify-center">
              <LogoMark size={120} idSuffix="-why" className="opacity-90" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
