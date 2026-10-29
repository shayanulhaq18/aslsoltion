import Image from "next/image";
import type { Product } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

export function ProductCard({ product }: { product: Product }) {
  const { name, localName, image, description, tags } = product;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-subtle">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {tags && (
          <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-page/90 px-3 py-1 text-[0.7rem] font-bold text-fg backdrop-blur">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-fg">{name}</h3>
        {localName && <p className="text-sm font-semibold text-accent">{localName}</p>}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{description}</p>
        <a
          href={whatsappLink(`Hi ASL Solution, I'd like a quote for: ${name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-between rounded-full border border-line py-2.5 pl-5 pr-2.5 text-sm font-semibold text-fg transition-colors duration-300 hover:border-navy-800 hover:bg-navy-800 hover:text-snow"
        >
          Request a Quote
          <span className="grid size-8 place-items-center rounded-full bg-amber-500 text-ink">
            <Icon name="arrowRight" size={16} />
          </span>
        </a>
      </div>
    </article>
  );
}
