import Link from "next/link";
import { cn } from "@/lib/cn";

// Emblem: a shield-shaped seal with an "A" monogram whose crossbar is a butcher's cleaver blade.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 2.5 42 9v14.5c0 10.6-7.6 19.4-18 22-10.4-2.6-18-11.4-18-22V9l18-6.5Z" fill="#12294d" />
      <path d="M24 5.8 39 11.2v12.3c0 9-6.3 16.6-15 19-8.7-2.4-15-10-15-19V11.2l15-5.4Z" fill="none" stroke="#e6a12a" strokeWidth="1.2" />
      <path d="M15.5 34 24 13l8.5 21" fill="none" stroke="#f6f8fc" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 26.5h15.8a2.2 2.2 0 0 1-2.2 2.6H18.6l-1.1-2.6Z" fill="#f2bc4f" />
      <circle cx="31.2" cy="27.8" r=".7" fill="#12294d" />
    </svg>
  );
}

export function Logo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="ASL Solution home" className={cn("flex items-center gap-3", className)}>
      <LogoMark className="size-11 shrink-0" />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className={cn("font-display text-[1.45rem] font-semibold tracking-tight", light ? "text-snow" : "text-fg")}>
          ASL<span className="text-amber-500"> Solution</span>
        </span>
        <span className={cn("mt-1 text-[0.6rem] font-bold uppercase tracking-[0.3em]", light ? "text-snow/60" : "text-fg-muted")}>
          Premium Halal Meats
        </span>
      </span>
    </Link>
  );
}
