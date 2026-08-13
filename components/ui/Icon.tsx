import type { SVGProps } from "react";

/* ============================================================================
   Icon — a small set of hand-drawn, stroke-based line icons.
   Kept inline (no icon-library dependency) so they're crisp at any size and
   inherit `currentColor`. Add new icons to the `paths` map below.
   ============================================================================ */

export type IconName =
  | "system"
  | "automation"
  | "app"
  | "website"
  | "clock"
  | "funnel"
  | "eye-off"
  | "scale"
  | "cash"
  | "glass"
  | "cabinet"
  | "construction"
  | "trades"
  | "shopfitting"
  | "gauge"
  | "integration"
  | "growth"
  | "support"
  | "check"
  | "arrow-right"
  | "arrow-up-right"
  | "menu"
  | "x"
  | "quote"
  | "star"
  | "mail"
  | "phone"
  | "building"
  | "play"
  | "grid"
  | "briefcase"
  | "inbox"
  | "file"
  | "calendar"
  | "users"
  | "receipt"
  | "settings"
  | "bell";

const paths: Record<IconName, React.ReactNode> = {
  system: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>
  ),
  automation: <path d="M13 3 4 14h7l-1 7 9-11h-7z" />,
  app: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 9v11" />
    </>
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  funnel: <path d="M3 5h18l-7 8v6l-4 2v-8z" />,
  "eye-off": (
    <>
      <path d="M3 3l18 18" />
      <path d="M10.6 6.1A8.8 8.8 0 0 1 12 6c5 0 9 6 9 6a17 17 0 0 1-2.2 2.6M6.2 6.2A16.5 16.5 0 0 0 3 12s4 6 9 6c1.2 0 2.3-.2 3.3-.6" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </>
  ),
  scale: (
    <>
      <path d="M3 21h18" />
      <rect x="5" y="12" width="3" height="6" />
      <rect x="10.5" y="8" width="3" height="10" />
      <rect x="16" y="4" width="3" height="14" />
    </>
  ),
  cash: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9.5h.01M18 14.5h.01" />
    </>
  ),
  glass: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M4 12h16M12 3v18" />
    </>
  ),
  cabinet: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M4 9h16M4 15h16M10 6h4M10 12h4M10 18h4" />
    </>
  ),
  construction: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V5l8-3v19M13 21V8l6 2v11" />
      <path d="M8 7h2M8 11h2M8 15h2" />
    </>
  ),
  trades: (
    <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.5 2.5-2.5-.7-.7-2.5z" />
  ),
  shopfitting: (
    <>
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
      <path d="M3 9h18" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 19a8 8 0 1 1 16 0" />
      <path d="M12 14l4-4" />
      <circle cx="12" cy="14" r="1.2" />
    </>
  ),
  integration: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h4a2 2 0 0 1 2 2v7" />
    </>
  ),
  growth: (
    <>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 8h4v4" />
    </>
  ),
  support: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19a4 4 0 0 1-4 3h-2" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17L17 7M9 7h8v8" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  quote: (
    <>
      <path d="M10 11H6.5a.5.5 0 0 1-.5-.5V7.5A1.5 1.5 0 0 1 7.5 6H10a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4" />
      <path d="M21 11h-3.5a.5.5 0 0 1-.5-.5V7.5A1.5 1.5 0 0 1 18.5 6H21a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4" />
    </>
  ),
  star: (
    <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      <path d="M10 21v-3h4v3" />
    </>
  ),
  play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none" />,
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  inbox: (
    <>
      <path d="M4 13l2-8h12l2 8v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M4 13h4l1 2h6l1-2h4" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.4a3 3 0 0 1 0 5.6M17.5 20a5.5 5.5 0 0 0-2.2-4.1" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 2h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 22h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
      <path d="M10.5 20a1.5 1.5 0 0 0 3 0" />
    </>
  ),
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
