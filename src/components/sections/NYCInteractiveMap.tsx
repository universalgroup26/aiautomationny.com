import React, { useState } from "react";
import { MapPin, Sparkles, CheckCircle2, PhoneCall, Zap, ArrowRight, ShieldCheck, Building2, Clock } from "lucide-react";
import { trackRegionSelect } from "../../lib/dataLayer";

export interface NYCRegionData {
  id: string;
  name: string;
  tagline: string;
  responseLatency: string;
  activeDeployments: string;
  primaryFocus: string;
  neighborhoods: string[];
  topServices: string[];
  industries: string[];
  svgPath: string;
  pinCoords: { x: number; y: number };
  badgeColor: string;
}

export const NYC_REGIONS: NYCRegionData[] = [
  {
    id: "queens",
    name: "Queens",
    tagline: "JACKSON HEIGHTS HQ & EXPANSIVE BOROUGH COVERAGE",
    responseLatency: "< 1.8s Response Time",
    activeDeployments: "64+ Active Systems",
    primaryFocus: "Contractor Speed-to-Lead & Medical Front-Desk AI",
    neighborhoods: ["Jackson Heights (HQ)", "Astoria", "Flushing", "Forest Hills", "Long Island City", "Jamaica"],
    topServices: ["24/7 AI Voice Dispatch", "Speed-to-Lead SMS Intake", "Google Calendar Booking Sync"],
    industries: ["HVAC & Plumbing", "Dental & Medical Clinics", "Auto Services", "Restaurants & Catering"],
    // Stylized SVG path for Queens
    svgPath: "M 270 180 L 370 170 L 410 210 L 390 280 L 330 290 L 290 260 L 260 210 Z",
    pinCoords: { x: 330, y: 220 },
    badgeColor: "#70D44B",
  },
  {
    id: "manhattan",
    name: "Manhattan",
    tagline: "HIGH-DENSITY ENTERPRISE & PROFESSIONAL FIRM INTAKE",
    responseLatency: "< 1.2s Response Time",
    activeDeployments: "82+ Active Systems",
    primaryFocus: "High-Value Law & Medical Client Intake & Qualification",
    neighborhoods: ["Midtown", "Financial District", "Upper East Side", "Chelsea", "Harlem", "SoHo"],
    topServices: ["Smart Multi-Line Phone Screening", "GHL CRM Sales Pipeline", "White-Glove Intake Chat"],
    industries: ["Law Practices", "Medical Specialists", "Real Estate Agencies", "Financial Services"],
    // Stylized SVG path for Manhattan
    svgPath: "M 230 110 L 260 100 L 245 220 L 225 240 L 210 220 L 220 150 Z",
    pinCoords: { x: 235, y: 165 },
    badgeColor: "#00C2FF",
  },
  {
    id: "brooklyn",
    name: "Brooklyn",
    tagline: "HIGH-GROWTH CONTRACTORS, SERVICES & SALON AUTOMATION",
    responseLatency: "< 2.0s Response Time",
    activeDeployments: "75+ Active Systems",
    primaryFocus: "24/7 Emergency Dispatch & Auto Review Generation",
    neighborhoods: ["Williamsburg", "Downtown Brooklyn", "Bay Ridge", "Flatbush", "Greenpoint", "Bushwick"],
    topServices: ["Emergency Dispatch Workflows", "Automated Google Review Funnels", "AI Chatbot Booking"],
    industries: ["General Contractors", "Plumbing & Roofing", "Spas & Salons", "Professional Services"],
    // Stylized SVG path for Brooklyn
    svgPath: "M 225 240 L 290 260 L 330 290 L 300 380 L 230 380 L 190 320 L 210 260 Z",
    pinCoords: { x: 250, y: 310 },
    badgeColor: "#176BFF",
  },
  {
    id: "bronx",
    name: "The Bronx",
    tagline: "TRADE CONTRACTORS & COMMUNITY MEDICAL PRACTICE INTAKE",
    responseLatency: "< 1.9s Response Time",
    activeDeployments: "41+ Active Systems",
    primaryFocus: "Multi-lingual Voice Receptionists & SMS Follow-Up",
    neighborhoods: ["Mott Haven", "Riverdale", "Pelham Bay", "Throggs Neck", "Fordham", "Co-op City"],
    topServices: ["Bilingual AI Voice Receptionist", "Instant SMS Missed-Call Saver", "Custom AI Websites"],
    industries: ["Auto Repair & Towing", "Medical Practices", "Plumbing & Electrical", "Local Retail"],
    // Stylized SVG path for Bronx
    svgPath: "M 260 100 L 310 50 L 370 70 L 350 140 L 270 170 Z",
    pinCoords: { x: 310, y: 100 },
    badgeColor: "#00C2FF",
  },
  {
    id: "staten-island",
    name: "Staten Island",
    tagline: "LOCAL HOME SERVICE CONTRACTOR & EMERGENCY DISPATCH",
    responseLatency: "< 2.1s Response Time",
    activeDeployments: "29+ Active Systems",
    primaryFocus: "Zero Missed Emergency Calls for HVAC, Roofing & Electrical",
    neighborhoods: ["St. George", "Todt Hill", "Great Kills", "New Dorp", "Tottenville", "Eltingville"],
    topServices: ["After-Hours Voice Answering", "Estimate Follow-Up Funnels", "Twilio SMS Automation"],
    industries: ["HVAC & Roofing", "Electrical Contractors", "Dental Practices", "Law Offices"],
    // Stylized SVG path for Staten Island
    svgPath: "M 100 320 L 170 300 L 180 370 L 130 420 L 80 380 Z",
    pinCoords: { x: 135, y: 350 },
    badgeColor: "#70D44B",
  },
  {
    id: "long-island",
    name: "Long Island",
    tagline: "NASSAU & SUFFOLK SUBURBAN SPEED-TO-LEAD & CRM SYNC",
    responseLatency: "< 2.3s Response Time",
    activeDeployments: "53+ Active Systems",
    primaryFocus: "Large Suburban Service Area Lead Capture & Scheduling",
    neighborhoods: ["Garden City", "Great Neck", "Huntington", "Melville", "Rockville Centre", "Syosset"],
    topServices: ["Ad-to-Lead Instant Phone Dialing", "CRM Pipeline Automation", "Google Maps SEO Boosters"],
    industries: ["Home Remodelers", "Landscaping & Pools", "Legal & Accounting", "Healthcare Groups"],
    // Stylized SVG path for Long Island
    svgPath: "M 370 170 L 520 150 L 580 180 L 540 230 L 390 280 M 370 170 Z",
    pinCoords: { x: 460, y: 200 },
    badgeColor: "#FFC72C",
  },
];

interface NYCInteractiveMapProps {
  openAuditModal?: () => void;
}

export const NYCInteractiveMap: React.FC<NYCInteractiveMapProps> = ({ openAuditModal }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>("queens");
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const activeRegion = NYC_REGIONS.find((r) => r.id === (hoveredRegionId || selectedRegionId)) || NYC_REGIONS[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30">
          <MapPin className="w-3.5 h-3.5" /> Metro NYC Service Coverage Map
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          EXPLORE NYC REGIONAL AI COVERAGE
        </h2>
        <p className="text-sm sm:text-base text-[#8D9AAF]">
          Hover or tap any region on the interactive map to view local response guarantees, active client systems, and top service solutions.
        </p>
      </div>

      {/* Region Selector Pills for Mobile & Quick Toggling */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {NYC_REGIONS.map((region) => {
          const isSelected = activeRegion.id === region.id;
          return (
            <button
              key={region.id}
              onClick={() => {
                setSelectedRegionId(region.id);
                trackRegionSelect(region.id, region.name);
              }}
              onMouseEnter={() => setHoveredRegionId(region.id)}
              onMouseLeave={() => setHoveredRegionId(null)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF] ${
                isSelected
                  ? "bg-[#176BFF] text-white shadow-lg shadow-[#176BFF]/30 border border-[#00C2FF]"
                  : "bg-[#0A1D3C] text-[#8D9AAF] hover:text-white border border-[#176BFF]/20 hover:border-[#176BFF]/50"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: region.badgeColor }}
              />
              <span>{region.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07152D] rounded-3xl border border-[#176BFF]/30 p-6 sm:p-8 glass-panel shadow-2xl relative overflow-hidden">
        {/* Left Column: Interactive Vector SVG Map */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[380px] bg-[#050D1D] rounded-2xl border border-[#176BFF]/20 p-4">
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#176BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none rounded-2xl" />

          {/* Map Compass / Info Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#0A1D3C]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#176BFF]/30 text-[11px] text-[#00C2FF] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#70D44B] animate-pulse" />
            <span>Interactive NYC Vector Grid</span>
          </div>

          <svg
            viewBox="0 0 600 450"
            className="w-full h-auto max-h-[400px] drop-shadow-[0_10px_20px_rgba(0,194,255,0.15)] transition-all duration-300"
          >
            <defs>
              <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#176BFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00C2FF" stopOpacity="0.1" />
              </linearGradient>
              <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Region SVG Polygons */}
            {NYC_REGIONS.map((region) => {
              const isActive = activeRegion.id === region.id;
              return (
                <g key={region.id} className="cursor-pointer group">
                  {/* Region Path */}
                  <path
                    d={region.svgPath}
                    onClick={() => setSelectedRegionId(region.id)}
                    onMouseEnter={() => setHoveredRegionId(region.id)}
                    onMouseLeave={() => setHoveredRegionId(null)}
                    fill={isActive ? "url(#mapGlow)" : "#0A1D3C"}
                    stroke={isActive ? region.badgeColor : "#176BFF"}
                    strokeWidth={isActive ? "3" : "1.5"}
                    strokeDasharray={isActive ? "none" : "4 2"}
                    className="transition-all duration-300 group-hover:opacity-90"
                    filter={isActive ? "url(#glowEffect)" : undefined}
                  />

                  {/* Interactive Pin Marker */}
                  <g
                    transform={`translate(${region.pinCoords.x}, ${region.pinCoords.y})`}
                    onClick={() => setSelectedRegionId(region.id)}
                    onMouseEnter={() => setHoveredRegionId(region.id)}
                    onMouseLeave={() => setHoveredRegionId(null)}
                    className="cursor-pointer"
                  >
                    {/* Ping Animation Ring when active */}
                    {isActive && (
                      <circle
                        r="14"
                        fill="none"
                        stroke={region.badgeColor}
                        strokeWidth="2"
                        className="animate-ping opacity-75"
                      />
                    )}
                    <circle
                      r="7"
                      fill={isActive ? region.badgeColor : "#0A1D3C"}
                      stroke={region.badgeColor}
                      strokeWidth="2.5"
                      className="transition-all duration-300"
                    />
                    <circle r="2.5" fill="#FFFFFF" />

                    {/* Region Label Text */}
                    <text
                      y="-12"
                      textAnchor="middle"
                      fill={isActive ? "#FFFFFF" : "#8D9AAF"}
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      className="pointer-events-none drop-shadow-md select-none transition-all duration-300"
                    >
                      {region.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          {/* Region Switch Instruction */}
          <div className="mt-2 text-[11px] text-[#8D9AAF] flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3 h-3 text-[#00C2FF]" /> Hover over any borough to inspect coverage summary
          </div>
        </div>

        {/* Right Column: Regional Service Summary Card */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span
                className="text-xs font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{
                  color: activeRegion.badgeColor,
                  backgroundColor: `${activeRegion.badgeColor}15`,
                  borderColor: `${activeRegion.badgeColor}40`,
                }}
              >
                {activeRegion.name} Region
              </span>

              <span className="text-xs font-mono text-[#00C2FF] bg-[#00C2FF]/10 px-2.5 py-1 rounded-lg border border-[#00C2FF]/30 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {activeRegion.responseLatency}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              {activeRegion.name} AI Automation Hub
            </h3>

            <p className="text-xs sm:text-sm font-bold text-[#70D44B] uppercase tracking-wider">
              {activeRegion.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed">
              {activeRegion.primaryFocus}
            </p>
          </div>

          {/* Neighborhood Pills */}
          <div className="space-y-2">
            <div className="text-xs font-heading font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#00C2FF]" /> Key Covered Neighborhoods
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeRegion.neighborhoods.map((nh) => (
                <span
                  key={nh}
                  className="text-[11px] bg-[#0A1D3C] text-[#F7F9FC] px-2.5 py-1 rounded-md border border-[#176BFF]/30"
                >
                  {nh}
                </span>
              ))}
            </div>
          </div>

          {/* Top Deployed AI Solutions */}
          <div className="space-y-2 bg-[#050D1D] p-4 rounded-xl border border-[#176BFF]/20">
            <div className="text-xs font-heading font-bold text-white uppercase tracking-wider flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[#00C2FF]">
                <Zap className="w-3.5 h-3.5" /> Deployed AI Solutions
              </span>
              <span className="text-[10px] text-[#70D44B] font-mono">{activeRegion.activeDeployments}</span>
            </div>
            <ul className="space-y-1.5">
              {activeRegion.topServices.map((svc) => (
                <li key={svc} className="text-xs text-[#8D9AAF] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#70D44B] shrink-0" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Target Industries */}
          <div className="space-y-2">
            <div className="text-xs font-heading font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#70D44B]" /> Top Industries Served in {activeRegion.name}
            </div>
            <div className="flex flex-wrap gap-2">
              {activeRegion.industries.map((ind) => (
                <span
                  key={ind}
                  className="text-[11px] font-semibold text-[#00C2FF] bg-[#00C2FF]/10 px-2.5 py-1 rounded-full border border-[#00C2FF]/20"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {openAuditModal && (
            <div className="pt-2">
              <button
                onClick={openAuditModal}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-all shadow-lg shadow-[#176BFF]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Free {activeRegion.name} AI Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
