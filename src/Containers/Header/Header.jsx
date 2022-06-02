import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi';
import './Header.scss';
import { motion } from 'framer-motion';
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const Header = () => {
  return (
    <div className='hero-Container app__flex ' id='home'>
        <motion.div
         whileInView={{scale:[0,1]}}
         transition={{duration:1,ease:'easeInOut'}}
         className='hero-Content'>
            <motion.h1
            initial={{x:'-100vw'}}
            animate={{x:0}}
            transition={{type:'spring', duration:2, bounce:0.1}}
            >Reach Your <br/><span>Highest Potential</span> </motion.h1>
            <motion.div
             initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'spring', duration:2, bounce:0.1}}
            className='header-text'
            >
            <p 
            data-text='...Leveraging collaboration with individuals and organisations to drive positive impact.'
            >
            ...Leveraging collaboration with individuals and organisations to drive positive impact.
            </p>
            </motion.div>
            <div className='circle'>
                <a href='#about'>Learn More</a>
                <HiArrowNarrowDown />
            </div>
          
        </motion.div>
        <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div>
         <div>
            <BsInstagram />
        </div>
    </div>
    </div>    
  )
}

export default Header;