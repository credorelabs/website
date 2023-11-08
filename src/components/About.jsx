import React from "react";
import VideoSection from "./VideoSection";
import Link from "next/link";
import Image from "next/image";
import HowCredoreHelps from "../../public/assets/images/how-credore-helps.png";
import CredoreSteps from "./CredoreSteps";

const About = () => {
  return (
    <section className="section about-section p-0" id="about-us">
      <div className="container">
        <div className="detailSectn flex gap-4 items-center">
          <div className="detailSecBx p-5 w-full">
            <div className="p-5 pl-0">
              <h1>How Credore Helps</h1>
            </div>

            {/* <div className="heading">
              Transforming Financial Supply Chain Management: Unlocking
              Verifiable Trust with Credore
            </div> */}
            <div className="detailTxt">
              <p className="font-normal text-base">
                Credore is a trailblazing force in the realm of trade finance,
                dedicated to revolutionizing global commerce through
                cutting-edge technology. With a strong commitment to
                sustainability, Credore has harnessed the power of public
                blockchain, W3C Verifiable Credentials, and privacy-preserving
                zero-knowledge proof technology. By digitizing trade processes,
                Credore is not only streamlining transactions but also
                catalyzing a paradigm shift towards trust, transparency, and
                efficiency. From empowering small enterprises to redefining the
                standards of trade, Credore&apos;s innovative solutions are
                driving a more inclusive, prosperous, and sustainable future for
                international trade.
              </p>

              <p className="font-medium text-sm">
                Discover how Credore transforms financial supply chain
                management through its innovative platform.
              </p>
              <p className="font-medium text-sm">
                Here&apos;s a step-by-step breakdown of how we empower
                businesses:
              </p>
            </div>

            <CredoreSteps />
            
            {/* 
            <div>
              <Link href="/about_us">
                <button type="button" className="btn-primary learn-more">
                  Read More
                </button>
              </Link>
            </div> */}
          </div>

          {/* <div className="detailSecBx p-5 w-2/5">
            <div>
              <iframe
                src="https://www.youtube.com/embed/VtplLPDcI88"
                title="YouTube video player"
                // frameBorder="0"
                className="aboutCredore"
              ></iframe>
            </div>
          </div> */}
        </div>
        {/* <div>
          <div className="detailSecBx p-5 w-full">
            <Image src={HowCredoreHelps} alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default About;
