import React from 'react'
import { Header, About, Services, Team, Testimonial, Footer } from './Containers';
import { NavBar } from './Components';
import './App.scss'
import Mission from './Containers/Mission1/Mission1';


const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <About />
      <Mission />
      <Services />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App