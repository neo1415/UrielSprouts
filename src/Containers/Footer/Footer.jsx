import React, { useState } from 'react'
import { images } from '../../Constants'
import { Appwrap, MotionWrap } from '../../Wrapper';
import { serverTimestamp} from 'firebase/firestore' 
import { db } from '../../Components/firebase'
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore"; 
import './Footer.scss';
import { Inputs } from './contactform';

const Footer = () => {

  const [data, setData] = useState({name: '', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

   const handleInput =(e)=>{
    const id = e.target.id;
    const value = e.target.value

    setData({...data,[id]: value});
  }
  console.log(data)
  const handleAdd= async(e) => {
    e.preventDefault()
    setLoading(false);
    setIsFormSubmitted(true)
    try{
      await setDoc(doc(db, "contactForm", uuidv4()), {
        ...data,
        timeStamp:serverTimestamp(),
      });
  }catch(err){
    console.log(err)
  }
    };

  return (
    <>
      <h2 className='head-text' id='contact'> <span>CHAT</span> WITH US</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:adneo502@gmail.com' className='p-text'>urielsproutlimited@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+234 706 946 9050' className='p-text'>+234 808 493 0984</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+234 706 946 9050' className='p-text'>59, I.C.E Road, off Wire Road Benin City, Edo State</a>
        </div>
      </div>


    {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
      {Inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    className={input.className}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}  
        <button type='button' className='p-text' onClick={handleAdd}>{loading ? 'Sending' : 'Send Message'}</button>
        
      </div>
      :<div>
        <h3 className='head-text'>Thank you for getting in Touch</h3>
      </div>
    } 
    </>
  )
  
}


export default Appwrap(
  MotionWrap(Footer, 'app__footer'),
   'Contact',
   'app__whitebg' 
   );