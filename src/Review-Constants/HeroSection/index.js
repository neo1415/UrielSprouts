import React, {useState, useEffect} from 'react'
import './Hero.scss'
// import {useNavigate} from 'react-router-dom'
import {addDoc,  collection, serverTimestamp, timeStamp} from 'firebase/firestore' 
import { doc, setDoc } from "firebase/firestore"; 
import { auth,db, storage } from '../../Components/firebase'
import { userInputs } from '../../formSource'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { BsCloudUpload } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';




const HeroSection = () => {
  const [file, setFile] = useState('')
  const [data , setData] = useState('')
  const [per, setPerc] = useState(null)
  
const navigate = useNavigate()

  useEffect(() => {
    const uploadFile = () =>{
      const name= new Date().getTime() + file.name
      const storageRef = ref(storage,file.name );

      const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPerc(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
          break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(storageRef).then((downloadURL) => {
      setData((prev)=>({...prev, file:downloadURL}))
    });
  }
);

    }
      file && uploadFile();
  }, [file]);
  
  const handleInput =(e)=>{
    const id = e.target.id;
    const value = e.target.value

    setData({...data,[id]: value});
  }
  console.log(data)
  const handleAdd= async(e) => {
    e.preventDefault()
    navigate('/checkout')
    try{
      // const res=await createUserWithEmailAndPassword(
      //   auth,
      //   data.email,
      //   data.password
      // )
      await setDoc(doc(db, "users", uuidv4()), {
        ...data,
        timeStamp:serverTimestamp(),
      });
  }catch(err){
    console.log(err)
  }
    };
    const Icon = {
      fontSize:90,
      marginTop:30
    }

  return (
    <div className='hero-container' id='Home'>
        <div className='hero-content'>
            <h1>Progress Made Easy</h1>
            <p>
            Lorem ipsum dolor sit amet. Qui dolore iste et so
            luta atque et explicabo nihil non doloribus
             ducimus est ducimus itaque.  
            </p>
            <div className='blob'></div>
            <div className="bottom">
          <div className="left">
            <file
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
              <div class="input-file-container">  
                <input 
                className="input-file" 
                id="my-file" 
                type="file"
                onChange={(e) => setFile(e.target.files[0])} />
                <label tabindex="0" for="my-file" className="input-file-trigger">
                <p>Select a file</p>
                <div className='iconBorder'>
                <BsCloudUpload style={Icon} />
                </div>
                </label>
             </div>
              </div>

              {userInputs.map((input) => (
                <div className="forminput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                    className='Mail'
                  />
                </div>
              ))}
              <button disabled={per !== null && per < 100} type="submit" className='send'>
                Upload CV
              </button>
            </form>
          </div>
        </div>
        </div>
        <div class="custom-shape-divider-bottom-1656072431">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
  )
}

export default HeroSection