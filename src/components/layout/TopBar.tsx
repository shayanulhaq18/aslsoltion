import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "./SocialLinks";

export function TopBar() {
  return (
    <div className="hidden bg-navy-950 text-xs text-snow/70 md:block">
      <Container className="flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-amber-400">
            <Icon name="phone" size={14} /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-amber-400">
            <Icon name="mail" size={14} /> {site.email}
          </a>
          <span className="hidden items-center gap-2 lg:flex">
            <Icon name="clock" size={14} /> {site.hours}
          </span>
        </div>
        <SocialLinks size="sm" />
      </Container>
    </div>
  );
}
