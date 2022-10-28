import React,{useState, useEffect} from 'react'
import './TestimonialAdmin.scss'
import { serverTimestamp} from 'firebase/firestore' 
import { doc, setDoc } from "firebase/firestore"; 
import { db, storage } from '../../Components/firebaseConfig'
import { Inputs } from './testimonialdata';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { BsCloudUpload } from 'react-icons/bs';
import Review from '../../Pages/CVReview';
import Reviews from './review';
import SideBar from '../SideBar/SideBar';
import { Timestamp } from 'firebase/firestore';

const TestimonialsAdmin = () => {

    const [file, setFile] = useState('')
    const [data , setData] = useState('')
    const [per, setPerc] = useState(null)
    const [error , setError]= useState(null)
    
  const types= ['image/jpeg','image/png'];

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
          setData((prev)=>({...prev, img:downloadURL}))
        });
      }
    );
    
        }
          file && uploadFile();
      }, [file]);


    const handleSend= async (e) =>{
        e.preventDefault()
        try{
          // const res=await createUserWithEmailAndPassword(
          //   auth,
          //   data.email,
          //   data.password
          // )
          await setDoc(doc(db, "testimonials", uuidv4()), {
            ...data,
            createdAt: Timestamp.now().toDate().toDateString()
          });
      }catch(err){
        console.log(err)
      }
      }

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
        fontSize:30,
        marginLeft:10
      }

      const handleInput =(e)=>{
        const id = e.target.id;
        const value = e.target.value
    
        setData({...data,[id]: value});
      }

  return (
   
    <div className='TestimonialAdmin'>
      <SideBar />
      <div className='review-container'>
        <div className='test-title'>
            <div className='test-form'>
            <form  onSubmit={handleSend}>
                <div className='test-form'>
                {Inputs.map((input) => (
                <div className="test-inputs" key={input.id}>
                
                    <textarea
                        id={input.id}
                        className={input.className}
                        placeholder={input.placeholder}
                        onChange={handleInput}
                    />
                    </div>
                    ))}  
                </div>
                <div className="input-file-container">  
                    <input 
                    className="input-file" 
                    id="my-file" 
                    type="file"
                    onChange={changeHandler} />
                    <label tabIndex="0" htmlFor="my-file" className="input-file-trigger">
                    <h5>Upload Photo <BsCloudUpload style={Icon} /></h5> 
                    </label>
                </div>
                <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div className='error'>{file.name}</div>}
              </div>
                <div className='submit_button'>
                <button className='sub-btn' type='submit' >submit</button>
                </div>  
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsAdmin