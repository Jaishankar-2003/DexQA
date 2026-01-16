const toolCategories = [
  {
    category: "Web Testing",
    borderColor: "border-l-accent", // Blue
    tools: [
      { name: "Playwright", logo: "PW" },
      { name: "Cypress", logo: "CY" },
      { name: "Selenium", logo: "SE" },
      { name: "WebdriverIO", logo: "WD" },
      { name: "CodeceptJS", logo: "CJ" },
      { name: "Selenide", logo: "SN" },
      { name: "Watir", logo: "WT" },
    ],
  },
  {
    category: "Mobile Testing",
    borderColor: "border-l-secondary", // Teal
    tools: [
      { name: "Appium", logo: "AP" },
      { name: "Calabash", logo: "CB" },
    ],
  },
  {
    category: "Performance Testing",
    borderColor: "border-l-purple-500", // Purple-blue
    tools: [
      { name: "k6", logo: "k6" },
    ],
  },
  {
    category: "BDD Frameworks",
    borderColor: "border-l-green-500", // Green-teal
    tools: [
      { name: "Cucumber", logo: "CU" },
      { name: "Behave", logo: "BH" },
      { name: "SpecFlow", logo: "SF" },
    ],
  },
  {
    category: "Unit & Integration Testing",
    borderColor: "border-l-indigo-500", // Indigo
    tools: [
      { name: "Jest", logo: "JS" },
      { name: "Vitest", logo: "VT" },
      { name: "Mocha", logo: "MO" },
      { name: "TestNG", logo: "TN" },
    ],
  },
  {
    category: "Other Frameworks",
    borderColor: "border-l-slate-400",
    tools: [
      { name: "Robot Framework", logo: "RF" },
    ],
  },
];

export default function FrameworksTools() {
  return (
    <section id="tools" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Tools & Frameworks We Use
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            Tool-agnostic. Strategy-driven.
          </p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We select the right tools for your stack and requirements, ensuring optimal test coverage and maintainability.
          </p>
        </div>

        <div className="space-y-12">
          {toolCategories.map((category, catIndex) => (
            <div key={catIndex} className={`bg-slate-50 rounded-2xl border-l-4 ${category.borderColor} p-6 md:p-8`}>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-accent font-heading font-bold text-sm">
                        {tool.logo}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-slate-700">{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8 md:p-12 text-center">
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            <span className="font-semibold text-primary">Not seeing your preferred tool?</span>{" "}
            We're tool-agnostic and can work with any testing framework or toolchain that fits your technology stack.
          </p>
        </div>
      </div>
    </section>
  );
}
