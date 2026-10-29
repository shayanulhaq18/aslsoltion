export type CategorySlug = "beef" | "mutton" | "poultry" | "organs" | "bulk" | "pet-food";

export type Category = {
  slug: CategorySlug;
  name: string;
  short: string;
  description: string;
  image: string;
};

export type Product = {
  name: string;
  localName?: string;
  category: CategorySlug;
  image: string;
  description: string;
  tags?: string[];
};

export const categories: Category[] = [
  {
    slug: "beef",
    name: "Beef Premium Cuts",
    short: "Beef",
    description: "Marbled steaks, roasts and everyday cuts from healthy, grass-fed cattle.",
    image: "/images/beef-steaks-dark.webp",
  },
  {
    slug: "mutton",
    name: "Mutton Selection",
    short: "Mutton",
    description: "Tender chops, raan and boneless cuts from young, locally reared goats.",
    image: "/images/lamb-chops-closeup.webp",
  },
  {
    slug: "poultry",
    name: "Poultry Selection",
    short: "Poultry",
    description: "Fresh, hygienically processed chicken in whole birds and portioned cuts.",
    image: "/images/poultry-closeup.webp",
  },
  {
    slug: "organs",
    name: "Organs & Offal",
    short: "Organs",
    description: "Liver, kidney, heart, brain, trotters and pure tallow, cleaned and chilled.",
    image: "/images/butcher-counter.webp",
  },
  {
    slug: "bulk",
    name: "Bulk & Carcass",
    short: "Bulk",
    description: "Whole and half carcasses, raan and primal cuts for high-volume kitchens.",
    image: "/images/mutton-whole.webp",
  },
  {
    slug: "pet-food",
    name: "Pet Food Division",
    short: "Pet Food",
    description: "Frozen, preservative-free raw meat blends for dogs and cats.",
    image: "/images/pet-food.webp",
  },
];

export const products: Product[] = [
  // Beef
  { name: "Beef Undercut", localName: "Tenderloin", category: "beef", image: "/images/beef-steaks-dark.webp", description: "The most tender cut, trimmed clean for steaks and medallions.", tags: ["Steak", "Premium"] },
  { name: "Beef Ribeye", category: "beef", image: "/images/steak-closeup.webp", description: "Richly marbled and full of flavour, ideal for grilling.", tags: ["Steak", "Grill"] },
  { name: "Beef Brisket", category: "beef", image: "/images/raw-cuts.webp", description: "Slow-cook favourite for smoking, braising and nihari.", tags: ["Slow cook"] },
  { name: "Beef Chuck", category: "beef", image: "/images/assorted-cuts.webp", description: "Well-balanced cut for curries, stews and mince.", tags: ["Curry", "Mince"] },
  { name: "Beef Raan", category: "beef", image: "/images/beef-cuts-spread.webp", description: "Whole hind leg, perfect for roasts and banquet servings.", tags: ["Roast", "Bulk"] },
  // Mutton
  { name: "Mutton Chops", category: "mutton", image: "/images/lamb-chops-closeup.webp", description: "French-trimmed rib chops for grills and karahi.", tags: ["Grill", "Premium"] },
  { name: "Mutton Boneless", category: "mutton", image: "/images/hero-lamb-chops.webp", description: "Lean boneless cubes, ready for handi, tikka and pulao.", tags: ["Boneless"] },
  { name: "Mutton Qeema", category: "mutton", image: "/images/steaks-tools.webp", description: "Freshly minced daily, available in custom fat ratios.", tags: ["Mince"] },
  { name: "Mutton Raan", category: "mutton", image: "/images/mutton-raan.webp", description: "Tender whole leg for roast raan and sajji.", tags: ["Roast"] },
  // Poultry
  { name: "Chicken Boneless", category: "poultry", image: "/images/poultry-closeup.webp", description: "Breast and thigh fillets for tikka, handi and burgers.", tags: ["Boneless"] },
  { name: "Chicken Wings", category: "poultry", image: "/images/poultry-closeup.webp", description: "Uniform wings, perfect for fryers and BBQ menus.", tags: ["Fry", "BBQ"] },
  { name: "Chicken Drumsticks", category: "poultry", image: "/images/poultry-closeup.webp", description: "Meaty drumsticks for roast, tandoori and broast.", tags: ["Tandoori"] },
  // Organs
  { name: "Beef Liver", localName: "Kaleji", category: "organs", image: "/images/butcher-counter.webp", description: "Fresh, iron-rich liver, cleaned and ready to cook.", tags: ["Beef"] },
  { name: "Beef Kidney & Heart", localName: "Dil / Gurda", category: "organs", image: "/images/butcher-counter.webp", description: "Classic organ cuts for karahi and grills.", tags: ["Beef"] },
  { name: "Beef Brain", localName: "Maghaz", category: "organs", image: "/images/butcher-counter.webp", description: "Delicate brain, carefully cleaned for masala dishes.", tags: ["Beef"] },
  { name: "Beef Tallow", localName: "Pure Fat", category: "organs", image: "/images/raw-cuts.webp", description: "Pure rendered-grade fat for cooking and processing.", tags: ["Beef"] },
  { name: "Mutton Trotters", localName: "Paye", category: "organs", image: "/images/mutton-trotters.webp", description: "Cleaned and singed trotters for traditional paye.", tags: ["Mutton"] },
  { name: "Mutton Liver, Kidney & Heart", category: "organs", image: "/images/butcher-counter.webp", description: "Mixed mutton organs, fresh every morning.", tags: ["Mutton"] },
  // Bulk
  { name: "Whole Mutton Carcass", category: "bulk", image: "/images/mutton-whole.webp", description: "Whole goat carcass, dressed and chilled for bulk buyers.", tags: ["Carcass"] },
  { name: "Whole Beef Carcass", category: "bulk", image: "/images/beef-cuts-spread.webp", description: "Whole or half beef carcass, broken down to your spec.", tags: ["Carcass"] },
  { name: "Beef Primal Cuts", category: "bulk", image: "/images/assorted-cuts.webp", description: "Vacuum-packed primals for restaurants and processors.", tags: ["Primal"] },
  // Pet food
  { name: "Custom Breeder Batch Mix", category: "pet-food", image: "/images/pet-breeder-mix.webp", description: "Balanced raw blend of muscle meat, organ and bone.", tags: ["Dogs", "Cats"] },
  { name: "Beef Marrow Broth Bones", category: "pet-food", image: "/images/pet-marrow-bones.webp", description: "Marrow-rich bones for chewing and nourishing broth.", tags: ["Dogs"] },
  { name: "Chicken Frames & Necks", category: "pet-food", image: "/images/pet-chicken-frames.webp", description: "Natural raw bones that support dental health.", tags: ["Dogs", "Cats"] },
  { name: "Pure Beef Lung Blocks", category: "pet-food", image: "/images/pet-lung-blocks.webp", description: "Single-protein, low-fat lung blocks for training treats.", tags: ["Dogs"] },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const productsByCategory = (slug: CategorySlug) => products.filter((p) => p.category === slug);
