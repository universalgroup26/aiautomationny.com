import React from "react";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { JourneyInfographic } from "../components/diagrams/JourneyInfographic";
import { SEOHead } from "../components/ui/SEOHead";

interface HowItWorksPageProps {
  openAuditModal: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ openAuditModal }) => {
  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title="How We Build Your AI System | AI AUTOMATION NY"
        description="Learn about our 4-stage 10-14 day implementation process: Audit, System Design, Build & API Integration, Launch & Continuous Optimization."
        canonicalUrl="https://aiautomationny.com/how-it-works"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "How It Works", url: "https://aiautomationny.com/how-it-works" }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <JourneyInfographic />
      </div>
      <HowItWorksSection openAuditModal={openAuditModal} />
    </main>
  );
};

