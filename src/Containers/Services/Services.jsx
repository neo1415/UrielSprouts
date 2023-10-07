import React,{useState} from 'react'
import './Services.scss';
// import {urlFor, client} from '../../client';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


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

      <motion.div
        whileInView={{y: [100, 0], opacity: [0, 1]}}
        transition= {{ duration:1.2, ease:'easeOut' }}
       className='services ' id='services'>
          <h2 className='service-title'>
            We <span>Offer</span>
          </h2>
<div className='flex'>
<motion.div className='serviceCard'
  whileInView={{opacity: [0, 1]}}
  transition= {{ duration:1.2, ease:'easeOut' }}
>
<div class="blog-card employability spring-fever">
  <div class="title-content">
    <h3><Link to="/employability">Employability</Link></h3>
    <div class="intro"> <Link to="/employability">Emplpoyability Skills Program and Job/Internship Placements</Link> </div>
  </div>
  <div class="card-info">
  <p>
  We offer unique training that upskill and prepares graduates and
  job seekers for the world of work. Through our work readiness ... 
  </p>
   
    <Link to="/employability">Continue<span class="licon icon-arr icon-black"></span></Link>
  </div>
  <div class="utility-info">
    <ul class="utility-list">
    <li><span class="licon icon-tag"></span><Link to="/employability">Find Out More</Link></li>
    </ul>
  </div>
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
</motion.div>

<motion.div
  whileInView={{ opacity: [0, 1]}}
  transition= {{ duration:1.2, ease:'easeOut' }}
 className='serviceCard'>
<div class="blog-card business spring-fever">
  <div class="title-content">
    <h3><Link to="/business-advisory">Business Advisory</Link></h3>
    <div class="intro"> <Link to="/business-advisory">Business Management & Incubation Program</Link> </div>
  </div>
  <div class="card-info">
  <p>
  We train individuals business enthusiast on the rudiment of starting a business
  from ideation stage to going-live and also deploy advanced business management ... 
  </p>
    <Link to="/business-advisory">Continue<span class="licon icon-arr icon-black"></span></Link>
  </div>
  <div class="utility-info">
    <ul class="utility-list">

      <li><span class="licon icon-tag"></span><Link to="/business-advisory">Find Out More</Link></li>
    </ul>
  </div>
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
</motion.div>

<motion.div 
  whileInView={{ opacity: [0, 1]}}
  transition= {{ duration:1.2, ease:'easeOut' }}
className='serviceCard'>
<div class="blog-card hospitality spring-fever">
  <div class="title-content">
    <h3><Link to="/hospitality">Hospitality</Link></h3>
    <div class="intro"> <Link to="/hospitality">Hospitality Management</Link> </div>
  </div>
  <div class="card-info">
  <p>
  The Hospitality and Tourism industry is a large and complex industry
  and one that is of significant economic importance to the country... 
  </p>
    <Link to="/hospitality">Continue<span class="licon icon-arr icon-black"></span></Link>
  </div>
  <div class="utility-info">
    <ul class="utility-list">

    <li><span class="licon icon-tag"></span><Link to="/hospitality">Find Out More</Link></li> 
    </ul>
  </div>
  <div class="gradient-overlay"></div>
  <div class="color-overlay"></div>
</div>
</motion.div>

</div>




</motion.div>



  )
}

export default Services;