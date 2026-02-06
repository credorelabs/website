import React from "react";

const approachData = [
  {
    title: "eBL Digitization",
    description:
      "Transform paper Bills of Lading into secure digital assets with legal validity across global jurisdictions, leveraging MLETR-compliant standards.",
    icon: "/assets/images/about-us/first.png",
    accent: "text-blue-600",
    bg: "bg-blue-600",
    shadow: "hover:shadow-blue-500/10"
  },
  {
    title: "Interoperability",
    description:
      "Seamless data exchange between disparate trade platforms and ERP systems, ensuring a unified source of truth across the supply chain.",
   icon: "/assets/images/about-us/second.png",
    accent: "text-purple-600",
    bg: "bg-purple-600",
    shadow: "hover:shadow-purple-500/10"
  },
  {
    title: "Fraud Prevention",
    description:
      "Immutable blockchain records and cryptographic verification prevent double financing and document forgery in real-time.",
    icon: "/assets/images/about-us/third.png",
    accent: "text-teal-600",
    bg: "bg-teal-600",
    shadow: "hover:shadow-teal-500/10"
  },
  {
    title: "Trade Velocity",
    description:
      "Reduce document transfer times from weeks to minutes, accelerating payment cycles and global cargo release.",
    icon: "/assets/images/about-us/fourth.png",
    accent: "text-orange-500",
    bg: "bg-orange-500",
    shadow: "hover:shadow-orange-500/10"
  },
];

export default function OurApproach() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F4F4F7] overflow-hidden">
      
      {/* BACKGROUND PATTERN: Tuned for better contrast and subtlety */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "url('/assets/images/overlay-image.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our <span className="text-blue-600">Approach</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive digital trade solutions powered by blockchain 
            infrastructure, designed to eliminate friction and enhance security.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {approachData.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-10 shadow-sm border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.shadow}`}
            >
              {/* Corner Decorative Element */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-tr-3xl opacity-[0.03] transition-opacity group-hover:opacity-[0.08] ${item.bg}`} 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* ICON CONTAINER */}
                <div
                  className={`w-14 h-14 shrink-0 rounded-2xl ${item.bg} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-[10deg]`}
                >
                  <img src={item.icon} alt={item.title} className="w-7 h-7 brightness-0 invert" />
                </div>

                <div className="flex-1">
                  {/* TITLE */}
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:${item.accent}`}>
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.description}
                  </p>
                  
                  {/* LEARN MORE CTA: Hidden by default, slides in on hover */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <span className={item.accent}>View technical specs</span>
                    <svg className={`w-4 h-4 ${item.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}