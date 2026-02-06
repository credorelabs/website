import React from "react";

export default function CaseStudyScenario() {
  return (
    <section id="case-scenario" className="relative px-4 py-16 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="mx-auto max-w-7xl">
        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-blue-900/5 ring-1 ring-gray-200">
          
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            
            {/* LEFT — ILLUSTRATION WITH ACCENT BG */}
            <div className="relative flex items-center justify-center p-8 sm:p-12 lg:p-20 bg-slate-50 border-b lg:border-b-0 lg:border-r border-gray-100">
              {/* Dot Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />
              
              <div className="relative group">
                {/* Image shadow glow */}
                <div className="absolute inset-4 bg-blue-500/10 blur-2xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-500" />
                <img
                  src="/assets/images/casestudy/section11.png"
                  alt="Export challenge illustration"
                  className="relative z-10 w-full max-w-[320px] md:max-w-md object-contain transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>
            </div>

            {/* RIGHT — CONTENT */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              {/* BADGE */}
              <div className="flex">
                <span className="inline-flex items-center rounded-lg bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 border border-blue-100">
                  The Scenario
                </span>
              </div>

              {/* HEADING */}
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
                Your <span className="text-blue-600">Export</span> <br className="hidden sm:block" />
                Challenge
              </h2>

              {/* CONTENT: Highlighting key pain points */}
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  You’ve secured a{" "}
                  <mark className="bg-blue-50 text-blue-700 font-semibold px-1 rounded">
                    large export order
                  </mark>{" "}
                  from an international buyer. It’s a significant growth opportunity, 
                  but it brings a critical bottleneck.
                </p>

                <div className="flex gap-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic">
                    You need <span className="font-bold text-gray-900">working capital</span> immediately, but payment terms stretch 
                    across <span className="font-bold text-gray-900">60–90 days</span>.
                  </p>
                </div>

                <p className="text-gray-600">
                  Traditional financing is a maze of paperwork, and the risk of 
                  buyer default looms large. How do you unlock liquidity without 
                  waiting months or taking on massive personal risk?
                </p>
              </div>

              {/* OPTIONAL: Mini Stat Footer for the card */}
              <div className=" pt-8 border-t border-gray-100 flex items-center justify-between text-sm">
                <div className="text-gray-400">
                  <span className="font-bold text-gray-900">Primary Goal:</span> Liquidity & Risk Mitigation
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}