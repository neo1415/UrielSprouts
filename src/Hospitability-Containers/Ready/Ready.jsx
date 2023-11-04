import React from 'react'
import './Ready.scss'
import { images } from '../../Constants'
import { motion } from 'framer-motion';
import { BsTelephone } from 'react-icons/bs';
import { BsBuilding } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { BsPuzzle } from 'react-icons/bs';

const Ready = () => {
  return (
    <motion.div className='ready'
         whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}
    >
        <h3 className='ready-title'>
         <span>Ready To Move On</span> To The Next Level ?
        </h3>

        <div className='ready-container'>
        <div className='ready-video'>
            <video autoPlay muted loop>
            <source src={images.ready} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
        <div className='ready-content'>

        <h6 className='ready-h'>Elevate with Urielsprout Hospitality</h6>

            <p className='ready-p'>
            At Urielsprout Hospitality, we are your trusted partner dedicated to elevating your hospitality establishment to new heights.
             With a mission focused on your success, we offer:
            </p>

            <ol className='ready-list'>
                <li>
                <BsBuilding className='list-icon' />
                Shape your venue into a thriving destination.
                </li>

                <li>
                <FaGraduationCap className='list-icon' />
                Leverage expertise for your enduring excellence.
                </li>

                <li>
                <BsPuzzle className='list-icon' />
                Customized solutions for your own success story.
                </li>
            </ol>
            <div className='ready-button-con'>
            <a href='mailto:urielsproutlimited@gmail.com' className='uriel' >
                <button className='ready-button'>
                <BsTelephone className='ready-icon' />
                    Contact Us Today
                </button>
            </a>
            </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Ready