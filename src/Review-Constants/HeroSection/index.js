// import React, {useState, useEffect} from 'react'
// import './Hero.scss'
// // import {useNavigate} from 'react-router-dom'
// import {addDoc,  collection, serverTimestamp, timeStamp} from 'firebase/firestore' 
// import { doc, setDoc } from "firebase/firestore"; 
// import { auth,db, storage } from '../../Components/firebase'
// import { userInputs } from '../../formSource'
// import {createUserWithEmailAndPassword} from 'firebase/auth';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// // import { DriveFolderUploadOutlinedIcon } from '@mui/icons-material/DriveFolderUploadOutlined';





// const HeroSection = () => {
//   const [file, setFile] = useState('')
//   const [data , setData] = useState('')
//   const [per, setPerc] = useState(null)
  

//   useEffect(() => {
//     const uploadFile = (resolve, reject) =>{
//       const name= new Date().getTime() + file.name
//       const storageRef = ref(storage,file.name );

//       const uploadTask = uploadBytesResumable(storageRef, file.name);

// // Register three observers:
// // 1. 'state_changed' observer, called any time the state changes
// // 2. Error observer, called on failure
// // 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', 
//   (snapshot) => {
//     // Observe state change events such as progress, pause, and resume
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     setPerc(progress)
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//         default:
//           break;
//     }
//   }, 
//       (error) => {
//         reject(error);
//       },
//       // async () => {
//       //   try {
//       //     const url = await getDownloadURL(storageRef);
//       //     resolve(url);
//       //   } catch (error) {
//       //     reject(error);
//       //   }
//       // }
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(storageRef).then((downloadURL) => {
//       setData((prev)=>({...prev, file:downloadURL}))
//     });
//   }
// );

//     }
//       file && uploadFile();
//   }, [file]);

  
//   const handleInput =(e)=>{
//     const id = e.target.id;
//     const value = e.target.value

//     setData({...data,[id]: value});
//   }
//   console.log(data)
//   const handleAdd= async(e) => {
//     e.preventDefault()
//     try{
//       const res=await createUserWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       )
//       await setDoc(doc(db, "users", res.user.uid), {
//         ...data,
//         timeStamp:serverTimestamp(),
//       });
//   }catch(err){
//     console.log(err)
//   }
//     };

//   return (
//     <div className='hero-container' id='Home'>
//         <div className='hero-content'>
//             <h1>Progress Made Easy</h1>
//             <p>
//             Lorem ipsum dolor sit amet. Qui dolore iste et so
//             luta atque et explicabo nihil non doloribus
//              ducimus est ducimus itaque.  
//             </p>
//             <div className="bottom">
//           <div className="left">
//             <file
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//           </div>
//           <div className="right">
//             <form onSubmit={handleAdd}>
//               <div className="formInput">
//                 <label htmlFor="file">
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   // style={{ display: "none" }}
//                 />
//               </div>

//               {userInputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label>{input.label}</label>
//                   <input
//                     id={input.id}
//                     type={input.type}
//                     placeholder={input.placeholder}
//                     onChange={handleInput}
//                   />
//                 </div>
//               ))}
//               <button disabled={per !== null && per < 100} type="submit">
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>


//             {/* <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//             </div>
//                  */}
//             {/* <form onSubmit={handleAdd}>
//             {userInputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label>{input.label}</label>
//                   <input
//                     id={input.id}
//                     type={input.type}
//                     placeholder={input.placeholder}
//                     onChange={handleInput}
//                   />
//                 </div>
//               ))}
 
//               <div className="formInput">
//                 <label htmlFor="file">
//                  File Upload
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   // style={{ display: "none" }}
//                 />
//               </div>
//             <button type='submit' className='submit' disabled={per !== null && per <100} >Upload File</button>

//             </form> */}

//               {/* {FileList.map((url)=>{
//                 return<img src={url} />
//               })} */}
          
//         </div>
//         <div className='Curve'></div>
//            </div>
//   )
// }

// export default HeroSection