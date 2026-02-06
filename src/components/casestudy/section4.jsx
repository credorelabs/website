import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Ship & Invoice",
      desc: "You ship goods and generate export invoices as usual.",
     image: "/assets/images/use-cases/ship&Invoice.png",
      accent: "from-blue-500 to-blue-600"
    },
    {
      title: "Submit to Credore",
      desc: "Upload invoices to our secure platform for rapid review.",
     image: "/assets/images/use-cases/submit.png",
      accent: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Quick Approval",
      desc: "Our automated system verifies and approves within hours.",
      image: "/assets/images/use-cases/quickapproval.png",
      accent: "from-teal-500 to-teal-600"
    },
    {
      title: "Receive Funds",
      desc: "Get up to 90% of invoice value in your account immediately.",
      image: "/assets/images/use-cases/fund.png",
      accent: "from-emerald-500 to-emerald-600"
    },
    {
      title: "We Manage Risk",
      desc: "Credore handles collections and assumes all default risk.",
      image: "/assets/images/use-cases/warning.png",
      accent: "from-orange-500 to-orange-600"
    },
  ];

  return (
    <section className="bg-slate-50/50 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, streamlined process designed to get you funded without the traditional banking bureaucracy.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative mt-24">
          
          {/* Desktop Connector Line: Using a gradient for a "flow" feel */}
          <div className="absolute top-10 left-[10%] right-[10%] hidden h-[3px] bg-gradient-to-r from-blue-100 via-teal-100 to-orange-100 lg:block" />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((item, index) => (
              <div key={index} className="group relative flex flex-col items-center">
                
                {/* Step Number Bubble */}
                <div className={`z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} text-2xl font-black text-white shadow-xl ring-8 ring-white transition-transform duration-300 group-hover:scale-110`}>
                  {index + 1}
                  {/* Pulse Effect for the active step feel */}
                  <span className="absolute inset-0 rounded-full bg-inherit opacity-20 animate-ping group-hover:animate-none" />
                </div>

                {/* Content Card */}
                <div className="flex flex-col items-center w-full bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 min-h-[280px]">
                  
                  {/* Icon Wrapper */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-8 w-8 object-contain transition-transform group-hover:rotate-12"
                    />
                  </div>

                  <h4 className="text-xl font-bold text-[#0B2545] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>

                {/* Mobile/Tablet Arrow (Vertical) */}
                {index !== steps.length - 1 && (
                  <div className="my-6 lg:hidden">
                    <svg className="w-6 h-6 text-blue-200 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}