import React from "react";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import Offerings from "../components/Offerings";
import AboutDetails from "../components/AboutDetails";
import Team from "../components/Team";
import Community from "../components/Community";
import Footer from "../components/Footer";
import CredoreSteps from "../components/CredoreSteps";
import SupportedBy from "../components/SupportedBy";

const about_us = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>
          Welcome to Credore - Revolutionary Fintech Transforming Financial
          Supply Chain Management with Blockchain Technology
        </title>
      </Head>
      <Header />
      {/* <MainSlider/> */}
      {/* <MainHero /> */}
      <section
        className="section inner-page-banner"
        // style={{
        //   width: "100%",
        //   backgroundImage: "url(../../public/assets/images/hero-bg.png)",
        // }}
      >
        <div className="container flex flex-col gap-[20px]">
          <div className="homeBannerSection">
            <div className="banner-details">
              <h1 className="hero-heading font-medium text-[#f15928] text-[#f15928]">
                How Credore Helps
              </h1>
            </div>
            {/* <div className="bannerImage">
            <figure>
              <img
                src="../assets/images/home-banner.png"
                alt="Banner Image"
                className="img-responsive"
              />
            </figure>
          </div> */}
          </div>
        </div>
        
      </section>

            
      <LazyShow>
        <AboutDetails/>
      </LazyShow>

      <LazyShow>
        <Team />
      </LazyShow>

      <LazyShow>
        <SupportedBy />
      </LazyShow>

      <LazyShow>
        <Footer />
      </LazyShow>

      <LazyShow>
        <Community />
      </LazyShow>
    </div>
  );
};

export default about_us;
