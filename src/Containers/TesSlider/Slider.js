import React, {useState, useEffect} from 'react'
import './slide.scss'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Components/firebaseConfig";


const Slider = () => {

const [testimonials, setTestimonials] = useState([]);
const [index, setIndex] = useState(0);

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
    <div className='SlideSection' id='discover' >
        <div className='SectionTitle'>
            <h2 className='SliderH2'>Explore and Discover</h2>
        </div>
        <div className='SectionCenter'>
            {testimonials.map((item,sliderIndex) => {
                const {id, file, customerName, review} = item;
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
                        <h4 className='SliderH4'>{customerName}</h4>
                        <p className='SliderTitle'>{review}</p>
                        
                    </div>
                )
                
            })}
            <button className='ButtonPrev' onClick={() => setIndex(index-1)}>
                <MdChevronLeft size={30} />
            </button>
            <button className='ButtonNext' onClick={() => setIndex(index-1)}>
                <MdChevronRight size={30} />
            </button>
        </div>
    </div>
  )
}

export default Slider