import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactAddress from '../components/contact/ContactAddress'
import GetInTouch from '../components/contact/GetInTouch'
import RegionalOffices from '../components/contact/RegionalOffices'
import CTA3 from '../components/contact/CTA3'


import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactAddress />
      <GetInTouch />
      <RegionalOffices />
      <CTA3 />

      <Footer />
    </>
  )
}

export default page
