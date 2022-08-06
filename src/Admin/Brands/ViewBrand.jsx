import React,{useEffect, useState} from 'react'
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db, storage } from '../../Components/firebaseConfig';
import { deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { Params } from 'react-router-dom';
import { deleteObject,ref } from 'firebase/storage';

const ViewBrand = () => {

    const [data, setData] = useState([])

    useEffect(()=> {
        const fetchData = async () =>{
          let list =[]
          try{
            const querySnapshot = await getDocs(collection(db,'brands'));
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

      const handleDelete = async (id,data) => {
        try {
          await deleteDoc(doc(db, "brands", id));
          // setData(data.filter((item) => item.id !== id));
          const storageRef = ref(storage,data )
          await deleteObject(storageRef)
        } catch (err) {
          console.log(err);
        }
      };

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
                                <button  onClick={handleDelete}>delete</button>
                            </div>
    
                        </div>
                    </div>
                ))
            )
        }
        </div>
    
      )

}

export default ViewBrand