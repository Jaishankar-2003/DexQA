// const toolCategories = [
//   {
//     category: "Web Testing",
//     borderColor: "border-l-accent", // Blue
//     tools: [
//       { name: "Playwright", logo: "PW" },
//       { name: "Cypress", logo: "CY" },
//       { name: "Selenium", logo: "SE" },
//       { name: "WebdriverIO", logo: "WD" },
//       { name: "CodeceptJS", logo: "CJ" },
//       { name: "Selenide", logo: "SN" },
//       { name: "Watir", logo: "WT" },
//     ],
//   },
//   {
//     category: "Mobile Testing",
//     borderColor: "border-l-secondary", // Teal
//     tools: [
//       { name: "Appium", logo: "AP" },
//       { name: "Calabash", logo: "CB" },
//     ],
//   },
//   {
//     category: "Performance Testing",
//     borderColor: "border-l-purple-500", // Purple-blue
//     tools: [
//       { name: "k6", logo: "k6" },
//     ],
//   },
//   {
//     category: "BDD Frameworks",
//     borderColor: "border-l-green-500", // Green-teal
//     tools: [
//       { name: "Cucumber", logo: "CU" },
//       { name: "Behave", logo: "BH" },
//       { name: "SpecFlow", logo: "SF" },
//     ],
//   },
//   {
//     category: "Unit & Integration Testing",
//     borderColor: "border-l-indigo-500", // Indigo
//     tools: [
//       { name: "Jest", logo: "JS" },
//       { name: "Vitest", logo: "VT" },
//       { name: "Mocha", logo: "MO" },
//       { name: "TestNG", logo: "TN" },
//     ],
//   },
//   {
//     category: "Other Frameworks",
//     borderColor: "border-l-slate-400",
//     tools: [
//       { name: "Robot Framework", logo: "RF" },
//     ],
//   },
// ];

// export default function FrameworksTools() {
//   return (
//     <section id="tools" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
//             Tools & Frameworks We Use
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
//             Tool-agnostic. Strategy-driven.
//           </p>
//           <p className="text-slate-600 max-w-2xl mx-auto">
//             We select the right tools for your stack and requirements, ensuring optimal test coverage and maintainability.
//           </p>
//         </div>

//         <div className="space-y-12">
//           {toolCategories.map((category, catIndex) => (
//             <div key={catIndex} className={`bg-slate-50 rounded-2xl border-l-4 ${category.borderColor} p-6 md:p-8`}>
//               <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
//                 {category.category}
//               </h3>
//               <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
//                 {category.tools.map((tool, toolIndex) => (
//                   <div
//                     key={toolIndex}
//                     className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow"
//                   >
//                     <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
//                       <span className="text-accent font-heading font-bold text-sm">
//                         {tool.logo}
//                       </span>
//                     </div>
//                     <div className="text-sm font-medium text-slate-700">{tool.name}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8 md:p-12 text-center">
//           <p className="text-lg text-slate-700 max-w-2xl mx-auto">
//             <span className="font-semibold text-primary">Not seeing your preferred tool?</span>{" "}
//             We're tool-agnostic and can work with any testing framework or toolchain that fits your technology stack.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


//===================================================================================================


"use client";

import { motion } from "framer-motion";
import { 
  Globe2, Smartphone, Zap, Terminal, 
  CheckCircle2, Plus, ArrowUpRight, ShieldCheck
} from "lucide-react";
import { cn } from "../app/lib/utils";

const toolCategories = [
  {
    category: "Web Automation",
    icon: <Globe2 className="w-5 h-5" />,
    color: "blue",
    description: "Enterprise-grade browser automation for modern web apps.",
    tools: [
      { name: "Playwright", type: "Modern", status: "Certified" },
      { name: "Cypress", type: "Developer-first", status: "Expert" },
      { name: "Selenium", type: "Industry Standard", status: "Legacy" },
      { name: "WebdriverIO", type: "Node.js", status: "Certified" },
      { name: "CodeceptJS", type: "BDD", status: "Certified" },
      { name: "Selenide", type: "Java", status: "Expert" },
    ],
  },
  {
    category: "Mobile QA",
    icon: <Smartphone className="w-5 h-5" />,
    color: "teal",
    description: "Native and cross-platform mobile testing excellence.",
    tools: [
      { name: "Appium", type: "Cross-platform", status: "Expert" },
      { name: "Calabash", type: "Ruby-based", status: "Support" },
      { name: "Espresso", type: "Android Native", status: "Expert" },
      { name: "XCUITest", type: "iOS Native", status: "Expert" },
    ],
  },
  {
    category: "Performance",
    icon: <Zap className="w-5 h-5" />,
    color: "purple",
    description: "High-concurrency load and stress testing.",
    tools: [
      { name: "k6", type: "Cloud Native", status: "Expert" },
      { name: "JMeter", type: "Protocol", status: "Certified" },
      { name: "Locust", type: "Python-based", status: "Expert" },
    ],
  },
  {
    category: "Unit & Integration",
    icon: <Terminal className="w-5 h-5" />,
    color: "indigo",
    description: "Shift-left testing within the developer workflow.",
    tools: [
      { name: "Jest", type: "JavaScript", status: "Certified" },
      { name: "Vitest", type: "Vite", status: "Expert" },
      { name: "Mocha", type: "Flexible", status: "Certified" },
      { name: "TestNG", type: "Java", status: "Certified" },
    ],
  },
];

export default function FrameworksTools() {
  return (
    <section id="toolCategories" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Architectural Precision</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              The <span className="text-blue-600">Tech</span> <br />
              Infrastructure.
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-lg">
              We select and configure the right tools for your stack, ensuring high-velocity deployments and zero regression.
            </p>
          </div>
          
          <div className="hidden lg:flex gap-12 border-l border-slate-200 pl-12 h-fit">
            <div>
              <div className="text-4xl font-black text-slate-900">100%</div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Cloud Native</p>
            </div>
            <div>
              <div className="text-4xl font-black text-slate-900">24/7</div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">CI/CD Sync</p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {toolCategories.map((cat, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110",
                  cat.color === 'blue' ? 'bg-blue-600 text-white' :
                  cat.color === 'teal' ? 'bg-teal-500 text-white' :
                  cat.color === 'purple' ? 'bg-purple-600 text-white' : 'bg-indigo-600 text-white'
                )}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">{cat.category}</h3>
                  <p className="text-sm text-slate-500 font-semibold">{cat.description}</p>
                </div>
              </div>

              {/* Tools List - High Visibility Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.tools.map((tool, ti) => (
                  <motion.div
                    key={ti}
                    whileHover={{ y: -5 }}
                    className="group relative flex flex-col p-5 bg-white border border-slate-200 rounded-[1.5rem] transition-all hover:border-blue-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="px-2.5 py-1 rounded-md bg-slate-100 text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        {tool.status}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                    
                    <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                      {tool.name}
                    </h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                      {tool.type}
                    </p>

                    {/* Subtle checkmark overlay on hover */}
                    <CheckCircle2 className="absolute bottom-4 right-4 w-6 h-6 text-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
                
                {/* Expand Button */}
                {/* <div className="flex flex-col items-center justify-center p-5 border-2 border-dashed border-slate-200 rounded-[1.5rem] hover:bg-white hover:border-blue-500 transition-all cursor-pointer group/add">
                  <Plus className="w-6 h-6 text-slate-300 group-hover/add:text-blue-500 mb-2" />
                  <span className="text-[10px] font-black text-slate-400 uppercase group-hover/add:text-blue-600">Add Framework</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-24 p-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">
           <div className="bg-slate-900 rounded-[2.3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Custom Architecture?</h4>
                <p className="text-slate-400 font-medium max-w-md italic">
                  "Our goal isn't just to use tools, but to build a testing ecosystem that serves your specific business logic."
                </p>
              </div>
              <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95">
                Consult With Engineers
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}