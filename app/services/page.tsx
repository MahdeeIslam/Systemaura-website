import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaSection } from "@/components/sections/CtaSection";
import { IconBadge } from "@/components/ui/IconBadge";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom systems, automations, web applications and websites — each built to save your business time, cut down manual work and help you make more money.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Systems that do the{" "}
            <span className="text-electric">heavy lifting</span>
          </>
        }
        intro="Four ways we help operations-heavy businesses run smoother, look sharper and grow faster. Every one of them is built around how your business actually works."
      />

      <Section tone="ink" containerClassName="flex flex-col gap-20 sm:gap-28">
        {SERVICES.map((service, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={service.title}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Narrative */}
                <div className={cn(flip && "lg:order-2")}>
                  <div className="flex items-center gap-3">
                    <IconBadge name={service.icon} tone="electric" size="lg" />
                    <Eyebrow>{`0${i + 1}`}</Eyebrow>
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-soft">
                    {service.problem}
                  </p>
                  <div className="mt-6 rounded-xl border border-electric/25 bg-electric/[0.06] p-5">
                    <p className="text-sm font-semibold text-electric">
                      The outcome
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/90">
                      {service.result}
                    </p>
                  </div>
                </div>

                {/* What's included */}
                <div className={cn(flip && "lg:order-1")}>
                  <div className="rounded-2xl border border-line bg-ink-card p-6 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                      What&rsquo;s included
                    </p>
                    <ul className="mt-5 flex flex-col gap-4">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-inset ring-electric/25">
                            <Icon name="check" size={14} />
                          </span>
                          <span className="text-sm leading-relaxed text-paper/90">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </Section>

      <CtaSection
        heading="Not sure which system you need?"
        sub="That's exactly what the free Operational Audit is for. We'll look at how you work and recommend the highest-impact place to start."
      />
    </>
  );
}
