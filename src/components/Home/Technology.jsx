import React from "react";

const cards = [
  {
    title: "Financial Institutions",
    image: "/assets/images/tech-financial.jpg",
    desc: "Streamline letter of credit processing, reduce operational costs, and enhance customer experience with digital workflows.",
    points: [
      "Automated compliance checking",
      "Real-time document verification",
      "Reduced processing time",
    ],
  },
  {
    title: "Suppliers & Buyers",
    image: "/assets/images/tech-suppliers.jpg",
    desc: "Get faster payments, reduce documentation errors, and improve cash flow with digitized trade processes.",
    points: [
      "Faster payment processing",
      "Digital document management",
      "Enhanced transparency",
    ],
  },
  {
    title: "Corporates",
    image: "/assets/images/tech-corporates.jpg",
    desc: "Optimize working capital, reduce operational risks, and gain complete visibility into your trade operations.",
    points: [
      "Working capital optimization",
      "Risk management tools",
      "Complete trade visibility",
    ],
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-blue-600 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Technology = () => {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
              Technology Infrastructure
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Powering Every Stakeholder <br className="hidden md:block" />
            in the Trade Ecosystem
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Credore’s comprehensive blockchain infrastructure serves all
            participants, providing tailored solutions that bridge the gap
            between traditional finance and modern technology.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="
                group relative flex flex-col h-full
                bg-white rounded-2xl
                border border-slate-200
                shadow-sm hover:shadow-2xl hover:border-blue-200
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 overflow-hidden cursor-pointer
              "
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                {/* Fallback Overlay if image fails or for styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    w-full h-full object-cover
                    transform transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-grow p-6 lg:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                  {card.desc}
                </p>

                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <ul className="space-y-3">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm font-medium text-slate-700">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;