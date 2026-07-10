"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/* ============================================================================
   Homepage section 8 — ROI Calculator.
   Self-contained client component. Estimates the annual cost of manual work:
        staff × hoursPerWeek × hourlyCost × 48 weeks
   The headline figure animates (counts up) whenever an input changes, and the
   whole thing degrades gracefully for keyboard + reduced-motion users.
   ============================================================================ */

const WEEKS_PER_YEAR = 48;

const money = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

/** Tween a number toward `target` with requestAnimationFrame (eased). */
function useCountUp(target: number, duration = 700) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      fromRef.current = target;
      setValue(target);
      return;
    }

    const start = fromRef.current;
    const diff = target - start;
    if (diff === 0) return;

    let raf = 0;
    let startTime = 0;
    const tick = (t: number) => {
      if (!startTime) startTime = t;
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(start + diff * eased);
      fromRef.current = current;
      setValue(current);
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

interface FieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (n: number) => void;
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: FieldProps) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-paper">
          {label}
        </label>
        <span className="rounded-md bg-ink px-2.5 py-1 font-display text-sm font-semibold text-electric tabular-nums ring-1 ring-inset ring-line">
          {display}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={display}
        className="mt-3 w-full cursor-pointer accent-electric"
      />
    </div>
  );
}

export function RoiCalculator() {
  const [staff, setStaff] = useState(5);
  const [hours, setHours] = useState(10);
  const [cost, setCost] = useState(45);

  const annual = staff * hours * cost * WEEKS_PER_YEAR;
  const animated = useCountUp(annual);

  return (
    <Section tone="soft" id="roi-calculator">
      <SectionHeading
        eyebrow="Calculate Your Cost"
        title="How much are manual processes costing you?"
      />

      <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:grid-cols-2">
        {/* Inputs */}
        <div className="rounded-2xl border border-line bg-ink-card p-6 sm:p-8">
          <div className="flex flex-col gap-7">
            <SliderField
              label="Number of staff"
              value={staff}
              min={1}
              max={50}
              step={1}
              display={`${staff}`}
              onChange={setStaff}
            />
            <SliderField
              label="Hours on admin per week (per person)"
              value={hours}
              min={1}
              max={40}
              step={1}
              display={`${hours} hrs`}
              onChange={setHours}
            />
            <SliderField
              label="Average hourly cost"
              value={cost}
              min={20}
              max={150}
              step={5}
              display={money.format(cost)}
              onChange={setCost}
            />
          </div>
        </div>

        {/* Result */}
        <div className="relative overflow-hidden rounded-2xl border border-electric/30 bg-ink-card p-6 sm:p-8">
          <div
            className="glow-electric pointer-events-none absolute -right-10 -top-10 h-64 w-64 opacity-90"
            aria-hidden="true"
          />
          <div className="relative flex h-full flex-col">
            <p className="text-sm font-medium text-slate-soft">
              Estimated annual cost of manual work
            </p>
            <p
              className="mt-3 font-display text-5xl font-bold tracking-tight text-electric tabular-nums sm:text-6xl"
              aria-live="polite"
            >
              {money.format(animated)}
            </p>
            <p className="mt-5 text-lg font-medium leading-relaxed text-paper">
              That&rsquo;s what inefficiency is costing you every year.
            </p>
            <div className="mt-auto pt-8">
              <Button href="/contact" size="lg" withArrow className="w-full sm:w-auto">
                Book a Free Operational Audit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-slate-soft">
        An estimate based on {WEEKS_PER_YEAR} working weeks a year — a starting
        point, not a quote. Your free audit pinpoints the real numbers.
      </p>
    </Section>
  );
}
