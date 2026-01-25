const benefits = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Proven Methodologies",
    description: "Systematic testing approaches backed by industry best practices",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Fast Turnaround",
    description: "Rapid test execution and reporting without compromising quality",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Expert Team",
    description: "Experienced QA engineers with deep technical and domain expertise",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
    title: "Reliable Delivery",
    description: "Consistent, on-time delivery with clear communication throughout",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Scalable Solutions",
    description: "QA processes that grow with your product and team",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Transparent Pricing",
    description: "Clear, predictable pricing with no hidden costs",
  },
];

// export default function WhyDexQA() {
//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
//             Why DexQA
//           </h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             Engineering-led QA that delivers results you can trust
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow"
//             >
//               <div className="text-accent mb-4">{benefit.icon}</div>
//               <h3 className="text-xl font-heading font-semibold text-primary mb-2">
//                 {benefit.title}
//               </h3>
//               <p className="text-slate-600">{benefit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


const colorVariants = [
  {
    bg: "bg-accent/10",
    text: "text-accent",
    hoverBg: "group-hover:bg-accent",
  },
  {
    bg: "bg-secondary/10",
    text: "text-secondary",
    hoverBg: "group-hover:bg-secondary",
  },
  {
    bg: "bg-indigo-400/10",
    text: "text-indigo-500",
    hoverBg: "group-hover:bg-indigo-500",
  },
  {
    bg: "bg-emerald-400/10",
    text: "text-emerald-500",
    hoverBg: "group-hover:bg-emerald-500",
  },
  {
    bg: "bg-orange-400/10",
    text: "text-orange-500",
    hoverBg: "group-hover:bg-orange-500",
  },
  {
    bg: "bg-rose-400/10",
    text: "text-rose-500",
    hoverBg: "group-hover:bg-rose-500",
  },
];

export default function WhyDexQA() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Why teams trust DexQA
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-5">
            Built for Quality. Proven by Results.
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Engineering-led QA partnerships that reduce risk, increase confidence,
            and scale with your product.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const color = colorVariants[index % colorVariants.length];

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-slate-200 p-7
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl hover:border-transparent"
              >
                {/* Card glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                    ${color.bg}`}
                />

                {/* Content */}
                <div className="relative z-10">

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6
                      ${color.bg} ${color.text}
                      transition-all duration-300
                      ${color.hoverBg} group-hover:text-white`}
                  >
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-heading font-semibold mb-3
                      text-primary transition-colors group-hover:${color.text}`}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Subtle divider */}
                  <div className="mt-6 h-px w-12 bg-slate-200 group-hover:bg-current transition" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Footer */}
        <div className="text-center mt-20">
          <p className="text-slate-600 text-sm">
            Trusted by startups, scale-ups, and enterprise teams worldwide
          </p>
        </div>

      </div>
    </section>
  );
}
