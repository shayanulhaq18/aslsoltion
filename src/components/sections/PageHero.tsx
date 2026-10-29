import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
  breadcrumb: { label: string; href?: string }[];
  children?: ReactNode;
};

// Banner used at the top of every inner page.
export function PageHero({ eyebrow, title, description, image, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-snow">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
      <Container className="py-20 sm:py-28">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-snow/60">
            <li>
              <Link href="/" className="hover:text-amber-400">Home</Link>
            </li>
            {breadcrumb.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <Icon name="arrowRight" size={12} />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-amber-400">{crumb.label}</Link>
                ) : (
                  <span className="text-amber-400" aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && <p className="mt-6 max-w-2xl text-base leading-relaxed text-snow/75 sm:text-lg">{description}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
