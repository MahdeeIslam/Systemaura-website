"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/* A slim sticky prompt that slides up once the visitor has scrolled in, and
   tucks away again near the footer so it never covers it. Dismissible. */
export function StickyCta() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        y + window.innerHeight > document.body.scrollHeight - 240;
      setShow(y > 600 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-out motion-reduce:transition-none",
        show ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!show}
    >
      <div className="container-x pb-3">
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-navy to-[#15233f] px-4 py-3 shadow-lift ring-1 ring-white/10 sm:px-5">
          <div className="min-w-0">
            <p className="font-display text-sm font-bold text-white sm:text-base">
              Let&rsquo;s make your operations better.
            </p>
            <p className="hidden text-xs text-white/60 sm:block">
              Less manual work. More time. More profits.
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <Link
              href="/contact"
              className="group/btn inline-flex items-center gap-2 rounded-xl bg-copper px-4 py-2.5 text-sm font-semibold text-white transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-copper-light active:scale-[0.98]"
            >
              Book Free Audit
              <Icon
                name="arrow-right"
                size={16}
                className="transition-transform duration-200 group-hover/btn:translate-x-1"
              />
            </Link>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon name="x" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
