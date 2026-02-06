import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/about-us/bg-hero.png')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75 z-10"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* LEFT CONTENT */}
        <div className="max-w-lg text-white">

          {/* VERIFIED ROW */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:-translate-y-0.5 cursor-pointer">
              <img
                src="/assets/images/ig-logo.png"
                alt="IG P&I"
                className="h-8"
              />

              <div className="flex flex-col leading-tight">
                <span className="text-[10px] tracking-widest opacity-70">
                  VERIFIED BY
                </span>
                <span className="text-xs font-semibold whitespace-nowrap">
                  IG P&amp;I Approved
                </span>
              </div>

              <img
                src="/assets/images/tick (2).png"
                alt="Verified"
                className="h-4"
              />
            </div>
          </div>

          {/* HEADING */}
          <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-semibold leading-tight text-white/90 mb-6">
            Digitizing Global Trade
            <br />
            with Secure{" "}
            <span className="bg-gradient-to-r from-teal-400 to-green-300 bg-clip-text text-transparent">
              Blockchain-Backed
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Documents
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-10">
            Credore enables legally recognized, fraud-resistant digital trade
            documentation that replaces paper, accelerates financing, and builds
            trust across global trade ecosystems.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-5 flex-wrap">
            <a href="/#contact" className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal-400 to-green-400 text-black text-sm font-medium hover:opacity-90 transition shadow-lg">
              Request a Demo
            </a>

            <a href="/case-study" className="px-6 py-2.5 rounded-lg border border-white/30 text-white text-sm hover:bg-white/10 transition">
              Learn How It Works →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-center">
          <div className="rounded-2xl border border-white/10 ring-1 ring-teal-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden backdrop-blur-sm">
            <img
              src="/assets/images/use-cases/hero-about1.png"
              alt="Digital Trade Infrastructure"
              className="max-w-md xl:max-w-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
