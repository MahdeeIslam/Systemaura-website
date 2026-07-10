import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/content";

/* Homepage section 11 — Testimonials (light section for rhythm + credibility).
   TODO: replace quotes, names and the logo placeholders with real client
   testimonials. The dashed card is a ready slot for a future video testimonial. */
export function Testimonials() {
  return (
    <Section tone="paper">
      <SectionHeading
        tone="light"
        eyebrow="What Clients Say"
        title="Trusted by business owners"
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.company} delay={i * 80}>
            <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-[0_10px_40px_-24px_rgba(17,17,17,0.4)]">
              <Icon name="quote" size={28} className="text-copper" />
              <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-ink/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                {/* TODO: replace with the client's real logo */}
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink/5 text-ink/40">
                  <Icon name="building" size={20} />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-ink">{t.name}</span>
                  <span className="text-xs text-slate">{t.company}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Future video testimonial slot */}
      <Reveal className="mt-5">
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-ink/15 bg-ink/[0.015] px-6 py-12 text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-inset ring-electric/25">
            <Icon name="arrow-right" size={24} />
          </span>
          <p className="font-display text-lg font-semibold text-ink">
            Video stories, coming soon
          </p>
          <p className="max-w-md text-sm text-slate">
            A space for our clients to share, in their own words, how the right
            systems changed the way they work.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
