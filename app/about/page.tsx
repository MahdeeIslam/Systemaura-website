import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/brand/Logo";
import { NodeNetwork } from "@/components/brand/NodeNetwork";

export const metadata: Metadata = {
  title: "About",
  description:
    "SystemAura is a Melbourne team that cares about your business outcomes, not the technology. We build operations-first systems around how you actually work.",
};

const VALUES = [
  {
    icon: "growth" as const,
    title: "Outcomes, not jargon",
    description:
      "We translate every feature into time saved or money made. If it doesn't move your business forward, we don't build it.",
  },
  {
    icon: "system" as const,
    title: "Operations-first",
    description:
      "We map how your business actually runs before we build anything. The system serves the operation, never the other way around.",
  },
  {
    icon: "integration" as const,
    title: "Built around you",
    description:
      "No two businesses run the same way, so no two systems should either. Everything we build is shaped to fit how you work.",
  },
  {
    icon: "support" as const,
    title: "Partners for the long run",
    description:
      "We stick around and keep improving your systems as your business changes and grows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SystemAura"
        title={
          <>
            Most agencies talk about technology.{" "}
            <span className="text-electric">We talk about your business.</span>
          </>
        }
        intro="We're a Melbourne team that believes operations-heavy businesses don't need more buzzwords — they need their day to run smoother."
      />

      {/* Story */}
      <Section tone="ink">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-slate-soft">
            <p>
              SystemAura started with a simple observation: growing trade and
              manufacturing businesses lose enormous amounts of time and money to
              manual work, double handling and disconnected tools — and almost
              nobody talks about it in plain language.
            </p>
            <p>
              Most agencies lead with the technology. The platforms, the
              frameworks, the acronyms. But business owners don&rsquo;t care about
              any of that. They care about getting their evenings back, getting
              paid faster, and being able to grow without everything falling
              through the cracks.
            </p>
            <p className="border-l-2 border-copper pl-5 text-lg font-medium text-paper">
              So that&rsquo;s what we lead with. We start with how your business
              actually works — your jobs, quotes, installs and follow-ups — and
              only then decide what to build.
            </p>
            <p>
              The result is systems that feel less like software and more like a
              better way to run the business. That&rsquo;s the whole point.
            </p>
          </div>

          {/* Visual */}
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-ink-card to-ink">
              <NodeNetwork
                variant="quiet"
                className="absolute inset-0 h-full w-full"
              />
              <div
                className="glow-copper absolute -right-10 top-10 h-56 w-56"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <LogoMark size={132} idSuffix="-about" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="What We Believe"
          title="An operations-first philosophy"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 70}>
              <Card hover className="h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper ring-1 ring-inset ring-copper/20">
                  <Icon name={value.icon} size={24} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                  {value.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        heading="Let's talk about your business"
        sub="The best way to understand how we work is to experience it. Book a free Operational Audit — practical, tailored, no obligation."
      />
    </>
  );
}
