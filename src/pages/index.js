import Technology from '../components/Home/Technology'
import About from '../components/Home/About'
import Hero from '../components/Home/Hero'
import Navbar from '../components/common/NavBar'
import React from 'react'
import PlatformSolutions from '../components/Home/Platformsolutions'
import TrustedBy from '../components/Home/TrustedBy'
import ContactSection from '../components/Home/Contactsection'
import Footer from '../components/Home/footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About/>
        <Technology/>
        <PlatformSolutions/>
        <TrustedBy/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default HomePage