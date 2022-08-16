// import React, {useState,useEffect} from "react";
// import { storage } from "../../Components/firebaseConfig";
// import { getDownloadURL } from 'firebase/storage';
// import { ref } from "firebase/storage";
// import { db, storage } from '../../Components/firebaseConfig'
// import { onSnapshot } from 'firebase/firestore';
// import { uploadBytesResumable } from "firebase/storage";

// const UseStorage = (file) => {
//     const [progress, setProgress] = useState(0);
//     const [error, setError] = useState(null);
//     const [url, setUrl] = useState(null)

//     useEffect(() => {
//         const storageRef = ref(storage,file.name );
//         const uploadTask = uploadBytesResumable(storageRef, file);

//         uploadTask.on('state_changed', (snapshot) => {
//             let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             setProgress(percentage);
//         },(err) => {
//             setError(err);
//         },async () => {
//             getDownloadURL(storageRef).then((downloadURL) => {
//                 setUrl((prev)=>({...prev, img:downloadURL}))
//               });
//         })
        
//     }, [file]);

//     return { progress, url, error}
// }

// export default UseStorage;