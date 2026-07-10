import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { NAV, INDUSTRIES, COMPANY } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-soft">
      {/* Final CTA line */}
      <div className="container-x flex flex-col items-start justify-between gap-6 border-b border-line py-12 md:flex-row md:items-center">
        <p className="max-w-xl font-display text-2xl font-semibold leading-tight sm:text-3xl">
          Find out where your business is losing time and money.
        </p>
        <Button href="/contact" size="lg" withArrow>
          {COMPANY.primaryCta}
        </Button>
      </div>

      {/* Link columns */}
      <div className="container-x grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Logo markSize={40} />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-soft">
            We build the systems, automations and websites that help
            operations-heavy businesses save time and grow.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-soft">
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-paper/80 transition-colors hover:text-electric"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-sm text-paper/80 transition-colors hover:text-electric"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Industries">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-soft">
            Industries
          </h2>
          <ul className="mt-4 space-y-3">
            {INDUSTRIES.map((ind) => (
              <li key={ind.slug}>
                <Link
                  href={ind.hasPage ? `/industries/${ind.slug}` : "/industries"}
                  className="text-sm text-paper/80 transition-colors hover:text-electric"
                >
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-soft">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li className="flex items-center gap-2">
              <Icon name="mail" size={16} className="text-copper" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-electric"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" size={16} className="text-copper" />
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-electric"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-slate-soft">
              <Icon name="building" size={16} className="text-copper" />
              Based in {COMPANY.location}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-soft sm:flex-row">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>Systems that drive growth.</p>
        </div>
      </div>
    </footer>
  );
}
