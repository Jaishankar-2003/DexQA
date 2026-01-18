// 

//=====================================================================================================


"use client";

import { motion } from "framer-motion";
import { 
  Cpu, Sparkles, Zap, 
  Database, RefreshCw, BarChart3, 
  ArrowUpRight, Bot 
} from "lucide-react";
import { cn } from "../app/lib/utils";

const capabilities = [
  {
    title: "AI-Assisted Generation",
    description: "Our LLM-driven engine transforms user stories into executable Playwright/Cypress scripts instantly.",
    icon: <Sparkles className="w-6 h-6" />,
    stats: "85% Faster Setup",
    color: "bg-blue-600",
    size: "lg" // Larger card for hero capability
  },
  {
    title: "Smart Regression",
    description: "ML-based selection runs only the tests affected by code changes, saving hours of compute time.",
    icon: <Zap className="w-6 h-6" />,
    stats: "70% Less Execution",
    color: "bg-emerald-500",
    size: "sm"
  },
  {
    title: "Synthetic Data",
    description: "Automated generation of realistic, PII-compliant data sets for boundary and edge-case testing.",
    icon: <Database className="w-6 h-6" />,
    stats: "Zero PII Risk",
    color: "bg-indigo-600",
    size: "sm"
  },
  {
    title: "Flaky Test Healing",
    description: "Self-healing algorithms identify DOM changes and suggest locator updates before tests fail.",
    icon: <RefreshCw className="w-6 h-6" />,
    stats: "99.9% Stability",
    color: "bg-rose-500",
    size: "sm"
  },
  {
    title: "ROI Analytics",
    description: "Real-time dashboard tracking the dollar-value saved by automation versus manual cycles.",
    icon: <BarChart3 className="w-6 h-6" />,
    stats: "3.5x ROI Avg.",
    color: "bg-amber-500",
    size: "lg"
  }
];

export default function AIAutomation() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with AI Badge */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/5 border border-blue-600/10 mb-6">
            <Bot className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Next-Gen QA Engine</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-8 leading-[0.9]">
            AI & Automation <br />
            <span className="text-slate-300">Maturity.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            We don't just use AI tools; we build custom automation ecosystems that self-heal, scale, and deliver measurable ROI.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative bg-white border border-slate-200 p-8 rounded-[2.5rem] flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-500",
                item.size === "lg" ? "md:col-span-3" : "md:col-span-2"
              )}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg",
                    item.color
                  )}>
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.stats}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-black mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-blue-500 transition-colors">
                <span>View Capability Docs</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}

          {/* Call to Action Bento Card */}
          <div className="md:col-span-6 lg:col-span-6 bg-slate-900 rounded-[2.5rem] p-10 mt-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={180} className="text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black text-white mb-4 italic uppercase">Engineering-Led Approach</h3>
                <p className="text-slate-400 font-medium max-w-2xl leading-relaxed">
                  Every capability in our stack is validated against real-world enterprise environments. We focus on practical impact—improving coverage, speed, and reliability—not the hype.
                </p>
              </div>
              <button className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 whitespace-nowrap">
                Review ROI Model
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}