import type { Metadata } from "next";
import { site, whatsappLink } from "@/data/site";
import { Section } from "@/components/ui/Section";
import type { IconName } from "@/components/ui/Icon";
import { IconBadge } from "@/components/ui/FeatureCard";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a quote for premium halal meat supply from ASL Solution.",
};

const contactCards: { icon: IconName; title: string; value: string; href?: string }[] = [
  { icon: "phone", title: "Call us", value: site.phone, href: site.phoneHref },
  { icon: "whatsapp", title: "WhatsApp", value: "Chat with our sales team", href: whatsappLink() },
  { icon: "mail", title: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "pin", title: "Visit us", value: site.address },
  { icon: "clock", title: "Working hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your supply"
        description="Whether it's a weekly restaurant order, a wedding, or an export container, our team is ready to help."
        image="/images/custom-cutting.webp"
        breadcrumb={[{ label: "Contact" }]}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            {contactCards.map(({ icon, title, value, href }) => {
              const content = (
                <>
                  <IconBadge icon={icon} />
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-fg-muted">{title}</span>
                    <span className="mt-1 block font-semibold text-fg">{value}</span>
                  </span>
                </>
              );
              const className = "group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5";
              return href ? (
                <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${className} transition-shadow hover:shadow-lg`}>
                  {content}
                </a>
              ) : (
                <div key={title} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
