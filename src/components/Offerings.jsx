import React from "react";
import VideoSection from "./VideoSection";
import Image from "next/image";
import offering1 from "../../public/assets/images/offerings/invoice-discounting.png";
import offering2 from "../../public/assets/images/offerings/exchange-standardizedand-digital-originaldocuments.png";
import offering3 from "../../public/assets/images/offerings/true-decentralisation.png";
import offering4 from "../../public/assets/images/offerings/digital-standardised.png";
import offering5 from "../../public/assets/images/offerings/seamless-on-boarding.png";
import offering6 from "../../public/assets/images/offerings/realtime-collaboration.png";

const Offerings = () => {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="flex gap-4 items-center tab:px-10">
          <div className="">
            <div className="m-10">
              {/* <h1>Credore&apos;s Offerings</h1> */}
            </div>
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
              <div className="flex flex-col tab:flex-row gap-5 w-full  ">
                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <Image src={offering1} alt="" objectFit="cover" />

                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Invoice discounting & Export Factoring (with PEPPOL standard
                    e-Invoicing)
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <div>
                    <Image src={offering2} alt="" objectFit="cover" />
                  </div>
                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Exchange standardized and digital original documents
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <Image src={offering3} alt="" objectFit="cover" />

                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    True decentralisation and high scalability using public
                    blockchain without revealing any sensitive data
                  </p>
                </div>
              </div>

              <div className="flex flex-col tab:flex-row gap-5 w-full  ">
                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <Image src={offering4} alt="" objectFit="cover" />

                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Fully digital standardised SCF business workflow harmonising
                    ICC&apos;s DSI*
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <Image src={offering5} alt="" objectFit="cover" />

                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Seamless on-boarding,KYC and KYB using Global Legal Entity
                    Identifier
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 p-5 bg-[#DEF] w-full">
                  <Image src={offering6} alt="" objectFit="cover" />

                  <p className="text-[#29564b] text-left font-medium text-xsm">
                    Realtime multi-party collaboration
                  </p>
                </div>
              </div>

              <div className="flex gap-2 w-full "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offerings;
