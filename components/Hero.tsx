//import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
//       <div className="max-w-7xl mx-auto relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Content */}
//           <div className="space-y-8">
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-tight">
//               Precision-Driven Quality Assurance
//             </h1>
//             <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
//               Expert QA & software testing services for startups, SaaS products, and enterprises.
//               <br />
//               Delivering reliability through systematic testing and proven methodologies.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="#contact"
//                 className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-medium text-center text-lg shadow-lg hover:shadow-xl"
//               >
//                 Start Your QA Project
//               </Link>
//               <Link
//                 href="#services"
//                 className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium text-center text-lg"
//               >
//                 Explore Services
//               </Link>
//             </div>
//           </div>

//           {/* Right Column - Visual Element */}
//           <div className="hidden lg:block">
//             <div className="relative">
//               {/* Soft indigo background behind card */}
//               <div className="absolute -inset-4 bg-indigo-soft rounded-3xl -z-10"></div>
//               <div className="bg-white rounded-2xl p-12 border border-slate-200 shadow-lg">
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-md">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="h-2 bg-slate-200 rounded w-32 mb-2"></div>
//                       <div className="h-2 bg-slate-200 rounded w-24"></div>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-md">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="h-2 bg-slate-200 rounded w-32 mb-2"></div>
//                       <div className="h-2 bg-slate-200 rounded w-24"></div>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-md">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="h-2 bg-slate-200 rounded w-32 mb-2"></div>
//                       <div className="h-2 bg-slate-200 rounded w-24"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white to-white" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              Engineering-led QA Services
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-primary leading-tight">
              Precision-Driven
              <span className="block text-accent">Quality Assurance</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              Expert QA & software testing services for startups, SaaS products,
              and enterprises — ensuring reliable releases through systematic
              testing and proven methodologies.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:bg-blue-600 transition"
              >
                Start Your QA Project
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-8 py-4 text-lg font-semibold text-primary hover:bg-primary hover:text-white transition"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 pt-6 text-base md:text-lg text-slate-1000">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                10,000+ Test Cases Executed
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Automation & AI-Ready
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Enterprise-Grade QA
              </div>
            </div>
          </div>



          {/* RIGHT VISUAL */}
          <div className="hidden  lg:block lg:col-start-2 lg:pl-5">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-100/60 to-teal-100/60 blur-2xl" />

              <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl p-10">
                <div className="space-y-6">
                  {[
                    { color: "bg-accent", label: "Functional Test Passed" },
                    { color: "bg-secondary", label: "Automation Suite Running" },
                    { color: "bg-primary", label: "Regression Completed" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                    >
                      <div
                        className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center shadow`}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
