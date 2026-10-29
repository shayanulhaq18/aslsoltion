import { whatsappLink } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi ASL Solution, I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#1fa855] p-3.5 text-white shadow-xl shadow-black/20 transition-all hover:pr-5 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#1fa855]/40" />
      <Icon name="whatsapp" size={26} />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-40 sm:inline">
        Order on WhatsApp
      </span>
    </a>
  );
}
