import React from 'react'
import VolunteerProcess from '../components/volunteerapplication/VolunteerProcess'
import VolunteerTestimonials from '../components/volunteerapplication/VolunteerTestimonials'
import VolunteerForm from '../components/volunteerapplication/VolunteerForm'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <VolunteerForm />
      <VolunteerProcess />
      <VolunteerTestimonials />
      <Footer />
    </>
  )
}

export default page
