import { useState } from 'react';
import { ArrowUpRight, BookOpen, Check, Layers, Ruler } from 'lucide-react';
import {
  BRAND_INFO,
  NOTEBOOK_EDITIONS,
  PAPER_SIZES,
  SCHOOL_LAYOUT_GUIDES,
  SERVICES,
  type FrontDesignOption,
  type NotebookEditionType,
  type PaperSize,
  type ServiceCategory,
} from '../data/catalog';

interface ServicesSectionProps {
  onSelectService: (
    service: ServiceCategory,
    options?: {
      notebookEdition?: NotebookEditionType;
      size?: PaperSize;
      frontDesign?: FrontDesignOption;
    }
  ) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [highlightFailed, setHighlightFailed] = useState(false);
  const [layoutImgFailed, setLayoutImgFailed] = useState(false);
  const [activeGuideId, setActiveGuideId] = useState(SCHOOL_LAYOUT_GUIDES[0].id);
  const [previewSize, setPreviewSize] = useState<PaperSize>('A4');
  const [showcaseMode, setShowcaseMode] = useState<'notebooks' | 'desk-calendar' | 'nature-calendar'>('notebooks');

  const activeGuide =
    SCHOOL_LAYOUT_GUIDES.find((g) => g.id === activeGuideId) ??
    SCHOOL_LAYOUT_GUIDES[0];

  const activeSizeInfo =
    PAPER_SIZES.find((s) => s.size === previewSize) ?? PAPER_SIZES[1];

  const showcaseSlides = {
    notebooks: {
      src: BRAND_INFO.schoolCollectionLayoutImage,
      alt: 'Dreamy Prints Co. Kindergarten to College School Notebook Collection layout showing High School, College A5, and Kindergarten blue-and-red line interiors',
      caption: 'Notebook Layout Guide · Kindergarten to College (A3 / A4 / A5)',
    },
    'desk-calendar': {
      src: BRAND_INFO.deskCalendarCollectionImage,
      alt: 'Dreamy Prints Co. 2026 Desk Calendar with High School, College, and Botanical Notebooks',
      caption: '2026 Desk Calendar & Stationery Suite · Custom Front Cover',
    },
    'nature-calendar': {
      src: BRAND_INFO.natureCalendarTrioImage,
      alt: 'Dreamy Prints Co. Nature Collection Monthly Wall Calendars in A3, A4, and A5',
      caption: 'Nature Collection Wall Calendars · Monthly & Annual Grids',
    },
  }[showcaseMode];

  return (
    <section
      id="services"
      className="border-b border-[#D6B272]/20 bg-[#0A0A0C] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-3d-gold uppercase">
              Our Services
            </p>
            <h2 className="mt-3 font-serif text-[clamp(2.1rem,3.4vw,2.9rem)] font-bold leading-tight text-3d-ivory text-balance">
              Crafted Keepsakes, Tailored to Your Photos
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#B8AF9E]">
            Every piece is printed with crisp detail and thoughtful finishing—ideal
            for gifts, Kindergarten to College notebooks, calendars in A3, A4, or
            A5, and custom front cover designs.
          </p>
        </div>

        {/* 4 Bespoke 3D Service Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const imgFailed = failedImages[service.id];
            return (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-xl card-3d"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#D6B272]/20 bg-[#19191E]">
                  {!imgFailed ? (
                    <img
                      src={service.previewImage}
                      alt={service.previewAlt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [service.id]: true }))
                      }
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      <Layers className="h-7 w-7 text-[#D6B272]" />
                      <span className="mt-2 font-serif text-lg text-[#F5EFE6]">
                        {service.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Copy */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#B8AF9E]">
                      <span className="font-bold text-3d-gold tabular-nums">
                        {service.index}.
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{service.subtitle}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-2xl font-bold text-3d-ivory">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#B8AF9E]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#D6B272]/15 pt-4">
                    <p className="text-xs text-[#B8AF9E]/90">{service.finishSpec}</p>
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="mt-3.5 inline-flex w-full items-center justify-between rounded-md px-4 py-2.5 text-xs font-bold btn-3d-obsidian cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272]"
                    >
                      <span>Inquire for {service.shortLabel}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#D6B272]" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Service Example Layout: Kindergarten to College + Calendars + A3 / A4 / A5 Size & Custom Front Design */}
        <div className="mt-12 overflow-hidden rounded-xl frame-3d bg-[#131316]">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            {/* Left: Main Collection & Calendar Showcase Photo with Clean Switcher */}
            <div className="relative flex flex-col bg-[#19191E] lg:col-span-6">
              <div className="relative flex-1">
                {!layoutImgFailed ? (
                  <img
                    src={showcaseSlides.src}
                    alt={showcaseSlides.alt}
                    referrerPolicy="no-referrer"
                    onError={() => setLayoutImgFailed(true)}
                    className="h-full w-full object-cover object-center lg:min-h-[540px]"
                  />
                ) : (
                  <div className="flex h-full min-h-[380px] flex-col items-center justify-center p-8 text-center">
                    <BookOpen className="h-9 w-9 text-[#D6B272]" />
                    <span className="mt-2 font-serif text-2xl text-3d-ivory">
                      Calendars &amp; School Notebook Layouts
                    </span>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0A0C]/95 via-[#0A0A0C]/55 to-transparent px-6 py-4">
                  <p className="text-xs font-semibold tracking-wider text-[#EBD097] uppercase">
                    {showcaseSlides.caption}
                  </p>
                </div>
              </div>

              {/* Clean 3D Switcher Bar between Notebook & Calendar Example Layouts */}
              <div className="flex flex-wrap items-center gap-2 border-t border-[#D6B272]/20 bg-[#101014] px-4 py-3">
                <button
                  type="button"
                  onClick={() => {
                    setLayoutImgFailed(false);
                    setShowcaseMode('notebooks');
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs font-bold whitespace-nowrap cursor-pointer ${
                    showcaseMode === 'notebooks' ? 'btn-3d-gold' : 'btn-3d-obsidian'
                  }`}
                >
                  Notebooks Layout
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLayoutImgFailed(false);
                    setShowcaseMode('desk-calendar');
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs font-bold whitespace-nowrap cursor-pointer ${
                    showcaseMode === 'desk-calendar' ? 'btn-3d-gold' : 'btn-3d-obsidian'
                  }`}
                >
                  2026 Desk Calendar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLayoutImgFailed(false);
                    setShowcaseMode('nature-calendar');
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs font-bold whitespace-nowrap cursor-pointer ${
                    showcaseMode === 'nature-calendar' ? 'btn-3d-gold' : 'btn-3d-obsidian'
                  }`}
                >
                  Nature Wall Calendars
                </button>
              </div>
            </div>

            {/* Right: Interactive Level, Size (A3 / A4 / A5) & Custom Front Layout Explorer */}
            <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-3d-gold uppercase">
                  Layout &amp; Sizing Studio
                </p>
                <h3 className="mt-2.5 font-serif text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-tight text-3d-ivory text-balance">
                  Kindergarten to College · A3, A4 &amp; A5 Sizes
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B8AF9E]">
                  Choose your preferred paper size (<strong className="text-[#F5EFE6]">A3</strong>,{' '}
                  <strong className="text-[#F5EFE6]">A4</strong>, or{' '}
                  <strong className="text-[#F5EFE6]">A5</strong>) for both{' '}
                  <strong className="text-[#F5EFE6]">Customized Calendars</strong> and{' '}
                  <strong className="text-[#F5EFE6]">Notebooks</strong>, and customize
                  your front cover with your own photo or one of our curated school
                  styles.
                </p>

                {/* Interactive Size Picker (A3 / A4 / A5) */}
                <div className="mt-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-3d-gold uppercase">
                      <Ruler className="h-3.5 w-3.5 text-[#D6B272]" />
                      Select Format Size
                    </span>
                    <span className="text-xs text-[#B8AF9E] tabular-nums">
                      {activeSizeInfo.dimensions}
                    </span>
                  </div>

                  <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                    {PAPER_SIZES.map((item) => {
                      const active = previewSize === item.size;
                      return (
                        <button
                          key={item.size}
                          type="button"
                          onClick={() => setPreviewSize(item.size)}
                          className={`rounded-md px-3 py-2.5 text-xs font-bold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272] ${
                            active ? 'btn-3d-gold' : 'btn-3d-obsidian'
                          }`}
                        >
                          {item.size} Size
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-2 text-xs text-[#B8AF9E]">
                    {activeSizeInfo.recommendedFor}
                  </p>
                </div>

                {/* School Level / Cover Guide Switcher */}
                <div className="mt-6 border-t border-[#D6B272]/15 pt-5">
                  <span className="block text-xs font-semibold tracking-wider text-3d-gold uppercase">
                    Preview School &amp; Cover Layout
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {SCHOOL_LAYOUT_GUIDES.map((guide) => {
                      const active = guide.id === activeGuide.id;
                      return (
                        <button
                          key={guide.id}
                          type="button"
                          onClick={() => {
                            setActiveGuideId(guide.id);
                            setPreviewSize(guide.defaultSize);
                          }}
                          className={`rounded-md px-3.5 py-2 text-xs font-bold whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272] ${
                            active ? 'btn-3d-gold' : 'btn-3d-obsidian'
                          }`}
                        >
                          {guide.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Guide Specification Card */}
                  <div className="mt-4 grid grid-cols-1 gap-4 rounded-lg border border-[#D6B272]/25 bg-[#19191E] p-4 sm:grid-cols-12">
                    <div className="overflow-hidden rounded-md border border-[#D6B272]/20 bg-[#0A0A0C] sm:col-span-5">
                      <img
                        src={activeGuide.coverImage}
                        alt={activeGuide.coverAlt}
                        referrerPolicy="no-referrer"
                        className="h-44 w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col justify-between sm:col-span-7">
                      <div>
                        <p className="text-xs font-semibold text-[#D6B272]">
                          {activeGuide.rulingSpec}
                        </p>
                        <h4 className="mt-1 font-serif text-xl font-bold text-3d-ivory">
                          {activeGuide.edition}
                        </h4>
                        <ul className="mt-2.5 space-y-1.5 text-xs text-[#B8AF9E]">
                          {activeGuide.insideHighlights.map((line) => (
                            <li key={line} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D6B272]" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons to Order Selected Size & Custom Front */}
              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#D6B272]/15 pt-5">
                <button
                  type="button"
                  onClick={() =>
                    onSelectService('Notebooks', {
                      notebookEdition: activeGuide.edition,
                      size: previewSize,
                      frontDesign: activeGuide.frontDesign,
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-xs font-bold btn-3d-gold whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C88E]"
                >
                  Customize {previewSize} Notebook
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onSelectService('Customized Calendars', {
                      size: previewSize,
                      frontDesign: 'Your Custom Photo / Artwork',
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-xs font-bold btn-3d-obsidian whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272]"
                >
                  Customize {previewSize} Calendar
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#D6B272]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Spotlight: Creative Books & Planners Collection */}
        <div className="mt-12 overflow-hidden rounded-xl frame-3d bg-[#131316]">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            {/* Highlighted Photo Frame */}
            <div className="relative bg-[#19191E] lg:col-span-5">
              {!highlightFailed ? (
                <img
                  src={BRAND_INFO.creativeBooksImage}
                  alt="Creative Books and Planners Collection featuring School Notebook, Coloring Drawing Book, and Diary Book"
                  referrerPolicy="no-referrer"
                  onError={() => setHighlightFailed(true)}
                  className="h-full w-full object-cover object-center lg:min-h-[460px]"
                />
              ) : (
                <div className="flex h-full min-h-[340px] flex-col items-center justify-center p-8 text-center">
                  <BookOpen className="h-8 w-8 text-[#D6B272]" />
                  <span className="mt-2 font-serif text-2xl text-3d-ivory">
                    Creative Books &amp; Planners Collection
                  </span>
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0A0C]/90 via-[#0A0A0C]/35 to-transparent px-6 py-4">
                <p className="text-xs font-medium tracking-wider text-[#EBD097] uppercase">
                  Highlighted Showcase · School, Art, Diary &amp; Drawing Books
                </p>
              </div>
            </div>

            {/* Right Column: Complete Book Editions Grid */}
            <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-7">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-3d-gold uppercase">
                  All School Levels &amp; Specialty Books
                </p>
                <h3 className="mt-2.5 font-serif text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-tight text-3d-ivory text-balance">
                  Kindergarten to College, Art, Diary &amp; Drawing Books
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B8AF9E]">
                  Pick your size (<strong className="text-[#F5EFE6]">A3, A4, or A5</strong>)
                  and customize your front cover design for any edition below:
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {NOTEBOOK_EDITIONS.map((edition) => (
                    <button
                      key={edition.id}
                      type="button"
                      onClick={() =>
                        onSelectService('Notebooks', {
                          notebookEdition: edition.title,
                          size: previewSize,
                        })
                      }
                      className="group flex flex-col justify-between rounded-lg border border-[#D6B272]/25 bg-[#19191E] p-3.5 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[#D6B272]/60 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272]"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-3d-gold tabular-nums">
                            {edition.index}.
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-[#B8AF9E] transition-colors group-hover:text-[#D6B272]" />
                        </div>
                        <h4 className="mt-1 font-serif text-lg font-bold text-3d-ivory">
                          {edition.title}
                        </h4>
                        <p className="mt-0.5 text-[11px] font-medium text-[#D6B272]">
                          {edition.audience}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#B8AF9E]">
                          {edition.insideDetail}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
