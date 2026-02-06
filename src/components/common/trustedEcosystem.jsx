import React from "react";

export default function TrustedEcosystem() {
  return (
    <section className="relative bg-[#F5FAFA] py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-[17px] font-medium tracking-widest text-[#1F5D5A] uppercase">
          Trusted Ecosystem
        </h2>

        {/* DIVIDER LINE */}
        <div className="flex justify-center mt-2 mb-6">
          <span className="w-24 h-[2px] bg-gray-400 opacity-70 rounded-full"></span>
        </div>

        {/* LOGOS */}
        <div className="flex justify-center items-center gap-16 flex-wrap">
          <img
            src="/assets/images/home/111-r.png"
            alt="Partner 1"
            className="h-20 w-auto max-w-[200px] opacity-80"
          />

          <img
            src="/assets/images/home/112-r.png"
            alt="Partner 2"
            className="h-10 w-auto max-w-[160px] opacity-80"
          />

          <img
            src="/assets/images/home/333-r.png"
            alt="Partner 3"
            className="h-10 w-auto max-w-[160px] opacity-80"
          />
        </div>

      </div>
    </section>
  );
}
