import React from 'react';
import Head from "next/head";
// import Team from '../components/Team';
import Community from '../components/Community';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';

const team = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>Credore</title>
      </Head>
      <Header />
       {/* <LazyShow>
        <Team />
      </LazyShow> */}
      <LazyShow>
        <Community />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  );
};

export default team;
