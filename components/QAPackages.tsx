const packages = [
  {
    name: "Starter",
    for: "Early-stage startups & MVPs",
    description: "Essential QA coverage for products in development",
    features: [
      "Manual test case execution",
      "Bug reporting & tracking",
      "Basic test documentation",
      "Weekly status updates",
      "Up to 2 test cycles per release",
    ],
    highlighted: false,
  },
  {
    name: "Core",
    for: "Growing products & teams",
    description: "Comprehensive testing for regular release cycles",
    features: [
      "All Starter features",
      "Exploratory testing sessions",
      "Test automation setup",
      "API testing coverage",
      "Cross-browser & device testing",
      "Bi-weekly test cycles",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    for: "Established SaaS & scale-ups",
    description: "Advanced QA with automation and performance testing",
    features: [
      "All Core features",
      "Full test automation suite",
      "Performance & load testing",
      "Security testing basics",
      "QA process optimization",
      "Dedicated QA engineer",
      "Continuous testing support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    for: "Large organizations & complex systems",
    description: "Custom QA solutions for enterprise-scale requirements",
    features: [
      "All Pro features",
      "Custom testing frameworks",
      "Multi-team coordination",
      "Advanced security testing",
      "Compliance & regulatory testing",
      "QA team training & enablement",
      "24/7 testing support",
      "Dedicated QA team",
    ],
    highlighted: false,
  },
];

// export default function QAPackages() {
//   return (
//     <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-indigo-soft">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
//             QA Packages
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             Choose the right level of QA support for your product stage
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {packages.map((pkg, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-2xl border-2 p-8 ${
//                 pkg.highlighted
//                   ? "border-accent shadow-xl bg-gradient-to-br from-white to-accent/5"
//                   : "border-slate-200 hover:shadow-lg"
//               } transition-all`}
//             >
//               {pkg.highlighted && (
//                 <div className="mb-4">
//                   <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
//                     RECOMMENDED
//                   </span>
//                 </div>
//               )}
//               <h3 className="text-2xl font-heading font-bold text-primary mb-2">
//                 {pkg.name}
//               </h3>
//               <p className="text-sm font-semibold text-slate-600 mb-1">
//                 {pkg.for}
//               </p>
//               <p className="text-slate-600 mb-6 text-sm">{pkg.description}</p>
//               <ul className="space-y-3">
//                 {pkg.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-start space-x-2">
//                     <svg
//                       className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span className="text-sm text-slate-600">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function QAPackages() {
  return (
    <section
      id="packages"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-indigo-soft"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            QA Packages
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the right level of QA support for your product stage
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const isHighlighted = pkg.highlighted;

            return (
              <div
                  key={index}
                  className={`relative group bg-white rounded-2xl p-8 border-2 transition-all duration-300
                    ${
                      isHighlighted
                        ? "border-accent shadow-2xl bg-gradient-to-br from-white to-accent/5 scale-[1.05] ring-2 ring-accent/40"
                        : "border-slate-200 hover:shadow-xl hover:-translate-y-1 opacity-95 hover:opacity-100"
                    }
                  `}
                >
                {/* Recommended Badge */}
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3
                  className={`text-2xl font-heading font-bold mb-2 transition-colors
                    ${isHighlighted ? "text-accent" : "text-primary group-hover:text-accent"}
                  `}
                >
                  {pkg.name}
                </h3>

                {/* Target Audience */}
                <p className="text-sm font-semibold text-slate-600 mb-1">
                  {pkg.for}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2"
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5
                          ${isHighlighted ? "text-accent" : "text-secondary"}
                        `}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="text-sm text-slate-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subtle CTA (non-breaking) */}
                <div className="mt-8">
                  <button
                    className={`w-full py-2.5 rounded-lg text-sm font-medium transition
                      ${
                        isHighlighted
                          ? "bg-accent text-white hover:bg-accent/90"
                          : "border border-slate-200 text-slate-700 hover:border-accent hover:text-accent"
                      }
                    `}
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Reinforcement */}
        <div className="text-center mt-16">
          <p className="text-slate-600">
            Need a custom QA setup or unsure which package fits?
          </p>
          <p className="text-sm text-slate-500 mt-1">
            We’ll help you choose — no commitment.
          </p>
        </div>

      </div>
    </section>
  );
}
