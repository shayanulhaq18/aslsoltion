import { categories, products, productsByCategory } from "@/data/products";
import { commitments, processSteps, services, whyUs } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { HomeHero } from "@/components/sections/HomeHero";
import { Certifications } from "@/components/sections/Certifications";
import { SplitSection } from "@/components/sections/SplitSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Stats } from "@/components/sections/Stats";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

const featured = ["Beef Ribeye", "Mutton Chops", "Mutton Raan", "Whole Mutton Carcass"];

export default function Home() {
  return (
    <>
      <HomeHero />
      <Certifications />

      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Range"
            title="Everything your menu needs, from one supplier"
            description="Six specialised divisions, one consistent standard of freshness and hygiene."
          />
          <LinkButton href="/products" variant="outline" icon="arrowRight" className="shrink-0">
            View all products
          </LinkButton>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} count={productsByCategory(category.slug).length} />
          ))}
        </div>
      </Section>

      <SplitSection
        tone="surface"
        eyebrow="Our Commitment"
        title="Trusted quality, certified standards"
        description="From vet-checked livestock to vacuum-sealed packs, every step is handled by trained hands under strict hygiene controls, so what reaches your kitchen is fresh, safe and exactly to spec."
        image="/images/butcher-1.webp"
        imageAlt="ASL Solution butcher holding a fresh cut"
        accentImage="/images/raw-cuts.webp"
        badge={{ value: "10+", label: "Years of craft" }}
      >
        <CheckList items={commitments} />
        <LinkButton href="/contact" className="mt-10" icon="arrowRight">
          Talk to our team
        </LinkButton>
      </SplitSection>

      <Section tone="dark">
        <SectionHeading
          light
          align="center"
          eyebrow="Why ASL Solution"
          title="Excellence in every cut"
          description="We combine traditional butchery with modern cold-chain logistics to deliver meat you can serve with confidence."
        />
        <FeatureGrid items={whyUs} variant="dark" className="mt-14" />
        <Stats className="mt-14" />
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Cuts"
            title="Customer favourites"
            description="Our most-ordered cuts, prepared fresh daily. Need something specific? We cut to order."
          />
          <LinkButton href="/products" variant="outline" icon="arrowRight" className="shrink-0">
            Browse catalogue
          </LinkButton>
        </div>
        <div className="mt-12">
          <ProductGrid products={products.filter((p) => featured.includes(p.name))} />
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading
          align="center"
          eyebrow="Who We Serve"
          title="Built for businesses of every size"
        />
        <FeatureGrid items={services} className="mt-14" />
      </Section>

      <SplitSection
        reverse
        eyebrow="Pet Food Division"
        title="Raw, natural nutrition for dogs & cats"
        description="Frozen, preservative-free meat blends made from the same quality cuts we supply to restaurants: balanced, single-sourced and ready to feed."
        image="/images/pet-food.webp"
        imageAlt="A dog and cat eating from bowls"
        badge={{ value: "0%", label: "Preservatives" }}
      >
        <CheckList items={["Muscle meat, organ & bone blends", "Portioned frozen packs", "Ideal for breeders, kennels & pet stores"]} />
        <LinkButton href="/pet-food" className="mt-10" icon="arrowRight">
          Explore Pet Food
        </LinkButton>
      </SplitSection>

      <Section tone="surface">
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="From order to your door in four steps"
        />
        <FeatureGrid items={processSteps} numbered className="mt-14" />
      </Section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
