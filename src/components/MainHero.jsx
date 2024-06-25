import React from "react";
import FactsnFigures from "./FactsnFigures";

const MainHero = () => {
  return (
    <section className="section hero-section">
      <div className="container flex flex-col gap-[20px]">
        <div className="homeBannerSection">
          <div className="banner-details">
            {/* <h1 className="hero-heading font-medium">
              Empowering{" "}
              <span className="font-bold">Financial Supply Chains,</span>{" "}
              Elevating <span className="font-bold">Trust</span> with{" "}
              <span className="font-bold">Verified </span> Deduplication
              <br></br>
            </h1> */}
            <h1 className="hero-heading med:w-[100vh]">Strengthening Global Trade Partnerships Through Legally Recognized Electronic Trade Documentation</h1>
            {/* <h1 className="hero-heading font-medium">
            Financial Supply Chain Mastery:<br></br>
              <span className="tag-line font-bold">Trade, Trust, Transcend</span>{" "}
              
            </h1> */}
            <div className="mt-5">
              <button className="knowMore btn-primary border-1 border-gray-300"><a href="#about-us" className=" !px-2 !py-3 text-white">Know More</a></button>
            </div>
          </div>
        </div>
        <FactsnFigures />
      </div>
    </section>
  );
};

export default MainHero;
