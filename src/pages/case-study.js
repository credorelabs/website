
import Navbar from '../components/common/NavBar'
import Footer from '../components/Home/footer'
import React from 'react'

import CasestudyHero from '../components/casestudy/casestudy-hero'
import CasestudyUseCases from '../components/casestudy/casestudy-usecase'
import CaseStudyScenario from '../components/casestudy/section1'
import ChallengesSection from '../components/casestudy/section2'
import CredoreSolution from '../components/casestudy/section3'
import HowItWorks from '../components/casestudy/section4'
import CredoreAdvantage from '../components/casestudy/credore-advantages'

const about = () => {
  return (
    <div>
        <Navbar />
       <CasestudyHero/>
       {/* <CasestudyUseCases/> */}
       <CaseStudyScenario/>
       <ChallengesSection/>
       <CredoreSolution/>
       <HowItWorks/>
       <CredoreAdvantage/>
        <Footer/>
    </div>
  )
}

export default about