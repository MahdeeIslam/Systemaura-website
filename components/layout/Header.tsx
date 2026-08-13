"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { NAV, COMPANY } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out",
        scrolled || menuOpen
          ? "border-b border-hair bg-canvas/80 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-x flex items-center justify-between transition-all duration-200",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link
          href="/"
          aria-label={`${COMPANY.name} — home`}
          className="rounded-lg"
        >
          <Logo markSize={scrolled ? 34 : 38} />
        </Link>

        {/* Desktop nav with sliding underline */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  active ? "text-blue" : "text-slate hover:text-navy",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-blue transition-all duration-200 ease-out",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href="/contact" size="md" withArrow>
              Book Free Audit
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hair bg-surface text-navy transition-colors hover:border-blue lg:hidden"
          >
            <Icon name={menuOpen ? "x" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-hair bg-canvas lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                isActive(item.href)
                  ? "bg-mist text-blue"
                  : "text-slate hover:bg-mist hover:text-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" size="lg" className="mt-3 w-full">
            {COMPANY.primaryCta}
          </Button>
        </nav>
      </div>
    </header>
  );
}
