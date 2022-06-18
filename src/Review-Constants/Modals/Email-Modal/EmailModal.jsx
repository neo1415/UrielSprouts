// import React,{useState} from 'react'
// import { db } from '../../../Components/firebase'

// const EmailModal = () => {
//     const [email, setEmail]= useState()
//     const sendMail=(e)=>{
//         e.preventDefault();
        
//         db.collection('contacts').add({
//             email:email
//           }).then(()=>{
//             console.log('email submitted')
//           })
//           .catch((error)=>{
//             console.log('error')
//           })

//     }
//   return (
//     <div className='modalBackground'>
//         <div className='modalContainer'>
//             <button>X</button>
//             <div className='Title'>
//                 <h1>Where Would You Like Us to Send it to</h1>
//             </div>
//             <div className='body'>
//             <p>We Will get back to you within 48 hours</p>
//                 <input type='email' value={email} placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
//             </div>
//             <div className='footer'>
//                 <button onClick={sendMail()}>Submit</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default EmailModal