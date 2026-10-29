import { cn } from "@/lib/cn";
import type { Feature } from "@/data/content";
import { Icon } from "./Icon";

type FeatureCardProps = Feature & {
  variant?: "light" | "dark" | "plain";
  index?: number;
  className?: string;
};

export function IconBadge({ icon, dark }: { icon: Feature["icon"]; dark?: boolean }) {
  return (
    <span
      className={cn(
        "grid size-12 shrink-0 place-items-center rounded-2xl transition-colors duration-300",
        dark
          ? "bg-amber-500/15 text-amber-400 group-hover:bg-amber-500 group-hover:text-ink"
          : "bg-brand text-amber-400 group-hover:bg-amber-500 group-hover:text-ink",
      )}
    >
      <Icon name={icon} size={22} />
    </span>
  );
}

export function FeatureCard({ icon, title, text, variant = "light", index, className }: FeatureCardProps) {
  const dark = variant === "dark";
  return (
    <div
      className={cn(
        "group relative h-full rounded-3xl p-7 transition-all duration-300",
        variant === "light" && "border border-line bg-surface hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5",
        dark && "border border-snow/10 bg-navy-800/50 hover:border-amber-500/40 hover:bg-navy-800",
        variant === "plain" && "p-0",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <IconBadge icon={icon} dark={dark} />
        {index !== undefined && (
          <span className={cn("font-display text-4xl font-semibold", dark ? "text-snow/10" : "text-fg/10")}>
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className={cn("mt-6 text-lg font-bold", dark ? "text-snow" : "text-fg")}>{title}</h3>
      <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-snow/65" : "text-fg-muted")}>{text}</p>
    </div>
  );
}
