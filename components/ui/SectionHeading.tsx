import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";

/* ============================================================================
   SectionHeading — eyebrow + heading + optional intro, used at the top of
   nearly every section so spacing and type scale stay consistent.
   Pass JSX into `title` to colour a single accent word, e.g.
   title={<>We build <span className="text-electric">better businesses</span></>}
   ============================================================================ */

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /** Heading level — defaults to h2; use h1 only for the page's main heading. */
  as?: "h1" | "h2";
  className?: string;
  /** Colour tone of the surrounding section, so muted text stays readable. */
  tone?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Tag = "h2",
  className,
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "max-w-3xl text-balance font-semibold leading-[1.08]",
          Tag === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-[2.75rem]",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-slate-soft" : "text-slate",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
