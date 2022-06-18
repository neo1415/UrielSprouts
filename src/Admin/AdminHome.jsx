import React from 'react'
import './AdminHome.scss'
import List from './Table/Table';

const adminHome = () => {
  return (
    <div className='listContainer'>
        <div className='listTitle'>Latest Transactions</div>
        <List />
    </div>
  )
}

export default adminHome