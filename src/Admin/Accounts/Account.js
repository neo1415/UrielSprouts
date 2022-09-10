import React from 'react'
import './Account.scss'
import DoughnutChart from './DoughnutChart'

const Account = () => {
  return (
    <div className='account'>
        <div className='account-widget'>
            <DoughnutChart />
        </div>
    </div>
  )
}

export default Account