
import SolutionsHero from '../components/Solutions/solution-hero'
import Navbar from '../components/common/NavBar'
import Footer from '../components/Home/footer'
import React from 'react'
import SolutionsBlocks from '../components/Solutions/solution-block'
import PreFooterCTA from '../components/Solutions/solution-prefooter'

const about = () => {
  return (
    <div>
        <Navbar />
        <SolutionsHero/>
        <SolutionsBlocks/>
        <PreFooterCTA/>
        <Footer/>
    </div>
  )
}

export default about