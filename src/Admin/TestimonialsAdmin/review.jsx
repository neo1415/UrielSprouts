import React,{useEffect, useState} from 'react'
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../Components/firebaseConfig';
import { orderBy } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import './review.scss'

const Reviews = () => {
    // const [testimonials, setTestimonials] = useState([]);
    const [data, setData] = useState([])

    useEffect(()=> {
        const fetchData = async () =>{
          let list =[]
          try{
            const querySnapshot = await getDocs(collection(db,'testimonials'));
            querySnapshot.forEach((doc)=>{
              list.push({id: doc.id, ...doc.data()})
              console.log(doc.id, "=>", doc.data());
            })
            setData(list)
            console.log(list)
          } catch(err){
            console.log(err)
          }
        }
        fetchData()
      },[])
    // useEffect(() => {
    //     const testRef = collection(db, 'testimonials');
    //     const q= query(testRef, orderBy('createdAt', 'desc'));
    //     onSnapshot(q, (snapshot) => {
    //       const test = snapshot.docs.map((doc) =>({
    //         id: doc.id,
    //         ...doc.data(),
    //       }));
    //       setTestimonials(test);
    //       console.log(test)
    //     });
    //   }, []);
    


  return (
    
    <div>
        {
        data.length === 0 ? (
            <p>No Testimonials yet</p>
        ) : (
            data.map(({id, customerName, file, review, company}) => (
                <div className="app__testimonial-item app__flex" key={id}>
                <img src = {file} alt='imge'></img>
                    <div className='app__testimonial-content'>
                        <div>
                           <p className='p-text'>{review}</p>
                        </div>
                        <div>
                        <h4 className='bold-text'>{customerName}</h4>
                            <h5>{company}</h5>
                        </div>

                    </div>
                </div>
            ))
        )
    }
    </div>

  )
}

export default Reviews