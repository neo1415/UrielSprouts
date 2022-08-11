import React from 'react'
import './CTA.scss'
import { FaHandPointRight } from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='review'>
        <div className='review__container'>
            <h2 className='cta'>Are You Job Ready?</h2>
            <h3 className='ctaTitle'>We Will Provide You With a Thourough CV/Resume Review that will Guarantee A Job Placement In your Next Application </h3>
           <div className='CTA'></div>
            <div class="Containers">
   
   <a href='/review/#cv' class="button">Read More <div className='btn-span'><FaHandPointRight /></div> </a>
</div>
   
        </div>
    </div>
  )
}

export default CTA