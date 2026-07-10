import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NodeNetwork } from "@/components/brand/NodeNetwork";

/* Homepage section 1 — Hero (above the fold). */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* Ambient background: faint circuit grid + glows + full-bleed motif */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="circuit-grid absolute inset-0 opacity-40" />
        <div className="glow-electric absolute -left-20 top-0 h-[28rem] w-[28rem]" />
        <div className="glow-copper absolute -right-10 top-40 h-80 w-80" />
        {/* Faint motif behind everything on small screens */}
        <NodeNetwork
          variant="quiet"
          className="absolute inset-0 h-full w-full lg:hidden"
        />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <div className="animate-rise" style={{ animationDelay: "0ms" }}>
            <Eyebrow>Systems That Drive Growth</Eyebrow>
          </div>

          <h1
            className="animate-rise mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            We Fix Operational Bottlenecks That Prevent Businesses{" "}
            <span className="text-electric">From Scaling</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-slate-soft"
            style={{ animationDelay: "160ms" }}
          >
            Custom systems, automations, apps, and websites that save time,
            reduce manual work, and increase profitability.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/contact" size="lg" withArrow>
              Book a Free Operational Audit
            </Button>
            <Button href="/case-studies" size="lg" variant="secondary">
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Signature visual (desktop) */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="animate-rise relative" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-square rounded-3xl border border-line bg-ink-card/60 p-2 backdrop-blur-sm">
              <NodeNetwork className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
