import React from 'react'
import { About, Services, Team, Testimonial, Footer } from '../Containers';
import Mission from './../Containers/Mission/Mission';
import Navbar from '../Components/Navbar copy';
import CTA from '../Containers/CTA/CTA';
import CopyRight from '../Containers/copyright';
import Header from '../Containers/Header/Header';
import Slider from '../Containers/TesSlider/Slider';

const Home = () => {
  return (
    <div id='homepage'>
      <Navbar />
      <Header />
      <About />
      <Mission />
      <Services />
      <CTA />
      <Team />
      <Testimonial />
      <Footer />
      <CopyRight />
    </div>
  )
}

export default Home