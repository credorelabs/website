import React from "react";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();

  const features = [
    {
      icon: "/assets/images/icon-security.png",
      title: "Blockchain Security",
      text:
        "Enterprise-grade blockchain infrastructure ensuring data integrity and security.",
    },
    {
      icon: "/assets/images/icon-standards.png",
      title: "Global Standards",
      text:
        "Compliance with international trade regulations and standards.",
    },
    {
      icon: "/assets/images/icon-integration.png",
      title: "Seamless Integration",
      text:
        "Easy integration with existing trade management systems.",
    },
  ];

  return (
    <section className="relative bg-white px-6 py-14 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
      
      {/* OVERLAY */}
      <img
        src="/assets/images/overlay-image.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none z-0"
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/assets/images/about-illustration.png"
            alt="About Credore"
            className="w-full max-w-xl animate-bounce [animation-duration:3.5s]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* LABEL */}
          <p className="text-teal-700 font-semibold tracking-widest text-sm mb-3">
            ABOUT CREDORE
          </p>

          {/* HEADING */}
          <h2 className="text-[26px] sm:text-3xl md:text-[34px] text-gray-800 mb-4">
            A Secure Digital Infrastructure Built for Global Trade
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-12 max-w-xl">
            By combining blockchain, verifiable credentials, and global compliance
            frameworks, Credore ensures every trade document is authentic,
            trusted, and interoperable across systems and geographies.
          </p>

          {/* FEATURES */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* CONNECTOR LINE (desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-px bg-gray-200 z-0" />

            {features.map((item, i) => (
              <div
                key={i}
                className="relative z-10 bg-blue-50 rounded-xl px-4 py-6 text-center shadow-lg"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-9 mx-auto mb-3"
                />

                <h4 className="text-sm font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => router.push("/platform")}
            className="mt-10 bg-[#F15A29] hover:bg-[#d94f23] text-white px-6 py-3 rounded-lg text-sm transition-all hover:-translate-y-0.5"
          >
            Know More →
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
