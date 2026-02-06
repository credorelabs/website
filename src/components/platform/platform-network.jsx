import React from "react";

export default function InteroperabilityNetwork() {
  const features = [
    {
      title: "Enterprise-Grade Security",
      desc: "State-of-the-art encryption and decentralized identity protocols protect data at every step.",
      icon: "/assets/images/platforms/sec-p.png",
    },
    {
      title: "Built on Global Standards",
      desc: "Adherence to DCSA, UNCITRAL, and MLETR standards ensures legal compliance worldwide.",
      icon: "/assets/images/platforms/globe.png",
    },
    {
      title: "Seamless Integration",
      desc: "Connect your existing TMS, ERP, or financial systems with our flexible API framework.",
      icon: "/assets/images/platforms/puzzle-3.png",
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#071a2f] overflow-hidden">
      
      {/* Background Glow - Positioned off-center to match layout */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none translate-x-1/4" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Content & Features (Column 1-7) */}
          <div className="lg:col-span-7">
            <header className="text-left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-4">
                The Ecosystem
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                The Interoperability <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500">
                  Network
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-gray-400 text-lg leading-relaxed">
                Credore connects disparate systems into a single, cohesive network, 
                ensuring digital documents remain transferable across jurisdictions.
              </p>
            </header>

            {/* Vertical Feature List (Replacing the 3-column grid) */}
            <div className="mt-12 space-y-6 max-w-2xl">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-5 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                    <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Visual (Column 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-10 border border-teal-500/20 rounded-full animate-spin-slow opacity-30 pointer-events-none" />
              
              <img
                src="/assets/images/platforms/img1.png"
                alt="Interoperability Network"
                className="relative rounded-lg z-10 w-full max-w-[450px] mx-auto lg:ml-auto drop-shadow-[0_0_80px_rgba(20,184,166,0.2)]"
              />

              {/* Float-in Badge for visual depth */}
              <div className="absolute z-50 -bottom-6 -left-6 md:left-0 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-mono text-teal-100 uppercase">System: MLETR Active</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}