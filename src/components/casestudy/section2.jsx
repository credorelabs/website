import React from "react";

export default function ChallengesSection() {
  const challenges = [
    {
      title: "Cash Flow Gap",
      description:
        "Extended payment terms create liquidity constraints that prevent you from taking on new orders.",
      image: "/assets/images/use-cases/1.png",
    },
    {
      title: "Buyer Default Risk",
      description:
        "International buyers may fail to pay, leaving you exposed to significant financial losses.",
      image: "/assets/images/use-cases/11.2.png",
    },
    {
      title: "Complex Financing",
      description:
        "Traditional loans require collateral and lengthy approval processes that slow down growth.",
      image: "/assets/images/use-cases/11.3.png",
    },
    {
      title: "Limited Scalability",
      description:
        "Without reliable financing, you can't accept larger orders or expand into new markets.",
      image: "/assets/images/use-cases/11.4.png",
    },
  ];

  return (
    <section className="bg-slate-50/50 py-16 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Centered on mobile, better balance on desktop */}
        <div className="mx-auto mb-16 lg:mb-20 max-w-3xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[10px] font-bold uppercase tracking-widest text-red-600 border border-red-100 mb-4">
            Market Obstacles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight">
            The Challenges You Face
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            These structural barriers in international trade prevent even the most 
            successful exporters from reaching their full potential.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-2"
            >
              {/* Left Accent: Hidden by default, grows on hover */}
              <span className="absolute left-0 top-1/4 h-1/2 w-1.5 rounded-r-full bg-red-500 transition-all duration-300 group-hover:h-3/4 group-hover:top-[12.5%]" />

              {/* Icon Container: Square-to-Circle transition */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:rounded-full group-hover:bg-red-500 group-hover:text-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-8 w-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>

              {/* Text Content */}
              <h3 className="mb-4 text-xl font-bold text-[#0B2545] group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
              
              {/* Subdued number for visual rhythm */}
              <div className="absolute bottom-6 right-8 text-4xl font-bold text-gray-50 pointer-events-none group-hover:text-red-50/50 transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}