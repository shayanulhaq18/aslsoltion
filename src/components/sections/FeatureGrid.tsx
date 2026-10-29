import type { Feature } from "@/data/content";
import { cn } from "@/lib/cn";
import { FeatureCard } from "@/components/ui/FeatureCard";

type FeatureGridProps = {
  items: Feature[];
  variant?: "light" | "dark";
  numbered?: boolean;
  className?: string;
};

export function FeatureGrid({ items, variant = "light", numbered, className }: FeatureGridProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item, i) => (
        <FeatureCard key={item.title} {...item} variant={variant} index={numbered ? i : undefined} />
      ))}
    </div>
  );
}
