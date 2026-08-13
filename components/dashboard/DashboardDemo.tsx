import { Icon, type IconName } from "@/components/ui/Icon";
import { LogoMark } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";

/* ============================================================================
   DashboardDemo — an illustrative product mock shown in the hero.
   Every number here is EXAMPLE data and the panel is clearly labelled "Demo"
   so it is never read as a real client result. One calm live touch only:
   the active "Production" stage gently pulses. Pure CSS, so reduced-motion
   users get a clean static panel.
   ============================================================================ */

const SIDEBAR: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: "grid", label: "Dashboard", active: true },
  { icon: "briefcase", label: "Jobs" },
  { icon: "inbox", label: "Enquiries" },
  { icon: "file", label: "Quotes" },
  { icon: "calendar", label: "Schedule" },
  { icon: "users", label: "Customers" },
  { icon: "receipt", label: "Invoices" },
  { icon: "growth", label: "Reports" },
  { icon: "settings", label: "Settings" },
];

const STATS = [
  { label: "Active Jobs", value: "12", delta: "+8%" },
  { label: "Quotes Awaiting Approval", value: "4" },
  { label: "Outstanding", value: "$32,450", delta: "+12%" },
  { label: "Hours Saved This Month", value: "68" },
];

const PIPELINE = [
  { stage: "Enquiry", count: "12" },
  { stage: "Quote", count: "8" },
  { stage: "Production", count: "6", active: true },
  { stage: "Install", count: "4" },
  { stage: "Complete", count: "9" },
];

const ACTIVITY: {
  icon: IconName;
  label: string;
  meta: string;
  tone: "blue" | "copper" | "green" | "slate";
}[] = [
  { icon: "check", label: "Invoice #1048 paid", meta: "$4,650", tone: "green" },
  { icon: "mail", label: "Customer update sent", meta: "Automated", tone: "blue" },
  { icon: "calendar", label: "Installation scheduled", meta: "Fri, 8:30 AM", tone: "copper" },
  { icon: "check", label: "Quote #1037 approved", meta: "$7,850", tone: "green" },
];

const metaTone: Record<string, string> = {
  blue: "text-blue",
  copper: "text-copper",
  green: "text-emerald-600",
  slate: "text-slate",
};

export function DashboardDemo() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-hair-cool bg-surface shadow-lift">
      {/* Clear demo label */}
      <span className="absolute right-3 top-3 z-10 rounded-full bg-navy/90 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white">
        Demo
      </span>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col border-r border-hair-cool bg-canvas/60 p-3 md:flex">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <LogoMark size={22} idSuffix="-dash" />
            <span className="font-display text-sm font-bold text-navy">
              SystemAura
            </span>
          </div>
          <nav className="mt-4 flex flex-col gap-0.5">
            {SIDEBAR.map((item) => (
              <span
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.8rem] font-medium",
                  item.active
                    ? "bg-blue/10 text-blue"
                    : "text-slate",
                )}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </span>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-node rounded-full bg-emerald-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <h3 className="font-display text-base font-bold text-navy sm:text-lg">
                  Good morning, David
                </h3>
              </div>
              <p className="mt-0.5 text-xs text-slate">
                Here&rsquo;s what&rsquo;s happening in your business today.
              </p>
            </div>
            <span className="hidden shrink-0 items-center gap-1 rounded-lg border border-hair-cool px-2.5 py-1.5 text-xs font-medium text-slate sm:flex">
              This Month
              <Icon name="arrow-right" size={12} className="rotate-90" />
            </span>
          </div>

          {/* Stat cards */}
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-hair-cool bg-surface p-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-lg font-bold text-navy sm:text-xl">
                    {s.value}
                  </span>
                  {s.delta && (
                    <span className="text-[0.7rem] font-semibold text-emerald-600">
                      ↑ {s.delta}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[0.7rem] leading-tight text-slate">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Job progress pipeline */}
          <div className="mt-3 rounded-xl border border-hair-cool bg-canvas/50 p-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-slate">
              Job Progress
            </p>
            <div className="mt-2.5 flex items-center justify-between">
              {PIPELINE.map((p, i) => (
                <div key={p.stage} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold",
                        p.active
                          ? "animate-pulse-node bg-blue text-white ring-4 ring-blue/15"
                          : "bg-surface text-navy ring-1 ring-hair-cool",
                      )}
                    >
                      {p.count}
                    </span>
                    <span
                      className={cn(
                        "text-[0.6rem] font-medium",
                        p.active ? "text-blue" : "text-slate",
                      )}
                    >
                      {p.stage}
                    </span>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <span className="mx-1 h-px flex-1 bg-hair-cool" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: activity + revenue */}
          <div className="mt-3 grid gap-2.5 lg:grid-cols-2">
            <div className="rounded-xl border border-hair-cool bg-surface p-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-slate">
                Recent Activity
              </p>
              <ul className="mt-2 space-y-2">
                {ACTIVITY.map((a) => (
                  <li key={a.label} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-canvas text-slate">
                      <Icon name={a.icon} size={13} />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[0.72rem] text-navy">
                      {a.label}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 text-[0.7rem] font-semibold",
                        metaTone[a.tone],
                      )}
                    >
                      {a.meta}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-hair-cool bg-surface p-3">
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-slate">
                  Revenue Overview
                </p>
                <span className="text-[0.7rem] font-semibold text-emerald-600">
                  ↑ 12%
                </span>
              </div>
              <RevenueChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small illustrative line + bars chart (example data). */
function RevenueChart() {
  const bars = [26, 34, 30, 46, 58, 78];
  const points = [
    [8, 66],
    [48, 58],
    [88, 60],
    [128, 44],
    [168, 32],
    [208, 16],
  ];
  const line = points.map((p) => p.join(",")).join(" ");
  return (
    <svg viewBox="0 0 220 82" className="mt-2 h-16 w-full" fill="none">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={8 + i * 40}
          y={78 - h}
          width="12"
          height={h}
          rx="2"
          className="fill-blue/12"
        />
      ))}
      <polyline
        points={line}
        className="stroke-blue"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" className="fill-blue" />
      ))}
    </svg>
  );
}
