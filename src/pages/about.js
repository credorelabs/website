// import PreFooterCTA from '/components/Solutions/solution-prefooter'
import TrustHero from '../components/aboutus/about-hero'
import Navbar from '../components/common/NavBar'
import Footer from '../components/Home/footer'
import React from 'react'
import OurPurpose from '../components/aboutus/ourpurpose'
import OurApproach from '../components/aboutus/Ourapproach'
import LeadershipTeam from '../components/aboutus/leadershipteam'
import EventGallery from '../components/aboutus/eventgallery'
import TrustedEcosystem from '../components/common/trustedEcosystem'

const about = () => {
  return (
    <div>
        <Navbar />
        <TrustHero/>
        <TrustedEcosystem/>
        <OurPurpose/>
        <OurApproach/>
        <LeadershipTeam/>
        <EventGallery/>
        {/* <PreFooterCTA/> */}
        <Footer/>
    </div>
  )
}

export default about