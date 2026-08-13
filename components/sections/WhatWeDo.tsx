import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { JobsTableDemo } from "@/components/dashboard/JobsTableDemo";

/* Homepage — "What we do, in simple terms". */

const STEPS = [
  "We learn how your business works",
  "We find the manual tasks costing you time and money",
  "We build a system that fits the way you work",
  "We automate the busy work",
  "You get more time, happier customers and better profits",
];

export function WhatWeDo() {
  return (
    <Section tone="canvas">
      <SectionHeading
        align="left"
        eyebrow="What We Do (In Simple Terms)"
        title="We help you run your business smoother, every day."
        intro="We learn how your business works, find the tasks costing you time and money, then build a custom system that brings everything together and automates the work."
      />

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Chaos → order + checklist */}
        <Reveal>
          <TangleToOrder />
          <ul className="mt-8 space-y-4">
            {STEPS.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <Icon name="check" size={16} />
                </span>
                <span className="text-base text-navy">{step}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Demo jobs table */}
        <Reveal delay={90}>
          <JobsTableDemo />
        </Reveal>
      </div>
    </Section>
  );
}

/* Small decorative "tangled manual work → organised flow" illustration. */
function TangleToOrder() {
  return (
    <svg
      viewBox="0 0 340 96"
      className="h-20 w-full max-w-md"
      fill="none"
      aria-hidden="true"
    >
      {/* messy left side */}
      <path
        d="M12 48c14-26 30 22 44-2S86 22 96 48s-22 20-8 30 44-14 40 6"
        className="stroke-copper/70"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 60c18-8 24-30 40-20s6 34 24 30"
        className="stroke-slate/40"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* organised right side */}
      {[30, 48, 66].map((y) => (
        <line
          key={y}
          x1="200"
          y1={y}
          x2="316"
          y2={y}
          className="stroke-blue"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      {[30, 48, 66].map((y) => (
        <path
          key={`a-${y}`}
          d={`M310 ${y - 5} l6 5 l-6 5`}
          className="stroke-blue"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {/* junction */}
      <circle cx="176" cy="48" r="6" className="fill-blue" />
    </svg>
  );
}
