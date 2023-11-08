import React, { useState, useEffect } from "react";
import Head from "next/head";
import About from "../components/About";
import Community from "../components/Community";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import FactsnFigures from "../components/FactsnFigures";
import MainSlider from "../components/MainSlider";
import Solutions from "../components/Solutions";
import WhyCredore from "../components/WhyCredore";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SupportedBy from "../components/SupportedBy";
import ManageCookies from "../components/ManageCookies";

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className="bg-background" style={{ width: windowSize.width }}>
    <div className="bg-background">
      <Head>
        <title>
          Welcome to Credore - Revolutionary Fintech Transforming Financial
          Supply Chain Management with Blockchain Technology
        </title>
      </Head>
      <Header />

      {/* <MainSlider/> */}

      <MainHero />

      {/* <LazyShow>
        <FactsnFigures />
      </LazyShow> */}

      <LazyShow id="about">
        <About />
      </LazyShow>

      <LazyShow id="solutions">
        <Solutions />
      </LazyShow>

      {/* <LazyShow>
        <WhyCredore />
      </LazyShow> */}

      <LazyShow id="supportedBy">
        <SupportedBy />
      </LazyShow>

      <LazyShow id="contact">
        <Contact />
      </LazyShow>

      <LazyShow id="footer">
        <Footer />
      </LazyShow>

      <LazyShow id="community">
        <Community />
      </LazyShow>
    </div>
  );
};

export default App;
