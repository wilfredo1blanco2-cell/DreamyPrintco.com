import { useState } from 'react';
import { Expand, Image as ImageIcon } from 'lucide-react';
import { SAMPLE_WORKS, type SampleWork, type ServiceCategory } from '../data/catalog';

interface SampleWorksSectionProps {
  onOpenLightbox: (work: SampleWork) => void;
}

type FilterOption = 'All Works' | ServiceCategory;

const FILTER_OPTIONS: FilterOption[] = [
  'All Works',
  'Customized Calendars',
  'Custom Stickers',
  'Notebooks',
  'Keychains',
];

export function SampleWorksSection({ onOpenLightbox }: SampleWorksSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All Works');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleWorks =
    activeFilter === 'All Works'
      ? SAMPLE_WORKS
      : SAMPLE_WORKS.filter((item) => item.category === activeFilter);

  const featuredWork = visibleWorks.find((w) => w.featured);
  const gridWorks = visibleWorks.filter((w) => !w.featured);

  return (
    <section
      id="sample-works"
      className="border-b border-[#D6B272]/20 bg-[#0A0A0C] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header & Interactive 3D Category Filter */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-3d-gold uppercase">
              Portfolio Archive
            </p>
            <h2 className="mt-3 font-serif text-[clamp(2.1rem,3.4vw,2.9rem)] font-bold leading-tight text-3d-ivory text-balance">
              Our Sample Works
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#B8AF9E]">
              Browse finished stickers, laminated learning keychains, school, art,
              diary &amp; drawing notebooks, and wall calendars crafted for our
              clients. Click any sample to inspect it closely.
            </p>
          </div>

          {/* Functional 3D Segmented Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter sample works by category"
            className="flex flex-wrap items-center gap-2 rounded-lg border border-[#D6B272]/25 bg-[#131316] p-2 shadow-[inset_0_1px_0_rgba(235,208,151,0.12),0_10px_24px_rgba(0,0,0,0.65)]"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option;
              const shortText =
                option === 'Customized Calendars'
                  ? 'Calendars'
                  : option === 'Custom Stickers'
                    ? 'Stickers'
                    : option;
              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(option)}
                  className={`rounded-md px-3.5 py-2 text-xs font-bold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272] ${
                    isSelected
                      ? 'btn-3d-gold'
                      : 'text-[#B8AF9E] hover:text-[#F5EFE6] transition-colors duration-150'
                  }`}
                >
                  {shortText}
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Featured Sample Photo (Creative Books & Planners Collection) */}
        {featuredWork && (
          <article className="group mt-10 overflow-hidden rounded-xl frame-3d bg-[#131316]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              <button
                type="button"
                onClick={() => onOpenLightbox(featuredWork)}
                aria-label={`View highlighted sample photo: ${featuredWork.title}`}
                className="relative overflow-hidden border-b border-[#D6B272]/20 bg-[#19191E] text-left cursor-pointer lg:col-span-7 lg:border-r lg:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D6B272]"
              >
                {!failedImages[featuredWork.id] ? (
                  <img
                    src={featuredWork.image}
                    alt={featuredWork.title}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => ({
                        ...prev,
                        [featuredWork.id]: true,
                      }))
                    }
                    className="h-full max-h-[460px] w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full min-h-[320px] flex-col items-center justify-center p-8 text-center">
                    <ImageIcon className="h-9 w-9 text-[#D6B272]" />
                    <span className="mt-2 font-serif text-xl text-[#F5EFE6]">
                      {featuredWork.title}
                    </span>
                  </div>
                )}

                <span className="pointer-events-none absolute right-4 bottom-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#D6B272]/45 bg-[#0A0A0C]/85 text-[#F5EFE6] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  <Expand className="h-4 w-4 text-[#D6B272]" />
                </span>
              </button>

              <div className="flex flex-col justify-center p-7 sm:p-9 lg:col-span-5">
                <div className="flex items-center gap-2 text-xs text-[#B8AF9E]">
                  <span className="font-semibold text-3d-gold uppercase tracking-wider">
                    Highlighted Collection
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredWork.category}</span>
                </div>

                <h3 className="mt-3 font-serif text-3xl font-bold leading-snug text-3d-ivory">
                  {featuredWork.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#D6B272]">
                  {featuredWork.medium}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#B8AF9E]">
                  {featuredWork.description}
                </p>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(featuredWork)}
                    className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-bold btn-3d-gold cursor-pointer"
                  >
                    <Expand className="h-3.5 w-3.5" />
                    Inspect Full Collection
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Sample Works Grid — All sample photos cleanly presented */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gridWorks.map((work) => {
            const imgFailed = failedImages[work.id];
            return (
              <article
                key={work.id}
                className="group flex flex-col overflow-hidden rounded-xl card-3d"
              >
                <button
                  type="button"
                  onClick={() => onOpenLightbox(work)}
                  aria-label={`View full sample photo: ${work.title}`}
                  className="relative aspect-[4/5] w-full overflow-hidden border-b border-[#D6B272]/15 bg-[#19191E] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D6B272]"
                >
                  {!imgFailed ? (
                    <img
                      src={work.image}
                      alt={work.title}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [work.id]: true }))
                      }
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      <ImageIcon className="h-8 w-8 text-[#D6B272]" />
                      <span className="mt-2 font-serif text-lg text-[#F5EFE6]">
                        {work.title}
                      </span>
                    </div>
                  )}

                  {/* Subtle zoom indicator on hover */}
                  <span className="pointer-events-none absolute right-3 bottom-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#D6B272]/40 bg-[#0A0A0C]/85 text-[#F5EFE6] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5 text-[#D6B272]" />
                  </span>
                </button>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#B8AF9E]">
                      <span className="text-[#D6B272]">{work.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{work.medium}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-3d-ivory">
                      {work.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-[#B8AF9E]">
                      {work.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
