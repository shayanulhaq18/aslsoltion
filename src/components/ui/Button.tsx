import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "dark" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-amber-500 text-ink hover:bg-amber-400 shadow-[0_8px_24px_-10px_rgba(230,161,42,0.7)]",
  dark: "bg-navy-800 text-snow hover:bg-navy-700",
  outline: "border border-fg/20 text-fg hover:border-brand hover:bg-brand hover:text-snow",
  outlineLight: "border border-snow/30 text-snow hover:border-snow hover:bg-snow hover:text-ink",
  ghost: "text-fg hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export const buttonClasses = (variant: Variant = "primary", size: Size = "md", className?: string) =>
  cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 disabled:opacity-60",
    variant === "ghost" ? "h-auto px-0" : sizes[size],
    variants[variant],
    className,
  );

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconLeft?: IconName;
  className?: string;
  children: ReactNode;
};

function Content({ icon, iconLeft, children }: Pick<BaseProps, "icon" | "iconLeft" | "children">) {
  return (
    <>
      {iconLeft && <Icon name={iconLeft} size={18} />}
      {children}
      {icon && <Icon name={icon} size={18} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
}

type LinkButtonProps = BaseProps & Omit<ComponentProps<typeof Link>, "className" | "children">;

export function LinkButton({ variant, size, icon, iconLeft, className, children, ...rest }: LinkButtonProps) {
  const external = typeof rest.href === "string" && rest.href.startsWith("http");
  return (
    <Link
      className={buttonClasses(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      <Content icon={icon} iconLeft={iconLeft}>{children}</Content>
    </Link>
  );
}

type ButtonProps = BaseProps & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({ variant, size, icon, iconLeft, className, children, ...rest }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      <Content icon={icon} iconLeft={iconLeft}>{children}</Content>
    </button>
  );
}
