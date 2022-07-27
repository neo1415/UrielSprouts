import React from 'react'
import HeroSection from './../Review-Constants/HeroSection/index';
import Services from './../Review-Constants/Services/index';
import Footer from './../Review-Constants/Footer/index';
import { homeObjOne, homeObjTwo, homeObjThree } from './../Review-Constants/InfoSection/Data';
import InfoSection from './../Review-Constants/InfoSection/index';
import PriceTable from '../Review-Constants/PriceTable/PriceTable';
import FAQ from '../Review-Constants/FaQ/FAQ';
import Navbar from '../Components/Navbar copy';


const Review = () => {
  return (
    <div id='cv'>
    <Navbar />

    <HeroSection />
    <Services />
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjThree} />
    <PriceTable />
    <FAQ />
    {/* <Section /> */}
    <Footer />
    </div>
  )
}

export default Review