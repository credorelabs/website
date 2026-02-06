import React from "react";

export default function SolutionsBlocks() {
  const sections = [
    {
      tag: "For carriers",
      title: "eBL issuance that works everywhere—without switching systems",
      points: [
        "Interoperable eBL issuance across platforms",
        "Reduced document circulation costs and delays",
        "Works with multiple eBL environments",
      ],
      benefits: "Shipping lines, VOCCs, Freight Forwarders",
      accent: "teal", // Used for dynamic class mapping
      bg: "bg-[#f0f9f9]", // Refined Teal-50
      image: "/assets/images/solutions/s1.png",
      reverse: false,
    },
    {
      tag: "For banks & financial institutions",
      title: "Secure, validated financing for digital trade documents",
      points: [
        "One connection to multiple eBL platforms",
        "Faster customer onboarding",
        "Instant digital title validation",
        "Secure financing workflows",
      ],
      benefits: "Commercial Banks, Trade Finance Providers, Insurance Companies",
      accent: "orange",
      bg: "bg-[#fffaf5]", // Refined Orange-50
      image: "/assets/images/solutions/s2.png",
      reverse: true,
    },
    {
      tag: "For platforms & regulators",
      title: "Cross-platform interoperability with legal enforceability",
      points: [
        "Interoperability pilot support",
        "Cross-platform legal enforceability",
        "Multi-jurisdiction recognition",
      ],
      benefits: "eBL Platforms, Customs Authorities, Port Operators, Trade Regulators",
      accent: "teal",
      bg: "bg-[#f0f9f9]",
      image: "/assets/images/solutions/s3.png",
      reverse: false,
    },
    {
      tag: "For exporters & corporates",
      title: "End-to-end visibility without portal juggling",
      points: [
        "Faster documentation",
        "No portal juggling",
        "Real-time visibility & compliance",
      ],
      benefits: "Exporters, Importers, Supply Chain Managers, Corporate Trade Teams",
      accent: "orange",
      bg: "bg-[#fffaf5]",
      image: "/assets/images/solutions/s4.png",
      reverse: true,
    },
  ];

  return (
    <section id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 space-y-12 lg:space-y-20">
      {sections.map((item, index) => (
        <div 
          key={index} 
          className={`${item.bg} rounded-[2.5rem] p-8 lg:p-16 border border-black/5 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 group`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* TEXT CONTENT */}
            <div className={`${item.reverse ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`h-1.5 w-6 rounded-full ${item.accent === 'teal' ? 'bg-teal-500' : 'bg-orange-500'}`} />
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${item.accent === 'teal' ? 'text-teal-700' : 'text-orange-700'}`}>
                  {item.tag}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
                {item.title}
              </h3>

              <ul className="space-y-4 mb-8">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 group/item">
                    <div className={`mt-1.5 flex-shrink-0 h-2 w-2 rounded-full transition-transform group-hover/item:scale-150 ${item.accent === 'teal' ? 'bg-teal-500' : 'bg-orange-500'}`} />
                    <span className="text-base md:text-lg leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="inline-flex flex-wrap items-center gap-2 bg-white/60 backdrop-blur-sm border border-black/5 px-5 py-3 rounded-2xl">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Who benefits:</span>
                <span className="text-sm font-medium text-gray-800 italic">{item.benefits}</span>
              </div>
            </div>

            {/* IMAGE AREA */}
            <div
              className={`relative flex justify-center transition-all duration-700 group-hover:scale-105 ${
                item.reverse ? "lg:order-1" : "lg:order-2"
              }`}
            >
              {/* Subtle background glow behind images */}
              <div className={`absolute inset-0 blur-3xl opacity-20 rounded-full scale-75 -z-10 ${item.accent === 'teal' ? 'bg-teal-400' : 'bg-orange-400'}`} />
              
              <img
                src={item.image}
                alt={item.title}
                className="max-w-[280px] md:max-w-md w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}