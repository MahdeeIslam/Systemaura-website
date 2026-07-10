import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SOLUTIONS } from "@/lib/content";

/* Homepage section 4 — Solutions. */
export function Solutions() {
  return (
    <Section tone="soft">
      <SectionHeading
        eyebrow="Our Solutions"
        title="Systems that transform the way you work"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 70}>
            <Card hover className="group flex h-full flex-col">
              <IconBadge name={s.icon} tone="electric" size="lg" />
              <h3 className="mt-5 font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft">
                {s.outcome}
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-electric transition-colors hover:text-electric-soft"
              >
                Learn more
                <Icon
                  name="arrow-right"
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
