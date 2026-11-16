import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/catalog';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'inquire', label: 'Custom Order' },
  { id: 'sample-works', label: 'Sample Works' },
];

export function Navbar({ onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#D6B272]/25 bg-[#0A0A0C]/95 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-3.5">
        {/* Zone 1: Single-line Brand Wordmark with Provided Photo Logo Emblem */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-3 font-serif text-2xl font-bold tracking-tight text-3d-gold transition-transform duration-150 hover:scale-[1.01] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272] rounded-sm"
        >
          <img
            src={BRAND_INFO.heroImage}
            alt="Dreamy Prints Co. logo emblem"
            referrerPolicy="no-referrer"
            className="h-9 w-12 rounded-md object-cover border border-[#D6B272]/45 shadow-[0_3px_0_#050507,0_6px_14px_rgba(0,0,0,0.75)] shrink-0"
          />
          <span>{BRAND_INFO.name}</span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#C8BEA9]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              className="relative py-1 text-3d-subtle transition-colors duration-150 hover:text-[#F5EFE6] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#F3DFB3] after:to-[#B68D46] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary 3D Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('inquire')}
            className="hidden sm:inline-flex items-center justify-center rounded-md px-5 py-2.5 text-xs font-bold tracking-wide btn-3d-gold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C88E]"
          >
            Send Inquiry
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md btn-3d-obsidian md:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#D6B272]/20 bg-[#0A0A0C] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className="py-2 text-sm font-medium text-[#F5EFE6] hover:text-[#D6B272] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => handleLinkClick('inquire')}
              className="mt-2 w-full rounded-md px-4 py-3 text-sm font-bold btn-3d-gold cursor-pointer"
            >
              Send Inquiry
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
