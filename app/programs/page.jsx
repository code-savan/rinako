import React from 'react'
import ProgramsHero from '../components/programs/ProgramsHero'
import ProgramCategories from '../components/programs/ProgramCategories'
import FeaturedPrograms from '../components/programs/FeaturedPrograms'
import OurImpact from '../components/programs/OurImpact'
import VoicesOfImpact from '../components/programs/VoicesOfImpact'
import SupportUs from '../components/programs/SupportUs'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <ProgramsHero />
        <ProgramCategories />
        <FeaturedPrograms />
        <OurImpact />
        <VoicesOfImpact />
        <SupportUs />
        <CTA />
        <Footer />
    </div>
  )
}

export default page
