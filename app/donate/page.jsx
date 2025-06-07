import React from 'react'
import DonateHero from '../components/donate/DonateHero'
import DonationImpact from '../components/donate/DonationImpact'
import DonateForm from '../components/donate/DonateForm'
import TrustedOrganizations from '../components/donate/TrustedOrganizations'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <DonateHero />
      <DonationImpact />
      <DonateForm />
      <TrustedOrganizations />
      <Footer />
    </>
  )
}

export default page
