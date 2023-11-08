import React, { useState } from "react";
import useCaseData from "../constants/useCasesData.json";
import VideoSection from "./VideoSection";
import Image from "next/image";
import useCaseFlow from "../../public/assets/images/use-cases/usecase-flow.png";
import exporter from "../../public/assets/images/use-cases/exporter.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { VscExpandAll } from "react-icons/vsc";

const UseCases = () => {
  const [show1, setShow1] = useState("none");
  const [show2, setShow2] = useState("none");
  const [show3, setShow3] = useState("none");
  const [show4, setShow4] = useState("none");
  const [show5, setShow5] = useState("none");
  const [show6, setShow6] = useState("none");
  const [show7, setShow7] = useState("none");
  const [show8, setShow8] = useState("none");
  const [show9, setShow9] = useState("none");
  const [show10, setShow10] = useState("none");

  const handleShow1 = () => {
    if (show1 == "block") setShow1("none");
    else setShow1("block");
  };
  const handleShow2 = () => {
    if (show2 == "block") setShow2("none");
    else setShow2("block");
  };
  const handleShow3 = () => {
    if (show3 == "block") setShow3("none");
    else setShow3("block");
  };
  const handleShow4 = () => {
    if (show4 == "block") setShow4("none");
    else setShow4("block");
  };
  const handleShow5 = () => {
    if (show5 == "block") setShow5("none");
    else setShow5("block");
  };
  const handleShow6 = () => {
    if (show6 == "block") setShow6("none");
    else setShow6("block");
  };
  const handleShow7 = () => {
    if (show7 == "block") setShow7("none");
    else setShow7("block");
  };
  const handleShow8 = () => {
    if (show8 == "block") setShow8("none");
    else setShow8("block");
  };
  const handleShow9 = () => {
    if (show9 == "block") setShow9("none");
    else setShow9("block");
  };
  const handleShow10 = () => {
    if (show10 == "block") setShow10("none");
    else setShow10("block");
  };
  return (
    <>
      <section className="section why-section mb-2 tab:mb-20">
        <div className="container">
          <div className="row p-2 dsk:p-5">
            <h1 className="font-bold">
              Use Case-1: Non-Recourse Export Factoring
            </h1>
            <div className="flex flex-col gap-10 items-center px-2">
              <div className="w-full">
                <div className="m-3 dsk:m-10"></div>
                <div className="w-full border-[5px] dsk:border-[10px] border-[#DC927A] rounded-lg p-2 dsk:p-5 m-2 shadow-[-7px_7px_0px_0px_#5D7D72] dsk:shadow-[-12px_12px_0px_0px_#5D7D72]">
                  <span className="font-bold">Scenario:</span>
                  <p className="font-normal ml-1">
                    Imagine a small exporting company called &quot;Global
                    Traders Private Ltd.&quot; based in India. Global Traders
                    specializes in manufacturing and exporting high-quality
                    textiles to buyers around the world. They have recently
                    secured a significant order from a buyer in Europe, but they
                    are facing a challenge: they need working capital to fulfill
                    the order and cover production costs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col dsk:flex-row gap-4 dsk:gap-1">
                <div
                  className="w-full flex flex-col min-h-full border rounded-t-lg bg-[#EFFFFF]"
                  id="challenges"
                >
                  <div className="w-full bg-[#5D7D72] p-2 m-0 rounded-t-lg ">
                    <h5 className="text-white text-sm font-bold">Challenges</h5>
                  </div>

                  <div className="">
                    <p className="text-sm font-medium p-2">
                      Global Traders is dealing with a common challenge that
                      many exporters face - the need for immediate working
                      capital to fulfill large export orders. Traditional
                      lending options might require collateral or involve
                      time-consuming credit checks, causing delays in production
                      and shipment.
                    </p>

                    <p className="text-sm font-medium p-2">
                      Exporting presents its own set of challenges that can
                      hinder growth and financial stability. These challenges
                      include:
                    </p>
                    <ul className="bg-[#EEE] p-2 border mx-1 rounded-sm">
                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        1. Limited Access to Finance:
                        {show1 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow1}
                            className="ml-2"
                          />
                        )}
                      </li>

                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        2. Conditional &apos;Non-Recourse&apos; Advances:
                        {show2 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow2}
                            className="ml-2"
                          />
                        )}
                      </li>

                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        3. Ineffectiveness of Export Factoring Solutions:
                        {show3 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow3}
                            className="ml-2"
                          />
                        )}
                      </li>
                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        4. Reliance on Overdrafts:
                        {show4 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow4}
                            className="ml-2"
                          />
                        )}
                      </li>
                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        5. Inefficiency of Traditional Trade Finance:
                        {show5 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow5}
                            className="ml-2"
                          />
                        )}
                      </li>
                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        6. Inadequate Risk Mitigation:
                        {show6 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow6}
                            className="ml-2"
                          />
                        )}
                      </li>
                    </ul>

                    <p className="text-sm font-medium p-2">
                      Navigating these challenges demands innovative solutions
                      that prioritize financial accessibility, risk management,
                      and efficient trade processes. At Credore, we aim to
                      transform these challenges into opportunities by providing
                      a streamlined, secure, and reliable platform for Export
                      Factoring that empowers businesses to thrive in the global
                      marketplace.
                    </p>
                  </div>
                </div>

                <div className="hidden dsk:flex items-center">
                  <div className="text-white p-3 bg-[#24554ab0] text-left font-medium text-sm"></div>
                  <div className="right-arrow"></div>
                </div>

                <div className="flex flex-col dsk:hidden items-center">
                  <div className="text-white p-3 bg-[#24554ab0] text-left font-medium text-sm"></div>
                  <div className="down-arrow"></div>
                </div>

                <div
                  className="w-full flex flex-col min-h-full border rounded-t-lg bg-[#FFEBE5]"
                  id="solutions"
                >
                  <div className="w-full bg-[#5D7D72] p-2 m-0 rounded-t-lg">
                    <h5 className="text-white text-sm font-bold">Solution</h5>
                  </div>

                  <div className="">
                    <p className="text-sm font-medium p-2">
                      Global Traders turns to Credore&apos;s Export Factoring
                      platform for a solution. They decide to use non-recourse
                      export factoring, a financing arrangement that provides
                      them with the necessary funds without taking on the risk
                      of buyer default.
                    </p>
                    <p className="text-sm font-medium  p-2">
                      At Credore, we understand the challenges faced by
                      businesses in the realm of export factoring. That&apos;s
                      why we&apos;ve designed a transformative solution that not
                      only addresses these challenges but propels businesses
                      towards enhanced access to finance, operational
                      efficiency, and risk mitigation.
                    </p>

                    <ul className="bg-[#EEE] p-2 border mx-1 rounded-sm">
                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        1. Increased Access to Finance:
                        {show7 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow7}
                            className="ml-2"
                          />
                        )}
                      </li>

                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        2. Enhanced Operational Efficiency:
                        {show8 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow8}
                            className="ml-2"
                          />
                        )}
                      </li>

                      <li className="text-sm font-bold mt-2 flex items-center justify-between">
                        3. Advanced Risk Mitigation:
                        {show9 === "none" && (
                          <VscExpandAll
                            size={16}
                            onClick={handleShow9}
                            className="ml-2"
                          />
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-normal">
                  Credore&apos;s Export Factoring solution propels businesses
                  beyond the conventional, enabling them to access finance,
                  streamline operations, and mitigate risks with unprecedented
                  efficiency and confidence. Embrace innovation today and step
                  into a new era of empowered global trade.
                </p>
              </div>
            </div>
          </div>

          <div className="row p-2 dsk:p-5">
            <h1 className="font-bold py-2 dsk:py-5">
              How Credore&apos;s Non-Recourse Export Factoring Works:
            </h1>
            <div className="flex gap-2 p-2">
              <div className="p-2 pb-1 border-[0.5px] border-gray-500 rounded-md">
                {/* <Image src={exporter} alt="" /> */}
                <Image src={useCaseFlow} alt="" className="rounded-md" />
              </div>
            </div>

            <div className="flex gap-2 p-4">
              <ul className="flex flex-col gap-2">
                <li>
                  <p className="font-normal mb-2">
                    <b>1. Invoice Submission:</b> Global Traders submits their
                    invoice for the European buyer&apos;s order to
                    Credore&apos;s platform.
                  </p>
                </li>
                <li>
                  <p className="font-normal mb-2">
                    <b>2. Verification and Discounting:</b> Credore&apos;s
                    platform verifies the authenticity of the invoice and the
                    buyer&apos;s creditworthiness. Once verified, they offer
                    Global Traders an immediate advance on the invoice amount,
                    which helps cover their working capital needs.
                  </p>
                </li>
                <li>
                  <p className="font-normal mb-2">
                    <b>3. Risk Transfer:</b> In a non-recourse arrangement,
                    Credore assumes the risk of buyer default. This means that
                    if the European buyer doesn&apos;t pay the invoice due to
                    insolvency or other reasons, Global Traders is not
                    responsible for repaying the advanced funds.
                  </p>
                </li>
                <li>
                  <p className="font-normal mb-2">
                    <b>4. Seamless Transaction:</b>** Credore manages the
                    payment collection from the European buyer. They ensure that
                    the transaction is conducted smoothly and transparently,
                    fostering trust between all parties involved.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="row px-5">
            <h1 className="font-bold text-xl py-2">Benefits:</h1>

            <div className="p-1 dsk:p-4 flex flex-col gap-2">
              <p className="font-normal mb-2">
                1. Global Traders receives the much-needed working capital
                quickly, allowing them to fulfill the order on time.
              </p>
              <p className="font-normal mb-2">
                2. The non-recourse feature shields Global Traders from the risk
                of buyer default, providing them financial security.
              </p>
              <p className="font-normal mb-2">
                3. Credore&apos;s platform offers transparency, security, and
                efficiency throughout the factoring process.
              </p>
              <p className="font-normal mb-2">
                4. This arrangement promotes business growth and international
                trade for companies like Global Traders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show1 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow1}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
          As a significant portion of exports are conducted on open account
          terms, traditional Letter of Credit (LC) finance isn&apos;t readily
          available, restricting immediate access to funds.
        </span>
      </div>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show2 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow2}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
          Non-recourse advances are tied to contractual obligations by the
          client. Fulfillment of these obligations is crucial for availing the
          financial benefit.
        </span>
      </div>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show3 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow3}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
          <ul className="ml-2">
            <li className="text-sm mt-2">
              <b>• Overseas Receivables Restrictions:</b> Banks and Financial
              Institutions often have stricter policies for overseas receivables
              compared to domestic ones, affecting financing possibilities.
            </li>
            <li className="text-sm mt-2">
              <b>• Due Diligence and Two-Factor Model:</b> Verification of debt
              enforceability in importing countries requires due diligence,
              often involving local correspondents using a two-factor model.
            </li>
            <li className="text-sm mt-2">
              <b>• Preference for Whole Turnover Approach:</b> The practice of a
              whole turnover approach, supported by an all-asset debenture, adds
              complexity.
            </li>
            <li className="text-sm mt-2">
              <b>• Dilution Risk:</b> Banks&apos; title rights to receivables
              hinge on contract terms&apos; compliance, posing a dilution risk.
            </li>
            <li className="text-sm mt-2">
              <b>• Limited Financing Availability:</b> The combination of
              dilution risk, stringent invoice criteria, and advance rate limits
              restrict financing to 50-60% of total invoice value.
            </li>
          </ul>
        </span>
      </div>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show4 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow4}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
          Many businesses rely heavily on overdrafts for finance. However, these
          limits often fall short of accommodating growth and extended credit
          periods involved in exporting.
        </span>
      </div>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show5 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow5}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
        </span>
        Paper-based solutions like Letters of Credit (LCs) and Collections can
        be inefficient. Overseas buyers resist LCs due to cost and complexity.
        Collections are also hindered by paper-based processes.
      </div>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show6 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow6}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
          While credit insurance covers debtor insolvency, disputes can
          undermine its benefits. Alleged contractual disputes can weaken the
          effectiveness of credit insurance.
        </span>
      </div>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show7 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow7}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
          <ul className="ml-2">
            <li className="text-sm mt-2">
              <i>
                <b>• Unlocking Collection Benefits:</b>
              </i>{" "}
              Leveraging DLPC compliant ePU (Electronic Payment Undertaking) and
              digital bills of exchange, we enable businesses to tap into the
              advantages of traditional Collections. When the buyer accepts the
              ePU or bill, it signifies approval of the invoice. This acceptance
              represents an unconditional and irrevocable payment undertaking,
              separate from the underlying contract. It eliminates the
              buyer&apos;s ability to evade payment due to contractual disputes.
            </li>

            <li className="text-sm mt-2">
              <i>
                <b>• Streamlined Due Diligence:</b>
              </i>{" "}
              The accepted bill acts as a reliable proof of enforceability,
              eliminating the need for exhaustive due diligence. This not only
              speeds up the financing process but also fosters greater
              confidence in cross-border transactions.
            </li>

            <li className="text-sm mt-2">
              <i>
                <b>• Empowering &apos;Non-Recourse&apos; Finance:</b>
              </i>{" "}
              The financing of accepted ePU or bill, bolstered by credit
              insurance, can be &apos;non-recourse&apos;. This liberates the
              client&apos;s credit facilities, empowering them to expand their
              business operations.
            </li>
          </ul>
        </span>
      </div>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show8 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow8}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
          <ul className="ml-2">
            <li className="text-sm mt-2">
              <i>
                <b>• Seamless Digital Workflow:</b>
              </i>{" "}
              Our platform facilitates a digital workflow for the entire
              Collection process. No more reliance on transporting paper
              documents across multiple parties. The digital creation and
              transfer of the bill of exchange streamline the process, ensuring
              efficiency from start to finish.
            </li>
          </ul>
        </span>
      </div>

      <div
        className="fixed w-full dsk:w-3/4 m-auto dsk:left-[12.5%] h-full dsk:h-3/4 top-0 dsk:top-[12.5%] tab:py-10 px-4 sml:py-1 tab:px-10 bg-gray-100 border rounded-md overflow-auto"
        style={{ display: show9 }}
      >
        <span className="text-sm tab:text-lg font-normal">
          <AiFillCloseCircle
            size={24}
            onClick={handleShow9}
            className="ml-4 sticky bottom-[82%] left-[100%]"
          />
          <ul className="ml-2">
            <li className="text-sm mt-2">
              <i>
                <b>• Unyielding Payment Liability:</b>
              </i>{" "}
              Once the ePU or bill of exchange gains acceptance, the
              buyer&apos;s payment liability becomes inviolable. Alleged
              disputes cannot be wielded to avoid payment obligations.
            </li>

            <li className="text-sm mt-2">
              <i>
                <b>• Solid Prima Facie Evidence:</b>
              </i>{" "}
              In the event of dishonored payment, a noted and protested bill
              serves as concrete evidence of unpaid debt. This can be used as
              the foundation for claims under the credit insurance policy.
            </li>

            <li className="text-sm mt-2">
              <i>
                <b>• Non-Recourse Finance with Confidence:</b>
              </i>{" "}
              Financing of accepted bills, supported by credit insurance,
              delivers &apos;non-recourse&apos; options. This eliminates buyer
              credit risk, ensuring businesses can navigate the market with
              confidence.
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};
export default UseCases;
