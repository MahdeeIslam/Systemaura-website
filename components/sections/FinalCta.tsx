import { Button } from "@/components/ui/Button";
import { NodeNetwork } from "@/components/brand/NodeNetwork";

/* Homepage section 12 — Final CTA (full-width, high-contrast band). */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0c1730] to-ink py-24 sm:py-28">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <NodeNetwork
          variant="quiet"
          className="absolute inset-0 h-full w-full opacity-70"
        />
        <div className="glow-electric absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 opacity-90" />
        <div className="circuit-grid absolute inset-0 opacity-30" />
      </div>

      <div className="container-x relative flex flex-col items-center text-center">
        <h2 className="max-w-3xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Discover where your business is losing time and money
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-soft">
          Book a complimentary Operational Efficiency Audit and get practical,
          tailored recommendations for your business — no obligation.
        </p>
        <div className="mt-9">
          <Button href="/contact" size="lg" withArrow>
            Book My Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
