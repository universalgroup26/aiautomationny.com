import React, { useState, useEffect, lazy, Suspense } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingActions } from "./components/ui/FloatingActions";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { BrandLoadingScreen } from "./components/ui/BrandLoadingScreen";
import { ToastNotification, ToastMessage } from "./components/ui/ToastNotification";
import { ThemeProvider } from "./context/ThemeContext";
import { trackPageView } from "./lib/dataLayer";

// Lazy-loaded pages for optimal page performance and initial load speeds
const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const ServicesOverviewPage = lazy(() => import("./pages/ServicesOverviewPage").then((m) => ({ default: m.ServicesOverviewPage })));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage").then((m) => ({ default: m.ServiceDetailPage })));
const IndustriesOverviewPage = lazy(() => import("./pages/IndustriesOverviewPage").then((m) => ({ default: m.IndustriesOverviewPage })));
const IndustryDetailPage = lazy(() => import("./pages/IndustryDetailPage").then((m) => ({ default: m.IndustryDetailPage })));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage").then((m) => ({ default: m.HowItWorksPage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then((m) => ({ default: m.PricingPage })));
const ResultsPage = lazy(() => import("./pages/ResultsPage").then((m) => ({ default: m.ResultsPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const BookDemoPage = lazy(() => import("./pages/BookDemoPage").then((m) => ({ default: m.BookDemoPage })));
const BrandAssetsPage = lazy(() => import("./pages/BrandAssetsPage").then((m) => ({ default: m.BrandAssetsPage })));

// Lazy-loaded interactive modals & widgets
const AuditModal = lazy(() => import("./components/forms/AuditModal").then((m) => ({ default: m.AuditModal })));
const ContactModal = lazy(() => import("./components/forms/ContactModal").then((m) => ({ default: m.ContactModal })));
const LanguagePreferenceModal = lazy(() => import("./components/ui/LanguagePreferenceModal").then((m) => ({ default: m.LanguagePreferenceModal })));
const BrandAssetsModal = lazy(() => import("./components/modals/BrandAssetsModal").then((m) => ({ default: m.BrandAssetsModal })));
const SystemProposalConfigurator = lazy(() => import("./components/modals/SystemProposalConfigurator").then((m) => ({ default: m.SystemProposalConfigurator })));
const IdleSessionDetector = lazy(() => import("./components/ui/IdleSessionDetector").then((m) => ({ default: m.IdleSessionDetector })));

// Fallback loader for smooth route transitions and optimized LCP/FID metrics
const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center" aria-label="Loading page content">
    <div className="relative w-12 h-12 mb-4">
      <div className="absolute inset-0 rounded-full border-2 border-[#176BFF]/20 animate-ping" />
      <div className="absolute inset-0 rounded-full border-2 border-t-[#00C2FF] border-r-transparent border-b-[#70D44B] border-l-transparent animate-spin" />
    </div>
    <span className="text-xs font-heading font-semibold uppercase tracking-widest text-[#00C2FF]">Loading AI AUTOMATION NY...</span>
  </div>
);

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || "/");
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBrandAssetsModalOpen, setIsBrandAssetsModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  
  // Brand Loading Screen State (Initial load or re-triggered)
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isManualLoadingScreen, setIsManualLoadingScreen] = useState(false);

  useEffect(() => {
    trackPageView(currentPath);

    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      trackPageView(path);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [currentPath]);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAuditModal = () => setIsAuditModalOpen(true);
  const closeAuditModal = () => setIsAuditModalOpen(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openBrandAssetsModal = () => setIsBrandAssetsModalOpen(true);
  const closeBrandAssetsModal = () => setIsBrandAssetsModalOpen(false);

  const openLanguageModal = () => setIsLanguageModalOpen(true);
  const closeLanguageModal = () => setIsLanguageModalOpen(false);

  const openProposalModal = () => setIsProposalModalOpen(true);
  const closeProposalModal = () => setIsProposalModalOpen(false);

  const handleInitialLoadingComplete = () => {
    setIsInitialLoading(false);
    // After first screen load, check if language preference prompt has been seen
    const languagePromptSeen = localStorage.getItem("user_language_prompt_seen");
    if (!languagePromptSeen) {
      setTimeout(() => {
        setIsLanguageModalOpen(true);
      }, 1200);
    }
  };

  const triggerLoadingScreen = () => {
    setIsBrandAssetsModalOpen(false);
    setIsManualLoadingScreen(true);
  };

  // Router logic matching path
  const renderContent = () => {
    if (currentPath === "/" || currentPath === "") {
      return <HomePage navigate={navigate} openAuditModal={openAuditModal} openProposalModal={openProposalModal} />;
    }
    if (currentPath === "/services") {
      return <ServicesOverviewPage navigate={navigate} openAuditModal={openAuditModal} />;
    }
    if (currentPath.startsWith("/services/")) {
      const slug = currentPath.replace("/services/", "");
      return <ServiceDetailPage slug={slug} navigate={navigate} openAuditModal={openAuditModal} />;
    }
    if (currentPath === "/industries") {
      return <IndustriesOverviewPage navigate={navigate} openAuditModal={openAuditModal} />;
    }
    if (currentPath.startsWith("/industries/")) {
      const slug = currentPath.replace("/industries/", "");
      return <IndustryDetailPage slug={slug} navigate={navigate} openAuditModal={openAuditModal} />;
    }
    if (currentPath === "/how-it-works") {
      return <HowItWorksPage openAuditModal={openAuditModal} />;
    }
    if (currentPath === "/pricing") {
      return <PricingPage openAuditModal={openAuditModal} />;
    }
    if (currentPath === "/results") {
      return <ResultsPage openAuditModal={openAuditModal} />;
    }
    if (currentPath === "/about") {
      return <AboutPage openAuditModal={openAuditModal} />;
    }
    if (currentPath === "/contact") {
      return <ContactPage />;
    }
    if (currentPath === "/book-demo") {
      return <BookDemoPage />;
    }
    if (currentPath === "/brand-assets") {
      return (
        <BrandAssetsPage
          openAuditModal={openAuditModal}
          openBrandAssetsModal={openBrandAssetsModal}
          onTriggerLoadingScreen={triggerLoadingScreen}
        />
      );
    }
    return <HomePage navigate={navigate} openAuditModal={openAuditModal} openProposalModal={openProposalModal} />;
  };

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#07152D] text-[#F7F9FC] flex flex-col font-sans selection:bg-[#00C2FF] selection:text-[#07152D]">
        <ScrollProgressBar />
        
        {/* Brand Tagline Loading Screen (On App Initial Load) */}
        {isInitialLoading && (
          <BrandLoadingScreen
            durationMs={2600}
            autoDismiss={true}
            onComplete={handleInitialLoadingComplete}
          />
        )}

        {/* Brand Tagline Loading Screen (When Re-triggered on demand) */}
        {isManualLoadingScreen && (
          <BrandLoadingScreen
            durationMs={3200}
            autoDismiss={true}
            onComplete={() => setIsManualLoadingScreen(false)}
          />
        )}

        <Navbar
          currentPath={currentPath}
          navigate={navigate}
          openAuditModal={openAuditModal}
          openProposalModal={openProposalModal}
          openBrandAssetsModal={openBrandAssetsModal}
        />
        
        <div className="flex-1">
          <Suspense fallback={<PageLoadingFallback />}>
            {renderContent()}
          </Suspense>
        </div>

        <Footer
          navigate={navigate}
          openAuditModal={openAuditModal}
          openBrandAssetsModal={openBrandAssetsModal}
        />

        <FloatingActions 
          openAuditModal={openAuditModal} 
          openProposalModal={openProposalModal}
          navigate={navigate} 
        />
        
        <Suspense fallback={null}>
          <IdleSessionDetector
            idleTimeoutMs={45000}
            openContactModal={openContactModal}
            openAuditModal={openAuditModal}
            navigate={navigate}
          />
        </Suspense>

        <ToastNotification toasts={toasts} onDismiss={dismissToast} />

        <Suspense fallback={null}>
          {isAuditModalOpen && <AuditModal isOpen={isAuditModalOpen} onClose={closeAuditModal} />}
          {isContactModalOpen && <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />}
          {isProposalModalOpen && (
            <SystemProposalConfigurator 
              isOpen={isProposalModalOpen} 
              onClose={closeProposalModal} 
              openAuditModal={openAuditModal} 
            />
          )}
          {isLanguageModalOpen && (
            <LanguagePreferenceModal
              isOpen={isLanguageModalOpen}
              onClose={closeLanguageModal}
              onSelectLanguage={(lang) => {
                setToasts((prev) => [
                  ...prev,
                  {
                    id: String(Date.now()),
                    type: "success",
                    title: `Language Preference: ${lang.name} ${lang.flag}`,
                    message: `${lang.greeting}. All automated responses updated to ${lang.nativeName}.`,
                  },
                ]);
              }}
            />
          )}
          {isBrandAssetsModalOpen && (
            <BrandAssetsModal
              isOpen={isBrandAssetsModalOpen}
              onClose={closeBrandAssetsModal}
              onTriggerLoadingScreen={triggerLoadingScreen}
            />
          )}
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
