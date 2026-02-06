import React from "react";
import { useRouter } from "next/router";

export default function PlatformHero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] px-4">
      
      {/* --- LAYERED BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0">
        {/* Modern Dot-Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#1ecad3_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Soft "Ambient" Teal Glow (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1ecad3]/10 blur-[120px] rounded-full" />
        
        {/* The Network Overlay - Styled as a subtle watermark */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat opacity-[0.07] pointer-events-none scale-125 mix-blend-screen"
          style={{
            backgroundImage: "url('/assets/images/platform/network-overlay.png')",
            backgroundSize: "80%",
          }}
        />

        {/* Bottom Fade to solid */}
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#020617] to-transparent" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        
        {/* 1. MINIMAL STATUS CHIP */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/5 border border-teal-500/20 mb-8 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_#1ecad3]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-teal-400">
            Unified Protocol
          </span>
        </div>

        {/* 2. REFINED TYPOGRAPHY */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-8">
          Platform and <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-[#ff6b35]">
            Interoperability
          </span>
        </h1>

        {/* 3. DESCRIPTION (Sharper & Clearer) */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light px-4">
          Connect once, trade everywhere. Our <span className="text-white font-medium">MLETR-compliant</span> 
          infrastructure provides the legal certainty required for next-generation digital trade networks.
        </p>

        {/* 4. PREMIUM CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => router.push("/solutions")}
            className="group w-full sm:w-auto px-10 py-4 bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-bold rounded-xl transition-all shadow-[0_10px_40px_rgba(255,107,53,0.2)] hover:-translate-y-1 active:scale-95"
          >
            Explore Solutions <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>

          <button className="w-full sm:w-auto px-10 py-4 bg-white/[0.03] text-white font-bold rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all">
            Technical Brief
          </button>
        </div>

        {/* 5. THE "SYSTEM STATUS" BAR (Replacing Ecosystem) */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Architecture</span>
            <span className="text-xs font-mono text-slate-300 italic">MLETR-Compliant Ledger</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Network Status</span>
            <span className="text-xs font-mono text-teal-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
              Global Nodes Active
            </span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Latency</span>
            <span className="text-xs font-mono text-slate-300">{"<"} 2.4s Finality</span>
          </div>
        </div>
      </div>
    </section>
  );
}