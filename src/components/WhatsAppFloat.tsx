import { WhatsAppIcon } from '@/components/SocialIcons';
import { contactInfo } from '@/lib/data';

export default function WhatsAppFloat() {
  return (
    <a
      href={contactInfo.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(0,0,0,.45)] transition-transform duration-200 hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 font-mono text-[12px] font-bold text-paper opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:bg-paper dark:text-ink">
        Chat on WhatsApp
      </span>
    </a>
  );
}
