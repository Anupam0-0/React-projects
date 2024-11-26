import React from 'react'

import Navbar from './components/Navbar/Navbar'
import NavbarBanner from './components/Navbar/NavbarBanner'
import Hero from './components/Hero/Hero'
import Testimonial from './components/Testimonials/Testimonial'
import Footer from './components/Footer/Footer'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'



const App = () => {
  return (
    <main className='overflow-x-hidden '>
        <Navbar />
        <NavbarBanner /> 
        <Hero />
        <WhyChooseUs />
        <Testimonial />
        <Footer />
    </main>
  )
}

export default App