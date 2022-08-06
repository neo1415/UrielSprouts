import React,{useState, useEffect} from 'react'
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Components/firebaseConfig";

const Companies = () => {

    const [brands, setBrands] = useState([]);

    useEffect(()=> {
        const fetchData = async () =>{
          let list =[]
          try{
            const querySnapshot = await getDocs(collection(db,'brands'));
            querySnapshot.forEach((doc)=>{
              list.push({id: doc.id, ...doc.data()})
              console.log(doc.id, "=>", doc.data());
            })
            setBrands(list)
            console.log(list)
          } catch(err){
            console.log(err)
          }
        }
        fetchData()
      },[])

  return (
    <div> 
    <div className="app__testimonials-brands app__flex">
      
                     {
            brands.length === 0 ? (
                <p>No Testimonials yet</p>
            ) : (
                brands.map(({id, file, company}) => (
                  
                   
                        <div className='slide-track' key={id}>
                           <div className='slide'>
                        <img src = {file} alt='imge'></img>
                        </div>
                        </div>

                ))
            )
        }
        </div>
        </div>
  )
}

export default Companies