import React, {useState, useEffect} from 'react'
import data from './data';
import{ SectionCenter, SectionArticle, SliderDescription, SliderTitle } from './SliderElements';
import './slide.css'


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
    }, 7500);
    return () => {
        clearInterval(slider)
    };
}, [index]);

  return (
    <div className='slider-section' id='discover' >
        <SectionCenter>
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
                    <SectionArticle className={position} key={id}>
                        <SliderTitle>{Title}</SliderTitle>
                        <SliderDescription>{description}</SliderDescription>
                    </SectionArticle>
                )
                
            })}
            {/* <ButtonPrev onClick={() => setIndex(index-1)}>
                <MdChevronLeft size={30} />
            </ButtonPrev>
            <ButtonNext onClick={() => setIndex(index+1)}>
                <MdChevronRight size={30} />
            </ButtonNext> */}
        </SectionCenter>
    </div>
  )
}

export default Mission