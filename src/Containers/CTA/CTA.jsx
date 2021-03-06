import React from 'react'
import './CTA.scss'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='review'>
        <div className='review__container'>
            <h2 className='cta'>Are You Job Ready?</h2>
            <h3 className='ctaTitle'>We Will Provide You With a Thourough CV/Resume Review that will Guarantee A Job Placement In your Next Application </h3>
            <Link to='/review'>
            <div className="buttons cta">
  <div className="buttons__text">Learn more...</div>
   <div className="buttons__wrapper">
    <div className="buttons__arrow"></div>
    <div className="buttons__border-circle"></div>
    <div className="buttons__mask-circle">
      <div className="buttons__small-circle"></div>
    </div>
  </div>
</div>
            </Link>
        </div>
    </div>
  )
}

export default CTA