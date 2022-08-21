import React,{useEffect, useState} from 'react'
import './SingleUser.scss'
import { collection, getDocs, deleteDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../Components/firebaseConfig';
import { list } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TestimonialUser = () => {

    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(
        ()=>{
            const docRef = doc(db, 'testimonials', id);
            onSnapshot(docRef, (snapshot) =>{
                setData({...snapshot.data(), id:snapshot.id});
            })
        }
    )
      

  return (
    <div className='singles'>
        <img src={data.img}  />
        <p>company name : {data.company}</p>
        <p>{data.customerName}</p>
        <p>{data.review}</p>
    </div>
    
  )
}

export default TestimonialUser