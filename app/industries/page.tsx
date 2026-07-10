import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaSection } from "@/components/sections/CtaSection";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRY_PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "We specialise in operations-heavy trades: glass manufacturing, cabinet making, construction, shopfitting and field-service businesses across Melbourne.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={
          <>
            Built for the businesses that{" "}
            <span className="text-electric">build, make and fit</span>
          </>
        }
        intro="People trust specialists — so we focus on the industries we know best. We also work with shopfitters and fit-out teams, whose challenges sit close to the trades below."
      />

      <Section tone="ink">
        <div className="grid gap-5 md:grid-cols-2">
          {INDUSTRY_PAGES.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 70}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-ink-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper/45 hover:shadow-[0_28px_70px_-36px_rgba(184,115,51,0.55)] sm:p-8"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-copper/10 text-copper ring-1 ring-inset ring-copper/20">
                  <Icon name={ind.icon} size={28} />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold">
                  {ind.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">
                  {ind.headline}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-copper">
                  Explore {ind.name}
                  <Icon
                    name="arrow-right"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
