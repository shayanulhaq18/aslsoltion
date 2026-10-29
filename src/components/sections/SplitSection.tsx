import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Section, type Tone } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SplitSectionProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  imageAlt: string;
  /** Optional second image shown overlapping the first. */
  accentImage?: string;
  badge?: { value: string; label: string };
  reverse?: boolean;
  tone?: Tone;
  id?: string;
  children?: ReactNode;
};

// Image + text two-column block, reused for About, Pet Food, Export and similar sections.
export function SplitSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  accentImage,
  badge,
  reverse,
  tone,
  id,
  children,
}: SplitSectionProps) {
  const light = tone === "dark";
  return (
    <Section tone={tone} id={id}>
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className={cn("relative", reverse && "lg:order-2", accentImage && "pb-16 sm:pb-20")}>
          <div className={cn("relative aspect-[4/3] overflow-hidden rounded-[2rem]", accentImage && "w-[85%]")}>
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          {accentImage && (
            <div className="absolute bottom-0 right-0 aspect-square w-[45%] overflow-hidden rounded-[1.5rem] border-8 border-surface shadow-2xl">
              <Image src={accentImage} alt="" fill sizes="25vw" className="object-cover" />
            </div>
          )}
          {badge && (
            <div className={cn("absolute rounded-2xl bg-amber-500 p-5 text-ink shadow-xl", accentImage ? "left-4 top-4 sm:-left-4 sm:top-8" : "-bottom-6 right-6")}>
              <p className="font-display text-3xl font-semibold leading-none sm:text-4xl">{badge.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider">{badge.label}</p>
            </div>
          )}
        </div>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} light={light} />
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </Section>
  );
}
