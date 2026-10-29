import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/products";
import { Icon } from "@/components/ui/Icon";

export function CategoryCard({ category, count }: { category: Category; count?: number }) {
  const href = category.slug === "pet-food" ? "/pet-food" : `/products/${category.slug}`;
  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-navy-900 p-6 text-snow sm:aspect-[3/4]"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
      <div className="relative">
        {count !== undefined && (
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">{count} products</span>
        )}
        <h3 className="mt-2 font-display text-2xl font-semibold">{category.name}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-snow/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 max-lg:max-h-24 max-lg:opacity-100">
          {category.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
          Explore range
          <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
