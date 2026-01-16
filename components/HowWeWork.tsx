const steps = [
  {
    step: "01",
    title: "Requirements Analysis",
    description:
      "We analyze your requirements, user stories, and technical specifications to understand testing scope and priorities.",
    color: "accent", // Blue
  },
  {
    step: "02",
    title: "Test Planning",
    description:
      "Comprehensive test strategy and plan development, including test case design, risk assessment, and resource allocation.",
    color: "secondary", // Teal
  },
  {
    step: "03",
    title: "Test Design & Development",
    description:
      "Creation of detailed test cases, automation scripts, and test data. Framework setup and tool configuration.",
    color: "accent", // Blue
  },
  {
    step: "04",
    title: "Test Execution",
    description:
      "Systematic execution of manual and automated tests, with real-time tracking and progress reporting.",
    color: "secondary", // Teal
  },
  {
    step: "05",
    title: "Defect Management",
    description:
      "Clear, actionable bug reporting with prioritization, tracking, and verification of fixes.",
    color: "accent", // Blue
  },
  {
    step: "06",
    title: "Reporting & Analysis",
    description:
      "Comprehensive test reports with metrics, coverage analysis, and recommendations for continuous improvement.",
    color: "secondary", // Teal
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            How We Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A systematic QA lifecycle that ensures thorough coverage and clear communication
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-secondary to-accent" style={{ top: "3rem" }}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((item, index) => {
              const bgColor = item.color === "accent" ? "bg-accent/10" : "bg-secondary/10";
              const textColor = item.color === "accent" ? "text-accent" : "text-secondary";
              const borderColor = item.color === "accent" ? "border-accent" : "border-secondary";
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 relative hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center border-2 ${borderColor}`}>
                        <span className={`${textColor} font-heading font-bold text-xl`}>
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our process is iterative and adaptable. We work closely with your team to integrate QA seamlessly into your development workflow, ensuring quality is built in from the start.
          </p>
        </div>
      </div>
    </section>
  );
}
