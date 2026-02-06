import React from "react";
import Head from "next/head";
import Community from "../../components/Community";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LazyShow from "../../components/LazyShow";
import Technology from "../../components/Technology";

const technology = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>
        Offerings Overview - Revolutionary Fintech Transforming Financial Supply Chain
          Management with Blockchain Technology
        </title>
      </Head>
      <Header />
      <section className={'section inner-page-banner'}>
        <div className="container flex flex-col gap-[20px]">
          <div className="homeBannerSection">
            <div className="banner-details">
              <h1 className="hero-heading font-medium text-[#f15928] text-[#f15928] text-4xl">
                Our Technology
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* <LazyShow>
        <AboutDetails />
      </LazyShow> */}

      <LazyShow>
        <Technology />
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

export default technology;
