import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import './checkout.scss'
import { useNavigate } from 'react-router-dom'
import { PaystackButton } from "react-paystack"
import { HiX } from 'react-icons/hi';

const Checkout = ({handleSend, setOpenModal}) => {
  const publicKey = "pk_test_d76efdb1f2965b416262f9d99e8b53ff9e801434"
  const amount = 1
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")


  const componentProps = {
    email,
    amount,
    metadata: {
     firstName,
     lastName
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
     handleSend(),
    onClose: () => alert("Wait! Don't leave :("),
  }

  const handleComplete =(e)=>{
    e.preventDefault()
  }

const navigate=useNavigate()

const goBack=()=>{
  navigate('/review')
}

  return (
    <div className='check'>

      <div className="check-top">
     
          <h1>Checkout </h1>
        </div>
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
                  <div className='back'>
                    <BsArrowLeft />
                    <p  onClick={()=>{setOpenModal(false)}}>Go Back</p> 
                  </div>             
                    </Link>
                    <PaystackButton {...componentProps} />
              </div>  
            </form>
          </div>
          
  )
}

export default Checkout;