import React from 'react'
import Navbar from '../Components/Navbar copy'
import { motion } from 'framer-motion'
import Footer from '../Review-Constants/Footer';
import HAbout from './../Hospitability-Containers/About/HAbout';
import HHero from './../Hospitability-Containers/Hero/HHero';
import ServiceH from '../Hospitability-Containers/Services/ServiceH';
import Trust from '../Hospitability-Containers/Trust/Trust';
import Ready from '../Hospitability-Containers/Ready/Ready';

const Hosptality = () => {
    return (
        <motion.div
        initial={{width:0}}
        animate={{width:'100%'}}
        exit={{x:window.innerWidth, transition:{duration:0.1}}}
        >
        <Navbar />
        <HHero/>
        <HAbout />
        <ServiceH />
        <Trust />
        <Ready />
        <Footer />
        </motion.div>
      )
}

export default Hosptality