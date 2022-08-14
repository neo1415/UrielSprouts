import React, {useState, useEffect
} from 'react'
import { animateScroll as scroll } from 'react-scroll/modules';
import {FaBars} from 'react-icons/fa';
import Dropdown from '../Dropdown';
import { Link } from 'react-router-dom';
import {HiMenuAlt4 , HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import './NavBar.sass'
import { images } from '../../Constants';


const Navbar = () => {

// const [scrollNav, setScrollNav] = useState(false);


// const [dropdown, setDropdown] = useState(false);

// const [dropdowns, setDropdowns] = useState(false);


// const changeNav = () => {
//   if (window.scrollY >= 60){
//     setScrollNav(true);
//   }else{
//     setScrollNav(false);
//   }
// };

// useEffect(() => {
//   window.addEventListener('scroll', changeNav);
// },[]);

// const toggleHome = () => {
//   scroll.scrollToTop();
// }

// const onMouseEntered = () =>{
//   if(window.innerWidth < 960){
//     setDropdown(false)
//   }else{
//     setDropdown(true)
//   }
// }

// const onMouseLeaves = () =>{
//   if(window.innerWidth < 960){
//     setDropdown(false)
//   }else{
//     setDropdown(false)
//   }
// }

// const onMouseEnter = () =>{
//   if(window.innerWidth < 960){
//     setDropdowns(false)
//   }else{
//     setDropdowns(true)
//   }
// }

// const onMouseLeave = () =>{
//   if(window.innerWidth < 960){
//     setDropdowns(false)
//   }else{
//     setDropdowns(false)
//   }
// }

const [toggle, setToggle] = useState(false);


  return (
    <>
<nav className="menu">
<div className='app__navbar-logo'>
<Link to='/#homepage ' className='logo'><img src={images.logo} className='nav-logo' /> </Link>
</div>
  <ol>
    <li className="menu-item"><a href="/#homepge">Home</a></li>
    <li className="menu-item"><a href="/#about">About</a></li>
    <li className="menu-item">
    <a href="#services">Services</a>
      <ol className="sub-menu">
        <li className="menu-item"><a href='/employability' >Employability</a></li>
        <li className="menu-item"><a href="/review/#cv" >Business Advisory</a></li>
        <li className="menu-item"><a href="#0" >Hospitality</a></li>
      </ol>
    </li>
    <li className="menu-item">
      <a href="/#team">Our Team</a>
    </li>
    <li className="menu-item"><a href="/#contact">Contact</a></li>
  </ol>

  <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true) } />
            {toggle && (
                <motion.div
                    whileInView={{y: [-300, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}
                >
                    <HiX className='hix' onClick={() => setToggle(false)} />
                    <ol  className='app__navbar-menu-links'>
    <li className="menu-item"><a href="#home" onClick={() => setToggle(false)}>Home</a></li>
    <li className="menu-item"><a href="#about" onClick={() => setToggle(false)}>About</a></li>
    <li className="menu-item" >
    <details className="faq__detail drop-container">
          <summary  className="faq__summary drop"><span className="faq__question question"><p className='d-link'>Services</p></span></summary>
          <a href='/employability' className="faq__text drop-link" onClick={() => setToggle(false)}>Employability</a>
          <a href='/review/#cv' className="faq__text drop-link" onClick={() => setToggle(false)}>Business Advisory</a>
          <a href='#0' className="faq__text drop-link" onClick={() => setToggle(false)}>Hospitality</a>
        </details> 
    </li>
    <li className="menu-item" >
      <a href="#team"  onClick={() => setToggle(false)}>Team</a>
    </li>
    <li className="menu-item"><a href="#contact" onClick={() => setToggle(false)}>Contact</a></li>
  </ol>

                </motion.div>    
            )}
        </div>
</nav>
    </>
  )
}

export default Navbar