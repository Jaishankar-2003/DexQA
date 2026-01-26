"use client";

import { useState } from "react";

export default function ContactDexQA() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    workEmail: "",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Frontend-only: log and show confirmation
  //   console.log("Contact form submitted:", formData);
  //   setFormData({ fullName: "", company: "", workEmail: "", message: "" });
  //   alert("Thank you for reaching out! We'll respond within 24 hours.");
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) throw new Error("Failed");
  
      alert("Thank you for reaching out! We'll respond within 24 hours.");
      setFormData({ fullName: "", company: "", workEmail: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };
  





  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id = "contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 tracking-tight">

            Let's Talk Quality
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tell us about your product and quality challenges.
            <br />
            Our QA experts will respond within 24 hours.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            {/* Phone Card */}
            <a
              href="tel:9842139997"
              className="block bg-white rounded-2xl border border-slate-200 p-6
transition-all duration-300 group
hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 hover:border-blue-200
       hover:ring-1 hover:ring-blue-300/40"

            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                    Phone
                  </h3>
                  <p className="text-xl font-medium text-accent">9842139997</p>
                  <p className="text-sm text-slate-500 mt-1">Click to call</p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:dexqatechnology@gmail.com"
              className="block bg-white rounded-2xl border border-slate-200 p-6
transition-all duration-300 group
hover:-translate-y-1 hover:shadow-xl hover:bg-green-50 hover:border-green-200
       hover:ring-1 hover:ring-green-300/40"

            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                    Email
                  </h3>
                  <p className="text-lg font-medium text-secondary break-all">
                    dexqatechnology@gmail.com
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Click to email</p>
                </div>
              </div>
            </a>

            {/* Trust Notes */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">

              <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                What to Expect
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
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
                  <p className="text-slate-600">Confidential discussion</p>
                </div>
                <div className="flex items-start space-x-3">
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
                  <p className="text-slate-600">No obligation consultation</p>
                </div>
                <div className="flex items-start space-x-3">
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
                  <p className="text-slate-600">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8
shadow-lg ring-1 ring-slate-200/50">

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg  focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-none"
                    placeholder="Tell us about your product and quality challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-4 rounded-lg
                      font-semibold text-lg
                      transition-all duration-300
                      hover:bg-accent/90 hover:-translate-y-0.5
                      shadow-lg hover:shadow-2xl
                      focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  Talk to a QA Expert
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

