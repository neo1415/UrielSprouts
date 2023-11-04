import React from 'react'
import { About, Services, Team, Testimonial, Footer } from '../Containers';
import Mission from './../Containers/Mission/Mission';
import Navbar from '../Components/Navbar copy';
import CTA from '../Containers/CTA/CTA';
import CopyRight from '../Containers/copyright';
import Header from '../Containers/Header/Header';
import Slider from '../Containers/TesSlider/Slider';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth, transition:{duration:0.1}}}
     id='homepage'>
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
    </motion.div>
  )
}

export default Home