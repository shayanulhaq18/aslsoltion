import { testimonials } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

export function Testimonials() {
  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionHeading
          className="lg:col-span-4"
          light
          eyebrow="Client Stories"
          title="Trusted by kitchens that can't compromise"
          description="Restaurants, caterers and hotels rely on us for consistent quality, every single order."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </Section>
  );
}
