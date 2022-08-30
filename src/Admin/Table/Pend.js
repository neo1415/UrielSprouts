import React from 'react'

import { CheckCircleRounded } from '@mui/icons-material';
import { CheckCircleOutlineRounded } from '@mui/icons-material';


const Pend = ({completeTodo, data}) => {
  return (
    <div>

<li
        className='list'>
        {
            data.complete ?
            <div style={{display:'flex', flexDirection:'row-reverse'}}>
            <p>Approved</p>
            <CheckCircleRounded className='icon' onClick={completeTodo} fontSize='large' style={{cursor:'pointer', color:'green'}}
                />
            </div>
              :
              <div style={{display:'flex', flexDirection:'row-reverse'}}>
                <p>Pending</p>
                <CheckCircleOutlineRounded className='icon' onClick={completeTodo} fontSize='large' style={{cursor:'pointer', color:'gold'}}
                />
              </div>
             
        }

        <h5 className={data.complete ? 'complete' : 'pending  '}>{data.complete}</h5>
    </li>

    </div>
  )
}

export default Pend