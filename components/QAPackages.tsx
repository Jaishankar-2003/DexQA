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

export default function QAPackages() {
  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-indigo-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            QA Packages
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the right level of QA support for your product stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 p-8 ${
                pkg.highlighted
                  ? "border-accent shadow-xl bg-gradient-to-br from-white to-accent/5"
                  : "border-slate-200 hover:shadow-lg"
              } transition-all`}
            >
              {pkg.highlighted && (
                <div className="mb-4">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                {pkg.name}
              </h3>
              <p className="text-sm font-semibold text-slate-600 mb-1">
                {pkg.for}
              </p>
              <p className="text-slate-600 mb-6 text-sm">{pkg.description}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <svg
                      className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
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
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
