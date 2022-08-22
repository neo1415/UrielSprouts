import React, {useState, useEffect} from 'react'
import './Hero.scss'
// import {useNavigate} from 'react-router-dom'
import { serverTimestamp} from 'firebase/firestore' 
import { doc, setDoc } from "firebase/firestore"; 
import { db, storage } from '../../Components/firebaseConfig'
import { userInputs } from '../../formSource'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { BsCloudUpload } from 'react-icons/bs';
import { PaystackButton } from 'react-paystack';
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { Timestamp } from 'firebase/firestore';
import Checkout from '../../Components/Checkout/Checkout';
import { useNavigate } from 'react-router-dom';
import Email from './email';


const HeroSection = () => {

  // checkout states

  // const publicKey = "pk_test_d76efdb1f2965b416262f9d99e8b53ff9e801434"
  // const amount = 1
  // const [email, setEmail] = useState("")
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [openPayment, setOpenPayment] = useState(false)

  // // checkout componentProps

  // const componentProps = {
  //   email,
  //   amount,
  //   metadata: {
  //    firstName,
  //    lastName
  //   },
  //   publicKey,
  //   text: "Pay Now",
  //   onSuccess: () =>
  //    handleSend(),
  //   onClose: () => window.location.reload()
  //   ,
  // }

  // const handleComplete =(e)=>{
  //   e.preventDefault()
  // }



  // hero states

  const [file, setFile] = useState('')
  const [data , setData] = useState('')
  const [per, setPerc] = useState(null)
  const [error , setError]= useState(null)
  const [openModal, setOpenModal] = useState(false);
  
const types= ['application/pdf'];

const navigate= useNavigate()

// storage hooks

  useEffect(() => {
    const uploadFile = () =>{
      const name= new Date().getTime() + file.name

      console.log(name);

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
  const handleSend= async (e) =>{
    try{
      // const res=await createUserWithEmailAndPassword(
      //   auth,
      //   data.email,
      //   data.password
      // )
      await setDoc(doc(db, "users", uuidv4()), {
        ...data,
        createdAt: Timestamp.now().toDate().toString(),
        status:[]
      });
  }catch(err){
    console.log(err)
  }
  }
  
  const handleAdd= async(e) => {
    e.preventDefault()
    // setOpenPayment(!openPayment);
    // document.body.style.overflow = "hidden";   
    navigate='/checkout'
    };
    const changeHandler =(e) =>{
      let selected= e.target.files[0];
    
      if (selected && types.includes(selected.type)){
        setFile(selected)
        setError('');
      }else{
        setFile(null);
        setError('please select a PDF document')
      }
    }
    const Icon = {
      fontSize:90,
      marginTop:30
    }
    // const handleLink =()=>{
    //   window.location.reload()
    // }

  return (
    <div id='hero' className='hero-container'>
        <div className='hero-content'>
            <h1>Review Your Resume</h1>
            <p>IMPROVE YOUR CHANCES OF EMPLOYMENT</p>
            <div className='blob'></div>
            <div className="bottom">
          <div className="right">
            <form onSubmit={handleAdd} >
              <div className="formInput">
              <div className="input-file-container fileLoad">  
                <input 
                className="input-file" 
                id="my-file" 
                type="file"
                onChange={changeHandler} />
                <label tabIndex="0" htmlFor="my-file" className="input-file-trigger">
                <p>Select a file</p>
                <div className='iconBorder'>
                <BsCloudUpload style={Icon} />
                </div>
                </label>
             </div>
              </div>

            
              <div className='Output'>
                {error && <div className='error'>{error}</div>}
                {file && <div className='error'>{file.name}</div>}
              </div>
              <button disabled={per !== null && per < 100} type="submit" className='send' onClick={()=>{
                setOpenModal(true)
              }}>
                Upload CV
              </button>
            </form>
          </div>
        </div>
        </div>

       

              { openModal && <Email handleInput={handleInput} handleSend={handleSend}  />}
        
                {/* checkout form */}
{/* 
    <div   className={` ${openPayment ? 'check':'checkHidden'}`}  id='checkout'>
      <div 
     className='check_container'>
      <div className="Top">
          <h1>Checkout </h1>
        </div>
        <div className="bottom">
          <div className="left">
          </div>
          <div className="right">
            <form  onSubmit={handleComplete}>

                <div className="formInput" key='first name'>
                  <input
                    id='first name'
                    type='text'
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    id='last name '
                    type='text'
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input
                    id='email'
                    type='mail'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              <div className='submit_button'>
                  <Link to='/review'>
                  <div  onClick={handleLink} className='back'>
                    <BsArrowLeft />
                    <p>Go Back</p> 
                  </div>             
                    </Link>
                    <PaystackButton {...componentProps} />
              </div>  
            </form>
          </div>
        </div>
      </div>
          
      </div> */}


        <div className="custom-shape-divider-bottom-1656072431">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
      </div>
  )
}


export default HeroSection