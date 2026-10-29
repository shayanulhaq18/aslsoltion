import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";

function FloatingCard({ icon, title, text, className }: { icon: IconName; title: string; text: string; className: string }) {
  return (
    <div className={`absolute flex items-center gap-3 rounded-2xl bg-surface/95 p-3.5 pr-5 shadow-xl shadow-navy-950/20 backdrop-blur ${className}`}>
      <span className="grid size-11 place-items-center rounded-xl bg-navy-800 text-amber-400">
        <Icon name={icon} size={20} />
      </span>
      <span>
        <span className="block text-sm font-bold text-fg">{title}</span>
        <span className="text-xs text-fg-muted">{text}</span>
      </span>
    </div>
  );
}

const highlights = ["Zabiha halal", "Custom cutting", "Bulk & export"];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-page">
      <div className="absolute -right-40 -top-40 size-[36rem] rounded-full bg-amber-300/25 blur-3xl dark:bg-amber-500/8" aria-hidden="true" />
      <Container className="relative grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <Eyebrow>{site.tagline}</Eyebrow>
          <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-fg text-balance sm:text-6xl xl:text-7xl">
            Quality meat, <em className="font-medium text-accent">cut for</em> every kitchen.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            Fresh and frozen halal beef, mutton and poultry for restaurants, cafés, caterers and wholesale buyers,
            portioned to your spec and delivered on a schedule you can count on.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/products" size="lg" icon="arrowRight">
              Explore Products
            </LinkButton>
            <LinkButton href="/contact" size="lg" variant="outline">
              Get in Touch
            </LinkButton>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-fg/80">
                <Icon name="check" size={18} className="text-accent" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-5 gap-4">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-[2rem] bg-navy-900">
              <Image
                src="/images/lamb-chops-slate.webp"
                alt="Fresh lamb chops on a slate board"
                fill
                priority
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                <Image src="/images/beef-steaks-dark.webp" alt="Premium beef steaks" fill priority sizes="20vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[2rem]">
                <Image src="/images/custom-cutting.webp" alt="Butcher cutting meat to order" fill sizes="20vw" className="object-cover" />
              </div>
            </div>
          </div>
          <FloatingCard icon="shield" title="100% Zabiha Halal" text="Certified sourcing" className="-left-2 bottom-10 sm:-left-6" />
          <FloatingCard icon="snowflake" title="Cold-chain delivery" text="Farm to kitchen" className="right-2 top-0 hidden sm:flex lg:-right-4" />
        </div>
      </Container>
    </section>
  );
}
