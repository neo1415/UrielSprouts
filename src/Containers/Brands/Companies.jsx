import React,{useState, useEffect} from 'react'
import { collection, getDocs, deleteDoc, doc, query, orderBy, onSnapshot} from "firebase/firestore";
import { db } from "../../Components/firebaseConfig";

const Companies = () => {

    const [brands, setBrands] = useState([]);

    // useEffect(()=> {
    //     const fetchData = async () =>{
    //       let list =[]
    //       try{
    //         const querySnapshot = await getDocs(collection(db,'brands'));
    //         querySnapshot.forEach((doc)=>{
    //           list.push({id: doc.id, ...doc.data()})
    //           console.log(doc.id, "=>", doc.data());
    //         })
    //         setBrands(list)
    //         console.log(list)
    //       } catch(err){
    //         console.log(err)
    //       }
    //     }
    //     fetchData()
    //   },[])
    useEffect(()=> {
      const dataRef = collection(db, 'brands')
      const q = query(dataRef, orderBy('createdAt', 'desc'));
      onSnapshot(q,(snapshot) => {
        const brands = snapshot.docs.map((doc) => ({
          id:doc.id,
          ...doc.data(),
        }))
        setBrands(brands);
       
      })
    },[])

  return (
    <div> 
    <div className="app__testimonials-brands app__flex">
      
                     {
            brands.length === 0 ? (
                <p>No Testimonials yet</p>
            ) : (
                brands.map(({id, img, company}) => (
                  
                   
                        <div className='slide-track' key={id}>
                           <div className='slide'>
                        <img src = {img} alt='imge'></img>
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