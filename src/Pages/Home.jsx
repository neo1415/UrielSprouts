import React from 'react'
import { About, Services, Team, Testimonial, Footer } from '../Containers';
import Mission from './../Containers/Mission/Mission';
import NavBar from './../Components/Navbar/NavBar';
import CTA from '../Containers/CTA/CTA';
import CopyRight from '../Containers/copyright';
import Header from '../Containers/Header/Header';

const Home = () => {
  return (
    <div id='homepage'>
      <NavBar />
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