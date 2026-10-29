import Image from "next/image";
import { certifications } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Certifications() {
  // Duplicated once so the marquee can loop seamlessly.
  const items = [...certifications, ...certifications];
  return (
    <section className="border-y border-line bg-surface py-12" aria-label="Certifications and registrations">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-fg-muted">
          Certified &amp; registered with trusted authorities
        </p>
      </Container>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {items.map((cert, i) => (
            <li
              key={`${cert.name}-${i}`}
              aria-hidden={i >= certifications.length}
              className="flex w-56 shrink-0 items-center gap-3 rounded-2xl border border-line bg-page p-3"
            >
              <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-black">
                <Image src={cert.image} alt={cert.name} fill sizes="56px" className="object-contain" />
              </span>
              <span className="text-sm font-semibold text-fg">{cert.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
