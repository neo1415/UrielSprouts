import React from 'react'
import { images } from '../../Constants'
import './About.scss';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    <div className='about-section'>
   <h2 className='about-title'>
      About <span>Us</span>
    </h2>
    <div className='about_content'>
        {/* <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle'
        />
        <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.circle}
            alt='profile_circle'
             className='overlay_circle2'
        /> */}
          <p>
          Urielsprout Limited is a vibrant and innovative 
          company committed to the goal of training and 
          developing human capital for exceptional career 
          and business results. We train individuals and 
          build organisations to achieve optimum performance
          by developing their human capacity to peak productivity 
          levels. We are committed to excellence, service & integrity.
          <br></br>
        
          </p>

        </div>
       
    
        {/* <div className='about-section'>
        <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5, delayChildren:.5}}
           className='app__header-image'
        >
       
        <img
          className="d-block w-100 images1"
src={images.basic}
          alt="One"
        />

   
        <img
          className="d-block w-100 images1"
          src={images.carousel3}
          alt="Two"
        />

     
        <img
          className="d-block w-100 images1"
          src={images.carousel4}
          alt="Two"
        />
 
        </motion.div>
        </div> */}
        {/* <motion.img
           whileInView={{scale:[0,1]}}
            transition={{duration:1,ease:'easeInOut'}}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle3'
        /> */}

        <div class="gallery">
	<div class="gallery__column">
		<a href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel1} alt="Portrait by Jessica Felicio" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Jessica Felicio</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@oladimeg" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel2} alt="Portrait by Oladimeji Odunsi" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@a2eorigins" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel3} alt="Portrait by Alex Perez" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Alex Perez</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@noahbuscher" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel4} alt="Portrait by Noah Buscher" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Noah Buscher</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@von_co" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel5} alt="Portrait by Ivana Cajina" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Ivana Cajina</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@samburriss" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel6} alt="Portrait by Sam Burriss" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Sam Burriss</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@marilezhava" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel7} alt="Portrait by Mari Lezhava" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Mari Lezhava</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@ethanhaddox" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel8} alt="Portrait by Ethan Haddox" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Ethan Haddox</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@mr_geshani" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
      <img src={images.carousel9} alt="Portrait by Amir Geshani" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Amir Geshani</figcaption>
			</figure>
		</a>
	</div>
	

</div>


    
  
    </div>

  )
}

export default About