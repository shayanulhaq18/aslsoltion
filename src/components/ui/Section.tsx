import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export type Tone = "page" | "subtle" | "surface" | "dark";

const tones: Record<Tone, string> = {
  page: "bg-page text-fg",
  subtle: "bg-subtle text-fg",
  surface: "bg-surface text-fg",
  dark: "bg-navy-900 text-snow",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function Section({ id, tone = "page", className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24 lg:py-28", tones[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
