import { Icon } from "@/components/ui/Icon";
import { OUTCOMES } from "@/lib/content";

/* Homepage section 10 — Outcome strip (a quiet reinforcement band). */
export function OutcomeStrip() {
  return (
    <section className="border-y border-line bg-ink-soft py-12">
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          {OUTCOMES.map((o) => (
            <li
              key={o.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink text-copper">
                <Icon name={o.icon} size={22} />
              </span>
              <span className="text-sm font-semibold tracking-tight text-paper">
                {o.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
