import React from "react";
import Link from "next/link";

const SupportedBy = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="med:flex gap-4 items-center">

          {/* Investors */}
          <div className="p-5 pl-0 mb-10 flex flex-col gap-1">
            <h1 className="text-base text-left p-3 py-2 bg-[#29564b85] text-white">
              Investors
            </h1>

            <div className="flex items-center border-1">

              <div className="px-2 border-r-2 border-grey-100 cursor-pointer">
                <Link href="https://www.padup.in/fop">
                  <a target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/partners/Meity.png"
                      alt="MEITY"
                      width="300"
                      height="100"
                    />
                  </a>
                </Link>
              </div>

              <div className="px-2 border-r-2 border-grey-100 cursor-pointer">
                <Link href="https://www.padup.in/fop">
                  <a target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/partners/padup-ventures.png"
                      alt="Padup Ventures"
                    />
                  </a>
                </Link>
              </div>

              <div className="px-2 border-l-2 border-grey-100 cursor-pointer">
                <Link href="https://www.vinners.net/">
                  <a target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/partners/vinners.png"
                      width="140"
                      height="140"
                      alt="Vinners"
                    />
                  </a>
                </Link>
              </div>

            </div>
          </div>

          {/* Supported By */}
          <div className="p-5 pl-0 mb-10 flex flex-col gap-1">
            <h1 className="text-base text-left p-3 py-2 bg-[#29564b85] text-white">
              Supported By
            </h1>

            <div className="flex items-center border-1">

              <div className="px-2 border-x-2 border-grey-100 cursor-pointer">
                <Link href="https://apiary.stpi.in/">
                  <a target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/partners/STPI-Gurgaon.png"
                      width="308"
                      height="140"
                      alt="STPI Gurgaon"
                    />
                  </a>
                </Link>
              </div>

              <div className="px-2 border-l-2 border-grey-100 cursor-pointer">
                <Link href="https://kiitincubator.in">
                  <a target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/partners/KIIT-TBI.png"
                      width="140"
                      height="140"
                      alt="KIIT TBI"
                    />
                  </a>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportedBy;