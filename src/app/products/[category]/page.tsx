import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory, productsByCategory } from "@/data/products";
import { whyUs } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryTabs } from "@/components/sections/CategoryTabs";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTABanner } from "@/components/sections/CTABanner";

// Pet food has its own division page, so it is not served from here.
const productCategories = categories.filter((c) => c.slug !== "pet-food");

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[category]">): Promise<Metadata> {
  const category = getCategory((await params).category);
  return category ? { title: category.name, description: category.description } : {};
}

export default async function CategoryPage({ params }: PageProps<"/products/[category]">) {
  const { category: slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${category.short} Division`}
        title={category.name}
        description={category.description}
        image={category.image}
        breadcrumb={[{ label: "Products", href: "/products" }, { label: category.short }]}
      >
        <LinkButton href="/contact" icon="arrowRight">
          Request Supply Quote
        </LinkButton>
      </PageHero>
      <Section>
        <CategoryTabs active={category.slug} />
        <div className="mt-12">
          <ProductGrid products={productsByCategory(category.slug)} />
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading align="center" eyebrow="The ASL Standard" title="Why buyers choose our cuts" />
        <FeatureGrid items={whyUs} className="mt-14" />
      </Section>
      <CTABanner />
    </>
  );
}
