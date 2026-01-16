export default function TrustMetrics() {
  const metrics = [
    {
      value: "10,000+",
      label: "Test Cases Executed",
    },
    {
      value: "50+",
      label: "Domains Covered",
    },
    {
      value: "15+",
      label: "Years QA Expertise",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center relative">
              {/* Divider lines between metrics */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20"></div>
              )}
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
