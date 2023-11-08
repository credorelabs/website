import React, { useState } from "react";
import Link from "next/link";
import Form from "./RequestModal";
import Image from "next/image";
import PadUp from "../../public/assets/images/partners/padup-ventures.png";
import Vinners from "../../public/assets/images/partners/vinners.png";
import SPJMR from "../../public/assets/images/partners/spjmr.png";
import STPI from "../../public/assets/images/partners/STPI-Gurgaon.png";
import KIIT from "../../public/assets/images/partners/KIIT-TBI.png";

const SupportedBy = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="med:flex gap-4 items-center">
          <div className="p-5 pl-0 mb-10 flex flex-col gap-1">
            <h1 className="text-base text-left p-3 py-2 bg-[#29564b85] text-white">Investors</h1>
            <div className="flex items-center border-1">
              <div className="px-2 border-r-2 border-grey-100 cursor-pointer">
                <Link href="https://www.padup.in/fop">
                  {/* <Image src={PadUp} width={310} height={140} alt="Padup Ventures" /> */}
                  <Image src={PadUp} alt="Padup Ventures" />
                </Link>
              </div>
              <div className="px-2 border-l-2 border-grey-100 cursor-pointer">
                <Link href="https://www.vinners.net/">
                  <Image src={Vinners} width={140} height={140} alt="Vinners" />
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5 pl-0 mb-10 flex flex-col gap-1">
            <h1 className="text-base text-left p-3 py-2 bg-[#29564b85] text-white">Supported By</h1>
            <div className="flex items-center border-1">
              <div className="px-2 border-r-2 border-grey-100 cursor-pointer">
                <Link href="https://www.spjimr.org/finnovate-accelerator/about">
                  <Image src={SPJMR} width={"410"} height={"140"} alt="SPJMR" />
                </Link>
              </div>
              <div className="px-2 border-x-2 border-grey-100 cursor-pointer">
                <Link href="https://apiary.stpi.in/">
                  <Image src={STPI} width={"308"} height={"140"} alt="STPI Gurgaon" />
                </Link>
              </div>
              
              <div className="px-2 border-l-2 border-grey-100 cursor-pointer">
                <Link href="https://kiitincubator.in">
                  <Image src={KIIT} width={"140"} height={"140"} alt="KIIT TBI" />
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="p-5 pl-0 mb-10 flex flex-col gap-1 border-r-1 border-grey-300">
            <h1 className="text-lg text-left">Collaborations</h1>
            <Image
              className=""
              src={"/assets/images/partners/edge.png"}
              alt=""
              width={"296"}
              height={"100%"}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
