const capabilities = [
  {
    title: "AI-Assisted Test Case Generation",
    description:
      "Leverage AI to generate comprehensive test cases from requirements, user stories, and code analysis, reducing manual effort while maintaining coverage.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Smart Regression Selection",
    description:
      "Intelligent test selection algorithms identify which tests to run based on code changes, reducing execution time while maintaining confidence.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Test Data Generation",
    description:
      "Automated generation of realistic test data sets, including edge cases and boundary conditions, to improve test coverage and reduce setup time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Flaky Test Detection",
    description:
      "Machine learning models identify and flag flaky tests, helping teams prioritize fixes and maintain test suite reliability.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "CI/CD Integration",
    description:
      "Seamless integration with CI/CD pipelines, enabling automated test execution, reporting, and quality gates in your deployment workflow.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Automation ROI Optimization",
    description:
      "Data-driven analysis of automation investments, identifying high-value test cases and optimizing test suite composition for maximum efficiency.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function AIAutomation() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-mint-tint">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            AI & Automation Maturity
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            Practical AI and automation capabilities that enhance testing efficiency and reliability
          </p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We integrate AI and automation tools where they add real value, focusing on measurable improvements to test coverage, speed, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:shadow-lg transition-shadow relative"
            >
              {/* Subtle glow behind icon */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-secondary/10 rounded-full blur-xl opacity-50"></div>
              <div className="text-secondary mb-4 relative z-10">{capability.icon}</div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3 relative z-10">
                {capability.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Engineering-Led Approach
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our AI and automation capabilities are built on solid engineering principles. We evaluate tools and techniques based on their practical impact on testing quality and efficiency, not hype. Every capability we offer has been validated in real-world testing scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
