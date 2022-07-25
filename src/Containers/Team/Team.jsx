import React from 'react'
import './Team.scss';
import { images } from '../../Constants';

const Team = () => {
  return (
    <div className='Team' id='team'>
    <div className="container">
          <div className='titles-team'>
          <h2 className='head-text'>Meet <span>The Faculty</span></h2>
          <div className='line'></div>
      </div>
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="our-team">
                    <div className="pic">
                    <img src={images.Omole} alt='member images' classNameName='omole' />
                    </div>
                    <h3 className="titles">Olaniyi Omole.</h3>
                    <span className="post">CEO/Founder</span>
                    {/* <ul className="social">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
     
            <div className="col-md-3 col-sm-6">
                <div className="our-team">
                    <div className="pic">
                    <img src={images.Ehosa}  alt='member images' />
                    </div>
                    <h3 className="titles">Ehiosa Ugiagbe.</h3>
                    <span className="post">Executive</span>
                    {/* <ul className="social">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
    
            <div className="col-md-3 col-sm-6">
                <div className="our-team">
                    <div className="pic">
                    <img src={images.Babatunde} alt='member images' />
                    </div>
                    <h3 className="titles">Babatunde Oladipupo</h3>
                    <span className="post">Executive</span>
                    {/* <ul className="social">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="our-team">
                    <div className="pic">
                    <img src={images.Aderonke} alt='member images' />
                    </div>
                    <h3 className="titles">Aderonke Omole</h3>
                    <span className="post">Executive</span>
                    {/* <ul className="social">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fab fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="our-team">
                    <div className="pic">
                    <img src={images.Iyoha}  alt='member images' />
                    </div>
                    <h3 className="titles">John Iyoha</h3>
                    <span className="post">Executive</span>
                    {/* <ul className="social">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
     
            <div className="col-md-3 col-sm-6">
                <div className="our-team">
                    <div className="pic">
                    <img src={images.Oksodo}  alt='member images'/>
                    </div>
                    <h3 className="titles">Marvel Okosodo</h3>
                    <span className="post">Executive</span>
                    {/* <ul className="social">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
    
            <div className="col-md-3 col-sm-6">
                <div className="our-team">
                    <div className="pic">
                    <img src={images.Adeola}  alt='member images'/>
                    </div>
                    <h3 className="titles">Adeola Makinwa</h3>
                    <span className="post">Executive</span>
                    {/* <ul className="social">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="our-team">
                    <div className="pic">
                    <img src={images.Uselumese} alt='member images'  classNameName='omole'/>
                    </div>
                    <h3 className="titles">Oselumese Olumese</h3>
                    <span className="post">Executive</span>
                    {/* <ul className="social">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google-plus"></a></li>
                        <li><a href="#" className="fab fa-linkedin"></a></li>
                    </ul> */}
                </div>
            </div>



        </div>
    </div>

</div>
  )
}

export default Team