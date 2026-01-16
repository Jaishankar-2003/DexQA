"use client";

import { useState } from "react";

const systems = [
  { name: "ERP", tagline: "Streamline, secure, and scale.", accent: "accent" },
  { name: "CRM", tagline: "Stronger relationships, stronger results.", accent: "secondary" },
  { name: "SAP", tagline: "SAP efficiency starts here.", accent: "accent" },
  { name: "CAD", tagline: "Turn designs into reality.", accent: "secondary" },
  { name: "All Enterprise Systems", tagline: "Comprehensive enterprise QA coverage.", accent: "primary" },
];

const industries = [
  { name: "Healthcare", description: "HIPAA-compliant testing for medical software and health tech platforms.", color: "bg-secondary/10 text-secondary" },
  { name: "FinTech & Banking", description: "Financial software testing with security and compliance focus.", color: "bg-accent/10 text-accent" },
  { name: "eCommerce", description: "E-commerce platform testing for seamless shopping experiences.", color: "bg-secondary/10 text-secondary" },
  { name: "Media & Entertainment", description: "Content platforms, streaming services, and media applications.", color: "bg-purple-100 text-purple-600" },
  { name: "Travel", description: "Booking systems, travel platforms, and hospitality software.", color: "bg-accent/10 text-accent" },
  { name: "AdTech", description: "Advertising technology platforms and programmatic systems.", color: "bg-orange-100 text-orange-600" },
  { name: "Manufacturing", description: "Industrial software, IoT, and manufacturing systems.", color: "bg-secondary/10 text-secondary" },
  { name: "Real Estate", description: "Property management, listing platforms, and real estate tech.", color: "bg-accent/10 text-accent" },
  { name: "Retail", description: "Point-of-sale systems, inventory management, and retail platforms.", color: "bg-secondary/10 text-secondary" },
  { name: "MarTech", description: "Marketing automation, analytics, and customer engagement platforms.", color: "bg-accent/10 text-accent" },
  { name: "Logistics", description: "Supply chain management, shipping, and logistics software.", color: "bg-secondary/10 text-secondary" },
];

const getIndustryIcon = (name: string) => {
  const icons: Record<string, JSX.Element> = {
    Healthcare: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    "FinTech & Banking": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    eCommerce: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    "Media & Entertainment": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    Travel: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    AdTech: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    Manufacturing: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    "Real Estate": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    Retail: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    MarTech: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    Logistics: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  };
  return icons[name] || (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
};

export default function IndustriesSystems() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  const [tappedIndustry, setTappedIndustry] = useState<string | null>(null);

  return (
    <section id="industries" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Systems Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 text-center">
            Enterprise Systems
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Specialized QA for complex enterprise systems
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {systems.map((system, index) => {
              const isStrong = system.name === "SAP" || system.name === "ERP";
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border-2 ${system.accent === "accent" ? "border-accent" : system.accent === "secondary" ? "border-secondary" : "border-primary"} p-4 md:p-6 text-center hover:shadow-lg transition-all ${isStrong ? "shadow-md" : ""}`}
                >
                  <h3 className="text-base md:text-lg font-heading font-semibold text-primary mb-2">
                    {system.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">{system.tagline}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industries Section */}
        <div className="bg-gray-warm rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 text-center">
            Industries We Serve
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Domain expertise across diverse industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => {
              const isActive = hoveredIndustry === industry.name || tappedIndustry === industry.name;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 hover:shadow-lg transition-all cursor-pointer touch-manipulation hover:scale-105"
                  onMouseEnter={() => setHoveredIndustry(industry.name)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  onClick={() => setTappedIndustry(tappedIndustry === industry.name ? null : industry.name)}
                >
                  <div className={`w-12 h-12 ${industry.color} rounded-full flex items-center justify-center mb-3 transition-transform hover:scale-110`}>
                    <div className="w-6 h-6">{getIndustryIcon(industry.name)}</div>
                  </div>
                  <h3 className="text-base md:text-lg font-heading font-semibold text-primary mb-2">
                    {industry.name}
                  </h3>
                  {isActive && (
                    <p className="text-xs md:text-sm text-slate-600 mt-2">
                      {industry.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
