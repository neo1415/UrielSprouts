import React from 'react'
import { Routes,Route,useLocation } from 'react-router-dom';
import Home from './../Pages/Home';
import Review from './../Pages/Review';
import Employability from './../Pages/Employability';
import Reg from './../EmployabilityContainers/Reg';
import ExecReg from './../EmployabilityContainers/ExecReg';
import Checkout from './Checkout/Checkout';
import { AnimatePresence } from 'framer-motion';

const AnimateRouters = () => {

    const location= useLocation()

  return (

    <div>
    <AnimatePresence>
        <Routes location={location} key={location.pathname} >
            <Route exact path="/"
            element = {<Home />} />
            <Route exact path="/review"
            element = {<Review />} />
            <Route exact path="/employability"
            element = {<Employability />} />
            <Route exact path="registration"
            element = {<Reg />} />
                <Route exact path="executive-registration"
            element = {<ExecReg />} />
            <Route exact path="checkout"
            element = {<Checkout />} />

        
        </Routes>
    </AnimatePresence>

    </div>
  )
}

export default AnimateRouters