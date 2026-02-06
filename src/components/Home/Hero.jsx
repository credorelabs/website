import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#050505] px-6 py-20">
      {/* MODERN FINTECH BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1ecad3]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff6b35]/10 blur-[120px] rounded-full" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 mx-auto max-w-4xl text-center">
        
        {/* 1. TOP BADGE: IG P&I Approved */}
        <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 hover:border-white/20 transition-colors">
          <img src="/assets/images/ig-logo.png" alt="IG P&I" className="h-6 object-contain" />
          <div className="w-px h-4 bg-white/20" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
            MLETR Compliant Interoperability
          </span>
          <img src="/assets/images/tick (2).png" alt="Verified" className="h-3.5 w-3.5" />
        </div>

        {/* 2. THE TYPOGRAPHY (Fintech Focus) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
          The Infrastructure for <br />
          <span className="bg-gradient-to-r from-[#1ecad3] via-[#ffffff] to-[#ff6b35] bg-clip-text text-transparent">
            Global Trade 2.0
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Credore bridges the gap between platforms, banks, and carriers with 
          blockchain-powered interoperability that is secure, verifiable, and automated.
        </p>

        {/* 3. CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold rounded-xl transition-all shadow-xl shadow-[#ff6b35]/20 hover:-translate-y-0.5 active:scale-95">
            Join Pilot Program →
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all backdrop-blur-sm">
            Explore Interoperability
          </button>
        </div>

        {/* 4. PARTNER LOGOS (Trust Bar) */}
        <div className="pt-10 border-t border-white/5">
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-6">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <img src="/assets/images/logo-1.png" alt="Partner" className="h-8 md:h-10 object-contain" />
             <img src="/assets/images/logo-2.png" alt="Partner" className="h-8 md:h-10 object-contain" />
             {/* You can add more placeholder logos here if needed */}
          </div>
        </div>

      </div>

      {/* FLOATING DECORATIVE ELEMENT: Live Node Counter */}
      <div className="absolute bottom-10 left-10 hidden xl:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-md">
        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] font-mono text-white/40 tracking-wider">
          NETWORK STATUS: ACTIVE
        </span>
      </div>
    </section>
  );
}

export default Hero;