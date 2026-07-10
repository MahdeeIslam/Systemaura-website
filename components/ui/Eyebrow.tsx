import { cn } from "@/lib/cn";

/* Small, copper, tracked-out label that sits above section headings.
   Caps are deliberate here (one of the few places they're allowed). */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.22em] text-copper",
        className,
      )}
    >
      {children}
    </span>
  );
}
