import type { Metadata } from "next";
import type { Feature } from "@/data/content";
import { processSteps } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Certifications } from "@/components/sections/Certifications";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Export & Wholesale",
  description: "Chilled and frozen halal meat export and wholesale supply from ASL Solution.",
};

const exportFeatures: Feature[] = [
  { icon: "globe", title: "Global Supply Network", text: "Serving importers and distributors across the Gulf and beyond." },
  { icon: "shield", title: "Full Documentation", text: "Halal, health and origin certificates prepared for every shipment." },
  { icon: "snowflake", title: "Chilled & Frozen", text: "Blast-frozen or chilled, packed for long-haul cold chain." },
  { icon: "box", title: "Private Labelling", text: "Custom cartons, labels and pack sizes on request." },
];

export default function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Export & Wholesale"
        title="Halal meat for global markets"
        description="Premium Pakistani beef and mutton, processed to export standards and shipped chilled or frozen to your destination."
        image="/images/beef-cuts-spread.webp"
        breadcrumb={[{ label: "Export" }]}
      >
        <LinkButton href="/contact" icon="arrowRight">
          Start an Export Enquiry
        </LinkButton>
      </PageHero>
      <Section>
        <SectionHeading align="center" eyebrow="Why Export With Us" title="Reliable supply, compliant every time" />
        <FeatureGrid items={exportFeatures} className="mt-14" />
      </Section>
      <Certifications />
      <SplitSection
        tone="surface"
        eyebrow="Large Scale Supply"
        title="Premium meat for large scale needs"
        description="Whole and half carcasses, primal cuts and raan, processed in volume without compromising on quality."
        image="/images/mutton-whole.webp"
        imageAlt="Whole mutton carcass"
        accentImage="/images/mutton-raan.webp"
      >
        <CheckList items={["Whole beef & mutton carcass", "Beef & mutton raan", "Vacuum-packed primal cuts", "Organs and offal by the carton"]} />
        <LinkButton href="/products/bulk" className="mt-10" icon="arrowRight">
          View bulk range
        </LinkButton>
      </SplitSection>
      <Section tone="subtle">
        <SectionHeading align="center" eyebrow="Process" title="How export orders work" />
        <FeatureGrid items={processSteps} numbered className="mt-14" />
      </Section>
      <CTABanner title="Looking for a dependable halal meat exporter?" />
    </>
  );
}
