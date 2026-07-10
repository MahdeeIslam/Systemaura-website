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
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none tracking-tight transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-electric text-white shadow-[0_10px_34px_-12px_rgba(37,99,235,0.75)] hover:bg-electric-soft hover:shadow-[0_16px_44px_-12px_rgba(37,99,235,0.9)]",
  secondary:
    "border border-line bg-transparent text-paper hover:border-electric hover:text-white",
  ghost: "text-slate-soft hover:text-paper",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
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
