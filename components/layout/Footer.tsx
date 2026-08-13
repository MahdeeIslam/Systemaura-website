import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { NAV, INDUSTRIES, COMPANY } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Link columns */}
      <div className="container-x grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Logo markSize={40} tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            We build the systems, automations and websites that help
            operations-heavy businesses cut manual work and run smoother.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-copper-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Industries">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Industries
          </h2>
          <ul className="mt-4 space-y-3">
            {INDUSTRIES.map((ind) => (
              <li key={ind.slug}>
                <Link
                  href={ind.hasPage ? `/industries/${ind.slug}` : "/industries"}
                  className="text-sm text-white/75 transition-colors hover:text-copper-light"
                >
                  {ind.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2.5">
              <Icon name="mail" size={16} className="text-copper-light" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-copper-light"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-white/60">
              <Icon name="building" size={16} className="text-copper-light" />
              Based in {COMPANY.location}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>Better operations, less manual work, more profits.</p>
        </div>
      </div>
    </footer>
  );
}
