import React from 'react'
// import './Mission.scss'
import { motion } from 'framer-motion';

const Mission1 = () => {
  return (
    <div className='statement'>
        <motion.div 
         whileInView={{scale:[0,1]}}
         transition={{duration:1,ease:'easeInOut'}}
        className='mission'>
            <h2 className='mission-header'>Our <span>Mission</span></h2>
            <p className='mission-text'>
             Providing a unique experience for Entrepreneurs, organizations and job seekers, by providing the best training and developing human capital for exceptional career and business results
            </p>
        </motion.div>

        <motion.div
         whileInView={{scale:[0,1]}}
         transition={{duration:1,ease:'easeInOut'}}
         className='vision'>
            <h2 className='vision-header'>Our <span>Vision</span></h2>
            <p className='vision-text'>
            To be the number one go-to place for advanced training, capacity development content and business advisory services 
            </p>
        </motion.div>

        <motion.div
         whileInView={{scale:[0,1]}}
         transition={{duration:1,ease:'easeInOut'}}
         className='value'>
            <h2 className='value-header'>Our <span>Values</span></h2>
            <p className='value-text'>
            Employees who work at UrielSprout have INTEGRITY:
                    <ul className='value-list'>
                        <li>Innovate</li>
                        <li>Nurture</li>
                        <li>Teamwork</li>
                        <li>Excellence</li>
                        <li>Growth Mindset</li>
                        <li>Respect for the Individual</li>
                        <li>Intelligent</li>
                        <li>Tenacity</li>
                        <li>Youthful</li>
                    </ul>
            </p>
        </motion.div>
       
                    {/* -Innovate
                    -Nurture
                    -Teamwork
                    -Excellence
                    -Growth Mindset
                    -Respect for the Individual
                    -Intelligent
                    -Tenacity
                    -Youthful */}

        
    </div>
  )
}

export default Mission1