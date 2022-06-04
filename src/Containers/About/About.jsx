import React from 'react'
import { images } from '../../Constants'

import './About.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='about-container app__flex about' id='about' >
        <motion.img
           whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle3'
        />
         <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5, delayChildren:.5}}
           className='app__header-image'
        >
          <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.aboutbg}
            alt='profile_circle'
            className='about_image'
        />
        </motion.div>
        <div className='about_content'>
        <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle'
        />
        <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.circle}
            alt='profile_circle'
             className='overlay_circle2'
        />

          <h2>About <span>Us</span></h2>
          <div className='line'></div>
          <p>
          Urielsprout Limited is a vibrant and innovative 
          company committed to the goal of training and 
          developing human capital for exceptional career 
          and business results. We train individuals and 
          build organisations to achieve optimum performance
          by developing their human capacity to peak productivity 
          levels. We are committed to excellence, service & integrity.
          <br></br>
          We have carved a niche in the job creation market, business 
          start-ups and management space. Leveraging collaboration with
          individuals and organisations to drive positive impact.
          </p>

        </div>
    </div>
  )
}

export default About