import React from 'react'
import './email.scss'
import { useNavigate } from 'react-router-dom'
import { userInputs } from '../../formSource'
import Checkout from '../../Components/Checkout/Checkout'
import { useState } from 'react';
import { HiX } from 'react-icons/hi'

const Email = ({handleInput, handleSend}) => {
    const navigate=useNavigate()

    const [openModal, setOpenModal] =useState(false)

     const handleLink =()=>{
       window.location.reload()
     }

     const styles={
        fontSize:30
     }


  return (
    <div className='emailModal'> 
    <div className='email-form'>
    <div className='cancel' > <HiX onClick={handleLink} style={styles} /> </div>
    Enter Your Email
    {userInputs.map((input) => (
                <div className="email-forminput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                    className='emailMail'
                    required
                  />
                </div>
              ))}

              <button onClick={()=>{
                setOpenModal(true)
              }}>Next</button>

              
    </div>
    {openModal && <Checkout handleSend={handleSend} setOpenModal={setOpenModal} />}

    </div>
  )
}

export default Email