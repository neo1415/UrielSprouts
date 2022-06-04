import React from 'react'
// import { Header, About, Services, Team, Testimonial, Footer } from './Containers';
// import { NavBar } from './Components';
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Review from './Pages/Review';
// import Mission from './Containers/Mission/Mission';


const App = () => {
  return (
    <div className='app'>
      {/* <NavBar />
      <Header />
      <About />
      <Mission />
      <Services />
      <Team />
      <Testimonial />
      <Footer /> */}

      <Routes >
          <Route exact path="/"
           element = {<Home />} />
          <Route exact path="/signin"
           element = {<Review />} />
      </Routes>
    </div>
  )
}

export default App