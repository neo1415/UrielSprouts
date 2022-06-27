import React from 'react'
import './Team.scss';
import { images } from '../../Constants';

const Team = () => {
  return (
    <div className='Team' id='team'>
      <div className='title-team'>
          <h2 className='head-text'>Meet <span>The Faculty</span></h2>
          <div className='line'></div>
      </div>
    <div className="main">
      <div className='profile'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Omole} alt='member images' />
          </div>
          <div className="caption">
            <h3>Olaniyi Omole</h3>
            <p>CEO/Founder</p>
        </div>
        </div>
      </div>
      <div className='profile'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Ehosa}  alt='member images' />
          </div>
          <div className="caption">
            <h3>Ehiosa Ugiagbe</h3>
            <p>Executive</p>
        </div>
        </div>
      </div>

      <div className='profile third'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Babatunde} alt='member images' />
          </div>
          <div className="caption">
          <h3>Babatunde Oladipupo</h3>
            <p>Executive</p>
        
        </div>
        </div>
      </div>

      <div className='profile fourth'>
        <div className="profile-card">
          <div className="img">
            <img src={images.Aderonke} alt='member images' />
          </div>
          <div className="caption">
            <h3>Aderonke Omole</h3>
            <p>Executive</p>
        </div>
        </div>
      </div>

      <div className='profile fifth'>
        <div className="profile-card">
          <div className="img">
            <img src={images.Iyoha}  alt='member images' />
          </div>
          <div className="caption">
            <h3>John Iyoha</h3>
            <p>Executive</p>
        </div>
        </div>
      </div>
      
      <div className='profile sixth'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Oksodo}  alt='member images'/>
          </div>
          <div className="caption">
            <h3>Marvel Okosodo</h3>
            <p>Executive</p>
        </div>
        </div>
      </div>

      <div className='profile seventh'>
                <div className="profile-card">
          <div className="img">
            <img src={images.Adeola}  alt='member images'/>
          </div>
          <div className="caption">
            <h3>Adeola Makinwa</h3>
            <p>Executive</p>
           </div>
                  </div>
      </div>

      <div className='profile eighth'>
      <div className="profile-card">
          <div className="img">
            <img src={images.Uselumese} alt='member images' />
          </div>
          <div className="caption">
            <h3>Oselumese Olumese</h3>
            <p>Executive</p>
                 </div>
        </div>
      </div>
    </div>

</div>
  )
}

export default Team