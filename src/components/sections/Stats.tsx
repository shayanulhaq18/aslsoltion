import { stats } from "@/data/content";
import { cn } from "@/lib/cn";

export function Stats({ className }: { className?: string }) {
  return (
    <dl className={cn("grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-snow/10 lg:grid-cols-4", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="bg-navy-900 px-6 py-8 text-center">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-4xl font-semibold text-amber-400 sm:text-5xl">{stat.value}</dd>
          <dd className="mt-2 text-xs font-semibold uppercase tracking-wider text-snow/60 sm:text-sm">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
