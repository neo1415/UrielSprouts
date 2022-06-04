import React from 'react'
import { Header, About, Services, Team, Testimonial, Footer } from '../Containers';
import Mission from './../Containers/Mission/Mission';
import NavBar from './../Components/Navbar/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Mission />
      <Services />
      <Team />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home