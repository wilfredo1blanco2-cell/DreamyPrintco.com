import { useState } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/catalog';

interface HeroSectionProps {
  onSelectServiceAndScroll: (serviceTitle: (typeof SERVICES)[number]['title']) => void;
  onScrollToWorks: () => void;
}

export function HeroSection({
  onSelectServiceAndScroll,
  onScrollToWorks,
}: HeroSectionProps) {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section
      id="home"
      className="border-b border-[#D6B272]/20 bg-[#0A0A0C] pt-10 pb-14 md:pt-14 md:pb-20"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Two-column balanced luxury 3D split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: 3D Sculpted Brand Typography & Direct 3D Inquiry Buttons */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.24em] text-3d-gold uppercase">
              Bespoke Print Studio
            </p>

            <h1 className="mt-4 font-serif text-[clamp(2.55rem,4.6vw,3.9rem)] font-bold leading-[1.06] tracking-tight text-3d-ivory text-balance">
              When Cuteness and Creativity Meets
            </h1>

            <p className="mt-5 max-w-prose text-base leading-relaxed text-[#C2B8A6] text-3d-subtle">
              Welcome to{' '}
              <span className="font-semibold text-[#F3DFB3]">Dreamy Prints Co.</span> —
              crafted custom calendars, die-cut stickers, school, art, diary &amp;
              drawing notebooks, and durable laminated keychains tailored directly
              from your favorite photos.
            </p>

            {/* Primary Classy 3D Inquiry Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 text-sm font-bold btn-3d-gold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C88E]"
              >
                <MessageCircle className="h-4 w-4" />
                Inquire on Facebook
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                  'Custom Print Inquiry — Dreamy Prints Co.'
                )}`}
                className="inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 text-sm font-semibold btn-3d-obsidian whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272]"
              >
                <Mail className="h-4 w-4 text-[#D6B272]" />
                Email Your Photo
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4 text-xs text-[#B8AF9E]">
              <button
                type="button"
                onClick={onScrollToWorks}
                className="inline-flex items-center gap-1.5 font-semibold text-[#EBD097] transition-colors hover:text-[#F5EFE6] cursor-pointer whitespace-nowrap"
              >
                Explore sample works
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <span aria-hidden="true" className="text-[#D6B272]/40">
                ·
              </span>
              <span>Made to order with your custom photos</span>
            </div>
          </div>

          {/* Right Column: Featured 1st Page Brand Photo in 3D Beveled Frame */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl bg-[#131316] frame-3d">
              {!heroImgFailed ? (
                <img
                  src={BRAND_INFO.heroImage}
                  alt="Dreamy Prints Co. luxury gold and matte black branding emblem"
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgFailed(true)}
                  className="h-full w-full object-cover object-center lg:min-h-[460px]"
                />
              ) : (
                <div className="flex h-full min-h-[380px] flex-col items-center justify-center bg-[#131316] p-10 text-center">
                  <span className="font-serif text-4xl font-bold text-3d-gold">
                    {BRAND_INFO.name}
                  </span>
                  <span className="mt-2 text-sm text-[#B8AF9E]">
                    {BRAND_INFO.tagline}
                  </span>
                </div>
              )}

              {/* Subtle bottom scrim caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0A0C]/92 via-[#0A0A0C]/40 to-transparent px-6 py-5">
                <p className="font-serif text-lg font-semibold italic text-3d-gold">
                  “{BRAND_INFO.tagline}”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column 3D Service Overview Strip below the split */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-[#D6B272]/15 overflow-hidden rounded-xl card-3d sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelectServiceAndScroll(service.title)}
              className="group flex flex-col items-start justify-between p-6 text-left transition-colors duration-150 hover:bg-[#1B1B22] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D6B272]"
            >
              <div className="flex w-full items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-3d-gold tabular-nums">
                  {service.index}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-[#B8AF9E] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#D6B272]" />
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold text-3d-ivory">
                {service.title}
              </h2>
              <p className="mt-1 text-xs text-[#B8AF9E]">{service.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
