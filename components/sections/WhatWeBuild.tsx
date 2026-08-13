import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SOLUTIONS } from "@/lib/content";

/* Homepage — "What we build": the five things we deliver + an audit prompt. */
export function WhatWeBuild() {
  return (
    <Section tone="mist">
      <SectionHeading
        eyebrow="What We Build"
        title="Everything your operation needs, built to fit."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <Card hover className="group flex h-full flex-col">
              <IconBadge
                name={s.icon}
                tone={i % 2 === 1 ? "copper" : "electric"}
                size="lg"
              />
              <h3 className="mt-4 font-display text-base font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                {s.outcome}
              </p>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-blue-strong"
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

      {/* Audit prompt */}
      <Reveal className="mt-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-copper/25 bg-copper/[0.06] p-6 sm:p-8 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-copper shadow-soft sm:flex">
              <Icon name="calendar" size={24} />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-navy">
                Not sure where to start?
              </h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate">
                Book a free Operational Audit and we&rsquo;ll show you exactly
                what&rsquo;s slowing your business down — and how to fix it.
              </p>
            </div>
          </div>
          <Button href="/contact" size="lg" withArrow className="shrink-0">
            Book Free Audit
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
