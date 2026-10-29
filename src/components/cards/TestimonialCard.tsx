import { Icon } from "@/components/ui/Icon";

type Testimonial = { name: string; role: string; quote: string };

export function TestimonialCard({ name, role, quote }: Testimonial) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-snow/10 bg-navy-800/60 p-8">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-amber-400" aria-label="Rated 5 out of 5">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon key={i} name="star" size={16} strokeWidth={0} />
          ))}
        </div>
        <Icon name="quote" size={32} className="text-amber-500/40" />
      </div>
      <blockquote className="mt-6 flex-1 font-display text-lg leading-relaxed text-snow/90 sm:text-xl">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-snow/10 pt-6">
        <span className="grid size-12 place-items-center rounded-full bg-amber-500 font-bold text-ink">{initials}</span>
        <span>
          <span className="block font-bold text-snow">{name}</span>
          <span className="text-sm text-snow/60">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
