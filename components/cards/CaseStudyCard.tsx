import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/lib/content";

/* Problem → Solution → Result card, shared by the homepage feature and the
   /case-studies grid. */

type Phase = "problem" | "solution" | "result";

const phaseConfig: Record<
  Phase,
  { label: string; icon: IconName; wrap: string; label_: string; marker: string }
> = {
  problem: {
    label: "Problem",
    icon: "eye-off",
    wrap: "border-copper/25 bg-copper/[0.06]",
    label_: "text-copper",
    marker: "bg-copper",
  },
  solution: {
    label: "Solution",
    icon: "system",
    wrap: "border-line bg-ink",
    label_: "text-slate-soft",
    marker: "bg-slate-soft",
  },
  result: {
    label: "Result",
    icon: "check",
    wrap: "border-electric/30 bg-electric/[0.07]",
    label_: "text-electric",
    marker: "bg-electric",
  },
};

function PhaseBlock({ phase, items }: { phase: Phase; items: string[] }) {
  const c = phaseConfig[phase];
  return (
    <div className={cn("rounded-xl border p-5", c.wrap)}>
      <div className={cn("flex items-center gap-2 text-sm font-semibold", c.label_)}>
        <Icon name={c.icon} size={16} />
        {c.label}
      </div>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-paper/90">
            <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", c.marker)} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CaseStudyCard({
  study,
  featured = false,
}: {
  study: CaseStudy;
  featured?: boolean;
}) {
  return (
    <Card className={cn("h-full", featured && "sm:p-8 lg:p-10")}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 text-electric ring-1 ring-inset ring-electric/25">
          <Icon name="building" size={20} />
        </span>
        <h3 className="font-display text-lg font-semibold sm:text-xl">
          {study.industry}
        </h3>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <PhaseBlock phase="problem" items={study.problem} />
        <PhaseBlock phase="solution" items={study.solution} />
        <PhaseBlock phase="result" items={study.result} />
      </div>
    </Card>
  );
}
