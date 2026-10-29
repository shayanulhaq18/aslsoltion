import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="font-display text-7xl font-semibold text-amber-500 sm:text-9xl">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-fg sm:text-4xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-fg-muted">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton href="/" icon="arrowRight">Back to Home</LinkButton>
        <LinkButton href="/products" variant="outline">View Products</LinkButton>
      </div>
    </Section>
  );
}
