import React from 'react'
import Navbar from '../Components/Navbar copy'
import Courses from '../EmployabilityContainers/Courses/Courses'
import About from '../EmployabilityContainers/About/About'
import PriceTable from '../EmployabilityContainers/PriceTable/PriceTable'
import Footer from './../Review-Constants/Footer/index';
import Hero from '../EmployabilityContainers/Hero/Hero';


const Employability = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Courses />
    <PriceTable />
    <Footer />
    </div>
  )
}

export default Employability