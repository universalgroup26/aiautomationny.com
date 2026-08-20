export interface ServiceItem {
  slug: string;
  name: string;
  shortDescription: string;
  category: "communication" | "conversion" | "growth" | "operations";
  headline: string;
  subheadline: string;
  iconName: string;
  outcome: string;
  painPoints: string[];
  workflowSteps: {
    title: string;
    description: string;
    nodeType: string;
  }[];
  journeyMindMap: {
    start: string;
    branches: {
      condition: string;
      steps: string[];
    }[];
  };
  keyFeatures: {
    title: string;
    description: string;
  }[];
  industryUseCases: {
    industry: string;
    useCase: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServicesSlugs: string[];
}

export interface IndustryCategory {
  id: string;
  name: string;
  description: string;
  industries: IndustryItem[];
}

export interface IndustryItem {
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  headline: string;
  subheadline: string;
  painPoints: string[];
  customerJourney: {
    step: string;
    traditionalProblem: string;
    aiSolution: string;
  }[];
  recommendedAutomationStack: string[];
  voiceUseCase: string;
  chatUseCase: string;
  crmUseCase: string;
  followUpUseCase: string;
  appointmentUseCase: string;
  reviewUseCase: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface PricingTier {
  id: string;
  name: string;
  popular?: boolean;
  setupFee: string;
  monthlyFee: string;
  tagline: string;
  description: string;
  idealFor: string;
  features: string[];
  ctaText: string;
}

export interface AuditFormData {
  businessName: string;
  industry: string;
  leadVolume: string;
  currentChallenge: string;
  name: string;
  email: string;
  phone: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}
