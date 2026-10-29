import type { Metadata } from "next";
import type { Feature } from "@/data/content";
import { productsByCategory } from "@/data/products";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryTabs } from "@/components/sections/CategoryTabs";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { SplitSection } from "@/components/sections/SplitSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pet Food Division",
  description: "Frozen, preservative-free raw meat for dogs and cats from ASL Solution.",
};

const benefits: Feature[] = [
  { icon: "leaf", title: "100% Natural", text: "No preservatives, fillers or artificial additives, ever." },
  { icon: "snowflake", title: "Frozen Fresh", text: "Flash-frozen right after processing to lock in nutrients." },
  { icon: "heart", title: "Healthier Pets", text: "Supports shiny coats, strong teeth and healthy digestion." },
  { icon: "box", title: "Easy Portions", text: "Packed in convenient blocks for simple daily feeding." },
];

export default function PetFoodPage() {
  return (
    <>
      <PageHero
        eyebrow="Pet Food Division"
        title="Raw, natural nutrition your pets will love"
        description="Frozen, preservative-free meat and bone blends for dogs and cats, made from the same quality cuts we supply to restaurants."
        image="/images/pet-food.webp"
        breadcrumb={[{ label: "Pet Food" }]}
      >
        <LinkButton href="/contact" icon="arrowRight">
          Order Pet Food
        </LinkButton>
      </PageHero>
      <Section>
        <CategoryTabs active="pet-food" />
        <div className="mt-12">
          <ProductGrid products={productsByCategory("pet-food")} />
        </div>
      </Section>
      <SplitSection
        tone="surface"
        eyebrow="Why Raw Feeding"
        title="Real food for dogs & cats"
        description="Our raw blends mirror a natural carnivore diet: lean muscle meat, nutrient-dense organs and raw bone in balanced ratios."
        image="/images/pet-breeder-mix.webp"
        imageAlt="Raw pet food blend in a bowl"
        accentImage="/images/pet-marrow-bones.webp"
      >
        <CheckList
          items={[
            "Frozen and preservative-free",
            "Single-protein options for sensitive pets",
            "Custom batch mixes for breeders and kennels",
            "Hygienically processed and sealed",
            "Bulk supply for pet stores",
            "Delivered frozen to maintain quality",
          ]}
        />
      </SplitSection>
      <Section tone="subtle">
        <SectionHeading align="center" eyebrow="Benefits" title="Good for pets, simple for owners" />
        <FeatureGrid items={benefits} className="mt-14" />
      </Section>
      <CTABanner
        title="Stock natural pet food in your store"
        description="Wholesale pricing for breeders, kennels and pet retailers. Get in touch for a custom quote."
        image="/images/pet-chicken-frames.webp"
      />
    </>
  );
}
