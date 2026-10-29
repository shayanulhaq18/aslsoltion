import Link from "next/link";
import { Suspense } from "react";
import { navItems, site } from "@/data/site";
import { categories } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "./SocialLinks";

function FooterHeading({ children }: { children: string }) {
  return <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">{children}</h3>;
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-sm text-snow/65 transition-colors hover:text-amber-400">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const contactItems: { icon: IconName; label: string; href?: string }[] = [
  { icon: "pin", label: site.address },
  { icon: "phone", label: site.phone, href: site.phoneHref },
  { icon: "mail", label: site.email, href: `mailto:${site.email}` },
  { icon: "clock", label: site.hours },
];

export function Footer() {
  const productLinks = categories.map((c) => ({
    label: c.name,
    href: c.slug === "pet-food" ? "/pet-food" : `/products/${c.slug}`,
  }));
  const quickLinks = navItems.map(({ label, href }) => ({ label, href }));

  return (
    <footer className="bg-navy-950 text-snow">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-snow/65">{site.description}</p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <div className="lg:col-span-2">
          <FooterHeading>Company</FooterHeading>
          <FooterLinks links={quickLinks} />
        </div>
        <div className="lg:col-span-3">
          <FooterHeading>Our Products</FooterHeading>
          <FooterLinks links={productLinks} />
        </div>
        <div className="lg:col-span-3">
          <FooterHeading>Get in Touch</FooterHeading>
          <ul className="mt-5 space-y-4">
            {contactItems.map(({ icon, label, href }) => (
              <li key={label} className="flex items-start gap-3 text-sm text-snow/65">
                <Icon name={icon} size={18} className="mt-0.5 shrink-0 text-amber-400" />
                {href ? (
                  <a href={href} className="transition-colors hover:text-amber-400">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-snow/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-snow/50 sm:flex-row">
          <p>
            © <Suspense fallback={null}><CurrentYear /></Suspense> {site.name}. All rights reserved.
          </p>
          <p>100% Zabiha Halal · Cut fresh, delivered cold</p>
        </Container>
      </div>
    </footer>
  );
}
