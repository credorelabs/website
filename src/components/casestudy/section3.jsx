import React from "react";

export default function CredoreSolution() {
  const features = [
    {
      title: "Non-Recourse Protection",
      desc: "We assume the buyer default risk, protecting your balance sheet from losses.",
      icon: "/assets/images/use-cases/shield.png", // Swapped for logic
    },
    {
      title: "Immediate Funding",
      desc: "Get up to 90% of your invoice value unlocked within 24–48 hours.",
      icon: "/assets/images/use-cases/flash.png",
    },
    {
      title: "Risk Transfer",
      desc: "We manage collections and absorb losses if buyers fail to fulfill obligations.",
      icon: "/assets/images/use-cases/transfer.png",
    },
  ];

  return (
    <section className="relative bg-[#071a2f] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

          {/* LEFT CONTENT (7 Columns) */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                The Credore Solution
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.1] text-white tracking-tight">
              Non-Recourse <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Export Factoring
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-lg md:text-xl leading-relaxed text-gray-400">
              Credore steps in as your financial partner, purchasing your 
              export invoices to provide <strong className="text-white">immediate liquidity</strong>. 
              We assume the credit risk so you can scale without fear.
            </p>

            {/* Feature Points */}
            <div className="mt-8 space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-4 rounded-2xl transition-colors hover:bg-white/5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-900/40 transition-transform group-hover:scale-110">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[2.5rem] bg-gradient-to-tr from-white/10 to-white/5 p-3 backdrop-blur-sm border border-white/10 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-[#0B2545]">
                 <img
                  src="/assets/images/platforms/platform2.png"
                  alt="Export factoring process visualization"
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Decorative element behind image */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}