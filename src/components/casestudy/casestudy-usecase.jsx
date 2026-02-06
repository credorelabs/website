import React from "react";

export default function CasestudyUseCases() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-10 p-10">

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/casestudy/ebl-exchange.png"
              alt="eBL Exchange"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2">
            <span className="inline-block text-xs font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full mb-4">
              Pilot 1
            </span>

            <h3 className="text-2xl font-semibold mb-4">
              eBL Exchange Across Platform A & B
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Demonstrating seamless exchange of digital transfer between
              different trade platforms while preserving data integrity
              and preventing duplication.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                Interoperable cross-platform exchange
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                No duplicate documents
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                Title integrity preserved
              </li>
            </ul>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-10 p-10">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 bg-[#E9E8F5] rounded-xl p-6">
            <img
              src="/assets/images/casestudy/digital bill of exchange.png"
              alt="Digital Bill of Exchange"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2">
            <span className="inline-block text-xs font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full mb-4">
              Pilot 2
            </span>

            <h3 className="text-2xl font-semibold mb-4">
              Digital Bill of Exchange Transfer
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Enabling secure and legally enforceable digital Bills of Exchange
              transfers with tamper-proof endorsement and accelerated
              settlement cycles.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                Legal enforceability
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                Tamper-proof endorsement
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                Faster settlement cycle
              </li>
            </ul>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-10 p-10">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 bg-[#D6EEF3] rounded-xl p-6">
            <img
              src="/assets/images/casestudy/bank-financing.png"
              alt="Bank Financing"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2">
            <span className="inline-block text-xs font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full mb-4">
              Pilot 3
            </span>

            <h3 className="text-2xl font-semibold mb-4">
              Bank Financing via Digital Promissory Note
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Streamlining bank financing processes through digital promissory
              notes with real-time validation and comprehensive audit trails.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                Real-time title validation
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                Real-time title validation
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <img src="/assets/images/check-1.png" className="w-4 h-4" />
                Audit-ready workflow
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
