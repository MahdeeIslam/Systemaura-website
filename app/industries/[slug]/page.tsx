import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRY_PAGES, INDUSTRIES } from "@/lib/content";

/* Pre-render one static page per industry that has content. */
export function generateStaticParams() {
  return INDUSTRY_PAGES.map((ind) => ({ slug: ind.slug }));
}

function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug && i.hasPage);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return { title: "Industry" };
  return {
    title: `${ind.name} Systems`,
    description: ind.intro,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Industries · ${ind.name}`}
        title={ind.headline}
        intro={ind.intro}
      />

      {/* The pains */}
      <Section tone="ink">
        <SectionHeading
          align="left"
          eyebrow="Sound Familiar?"
          title="The challenges you know too well"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {ind.pains.map((pain, i) => (
            <Reveal key={pain} delay={i * 60}>
              <li className="flex items-start gap-3 rounded-xl border border-line bg-ink-card p-5">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper ring-1 ring-inset ring-copper/20">
                  <Icon name="eye-off" size={15} />
                </span>
                <span className="text-sm leading-relaxed text-paper/90">
                  {pain}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* How we solve them */}
      <Section tone="soft">
        <SectionHeading
          align="left"
          eyebrow="How We Help"
          title={
            <>
              How we fix it for{" "}
              <span className="text-electric">{ind.name.toLowerCase()}</span>
            </>
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {ind.solutions.map((sol, i) => (
            <Reveal key={sol.title} delay={i * 70}>
              <Card hover className="h-full">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-inset ring-electric/25">
                    <Icon name="check" size={16} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {sol.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                      {sol.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Case angle */}
      <Section tone="ink">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-electric/25 bg-ink-card p-8 sm:p-10">
            <div
              className="glow-electric pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-80"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                What this could look like
              </p>
              <p className="mt-4 max-w-3xl font-display text-2xl font-medium leading-snug text-paper sm:text-[1.7rem]">
                {ind.caseAngle}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaSection
        heading={`See what's possible for your ${ind.name.toLowerCase()} business`}
        sub="Book a free Operational Audit and we'll show you exactly where time and money are leaking — and how to fix it."
      />
    </>
  );
}
