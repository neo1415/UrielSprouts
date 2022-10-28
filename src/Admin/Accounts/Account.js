import React from 'react'
import './Account.scss'
import DoughnutChart from './DoughnutChart'

const Account = () => {
  return (
    <div className='account'>
        <div className='account-widget' style={{marginLeft:'-10rem'}}>
            <DoughnutChart />
        </div>
    </div>
  )
}

export default Account