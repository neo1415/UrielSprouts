import React from 'react'
import './Trust.scss'
import { images } from '../../Constants'
import { FaAward } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Trust = () => {
  return (
    <motion.div className='trust'
         whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}
    >
    <div className='why-con'>
    <h3 className='why'>
    Why Choose <span>Urielsprout Hospitality?</span>
    </h3>
    </div>
    <div className='trust-container'>
    <div className='trust-image'>
    <img src={images.trust} className='trust-img' alt='trust' />
</div>
<motion.div className='trust-content'
      whileInView={{x: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}
>
<div className='content1'>
<div className='trust1'>
        <FaAward className='trust-icon'  />
        <h6 className='trust-title'>
        Expertise
        </h6>

        <p className='trust-p'>
        Our team comprises industry experts with
         a deep understanding of the hospitality sector
        </p>
    </div>

    <div className='trust1'>
    <FaAward className='trust-icon'  />
    <h6 className='trust-title'>
    Custom Solutions
        </h6>

        <p className='trust-p'>
        We tailor our services to meet 
        your specific needs and goals.
        </p>
    </div>
</div>

<div className='content2'>
<div className='trust1'>
<FaAward className='trust-icon'  />
        <h6 className='trust-title'>
        Results-Driven
        </h6>

        <p className='trust-p'>
        We focus on delivering measurable results that 
        positively impact your bottom line.
        </p>
    </div>

    <div className='trust1'>
    <FaAward className='trust-icon' />
    <h6 className='trust-title'>
    Dedication 
        </h6>
        <p className='trust-p'>
        We are passionate about the success of our clients
         and go the extra mile to achieve it.
        </p>
    </div>
</div>

</motion.div>

    </div>
       </motion.div>
  )
}

export default Trust