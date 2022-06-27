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
            <div className="button cta">
  <div className="button__text">Learn more...</div>
   <div className="button__wrapper">
    <div className="button__arrow"></div>
    <div className="button__border-circle"></div>
    <div className="button__mask-circle">
      <div className="button__small-circle"></div>
    </div>
  </div>
</div>
            </Link>
        </div>
    </div>
  )
}

export default CTA