// Global Data Layer & Analytics Tracking Utility for GTM, Google Analytics 4, & Meta Pixel

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Helper to determine user page category based on path
 */
function getPageCategory(path: string): string {
  if (path === "/" || path === "") return "Home";
  if (path.startsWith("/services")) return "Services";
  if (path.startsWith("/industries")) return "Industries";
  if (path === "/how-it-works") return "How It Works";
  if (path === "/pricing") return "Pricing & ROI";
  if (path === "/results") return "Case Studies & Results";
  if (path === "/about") return "About & Agency";
  if (path === "/contact") return "Contact";
  if (path === "/book-demo") return "Book Demo";
  if (path === "/brand-assets") return "Brand Assets";
  return "General";
}

/**
 * Base push function to window.dataLayer & Meta Pixel / GA4
 */
export function pushDataLayerEvent(eventName: string, eventParams: Record<string, any> = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      page_location: window.location.href,
      page_title: document.title,
      ...eventParams,
    };

    window.dataLayer.push(payload);

    // If gtag exists, trigger GA4 event
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }

    // If Meta Pixel fbq exists, track custom event
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, eventParams);
    }

    if (process.env.NODE_ENV !== "production") {
      console.log(`[DataLayer Event] ${eventName}:`, payload);
    }
  } catch (err) {
    console.error("[DataLayer Error]", err);
  }
}

/**
 * Track SPA Page View for every webpage change
 */
export function trackPageView(path: string, customTitle?: string) {
  try {
    const pageCategory = getPageCategory(path);
    const pageTitle = customTitle || document.title || `AI AUTOMATION NY - ${pageCategory}`;

    // Push standard page_view event to dataLayer
    pushDataLayerEvent("page_view", {
      page_path: path,
      page_title: pageTitle,
      page_category: pageCategory,
      referrer: document.referrer || "direct",
      screen_resolution: `${window.innerWidth}x${window.innerHeight}`,
    });

    // Fire Meta Pixel PageView
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  } catch (err) {
    console.error("[DataLayer PageView Error]", err);
  }
}

/**
 * Track Lead Audit Form Submissions
 */
export function trackLeadAuditSubmission(data: {
  fullName?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  industry?: string;
  source?: string;
}) {
  pushDataLayerEvent("lead_audit_submitted", {
    category: "Conversion",
    action: "Form Submit",
    label: data.industry || "General Audit",
    business_name: data.businessName,
    industry: data.industry,
    source: data.source || "Audit Modal",
  });

  // Track Lead on Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: "AI Automation Audit Request",
      content_category: data.industry || "General Audit",
    });
  }
}

/**
 * Track Demo Bookings
 */
export function trackDemoBooking(data: {
  name?: string;
  email?: string;
  date?: string;
  timeSlot?: string;
  serviceInterest?: string;
}) {
  pushDataLayerEvent("demo_booking_submitted", {
    category: "Conversion",
    action: "Book Demo",
    label: data.serviceInterest || "General Demo",
    booking_date: data.date,
    time_slot: data.timeSlot,
  });

  // Track Schedule on Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "Schedule", {
      content_name: "AI Automation Live Demo",
      content_category: data.serviceInterest || "General Demo",
    });
  }
}

/**
 * Track Contact Form Submissions
 */
export function trackContactSubmission(data: {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
}) {
  pushDataLayerEvent("contact_form_submitted", {
    category: "Conversion",
    action: "Contact Form Submit",
    subject: data.subject || "General Inquiry",
  });

  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact", {
      content_name: "Contact Inquiry",
    });
  }
}

/**
 * Track Newsletter Subscriptions
 */
export function trackNewsletterSubscription(email: string) {
  pushDataLayerEvent("newsletter_subscribed", {
    category: "Engagement",
    action: "Subscribe Newsletter",
  });

  if (typeof window.fbq === "function") {
    window.fbq("track", "Subscribe", {
      content_name: "AI Automation Newsletter",
    });
  }
}

/**
 * Track Call-to-Action Clicks
 */
export function trackCTAClick(buttonName: string, location: string) {
  pushDataLayerEvent("cta_button_click", {
    category: "Engagement",
    action: "Click CTA",
    button_name: buttonName,
    page_location: location,
  });
}

/**
 * Track Navigation Clicks
 */
export function trackNavigationClick(label: string, destination: string) {
  pushDataLayerEvent("navigation_click", {
    category: "Navigation",
    nav_label: label,
    destination_path: destination,
  });
}

/**
 * Track Modal Visibility
 */
export function trackModalOpen(modalName: string) {
  pushDataLayerEvent("modal_opened", {
    category: "UX Interaction",
    modal_name: modalName,
  });
}

/**
 * Track NYC Region Selections on Interactive Map
 */
export function trackRegionSelect(regionId: string, regionName: string) {
  pushDataLayerEvent("nyc_map_region_selected", {
    category: "Interactive Map",
    region_id: regionId,
    region_name: regionName,
  });
}

/**
 * Track Interactive Demos (Voice Call Demo, Chat Demo, CRM Demo, Slider)
 */
export function trackInteractiveDemo(demoName: string, action: string, details?: Record<string, any>) {
  pushDataLayerEvent("interactive_demo_event", {
    category: "Interactive Demo",
    demo_name: demoName,
    demo_action: action,
    ...details,
  });
}

/**
 * Track Pricing Tier Selections
 */
export function trackPricingSelect(planName: string, billingCycle: string, price: string) {
  pushDataLayerEvent("pricing_plan_selected", {
    category: "Pricing",
    plan_name: planName,
    billing_cycle: billingCycle,
    price: price,
  });
}

/**
 * Track FAQ Accordion Expand/Collapse
 */
export function trackFAQToggle(question: string, isExpanded: boolean) {
  pushDataLayerEvent("faq_toggled", {
    category: "FAQ",
    question: question,
    state: isExpanded ? "expanded" : "collapsed",
  });
}

