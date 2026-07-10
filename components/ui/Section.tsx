import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ============================================================================
   Section — standardises vertical rhythm and background tone for page bands.
   tone: "ink" (default dark) · "soft" (subtly different dark) · "paper" (light).
   ============================================================================ */

const tones = {
  ink: "bg-ink text-paper",
  soft: "bg-ink-soft text-paper",
  paper: "bg-paper text-ink",
} as const;

interface SectionProps {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  containerClassName?: string;
  /** Set false to manage the inner container yourself (e.g. full-bleed bands). */
  contained?: boolean;
  children: ReactNode;
}

export function Section({
  id,
  tone = "ink",
  className,
  containerClassName,
  contained = true,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-24 lg:py-28", tones[tone], className)}
    >
      {contained ? (
        <div className={cn("container-x", containerClassName)}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
