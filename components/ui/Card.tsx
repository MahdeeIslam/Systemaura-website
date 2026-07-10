import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/* ============================================================================
   Card — the lifted surface that sits on the `ink` background. Set `hover` for
   interactive cards (subtle lift + electric border glow on hover/focus).
   ============================================================================ */

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = false, className, children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-line bg-ink-card p-6 sm:p-7",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-electric/45 hover:shadow-[0_24px_60px_-30px_rgba(37,99,235,0.6)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
