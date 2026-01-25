// const steps = [
//   {
//     step: "01",
//     title: "Requirements Analysis",
//     description:
//       "We analyze your requirements, user stories, and technical specifications to understand testing scope and priorities.",
//     color: "accent", // Blue
//   },
//   {
//     step: "02",
//     title: "Test Planning",
//     description:
//       "Comprehensive test strategy and plan development, including test case design, risk assessment, and resource allocation.",
//     color: "secondary", // Teal
//   },
//   {
//     step: "03",
//     title: "Test Design & Development",
//     description:
//       "Creation of detailed test cases, automation scripts, and test data. Framework setup and tool configuration.",
//     color: "accent", // Blue
//   },
//   {
//     step: "04",
//     title: "Test Execution",
//     description:
//       "Systematic execution of manual and automated tests, with real-time tracking and progress reporting.",
//     color: "secondary", // Teal
//   },
//   {
//     step: "05",
//     title: "Defect Management",
//     description:
//       "Clear, actionable bug reporting with prioritization, tracking, and verification of fixes.",
//     color: "accent", // Blue
//   },
//   {
//     step: "06",
//     title: "Reporting & Analysis",
//     description:
//       "Comprehensive test reports with metrics, coverage analysis, and recommendations for continuous improvement.",
//     color: "secondary", // Teal
//   },
// ];

// export default function HowWeWork() {
//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
//             How We Work
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             A systematic QA lifecycle that ensures thorough coverage and clear communication
//           </p>
//         </div>

//         <div className="relative">
//           {/* Connection Line - Desktop Only */}
//           <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-secondary to-accent" style={{ top: "3rem" }}></div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {steps.map((item, index) => {
//               const bgColor = item.color === "accent" ? "bg-accent/10" : "bg-secondary/10";
//               const textColor = item.color === "accent" ? "text-accent" : "text-secondary";
//               const borderColor = item.color === "accent" ? "border-accent" : "border-secondary";
//               return (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 relative hover:shadow-lg transition-shadow"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0">
//                       <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center border-2 ${borderColor}`}>
//                         <span className={`${textColor} font-heading font-bold text-xl`}>
//                           {item.step}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-heading font-semibold text-primary mb-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-slate-600 leading-relaxed">{item.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Our process is iterative and adaptable. We work closely with your team to integrate QA seamlessly into your development workflow, ensuring quality is built in from the start.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

//=====================================================================================================

"use client";

import { motion } from "framer-motion";
import { 
  Search, ClipboardList, Code2, 
  PlayCircle, Bug, BarChart, 
  ArrowRight, ShieldCheck 
} from "lucide-react";
import { cn } from "../app/lib/utils";

const steps = [
  {
    step: "01",
    title: "Requirements Analysis",
    icon: <Search className="w-6 h-6" />,
    description: "Deep dive into your user stories and technical specs to define the 'Definition of Done'.",
    color: "from-blue-600 to-blue-400",
    shadow: "shadow-blue-500/20",
  },
  {
    step: "02",
    title: "Test Planning",
    icon: <ClipboardList className="w-6 h-6" />,
    description: "Strategic roadmapping, risk assessment, and resource allocation tailored to your sprint velocity.",
    color: "from-teal-600 to-teal-400",
    shadow: "shadow-teal-500/20",
  },
  {
    step: "03",
    title: "Design & Development",
    icon: <Code2 className="w-6 h-6" />,
    description: "Architecting automation scripts and framework setup using the industry-best practices.",
    color: "from-indigo-600 to-indigo-400",
    shadow: "shadow-indigo-500/20",
  },
  {
    step: "04",
    title: "Test Execution",
    icon: <PlayCircle className="w-6 h-6" />,
    description: "Systematic execution with real-time dashboards and immediate feedback loops for your devs.",
    color: "from-emerald-600 to-emerald-400",
    shadow: "shadow-emerald-500/20",
  },
  {
    step: "05",
    title: "Defect Management",
    icon: <Bug className="w-6 h-6" />,
    description: "High-fidelity bug reporting with reproduction steps that eliminate developer guesswork.",
    color: "from-rose-600 to-rose-400",
    shadow: "shadow-rose-500/20",
  },
  {
    step: "06",
    title: "Reporting & Analysis",
    icon: <BarChart className="w-6 h-6" />,
    description: "Data-driven insights and coverage metrics to empower confident go/no-go decisions.",
    color: "from-amber-600 to-amber-400",
    shadow: "shadow-amber-500/20",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-10 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">Standard Operating Procedure</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 italic uppercase">
              The <span className="text-blue-600 italic">QA</span> Lifecycle.
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              We don't just find bugs; we implement a systematic barrier against technical debt.
            </p>
          </div>
          <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 flex items-center gap-4">
             <ShieldCheck className="text-blue-600 w-8 h-8" />
             <span className="text-sm font-bold text-slate-700 leading-tight">ISO-aligned <br/>Workflow</span>
          </div>
        </div>

        {/* The Grid / Path */}
        <div className="relative">
          {/* Animated Path Decorative Background - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-white border border-slate-100 rounded-[2rem] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br",
                      step.color,
                      step.shadow
                    )}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-black text-slate-300 transition-colors group-hover:text-slate-600">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Process Link Footer */}
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-500 transition-all">
                    <span>Phase Complete</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-20 text-center relative">
          <div className="inline-flex items-center gap-6 p-2 pr-8 bg-slate-900 rounded-full text-white overflow-hidden">
            <div className="bg-blue-600 px-4 py-2 rounded-full font-black text-[10px] uppercase">Agile Sync</div>
            <p className="text-sm font-bold text-slate-300">
              Integrated with <span className="text-blue-400">Jira</span>, <span className="text-blue-400">GitHub</span>, and <span className="text-blue-400">AWS DevOps</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
