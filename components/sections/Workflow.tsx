"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/* ============================================================================
   Homepage — the main explanatory section: Manual Work → Automate → One
   Connected System → Outcome. The flow reveals + the connectors draw once as
   the section scrolls into view (respecting reduced-motion). Plays once.
   ============================================================================ */

const STEPS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "file",
    title: "Manual Work",
    description: "Spreadsheets, emails, texts and repetitive admin tasks.",
  },
  {
    icon: "automation",
    title: "We Automate It",
    description: "We remove the busy work and set up automations.",
  },
  {
    icon: "integration",
    title: "One Connected System",
    description: "Everything in one place. Visible, organised and up to date.",
  },
  {
    icon: "growth",
    title: "More Time, Less Cost, More Growth",
    description: "Save time, reduce costs and grow with confidence.",
  },
];

const RESULTS = [
  "Save hours of admin every week",
  "Fewer mistakes and less stress",
  "Better customer experience",
  "Get paid faster",
  "More time to focus on growth",
];

export function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section tone="mist" id="how-it-works">
      <SectionHeading
        eyebrow="How It Works"
        title={
          <>
            We turn manual, time-consuming work into{" "}
            <span className="text-blue">smart</span>,{" "}
            <span className="text-copper">automated</span> systems.
          </>
        }
      />

      <div ref={ref} className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Flow */}
        <div className="lg:col-span-7">
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-start">
            {STEPS.map((step, i) => (
              <Fragment key={step.title}>
                <div
                  className="flex flex-1 flex-col items-center text-center transition-all duration-500 ease-out lg:items-center"
                  style={{
                    transitionDelay: `${i * 140}ms`,
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0)" : "translateY(14px)",
                  }}
                >
                  <span
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl ring-1",
                      i === STEPS.length - 1
                        ? "bg-blue/10 text-blue ring-blue/20"
                        : "bg-surface text-copper ring-hair-cool",
                    )}
                  >
                    <Icon name={step.icon} size={26} />
                  </span>
                  <h3 className="mt-4 font-display text-sm font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[15rem] text-xs leading-relaxed text-slate">
                    {step.description}
                  </p>
                </div>

                {i < STEPS.length - 1 && (
                  <div
                    className="flex items-center justify-center py-1 lg:pt-5"
                    style={{
                      transitionProperty: "opacity, transform",
                      transitionDuration: "500ms",
                      transitionDelay: `${i * 140 + 70}ms`,
                      opacity: shown ? 1 : 0,
                    }}
                    aria-hidden="true"
                  >
                    <Icon
                      name="arrow-right"
                      size={20}
                      className="rotate-90 text-copper/60 lg:rotate-0"
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* The Result */}
        <div className="lg:col-span-5">
          <div
            className="rounded-2xl border border-hair-cool bg-surface p-6 shadow-soft transition-all duration-500 ease-out sm:p-7"
            style={{
              transitionDelay: "560ms",
              opacity: shown ? 1 : 0,
              transform: shown ? "translateY(0)" : "translateY(14px)",
            }}
          >
            <h3 className="font-display text-lg font-bold text-navy">
              The Result
            </h3>
            <ul className="mt-4 space-y-3">
              {RESULTS.map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-sm text-navy">{r}</span>
                </li>
              ))}
            </ul>

            {/* Subtle, non-numeric trend cue */}
            <div className="mt-6 rounded-xl bg-canvas/70 p-4">
              <p className="text-xs font-medium text-slate">
                Less manual work over time
              </p>
              <svg
                viewBox="0 0 260 48"
                className="mt-2 h-10 w-full"
                fill="none"
                aria-hidden="true"
              >
                <polyline
                  points="4,40 50,34 96,36 142,24 188,20 232,8 256,6"
                  className="stroke-blue"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="256" cy="6" r="3" className="fill-copper" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
