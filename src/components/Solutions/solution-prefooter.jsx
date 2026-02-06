export default function PreFooterCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28 px-6">

      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,128,128,0.25),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,115,0,0.18),transparent_67%)]" />

      <div className="relative max-w-4xl mx-auto text-center text-white">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          One interoperable digital layer —{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            shared trust
          </span>{" "}
          across global trade
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Join the ecosystem that’s transforming how the world trades.
          Credore connects every participant through secure,
          blockchain-backed digital documentation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-row flex-nowrap items-center justify-center gap-5">


          <a href="/#contact" className="flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-base font-medium hover:bg-teal-500 transition">
            Explore Credore Platform
            <img
              src="/assets/images/solutions/arrow-left.png"
              alt="arrow"
              className="w-4 h-4"
            />
          </a>

          <a href="/#contact" className="flex items-center gap-2 rounded-lg border border-orange-500 px-6 py-3 text-base font-medium text-orange-400 hover:bg-orange-500 hover:text-black transition">
            Schedule Demo
            <img
              src="/assets/images/solutions/c-alender.png"
              alt="calendar"
              className="w-4 h-4"
            />
          </a>

        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-10 text-sm text-gray-300">

          <div className="flex items-center gap-2">
            <img
              src="/assets/images/solutions/shield.png"
              alt="security"
              className="w-5 h-5"
            />
            Enterprise Security
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/assets/images/solutions/global.png"
              alt="global"
              className="w-5 h-5"
            />
            Global Coverage
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/assets/images/solutions/flash.png"
              alt="integration"
              className="w-5 h-5"
            />
            Instant Integration
          </div>

        </div>

      </div>
    </section>
  );
}
