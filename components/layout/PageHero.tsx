import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

/* Compact hero used at the top of every secondary page for a consistent feel. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink pb-16 pt-36 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="circuit-grid absolute inset-0 opacity-30" />
        <div className="glow-electric absolute -top-12 left-1/3 h-72 w-72 opacity-70" />
        <div className="glow-copper absolute -bottom-16 right-10 h-56 w-56 opacity-60" />
      </div>
      <div className="container-x relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-soft">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
