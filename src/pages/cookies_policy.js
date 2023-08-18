import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import Footer from "../components/Footer";
import CookiesPolicy from "../components/CookiesPolicy";
import Community from "../components/Community";

const cookies_policy = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>
          Cookies Policy - Credore - Revolutionary Fintech Transforming Financial
          Supply Chain Management with Blockchain Technology
        </title>
      </Head>
      <Header />
      
      <section
        className="section about-page-banner"
      >
        <div className="container flex flex-col gap-[20px]">
          <div className="homeBannerSection">
            <div className="banner-details">
              {/* <h1 className="hero-heading font-medium text-[#f15928] text-[#f15928]">
                About Us
              </h1> */}
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
        <CookiesPolicy />
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

export default cookies_policy;
