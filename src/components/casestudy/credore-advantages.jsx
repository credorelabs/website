import React from "react";

export default function CredoreAdvantage() {
  const advantages = [
    {
      title: "Improved Cash Flow",
      desc: "Access working capital within 24-48 hours to fulfill orders and grow operations.",
     image: "/assets/images/use-cases/green-tik.png",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Zero Credit Risk",
      desc: "Non-recourse protection means buyer defaults don't impact your bottom line.",
      image: "/assets/images/use-cases/green-tik.png",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Scale with Confidence",
      desc: "Take on larger orders and expand into new markets without financial constraints.",
      image: "/assets/images/use-cases/green-tik.png",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "No Collateral Required",
      desc: "Invoice-based financing that doesn't tie up your assets or property.",
     image: "/assets/images/use-cases/green-tik.png",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Flexible Terms",
      desc: "Financing that adapts to your business cycle and seasonal demands.",
     image: "/assets/images/use-cases/green-tik.png",
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Expert Support",
      desc: "Dedicated team to guide you through every step of the factoring process.",
     image: "/assets/images/use-cases/green-tik.png",
      color: "bg-rose-50 text-rose-600"
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F2FFFA] via-white to-white py-20 lg:py-32 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-96 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading: Refined Typography */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-3 block">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight leading-tight">
            The Credore <span className="text-emerald-500">Advantage</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600 leading-relaxed">
            Transform your export business by removing financial friction and 
            unlocking global growth with confidence.
          </p>
        </div>

        {/* Cards Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start rounded-[2rem] bg-white p-8 lg:p-10 border border-emerald-100/50 shadow-xl shadow-emerald-900/5 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1.5"
            >
              {/* Dynamic Icon Container */}
              <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${item.color}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-8 w-8 object-contain"
                />
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-[#0B2545] mb-4 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h4>

              <p className="text-gray-500 text-base leading-relaxed">
                {item.desc}
              </p>
              
              {/* Subtle visual link to the footer of the card */}
              <div className="mt-6 flex items-center gap-2 text-emerald-600 font-bold text-xs opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}