import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, MessageCircle, X } from 'lucide-react';
import { BRAND_INFO, type SampleWork } from '../data/catalog';

interface LightboxModalProps {
  work: SampleWork | null;
  works: SampleWork[];
  onClose: () => void;
  onNavigate: (work: SampleWork) => void;
}

export function LightboxModal({
  work,
  works,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (!work) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const idx = works.findIndex((item) => item.id === work.id);
        const next = works[(idx + 1) % works.length];
        if (next) onNavigate(next);
      } else if (e.key === 'ArrowLeft') {
        const idx = works.findIndex((item) => item.id === work.id);
        const prev = works[(idx - 1 + works.length) % works.length];
        if (prev) onNavigate(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [work, works, onClose, onNavigate]);

  if (!work) return null;

  const currentIdx = works.findIndex((item) => item.id === work.id);
  const handlePrev = () => {
    const prev = works[(currentIdx - 1 + works.length) % works.length];
    if (prev) onNavigate(prev);
  };
  const handleNext = () => {
    const next = works[(currentIdx + 1) % works.length];
    if (next) onNavigate(next);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0C]/92 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl frame-3d bg-[#131316]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-[#D6B272]/15 px-5 py-3.5">
          <div className="flex items-center gap-2 text-xs text-[#B8AF9E] min-w-0">
            <span className="font-bold text-3d-gold tabular-nums">
              {String(currentIdx + 1).padStart(2, '0')} /{' '}
              {String(works.length).padStart(2, '0')}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{work.category}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate hidden sm:inline">{work.medium}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sample viewer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md btn-3d-obsidian cursor-pointer shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Full Image Frame */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#0A0A0C] p-4 sm:p-6">
          <img
            src={work.image}
            alt={work.title}
            referrerPolicy="no-referrer"
            className="max-h-[58vh] w-auto rounded-lg object-contain"
          />

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous sample work"
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-md btn-3d-obsidian cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next sample work"
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-md btn-3d-obsidian cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Bottom Caption & Quick 3D Inquiry Buttons */}
        <div className="flex flex-col gap-4 border-t border-[#D6B272]/15 bg-[#131316] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold text-3d-ivory">
              {work.title}
            </h3>
            <p className="mt-1 text-xs text-[#B8AF9E]">{work.description}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BRAND_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-bold btn-3d-gold whitespace-nowrap"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Order via Facebook
            </a>
            <a
              href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
                `Inquiry: ${work.title} — ${BRAND_INFO.name}`
              )}`}
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold btn-3d-obsidian whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5 text-[#D6B272]" />
              Email Photo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
