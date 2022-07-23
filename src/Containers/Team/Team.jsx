import React from 'react'
import './Team.scss';
import { images } from '../../Constants';

const Team = () => {
  return (
    <div className='Team' id='team'>
      {/* <div className='titles-team'>
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

      <div className='profile'>
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

      <div className='profile '>
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

      <div className='profile'>
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
      
      <div className='profile '>
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

      <div className='profile'>
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

      <div className='profile'>
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
    </div> */}

    <div class="container">
          <div className='titles-team'>
          <h2 className='head-text'>Meet <span>The Faculty</span></h2>
          <div className='line'></div>
      </div>
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                    <img src={images.Omole} alt='member images' className='omole' />
                    </div>
                    <h3 class="titles">Olaniyi Omole.</h3>
                    <span class="post">CEO/Founder</span>
                    {/* <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
     
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                    <img src={images.Ehosa}  alt='member images' />
                    </div>
                    <h3 class="titles">Ehiosa Ugiagbe.</h3>
                    <span class="post">Executive</span>
                    {/* <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
    
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                    <img src={images.Babatunde} alt='member images' />
                    </div>
                    <h3 class="titles">Babatunde Oladipupo</h3>
                    <span class="post">Executive</span>
                    {/* <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                    <img src={images.Aderonke} alt='member images' />
                    </div>
                    <h3 class="titles">Aderonke Omole</h3>
                    <span class="post">Executive</span>
                    {/* <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fab fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                    <img src={images.Iyoha}  alt='member images' />
                    </div>
                    <h3 class="titles">John Iyoha</h3>
                    <span class="post">Executive</span>
                    {/* <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
     
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                    <img src={images.Oksodo}  alt='member images'/>
                    </div>
                    <h3 class="titles">Marvel Okosodo</h3>
                    <span class="post">Executive</span>
                    {/* <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
    
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                    <img src={images.Adeola}  alt='member images'/>
                    </div>
                    <h3 class="titles">Adeola Makinwa</h3>
                    <span class="post">Executive</span>
                    {/* <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                    <img src={images.Uselumese} alt='member images'  className='omole'/>
                    </div>
                    <h3 class="titles">Oselumese Olumese</h3>
                    <span class="post">Executive</span>
                    {/* <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fab fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>



        </div>
    </div>

</div>
  )
}

export default Team