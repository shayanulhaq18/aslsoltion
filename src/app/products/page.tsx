import type { Metadata } from "next";
import { categories, productsByCategory } from "@/data/products";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryTabs } from "@/components/sections/CategoryTabs";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Browse premium halal beef, mutton, poultry, organs, bulk carcass and pet food from ASL Solution.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Premium halal meat, cut to order"
        description="Explore our complete range. Every product can be portioned, trimmed and packed to match your exact requirements."
        image="/images/assorted-cuts.webp"
        breadcrumb={[{ label: "Products" }]}
      />
      <Section>
        <CategoryTabs />
        <div className="mt-16 space-y-24">
          {categories.map((category) => (
            <div key={category.slug} id={category.slug} className="scroll-mt-28">
              <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <SectionHeading title={category.name} description={category.description} />
                <LinkButton
                  href={category.slug === "pet-food" ? "/pet-food" : `/products/${category.slug}`}
                  variant="ghost"
                  icon="arrowRight"
                  className="shrink-0"
                >
                  View {category.short}
                </LinkButton>
              </div>
              <ProductGrid products={productsByCategory(category.slug)} />
            </div>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
