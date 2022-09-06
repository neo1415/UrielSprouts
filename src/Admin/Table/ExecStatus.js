import React,{useState,useEffect} from 'react'
import { CheckBox } from '@mui/icons-material'
import { ref } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { db } from '../../Components/firebaseConfig';
import { CheckCircleRounded } from '@mui/icons-material';
import { CheckCircleOutlineRounded } from '@mui/icons-material';
import { onSnapshot } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';


const ExecStatus = ({data, id}) => {



  const completeTodo = () => {
    const todoRef = (doc(db, "Exec-Registration", id))
    updateDoc(todoRef, { complete: 'Approved',});
    alert('updated')
}


  return (
    <div
    className='todo'>
    <li
        className='list'>
        {
            data.complete ?
            <div style={{display:'flex', flexDirection:'row-reverse'}}>
            
            <CheckCircleRounded className='icon' onClick={completeTodo} fontSize='large' style={{cursor:'pointer', color:'green' , marginRight:10}}
                />
            </div>
              :
              <div style={{display:'flex', flexDirection:'row-reverse'}}>
                
                <CheckCircleOutlineRounded className='icon' onClick={completeTodo} fontSize='large' style={{cursor:'pointer', color:'gold'}}
                />
              </div>
             
        }

        <h5 className={data.complete ? 'complete' : 'pending '}>{data.complete}</h5>
    </li>
</div>
  )
}

export default ExecStatus