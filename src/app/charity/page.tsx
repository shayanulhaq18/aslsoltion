import type { Metadata } from "next";
import type { Feature } from "@/data/content";
import { whatsappLink } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Charity",
  description: "Sadqa, Aqiqah and charity meat distribution arranged by ASL Solution.",
};

const charityServices: Feature[] = [
  { icon: "heart", title: "Sadqa", text: "Animal sacrifice and meat distribution to deserving families on your behalf." },
  { icon: "users", title: "Aqiqah", text: "Complete Aqiqah arrangements following Sunnah, with cooked or fresh distribution." },
  { icon: "box", title: "Meat Packs", text: "Hygienically packed meat portions for food drives and community kitchens." },
  { icon: "truck", title: "Doorstep Distribution", text: "We deliver directly to madrassas, shelters and families in need." },
];

export default function CharityPage() {
  return (
    <>
      <PageHero
        eyebrow="Charity"
        title="Share your blessings with those in need"
        description="We arrange Sadqa, Aqiqah and charity meat distribution with full transparency, so your giving reaches the right hands."
        image="/images/hero-lamb-chops.webp"
        breadcrumb={[{ label: "Charity" }]}
      >
        <LinkButton href={whatsappLink("Assalam o Alaikum, I'd like to arrange Sadqa / Aqiqah.")} icon="arrowRight">
          Arrange on WhatsApp
        </LinkButton>
      </PageHero>
      <Section>
        <SectionHeading align="center" eyebrow="What We Arrange" title="Charity made simple and sincere" />
        <FeatureGrid items={charityServices} className="mt-14" />
      </Section>
      <SplitSection
        tone="surface"
        eyebrow="Our Promise"
        title="Transparent from sacrifice to distribution"
        description="Every animal is healthy and Shariah-compliant. We share photo and video updates so you can see your charity delivered."
        image="/images/butcher-2.webp"
        imageAlt="Butcher preparing fresh meat"
      >
        <CheckList items={["Healthy, Shariah-compliant animals", "Photo & video confirmation", "Distribution to verified recipients", "Available year-round"]} />
      </SplitSection>
      <CTABanner
        title="Ready to give Sadqa or arrange Aqiqah?"
        description="Contact us and we'll handle everything, from selecting the animal to distributing the meat."
      />
    </>
  );
}
