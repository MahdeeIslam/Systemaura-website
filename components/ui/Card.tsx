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
        "relative rounded-2xl border border-hair bg-surface p-6 shadow-soft sm:p-7",
        hover &&
          "transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue/40 hover:shadow-lift",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
