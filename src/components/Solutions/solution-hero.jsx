import React from "react";

export default function SolutionsHero() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        sm:min-h-screen
        bg-cover bg-center
        flex items-center
      "
      style={{
        backgroundImage: "url('/assets/images/solutions/bg-image.png')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="text-white mt-10 md:mt-0">
          {/* HEADING */}
          <h1 className="text-[28px] sm:text-4xl md:text-5xl font-semibold leading-tight mb-6 sm:mb-8">
            Solutions Built for{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Every
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-green-300 bg-clip-text text-transparent">
              Participant
            </span>{" "}
            in Global
            <br />
            Trade
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 max-w-xl leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            Each stakeholder receives targeted value through a single
            interoperable digital document framework
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 sm:gap-6 mb-12 sm:mb-16 flex-wrap">
            <a href="#solutions" className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg text-sm font-medium shadow-md">
              Explore Solutions →
            </a>

            {/* <button className="border border-white/40 hover:bg-white/10 transition px-6 py-3 rounded-lg text-sm font-medium">
              Learn More
            </button> */}
          </div>

          {/* TRUSTED ECOSYSTEM */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-4 sm:mb-6">
              TRUSTED ECOSYSTEM
            </p>

            <div className="flex items-center gap-6 sm:gap-10 flex-wrap opacity-80">
              <img
                src="/assets/images/ig-logo.png"
                alt="IG P&I Club"
                className="h-5 sm:h-6 object-contain"
              />

              <img
                src="/assets/images/logo-1.png"
                alt="ICC DSI"
                className="h-5 sm:h-6 object-contain"
              />

              <img
                src="/assets/images/logo-2.png"
                alt="Digital Trust Verified"
                className="h-5 sm:h-6 object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/assets/images/solutions/side-image.png"
            alt="Global Trade Network"
            className="
              w-full
              max-w-md
              md:animate-pulse
              [animation-duration:3s]
            "
          />
        </div>
      </div>
    </section>
  );
}
