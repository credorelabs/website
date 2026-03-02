import React from "react";
import VideoSection from "./VideoSection";

const Offerings = () => {
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
              Here are brief details about the key features of our technology:
            </div>

            <div id="content" className="flex flex-col gap-5">
              
              {/* Row 1 */}
              <div className="flex flex-col tab:flex-row gap-5 w-full">
                
                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <img
                    src="/assets/images/offerings/invoice-discounting.png"
                    alt="Invoice Discounting"
                  />
                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Invoice discounting & Export Factoring (with PEPPOL standard e-Invoicing)
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <img
                    src="/assets/images/offerings/exchange-standardizedand-digital-originaldocuments.png"
                    alt="Digital Documents"
                  />
                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Exchange standardized and digital original documents
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <img
                    src="/assets/images/offerings/true-decentralisation.png"
                    alt="True Decentralisation"
                  />
                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    True decentralisation and high scalability using public
                    blockchain without revealing any sensitive data
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col tab:flex-row gap-5 w-full">
                
                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <img
                    src="/assets/images/offerings/digital-standardised.png"
                    alt="Digital Standardised"
                  />
                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Fully digital standardised SCF business workflow harmonising ICC&apos;s DSI*
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <img
                    src="/assets/images/offerings/seamless-on-boarding.png"
                    alt="Seamless Onboarding"
                  />
                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Seamless on-boarding, KYC and KYB using Global Legal Entity Identifier
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <img
                    src="/assets/images/offerings/realtime-collaboration.png"
                    alt="Realtime Collaboration"
                  />
                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Realtime multi-party collaboration
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

export default Offerings;