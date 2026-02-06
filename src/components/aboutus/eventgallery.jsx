import React from "react";

export default function EventGallery() {
  return (
    <section className="relative py-24 bg-[#F9FAFB] overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.89]"
        style={{
          backgroundImage: "url('/assets/images/overlay-image.png')",
          backgroundSize: "320px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-14">
          Event Gallery
        </h2>

        {/* GALLERY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <EventCard
            image="/assets/images/about-us/11.png"
            title="Utkarsh Odisha"
            location="Bhubaneswar"
          />

          <EventCard
            image="/assets/images/about-us/12.png"
            title="Trade Tech Forum"
            location="Abu Dhabi"
          />

          <EventCard
            image="/assets/images/about-us/13.png"
            title="Blockchain Summit 2024"
            location="Bhubaneswar"
          />
        </div>

        {/* CTA BANNER */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-teal-500 p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">

          <div>
            <h3 className="text-xl font-semibold">
              Transform your Global Trade Operations today
            </h3>
            <p className="text-sm text-white/90 mt-2">
              Join leading organizations already using Credore’s blockchain infrastructure
            </p>
          </div>

          <button className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-medium
            hover:bg-gray-100 transition">
            Request Demo →
          </button>
        </div>

      </div>
    </section>
  );
}

/* ================= EVENT CARD ================= */

function EventCard({ image, title, location }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md
      transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* TEXT */}
      <div className="absolute bottom-0 p-6">
        <h4 className="text-white text-lg font-semibold">
          {title}
        </h4>
        <p className="text-sm text-white/80 mt-1">
          {location}
        </p>
      </div>
    </div>
  );
}
