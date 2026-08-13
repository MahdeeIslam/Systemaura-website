import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/* ============================================================================
   Button — the one CTA primitive. Renders an <a> (via next/link) when `href`
   is set, otherwise a native <button>. Buttons should always say what happens.
   ============================================================================ */

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-xl font-semibold leading-none tracking-tight transition-all duration-150 ease-out active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white shadow-[0_6px_20px_-8px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 hover:bg-blue-strong hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.55)] active:translate-y-0",
  secondary:
    "border border-copper/60 bg-surface text-navy hover:-translate-y-0.5 hover:border-copper-light hover:bg-copper/[0.06] active:translate-y-0",
  ghost: "text-slate hover:text-blue",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[0.975rem]",
};

interface SharedProps {
  variant?: Variant;
  size?: Size;
  /** Appends a right arrow that nudges forward on hover. */
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkProps = SharedProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps | "href">;

type NativeProps = SharedProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps>;

export type ButtonProps = LinkProps | NativeProps;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrow-right"
          size={size === "lg" ? 20 : 18}
          className="transition-transform duration-200 group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as LinkProps;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  // Strip a possibly-present `href` before spreading onto <button>.
  const buttonRest = {
    ...rest,
  } as ButtonHTMLAttributes<HTMLButtonElement> & { href?: string };
  delete buttonRest.href;
  return (
    <button className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
