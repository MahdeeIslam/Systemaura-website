import { TRUST_LOGOS } from "@/lib/content";

/* Homepage section 2 — Trust bar.
   TODO: replace these text placeholders with real client logos (SVGs). */
export function TrustBar() {
  return (
    <section className="border-y border-line bg-ink-soft py-10">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-soft">
          Trusted by businesses across Melbourne
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {TRUST_LOGOS.map((name) => (
            <span
              key={name}
              className="font-display text-base font-semibold tracking-tight text-slate-soft/70 grayscale transition-colors hover:text-paper sm:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
