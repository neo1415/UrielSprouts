import React,{useState} from 'react'
import './Services.scss';
// import {urlFor, client} from '../../client';
import { motion } from 'framer-motion';


const Services = () => {
    // const [isActive, setActive] = useState(false)
    // const [isActive2, setActive2] = useState(false)
    // const [isActive3, setActive3] = useState(false)

    // const handleMouseEnter = () => {
    //   setActive(!isActive);
    // };
    // const handleMouseLeave = () => {
    //   setActive(!isActive);
    // };

    // const handleMouseEnter2 = () => {
    //   setActive2(!isActive2);
    // };
    // const handleMouseLeave2 = () => {
    //   setActive2(!isActive2);
    // };
    // const handleMouseEnter3 = () => {
    //   setActive3(!isActive3);
    // };
    // const handleMouseLeave3 = () => {
    //   setActive3(!isActive3);
    // };
  
  return (

      <div className='services ' id='services'>
          <h2 className='service-title'>
            We <span>Offer</span>
          </h2>
<div className='flex'>
<div className='serviceCard'>
<div class="blog-card employability spring-fever">
  <div class="title-content">
    <h3><a href="/employability">Employability</a></h3>
    <div class="intro"> <a href="/employability">Emplpoyability Skills Program and Job/Internship Placements</a> </div>
  </div>
  <div class="card-info">
  <p>
  We offer unique training that upskill and prepares graduates and
  job seekers for the world of work. Through our work readiness ... 
  </p>
   
    <a href="/employability">Continue<span class="licon icon-arr icon-black"></span></a>
  </div>
  <div class="utility-info">
    <ul class="utility-list">
    <li><span class="licon icon-tag"></span><a href="https://urielsproutslimited.netlify.app/">Find Out More</a></li>
    </ul>
  </div>
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
</div>

<div className='serviceCard'>
<div class="blog-card business spring-fever">
  <div class="title-content">
    <h3><a href="/review/#cv">Business Advisory</a></h3>
    <div class="intro"> <a href="/review/#cv">Business Management & Incubation Program</a> </div>
  </div>
  <div class="card-info">
  <p>
  We train individuals business enthusiast on the rudiment of starting a business
  from ideation stage to going-live and also deploy advanced business management ... 
  </p>
    <a href="/review/#cv">Continue<span class="licon icon-arr icon-black"></span></a>
  </div>
  <div class="utility-info">
    <ul class="utility-list">

      <li><span class="licon icon-tag"></span><a href="http://localhost:3000/review/#cv">Find Out More</a></li>
    </ul>
  </div>
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
</div>

<div className='serviceCard'>
<div class="blog-card hospitality spring-fever">
  <div class="title-content">
    <h3><a href="#">Hospitality</a></h3>
    <div class="intro"> <a href="#">Hospitality Management</a> </div>
  </div>
  <div class="card-info">
  <p>
  The Hospitality and Tourism industry is a large and complex industry
  and one that is of significant economic importance to the country... 
  </p>
    <a href="#">Continue<span class="licon icon-arr icon-black"></span></a>
  </div>
  <div class="utility-info">
    <ul class="utility-list">

    <li><span class="licon icon-tag"></span><a href="#">Find Out More</a></li> 
    </ul>
  </div>
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
</div>

</div>




</div>



  )
}

export default Services;