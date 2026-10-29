import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
};

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em]",
        light ? "text-amber-400" : "text-accent",
      )}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl",
          light ? "text-snow" : "text-fg",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-snow/70" : "text-fg-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
