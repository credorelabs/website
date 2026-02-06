import React from "react";

export default function PlatformFeatures() {
  const eblFeatures = [
    {
      title: "Unmatched Security",
      desc: "Leverages DLT for a tamper-proof, single source of truth.",
      icon: "/assets/images/platforms/shield-p.png",
    },
    {
      title: "Global Interoperability",
      desc: "Connect with any trade partner on any compliant platform.",
      icon: "/assets/images/platforms/global-p.png",
    },
    {
      title: "Legal Enforceability",
      desc: "Fully compliant with international e-document standards.",
      icon: "/assets/images/platforms/legal-p.png",
    },
  ];

  const apiFeatures = [
    { title: "Promissory Notes", icon: "/assets/images/platforms/pnote-p.png" },
    { title: "Bills of Exchange", icon: "/assets/images/platforms/boe-p.png" },
    { title: "RESTful Endpoints", icon: "/assets/images/platforms/restful-p.png" },
    { title: "Clear Documentation", icon: "/assets/images/platforms/clear-p.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-32 space-y-24 md:space-y-40">
      
      {/* SECTION 1: Digital Bill of Lading */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* CONTENT */}
        <div className="order-2 lg:order-1">
          <header>
            <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-[10px] font-bold uppercase tracking-widest text-sky-600 border border-sky-100">
              Digital Bill of Lading
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              A Legally Enforceable <span className="text-sky-500">eBL</span>
            </h2>
          </header>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Create, manage, and transfer title of electronic Bills of Lading
            with the highest level of security. Built on 
            <strong className="text-gray-900"> MLETR-compliant </strong> 
            standards for global legal certainty.
          </p>

          <div className="mt-10 space-y-4">
            {eblFeatures.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 hover:border-sky-300"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50 transition-colors duration-300">
                  <img src={item.icon} alt="" className="w-6 h-6 group-hover:invert transition-all" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE WITH DECORATION */}
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-sky-100 to-transparent rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500" />
          <img
            src="/assets/images/platforms/30.png"
            alt="eBL Interface"
            className="rounded-2xl shadow-2xl w-full object-cover animate-float"
          />
        </div>
      </div>

      {/* SECTION 2: Document Exchange APIs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* IMAGE */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-bl from-indigo-100 to-transparent rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500" />
          <img
            src="/assets/images/platforms/rrr.png"
            alt="API Integration"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <header>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-[10px] font-bold uppercase tracking-widest text-indigo-600 border border-indigo-100">
              Document Exchange APIs
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Seamless Document <span className="text-indigo-500">Integration</span>
            </h2>
          </header>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Our RESTful APIs allow for the integration to create, issue,
            and manage a wide range of digital trade documents. Automate 
            workflows with developer-friendly tools.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {apiFeatures.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition-all hover:bg-white hover:shadow-md hover:border-indigo-300 group"
              >
                <img src={item.icon} alt="" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-700 text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation (Add to your global CSS or Tailwind Config) */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}