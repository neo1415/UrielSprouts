import React from 'react'
import {HiMenuAlt4 , HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { useState } from 'react';

import { images } from '../../Constants';
import './NavBar.scss';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
        <a href='/#homepage' className='app__navbar-logo'>
            <img src={ images.logo } alt='logo' />
        </a>
        <ul className='app__navbar-links'>
            {
                 ['home', 'about', 'services', 'team', 'testimonial', 'contact'].map((item)=>(
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href = {`#${item}`}>{item} </a>
                    </li>
                 ))
             }
        </ul>
        
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true) } />
            {toggle && (
                <motion.div
                    whileInView={{y: [-300, 0]}}
                    transition= {{ duration:0.85, ease:'easeOut' }}
                >
                    <HiX onClick={() => setToggle(false)} />
             <ul className='app__navbar-menu-links'>
                 {['home', 'about', 'services', 'team', 'testimonial', 'contact'].map((item)=>(
                   
                   <li key={{item}}>
                        <a href = {`#${item}`} onClick={() => setToggle(false)}>{item} </a>
                    </li>
                    ))
                 }
             </ul> 

                </motion.div>    
            )}
        </div>
    </nav>
  )
}

export default NavBar