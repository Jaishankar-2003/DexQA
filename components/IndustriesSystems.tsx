// "use client";

// import { useState } from "react";

// const systems = [
//   { name: "ERP", tagline: "Streamline, secure, and scale.", accent: "accent" },
//   { name: "CRM", tagline: "Stronger relationships, stronger results.", accent: "secondary" },
//   { name: "SAP", tagline: "SAP efficiency starts here.", accent: "accent" },
//   { name: "CAD", tagline: "Turn designs into reality.", accent: "secondary" },
//   { name: "All Enterprise Systems", tagline: "Comprehensive enterprise QA coverage.", accent: "primary" },
// ];

// const industries = [
//   { name: "Healthcare", description: "HIPAA-compliant testing for medical software and health tech platforms.", color: "bg-secondary/10 text-secondary" },
//   { name: "FinTech & Banking", description: "Financial software testing with security and compliance focus.", color: "bg-accent/10 text-accent" },
//   { name: "eCommerce", description: "E-commerce platform testing for seamless shopping experiences.", color: "bg-secondary/10 text-secondary" },
//   { name: "Media & Entertainment", description: "Content platforms, streaming services, and media applications.", color: "bg-purple-100 text-purple-600" },
//   { name: "Travel", description: "Booking systems, travel platforms, and hospitality software.", color: "bg-accent/10 text-accent" },
//   { name: "AdTech", description: "Advertising technology platforms and programmatic systems.", color: "bg-orange-100 text-orange-600" },
//   { name: "Manufacturing", description: "Industrial software, IoT, and manufacturing systems.", color: "bg-secondary/10 text-secondary" },
//   { name: "Real Estate", description: "Property management, listing platforms, and real estate tech.", color: "bg-accent/10 text-accent" },
//   { name: "Retail", description: "Point-of-sale systems, inventory management, and retail platforms.", color: "bg-secondary/10 text-secondary" },
//   { name: "MarTech", description: "Marketing automation, analytics, and customer engagement platforms.", color: "bg-accent/10 text-accent" },
//   { name: "Logistics", description: "Supply chain management, shipping, and logistics software.", color: "bg-secondary/10 text-secondary" },
// ];

// const getIndustryIcon = (name: string) => {
//   const icons: Record<string, JSX.Element> = {
//     Healthcare: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//       </svg>
//     ),
//     "FinTech & Banking": (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     eCommerce: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//       </svg>
//     ),
//     "Media & Entertainment": (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//       </svg>
//     ),
//     Travel: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     AdTech: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
//       </svg>
//     ),
//     Manufacturing: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//       </svg>
//     ),
//     "Real Estate": (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//       </svg>
//     ),
//     Retail: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//       </svg>
//     ),
//     MarTech: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
//       </svg>
//     ),
//     Logistics: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//       </svg>
//     ),
//   };
//   return icons[name] || (
//     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//     </svg>
//   );
// };

// export default function IndustriesSystems() {
//   const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
//   const [tappedIndustry, setTappedIndustry] = useState<string | null>(null);

//   return (
//     <section id="industries" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Systems Section */}
//         <div className="mb-16 md:mb-24">
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 text-center">
//             Enterprise Systems
//           </h2>
//           <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
//             Specialized QA for complex enterprise systems
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
//             {systems.map((system, index) => {
//               const isStrong = system.name === "SAP" || system.name === "ERP";
//               return (
//                 <div
//                   key={index}
//                   className={`bg-white rounded-2xl border-2 ${system.accent === "accent" ? "border-accent" : system.accent === "secondary" ? "border-secondary" : "border-primary"} p-4 md:p-6 text-center hover:shadow-lg transition-all ${isStrong ? "shadow-md" : ""}`}
//                 >
//                   <h3 className="text-base md:text-lg font-heading font-semibold text-primary mb-2">
//                     {system.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-slate-600">{system.tagline}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Industries Section */}
//         <div className="bg-gray-warm rounded-3xl p-8 md:p-12">
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 text-center">
//             Industries We Serve
//           </h2>
//           <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
//             Domain expertise across diverse industries
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//             {industries.map((industry, index) => {
//               const isActive = hoveredIndustry === industry.name || tappedIndustry === industry.name;
//               return (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 hover:shadow-lg transition-all cursor-pointer touch-manipulation hover:scale-105"
//                   onMouseEnter={() => setHoveredIndustry(industry.name)}
//                   onMouseLeave={() => setHoveredIndustry(null)}
//                   onClick={() => setTappedIndustry(tappedIndustry === industry.name ? null : industry.name)}
//                 >
//                   <div className={`w-12 h-12 ${industry.color} rounded-full flex items-center justify-center mb-3 transition-transform hover:scale-110`}>
//                     <div className="w-6 h-6">{getIndustryIcon(industry.name)}</div>
//                   </div>
//                   <h3 className="text-base md:text-lg font-heading font-semibold text-primary mb-2">
//                     {industry.name}
//                   </h3>
//                   {isActive && (
//                     <p className="text-xs md:text-sm text-slate-600 mt-2">
//                       {industry.description}
//                     </p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


//====================================================================================================


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Wallet, ShoppingCart, Play, 
  Megaphone, Factory, Home,
  Truck, Layers, Database, Cpu, ArrowRight, 
  ShieldCheck, Activity
} from "lucide-react";
import { cn } from "../app/lib/utils";

// 1. DATA DEFINITIONS WITH TYPE SAFETY
const systems = [
  { 
    id: "erp",
    name: "ERP Systems", 
    tagline: "Resource Planning Validation", 
    description: "End-to-end testing of complex financial modules, supply chain workflows, and HR integration points to ensure data integrity across the entire enterprise.",
    icon: <Layers size={20} />, 
    color: "text-blue-400",
    glow: "#3b82f6", // Fixed: Added glow hex code
    features: ["Data Consistency", "Module Integration", "Financial Auditing"]
  },
  { 
    id: "crm",
    name: "CRM Platforms", 
    tagline: "Customer Lifecycle Assurance", 
    description: "Validating customer data pipelines, automated marketing triggers, and sales funnel logic to maintain high-fidelity relationships.",
    icon: <Database size={20} />, 
    color: "text-emerald-500",
    glow: "#10b981",
    features: ["API Connectivity", "Lead Logic", "User Permissions"]
  },
  { 
    id: "sap",
    name: "SAP Ecosystems", 
    tagline: "Process Efficiency Testing", 
    description: "Specialized QA for SAP S/4HANA environments, focusing on custom ABAP code, Fiori apps, and standard business process validation.",
    icon: <Cpu size={20} />, 
    color: "text-indigo-500", 
    glow: "#6366f1",
    features: ["S/4HANA Migration", "Custom ABAP", "BTP Integration"]
  },
  { 
    id: "cad",
    name: "CAD/PLM Software", 
    tagline: "Design Precision Quality", 
    description: "Ensuring rendering accuracy, version control stability, and metadata synchronization for heavy engineering and design applications.",
    icon: <Activity size={20} />, 
    color: "text-orange-500", 
    glow: "#f97316",
    features: ["Rendering Performance", "Version Sync", "Large File Handling"]
  },
];

const industries = [
  { name: "Healthcare", icon: <Heart size={24} />, description: "HIPAA-compliant testing for medical software and health tech.", color: "text-rose-400", border: "border-rose-500/50", bg: "bg-rose-500/10" },
  { name: "FinTech", icon: <Wallet size={24} />, description: "Financial software testing with deep security and compliance focus.", color: "text-emerald-400", border: "border-emerald-500/50", bg: "bg-emerald-500/10" },
  { name: "eCommerce", icon: <ShoppingCart size={24} />, description: "Platform testing for seamless shopping and checkout experiences.", color: "text-blue-400", border: "border-blue-500/50", bg: "bg-blue-500/10" },
  { name: "Media", icon: <Play size={24} />, description: "Content platforms, streaming services, and media applications.", color: "text-purple-400", border: "border-purple-500/50", bg: "bg-purple-500/10" },
  { name: "Logistics", icon: <Truck size={24} />, description: "Supply chain management, shipping, and logistics software.", color: "text-cyan-400", border: "border-cyan-500/50", bg: "bg-cyan-500/10" },
  { name: "Manufacturing", icon: <Factory size={24} />, description: "Industrial software, IoT, and automated manufacturing systems.", color: "text-slate-400", border: "border-slate-500/50", bg: "bg-slate-500/10" },
  { name: "Real Estate", icon: <Home size={24} />, description: "Property management, listing platforms, and real estate tech.", color: "text-amber-400", border: "border-amber-500/50", bg: "bg-amber-500/10" },
  { name: "AdTech", icon: <Megaphone size={24} />, description: "Advertising platforms and programmatic bidding systems.", color: "text-orange-400", border: "border-orange-500/50", bg: "bg-orange-500/10" },
];

export default function IndustriesAndSystems() {
  const [activeSystemId, setActiveSystemId] = useState(systems[0].id);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const activeSystem = systems.find(s => s.id === activeSystemId)!;

  return (
    <div className="w-full bg-[#272e40] overflow-x-hidden">     {/* [#0B0F1A] */}
      {/* SECTION 1: SYSTEMS BLUEPRINT */}
      <section className="py-24 border-b border-white/5 relative">
        {/* Fixed Dynamic Glow: Using style prop for hex transparency */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-1000 pointer-events-none opacity-20"
          style={{ 
            background: `radial-gradient(circle, ${activeSystem.glow} 0%, transparent 70%)` 
          }} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
            
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/3 space-y-4">
              <div className="mb-10 text-center lg:text-left">
                <span className={cn("text-[10px] font-black tracking-[0.4em] uppercase mb-2 block transition-colors duration-500", activeSystem.color)}>Technical Infrastructure</span>
                <h2 className="text-4xl font-bold text-white tracking-tight">Systems QA</h2>
              </div>

              {systems.map((system) => (
                <button
                  key={system.id}
                  onClick={() => setActiveSystemId(system.id)}
                  className={cn(
                    "w-full group relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 text-left border backdrop-blur-md",
                    activeSystemId === system.id 
                      ? "bg-white/5 border-white/20 shadow-2xl" 
                      : "border-transparent opacity-40 hover:opacity-100 hover:bg-white/5"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500 shadow-lg",
                    activeSystemId === system.id 
                      ? "bg-gradient-to-br from-white to-slate-300 text-black scale-110" 
                      : "bg-white/5 text-slate-400"
                  )}>
                    {system.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={cn("font-bold text-lg leading-tight transition-colors", activeSystemId === system.id ? "text-white" : "text-slate-300")}>{system.name}</h3>
                    <p className="text-xs text-slate-500">{system.tagline}</p>
                  </div>
                  {activeSystemId === system.id && (
                    <motion.div layoutId="nav-indicator" className={activeSystem.color}>
                      <ArrowRight size={18} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>

            {/* Main Console Area */}
            <div className="w-full lg:w-2/3">
              <div 
                className="relative h-full min-h-[520px] rounded-[2.5rem] border p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-700 bg-slate-900/40 backdrop-blur-xl"
                style={{ borderColor: `${activeSystem.glow}33` }} 
              >
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSystemId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative h-full flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                      </div>
                      <div className="h-[1px] flex-1 bg-white/10" />
                      <span className={cn("text-[10px] font-mono tracking-widest uppercase transition-colors", activeSystem.color)}>
                        LAB_ENV // {activeSystem.name}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter italic uppercase">
                      {activeSystem.name}
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl font-medium">
                      {activeSystem.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
                      {activeSystem.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors group">
                          <ShieldCheck className={cn("w-5 h-5 shrink-0 transition-colors", activeSystem.color)} />
                          <span className="text-[11px] font-bold text-slate-200 uppercase tracking-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INDUSTRIES (Vivid Grid) */}
      <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#070910]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">
              Domain <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"> Vertical </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              Specialized QA protocols tailored for the unique regulatory and operational demands of global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const isActive = hoveredIndustry === industry.name;
              // Safe glow logic
              const glowColor = (industry.color || "text-blue-400").replace('text-', 'bg-');

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredIndustry(industry.name)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  className={cn(
                    "relative group p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border-2 overflow-hidden h-full flex flex-col",
                    isActive 
                      ? `bg-slate-900 shadow-2xl -translate-y-2 ${industry.border}` 
                      : "bg-white/[0.03] border-white/5 hover:border-white/10"
                  )}
                >
                  <div className={cn(
                    "absolute -top-12 -right-12 w-32 h-32 blur-[60px] rounded-full opacity-20 transition-opacity pointer-events-none",
                    glowColor
                  )} />

                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-xl relative z-10",
                    isActive ? `${industry.bg} ${industry.color} scale-110` : "bg-white/5 text-white"
                  )}>
                    {industry.icon}
                  </div>
                  
                  <h3 className={cn("text-2xl font-bold mb-4 relative z-10 transition-colors", isActive ? "text-white" : "text-slate-300")}>
                    {industry.name}
                  </h3>
                  
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-sm text-slate-400 leading-relaxed font-medium"
                        >
                          {industry.description}
                        </motion.p>
                      ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-4 flex items-center gap-2">
                            <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", glowColor)} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Ready for Audit</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}