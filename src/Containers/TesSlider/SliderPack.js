import React from 'react'
import './SliderPack.css'
import { SliderContainer, Slider, SliderCard,SliderDescription,SliderImage,SliderTitle } from './SliderPackElement'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SliderPack = (props) => {
    const slides = [
        { 
            image:require('../../Images/svg-2.svg').default,
            Title:'Manager',
            description:'Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut ',
        },
        {          
            image:require('../../Images/svg-3.svg').default,
            Title:'Manager',
            description:'Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut ',
        },
        {
            image:require('../../Images/svg-4.svg').default,
            Title:'Manager',
            description:'Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut ',
        },
        {
            image:require('../../Images/svg-5.svg').default,
            Title:'Manager',
            description:'Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut ',
        },
        {
            image:require('../../Images/svg-6.svg').default,
            Title:'Manager',
            description:'Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut ',
        },
        {
            image:require('../../Images/svg-1.svg').default,
            Title:'Manager',
            description:'Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut ',
        },
        {
            image:require('../../Images/svg-7.svg').default,
            Title:'Manager',
            description:'Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut ',
        },
        {
            image:require('../../Images/svg-8.svg').default,
            Title:'Manager',
            description:'Lorem ipsum dolor sit amet. Aut expedita illo eum provident similique aut ',
        }
    ]

    const slideLeft = () => {
        const slider = document.getElementById('slides')
        slider.scrollLeft = slider.scrollLeft + 606;
    }

    const slideRight = () => {
        const slider = document.getElementById('slides')
        slider.scrollLeft = slider.scrollLeft - 607;
    }
    
  return (
    <SliderContainer id='discover'>
            <MdChevronLeft size={40} className='slider-icon left' onClick={slideLeft} />
            <Slider id='slides'>
                {slides.map((slides,index) => {
                    return(
                            <SliderCard key={index}>
                                <SliderImage style={{backgroundImage:`url(${slides.image})`}}></SliderImage>
                                <SliderTitle>{ slides.Title }</SliderTitle>
                                <SliderDescription>{ slides.description }</SliderDescription>
                            </SliderCard>
                    )
                })}
            </Slider>
            <MdChevronRight size={40} className='slider-icon right' onClick={slideRight} />
    </SliderContainer>
  )
}

export default SliderPack