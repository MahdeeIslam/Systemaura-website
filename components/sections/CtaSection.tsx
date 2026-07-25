import { Button } from "@/components/ui/Button";
import { NodeNetwork } from "@/components/brand/NodeNetwork";

/* Reusable closing CTA band for secondary pages. Defaults to the audit offer. */
export function CtaSection({
  heading = "Ready to see where your time and money are going?",
  sub = "Book a free Operational Audit. We'll show you exactly where your business is losing time and money, and give you practical, tailored recommendations — no obligation.",
  buttonLabel = "Book a Free Operational Audit",
  href = "/contact",
}: {
  heading?: string;
  sub?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0c1730] to-ink py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <NodeNetwork
          variant="quiet"
          className="absolute inset-0 h-full w-full opacity-60"
        />
        <div className="glow-electric absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 opacity-80" />
      </div>
      <div className="container-x relative flex flex-col items-center text-center">
        <h2 className="max-w-3xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-soft">
          {sub}
        </p>
        <div className="mt-8">
          <Button href={href} size="lg" withArrow>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
