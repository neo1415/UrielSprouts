import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import HeroSection from '../../Review-Constants/HeroSection'
import './checkout.scss'
import { userInputs } from './data'
import { PaystackButton } from "react-paystack"

const Checkout = () => {
  const [data, setData] = useState({});
  const publicKey = "pk_live_0afa18997567469cbe8d41896893d8d268ec05e6"
  const amount = 0
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
     <handleSend />,
    onClose: () => alert("Wait! Don't leave :("),
  }

  const handleComplete =(e)=>{
    e.preventDefault()
  }
  return (
    <div className='check'>
      <div className='check_container'>
      <div className="top">
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
                  <div className='back'>
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
          
      </div>
  )
}

export default Checkout;