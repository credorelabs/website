import React from "react";

const Technology = () => {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="flex gap-4 items-center tab:px-10">
          <div>
            <div className="mb-10 font-normal">
              We offer blockchain-based IT infrastructure, incorporating common
              standards and best practices, aims to ensure that every digital
              interaction within financial supply chain management transactions
              in international trade becomes verifiable, non-repudiable,
              retrotraceable, accountable, and auditable for any necessary
              retention period. 
            </div>

            <div className="mb-5 font-medium">
              How Credore Infrastructure Works?
            </div>

            <div className="flex flex-col gap-3 w-full mb-5 tab:mb-20">

              {/* Step 1 */}
              <div className="flex flex-col dsk:flex-row gap-2 tab:gap-5 xsm:border-1 p-2 tab:border-0 tab:p-0 rounded bg-[#F5DEDE] tab:bg-[transparent]">
                <img
                  src="/assets/images/offerings/tech-left-1.png"
                  alt="Technology Step 1"
                />

                <div className="dsk:flex gap-1 w-full dsk:w-1/2 items-center justify-end">
                  <div className="left-arrow"></div>
                  <p className="text-white p-4 bg-[#24554ab0] text-left font-medium text-xsm rounded">
                    Common repository of standardised data and business workflow
                    formats to facilitate data sharing, reporting, due diligence
                    and compliance requirements
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="tab:flex xsm:justify-between tab:justify-around self-center tab:self-auto">
                <img
                  src="/assets/images/offerings/arrow.png"
                  alt="Arrow"
                />
                <div></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col dsk:flex-row gap-2 tab:gap-5 xsm:border-1 p-2 tab:border-0 tab:p-0 rounded bg-[#F5DEDE] tab:bg-[transparent]">
                <img
                  src="/assets/images/offerings/tech-left-2.png"
                  alt="Technology Step 2"
                />

                <div className="dsk:flex gap-1 w-full dsk:w-1/2 items-center justify-end">
                  <div className="left-arrow"></div>
                  <p className="text-white p-4 bg-[#24554ab0] text-left font-medium text-xsm rounded">
                    Off chain exchange of standardised sensitive data and
                    business logic execution between multiple stakeholders.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="tab:flex xsm:justify-between tab:justify-around self-center tab:self-auto">
                <img
                  src="/assets/images/offerings/arrow.png"
                  alt="Arrow"
                />
                <div></div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col dsk:flex-row gap-2 tab:gap-5 xsm:border-1 p-2 tab:border-0 tab:p-0 rounded bg-[#F5DEDE] tab:bg-[transparent]">
                <img
                  src="/assets/images/offerings/tech-left-3.png"
                  alt="Technology Step 3"
                />

                <div className="dsk:flex gap-1 w-full dsk:w-1/2 items-center justify-end">
                  <div className="left-arrow"></div>
                  <p className="text-white p-4 bg-[#24554ab0] text-left font-medium text-xsm rounded">
                    zkCredore generates zero knowledge proofs against private
                    data and private business logic.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="tab:flex xsm:justify-between tab:justify-around self-center tab:self-auto">
                <img
                  src="/assets/images/offerings/arrow.png"
                  alt="Arrow"
                />
                <div></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col dsk:flex-row gap-2 tab:gap-5 xsm:border-1 p-2 tab:border-0 tab:p-0 rounded bg-[#F5DEDE] tab:bg-[transparent]">
                <img
                  src="/assets/images/offerings/tech-left-4.png"
                  alt="Technology Step 4"
                />

                <div className="dsk:flex gap-1 w-full dsk:w-1/2 items-center justify-end">
                  <div className="left-arrow"></div>
                  <p className="text-white p-4 bg-[#24554ab0] text-left font-medium text-xsm rounded">
                    Verifier in the blockchain verifies the correctness of off
                    chain execution without private data and business logic.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;