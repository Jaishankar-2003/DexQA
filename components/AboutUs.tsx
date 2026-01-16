// export default function AboutUs() {
//   const principles = [
//     "Systematic test planning and execution",
//     "Risk-based testing prioritization",
//     "Clear, actionable bug reporting",
//     "Continuous process improvement",
//     "Transparent communication and reporting",
//     "Domain expertise across industries",
//   ];

//   // Keywords to highlight in teal
//   const highlightKeywords = (text: string) => {
//     const keywords = ['precision-driven', 'engineering-led', 'systematic', 'technical expertise', 'reliable software'];
//     let highlightedText = text;
//     keywords.forEach(keyword => {
//       const regex = new RegExp(`(${keyword})`, 'gi');
//       highlightedText = highlightedText.replace(regex, `<span class="text-secondary font-semibold">$1</span>`);
//     });
//     return highlightedText;
//   };

//   return (
//     <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-warm">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Column - Mission */}
//           <div className="space-y-6">
//             <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
//               About DexQA
//             </h2>
//             <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
//               <p dangerouslySetInnerHTML={{
//                 __html: highlightKeywords(
//                   "DexQA delivers precision-driven quality assurance services that help engineering teams ship reliable software. We combine systematic testing methodologies with deep technical expertise to identify issues before they impact users."
//                 )
//               }}></p>
//               <p dangerouslySetInnerHTML={{
//                 __html: highlightKeywords(
//                   "Our approach is engineering-led: we understand code, architecture, and the challenges of building at scale. We work as an extension of your team, providing clear insights and actionable feedback that helps you make informed decisions."
//                 )
//               }}></p>
//               <p>
//                 Whether you're a startup launching your MVP or an enterprise scaling
//                 complex systems, we adapt our processes to fit your needs while
//                 maintaining the rigor that quality demands.
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Principles */}
//           <div className="space-y-6">
//             <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary">
//               Our QA Principles
//             </h3>
//             {/* White card with left border */}
//             <div className="bg-white rounded-2xl border-l-4 border-accent p-6 shadow-sm">
//               <ul className="space-y-4">
//                 {principles.map((principle, index) => (
//                   <li key={index} className="flex items-start space-x-3">
//                     <div className="flex-shrink-0 mt-1">
//                       <svg
//                         className="w-6 h-6 text-secondary"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-lg text-slate-600">{principle}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function AboutUs() {
  const principles = [
    "Systematic test planning and execution",
    "Risk-based testing prioritization",
    "Clear, actionable bug reporting",
    "Continuous QA process improvement",
    "Transparent communication and reporting",
    "Strong domain expertise across industries",
  ];

  const highlightKeywords = (text: string) => {
    const keywords = [
      "precision-driven",
      "engineering-led",
      "systematic",
      "technical expertise",
      "reliable software",
    ];
    let highlightedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span class="text-secondary font-semibold">$1</span>`
      );
    });
    return highlightedText;
  };

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — STORY & TRUST */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                About DexQA
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A quality partner for teams that care deeply about reliability.
              </p>
            </div>

            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p
                dangerouslySetInnerHTML={{
                  __html: highlightKeywords(
                    "DexQA delivers precision-driven quality assurance services that help engineering teams ship reliable software. We combine systematic testing methodologies with deep technical expertise to identify risks early and prevent costly failures."
                  ),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: highlightKeywords(
                    "Our approach is engineering-led. We understand code, system architecture, and the realities of building at scale. Instead of surface-level testing, we focus on what truly impacts stability, performance, and user trust."
                  ),
                }}
              />
              <p>
                From fast-moving startups to large enterprises, we adapt our QA
                processes to your product lifecycle while maintaining the rigor
                required for production-grade quality.
              </p>
            </div>





            {/* TRUST METRICS */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">10k+</p>
                <p className="text-sm text-slate-500">Test cases executed</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">Multi-domain</p>
                <p className="text-sm text-slate-500">Industry expertise</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">QA-first</p>
                <p className="text-sm text-slate-500">Engineering mindset</p>
              </div>
            </div> */}

{/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
  {/* Metric 1 */}
  {/*  */}





          </div>

          {/* RIGHT — PRINCIPLES */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary">
              Our QA Principles
            </h3>

            <div className="relative bg-white rounded-3xl border border-slate-200 p-8 shadow-md">
              {/* Accent bar */}
              {/* <div className="absolute left-0 top-8 h-12 w-1.5 bg-accent rounded-full" /> */}

              <ul className="space-y-5 pl-4">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-secondary"
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
                      </div>
                    </div>
                    <span className="text-lg text-slate-600">
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TRUST STATEMENT */}
            {/* <p className="text-sm text-slate-500 max-w-md">
              Our principles guide every engagement — from early discovery to
              release validation — ensuring consistent, measurable quality.
            </p> */}
          </div>
        </div>
      </div>




      <div className="max-w-5xl mx-auto px-4">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 pt-12">
    {/* Metric 1 */}
    <div className="group relative rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
          <svg
            className="h-5 w-5 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2a4 4 0 014-4h2"
            />
          </svg>
        </div>

        <div>
          <p className="text-2xl font-semibold text-primary leading-tight">
            10k+
          </p>
          <p className="text-sm text-slate-500">
            Test cases executed
          </p>
        </div>
      </div>
    </div>

    {/* Metric 2 */}
    <div className="group relative rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50">
          <svg
            className="h-5 w-5 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6l4 2"
            />
          </svg>
        </div>

        <div>
          <p className="text-xl font-semibold text-primary leading-tight">
            Multi-domain
          </p>
          <p className="text-sm text-slate-500">
            Industry expertise
          </p>
        </div>
      </div>
    </div>

    {/* Metric 3 */}
    <div className="group relative rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100">
          <svg
            className="h-5 w-5 text-primary"
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
        </div>

        <div>
          <p className="text-xl font-semibold text-primary leading-tight">
            QA-first
          </p>
          <p className="text-sm text-slate-500">
            Engineering mindset
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}

