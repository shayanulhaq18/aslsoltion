// Central business details: update these once and every page picks them up.
export const site = {
  name: "ASL Solution",
  tagline: "Premium Halal Meat Supply",
  description:
    "ASL Solution supplies premium halal beef, mutton, poultry and pet food to restaurants, caterers, retailers and export buyers, cut to order and delivered cold.",
  phone: "+92 300 0000000",
  phoneHref: "tel:+923000000000",
  whatsapp: "923000000000",
  email: "info@aslsolution.com",
  address: "Lahore, Punjab, Pakistan",
  hours: "Mon – Sat, 8:00 AM – 8:00 PM",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Beef Premium Cuts", href: "/products/beef" },
      { label: "Mutton Selection", href: "/products/mutton" },
      { label: "Poultry Selection", href: "/products/poultry" },
      { label: "Organs & Offal", href: "/products/organs" },
      { label: "Bulk & Carcass", href: "/products/bulk" },
    ],
  },
  { label: "Pet Food", href: "/pet-food" },
  { label: "Export", href: "/export" },
  { label: "Charity", href: "/charity" },
  { label: "Contact", href: "/contact" },
];
