import React from "react";

const partners = [
  { name: "Govt of India", logo: "/assets/images/gov.png" },
  { name: "Vishesh", logo: "/assets/images/partners/vinners.png" },
  { name: "Apiary", logo: "/assets/images/apiary.png" },
  { name: "PadUp", logo: "/assets/images/padup.png" },
  { name: "Startup India", logo: "/assets/images/kiit-tbi.png" },
  { name: "TIDE 2.0", logo: "/assets/images/tide-2.png" },
  { name: "Parivartan", logo: "/assets/images/hdfc-bank.png" },
];

const TrustedBy = () => {
  return (
    <section className="relative py-16 bg-[#f2f2f2] overflow-hidden">
      
      {/* BACKGROUND OVERLAY */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/overlay-image.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "220px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Trusted and Supported By
          </h3>
          <div className="mx-auto mt-2 w-20 h-[3px] bg-orange-500 rounded-full" />
        </div>

        {/* LOGO ROW (ONE LINE) */}
        <div className="overflow-x-auto">
          <div className="flex items-center gap-6 min-w-max px-2">
            {partners.map((item, index) => (
              <div
                key={index}
                className="
                  w-[180px] h-[90px]
                  bg-white
                  rounded-2xl
                  flex items-center justify-center
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-md
                "
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="
                    max-h-10
                    grayscale
                    opacity-60
                    transition-all duration-300
                    hover:grayscale-0
                    hover:opacity-100
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;
