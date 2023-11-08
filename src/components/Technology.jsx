import React from "react";
import VideoSection from "./VideoSection";
import Image from "next/image";
import techLeftImg1 from "../../public/assets/images/offerings/tech-left-1.png";
import techLeftImg2 from "../../public/assets/images/offerings/tech-left-2.png";
import techLeftImg3 from "../../public/assets/images/offerings/tech-left-3.png";
import techLeftImg4 from "../../public/assets/images/offerings/tech-left-4.png";
import arrow from "../../public/assets/images/offerings/arrow.png";

const Technology = () => {
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
              How Credore Infrastructure Works?
            </div>

            <div className="flex flex-col gap-3 w-full mb-5 tab:mb-20">
              <div className="flex flex-col dsk:flex-row gap-2 tab:gap-5 xsm:border-1 p-2 tab:border-0 tab:p-0 rounded bg-[#F5DEDE] tab:bg-[transparent]">
                <Image src={techLeftImg1} alt="" objectFit="cover" />

                <div className="dsk:flex gap-1 w-full dsk:w-1/2 items-center justify-end">
                  <div className="left-arrow"></div>
                  <p className="text-white p-4 bg-[#24554ab0] text-left font-medium text-xsm rounded">
                    Common repository of standardised data andbusiness workflow
                    formats to facilitate data sharing,reporting, due diligence
                    and compliancerequirements
                  </p>
                </div>
              </div>

              <div className="tab:flex xsm:justify-between tab:justify-around self-center tab:self-auto">
                <Image src={arrow} alt="" objectFit="cover" />
                {/* <div className="flex items-center gap-5 p-3 my-2 w-1/2"></div> */}
                <div></div>
              </div>

              <div className="flex flex-col dsk:flex-row gap-2 tab:gap-5 xsm:border-1 p-2 tab:border-0 tab:p-0 rounded bg-[#F5DEDE] tab:bg-[transparent]">
                <Image src={techLeftImg2} alt="" objectFit="cover" />
                <div className="dsk:flex gap-1 w-full dsk:w-1/2 items-center justify-end">
                  <div className="left-arrow"></div>
                  <p className="text-white p-4 bg-[#24554ab0] text-left font-medium text-xsm rounded">
                    Off chain exchange of standardised sensitive dataand
                    business logic execution between multiplestakeholders.
                  </p>
                </div>
              </div>

              <div className="tab:flex xsm:justify-between tab:justify-around self-center tab:self-auto">
                <Image src={arrow} alt="" objectFit="cover" />
                {/* <div className="flex items-center gap-5 p-3 my-2 w-1/2"></div> */}
                <div></div>
              </div>

              <div className="flex flex-col dsk:flex-row gap-2 tab:gap-5 xsm:border-1 p-2 tab:border-0 tab:p-0 rounded bg-[#F5DEDE] tab:bg-[transparent]">
                <Image src={techLeftImg3} alt="" objectFit="cover" />
                <div className="dsk:flex gap-1 w-full dsk:w-1/2 items-center justify-end">
                  <div className="left-arrow"></div>
                  <p className="text-white p-4 bg-[#24554ab0] text-left font-medium text-xsm rounded">
                    zkCredore generates zero knowledge proofs againstprivate
                    data and private business logic.
                  </p>
                </div>
              </div>

              {/* <div className="flex flex-col tab:flex-row"> */}
              <div className="tab:flex xsm:justify-between tab:justify-around self-center tab:self-auto">
                <Image src={arrow} alt="" objectFit="cover" />
                {/* <div className="flex items-center gap-5 p-3 my-2 w-1/2"></div> */}
                <div></div>
              </div>

              <div className="flex flex-col dsk:flex-row gap-2 tab:gap-5 xsm:border-1 p-2 tab:border-0 tab:p-0 rounded bg-[#F5DEDE] tab:bg-[transparent]">
                <Image src={techLeftImg4} alt="" objectFit="cover" />
                <div className="dsk:flex gap-1 w-full dsk:w-1/2 items-center justify-end">
                  <div className="left-arrow"></div>
                  <p className="text-white p-4 bg-[#24554ab0] text-left font-medium text-xsm rounded">
                    Verifier in the blockchain verifies the correctness ofoff
                    chain execution without private data andbusiness logic.
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
