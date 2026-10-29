import type { IconName } from "@/components/ui/Icon";

export type Feature = { icon: IconName; title: string; text: string };

export const certifications = [
  { name: "Halal Certified", image: "/images/cert-halal.webp" },
  { name: "ISO Standards", image: "/images/cert-iso.webp" },
  { name: "Punjab Food Authority", image: "/images/cert-pfa.webp" },
  { name: "SECP Registered", image: "/images/cert-secp.webp" },
  { name: "Govt. of Pakistan", image: "/images/cert-gop.webp" },
  { name: "Saudi FDA", image: "/images/cert-sfda.webp" },
  { name: "UAE MOCCAE", image: "/images/cert-uae-moccae.webp" },
];

export const stats = [
  { value: "500+", label: "Business clients served" },
  { value: "25 t", label: "Monthly supply capacity" },
  { value: "100%", label: "Zabiha halal sourcing" },
  { value: "24 h", label: "Order-to-door in Lahore" },
];

export const whyUs: Feature[] = [
  { icon: "shield", title: "Certified Halal", text: "Every animal is hand-slaughtered by trained staff under strict Zabiha guidelines." },
  { icon: "snowflake", title: "Unbroken Cold Chain", text: "Chilled processing, insulated packing and refrigerated delivery from abattoir to kitchen." },
  { icon: "knife", title: "Cut to Your Spec", text: "Our butchers portion, trim and pack exactly to your menu's weights and sizes." },
  { icon: "truck", title: "Reliable Delivery", text: "Scheduled daily and weekly drops so your kitchen never runs short." },
];

export const services: Feature[] = [
  { icon: "store", title: "Restaurants & Cafés", text: "Consistent portions and dependable daily supply for busy kitchens." },
  { icon: "users", title: "Caterers & Events", text: "Bulk volumes for weddings, corporate events and banquets, on time." },
  { icon: "globe", title: "Export & Wholesale", text: "Chilled and frozen halal meat packed to international standards." },
  { icon: "paw", title: "Pet Food Brands", text: "Raw, preservative-free blends for breeders, kennels and pet stores." },
];

export const commitments = [
  "Strict hygiene at every stage of processing",
  "Healthy, vet-checked livestock from trusted farms",
  "Skilled butchers for precise, consistent cutting",
  "Vacuum and food-grade packaging for safe transport",
];

export const processSteps: Feature[] = [
  { icon: "phone", title: "Share your requirement", text: "Tell us the cuts, weights and delivery schedule you need." },
  { icon: "clipboard", title: "Get a tailored quote", text: "We confirm pricing and availability within a few hours." },
  { icon: "knife", title: "We cut & pack", text: "Fresh processing to your spec, packed hygienically." },
  { icon: "truck", title: "Delivered cold", text: "Refrigerated delivery straight to your kitchen or port." },
];

export const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Restaurant Owner",
    quote: "The beef cuts are consistently excellent. Portions are exact, the meat is fresh and deliveries are always on time. Our steak sales have grown since we switched.",
  },
  {
    name: "Ahmed Ali",
    role: "Catering Manager",
    quote: "We order bulk mutton for weddings every week. The quality never drops and the team handles last-minute changes without any fuss.",
  },
];
