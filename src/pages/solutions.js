import React from "react";
import Head from "next/head";
import About from "../components/About";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import FactsnFigures from "../components/FactsnFigures";
import MainSlider from "../components/MainSlider";
import Solutions from "../components/Solutions";
import WhyCredore from "../components/WhyCredore";
import Offerings from "../components/Offerings";
import AboutDetails from "../components/AboutDetails";

const solutions = () => {
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
        className="section solutions-page-banner"
        // style={{
        //   width: "100%",
        //   backgroundImage: "url(../../public/assets/images/hero-bg.png)",
        // }}
      >
        <div className="container flex flex-col gap-[20px]">
          <div className="homeBannerSection">
            <div className="banner-details">
              <h1 className="hero-heading font-medium text-[#f15928] text-[#f15928]">
                Our Solutions
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      <LazyShow>
        <AboutDetails />
      </LazyShow>
      
      <LazyShow>
        <Offerings />
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

export default solutions;
