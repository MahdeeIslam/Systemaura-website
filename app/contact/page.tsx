import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Free Operational Audit",
  description:
    "Book a free, no-obligation Operational Audit. We'll map where your business is losing time and money and give you practical, tailored recommendations.",
};

const EXPECT = [
  "A relaxed conversation about how your business runs day to day",
  "We pinpoint your biggest time and money leaks",
  "You walk away with practical, tailored recommendations",
  "No pressure, no obligation, and absolutely no jargon",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Your Free Audit"
        title={
          <>
            Let&rsquo;s find where your business is{" "}
            <span className="text-electric">losing time and money</span>
          </>
        }
        intro="Tell us a little about your business and we'll be in touch within one business day to book your free Operational Audit."
      />

      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Reassurance */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold">
              What happens next
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {EXPECT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-inset ring-electric/25">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                Prefer to reach out directly?
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-2.5">
                  <Icon name="mail" size={16} className="text-copper" />
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-paper/90 transition-colors hover:text-electric"
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-slate-soft">
                  <Icon name="building" size={16} className="text-copper" />
                  Based in {COMPANY.location}, working with businesses Australia-wide
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-ink-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
