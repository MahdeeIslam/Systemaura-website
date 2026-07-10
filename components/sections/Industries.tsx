import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/content";
import { cn } from "@/lib/cn";

/* Homepage section 5 — Industries. */
export function Industries() {
  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Who We Help"
        title="Built for operations-heavy businesses"
        intro="People trust specialists — so we focus on the industries we know best."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {INDUSTRIES.map((ind, i) => {
          const href = ind.hasPage ? `/industries/${ind.slug}` : "/industries";
          return (
            <Reveal key={ind.slug} delay={i * 60}>
              <Link
                href={href}
                className={cn(
                  "group flex h-full flex-col items-start gap-4 rounded-2xl border border-line bg-ink-card p-6",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-[0_24px_60px_-30px_rgba(184,115,51,0.55)]",
                )}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper ring-1 ring-inset ring-copper/20">
                  <Icon name={ind.icon} size={24} />
                </span>
                <span className="mt-1 font-display text-base font-semibold leading-tight">
                  {ind.name}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-soft transition-colors group-hover:text-copper">
                  Explore
                  <Icon
                    name="arrow-right"
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
