import React, {useState, useEffect} from 'react'
import data from './data';
import './Mission.scss'
import './slide.css'
import { motion } from 'framer-motion';


const Mission = () => {

const [sliderData] = useState(data);
const [index, setIndex] = useState(0);

useEffect(() => {
    const lastIndex = sliderData.length -1;
    index < 0 && setIndex(lastIndex) 
    index > lastIndex && setIndex(0)
}, [index, sliderData]);

useEffect(() => {
    let slider = setInterval(() =>{
        setIndex(index + 1)
    }, 5700);
    return () => {
        clearInterval(slider)
    };
}, [index]);

  return (
    <motion.div 
   
    className='slider-section' id='discover' >
        <div className='section-center'>
            {sliderData.map((item,sliderIndex) => {
                const {id, Title, description} = item;
                let position = 'next-slide';
                if(sliderIndex === index){
                    position = 'active-slide'
                }
                if(sliderIndex === index - 1 || (index === 0 && sliderIndex === sliderData.length - 1)
                ){
                    position='last-slide';
                }
                return(
                    <div className={position} key={id} id='section-article'>
                        <div className='slider-title'>{Title}</div>
                        <div className='slider-description'>{description}</div>
                    </div>
                )
                
            })}
        </div>
    </motion.div>
  )
}

export default Mission