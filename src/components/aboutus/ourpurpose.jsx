import React from "react";

export default function OurPurpose() {
  const missionPoints = [
    "Enable secure digital document exchange",
    "Ensure regulatory compliance across borders",
    "Foster transparency and trust",
  ];

  const visionPoints = [
    "Democratize access to global trade",
    "Set the standard for digital interoperability",
    "Eliminate physical barriers in supply chains",
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#FDFDFD] overflow-hidden">
      
      {/* BACKGROUND DECOR - Subtle and non-intrusive */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "url('/assets/images/overlay-image.png')", backgroundSize: "400px" }} />
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            Why We Exist
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our <span className="text-teal-600">Purpose</span>
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Driven by a commitment to transform global trade through 
            <strong> innovation</strong>, <strong>connectivity</strong>, and <strong>trust</strong>.
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* MISSION CARD */}
          <div className="group relative bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-10 right-10 h-1 bg-teal-500 rounded-b-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:bg-teal-600">
                <img
                  src="/assets/images/about-us/mission1.png"
                  alt="Mission"
                  className="w-6 h-6 transition-all group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              To establish a secure, interoperable digital infrastructure for
              global trade that enables seamless connectivity and compliance.
            </p>

            <ul className="space-y-4">
              {missionPoints.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VISION CARD */}
          <div className="group relative bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-10 right-10 h-1 bg-orange-500 rounded-b-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center transition-all duration-500 group-hover:-rotate-6 group-hover:bg-orange-500">
                <img
                  src="/assets/images/about-us/Vission.png"
                  alt="Vision"
                  className="w-6 h-6 transition-all group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              A connected, transparent trade ecosystem where businesses of all 
              sizes participate seamlessly in digital global commerce.
            </p>

            <ul className="space-y-4">
              {visionPoints.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}