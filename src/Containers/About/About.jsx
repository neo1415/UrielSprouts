import React,{useState} from 'react'
import { images } from '../../Constants'
import './About.scss';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Gallery from '../../Admin/Gallery/Gallery';
import Modal from '../../Admin/Gallery/modal';

const About = () => {

  const [selectedImg , setSelectedImg] = useState(null)

  return (
    <div className='about-section'>
   <h2 className='about-title'>
      About <span>Us</span>
    </h2>
    <div className='about_content'>
        {/* <motion.img
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
        /> */}
          <p>
          Urielsprout Limited is a vibrant and innovative 
          company committed to the goal of training and 
          developing human capital for exceptional career 
          and business results. We train individuals and 
          build organisations to achieve optimum performance
          by developing their human capacity to peak productivity 
          levels. We are committed to excellence, service & integrity.
          <br></br>
        
          </p>

        </div>
       
    
        {/* <div className='about-section'>
        <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5, delayChildren:.5}}
           className='app__header-image'
        >
       
        <img
          className="d-block w-100 images1"
src={images.basic}
          alt="One"
        />

   
        <img
          className="d-block w-100 images1"
          src={images.carousel3}
          alt="Two"
        />

     
        <img
          className="d-block w-100 images1"
          src={images.carousel4}
          alt="Two"
        />
 
        </motion.div>
        </div> */}
        {/* <motion.img
           whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle3'
        /> */}

<Gallery setSelectedImg={setSelectedImg} />
{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}

    
  
    </div>

  )
}

export default About