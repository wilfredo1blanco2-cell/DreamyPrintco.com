import { Mail, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/catalog';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0C] py-12 text-[#B8AF9E]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[#D6B272]/15 pb-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img
              src={BRAND_INFO.heroImage}
              alt="Dreamy Prints Co. emblem"
              referrerPolicy="no-referrer"
              className="h-12 w-16 rounded-md object-cover border border-[#D6B272]/40 shadow-[0_4px_0_#050507,0_10px_20px_rgba(0,0,0,0.75)] shrink-0"
            />
            <div>
              <p className="font-serif text-2xl font-bold text-3d-gold">
                {BRAND_INFO.name}
              </p>
              <p className="mt-1 text-sm italic font-serif text-[#EBD097]">
                {BRAND_INFO.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BRAND_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-bold btn-3d-gold whitespace-nowrap"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Facebook Inquiry
            </a>
            <a
              href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                `Customized Photo Inquiry — ${BRAND_INFO.name}`
              )}`}
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold btn-3d-obsidian whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5 text-[#D6B272]" />
              {BRAND_INFO.email}
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-[#B8AF9E]/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND_INFO.name}. Customized Calendars ·
            Stickers · School, Art, Diary &amp; Drawing Books · Keychains.
          </p>
          <p>All bespoke orders crafted to your submitted photos.</p>
        </div>
      </div>
    </footer>
  );
}
