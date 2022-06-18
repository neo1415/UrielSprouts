import React from 'react'
import { Header, About, Services, Team, Testimonial, Footer } from '../Containers';
import Mission from './../Containers/Mission/Mission';
import NavBar from './../Components/Navbar/NavBar';
import CTA from '../Containers/CTA/CTA';

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Mission />
      <Services />
      <CTA />
      <Team />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home