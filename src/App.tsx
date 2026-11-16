import { useState } from 'react';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InquirySection } from './components/InquirySection';
import { LightboxModal } from './components/LightboxModal';
import { Navbar } from './components/Navbar';
import { SampleWorksSection } from './components/SampleWorksSection';
import { ServicesSection } from './components/ServicesSection';
import {
  SAMPLE_WORKS,
  type FrontDesignOption,
  type NotebookEditionType,
  type PaperSize,
  type SampleWork,
  type ServiceCategory,
} from './data/catalog';

export default function App() {
  const [selectedService, setSelectedService] =
    useState<ServiceCategory>('Notebooks');
  const [selectedNotebookEdition, setSelectedNotebookEdition] =
    useState<NotebookEditionType>('Kindergarten Notebook (Blue & Red Line)');
  const [selectedSize, setSelectedSize] = useState<PaperSize>('A4');
  const [selectedFrontDesign, setSelectedFrontDesign] =
    useState<FrontDesignOption>('Your Custom Photo / Artwork');
  const [lightboxWork, setLightboxWork] = useState<SampleWork | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceAndScroll = (
    service: ServiceCategory,
    options?: {
      notebookEdition?: NotebookEditionType;
      size?: PaperSize;
      frontDesign?: FrontDesignOption;
    }
  ) => {
    setSelectedService(service);
    if (options?.notebookEdition) {
      setSelectedNotebookEdition(options.notebookEdition);
    }
    if (options?.size) {
      setSelectedSize(options.size);
    }
    if (options?.frontDesign) {
      setSelectedFrontDesign(options.frontDesign);
    }
    scrollToSection('inquire');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F5EFE6]">
      <Navbar onNavigate={scrollToSection} />

      <main>
        {/* 1st Page: Luxury Branding Hero with "When Cuteness and Creativity Meets" */}
        <HeroSection
          onSelectServiceAndScroll={(service) =>
            handleSelectServiceAndScroll(service)
          }
          onScrollToWorks={() => scrollToSection('sample-works')}
        />

        {/* Services Page: Calendars, Stickers, Kindergarten-to-College Notebooks (A3/A4/A5), Keychains */}
        <ServicesSection onSelectService={handleSelectServiceAndScroll} />

        {/* Inquiry Page: Facebook & Email Photo Submission */}
        <InquirySection
          selectedService={selectedService}
          onChangeService={setSelectedService}
          selectedNotebookEdition={selectedNotebookEdition}
          onChangeNotebookEdition={setSelectedNotebookEdition}
          selectedSize={selectedSize}
          onChangeSize={setSelectedSize}
          selectedFrontDesign={selectedFrontDesign}
          onChangeFrontDesign={setSelectedFrontDesign}
        />

        {/* Last Page: Sample Works Gallery */}
        <SampleWorksSection onOpenLightbox={setLightboxWork} />
      </main>

      <Footer />

      <LightboxModal
        work={lightboxWork}
        works={SAMPLE_WORKS}
        onClose={() => setLightboxWork(null)}
        onNavigate={setLightboxWork}
      />
    </div>
  );
}
