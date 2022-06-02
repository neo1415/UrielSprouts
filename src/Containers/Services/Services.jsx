import React from 'react'
import './Services.scss';
import { motion } from 'framer-motion';
import { images } from '../../Constants';
import { Appwrap } from '../../Wrapper';

const Services = () => {
  return (
    <div className='services app__flex' >
         <motion.img
                whileInView={{scale:[0,1]}}
                transition={{duration:1,ease:'easeInOut'}}
                src={images.circle}
                alt='profile_circle'
                className='overlay_circle1'
        />
                                <motion.img
                whileInView={{scale:[0,1]}}
                transition={{duration:1,ease:'easeInOut'}}
                src={images.circle}
                alt='profile_circle'
                className='overlay_circle2'
        />
                                <motion.img
                whileInView={{scale:[0,1]}}
                transition={{duration:1,ease:'easeInOut'}}
                src={images.circle}
                alt='profile_circle'
                className='overlay_circle3'
        />
          <h2>We <span>Deliver</span></h2>
          <div className='line'></div>
        <div className='grid-services'>  
          <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.2}}
              transition={{duration:.5, type: 'tween'}}
           className='management'>
            <p>
              Business Management Consultation Services
            </p>
          </motion.div>
          <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.2}}
              transition={{duration:.5, type: 'tween'}}
 
           className='start-up'>
           <p>
              Business Start-ups Incubation
           </p> 
          </motion.div>
          <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.2}}
              transition={{duration:.5, type: 'tween'}}
           className='employ'>
            <p>
              Employability Skills program and Job/Internship Placements
            </p>
          </motion.div>
          <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.2}}
              transition={{duration:.5, type: 'tween'}}
              className='workshops'>
            <p>
              Business Clinic and Workshops
            </p>
          </motion.div>
      </div>
      <div className='offerings'>
        <div className='internships'>
          <h4><span>Employability</span> Programs & <span>Internship</span> :</h4>
          <p>
            We offer unique training that upskill and
            prepares graduates and job seekers for
            the world of work. Through our work
            readiness program, we have recorded
            increasing demands for UrielSprout
            Interns and most importantly, job placements.
          </p>

        </div>
        <div className='join'>
        <div className='video'>
            <video autoPlay loop muted src={images.video} type='video/mp4'><source src="https://mbluxury1.s3.amazonaws.com/2020/09/18141509/home-video-2020.mp4" type="video/mp4"/></video>
        </div>
        </div>

        <div class="button">
  <div class="button__text">Learn more...</div>
  
  <div class="button__wrapper">
    <div class="button__arrow"></div>
    <div class="button__border-circle"></div>
    <div class="button__mask-circle">
      <div class="button__small-circle"></div>
    </div>
  </div>
</div>
 

        <div className='business-management'>
          <h4><span>Business</span> Management & <span>Incubation</span> Program :</h4>
          <p>
          We train individuals business enthusiast on 
          the rudiment of starting a business from 
          ideation stage to going-live and also deploy
          advanced business management training for
          organisations that aspire to scale their
          businesses. We incubate business ideas and
          help accelerate through our unique business 
          support servicess.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services;