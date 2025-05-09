import React from 'react'
import styles from './IndexPage.module.css'
import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import Services from '../Services/Services'
import Testymonials from '../Testymonials/Testymonials'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../footer/footer'
export default function IndexPage() {
  return (
    <>
        <Hero/>
        <AboutUs/>
        <Services/>
        <Testymonials/>
        <ContactUs/>
        <Footer/>
    </>
  )
}
