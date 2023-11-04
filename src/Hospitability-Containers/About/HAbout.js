import React from 'react'
import './HAbout.scss'
import { motion } from 'framer-motion';

const HAbout = () => {
  return (
    <motion.div className='about-section'
     whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}
    >
        <div className='about-title'>
            <h5 className='about-h'>Welcome to <span>Urielsprout Hospitality</span></h5>
            <hr></hr>
        </div>
        <div className='about-content'>
            <p className='about-paragraph'>
            At Urielsprout Hospitality, we are dedicated to elevating the hospitality industry to new heights.
            With a wealth of experience and a passion for excellence, we offer a range of services designed to 
            enhance your hotel or restaurant's success. Whether you're in need of expert consulting services,
            reliable recruitment solutions, or comprehensive staff training, we have you covered.
            </p>
        </div>
    </motion.div>
  )
}

export default HAbout