import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Appwrap, MotionWrap } from '../../Wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Components/firebaseConfig";
import { query } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import Companies from '../Brands/Companies';
import { BsPeople } from 'react-icons/bs';

const Testimonial = () => {

  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  // const handleClick = (index) => {
  //   setCurrentIndex(index);
  // };

  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]';
  //   const brandsQuery = '*[_type == "brands"]';

  //   client.fetch(query).then((data) => {
  //     setTestimonials(data);
  //   });

  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   const testRef = collection(db, 'users');
  //   const q= query(testRef, orderBy('createdAt', 'desc'));
  //   onSnapshot(q, (snapshot) => {
  //     const reviews = snapshot.docs.map((doc) =>({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setTestimonials(reviews);
  //     console.log(reviews)
  //   });
  // }, []);
  useEffect(() => {
    const lastIndex = testimonials.length -1;
    index < 0 && setIndex(lastIndex) 
    index > lastIndex && setIndex(0)
}, [index, testimonials]);

useEffect(() => {
    let slider = setInterval(() =>{
        setIndex(index + 1)
    }, 5000);
    return () => {
        clearInterval(slider)
    };
}, [index]);

  useEffect(()=> {
    const fetchData = async () =>{
      let list =[]
      try{
        const querySnapshot = await getDocs(collection(db,'testimonials'));
        querySnapshot.forEach((doc)=>{
          list.push({id: doc.id, ...doc.data()})
          console.log(doc.id, "=>", doc.data());
        })
        setTestimonials(list)
        console.log(list)
      } catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])

  return (
    <>
      <div className='title' id='testimonials'>
          <h2 className='testimonials-title'>What Our <span>Customers Say</span></h2>
      </div>
      <div className='SlideSection' id='discover' >
        <div className='SectionCenter'>
            {testimonials.map((item,sliderIndex) => {
                const {id, file, customerName, review, company} = item;
                let position = 'next-slide';
                if(sliderIndex === index){
                    position = 'active-slide'
                }
                if(testimonials === index - 1 || (index === 0 && testimonials === testimonials.length - 1)
                ){
                    position='last-slide';
                }
                return(
                    <div id='SectionArticle' className={position} key={id}>
                        <img className='SliderImage' src={file} alt ={file.name} />
                        <div className='content'>
                        <p className='SliderTitle'>{review}</p>
                        <h4 className='SliderH4'>{customerName}</h4>
                        <h4 className='SliderH4 company'>{company}</h4>
                        </div>
                    </div>
                )
                
            })}

        </div>
                    <button className='ButtonPrev' onClick={() => setIndex(index-1)}>
                <MdChevronLeft size={30} />
            </button>
            <button className='ButtonNext' onClick={() => setIndex(index-1)}>
                <MdChevronRight size={30} />
            </button>
    </div>

    
     
                     
        <Companies />

    </>
  );
};
<footer>
  <p></p>
</footer>

export default Appwrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);

