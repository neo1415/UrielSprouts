import React from 'react'
import './Team.scss';
import { images } from '../../Constants';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MotionWrap, Appwrap } from '../../Wrapper';

const Team = () => {
  return (
    <div className='Team'>
      <div className='title-team'>
          <h2 className='head-text'>Meet <span>The Faculty</span></h2>
          <div className='line'></div>
      </div>
    <div className="main">
      <div className='profile'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Omole} />
          </div>
          <div className="caption">
            <h3>Olaniyi Omole</h3>
            <p>CEO/Founder</p>
            <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        </div>
        </div>
        <div className='mobile-caption'>
        <h3>Olaniyi Omole</h3>
        <p>CEO/Founder</p>
        </div>
      </div>
      <div className='profile'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Ehosa} />
          </div>
          <div className="caption">
            <h3>Ehiosa Ugiagbe</h3>
            <p>Executive</p>
            <div className="social-links">
        <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        </div>
        </div>
        <div className="mobile-caption">
            <h3>Ehiosa Ugiagbe</h3>
            <p>Executive</p>
        </div>
      </div>

      <div className='profile third'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Babatunde} />
          </div>
          <div className="caption">
          <h3>Babatunde Oladipupo</h3>
            <p>Executive</p>
            <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
        </div>
        <div className="mobile-caption">
          <h3>Babatunde Oladipupo</h3>
            <p>Executive</p>
        </div>
      </div>

      <div className='profile fourth'>
        <div className="profile-card">
          <div className="img">
            <img src={images.Aderonke} />
          </div>
          <div className="caption">
            <h3>Aderonke Omole</h3>
            <p>Executive</p>
            <div className="social-links">
        <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        </div>
        </div>
        <div className="mobile-caption">
            <h3>Aderonke Omole</h3>
            <p>Executive</p>
        </div>
      </div>

      <div className='profile fifth'>
        <div className="profile-card">
          <div className="img">
            <img src={images.Iyoha} />
          </div>
          <div className="caption">
            <h3>John Iyoha</h3>
            <p>Executive</p>
            <div className="social-links">
        <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        </div>
        </div>
        <div className="mobile-caption">
            <h3>John Iyoha</h3>
            <p>Executive</p>
        </div>
      </div>
      
      <div className='profile sixth'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Oksodo} />
          </div>
          <div className="caption">
            <h3>Marvel Okosodo</h3>
            <p>Executive</p>
            <div className="social-links">
        <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        </div>
        </div>
        <div className="mobile-caption">
            <h3>Marvel Okosodo</h3>
            <p>Executive</p>
        </div>
      </div>

      <div className='profile seventh'>
                <div className="profile-card">
          <div className="img">
            <img src={images.Adeola} />
          </div>
          <div className="caption">
            <h3>Adeola Makinwa</h3>
            <p>Executive</p>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
           </div>
           </div>
                  </div>
                  <div className="mobile-caption">
            <h3>Adeola Makinwa</h3>
            <p>Executive</p>
      </div>
      </div>

      <div className='profile eighth'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Uselumese} />
          </div>
          <div className="caption">
            <h3>Oselumese Olumese</h3>
            <p>Executive</p>
                    <div className="social-links">
        <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        </div>
        </div>
        <div className="mobile-caption">
            <h3>Oselumese Olumese</h3>
            <p>Executive</p>
        </div>
      </div>
    </div>

</div>
  )
}

export default Team