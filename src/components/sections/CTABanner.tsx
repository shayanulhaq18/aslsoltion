import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

type CTABannerProps = {
  title?: string;
  description?: string;
  image?: string;
};

export function CTABanner({
  title = "Ready to stock your kitchen with premium halal meat?",
  description = "Tell us what you need and get a tailored quote within hours. Bulk, custom cuts or recurring supply, we've got you covered.",
  image = "/images/steaks-tools.webp",
}: CTABannerProps) {
  return (
    <section className="bg-page py-16 sm:py-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-800 px-6 py-14 text-snow sm:px-12 lg:px-16 lg:py-20">
          <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/40" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mt-4 text-base leading-relaxed text-snow/75 sm:text-lg">{description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <LinkButton href="/contact" size="lg" icon="arrowRight">
                Request a Quote
              </LinkButton>
              <LinkButton href={site.phoneHref} size="lg" variant="outlineLight" iconLeft="phone">
                Call Now
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
