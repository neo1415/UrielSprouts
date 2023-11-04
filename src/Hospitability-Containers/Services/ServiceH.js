import React from 'react'
import { images } from '../../Constants'
import './ServiceH.scss'
import { motion } from 'framer-motion';

const ServiceH = () => {


  return (
      <motion.div className='h-services'
       whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}>
        <div className='service-title'>
            <h5 className='service-h'>
                <span>What We Bring</span> To The Table
            </h5>
        </div>
        <div className='serviceContainer'>
            <motion.div className='first-service'
             whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}
            >

                <div className='first-image'>
                <div className='service3-image'>
                <img src={images.service1} className='service3' alt='service3' />
                </div>
                <div className='service2-circle'>
                </div>
                </div>
                <div className='first-content'>
                    <h6>Consulting Services</h6>
                    <h4 className='service-h4'>Unlocking the Potential of Your Establishment</h4>
                    <p className='service-p'>
                    Our seasoned hospitality consultants are here to help you navigate
                     the complex and ever-evolving world of hospitality. From small boutique
                      hotels to large resorts and restaurants, we provide tailored solutions to optimize your operations,
                     increase profitability, and enhance guest satisfaction.
                     </p>
                     <div className='service-button-con'>
                        <button className='service-button'>Get In Touch</button>
                    </div>
                </div>
            </motion.div>

            <motion.div className='second-service'
                  whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}
            >
            <div className='second-image'>
                <div className='service3-image'>
                <img src={images.service2} className='service2' alt='service3' />
                </div>
                <div className='service-circle'>
                </div>
                </div>
                <div className='second-content'>
                    <h6>Recruitment of Hospitality Staff</h6>
                    <h4 className='service-h4'>Connecting Talent with Opportunity</h4>
                    <p className='service-p'>
                    Building a dedicated and skilled team is crucial for delivering exceptional guest experiences.
                    Urielsprout Hospitality specializes in sourcing and placing talented individuals who are passionate
                    about the hospitality industry. Our recruitment experts work tirelessly to match the right candidates 
                    with the right positions within your organization.
                     </p>
                     <div className='service-button-con'>
                <button className='service-button'>Get In Touch</button>
                </div>
                </div>
            </motion.div>

            <motion.div className='first-service'
             whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}>

            <div className='first-image'>
            <div className='service3-image'>
            <img src={images.service3} className='service3' alt='service3' />
            </div>
            <div className='service2-circle'>
            </div>
            </div>
            <div className='first-content'>
                <h6>Capacity Development for Hotel Staff</h6>
                <h4 className='service-h4'>Investing in Your Team's Growth</h4>
                <p className='service-p'>
                A well-trained staff is the backbone of any successful hospitality business. 
                Urielsprout Hospitality offers comprehensive training programs tailored to the
                unique needs of your hotel or restaurant. Whether you're looking to improve guest service,\
                boost employee morale, or enhance technical skills, our training solutions will empower your team to excel.
                </p>
                <div className='service-button-con'>
                <button className='service-button'>Get In Touch</button>
                </div>
            </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default ServiceH