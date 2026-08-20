import React from "react";
import { PricingSection } from "../components/sections/PricingSection";
import { SEOHead } from "../components/ui/SEOHead";

interface PricingPageProps {
  openAuditModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ openAuditModal }) => {
  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title="Pricing & Investment Packages | AI AUTOMATION NY"
        description="Transparent investment packages for AI-Powered Growth Systems: AI Business Starter ($2,500), AI Business Growth ($5,000), AI Business Pro ($8,500), and AI Business Elite ($15,000+)."
        canonicalUrl="https://aiautomationny.com/pricing"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Pricing", url: "https://aiautomationny.com/pricing" }
        ]}
      />
      <PricingSection openAuditModal={openAuditModal} />
    </main>
  );
};
