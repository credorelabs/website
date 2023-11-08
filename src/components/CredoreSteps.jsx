import React, { useState } from "react";
import VideoSection from "./VideoSection";
import Form from "./RequestModal";
import Image from "next/image";
// import CenterImg from "../../public/assets/images/about/center-image.png";
// import Step1 from "../../public/assets/images/about/step1.png";
import {
  SiHiveBlockchain,
  SiBlockchaindotcom,
  SiWireguard,
} from "react-icons/si";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { GiStaticGuard } from "react-icons/gi";
import { FaStaylinked } from "react-icons/fa";
import { PiCubeTransparentFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";
import { TbAugmentedReality } from "react-icons/tb";
import { useRouter } from "next/router";

const CredoreSteps = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [display6, setDisplay6] = useState("none");
  const [notDisplay6, setNotDisplay6] = useState("block");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleDisplay6 = () => {
    if (display6 == "none") {
      setDisplay6("block");
      setNotDisplay6("none");
    } else {
      setDisplay6("none");
      setNotDisplay6("block");
    }
  };

  const navigateFeatures = () => {
    // router.push('/our_technology');
    router.push("/work_in_progress");
  };

  return (
    <>
      <div className="lap:flex gap-1 items-center p-5 sml:block">
        <div className="flex flex-col gap-5 w-full">
          {/* step 1 */}
          <div className="flex flex-col">
            <h5 className="p-1 text-gray-700 text-sm">
              1 - Streamlined Verification
            </h5>
            <div className="flex gap-1 items-center">
              <div className="shape shape1 flex sml:flex-col med:flex-row items-center xsm:min-h-[200px] sml:min-h-[180px] med:min-h-[160px] note:min-h-[140px] tab:min-h-[120px]">
                <div className="shape-bg1">
                  {/* <Image src={Step1} alt="" width={"100%"} height={"100%"} /> */}
                  <HiMiniClipboardDocumentList size={48} />
                </div>
                <div className=" p-1">
                  <div className="px-1">
                    <p className="text-gray-700 text-xsm font-normal">
                      Our platform begins by ensuring the authenticity of
                      invoices and negotiable documents through robust
                      verification processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* step 2 */}
          <div className="flex flex-col">
            <h5 className="p-1 text-gray-700 text-sm">
              2 - Effortless Financing
            </h5>
            <div className="flex gap-1 items-center">
              <div className="shape shape1 flex sml:flex-col med:flex-row items-center xsm:min-h-[200px] sml:min-h-[180px] med:min-h-[160px] note:min-h-[140px] tab:min-h-[120px]">
                <div className="shape-bg1">
                  {/* <Image src={Step1} alt="" width={"100%"} height={"100%"} /> */}
                  <SiHiveBlockchain size={48} />
                </div>
                <div className=" p-1">
                  <div className="px-1">
                    <p className="text-gray-700 text-xsm font-normal">
                      Seamlessly access invoice financing and export factoring
                      services, accelerating your business growth while
                      mitigating risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* step 3 */}
          <div className="flex flex-col">
            <h5 className="p-1 text-gray-700 text-sm">
              3 - Enhanced Risk Mitigation
            </h5>
            <div className="flex gap-1 items-center">
              <div className="shape shape2 flex sml:flex-col med:flex-row items-center xsm:min-h-[200px] sml:min-h-[180px] med:min-h-[160px] note:min-h-[140px] tab:min-h-[120px]">
                <div className="shape-bg1">
                  {/* <Image src={Step1} alt="" width={"100%"} height={"100%"} /> */}
                  <GiStaticGuard size={48} />
                </div>
                <div className=" p-1">
                  <div className="px-1">
                    <p className="text-gray-700 text-xsm font-normal">
                      Experience enhanced security with our advanced risk
                      assessment tools, safeguarding your transactions from
                      potential fraud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-col">
            <h5 className="p-1 text-gray-700 text-sm">
              4 - Real-Time Insights
            </h5>
            <div className="flex gap-1 items-center">
              <div className="shape shape2 flex sml:flex-col med:flex-row items-center xsm:min-h-[200px] sml:min-h-[180px] med:min-h-[160px] note:min-h-[140px] tab:min-h-[120px]">
                <div className="shape-bg1">
                  {/* <Image src={Step1} alt="" width={"100%"} height={"100%"} /> */}
                  <TbAugmentedReality size={48} />
                </div>
                <div className=" p-1">
                  <div className="px-1">
                    <p className="text-gray-700 text-xsm font-normal">
                      Gain real-time visibility into your transaction status,
                      empowering you with data-driven decisions to optimize your
                      cash flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center w-1/4">
          {/* <Image src={CenterImg} alt="" /> */}
        </div>

        <div className="flex flex-col gap-5 w-full">
          {/* step 5 */}
          <div className="flex flex-col">
            <h5 className="p-1 text-gray-700 text-sm">
              5 - Efficient Workflow
            </h5>
            <div className="flex gap-1 items-center">
              <div className="shape shape3 flex sml:flex-col med:flex-row items-center xsm:min-h-[200px] sml:min-h-[180px] med:min-h-[160px] note:min-h-[140px] tab:min-h-[120px]">
                <div className="shape-bg1">
                  {/* <Image src={Step1} alt="" width={"100%"} height={"100%"} /> */}
                  <FaStaylinked size={48} />
                </div>
                <div className=" p-1">
                  <div className="px-1">
                    <p className="text-gray-700 text-xsm font-normal">
                      Our intuitive platform simplifies complex processes,
                      streamlining your financial supply chain management with
                      ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* step 6 */}
          <div className="flex flex-col">
            <h5 className="p-1 text-gray-700 text-sm">
              6 - Blockchain-Powered Trust
            </h5>
            <div className="flex gap-1 items-center">
              <div className="shape shape3 flex sml:flex-col med:flex-row items-center xsm:min-h-[200px] sml:min-h-[180px] med:min-h-[160px] note:min-h-[140px] tab:min-h-[120px]">
                <div className="shape-bg1">
                  {/* <Image src={Step1} alt="" width={"100%"} height={"100%"} /> */}
                  <SiBlockchaindotcom size={48} />
                </div>
                <div className=" p-1">
                  <div className="px-1" style={{ display: notDisplay6 }}>
                    <p className="text-gray-700 text-xsm font-normal">
                      Built using cutting-edge technologies such as public
                      blockchain and zero knowledge proof, Credore&apos;s
                      platform takes advantage of the immutability...{" "}
                      <a onClick={handleDisplay6} className="cursor-pointer">
                        more
                      </a>
                    </p>
                  </div>
                  <div className="px-1 relative" style={{ display: display6 }}>
                    <a
                      onClick={handleDisplay6}
                      className="text-xsm py-1 px-2 relative bottom-[50%] left-[92%] rounded-lg border-1 cursor-pointer bg-white"
                    >
                      X
                    </a>
                    <p className="text-gray-700 text-xsm font-normal">
                      Built using cutting-edge technologies such as public
                      blockchain and zero knowledge proof, Credore&apos;s
                      platform takes advantage of the immutability and
                      transparency of Ethereum Virtual Machine based
                      blockchains. Zero knowledge proof ensures data
                      confidentiality while maintaining full document integrity,
                      enabling you to create, sign, and manage agreements,
                      negotiable instruments, and other documents digitally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* step 7 */}
          <div className="flex flex-col">
            <h5 className="p-1 text-gray-700 text-sm">7 - Global Reach</h5>
            <div className="flex gap-1 items-center">
              <div className="shape shape4 flex sml:flex-col med:flex-row items-center xsm:min-h-[200px] sml:min-h-[180px] med:min-h-[160px] note:min-h-[140px] tab:min-h-[120px]">
                <div className="shape-bg1">
                  {/* <Image src={Step1} alt="" width={"100%"} height={"100%"} /> */}
                  <RiGlobalFill size={48} />
                </div>
                <div className=" p-1">
                  <div className="px-1">
                    <p className="text-gray-700 text-xsm font-normal">
                      Expand your business horizons by accessing new
                      opportunities and partnerships around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* step 8 */}
          <div className="flex flex-col">
            <h5 className="p-1 text-gray-700 text-sm">
              8 - Transparent Interactions
            </h5>
            <div className="flex gap-1 items-center">
              <div className="shape shape4 flex sml:flex-col med:flex-row items-center xsm:min-h-[200px] sml:min-h-[180px] med:min-h-[160px] note:min-h-[140px] tab:min-h-[120px]">
                <div className="shape-bg1">
                  {/* <Image src={Step1} alt="" width={"100%"} height={"100%"} /> */}
                  <PiCubeTransparentFill size={48} />
                </div>
                <div className=" p-1">
                  <div className="px-1">
                    <p className="text-gray-700 text-xsm font-normal">
                      Every step of the journey is recorded, ensuring
                      transparency and accountability for every stakeholder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="font-normal text-base">
          With Credore, you&apos;re not just managing your financial supply
          chain; you&apos;re elevating it to new heights of efficiency,
          security, and growth.
        </p>
        <br></br>
        <div className="font-normal text-base">
          Ready to experience the power of Credore? Explore our{" "}
          <a
            onClick={navigateFeatures}
            className="italic font-medium text-blue-600 cursor-pointer underline"
          >
            features
          </a>{" "}
          or{" "}
          <a
            onClick={openModal}
            className="italic font-medium text-blue-600 cursor-pointer underline"
          >
            contact us
          </a>{" "}
          for a personalised demo.
        </div>
      </div>

      <Form isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </>
  );
};
export default CredoreSteps;
