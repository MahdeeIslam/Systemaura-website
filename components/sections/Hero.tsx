import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DashboardDemo } from "@/components/dashboard/DashboardDemo";

/* Homepage section 1 — Hero (light) with the illustrative demo dashboard. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      {/* Very light supporting background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="circuit-grid absolute right-0 top-0 h-96 w-96 opacity-60" />
        <div className="glow-blue absolute -left-24 top-10 h-96 w-96" />
        <div className="glow-copper absolute right-10 top-64 h-72 w-72 opacity-70" />
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Copy */}
        <div>
          <div className="animate-rise" style={{ animationDelay: "0ms" }}>
            <Eyebrow>Systems That Drive Growth</Eyebrow>
          </div>

          <h1
            className="animate-rise mt-5 max-w-xl text-balance font-display text-4xl font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "70ms" }}
          >
            Better operations, less manual work,{" "}
            <span className="text-copper">more profits.</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-lg text-lg leading-relaxed text-slate"
            style={{ animationDelay: "140ms" }}
          >
            We build custom systems and automations that replace manual work,
            save time and help your business make more money.
          </p>

          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "210ms" }}
          >
            <Button href="/contact" size="lg" withArrow>
              Book Free Operational Audit
            </Button>
            <Button href="#how-it-works" size="lg" variant="secondary">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Demo dashboard */}
        <div
          className="animate-rise lg:pl-2"
          style={{ animationDelay: "160ms" }}
        >
          <DashboardDemo />
        </div>
      </div>
    </section>
  );
}
