import { site, whatsappLink } from "@/data/site";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

const links: { label: string; href: string; icon: IconName }[] = [
  { label: "Facebook", href: site.social.facebook, icon: "facebook" },
  { label: "Instagram", href: site.social.instagram, icon: "instagram" },
  { label: "WhatsApp", href: whatsappLink(), icon: "whatsapp" },
];

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <div className="flex items-center gap-2">
      {links.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "grid place-items-center rounded-full border border-snow/15 text-snow/70 transition-colors hover:border-amber-500 hover:bg-amber-500 hover:text-ink",
            size === "sm" ? "size-7" : "size-10",
          )}
        >
          <Icon name={icon} size={size === "sm" ? 14 : 18} />
        </a>
      ))}
    </div>
  );
}
