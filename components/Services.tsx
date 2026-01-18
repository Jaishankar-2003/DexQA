"use client";

import { useMemo,useState } from "react";

const serviceCategories = [
  {
    id: "cooperation",
    label: "By Cooperation Model",
    color: "accent", // Blue
    borderColor: "border-accent",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    services: [
      {
        title: "QA Outsourcing",
        description: "Complete QA function handled by our team, integrated with your development workflow.",
        idealFor: "Teams needing full QA coverage without hiring",
        flexibility: "Flexible engagement, scalable team size",
      },
      {
        title: "QA Engineers for Hire",
        description: "Dedicated QA engineers embedded in your team, working as part of your organization.",
        idealFor: "Teams needing specialized QA expertise",
        flexibility: "Full-time or part-time, long-term contracts",
      },
      {
        title: "Managed Testing",
        description: "End-to-end test management including planning, execution, and reporting.",
        idealFor: "Organizations seeking comprehensive QA management",
        flexibility: "Project-based or ongoing support",
      },
      {
        title: "Dedicated QA Team",
        description: "Complete QA team assigned exclusively to your project or product line.",
        idealFor: "Large projects requiring dedicated QA resources",
        flexibility: "Team size scales with project needs",
      },
      {
        title: "QA Consulting",
        description: "Strategic QA guidance, process optimization, and best practices implementation.",
        idealFor: "Teams building internal QA capabilities",
        flexibility: "Advisory, workshops, or ongoing consultation",
      },
      {
        title: "QA as a Service",
        description: "On-demand QA services with flexible resource allocation and pay-per-use model.",
        idealFor: "Startups and teams with variable QA needs",
        flexibility: "Highly flexible, usage-based pricing",
      },
    ],
  },
  {
    id: "expertise",
    label: "By Expertise",
    color: "secondary", // Teal
    borderColor: "border-secondary",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    services: [
      {
        title: "Software Testing & QA",
        description: "Comprehensive manual and automated testing across all application layers.",
        idealFor: "All software products",
        flexibility: "Full testing lifecycle coverage",
      },
      {
        title: "Test Automation",
        description: "Framework design, implementation, and maintenance for web, mobile, and API testing.",
        idealFor: "Teams needing repeatable, scalable testing",
        flexibility: "Framework selection and customization",
      },
      {
        title: "Performance Testing",
        description: "Load, stress, and scalability testing to ensure applications perform under real-world conditions.",
        idealFor: "Applications with performance requirements",
        flexibility: "One-time assessments or ongoing monitoring",
      },
      {
        title: "AI Testing",
        description: "Testing ML models, data validation pipelines, and AI-driven features for accuracy and reliability.",
        idealFor: "Products with AI/ML components",
        flexibility: "Specialized testing for AI systems",
      },
    ],
  },
  {
    id: "focus",
    label: "By Focus Area",
    color: "indigo-soft", // Indigo
    borderColor: "border-indigo-400",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    services: [
      {
        title: "Web Applications",
        description: "Cross-browser, responsive, and accessibility testing for web platforms.",
        idealFor: "Web-based products and platforms",
        flexibility: "Browser and device matrix coverage",
      },
      {
        title: "Mobile Applications",
        description: "Native and hybrid mobile app testing across iOS and Android platforms.",
        idealFor: "Mobile-first products",
        flexibility: "Device and OS version coverage",
      },
      {
        title: "SaaS Platforms",
        description: "Multi-tenant, subscription-based platform testing with focus on scalability.",
        idealFor: "SaaS businesses",
        flexibility: "Tenant isolation and data security testing",
      },
      {
        title: "API & Microservices",
        description: "REST, GraphQL, and microservices architecture testing with contract validation.",
        idealFor: "API-first products and microservices",
        flexibility: "Contract testing and integration validation",
      },
      {
        title: "Testing for Startups",
        description: "Rapid, cost-effective QA solutions tailored for early-stage product development.",
        idealFor: "Startups and MVPs",
        flexibility: "Lean processes, fast turnaround",
      },
      {
        title: "Testing for Enterprises",
        description: "Enterprise-grade QA with compliance, security, and scalability focus.",
        idealFor: "Large organizations",
        flexibility: "Complex requirements, multi-team coordination",
      },
    ],
  },
  {
    id: "coverage",
    label: "By Testing Coverage",
    color: "primary", // Navy
    borderColor: "border-primary",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    services: [
      {
        title: "Functional Testing",
        description: "Validation of features and functionality against requirements and specifications.",
        idealFor: "All products",
        flexibility: "Requirement-based test coverage",
      },
      {
        title: "End-to-End Testing",
        description: "Complete user journey testing across all system components and integrations.",
        idealFor: "Products with complex user flows",
        flexibility: "Full system validation",
      },
      {
        title: "Full-Cycle Testing",
        description: "Comprehensive testing from requirements analysis through production deployment.",
        idealFor: "Products needing complete QA coverage",
        flexibility: "SDLC-integrated testing",
      },
      {
        title: "Regression Testing",
        description: "Automated and manual regression suites to ensure existing functionality remains intact.",
        idealFor: "Products with frequent releases",
        flexibility: "Maintained test suites, CI/CD integration",
      },
      {
        title: "Integration Testing",
        description: "Testing of component interactions, APIs, and third-party integrations.",
        idealFor: "Systems with multiple integrations",
        flexibility: "Integration point validation",
      },
    ],
  },
];

// export default function Services() {
//   const [activeTab, setActiveTab] = useState("cooperation");
//   const [openAccordion, setOpenAccordion] = useState<string | null>(null);

//   const activeCategory = serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

//   // Get border color class for service cards
//   const getBorderColor = (categoryId: string) => {
//     const category = serviceCategories.find(cat => cat.id === categoryId);
//     if (categoryId === "cooperation") return "border-t-accent";
//     if (categoryId === "expertise") return "border-t-secondary";
//     if (categoryId === "focus") return "border-t-indigo-400";
//     if (categoryId === "coverage") return "border-t-primary";
//     return "border-t-slate-200";
//   };

//   return (
//     <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-indigo-soft">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             Comprehensive QA solutions organized by how you need them
//           </p>
//         </div>

//         {/* Desktop Tabs */}
//         <div className="hidden md:block mb-10">
//   <div className="flex flex-wrap gap-3 border-b border-slate-200">
//     {serviceCategories.map((category) => {
//       const isActive = activeTab === category.id;

//       return (
//         <button
//           key={category.id}
//           onClick={() => setActiveTab(category.id)}
//           className={`relative flex items-center gap-2 px-6 py-3 font-medium text-sm transition-all
//             ${
//               isActive
//                 ? "text-accent border-b-2 border-accent"
//                 : "text-slate-600 hover:text-accent"
//             }
//           `}
//         >
//           {/* Icon */}
//           <span
//             className={`flex items-center justify-center ${
//               isActive ? "text-accent" : "text-slate-500"
//             }`}
//           >
//             {category.icon}
//           </span>

//           {/* Label */}
//           <span className="whitespace-nowrap">
//             {category.label}
//           </span>
//         </button>
//       );
//     })}
//   </div>
// </div>


//         {/* Mobile Accordion */}
//         <div className="md:hidden mb-8 space-y-2">
//           {serviceCategories.map((category) => {
//             const isOpen = openAccordion === category.id;
//             return (
//               <div key={category.id} className="bg-white rounded-lg border border-slate-200">
//                 <button
//                   onClick={() => setOpenAccordion(isOpen ? null : category.id)}
//                   className="w-full flex items-center justify-between p-4 text-left"
//                 >
//                   <div className="flex items-center space-x-2">
//                     <span className="text-accent">{category.icon}</span>
//                     <span className="font-medium text-primary">{category.label}</span>
//                   </div>
//                   <svg
//                     className={`w-5 h-5 text-slate-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {isOpen && (
//                   <div className="px-4 pb-4 space-y-4">
//                     {category.services.map((service, idx) => (
//                       <div key={idx} className="pt-4 border-t border-slate-100">
//                         <h4 className="font-semibold text-primary mb-2">{service.title}</h4>
//                         <p className="text-sm text-slate-600 mb-2">{service.description}</p>
//                         <div className="text-xs text-slate-500 space-y-1">
//                           <p><span className="font-medium">Ideal for:</span> {service.idealFor}</p>
//                           <p><span className="font-medium">Flexibility:</span> {service.flexibility}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Desktop Content Grid */}
//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {activeCategory.services.map((service, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-2xl border-t-2 ${getBorderColor(activeTab)} border-l border-r border-b border-slate-200 p-6 hover:shadow-lg hover:border-accent transition-all`}
//             >
//               <h3 className="text-xl font-heading font-semibold text-primary mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
//               <div className="space-y-2 text-sm">
//                 <div>
//                   <span className="font-semibold text-slate-700">Ideal for:</span>
//                   <span className="text-slate-600 ml-2">{service.idealFor}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold text-slate-700">Flexibility:</span>
//                   <span className="text-slate-600 ml-2">{service.flexibility}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


//============================================================================================

// export default function Services() {
//   const [activeTab, setActiveTab] = useState("cooperation");
//   const [openAccordion, setOpenAccordion] = useState<string | null>(null);

//   const activeCategory = useMemo(
//     () => serviceCategories.find(cat => cat.id === activeTab) ?? serviceCategories[0],
//     [activeTab]
//   );

//   const getBorderColor = (categoryId: string) => {
//     switch (categoryId) {
//       case "cooperation":
//         return "border-t-accent";
//       case "expertise":
//         return "border-t-secondary";
//       case "focus":
//         return "border-t-indigo-400";
//       case "coverage":
//         return "border-t-primary";
//       default:
//         return "border-t-slate-200";
//     }
//   };

//   return (
//     <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-indigo-soft">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             Comprehensive QA solutions organized by how you need them
//           </p>
//         </div>

//         {/* Desktop Tabs */}
//         <div className="hidden md:block mb-10">
//           <div
//             className="flex flex-wrap gap-3 border-b border-slate-200"
//             role="tablist"
//           >
//             {serviceCategories.map(category => {
//               const isActive = activeTab === category.id;

//               return (
//                 <button
//                   key={category.id}
//                   role="tab"
//                   aria-selected={isActive}
//                   onClick={() => setActiveTab(category.id)}
//                   className={`relative flex items-center gap-3 px-6 py-3 text-sm font-medium transition
//                     ${isActive ? "text-accent" : "text-slate-600 hover:text-accent"}
//                   `}
//                 >
//                   <span
//                     className={`w-8 h-8 flex items-center justify-center rounded-md transition
//                       ${isActive ? "bg-accent/10 text-accent" : "text-slate-500"}
//                     `}
//                   >
//                     {category.icon}
//                   </span>

//                   <span className="whitespace-nowrap">
//                     {category.label}
//                   </span>

//                   {isActive && (
//                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile Accordion */}
//         <div className="md:hidden mb-8 space-y-3">
//           {serviceCategories.map(category => {
//             const isOpen = openAccordion === category.id;

//             return (
//               <div key={category.id} className="bg-white rounded-lg border border-slate-200">
//                 <button
//                   onClick={() => setOpenAccordion(category.id)}
//                   className="w-full flex items-center justify-between p-4 text-left"
//                 >
//                   <div className="flex items-center gap-2">
//                     <span className="text-accent">{category.icon}</span>
//                     <span className="font-medium text-primary">{category.label}</span>
//                   </div>
//                   <svg
//                     className={`w-5 h-5 text-slate-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {isOpen && (
//                   <div className="px-4 pb-4 space-y-4">
//                     <p className="text-xs uppercase tracking-wide text-slate-400">
//                       Services included
//                     </p>

//                     {category.services.map((service, idx) => (
//                       <div key={idx} className="pt-4 border-t border-slate-100">
//                         <h4 className="font-semibold text-primary mb-2">
//                           {service.title}
//                         </h4>
//                         <p className="text-sm text-slate-600 mb-2">
//                           {service.description}
//                         </p>
//                         <div className="text-xs text-slate-500 space-y-1">
//                           <p><strong>Ideal for:</strong> {service.idealFor}</p>
//                           <p><strong>Flexibility:</strong> {service.flexibility}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {activeCategory.services.map((service, index) => (
//             <div
//               key={index}
//               className={`group bg-white rounded-2xl border-t-2 ${getBorderColor(activeTab)}
//                 border border-slate-200 p-6
//                 transition-all duration-300
//                 hover:-translate-y-1 hover:shadow-xl hover:border-accent`}
//             >
//               <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-accent transition">
//                 {service.title}
//               </h3>

//               <p className="text-slate-600 mb-4 leading-relaxed">
//                 {service.description}
//               </p>

//               <div className="space-y-2 text-sm text-slate-600 opacity-90 group-hover:opacity-100 transition">
//                 <p><strong>Ideal for:</strong> {service.idealFor}</p>
//                 <p><strong>Flexibility:</strong> {service.flexibility}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Soft Trust CTA */}
//         <div className="text-center mt-16">
//           <p className="text-slate-600 mb-4">
//             Not sure which QA model fits your product?
//           </p>
//           <button
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
//               bg-accent text-white font-medium
//               hover:bg-accent/90 transition"
//           >
//             Get QA Recommendation
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

//============================================================================================


import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronDown, Sparkles, Target, ShieldCheck, Box } from "lucide-react";
import { cn } from "../app/lib/utils";

export default function Services() {
  const [activeTab, setActiveTab] = useState("cooperation");
  const [openAccordion, setOpenAccordion] = useState<string | null>("cooperation");

  const activeCategory = useMemo(
    () => serviceCategories.find((cat) => cat.id === activeTab) ?? serviceCategories[0],
    [activeTab]
  );

  const getBorderColor = (categoryId: string) => {
    const colors: Record<string, string> = {
      cooperation: "border-t-accent shadow-accent/5",
      expertise: "border-t-emerald-500 shadow-emerald-500/5",
      focus: "border-t-indigo-500 shadow-indigo-500/5",
      coverage: "border-t-primary shadow-primary/5",
    };
    return colors[categoryId] || "border-t-slate-200";
  };

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles size={14} />
            Our Expertise
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Quality Assurance <span className="text-accent italic">Tailored</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From agile startups to enterprise systems, we provide QA models that scale with your roadmap.
          </p>
        </div>

        {/* Desktop Tabs: Using LayoutGroup for smooth indicator sliding */}
        <div className="hidden md:block mb-12">
          <div className="flex justify-center p-1 bg-slate-200/50 backdrop-blur-sm rounded-2xl w-fit mx-auto border border-white">
            <LayoutGroup id="tabs">
              {serviceCategories.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={cn(
                      "relative flex items-center gap-3 px-8 py-4 text-sm font-semibold transition-all rounded-xl",
                      isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <span className={cn("transition-colors", isActive ? "text-accent" : "text-slate-400")}>
                      {category.icon}
                    </span>
                    {category.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white shadow-sm rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </LayoutGroup>
          </div>
        </div>

        {/* Mobile Accordion: Improved Visual Separation */}
        <div className="md:hidden mb-8 space-y-4">
          {serviceCategories.map((category) => (
            <div key={category.id} className="overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm">
              <button
                onClick={() => setOpenAccordion(openAccordion === category.id ? null : category.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg text-accent">{category.icon}</div>
                  <span className="font-bold text-slate-900">{category.label}</span>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", openAccordion === category.id && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openAccordion === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-5 pb-6 pt-2 space-y-6 border-t border-slate-50">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="group">
                          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-accent" /> {service.title}
                          </h4>
                          <p className="text-sm text-slate-500 mb-3">{service.description}</p>
                          <div className="bg-slate-50 p-3 rounded-xl text-[11px] space-y-1 border border-slate-100">
                            <p><span className="text-slate-400 font-semibold uppercase">Ideal For:</span> {service.idealFor}</p>
                            <p><span className="text-slate-400 font-semibold uppercase">Model:</span> {service.flexibility}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Grid: Animation when switching tabs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeCategory.services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "group relative bg-white rounded-3xl p-8 border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20",
                  getBorderColor(activeTab)
                )}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Box size={60} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-100 space-y-3">
                   <div className="flex items-start gap-2 text-xs">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <p className="text-slate-600"><strong>Target:</strong> {service.idealFor}</p>
                   </div>
                   <div className="flex items-start gap-2 text-xs">
                      <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      </div>
                      <p className="text-slate-600"><strong>Ops:</strong> {service.flexibility}</p>
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Improved CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative mt-20 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f620,transparent)]" />
          <h3 className="relative text-white text-2xl md:text-3xl font-bold mb-4">Ready to bullet proof  your release ?</h3>
          <p className="relative text-slate-400 mb-8 max-w-lg mx-auto">Get a custom QA strategy tailored to your development lifecycle within 24 hours.</p>
          <button className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/30">
            Get QA Recommendation
            <ChevronDown className="-rotate-90 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}