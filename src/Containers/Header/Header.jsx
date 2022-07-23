import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { images } from '../../Constants';
import './Header.scss'
import { HiArrowNarrowDown } from 'react-icons/hi';
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Header = () => {
  const arrow= {
    fontSize:20
  }
  return (
    <div id='home' className='carousel'>
    <Carousel>
      <Carousel.Item interval={7500} className='image'>
        <img
          className="d-block w-100 images"
src={images.Hero1}
          alt="One"
        />
        <Carousel.Caption>
        <div
         className='hero-Contents'>
            <h1 className='hero-h'
            >Reach Your <br/><span className='span'>Highest Potential</span> </h1>
            <div
            className='header-p'
            >
            <p className='head-p'> Leveraging collaboration with individuals and organisations to drive positive impact.</p>
            </div>
            <div className='Circle'>
                <Link to ='#about' className='about-link'>Learn More</Link>
                <HiArrowNarrowDown  style={arrow}/>
            </div>
          
        </div>
        <div className='app__social'>
        <div>
        <a href='www.twitter.com'>
            <BsTwitter />
        </a>
        </div>
        <div>
        <a href='www.facebook.com'>
            <FaFacebookF />
        </a>
        </div>
         <div>
         <a href='www.instagram.com'>
            <BsInstagram />
         </a>
        </div>
    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7500} className='image'>
        <img
          className="d-block w-100 images"
          src={images.Hero2}
          alt="Two"
        />
        <Carousel.Caption>
        <div
         className='hero-Contents'>
            <h1 className='hero-h'
            >Reach Your <br/><span className='span'>Highest Potential</span> </h1>
            <div
            className='header-p'
            >
        <p className='head-p'> Leveraging collaboration with individuals and organisations to drive positive impact.</p>
            </div>
            <div className='Circle'>
                <a href='#about' className='about-link'>Learn More</a>
                <HiArrowNarrowDown  style={arrow}/>
            </div>
          
        </div>
        <div className='app__social'>
        <div>
        <a href='www.twitter.com'>
            <BsTwitter />
        </a>
        </div>
        <div>
        <a href='www.facebook.com'>
            <FaFacebookF />
        </a>
        </div>
         <div>
         <a href='www.instagram.com'>
            <BsInstagram />
         </a>
        </div>
    </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
)
  
}

export default Header