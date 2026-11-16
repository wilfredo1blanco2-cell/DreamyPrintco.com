import { useState, type ChangeEvent } from 'react';
import { Check, Copy, ExternalLink, ImagePlus, Mail, MessageCircle, X } from 'lucide-react';
import {
  BRAND_INFO,
  FRONT_DESIGN_OPTIONS,
  NOTEBOOK_EDITIONS,
  PAPER_SIZES,
  SERVICES,
  type FrontDesignOption,
  type NotebookEditionType,
  type PaperSize,
  type ServiceCategory,
} from '../data/catalog';

interface InquirySectionProps {
  selectedService: ServiceCategory;
  onChangeService: (service: ServiceCategory) => void;
  selectedNotebookEdition: NotebookEditionType;
  onChangeNotebookEdition: (edition: NotebookEditionType) => void;
  selectedSize: PaperSize;
  onChangeSize: (size: PaperSize) => void;
  selectedFrontDesign: FrontDesignOption;
  onChangeFrontDesign: (design: FrontDesignOption) => void;
}

export function InquirySection({
  selectedService,
  onChangeService,
  selectedNotebookEdition,
  onChangeNotebookEdition,
  selectedSize,
  onChangeSize,
  selectedFrontDesign,
  onChangeFrontDesign,
}: InquirySectionProps) {
  const [customerName, setCustomerName] = useState('');
  const [frontTitleText, setFrontTitleText] = useState('');
  const [notes, setNotes] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState<{
    name: string;
    url: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const supportsSizing =
    selectedService === 'Notebooks' || selectedService === 'Customized Calendars';

  const handlePhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewPhoto((prev) => {
      if (prev) URL.revokeObjectURL(prev.url);
      return { name: file.name, url };
    });
  };

  const clearPhoto = () => {
    if (previewPhoto) {
      URL.revokeObjectURL(previewPhoto.url);
    }
    setPreviewPhoto(null);
  };

  const formattedMessage = [
    `Hello ${BRAND_INFO.name}!`,
    customerName.trim() ? `Name: ${customerName.trim()}` : null,
    `Service Requested: ${selectedService}`,
    selectedService === 'Notebooks'
      ? `Book Edition / Level: ${selectedNotebookEdition}`
      : null,
    supportsSizing ? `Preferred Size: ${selectedSize}` : null,
    supportsSizing ? `Front Cover Design: ${selectedFrontDesign}` : null,
    supportsSizing && frontTitleText.trim()
      ? `Custom Front Cover Text / Name: ${frontTitleText.trim()}`
      : null,
    notes.trim()
      ? `Customization Details: ${notes.trim()}`
      : 'Customization Details: I would like to inquire and send my customized photo.',
    previewPhoto ? `Photo Ready to Attach: ${previewPhoto.name}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const mailtoHref = `mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
    `${selectedService}${supportsSizing ? ` (${selectedSize})` : ''} Inquiry — ${
      BRAND_INFO.name
    }`
  )}&body=${encodeURIComponent(
    `${formattedMessage}\n\n(Please attach your customized photo before sending.)`
  )}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleFacebookClick = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopiedMessage(true);
      window.setTimeout(() => setCopiedMessage(false), 3000);
    } catch {
      // Proceed cleanly to Facebook tab
    }
  };

  return (
    <section
      id="inquire"
      className="border-b border-[#D6B272]/20 bg-[#0A0A0C] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Clear Instructions & Direct Channels */}
          <div className="flex flex-col justify-between rounded-xl card-3d p-8 lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-3d-gold uppercase">
                Custom Order &amp; Photo Submission
              </p>
              <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.1vw,2.6rem)] font-bold leading-tight text-3d-ivory text-balance">
                Send Your Customized Photo &amp; Inquiry
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#B8AF9E]">
                Choose your product, size (A3, A4, or A5), school level, and custom
                front design, then send your customized photo directly through our
                Facebook page or via email.
              </p>

              {/* Step-by-step clean editorial list */}
              <ol className="mt-8 space-y-4 border-t border-[#D6B272]/15 pt-6 text-sm text-[#B8AF9E]">
                <li className="flex gap-3">
                  <span className="font-bold text-3d-gold tabular-nums">01.</span>
                  <span>
                    Select customized calendars, stickers, notebooks (Kindergarten
                    to College, Art, Diary, Drawing), or keychains.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-3d-gold tabular-nums">02.</span>
                  <span>
                    Pick your format size (A3, A4, or A5) and customize your front
                    cover title or theme.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-3d-gold tabular-nums">03.</span>
                  <span>
                    Click Facebook or Email below to send your customized photo
                    directly to us.
                  </span>
                </li>
              </ol>
            </div>

            {/* Direct Contact Details Box */}
            <div className="mt-8 space-y-3 border-t border-[#D6B272]/15 pt-6">
              <div className="flex items-center justify-between gap-3 rounded-lg border border-[#D6B272]/25 bg-[#19191E] px-4 py-3">
                <div className="min-w-0">
                  <p className="text-xs text-[#B8AF9E]">Direct Email</p>
                  <p className="truncate text-sm font-medium text-[#F5EFE6]">
                    {BRAND_INFO.email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-xs font-semibold btn-3d-obsidian whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#D6B272]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#D6B272]" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-lg border border-[#D6B272]/25 bg-[#19191E] px-4 py-3 transition-colors hover:border-[#D6B272]/60"
              >
                <div className="min-w-0">
                  <p className="text-xs text-[#B8AF9E]">Facebook Page</p>
                  <p className="truncate text-sm font-medium text-[#F5EFE6]">
                    Meika Sultan · Dreamy Prints Co.
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-[#D6B272]" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry & Photo Prep Form */}
          <div className="flex flex-col justify-between rounded-xl card-3d p-8 lg:col-span-7">
            <div className="space-y-6">
              {/* 3D Service Segmented Buttons */}
              <div>
                <label className="block text-xs font-semibold tracking-wider text-3d-gold uppercase">
                  Select Service
                </label>
                <div className="mt-2.5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {SERVICES.map((service) => {
                    const active = selectedService === service.title;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => onChangeService(service.title)}
                        className={`rounded-md px-3 py-2.5 text-xs font-bold whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272] ${
                          active ? 'btn-3d-gold' : 'btn-3d-obsidian'
                        }`}
                      >
                        {service.shortLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notebook & School Level Selector when Notebooks is active */}
              {selectedService === 'Notebooks' && (
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-3d-gold uppercase">
                    Select School Level / Book Edition
                  </label>
                  <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {NOTEBOOK_EDITIONS.map((edition) => {
                      const active = selectedNotebookEdition === edition.title;
                      return (
                        <button
                          key={edition.id}
                          type="button"
                          onClick={() => onChangeNotebookEdition(edition.title)}
                          className={`rounded-md px-3.5 py-2.5 text-left text-xs font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272] ${
                            active ? 'btn-3d-gold' : 'btn-3d-obsidian'
                          }`}
                        >
                          {edition.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Size (A3 / A4 / A5) & Custom Front Design Controls for Calendars & Notebooks */}
              {supportsSizing && (
                <div className="grid grid-cols-1 gap-5 rounded-lg border border-[#D6B272]/20 bg-[#19191E]/75 p-4 sm:grid-cols-12">
                  <div className="sm:col-span-5">
                    <span className="block text-xs font-semibold tracking-wider text-3d-gold uppercase">
                      Size (A3 · A4 · A5)
                    </span>
                    <div className="mt-2.5 grid grid-cols-3 gap-2">
                      {PAPER_SIZES.map((item) => {
                        const active = selectedSize === item.size;
                        return (
                          <button
                            key={item.size}
                            type="button"
                            onClick={() => onChangeSize(item.size)}
                            className={`rounded-md py-2 text-xs font-bold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272] ${
                              active ? 'btn-3d-gold' : 'btn-3d-obsidian'
                            }`}
                          >
                            {item.size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="sm:col-span-7">
                    <label
                      htmlFor="front-design-select"
                      className="block text-xs font-semibold tracking-wider text-3d-gold uppercase"
                    >
                      Custom Front Cover Design
                    </label>
                    <select
                      id="front-design-select"
                      value={selectedFrontDesign}
                      onChange={(e) =>
                        onChangeFrontDesign(e.target.value as FrontDesignOption)
                      }
                      className="mt-2.5 w-full rounded-md border border-[#D6B272]/30 bg-[#131316] px-3.5 py-2.5 text-xs font-medium text-[#F5EFE6] focus:border-[#D6B272] focus:outline-none focus:ring-1 focus:ring-[#D6B272]"
                    >
                      {FRONT_DESIGN_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-12">
                    <label
                      htmlFor="front-cover-title"
                      className="block text-xs font-semibold tracking-wider text-3d-gold uppercase"
                    >
                      Front Cover Name / Custom Title (Optional)
                    </label>
                    <input
                      id="front-cover-title"
                      type="text"
                      value={frontTitleText}
                      onChange={(e) => setFrontTitleText(e.target.value)}
                      placeholder="e.g., Student Name, Subject, Family Name, or 2026 Calendar Header"
                      className="mt-2 w-full rounded-md border border-[#D6B272]/25 bg-[#131316] px-3.5 py-2.5 text-sm text-[#F5EFE6] placeholder:text-[#B8AF9E]/50 focus:border-[#D6B272] focus:outline-none focus:ring-1 focus:ring-[#D6B272]"
                    />
                  </div>
                </div>
              )}

              {/* Customer Name */}
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block text-xs font-semibold tracking-wider text-3d-gold uppercase"
                >
                  Your Name
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-md border border-[#D6B272]/25 bg-[#19191E] px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AF9E]/50 focus:border-[#D6B272] focus:outline-none focus:ring-1 focus:ring-[#D6B272]"
                />
              </div>

              {/* Design Notes */}
              <div>
                <label
                  htmlFor="inquiry-notes"
                  className="block text-xs font-semibold tracking-wider text-3d-gold uppercase"
                >
                  Customization Notes
                </label>
                <textarea
                  id="inquiry-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    selectedService === 'Notebooks'
                      ? `Describe your ${selectedNotebookEdition.toLowerCase()} (${selectedSize}) cover photo, inside ruling, and quantity...`
                      : `Describe your ${selectedService.toLowerCase()} theme, size, quantity, or text you'd like printed...`
                  }
                  className="mt-2 w-full rounded-md border border-[#D6B272]/25 bg-[#19191E] px-4 py-3 text-sm text-[#F5EFE6] placeholder:text-[#B8AF9E]/50 focus:border-[#D6B272] focus:outline-none focus:ring-1 focus:ring-[#D6B272]"
                />
              </div>

              {/* Local Photo Preview Helper */}
              <div>
                <span className="block text-xs font-semibold tracking-wider text-3d-gold uppercase">
                  Preview Your Photo Before Sending (Optional)
                </span>
                {!previewPhoto ? (
                  <label className="mt-2 flex cursor-pointer items-center justify-between gap-4 rounded-md border border-dashed border-[#D6B272]/35 bg-[#19191E]/70 px-4 py-4 transition-colors hover:border-[#D6B272] hover:bg-[#19191E]">
                    <div className="flex items-center gap-3">
                      <ImagePlus className="h-5 w-5 text-[#D6B272] shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-[#F5EFE6]">
                          Choose a customized photo from your device
                        </p>
                        <p className="text-xs text-[#B8AF9E]">
                          Preview it here, then attach it in Facebook Messenger or
                          your email client
                        </p>
                      </div>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoSelect}
                      className="sr-only"
                    />
                  </label>
                ) : (
                  <div className="mt-2 flex items-center justify-between gap-4 rounded-md border border-[#D6B272]/30 bg-[#19191E] p-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={previewPhoto.url}
                        alt="Selected customized upload preview"
                        className="h-14 w-14 rounded object-cover border border-[#D6B272]/25 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-[#F5EFE6]">
                          {previewPhoto.name}
                        </p>
                        <p className="text-xs text-[#B8AF9E]">
                          Ready — attach this file when your Facebook chat or email
                          opens
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={clearPhoto}
                      aria-label="Remove preview photo"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#B8AF9E] hover:bg-[#131316] hover:text-[#F5EFE6] cursor-pointer shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons: Classy 3D Facebook & Email */}
            <div className="mt-8 border-t border-[#D6B272]/15 pt-6">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleFacebookClick}
                  className="inline-flex items-center justify-center gap-2.5 rounded-md px-5 py-3.5 text-sm font-bold btn-3d-gold whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C88E]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send Inquiry to Facebook
                </a>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-md px-5 py-3.5 text-sm font-semibold btn-3d-obsidian whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B272]"
                >
                  <Mail className="h-4 w-4 text-[#D6B272]" />
                  Email {BRAND_INFO.email}
                </a>
              </div>

              {copiedMessage && (
                <p className="mt-3 text-xs text-[#D6B272]" role="status">
                  Your inquiry details were copied to your clipboard—paste them in
                  Facebook Messenger and attach your photo.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
