import React from 'react'
import HeroSection from './../Review-Constants/HeroSection/index';
import Section from './../Review-Constants/Section/index';
import Services from './../Review-Constants/Services/index';
import Footer from './../Review-Constants/Footer/index';
import { homeObjOne, homeObjTwo, homeObjThree } from './../Review-Constants/InfoSection/Data';
import NavBar from './../Components/Navbar/NavBar';
import InfoSection from './../Review-Constants/InfoSection/index';

const Review = () => {
  return (
    <>
    <NavBar />
    <HeroSection />
    <Services />
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjThree} />
    <Section />
    <Footer />
    </>
  )
}

export default Review