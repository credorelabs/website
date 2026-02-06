import React from "react";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/footer-bg.png')",
      }}
    >
      {/* IMAGE OVERLAY (TEXTURE / PATTERN) */}
      <div
        className="absolute inset-0 bg-repeat opacity-60"
        style={{
          backgroundImage: "url('/assets/images/footer-overlay.png')",
          backgroundSize: "320px",
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-white">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COLUMN 1 — BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/images/Logo-icon-colour.png"
                alt="Credore Icon"
                className="h-8"
              />
              <img
                src="/assets/images/Logo-text-white.png"
                alt="Credore"
                className="h-6"
              />
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Credore digitizes global trade documentation using secure,
              legally recognized blockchain-backed infrastructure.
            </p>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/platform" className="hover:text-orange-400 transition">Platform</a></li>
              <li><a href="/solutions" className="hover:text-orange-400 transition">Solutions</a></li>
              {/* <li><a href="/technology" className="hover:text-orange-400 transition">Technology</a></li> */}
              <li><a href="/case-study" className="hover:text-orange-400 transition">Case Studies</a></li>
            </ul>
          </div>

          {/* COLUMN 3 — COMPANY */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white-300">
              <li><a href="/about" className="hover:text-orange-400 transition">About Us</a></li>
              <li><a href="/#contact" className="hover:text-orange-400 transition">Contact Us</a></li>
              {/* <li><a href="/careers" className="hover:text-orange-400 transition">Careers</a></li>
              <li><a href="/privacy-policy" className="hover:text-orange-400 transition">Privacy Policy</a></li> */}
            </ul>
          </div>

          {/* COLUMN 4 — REQUEST DEMO + NEWSLETTER */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white">
              Stay Connected
            </h4>

            <p className="text-sm text-gray-300 mb-4">
              Get updates on trade digitization, compliance, and innovation.
            </p>

            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-md transition">
                ➤
              </button>
            </div>

            <a href="#contact" className="w-full bg-white/10 hover:bg-white/20 border border-white/30 text-sm p-3 rounded-lg transition">
              Request a Demo
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2025 Credore. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/assets/files/Credore-Terms-Of-Use.pdf" target="_blank" className="hover:text-white transition">Terms of use</a>
            <a href="/assets/files/Credore-Privacy-Policy.pdf" target="_blank"className="hover:text-white transition">Privacy Policy</a>
             <a href="/assets/files/Credore-Refund-Policy.pdf" target="_blank"  className="hover:text-white transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
