import React from 'react'
import SuccessStoriesHero from '../components/successstories/SuccessStoriesHero'
import FeaturedStory from '../components/successstories/FeaturedStory'
import BrowseByCategory from '../components/successstories/BrowseByCategory'
import ImpactInNumbers from '../components/successstories/ImpactInNumbers'
import VoicesOfImpact from '../components/successstories/VoicesOfImpact'
import SupportOurWork from '../components/successstories/SupportOurWork'

import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <SuccessStoriesHero />
      <FeaturedStory />
      <BrowseByCategory />
      <ImpactInNumbers />
      <VoicesOfImpact />
      <SupportOurWork />
      <Footer />
    </>
  )
}

export default page
