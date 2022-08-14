import React from 'react'
import './PriceTable.scss'
import { FaPaperPlane } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PriceTable = () => {
    const cardStyle={
        fontSize:80,
        marginTop:-30,
        color:'white'
    }
    const checkStyle={
        color: 'white',
        fontSize: 24,
        fontWeight:800,
        marginTop:4
    }
  return (
    <div className='price-section'>
    <div className='container-fluid'>
    <div className='price-title'>
        <h2>Our Pricing</h2>
    </div>
    <div className="container-price">
      <div className="row">
        <div className="col-sm-4">
          <div className="Card text-center">
            <div className="title">
              <FaPaperPlane style={cardStyle} />
            </div>
            <div className="price">
              <h4><sup>₦</sup>1000</h4>
            </div>
            <div className="option">
              <ul>
              <li> <FaCheck style={checkStyle} /> Professional review </li>
              <li> <FaCheck style={checkStyle} />  48-hour response </li>
              <li> <FaCheck style={checkStyle} />  Job Offer Guarantee </li>
              <li> <FaCheck style={checkStyle} />  Clean and Reusable </li>
              </ul>
            </div>
            <Link to='/#cvhome'>Send Now</Link>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default PriceTable