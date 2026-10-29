import Link from "next/link";
import { categories } from "@/data/products";
import { cn } from "@/lib/cn";

export function CategoryTabs({ active }: { active?: string }) {
  const tabs = [
    { label: "All Products", href: "/products", slug: undefined },
    ...categories
      .filter((c) => c.slug !== "pet-food")
      .map((c) => ({ label: c.short, href: `/products/${c.slug}`, slug: c.slug })),
    { label: "Pet Food", href: "/pet-food", slug: "pet-food" },
  ];
  return (
    <nav aria-label="Product categories" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {tabs.map((tab) => {
          const isActive = tab.slug === active;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "block whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                  isActive ? "bg-brand text-snow" : "bg-surface text-fg/75 ring-1 ring-line hover:ring-fg/30",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
