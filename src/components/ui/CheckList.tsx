import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export function CheckList({ items, light, className }: { items: string[]; light?: boolean; className?: string }) {
  return (
    <ul className={cn("space-y-3.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-amber-500 text-ink">
            <Icon name="check" size={14} strokeWidth={2.5} />
          </span>
          <span className={cn("leading-relaxed", light ? "text-snow/80" : "text-fg/80")}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
