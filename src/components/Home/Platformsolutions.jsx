import React from "react";

// --- Icons (Inline SVGs for zero dependencies) ---
const Icons = {
  Document: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Api: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Bill: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  ),
  Scale: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  Chip: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Network: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
};

const solutions = [
  {
    title: "Digital Bill of Lading (eBL)",
    desc: "Legally recognized eBLs with MLTER compliance—enabling instant transfers, reduced fraud, and secure blockchain workflows.",
    Icon: Icons.Document,
    color: "text-orange-600",
    bg: "bg-orange-50",
    hoverBorder: "hover:border-orange-200",
  },
  {
    title: "Document Exchange APIs",
    desc: "RESTful APIs for seamless integration—enabling secure document exchange, verification, and cross-platform tracking.",
    Icon: Icons.Api,
    color: "text-teal-600",
    bg: "bg-teal-50",
    hoverBorder: "hover:border-teal-200",
  },
  {
    title: "Promissory Notes & BoE",
    desc: "Digitally negotiable instruments with cryptographic security for faster payments and stronger liquidity.",
    Icon: Icons.Bill,
    color: "text-blue-600",
    bg: "bg-blue-50",
    hoverBorder: "hover:border-blue-200",
  },
];

const infrastructureItems = [
  {
    Icon: Icons.Scale,
    title: "Legal Foundation (MLTER)",
    desc: "Compliance framework ensuring regulatory adherence and legal validity across jurisdictions.",
  },
  {
    Icon: Icons.Chip,
    title: "Technical Architecture",
    desc: "Scalable infrastructure designed for high-performance operations and seamless integration.",
  },
  {
    Icon: Icons.Network,
    title: "Interoperability Pillars",
    desc: "Universal standards enabling cross-platform communication and data exchange.",
  },
];

const PlatformSolutions = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <span className="text-slate-600 text-xs font-bold tracking-widest uppercase">
              Platform Infrastructure
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Core Platform Solutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Interoperable modules supporting secure, paperless digital trade through advanced cryptographic verification.
          </p>
        </div>

        {/* TOP CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {solutions.map((item, i) => (
            <div
              key={i}
              className={`
                group bg-white rounded-2xl p-8 
                border border-slate-200 shadow-sm 
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:-translate-y-1
                ${item.hoverBorder}
              `}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.bg}`}>
                <div className={item.color}>
                    <item.Icon />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                {item.desc}
              </p>
{/* 
              <a href="#" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                Learn More <Icons.ArrowRight />
              </a> */}
            </div>
          ))}
        </div>

        {/* ================= DARK FEATURE SECTION ================= */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl">
          {/* Decorative Gradient Blob */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 p-8 md:p-12 lg:p-16 items-center">
            
            {/* Left: Visual Representation */}
            <div className="relative flex justify-center items-center order-1 lg:order-2">
                {/* Abstract Tech Visual using CSS borders */}
                <div className="relative w-full max-w-sm aspect-square border border-slate-700 rounded-full flex items-center justify-center">
                    <div className="absolute w-[80%] h-[80%] border border-slate-600 rounded-full animate-pulse"></div>
                    <div className="absolute w-[60%] h-[60%] border border-slate-500 rounded-full animate-pulse"></div>
                    <div className="relative z-10 bg-gradient-to-tr from-blue-600 to-teal-500 w-48 h-48 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <img
                          src="/assets/images/platform-left.png"
                          alt="Interoperability Network"
                          className="w-[300px] h-[300px] md:w-[320px] md:h-[320px] object-contain"
                        />
                        {/* <Icons.Network /> */}
                    </div>
                    {/* Floating Orbs */}
                    <div className="absolute top-10 left-10 w-4 h-4 bg-teal-400 rounded-full blur-sm"></div>
                    <div className="absolute bottom-16 right-12 w-3 h-3 bg-orange-400v "></div>
                </div>
            </div>

            {/* Right: Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">
                Enterprise Foundation
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Our Interoperability <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Network</span>
              </h3>

              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                A comprehensive ecosystem built on three foundational pillars, ensuring seamless integration, compliance, and robust architecture.
              </p>

              {/* Stacked Cards */}
              <div className="space-y-4">
                {infrastructureItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-teal-400">
                      <item.Icon />
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PlatformSolutions;