import React,{useState, useEffect} from 'react'
import './Services.scss';
import { images } from '../../Constants';
import { motion } from 'framer-motion';
// import {urlFor, client} from '../../client';


const Services = () => {
    const [isActive, setActive] = useState(false)
    const [isActive2, setActive2] = useState(false)
    const [isActive3, setActive3] = useState(false)

    const handleMouseEnter = () => {
      setActive(!isActive);
    };
    const handleMouseLeave = () => {
      setActive(!isActive);
    };

    const handleMouseEnter2 = () => {
      setActive2(!isActive2);
    };
    const handleMouseLeave2 = () => {
      setActive2(!isActive2);
    };
    const handleMouseEnter3 = () => {
      setActive3(!isActive3);
    };
    const handleMouseLeave3 = () => {
      setActive3(!isActive3);
    };
  
  return (
  <>
      <div className='services ' id='services'>
          <h2 className='service-title'>
            We <span>Offer</span>
          </h2>
          <div className='card-container'>
                <div className='card ' onMouseEnter={handleMouseEnter}
                                      onMouseLeave={handleMouseLeave}
                >
                <div 
                className={`card__inner ${isActive ? 'is-flipped':''}`} 
>
                  <div className='card__face card__face--front employ'>
                    
                    <h2>Employability Programs</h2>
                  </div>
                      <div className='card__face card__face--back'>
                    <div className='card__content'>
                      <div className='employ__header'>
                        {/* <img src={images.Employ} alt='employment card' className='employ__image'/> */}
                      </div>
                      <div className='card__body'>
                      <h3>Emplpoyability Skills Program and Job/Internship Placements</h3>
                        <p>We offer unique training that upskill and prepares graduates and
                         job seekers for the world of work. Through our work readiness 
                         program, we have recorded increasing demands for UrielSprout Interns
                        and most importantly, job placements. </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

                <div className='card' onMouseEnter={handleMouseEnter2}
                                      onMouseLeave={handleMouseLeave2}
                >
                <div 
                className={`card__inner ${isActive2 ? 'is-flipped':''}`} 
>
                  <div className='card__face card__face--front business'>
                    <h2>Business Advisory</h2>
                  </div>
                      <div className='card__face card__face--back'>
                    <div className='card__content'>
                      <div className='business__header'>
                        {/* <img src={images.business} alt='business'  className='business__image'/> */}
                      </div>
                      <div className='card__body'>
                      <h3>Business Management & Incubation Program </h3>
                        <p>We train individuals business enthusiast on the rudiment of starting a business
                         from ideation stage to going-live and also deploy advanced business management 
                         training for organisations that aspire to scale their businesses. We incubate business
                          ideas and help accelerate through our unique business support servicess.</p>
.                      </div>
                    </div>
                  </div>
                </div>
                </div>

                <div className='card'  onMouseEnter={handleMouseEnter3}
                                      onMouseLeave={handleMouseLeave3}
                >
                <div 
                className={`card__inner ${isActive3 ? 'is-flipped':''}`} 
>
                  <div className='card__face card__face--front hospitality'>
                    <h2>Hospitality Management</h2>
                  </div>
                      <div className='card__face card__face--back'>
                    <div className='card__content'>
                      <div className='hospitality__header'>
                        {/* <img src={images.Employ} alt='Hospitality image' className='hospitality__image' /> */}
                      </div>
                      <div className='card__body'>
                      <h3>Hospitality Management</h3>
                        <p>The Hospitality and Tourism industry is a large and complex industry
                        and one that is of significant economic importance to the country. At UrielSprouts,
                        We pride in our hospitality management interventions,we would sit with you to identify
                        your manpower training needs, Identify potential growth that ensures robust return on 
                        investment, Employee satisfaction that will improve employee performance with a higher
                        customer satisfaction </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>

  </>

  )
}

export default Services;