import React from 'react'
import './CTA.scss'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='review'>
        <div className='review__container'>
            <h2 className='cta'>Are You Job Ready?</h2>
            <h3>We Will Provide You With a Thourough CV/Resume Review that will Guarantee A Job Placement In your Next Application </h3>
            <Link to='/review'>
            <div class="button cta">
  <div class="button__text">Learn more...</div>
   <div class="button__wrapper">
    <div class="button__arrow"></div>
    <div class="button__border-circle"></div>
    <div class="button__mask-circle">
      <div class="button__small-circle"></div>
    </div>
  </div>
</div>
            </Link>
        </div>
    </div>
  )
}

export default CTA