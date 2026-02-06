import PreFooterCTA from '../components/Solutions/solution-prefooter'
import TrustHero from '../components/aboutus/about-hero'
import Navbar from '../components/common/NavBar'
import Footer from '../components/Home/footer'
import React from 'react'
import PlatformHero from '../components/platform/platform-hero'
import PlatformFeatures from '../components/platform/platform-features'
import InteroperabilityNetwork from '../components/platform/platform-network'

const about = () => {
  return (
    <div>
        <Navbar />
        <PlatformHero/>
        <PlatformFeatures/>
        <InteroperabilityNetwork/>
        <Footer/>
    </div>
  )
}

export default about