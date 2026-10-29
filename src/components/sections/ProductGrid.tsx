import type { Product } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={`${product.category}-${product.name}`} product={product} />
      ))}
    </div>
  );
}
