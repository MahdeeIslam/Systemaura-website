import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/* A rounded, tinted badge that holds a line icon. Used in feature/problem
   cards and the outcome strip for a consistent look. */

const tones = {
  copper: "bg-copper/10 text-copper ring-1 ring-inset ring-copper/20",
  electric: "bg-electric/10 text-electric ring-1 ring-inset ring-electric/25",
} as const;

const sizes = {
  md: "h-12 w-12 rounded-xl",
  lg: "h-14 w-14 rounded-2xl",
} as const;

export function IconBadge({
  name,
  tone = "copper",
  size = "md",
  className,
}: {
  name: IconName;
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        tones[tone],
        sizes[size],
        className,
      )}
    >
      <Icon name={name} size={size === "lg" ? 26 : 22} />
    </span>
  );
}
