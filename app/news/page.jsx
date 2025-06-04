import React from 'react'
import NewsHero from '../components/news/NewsHero'
import FeaturedNews from '../components/news/FeaturedNews'
import NewsList from '../components/news/NewsList'
import UpcomingEvents from '../components/news/UpcomingEvents'
import MediaResources from '../components/news/MediaResources'
import CTA2 from '../components/news/CTA2'

import Footer from '../components/Footer'
const page = () => {
  return (
    <>
      <NewsHero />
      <FeaturedNews />
      <NewsList />
      <UpcomingEvents />
      <MediaResources />
      <CTA2 />

    <Footer />
    </>
  )
}

export default page
