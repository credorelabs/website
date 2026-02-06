import React from "react";
import { useRouter } from "next/router";

export default function CasestudyHero() {
  const router = useRouter();

  const handleContactClick = async () => {
    await router.push("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#020617] px-6 py-24">
      
      {/* --- REFINED ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Ultra-subtle Precision Grid */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] [background-size:80px_80px]" />
        
        {/* Soft Teal Radial Gradient (Top Center) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#115e59_0%,transparent_60%)] opacity-30" />
        
        {/* Subtle Horizontal Divider Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        
        {/* 1. STATUS BADGE */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Success Blueprints
          </span>
        </div>

        {/* 2. HIGH-END TYPOGRAPHY */}
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter text-white mb-8 leading-[0.95]">
          Case Studies & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-teal-400">
            Industry Pilots
          </span>
        </h1>

        {/* 3. SUBTEXT */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
          Quantifiable results from live <span className="text-white font-medium italic">MLETR trade operations</span>. 
          Proving the scalability and legal enforceability of the digital trade ecosystem.
        </p>

        {/* 4. CTA GROUP */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* ORANGE PRIMARY BUTTON */}
          <button
            onClick={handleContactClick}
            className="group relative w-full sm:w-auto px-10 py-4 bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-bold rounded-xl transition-all shadow-[0_10px_30px_rgba(255,107,53,0.3)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Start Your Pilot →</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* SECONDARY OUTLINE BUTTON */}
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-white font-bold rounded-xl border border-slate-700 hover:bg-white/5 hover:border-slate-500 transition-all">
            View Live Data
          </button>
        </div>

      </div>

      {/* 5. FINTECH DETAIL (Bottom Left) */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#ff6b35]" />
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Protocol: 0xCF2...Verified
          </span>
        </div>
      </div>

    </section>
  );
}