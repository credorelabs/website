import React from "react";

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* BACKGROUND PATTERN - Subtle and technical */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/overlay-image.png')",
          backgroundSize: "400px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ================= LEADERSHIP ================= */}
        <div className="mb-20">
          <SectionTitle title="Leadership" subtitle="Visionaries driving the future of trade" />
          <div className="flex justify-center mt-12">
            <LargeCard
              image="/assets/images/about-us/lingarajsir.png"
              name="Lingaraj Mahanand"
              role="Founder & CEO"
              linkedin={"https://www.linkedin.com/in/lmahanand/"}
              description="15+ years of experience in Software Development & Banking. Tech Advisor with deep expertise in digital trade platforms and blockchain implementation."
            />
          </div>
        </div>

        {/* ================= OUR TEAM ================= */}
        <div className="mb-24">
          <SectionTitle title="The Core Team" subtitle="The engineering and design power behind Credore" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            <SmallCard name="Abhilash Sethi" role="Software Engineer" image="/assets/images/about-us/abhilash.png" linkedin={"https://www.linkedin.com/in/abhilash-sethi-6518b910b/"}/>
            <SmallCard name="Raj Kishore Patra" role="Software Engineer" image="/assets/images/about-us/Raj.png" linkedin={"https://www.linkedin.com/in/raj-kishore-patra-247044213/"}/>
            <SmallCard name="Md. Asif" role="QA Engineer" image="/assets/images/about-us/asif.png" linkedin={"https://www.linkedin.com/in/md-asif-saikh-73b203214/"} />
            <SmallCard name="Glorina Senapati" role="UX Designer" image="/assets/images/about-us/glorina.png" linkedin={"https://www.linkedin.com/in/glorina-senapati/"}/>
          </div>
        </div>

        {/* ================= ADVISORY ================= */}
        <div className="pb-12">
          <SectionTitle title="Advisory Board" subtitle="Strategic guidance from global industry veterans" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <LargeCard
              image="/assets/images/about-us/harshit.png"
              name="Harshit Jain"
              role="IIT Delhi | FinTech Leader"
              description="Extensive leadership roles across top-tier fintech and digital trade platforms with enterprise-scale impact on global liquidity."
            />
            <LargeCard
              image="/assets/images/about-us/Sunil.png"
              name="Sanjay Kumar Pradhan"
              role="MBA – Northumbria University, UK"
              description="Strategic expert in financial markets and cross-border trade digitization with a focus on UK-India trade corridors."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-teal-400 to-blue-500 mx-auto mt-4 rounded-full" />
      {subtitle && <p className="mt-4 text-slate-500 text-sm md:text-base">{subtitle}</p>}
    </div>
  );
}

function LargeCard({ image, name, role, description, linkedin }) {
  return (
    <div className="group relative bg-[#0B2545] rounded-[2rem] p-8 flex flex-col sm:flex-row gap-8 max-w-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
      <div className="shrink-0">
        <div className="relative">
           <div className="absolute inset-0 bg-teal-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
           <img
            src={image}
            alt={name}
            className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold text-white tracking-wide">{name}</h3>
        <p className="text-teal-400 font-semibold text-sm mt-1">{role}</p>
        <p className="text-slate-300 text-sm mt-4 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>

        <a href={linkedin} className="mt-6 inline-block opacity-60 hover:opacity-100 transition-opacity">
          <img src="/assets/images/linkedin.png" alt="LinkedIn" className="w-5 h-5 invert" />
        </a>
      </div>
    </div>
  );
}

function SmallCard({ image, name, role, linkedin }) {
  return (
    <div className="group bg-[#0B2545] rounded-[2rem] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10 border border-white/5">
      <div className="relative mb-6 inline-block">
        <div className="absolute inset-0 bg-teal-400/10 rounded-full blur-md" />
        <img
          src={image}
          alt={name}
          className="relative z-10 w-20 h-20 mx-auto rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white/10"
        />
      </div>

      <h4 className="text-white font-bold text-base">{name}</h4>
      <p className="text-teal-400 text-xs font-medium mt-1 uppercase tracking-wider">{role}</p>

      <a href={linkedin} className="mt-5 inline-block opacity-40 hover:opacity-100 transition-opacity">
        <img src="/assets/images/linkedin.png" alt="LinkedIn" className="w-4 h-4 mx-auto invert" />
      </a>
    </div>
  );
}