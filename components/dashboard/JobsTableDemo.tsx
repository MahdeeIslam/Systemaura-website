import { cn } from "@/lib/cn";

/* Illustrative "Jobs" table shown in the What-We-Do section. Example data only,
   labelled Demo so it is never read as a real client record. */

const TABS = ["All Jobs", "In Progress", "On Hold", "Completed"];

const ROWS = [
  { job: "JOB-1042", client: "Dev Glass", stage: "Production", due: "Today", value: "$4,850" },
  { job: "JOB-1041", client: "ABC Builders", stage: "Install", due: "Tomorrow", value: "$7,260" },
  { job: "JOB-1040", client: "Dev Glass", stage: "Quote", due: "2 Jul", value: "$2,300" },
  { job: "JOB-1039", client: "Smith Joinery", stage: "Production", due: "3 Jul", value: "$5,600" },
  { job: "JOB-1038", client: "XYZ Constructions", stage: "Install", due: "4 Jul", value: "$3,200" },
];

const stageStyle: Record<string, string> = {
  Production: "bg-blue/10 text-blue",
  Install: "bg-copper/10 text-copper",
  Quote: "bg-mist text-slate",
};

export function JobsTableDemo() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-hair-cool bg-surface shadow-soft">
      <span className="absolute right-3 top-3 z-10 rounded-full bg-navy/90 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white">
        Demo
      </span>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-base font-bold text-navy">Jobs</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {TABS.map((t, i) => (
            <span
              key={t}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-medium",
                i === 0 ? "bg-blue text-white" : "bg-canvas text-slate",
              )}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[26rem] text-left text-sm">
            <thead>
              <tr className="text-xs font-medium uppercase tracking-wide text-slate">
                <th className="pb-2 pr-2 font-medium">Job #</th>
                <th className="pb-2 pr-2 font-medium">Client</th>
                <th className="pb-2 pr-2 font-medium">Stage</th>
                <th className="pb-2 pr-2 font-medium">Due</th>
                <th className="pb-2 text-right font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.job} className="border-t border-hair-cool">
                  <td className="py-2.5 pr-2 font-semibold text-navy">{r.job}</td>
                  <td className="py-2.5 pr-2 text-slate">{r.client}</td>
                  <td className="py-2.5 pr-2">
                    <span
                      className={cn(
                        "inline-block rounded-md px-2 py-0.5 text-xs font-medium",
                        stageStyle[r.stage],
                      )}
                    >
                      {r.stage}
                    </span>
                  </td>
                  <td className="py-2.5 pr-2 text-slate">{r.due}</td>
                  <td className="py-2.5 text-right font-semibold text-navy">
                    {r.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
