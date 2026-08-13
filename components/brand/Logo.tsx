import { cn } from "@/lib/cn";

/* ============================================================================
   Logo — the SystemAura mark for the light UI.
   - LogoMark: the two-tone interlocking "S" (blue + copper) with node accents.
     Badge-less so it sits cleanly on the light canvas at any size.
   - Logo: the mark plus the SystemAura wordmark and SOLUTIONS tagline.
     tone="dark" switches the wordmark to white for use on navy sections.
   ============================================================================ */

export function LogoMark({
  size = 40,
  className,
  idSuffix = "",
}: {
  size?: number;
  className?: string;
  idSuffix?: string;
}) {
  const gradId = `sa-s${idSuffix}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Hard diagonal split: SystemAura blue (top-left) → copper (bottom-right) */}
        <linearGradient
          id={gradId}
          x1="8"
          y1="8"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="52%" stopColor="#2563EB" />
          <stop offset="52%" stopColor="#B87333" />
          <stop offset="100%" stopColor="#B87333" />
        </linearGradient>
      </defs>
      <path
        d="M32 15 C32 12 28 10 23 11 C15.5 12.5 14.5 18.5 22 21.5 C29.5 24.5 28.5 30.5 21 32 C16 33 12.5 31 12.5 27.5"
        stroke={`url(#${gradId})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="15" r="3" fill="#2563EB" />
      <circle cx="12.5" cy="27.5" r="3" fill="#B87333" />
    </svg>
  );
}

export function Logo({
  className,
  markSize = 40,
  showWordmark = true,
  idSuffix = "",
  tone = "light",
}: {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
  idSuffix?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={markSize} idSuffix={idSuffix} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight",
              tone === "dark" ? "text-white" : "text-navy",
            )}
          >
            SystemAura
          </span>
          <span
            className={cn(
              "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.32em]",
              tone === "dark" ? "text-white/55" : "text-slate",
            )}
          >
            Solutions
          </span>
        </span>
      )}
    </span>
  );
}
