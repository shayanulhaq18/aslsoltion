"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-line bg-page/90 shadow-sm backdrop-blur-lg" : "border-transparent bg-page",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive(item.href) ? "text-accent" : "text-fg/80 hover:text-accent",
                  )}
                >
                  {item.label}
                  {item.children && <Icon name="chevronDown" size={14} className="transition-transform group-hover:rotate-180" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="rounded-2xl border border-line bg-surface p-2 shadow-xl shadow-navy-900/10">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-fg/80 transition-colors hover:bg-subtle hover:text-fg"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LinkButton href="/contact" size="sm" icon="arrowRight" className="max-sm:hidden">
            Get a Quote
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full bg-brand text-snow lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
        className={cn(
          "fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-page transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <Container className="py-6">
          <ul className="divide-y divide-line">
            {navItems.map((item) => (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  className={cn(
                    "block py-3 font-display text-2xl font-semibold",
                    isActive(item.href) ? "text-accent" : "text-fg",
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-3 grid grid-cols-2 gap-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block rounded-xl bg-subtle px-3 py-2.5 text-sm font-medium text-fg">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <LinkButton href="/contact" icon="arrowRight" className="w-full">
              Get a Quote
            </LinkButton>
            <LinkButton href={site.phoneHref} variant="outline" iconLeft="phone" className="w-full">
              {site.phone}
            </LinkButton>
          </div>
        </Container>
      </div>
    </header>
  );
}
