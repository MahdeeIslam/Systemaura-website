import { cn } from "@/lib/cn";

/* ============================================================================
   Logo — the SystemAura mark.
   - LogoMark: the standalone "S" monogram badge (electric + copper, two-tone
     diagonal split) with small node accents echoing the connected-systems
     motif. Inline SVG so it stays crisp at any size.
   - Logo: the mark plus the SYSTEMAURA wordmark and SOLUTIONS tagline.
   ============================================================================ */

export function LogoMark({
  size = 44,
  className,
  idSuffix = "",
}: {
  size?: number;
  className?: string;
  /** Unique suffix to keep gradient ids distinct when several marks render. */
  idSuffix?: string;
}) {
  const gradId = `sa-s-grad${idSuffix}`;
  const borderId = `sa-s-border${idSuffix}`;
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
        {/* Hard diagonal split: electric (top-left) → copper (bottom-right) */}
        <linearGradient id={gradId} x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#B87333" />
          <stop offset="100%" stopColor="#B87333" />
        </linearGradient>
        <linearGradient id={borderId} x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#B87333" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Badge */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#1A1A1A" />
      <rect
        x="2.75"
        y="2.75"
        width="42.5"
        height="42.5"
        rx="11.25"
        stroke={`url(#${borderId})`}
        strokeWidth="1.5"
      />

      {/* Interlocking S spine, two-tone */}
      <path
        d="M32 16 C32 13 28 11 23 12 C16 13.5 15 19 22 22 C29 25 28 30.5 21 32 C16 33 13 31 13 28"
        stroke={`url(#${gradId})`}
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Node accents at the S endpoints — the "connected" cue */}
      <circle cx="32" cy="16" r="2.6" fill="#2563EB" />
      <circle cx="13" cy="28" r="2.6" fill="#B87333" />
    </svg>
  );
}

export function Logo({
  className,
  markSize = 44,
  showWordmark = true,
  idSuffix = "",
}: {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
  idSuffix?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark size={markSize} idSuffix={idSuffix} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-paper">
            SYSTEMAURA
          </span>
          <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.34em] text-slate-soft">
            Solutions
          </span>
        </span>
      )}
    </span>
  );
}
